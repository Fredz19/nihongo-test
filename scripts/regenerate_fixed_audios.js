import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || "";
const VOICE_ID = process.env.VITE_ELEVENLABS_VOICE_ID || "pNInz6obpgDQGcFmaJgB";
const BUCKET_NAME = "jlpt-audio";

if (!supabaseUrl || !supabaseKey || !ELEVENLABS_API_KEY) {
  console.error("❌ Error: Credentials or ElevenLabs key not found in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generateTTSBuffer(text) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`ElevenLabs API Error: ${response.status} - ${errText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function run() {
  console.log('Fetching fixed vocabulary items from database...');
  
  // Define the 80 IDs that were fixed
  const targetIds = [];
  for (let i = 565; i <= 644; i++) {
    targetIds.push(`v_n4_auto_${i}`);
  }
  
  const { data: vocabs, error: fetchError } = await supabase
    .from('vocabularies')
    .select('id, level, kanji, kana')
    .in('id', targetIds);
    
  if (fetchError) {
    console.error('❌ Error fetching fixed rows:', fetchError.message);
    return;
  }
  
  // Check if any are still 'undefined' to make sure the user ran the SQL fix first
  const unconfirmed = vocabs.filter(v => v.kana === 'undefined');
  if (unconfirmed.length > 0) {
    console.error('❌ Aborting: Some rows are still "undefined" in the database.');
    console.error('Please run the SQL fix script (supabase_fix_undefined_vocab.sql) in your Supabase Console SQL Editor first!');
    process.exit(1);
  }
  
  console.log(`Confirmed! All ${vocabs.length} rows have been successfully updated in the database.`);
  
  // 1. Delete old wrong files from storage
  console.log('Deleting wrong audio files from storage...');
  const filesToDelete = targetIds.map(id => `${id}.mp3`);
  const { error: deleteError } = await supabase.storage
    .from(BUCKET_NAME)
    .remove(filesToDelete);
    
  if (deleteError) {
    console.warn('⚠️ Storage deletion warning:', deleteError.message);
  } else {
    console.log(`✅ Successfully deleted ${filesToDelete.length} temporary files.`);
  }
  
  // 2. Generate correct audio files
  console.log(`Generating correct Haruna audio files for ${vocabs.length} words...`);
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < vocabs.length; i++) {
    const vocab = vocabs[i];
    const fileName = `${vocab.id}.mp3`;
    const textToSpeak = vocab.kana;
    
    console.log(`[${i + 1}/${vocabs.length}] Generating for: "${vocab.kanji || vocab.kana}" (${textToSpeak})...`);
    
    try {
      const buffer = await generateTTSBuffer(textToSpeak);
      
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(fileName, buffer, {
          contentType: 'audio/mpeg',
          upsert: true
        });
        
      if (uploadError) {
        throw new Error(`Upload Error: ${uploadError.message}`);
      }
      
      console.log(`   ✅ Success! Uploaded ${fileName}`);
      successCount++;
      await delay(300);
    } catch (err) {
      console.error(`   ❌ Failed for "${vocab.kanji || vocab.kana}":`, err.message);
      failCount++;
      await delay(2000);
    }
  }
  
  console.log('\n==============================================');
  console.log('🎉 Audio Regeneration Finished!');
  console.log('==============================================');
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log('==============================================\n');
}

run();

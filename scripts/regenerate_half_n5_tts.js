import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || "";
const VOICE_ID = "IIUvcn96WSMnC5WxNypI"; // Hanako
const MODEL_ID = "eleven_v3"; // ElevenLabs V3
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
      text: `[thoughtful] ${text}`,
      model_id: MODEL_ID,
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
  console.log('Fetching N5 vocabulary items from database...');
  
  let vocabs = [];
  let from = 0;
  let step = 200;
  let hasMore = true;
  
  // We need exactly 415 items (half of 830)
  const targetCount = 415;

  while (hasMore && vocabs.length < targetCount) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana')
      .eq('level', 'N5')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
      
    if (error) {
      console.error('❌ Error fetching N5 vocab:', error.message);
      return;
    }
    
    if (!data || data.length === 0) {
      hasMore = false;
    } else {
      vocabs = vocabs.concat(data);
      from += step;
      if (data.length < step) {
        hasMore = false;
      }
    }
  }

  // Slice to exactly the first 415 items
  const toProcessAll = vocabs.slice(0, targetCount);
  console.log(`Total N5 items fetched: ${vocabs.length}`);
  console.log(`We will process the first ${toProcessAll.length} items.`);

  // Parse limit from CLI arguments for testing (e.g. node script.js --limit=2)
  let toProcess = toProcessAll;
  const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
  if (limitArg) {
    const limitVal = parseInt(limitArg.split('=')[1], 10);
    if (!isNaN(limitVal)) {
      console.log(`⚠️ Applying limit of ${limitVal} items from command line.`);
      toProcess = toProcessAll.slice(0, limitVal);
    }
  }

  console.log(`Preparing to process ${toProcess.length} vocabulary audio files using ElevenLabs V3 (Hanako) with [thoughtful] style...`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < toProcess.length; i++) {
    const vocab = toProcess[i];
    const fileName = `${vocab.id}.mp3`;
    const textToSpeak = vocab.kana;
    
    console.log(`[${i + 1}/${toProcess.length}] [${vocab.id}] Generating for: "${vocab.kanji || vocab.kana}" (${textToSpeak})...`);
    
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
      await delay(500); // 500ms pause to respect API rate limits
    } catch (err) {
      console.error(`   ❌ Failed for "${vocab.kanji || vocab.kana}":`, err.message);
      failCount++;
      await delay(2000); // Wait longer on error
    }
  }
  
  console.log('\n==============================================');
  console.log('🎉 TTS Regeneration Completed!');
  console.log('==============================================');
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log('==============================================\n');
}

run();

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || "";
const VOICE_ID = "IIUvcn96WSMnC5WxNypI"; // Hanako
const MODEL_ID = "eleven_v3"; // ElevenLabs V3
const BUCKET_NAME = "jlpt-audio";

const SQL_FIX_PATH = path.join(__dirname, '..', 'supabase_fix_undefined_vocab.sql');

if (!supabaseUrl || !supabaseKey || !ELEVENLABS_API_KEY) {
  console.error("❌ Error: Credentials or ElevenLabs key not found in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Parse the IDs that were fixed from the SQL file
function getFixedIds() {
  const ids = [];
  if (!fs.existsSync(SQL_FIX_PATH)) {
    console.error(`❌ SQL fix file not found at ${SQL_FIX_PATH}`);
    process.exit(1);
  }

  const content = fs.readFileSync(SQL_FIX_PATH, 'utf-8');
  const lines = content.split('\n');
  for (const line of lines) {
    // Match line: ('v_n4_auto_565', 'N4', ...
    const match = line.match(/'(v_n4_auto_\d+)'/);
    if (match) {
      ids.push(match[1]);
    }
  }

  console.log(`ℹ️ Found ${ids.length} IDs to regenerate from SQL fix file.`);
  return ids;
}

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
  try {
    const fixedIds = getFixedIds();
    
    console.log('📥 Fetching updated vocab data from database...');
    const { data: vocabs, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana')
      .in('id', fixedIds);

    if (error) {
      throw new Error(`Error fetching updated data: ${error.message}`);
    }

    console.log(`✅ Loaded ${vocabs.length} records from database.`);

    // Check if database still has "undefined" values
    const stillUndefined = vocabs.filter(v => v.kana === 'undefined');
    if (stillUndefined.length > 0) {
      console.error(`\n⚠️ ERROR: ${stillUndefined.length} items still have 'undefined' kana in the database!`);
      console.error(`   Did you forget to run the SQL fix script in your Supabase SQL Editor?`);
      console.error(`   Please run supabase_fix_undefined_vocab.sql in Supabase first, then retry this script.\n`);
      process.exit(1);
    }

    console.log(`\n==============================================`);
    console.log(`🎙️  Regenerating audio for ${vocabs.length} fixed N4 words`);
    console.log(`   Voice: Hanako (${VOICE_ID})`);
    console.log(`   Model: ${MODEL_ID}`);
    console.log(`==============================================\n`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < vocabs.length; i++) {
      const vocab = vocabs[i];
      const fileName = `${vocab.id}.mp3`;
      const textToSpeak = vocab.kana;

      console.log(`[${i + 1}/${vocabs.length}] [${vocab.id}] Upgrading audio for: "${vocab.kanji || vocab.kana}" (${textToSpeak})...`);

      try {
        const audioBuffer = await generateTTSBuffer(textToSpeak);

        // Upload with upsert: true to overwrite the "undefined" sound files
        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, audioBuffer, {
            contentType: 'audio/mpeg',
            upsert: true
          });

        if (uploadError) {
          throw new Error(`Upload Error: ${uploadError.message}`);
        }

        console.log(`   ✅ Audio successfully overwritten: ${fileName}`);
        successCount++;
        await delay(300);
      } catch (err) {
        console.error(`   ❌ Failed for "${vocab.kanji || vocab.kana}":`, err.message);
        failCount++;
        await delay(2000);
      }
    }

    console.log('\n==============================================');
    console.log('🎉 Audio regeneration for fixed N4 words completed!');
    console.log('==============================================');
    console.log(`Total processed : ${vocabs.length}`);
    console.log(`✅ Success       : ${successCount}`);
    console.log(`❌ Failed        : ${failCount}`);
    console.log('==============================================\n');

  } catch (err) {
    console.error('❌ Primary execution error:', err.message);
  }
}

run();

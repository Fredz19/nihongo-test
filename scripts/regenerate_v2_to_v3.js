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

const HANAKO_LIST_PATH = 'C:/Users/ASUS/.gemini/antigravity/brain/fcefaeab-28e9-410a-9467-3384664a3d83/hanako_vocab_list.md';

if (!supabaseUrl || !supabaseKey || !ELEVENLABS_API_KEY) {
  console.error("❌ Error: Credentials or ElevenLabs key not found in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Step 1: Parse already migrated Hanako N5 IDs from the markdown file
function getAlreadyMigratedIds() {
  const migrated = new Set();
  if (!fs.existsSync(HANAKO_LIST_PATH)) {
    console.warn(`⚠️ Warning: Hanako N5 list file not found at ${HANAKO_LIST_PATH}. We will regenerate all N5 and N4.`);
    return migrated;
  }

  const content = fs.readFileSync(HANAKO_LIST_PATH, 'utf-8');
  const lines = content.split('\n');
  for (const line of lines) {
    // Matches: | 1 | `v_n5_1` | ...
    const match = line.match(/`v_n5_(?:auto_)?\d+`/);
    if (match) {
      // Clean backticks
      const cleanId = match[0].replace(/`/g, '');
      migrated.add(cleanId);
    }
  }

  console.log(`ℹ️ Parsed ${migrated.size} already-migrated Hanako N5 IDs.`);
  return migrated;
}

async function fetchN4N5Vocab() {
  console.log('📥 Fetching N4 and N5 vocabularies from Supabase...');
  let vocabs = [];
  
  // Fetch N5
  let from = 0;
  let step = 200;
  let hasMore = true;
  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana')
      .eq('level', 'N5')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
    if (error) {
      console.error('Error fetching N5:', error);
      break;
    }
    if (!data || data.length === 0) hasMore = false;
    else {
      vocabs = vocabs.concat(data);
      from += step;
      if (data.length < step) hasMore = false;
    }
  }

  // Fetch N4
  from = 0;
  hasMore = true;
  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana')
      .eq('level', 'N4')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
    if (error) {
      console.error('Error fetching N4:', error);
      break;
    }
    if (!data || data.length === 0) hasMore = false;
    else {
      vocabs = vocabs.concat(data);
      from += step;
      if (data.length < step) hasMore = false;
    }
  }

  console.log(`✅ Ditemukan total ${vocabs.length} kosakata (N5 & N4).`);
  return vocabs;
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
    const migratedIds = getAlreadyMigratedIds();
    const vocabs = await fetchN4N5Vocab();

    // Filter out already migrated N5s
    const toProcess = vocabs.filter(v => {
      if (v.level === 'N5' && migratedIds.has(v.id)) {
        return false; // Skip, already migrated
      }
      return true; // Process N4 and remaining N5s
    });

    console.log(`\n==============================================`);
    console.log(`🎙️  ElevenLabs V2 -> V3 TTS Upgrader`);
    console.log(`   Voice: Hanako (${VOICE_ID}) with [thoughtful] style`);
    console.log(`   Model: ${MODEL_ID}`);
    console.log(`==============================================\n`);
    console.log(`🎯 Jumlah kosakata yang perlu di-upgrade: ${toProcess.length}`);

    if (toProcess.length === 0) {
      console.log('✅ Semua kosakata N4 dan N5 sudah menggunakan model Eleven V3!');
      return;
    }

    // Parse CLI limit and start for testing
    let processList = toProcess;
    const startArg = process.argv.find(arg => arg.startsWith('--start='));
    const limitArg = process.argv.find(arg => arg.startsWith('--limit='));

    if (startArg) {
      const startVal = parseInt(startArg.split('=')[1], 10);
      if (!isNaN(startVal)) {
        console.log(`⏩ Skipping first ${startVal} words (--start).`);
        processList = processList.slice(startVal);
      }
    }

    if (limitArg) {
      const limitVal = parseInt(limitArg.split('=')[1], 10);
      if (!isNaN(limitVal)) {
        console.log(`🔢 Applying limit of ${limitVal} words (--limit).`);
        processList = processList.slice(0, limitVal);
      }
    }

    console.log(`🎯 Perlu memproses ${processList.length} kata dalam sesi ini.`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < processList.length; i++) {
      const vocab = processList[i];
      const fileName = `${vocab.id}.mp3`;
      const textToSpeak = vocab.kana;

      console.log(`[${i + 1}/${processList.length}] [${vocab.level}] [${vocab.id}] Upgrading: "${vocab.kanji || vocab.kana}" (${textToSpeak})...`);

      try {
        const audioBuffer = await generateTTSBuffer(textToSpeak);

        // Upload to Supabase Storage with upsert: true to overwrite
        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, audioBuffer, {
            contentType: 'audio/mpeg',
            upsert: true
          });

        if (uploadError) {
          throw new Error(`Supabase Upload Error: ${uploadError.message}`);
        }

        console.log(`   ✅ Berhasil di-upgrade: ${fileName}`);
        successCount++;

        // 300ms pause to respect rate limits
        await delay(300);
      } catch (err) {
        console.error(`   ❌ Gagal untuk "${vocab.kanji || vocab.kana}":`, err.message);
        failCount++;
        await delay(2000); // Pause longer on error
      }
    }

    console.log('\n==============================================');
    console.log('🎉 TTS Upgrade N4 & N5 Selesai!');
    console.log('==============================================');
    console.log(`Total diproses : ${processList.length}`);
    console.log(`✅ Berhasil    : ${successCount}`);
    console.log(`❌ Gagal       : ${failCount}`);
    console.log('==============================================\n');

  } catch (err) {
    console.error('❌ Primary execution error:', err.message);
  }
}

run();

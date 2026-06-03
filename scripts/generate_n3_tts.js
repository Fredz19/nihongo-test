import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || "";
const VOICE_ID = process.env.VITE_ELEVENLABS_VOICE_ID || "c2XJrw7TvNGtOc6r0ijG";
const BUCKET_NAME = "jlpt-audio";
// ElevenLabs model: eleven_v3 (Evelyne v3)
const ELEVENLABS_MODEL = "eleven_v3";

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required in .env.local");
  process.exit(1);
}

if (!ELEVENLABS_API_KEY) {
  console.error("❌ Error: VITE_ELEVENLABS_API_KEY is required in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Helper to delay between requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchN3Vocab() {
  console.log('📥 Fetching N3 vocabularies from Supabase...');
  let vocabs = [];
  let from = 0;
  const step = 200;
  let hasMore = true;

  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana, meaning')
      .eq('level', 'N3')
      .order('id', { ascending: true })
      .range(from, from + step - 1);

    if (error) {
      console.error('Error fetching N3:', error);
      break;
    }
    if (!data || data.length === 0) {
      hasMore = false;
    } else {
      vocabs = vocabs.concat(data);
      from += step;
      if (data.length < step) hasMore = false;
    }
  }

  console.log(`✅ Ditemukan ${vocabs.length} kosakata N3.`);
  return vocabs;
}

async function listExistingAudioFiles() {
  console.log('📂 Fetching existing audio files from bucket...');
  let existingFiles = new Set();
  let offset = 0;
  const limit = 1000;
  let hasMore = true;

  while (hasMore) {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list('', { limit, offset, sortBy: { column: 'name', order: 'asc' } });

    if (error) {
      console.error('Error listing bucket files:', error);
      break;
    }

    if (!data || data.length === 0) {
      hasMore = false;
    } else {
      data.forEach(file => existingFiles.add(file.name));
      offset += data.length;
      if (data.length < limit) hasMore = false;
    }
  }

  console.log(`📊 Ditemukan ${existingFiles.size} file audio yang sudah ada di bucket.`);
  return existingFiles;
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
      text: text,
      model_id: ELEVENLABS_MODEL,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true,
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
    console.log('\n==============================================');
    console.log('🎙️  ElevenLabs N3 TTS Generator');
    console.log(`   Model: ${ELEVENLABS_MODEL}`);
    console.log(`   Voice ID: ${VOICE_ID}`);
    console.log('==============================================\n');

    const vocabs = await fetchN3Vocab();
    const existingAudio = await listExistingAudioFiles();

    let toProcess = vocabs.filter(v => !existingAudio.has(`${v.id}.mp3`));

    // Parse CLI arguments for limit and offset
    const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
    const startArg = process.argv.find(arg => arg.startsWith('--start='));

    if (startArg) {
      const startVal = parseInt(startArg.split('=')[1], 10);
      if (!isNaN(startVal)) {
        console.log(`⏩ Skipping first ${startVal} words (--start arg).`);
        toProcess = toProcess.slice(startVal);
      }
    }

    if (limitArg) {
      const limitVal = parseInt(limitArg.split('=')[1], 10);
      if (!isNaN(limitVal)) {
        console.log(`🔢 Applying limit of ${limitVal} words (--limit arg).`);
        toProcess = toProcess.slice(0, limitVal);
      }
    }

    console.log(`\n🎯 Perlu generate TTS untuk ${toProcess.length} kosakata N3.`);

    if (toProcess.length === 0) {
      console.log('✅ Semua kosakata N3 sudah memiliki file audio!');
      return;
    }

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < toProcess.length; i++) {
      const vocab = toProcess[i];
      const fileName = `${vocab.id}.mp3`;
      // Use kana for pronunciation (most reliable for Japanese TTS)
      const textToSpeak = vocab.kana;

      console.log(`[${i + 1}/${toProcess.length}] ⏳ "${vocab.kanji || vocab.kana}" (${textToSpeak})...`);

      try {
        // Generate TTS from ElevenLabs eleven_multilingual_v3
        const audioBuffer = await generateTTSBuffer(textToSpeak);

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, audioBuffer, {
            contentType: 'audio/mpeg',
            upsert: true
          });

        if (uploadError) {
          throw new Error(`Supabase Upload Error: ${uploadError.message}`);
        }

        console.log(`   ✅ Berhasil: ${fileName}`);
        successCount++;

        // 300ms delay to respect ElevenLabs rate limits
        await delay(300);
      } catch (err) {
        console.error(`   ❌ Gagal untuk "${vocab.kanji || vocab.kana}":`, err.message);
        failCount++;
        // Longer pause on error
        await delay(2000);
      }
    }

    console.log('\n==============================================');
    console.log('🎉 TTS Generation N3 Selesai!');
    console.log('==============================================');
    console.log(`Total diproses : ${toProcess.length}`);
    console.log(`✅ Berhasil    : ${successCount}`);
    console.log(`❌ Gagal       : ${failCount}`);
    console.log('==============================================\n');

  } catch (err) {
    console.error('❌ Primary execution error:', err.message);
  }
}

run();

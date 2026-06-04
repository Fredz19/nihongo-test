import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;
const VOICE_ID = 'IIUvcn96WSMnC5WxNypI'; // Hanako (thoughtful)
const MODEL_ID = 'eleven_v3';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!ELEVENLABS_API_KEY) {
  console.error("❌ Error: ElevenLabs API Key tidak ditemukan di .env.local!");
  process.exit(1);
}

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Supabase URL/Key tidak ditemukan di .env.local!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const BUCKET_NAME = 'jlpt-audio';
const LEVEL = 'N5-Reading';

const READING_JSON_PATH = path.join(__dirname, 'data', 'n5_reading.json');
const CACHE_DIR = path.join(__dirname, '..', 'audio_cache_files', 'n5_reading');

// Create cache directory if it doesn't exist
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Helper to delay between requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generateTTS(text, outputFilename) {
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
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(outputFilename, buffer);
  return buffer;
}

async function uploadToSupabase(fileName, fileBuffer) {
  const uploadPath = `${LEVEL}/${fileName}`;
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(uploadPath, fileBuffer, {
      contentType: 'audio/mpeg',
      upsert: true
    });

  if (error) {
    throw new Error(`Supabase Upload Error: ${error.message}`);
  }

  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(uploadPath);
  return data.publicUrl;
}

async function run() {
  try {
    if (!fs.existsSync(READING_JSON_PATH)) {
      throw new Error(`File ${READING_JSON_PATH} tidak ditemukan!`);
    }

    const readingData = JSON.parse(fs.readFileSync(READING_JSON_PATH, 'utf-8'));
    console.log(`\n==============================================`);
    console.log(`🎙️  ElevenLabs N5 Reading TTS Generator`);
    console.log(`==============================================`);
    console.log(`Model: ${MODEL_ID}`);
    console.log(`Voice ID: ${VOICE_ID} (Hanako)`);
    console.log(`Jumlah Soal Total: ${readingData.length}`);
    console.log(`Akan diproses: 18 soal pertama (Try Out A, B, C)`);
    console.log(`==============================================\n`);

    const limit = 18;
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < limit; i++) {
      const q = readingData[i];
      const text = q.passage;
      if (!text) {
        console.log(`[Soal ${i + 1}/${limit}] ⚠️ Lewati (Tidak ada passage)`);
        continue;
      }

      const fileName = `n5_reading_q${i + 1}.mp3`;
      const localPath = path.join(CACHE_DIR, fileName);

      console.log(`[Soal ${i + 1}/${limit}] Memproses passage: "${text.substring(0, 30)}..."`);

      let buffer;
      // 1. Generate TTS locally or read from cache
      if (fs.existsSync(localPath)) {
        console.log(`   ⏭️  Menggunakan file cache lokal.`);
        buffer = fs.readFileSync(localPath);
      } else {
        console.log(`   ⏳ Mengirim request ke ElevenLabs...`);
        try {
          buffer = await generateTTS(text, localPath);
          console.log(`   ✅ Berhasil disintesis secara lokal.`);
          successCount++;
          await delay(1000); // delay 1s to respect API rate limits
        } catch (err) {
          console.error(`   ❌ Gagal ElevenLabs: ${err.message}`);
          failCount++;
          await delay(2000);
          continue;
        }
      }

      // 2. Upload to Supabase Storage
      try {
        console.log(`   ⏳ Mengunggah ke Supabase Storage...`);
        const publicUrl = await uploadToSupabase(fileName, buffer);
        console.log(`   ✅ Upload sukses. URL: ${publicUrl}`);
        
        // 3. Update JSON structure
        q.audio_url = publicUrl;
      } catch (err) {
        console.error(`   ❌ Gagal Upload/Update: ${err.message}`);
        failCount++;
      }
    }

    // Save updated JSON
    fs.writeFileSync(READING_JSON_PATH, JSON.stringify(readingData, null, 2), 'utf-8');
    console.log(`\n==============================================`);
    console.log(`🎉 Pemrosesan Audio Selesai!`);
    console.log(`- File data n5_reading.json telah diperbarui.`);
    console.log(`- Sukses/Cache: ${limit - failCount}`);
    console.log(`- Gagal: ${failCount}`);
    console.log(`==============================================\n`);

  } catch (err) {
    console.error(`❌ Terjadi kesalahan:`, err.message);
  }
}

run();

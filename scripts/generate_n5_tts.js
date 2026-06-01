import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Setup ElevenLabs API Configuration
// You can set VITE_ELEVENLABS_API_KEY in .env.local or paste it below
const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY || "";
const VOICE_ID = process.env.VITE_ELEVENLABS_VOICE_ID || "pNInz6obpgDQGcFmaJgB"; // Loaded dynamically from environment or falls back to Adam's working ID

if (!ELEVENLABS_API_KEY) {
  console.error("❌ Error: ElevenLabs API Key tidak ditemukan!");
  console.error("Silakan tambahkan VITE_ELEVENLABS_API_KEY=your_api_key ke dalam file .env.local atau masukkan langsung dalam script.");
  process.exit(1);
}

const KANA_LIST_PATH = path.join(__dirname, '..', 'kana_list.txt');
const OUTPUT_DIR = path.join(__dirname, '..', 'audio_cache_files');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to delay between requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generateTTS(text, filename) {
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
    throw new Error(`API Error: ${response.status} - ${errText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(filename, buffer);
}

async function run() {
  try {
    if (!fs.existsSync(KANA_LIST_PATH)) {
      throw new Error(`File ${KANA_LIST_PATH} tidak ditemukan!`);
    }

    const content = fs.readFileSync(KANA_LIST_PATH, 'utf-8');
    const words = content.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    console.log(`\n==============================================`);
    console.log(`🎙️  ElevenLabs N5 TTS Generator`);
    console.log(`==============================================`);
    console.log(`Ditemukan ${words.length} kosakata dalam kana_list.txt.`);
    console.log(`Direktori output: ${OUTPUT_DIR}\n`);

    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const sanitizedWord = word.replace(/[\\/:*?"<>|]/g, "_");
      const outputFilename = path.join(OUTPUT_DIR, `${sanitizedWord}.mp3`);

      // Skip if already generated to allow resuming interrupted runs
      if (fs.existsSync(outputFilename)) {
        console.log(`[${i + 1}/${words.length}] ⏭️  Skipped (sudah ada): ${sanitizedWord}.mp3`);
        skippedCount++;
        continue;
      }

      console.log(`[${i + 1}/${words.length}] ⏳ Menghasilkan TTS untuk: "${word}"...`);
      
      try {
        await generateTTS(word, outputFilename);
        console.log(`   ✅ Berhasil disimpan ke: ${word}.mp3`);
        successCount++;
        
        // Wait 300ms to avoid overwhelming the API rate limits
        await delay(300);
      } catch (err) {
        console.error(`   ❌ Gagal untuk "${word}":`, err.message);
        failCount++;
        
        // Wait longer on error before retrying
        await delay(2000);
      }
    }

    console.log(`\n==============================================`);
    console.log(`🎉 Proses Selesai!`);
    console.log(`==============================================`);
    console.log(`- Berhasil: ${successCount}`);
    console.log(`- Dilewati: ${skippedCount}`);
    console.log(`- Gagal: ${failCount}`);
    console.log(`Semua file tersimpan di: ${OUTPUT_DIR}`);
    console.log(`==============================================\n`);

  } catch (err) {
    console.error(`❌ Terjadi kesalahan utama:`, err.message);
  }
}

run();

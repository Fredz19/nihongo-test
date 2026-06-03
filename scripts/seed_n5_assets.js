import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Jimp } from 'jimp';

// Muat variabel lingkungan
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY belum di-set di file .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET_NAME = "jlpt-audio";
const LEVEL = "N5";

// Path lokal
const AUDIO_DIR = path.resolve('..', 'JLPT_Super_Moshi_N4.N5-AudioCD2');
const TEMP_DIR = path.resolve('scripts', 'temp_crops_n5');

const CROP_COORDINATES = {
  // Mondai 1
  "n5_m1_q01": { page: "page_45.png", x: 100, y: 470, w: 1200, h: 500 },
  "n5_m1_q04": { page: "page_45.png", x: 1500, y: 400, w: 1250, h: 1250 },
  "n5_m1_q05": { page: "page_46.png", x: 100, y: 150, w: 1200, h: 800 },
  "n5_m1_q06": { page: "page_46.png", x: 100, y: 1050, w: 1200, h: 850 },
  "n5_m1_q07": { page: "page_46.png", x: 1500, y: 140, w: 1200, h: 1700 },
  // Mondai 2
  "n5_m2_q04": { page: "page_47.png", x: 1500, y: 380, w: 1250, h: 1450 },
  // Mondai 3
  "n5_m3_q01": { page: "page_48.png", x: 1500, y: 360, w: 1250, h: 1450 },
  "n5_m3_q02": { page: "page_49.png", x: 100, y: 130, w: 1250, h: 800 },
  "n5_m3_q03": { page: "page_49.png", x: 100, y: 1000, w: 1250, h: 850 },
  "n5_m3_q04": { page: "page_49.png", x: 1500, y: 120, w: 1250, h: 800 },
  "n5_m3_q05": { page: "page_49.png", x: 1500, y: 1000, w: 1250, h: 850 }
};

const tracksNeeded = [
  2, 3, 4, 5, 6, 7, 8, // Mondai 1
  10, 11, 12, 13, 14, 15, // Mondai 2
  17, 18, 19, 20, 21, // Mondai 3
  23, 24, 25, 26, 27, 28 // Mondai 4
];

async function run() {
  console.log("🏁 Memulai Pemrosesan Aset N5 Listening...");

  // 1. Buat folder temp
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  // 2. Cropping visual options
  console.log("\n✂️ Memotong opsi visual dari berkas halaman PDF...");
  const imageUrls = {};

  for (const [key, coord] of Object.entries(CROP_COORDINATES)) {
    const pagePath = path.resolve(coord.page);
    
    if (!fs.existsSync(pagePath)) {
      console.warn(`   ⚠️ Berkas halaman ${coord.page} tidak ditemukan! Melewati cropping untuk ${key}.`);
      continue;
    }

    try {
      console.log(`   📸 Memotong ${key} dari ${coord.page}...`);
      const image = await Jimp.read(pagePath);
      image.crop({ x: coord.x, y: coord.y, w: coord.w, h: coord.h });
      
      const tempPath = path.join(TEMP_DIR, `${key}.png`);
      await image.write(tempPath);

      // Upload ke Supabase
      const fileBuffer = fs.readFileSync(tempPath);
      const storagePath = `N5-Moshi/images/${key}.png`;

      process.stdout.write(`   ☁️ Mengunggah ${key}.png ke Supabase... `);
      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });

      if (error) {
        console.log(`❌ Gagal: ${error.message}`);
      } else {
        const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
        imageUrls[key] = data.publicUrl;
        console.log(`✅ Sukses -> ${data.publicUrl}`);
      }
    } catch (err) {
      console.error(`   ❌ Gagal memotong/mengunggah ${key}:`, err.message);
    }
  }

  // 3. Upload Audio Tracks
  console.log("\n🎵 Memproses berkas audio CD-2...");
  const audioUrls = {};

  if (!fs.existsSync(AUDIO_DIR)) {
    console.error(`❌ Folder audio tidak ditemukan di: ${AUDIO_DIR}`);
    process.exit(1);
  }

  const audioFiles = fs.readdirSync(AUDIO_DIR);

  for (const trackNum of tracksNeeded) {
    const filePrefix = String(trackNum).padStart(2, '0');
    const matchedFile = audioFiles.find(file => file.startsWith(filePrefix) && file.toLowerCase().endsWith('.mp3'));

    if (!matchedFile) {
      console.warn(`   ⚠️ File audio untuk track ${trackNum} (prefix: ${filePrefix}) tidak ditemukan!`);
      continue;
    }

    const localFilePath = path.join(AUDIO_DIR, matchedFile);
    const fileBuffer = fs.readFileSync(localFilePath);
    
    const standardizedName = `n5_m1_track_${String(trackNum).padStart(2, '0')}.mp3`;
    const storagePath = `N5-Moshi/${standardizedName}`;

    process.stdout.write(`   ☁️ Mengunggah ${matchedFile} sebagai ${standardizedName}... `);

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: 'audio/mpeg',
        upsert: true
      });

    if (error) {
      console.log(`❌ Gagal: ${error.message}`);
    } else {
      const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
      audioUrls[trackNum] = data.publicUrl;
      console.log(`✅ Sukses -> ${data.publicUrl}`);
    }
  }

  // 4. Bersihkan temp folder
  console.log("\n🧹 Membersihkan berkas temporer...");
  if (fs.existsSync(TEMP_DIR)) {
    const files = fs.readdirSync(TEMP_DIR);
    for (const file of files) {
      fs.unlinkSync(path.join(TEMP_DIR, file));
    }
    fs.rmdirSync(TEMP_DIR);
    console.log("   ✅ Berhasil membersihkan temp_crops_n5.");
  }

  console.log("\n🏁 Selesai memproses aset N5 Listening!");
}

run();

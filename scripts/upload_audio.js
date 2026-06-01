import { createClient } from '@supabase/supabase-js';
import AdmZip from 'adm-zip';
import dotenv from 'dotenv';
import path from 'path';

// Muat variabel lingkungan dari .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY belum di-set di file .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// URL audio N4 dari Japan Times "Best Practice Tests"
const AUDIO_ZIP_URL = "http://bookclub2.japantimes.co.jp/download/files/JLPT_BPT_N4.zip";
const BUCKET_NAME = "jlpt-audio";
const LEVEL = "N4";

async function run() {
  try {
    console.log(`\n⏳ Sedang mengunduh file ZIP dari: ${AUDIO_ZIP_URL}`);
    console.log(`Proses ini mungkin memakan waktu beberapa menit tergantung ukuran file...`);
    
    const res = await fetch(AUDIO_ZIP_URL);
    if (!res.ok) {
      throw new Error(`Gagal mengunduh file: ${res.status} ${res.statusText}`);
    }
    
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log(`✅ Unduhan selesai (${(buffer.length / 1024 / 1024).toFixed(2)} MB).`);
    console.log(`\n⏳ Mengekstrak file ZIP di memori...`);
    
    const zip = new AdmZip(buffer);
    const zipEntries = zip.getEntries();
    
    const mp3Entries = zipEntries.filter(entry => 
      entry.entryName.toLowerCase().endsWith(".mp3") && 
      !entry.entryName.includes("__MACOSX")
    );

    console.log(`Ditemukan ${mp3Entries.length} file MP3. Mulai mengunggah ke Supabase...`);
    
    let successCount = 0;
    let failCount = 0;

    for (const entry of mp3Entries) {
      // Mengambil nama file, membersihkannya jika ada karakter path dari zip
      const fileName = path.basename(entry.entryName);
      const fileBuffer = entry.getData();
      
      process.stdout.write(`Mengunggah ${fileName}... `);
      
      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(`${LEVEL}/${fileName}`, fileBuffer, {
          contentType: 'audio/mpeg',
          upsert: true
        });
        
      if (error) {
        console.log(`❌ Gagal: ${error.message}`);
        failCount++;
      } else {
        console.log(`✅ Sukses`);
        successCount++;
      }
    }
    
    console.log(`\n🎉 Proses unggah selesai!`);
    console.log(`Berhasil: ${successCount} file`);
    console.log(`Gagal: ${failCount} file`);
    
    if (successCount > 0) {
      const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(`${LEVEL}/${path.basename(mp3Entries[0].entryName)}`);
      console.log(`\nContoh Public URL: ${data.publicUrl}`);
    }

  } catch (err) {
    console.error(`\n❌ Terjadi kesalahan:`, err.message);
  }
}

run();

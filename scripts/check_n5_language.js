import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function check() {
  const { data, error } = await supabase
    .from('vocabularies')
    .select('*')
    .eq('level', 'N5');

  if (error) {
    console.error(error);
    return;
  }

  let idnCount = 0;
  let engCount = 0;
  
  // simple heuristic to see if meaning is English or Indonesian
  const indonesianWords = ['saya', 'makan', 'minum', 'besar', 'pergi', 'baru', 'guru', 'hari ini', 'air', 'sepeda', 'buku', 'teman', 'enak', 'kucing', 'anjing', 'besok', 'kemarin', 'sekarang', 'membaca', 'menulis', 'mendengar', 'bertanya', 'berbicara', 'kecil', 'sore', 'pagi', 'malam', 'setiap', 'kantor', 'sekolah', 'rumah', 'mobil', 'dokter', 'perempuan', 'laki-laki', 'anak', 'orang', 'jalan', 'jembatan', 'pintu', 'jendela', 'kunci', 'uang', 'tas', 'sepatu', 'baju', 'celana', 'topi', 'kacamata', 'jam', 'tangan', 'kaki', 'kepala', 'rambut', 'mata', 'telinga', 'hidung', 'mulut', 'gigi', 'sakit', 'obat', 'makanan', 'minuman', 'teh', 'kopi', 'susu', 'nasi', 'roti', 'daging', 'ikan', 'sayur', 'buah', 'garam', 'gula', 'pedas', 'manis', 'pahit', 'asam', 'panas', 'dingin', 'hangat', 'sejuk', 'cerah', 'hujan', 'salju', 'angin', 'awan', 'langit', 'matahari', 'bulan', 'bintang', 'gunung', 'sungai', 'laut', 'danau', 'pohon', 'bunga', 'daun', 'rumput', 'kebun', 'taman', 'hewan', 'burung', 'ikan', 'serangga', 'warna', 'merah', 'biru', 'hijau', 'kuning', 'putih', 'hitam', 'cokelat', 'abu-abu', 'merah muda', 'oranye', 'ungu', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'ratus', 'ribu', 'puluh', 'tahun', 'bulan', 'minggu', 'hari', 'jam', 'menit', 'detik', 'lalu', 'depan', 'ini', 'itu', 'sini', 'situ', 'sana', 'mana', 'siapa', 'apa', 'mengapa', 'bagaimana', 'kapan', 'berapa', 'banyak', 'sedikit', 'semua', 'beberapa', 'lagi', 'dan', 'atau', 'tetapi', 'karena', 'jika', 'oleh-oleh', 'tempura', 'festival', 'sakura', 'bahasa', 'kamus', 'penghapus', 'penggaris', 'paspor', 'komputer', 'ponsel', 'eskalator', 'apotek', 'bandara', 'supermarket', 'museum', 'kebun binatang', 'pemandian', 'kuil', 'gereja', 'lampu lalu lintas', 'halo', 'selamat', 'terima kasih', 'maaf', 'silakan', 'pulang', 'makan siang', 'makan malam', 'sarapan'];
  
  data.forEach(v => {
    const meaningLower = v.meaning.toLowerCase();
    const isIndo = indonesianWords.some(w => meaningLower.includes(w)) || 
                   // check if contains Indonesian common stop words
                   ['yang', 'di', 'ke', 'dari', 'dan', 'atau', 'untuk', 'dengan', 'saya', 'dia', 'mereka', 'kita', 'kami', 'kamu', 'anda', 'ini', 'itu', 'adalah', 'ada', 'bisa', 'boleh', 'sudah', 'telah', 'sedang', 'akan', 'belum', 'tidak', 'bukan', 'jangan', 'saja', 'juga', 'pun', 'lah', 'kah', 'tahu', 'mau', 'ingin', 'suka', 'cinta', 'benci', 'takut', 'marah', 'sedih', 'senang', 'bahagia', 'lelah', 'sakit', 'sehat', 'kuat', 'lemah', 'pintar', 'bodoh', 'rajin', 'malas', 'cepat', 'lambat', 'tinggi', 'rendah', 'panjang', 'pendek', 'dekat', 'jauh', 'mahal', 'murah', 'mudah', 'sulit', 'berat', 'ringan', 'bersih', 'kotor', 'baru', 'lama', 'tua', 'muda', 'gemuk', 'kurus', 'basah', 'kering'].some(w => meaningLower.split(/\s+/).includes(w));
                   
    if (isIndo) {
      idnCount++;
    } else {
      engCount++;
    }
  });

  console.log(`Indonesian meanings: ${idnCount}`);
  console.log(`English meanings: ${engCount}`);
}

check();

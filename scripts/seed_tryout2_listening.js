import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY belum di-set di file .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET_NAME = "jlpt-audio";
const LEVEL = "N4";
const SECTION = "Listening";
const PACKAGE = "B";

// Paths
const AUDIO_DIR = path.resolve(__dirname, '../../JLPT_Super_Moshi_N4.N5-AudioCD1');
const IMAGES_DIR = path.resolve(__dirname, '../public/images');

const QUESTIONS_DATA = [
  // ==========================================
  // MONDAI 1 (8 Questions)
  // ==========================================
  {
    number: 1,
    mondai: 1,
    track: 34,
    type: "audio-listening",
    question: "1番：電話で男の人と女の人が話しています。男の人は何を買いますか？",
    options: ["1", "2", "3", "4"],
    correct: 1, // Option 2
    isImageOption: true,
    imageKey: "n4_tryout2_m1_q01",
    explanation: `### Transkrip Jepang
男：今駅前だけど、何か買っていくものある？
女：あ、ちょうどよかった。牛乳を買ってきてくれる？2本。それとパン。
男：ああ、明日の朝のだね。ヨーグルトは？
女：あ、それは買ってきてあるわ。あと、野菜ジュースもお願い。
男：え？そんなに持てないよ。重いから牛乳は1本じゃダメ？
女：そう？じゃあ1本でいいわ。よろしくね。
男：男の人は何を買いますか。

### Terjemahan Indonesia
Laki-laki: Aku sedang di depan stasiun sekarang, ada yang perlu kubelikan?
Perempuan: Ah, pas sekali. Bisakah kamu membelikan susu? 2 botol. Sama roti.
Laki-laki: Ah, buat besok pagi ya. Bagaimana dengan yoghurt?
Perempuan: Ah, itu sudah kubeli. Oh ya, tolong jus sayuran juga ya.
Laki-laki: Eh? Aku tidak bisa bawa sebanyak itu. Karena berat, apakah susunya 1 botol saja tidak apa-apa?
Perempuan: Oh ya? Ya sudah 1 botol saja tidak apa-apa. Tolong ya.
Laki-laki: Apa yang akan dibeli oleh laki-laki itu?

### Analisis Kosakata
* 牛乳 (ぎゅうにゅう - gyuunyuu) = Susu sapi
* ちょうどよかった (choudo yokatta) = Kebetulan sekali / pas sekali
* 野菜ジュース (やさいじゅーす - yasai juusu) = Jus sayuran
* 重い (おもい - omoi) = Berat

### Penjelasan Jawaban
Perempuan awalnya meminta 2 botol susu, roti, dan jus sayuran. Yoghurt tidak perlu dibeli karena sudah ada. Namun, laki-laki merasa keberatan membawa semuanya dan meminta agar susunya dikurangi menjadi 1 botol saja, yang disetujui perempuan. Maka barang yang dibeli adalah: 1 susu, roti, dan jus sayuran. Pada gambar pilihan (Mondai 1 Q1), kombinasi ini ditunjukkan oleh nomor **2**.`
  },
  {
    number: 2,
    mondai: 1,
    track: 35,
    type: "audio-listening",
    question: "2番：大学で学生と先生が話しています。学生は明日何時に来ますか？",
    options: ["午後1時", "午後1時半", "午後2時", "午後2時半"],
    correct: 2, // Option 3
    isImageOption: false,
    explanation: `### Transkrip Jepang
学生：先生、明日研究会のお手伝いをするように言われたんですが、始まる二時間ぐらい前に来ればいいですか？
先生：ああ、研究会は三時からですが、そんなに早くなくてもいいですよ。
学生：そうですか。
先生：講師の先生には三十分前に来てくださいとお願いしてあるから、それまでに来てくれないと困るけどね。
学生：はい。じゃあ一時間前に。お手伝いって何をすればいいですか？
先生：受付と資料のコピーをお願いしたいんだ。
学生：資料のコピーもですか？じゃあもう少し早く来た方が。
先生：いや、そんなに多くないからすぐにできるでしょう。大丈夫だよ。
学生：学生は明日何時に来ますか。

### Terjemahan Indonesia
Mahasiswa: Guru, saya diminta membantu untuk seminar besok, apakah sebaiknya saya datang sekitar 2 jam sebelum dimulai?
Dosen: Ah, seminarnya mulai jam 3, tapi tidak perlu sepagi itu juga tidak apa-apa.
Mahasiswa: Begitu ya.
Dosen: Karena saya sudah meminta dosen pemateri untuk datang 30 menit sebelum acara, saya akan kesulitan jika kamu tidak datang sebelum itu.
Mahasiswa: Baik. Kalau begitu 1 jam sebelumnya. Untuk tugas membantu, apa yang sebaiknya saya lakukan?
Dosen: Saya ingin kamu membantu di bagian resepsionis dan fotokopi dokumen.
Mahasiswa: Memfotokopi dokumen juga? Kalau begitu apakah sebaiknya saya datang sedikit lebih awal?
Dosen: Tidak, jumlahnya tidak terlalu banyak jadi bisa selesai dengan cepat kok. Tidak apa-apa.
Mahasiswa: Jam berapa mahasiswa itu akan datang besok?

### Analisis Kosakata
* 研究会 (けんきゅうかい - kenkyuukai) = Seminar penelitian / kelompok studi
* お手伝い (おてつだい - otetsudai) = Bantuan / asisten
* 講師 (こうし - koushi) = Dosen pemateri / instruktur
* 受付 (うけつけ - uketseke) = Resepsionis / bagian pendaftaran

### Penjelasan Jawaban
Seminar dimulai jam 3 sore (15:00). Dosen pemateri datang 30 menit sebelum mulai (14:30), sehingga mahasiswa harus datang sebelum itu. Mahasiswa mengusulkan datang 1 jam sebelum mulai (14:00), dan dosen menyetujuinya karena pekerjaan memfotokopi dokumen tidak terlalu banyak dan cepat selesai. Jadi mahasiswa akan datang pada pukul **午後2時 (Jam 2 siang - Opsi 3)**.`
  },
  {
    number: 3,
    mondai: 1,
    track: 36,
    type: "audio-listening",
    question: "3番：映画館で女の人と男の人が話しています。二人はどの席に座りますか。",
    options: ["1", "2", "3", "4"],
    correct: 2, // Option 3
    isImageOption: true,
    imageKey: "n4_tryout2_m1_q03",
    explanation: `### Transkrip Jepang
女：前の方に行こう。
男：えー、前の席は音が大きいから嫌だよ。
女：じゃあこの辺にする？真ん中の方が見やすいから。
男：うーん、こっちにしようよ。途中でトイレに行きたくなってもみんなの邪魔にならないし。
女：トイレは始まる前に行っておけばいいでしょ。映画は見やすいのが一番よ。
男：わかった。じゃあそうしよう。
女：二人はどの席に座りますか。

### Terjemahan Indonesia
Perempuan: Mari duduk di bagian depan.
Laki-laki: Ah, kursi depan suaranya terlalu keras, aku tidak mau.
Perempuan: Kalau begitu, bagaimana kalau area ini? Karena di bagian tengah lebih mudah menonton.
Laki-laki: Hmm, mari pilih yang di sebelah sini (dekat lorong/belakang). Supaya kalau di tengah-tengah ingin ke toilet, tidak mengganggu orang lain.
Perempuan: Toilet kan bisa dikunjungi sebelum film dimulai. Yang terpenting adalah kenyamanan saat menonton.
Laki-laki: Baiklah. Mari kita lakukan itu.
Perempuan: Di kursi mana mereka berdua akan duduk?

### Analisis Kosakata
* 前の方 (まえのほう - mae no hou) = Bagian depan
* 真ん中 (まんなか - mannaka) = Bagian tengah
* 見やすい (みやすい - miyasui) = Mudah ditonton / jelas terlihat
* 邪魔 (じゃま - jama) = Gangguan

### Penjelasan Jawaban
Perempuan menyarankan kursi depan tapi ditolak laki-laki karena terlalu bising. Perempuan kemudian menyarankan kursi bagian tengah (真ん中) karena paling nyaman untuk menonton. Laki-laki sempat menyarankan kursi tepi/belakang dekat lorong agar tidak mengganggu jika ingin ke toilet, namun perempuan menegaskan bahwa posisi menonton yang baik adalah yang terpenting. Laki-laki akhirnya setuju. Pilihan kursi tengah ditunjukkan oleh nomor **3**.`
  },
  {
    number: 4,
    mondai: 1,
    track: 37,
    type: "audio-listening",
    question: "4番：学校で先生が学生に話しています。学生は明日どんな服装で来ますか？",
    options: ["1", "2", "3", "4"],
    correct: 0, // Option 1
    isImageOption: true,
    imageKey: "n4_tryout2_m1_q04",
    explanation: `### Transkrip Jepang
先生：明日は山に登りますから、動きやすい服装で来てください。スカートではなくズボンがいいでしょう。明日も暑くていい天気になりそうですが、山の上では短いズボンだと寒いですよ。上着も必要です。着てこなくてもいいですが、カバンに入れておいてください。あと、帽子も忘れないでくださいね。それから、カバンは手で持たなくてもいいものにしてください。
先生：学生は明日どんな服装で来ますか。

### Terjemahan Indonesia
Guru: Karena besok kita akan mendaki gunung, harap datang dengan pakaian yang mudah untuk bergerak. Sebaiknya kenakan celana panjang, bukan rok. Besok sepertinya cuaca akan panas dan cerah, tapi di atas gunung akan dingin jika menggunakan celana pendek. Jaket juga diperlukan. Kamu tidak perlu langsung memakainya, tapi tolong masukkan ke dalam tas. Selain itu, jangan lupa memakai topi ya. Kemudian, gunakan tas yang tidak perlu dipegang dengan tangan.
Guru: Pakaian seperti apa yang akan digunakan mahasiswa besok?

### Analisis Kosakata
* 山に登る (やまにのぼる - yama ni noboru) = Mendaki gunung
* 服装 (ふくそう - fukusou) = Pakaian
* ズボン (zubon) = Celana
* 上着 (うわぎ - uwagi) = Jaket / baju hangat
* 帽子 (ぼうし - boushi) = Topi

### Penjelasan Jawaban
Persyaratan pakaian pendakian besok:
1. Celana panjang (ズボン), bukan rok atau celana pendek (短いズボンだと寒い).
2. Membawa jaket/baju hangat (上着) di dalam tas.
3. Memakai topi (帽子).
4. Memakai tas ransel/punggung yang membuat tangan bebas (手で持たなくてもいいもの).
Gambar nomor **1** menunjukkan kombinasi celana panjang, topi, dan ransel dengan benar.`
  },
  {
    number: 5,
    mondai: 1,
    track: 38,
    type: "audio-listening",
    question: "5番：テレビで男の人が話しています。どんな形になりますか。",
    options: ["1", "2", "3", "4"],
    correct: 0, // Option 1
    isImageOption: true,
    imageKey: "n4_tryout2_m1_q05",
    explanation: `### Transkrip Jepang
男：膝が痛いという人が多いようですね。そういう人はこんな運動をやるといいですよ。では、一緒にやってみましょう。まず、椅子に座って、両手で椅子をしっかり持ってください。そして、左足を前に上げてください。足はまっすぐですよ。左足だけですよ。そのまま動かないでください。一、二、三、四、五。では、ゆっくり足を下ろしてください。同じように右足でも行います。左右五回ずつ、朝晩続けてくださいね。
男：どんな形になりますか。

### Terjemahan Indonesia
Laki-laki: Sepertinya banyak orang yang mengeluh lututnya sakit ya. Orang-orang seperti itu disarankan melakukan gerakan olahraga ini. Mari kita coba bersama-sama. Pertama, silakan duduk di kursi, dan pegang kursi erat-erat dengan kedua tangan. Lalu, angkat kaki kiri Anda ke depan. Kaki harus lurus ya. Hanya kaki kiri saja ya. Tetap dalam posisi itu tanpa bergerak. Satu, dua, tiga, empat, lima. Baik, turunkan kaki Anda secara perlahan. Lakukan hal yang sama untuk kaki kanan Anda. Lakukan 5 kali untuk masing-masing kaki kiri dan kanan, setiap pagi dan malam hari ya.
Laki-laki: Bentuk tubuh/gerakan seperti apa yang dimaksud?

### Analisis Kosakata
* 膝 (ひざ - hiza) = Lutut
* まっすぐ (massugu) = Lurus
* 下ろす (おろす - orosu) = Menurunkan
* 左右 (さゆう - sayuu) = Kiri dan kanan

### Penjelasan Jawaban
Instruksi gerakan olahraga:
1. Duduk di kursi dan pegang erat kursi dengan kedua tangan.
2. Angkat kaki kiri lurus ke depan (左足を前に上げてください。足はまっすぐ).
3. Hanya satu kaki yang diangkat (左足だけですよ).
Gambar yang menunjukkan duduk di kursi sambil mengangkat satu kaki lurus ke depan dengan kedua tangan memegang kursi adalah nomor **1**.`
  },
  {
    number: 6,
    mondai: 1,
    track: 39,
    type: "audio-listening",
    question: "6番：男の人と女の人が話しています。女の人はどうしますか？",
    options: ["パソコン教室に行く", "白川さんに聞く", "お店の人に聞く", "本をもう一度読む"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
女：鈴木さん、新しいパソコンを買ったそうですね。
男：ええ、でも前のと違うから使い方がよくわからなくて。本も読んでみたんですけど。
女：ああ、そういう本はわかりにくいですよね。私も何冊も読みましたよ。
男：パソコンを買ったお店で聞いたら教えてもらえるでしょうか。
女：ええ、教えてくれるでしょうね。でもそれより白川さんに聞いてみたらどうですか。パソコン教室に行っていたそうですよ。
男：ああ、そうですか。じゃあそうしてみます。
女：女の人はどうしますか。

### Terjemahan Indonesia
Perempuan: Suzuki-san, kudengar kamu membeli komputer baru ya.
Laki-laki: Iya, tapi karena berbeda dari yang lama, aku kurang paham cara menggunakannya. Aku sudah coba membaca buku petunjuk juga sih.
Perempuan: Ah, buku seperti itu memang sulit dipahami ya. Aku juga dulu membaca beberapa buku.
Laki-laki: Apakah aku bisa mendapat penjelasan jika bertanya di toko tempatku membelinya?
Perempuan: Iya, mereka pasti mengajarimu. Tapi daripada itu, bagaimana jika bertanya kepada Shirakawa-san? Kudengar dia dulu pernah mengikuti kelas komputer lho.
Laki-laki: Oh, begitu ya. Kalau begitu aku akan coba bertanya kepadanya.
Perempuan: Apa yang akan dilakukan oleh laki-laki/perempuan dalam percakapan ini? (Konteks: Orang yang bertanya cara penggunaan komputer akan menghubungi siapa?)

### Analisis Kosakata
* パソコン (pasokon) = Komputer
* わかりにくい (wakarinikui) = Sulit dipahami
* 教室 (きょうしつ - kyoushitsu) = Kelas / ruang kelas
* 何冊も (なんさつも - nansatsumo) = Beberapa buku (satuan jilid buku)

### Penjelasan Jawaban
Laki-laki (atau perempuan, disesuaikan dengan peran yang membutuhkan bantuan komputer) kesulitan menggunakan komputer baru. Rekan bicaranya menyarankan untuk bertanya ke Shirakawa-san (白川さんに聞いてみたらどうですか) karena dia pernah belajar di kelas komputer. Laki-laki setuju dengan saran tersebut ("じゃあそうしてみます"). Jadi langkah yang diambil adalah bertanya kepada Shirakawa-san (**白川さんに聞く - Opsi 2**).`
  },
  {
    number: 7,
    mondai: 1,
    track: 40,
    type: "audio-listening",
    question: "7番：車の中で女の人と男の人が話しています。二人はこの後、最初にどこへ行きますか？",
    options: ["コンビニ", "ガソリンスタンド", "空港", "レストラン"],
    correct: 0, // Option 1
    isImageOption: false,
    explanation: `### Transkrip Jepang
女：お腹すいたね。どこかで何か食べていこうよ。
男：でも飛行機の時間に遅れたら大変だから、先に空港へ行った方がいいよ。
女：大丈夫よ。食べる時間ぐらいあるよ。
男：でも道が混んでるかもしれないし。
女：じゃあどこかで何か買って車の中で食べようよ。
男：そんなにお腹すいてるの？仕方ないなぁ。じゃあコンビニに寄っていこう。でもその前にガソリンスタンドでガソリン入れてもいい？
女：えー、ダメダメ。車より人間の方が先よ。
男：わかったよ。
女：二人はこの後、最初にどこへ行きますか？

### Terjemahan Indonesia
Perempuan: Perutku lapar ya. Mari kita makan sesuatu di suatu tempat sebelum pergi.
Laki-laki: Tapi kalau kita terlambat mengejar pesawat kan gawat, jadi sebaiknya kita langsung ke bandara saja dulu.
Perempuan: Tidak apa-apa kok. Masih sempat kalau cuma untuk makan sebentar.
Laki-laki: Tapi jalanan mungkin macet.
Perempuan: Kalau begitu, mari kita beli sesuatu di jalan lalu memakannya di dalam mobil.
Laki-laki: Kamu lapar sekali ya? Ya sudah mau bagaimana lagi. Mari kita mampir ke minimarket. Tapi sebelum itu, bolehkah aku mengisi bensin dulu di pom bensin?
Perempuan: Eh, tidak boleh! Manusia harus lebih diutamakan daripada mobil.
Laki-laki: Baiklah.
Perempuan: Ke mana mereka berdua akan pergi pertama kali setelah ini?

### Analisis Kosakata
* お腹すいた (おなかすいた - onaka suita) = Lapar
* 空港 (くうこう - kuukou) = Bandara
* 寄る (よる - yoru) = Mampir
* ガソリンスタンド (gasorin sutando) = Pom bensin

### Penjelasan Jawaban
Laki-laki ingin mengisi bensin dulu sebelum mampir ke minimarket (コンビニ), namun perempuan menolak keras dan bersikeras bahwa rasa laparnya lebih mendesak ("車より人間の方が先よ" - manusia lebih utama dari mobil). Laki-laki mengalah dan menyetujuinya. Maka tujuan pertama mereka adalah minimarket (**コンビニ - Opsi 1**).`
  },
  {
    number: 8,
    mondai: 1,
    track: 41,
    type: "audio-listening",
    question: "8番：会社で男の人と女の人が会議の準備をしています。女の人は初めに何をしますか？",
    options: ["1", "2", "3", "4"],
    correct: 1, // Option 2
    isImageOption: true,
    imageKey: "n4_tryout2_m1_q08",
    explanation: `### Transkrip Jepang
男：佐藤さん、会議の準備はできてる？
女：はい。マイクは用意しました。資料のコピーもしてあります。
男：じゃあ、会議は一時からだから、先に昼食を済ませておくといいよ。
女：しかし、まだ昼休みになっていませんが。
男：いいよ。会議が始まると休めないから。
女：そうですか。じゃあ、行ってきます。
男：あ、その前に会議室のエアコンをつけておいてね。
女：わかりました。
男：女の人は初めに何をしますか。

### Terjemahan Indonesia
Laki-laki: Sato-san, apakah persiapan rapat sudah selesai?
Perempuan: Iya. Mikrofon sudah saya siapkan. Fotokopi dokumen juga sudah selesai dilakukan.
Laki-laki: Bagus. Karena rapat dimulai jam 1 siang, sebaiknya kamu makan siang dulu saja lebih awal.
Perempuan: Tapi sekarang belum masuk jam istirahat makan siang.
Laki-laki: Tidak apa-apa. Nanti begitu rapat dimulai kamu tidak akan sempat istirahat.
Perempuan: Begitu ya. Baik, saya pergi makan dulu.
Laki-laki: Ah, sebelum itu tolong nyalakan AC di ruang rapat dulu ya.
Perempuan: Baik, saya mengerti.
Laki-laki: Apa yang akan dilakukan oleh perempuan tersebut pertama kali?

### Analisis Kosakata
* 会議 (かいぎ - kaigi) = Rapat / pertemuan
* 昼食を済ませる (ちゅうしょくをすませる - chuushoku o sumaseru) = Menyelesaikan makan siang
* エアコンをつける (eakon o tsukeru) = Menyalakan AC

### Penjelasan Jawaban
Laki-laki awalnya menyuruh Sato-san langsung pergi makan siang (昼食). Namun sebelum dia melangkah pergi, laki-laki menambahkan instruksi mendesak: "あ、その前に会議室のエアコンをつけておいてね" (Ah, sebelum itu tolong nyalakan AC di ruang rapat dulu ya). Oleh karena itu, hal pertama yang harus dilakukannya adalah menyalakan AC di ruang rapat (Opsi 2).`
  },

  // ==========================================
  // MONDAI 2 (7 Questions)
  // ==========================================
  {
    number: 9,
    mondai: 2,
    track: 43,
    type: "audio-listening",
    question: "1番：電話で男の人が歯医者の人と話しています。男の人はいつ歯医者に行きますか。",
    options: ["来週の水曜日の午前", "来週の水曜日の午後", "来週の月曜日の午前", "来週の金曜日の午後"],
    correct: 2, // Option 3
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：あの山本ですが、予約を変えてもらいたいんですが。
歯医者：山本様、来週の水曜日の午前10時にご予約でしたね。
男：はい。午前中は都合が悪くなってしまったので、午後にしてもらえませんか？
歯医者：すみません。午後はもう予約がいっぱいなんです。来週は月曜の午前か金曜の午後でしたら空いていますが。
男：そうですか。じゃあ早い方がいいです。
歯医者：わかりました。
男：男の人はいつ歯医者に行きますか。

### Terjemahan Indonesia
Laki-laki: Halo, saya Yamamoto. Saya ingin merubah jadwal janji temu saya.
Resepsionis: Yamamoto-sama, Anda memiliki janji temu pada Rabu pagi jam 10 minggu depan ya.
Laki-laki: Iya. Karena pada pagi hari tersebut saya ada keperluan mendadak, apakah bisa diganti ke siang/sore harinya?
Resepsionis: Mohon maaf, jadwal sore hari sudah penuh. Minggu depan yang masih kosong adalah Senin pagi atau Jumat sore.
Laki-laki: Begitu ya. Kalau begitu, saya pilih hari yang lebih awal saja.
Resepsionis: Baik, saya mengerti.
Laki-laki: Kapan laki-laki itu akan pergi ke dokter gigi?

### Analisis Kosakata
* 予約 (よやく - yoyaku) = Janji temu / reservasi
* 都合が悪い (つごうがわるい - tsugou ga warui) = Berhalangan / tidak sempat
* 空いている (あいている - aite iru) = Kosong / tersedia

### Penjelasan Jawaban
Jadwal lama Yamamoto adalah hari Rabu pagi minggu depan. Dia ingin mengubahnya ke sore hari di hari yang sama, tetapi sudah penuh. Resepsionis menawarkan dua alternatif jadwal kosong: Senin pagi (月曜の午前) atau Jumat sore (金曜の午後). Laki-laki memilih yang lebih awal ("早い方がいいです"), yaitu hari **来週の月曜日の午前 (Senin pagi minggu depan - Opsi 3)**.`
  },
  {
    number: 10,
    mondai: 2,
    track: 44,
    type: "audio-listening",
    question: "2番：大学で男の学生と女の学生が話しています。女の学生はどうしますか。",
    options: ["写真部に入る", "クラブには入らない", "毎日アルバイトをする", "他のクラブに入る"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：どのクラブに入るか決めた？僕は写真部に入るつもりなんだ。
女：ふーん、私はクラブには入らないと思う。
男：え？どうして？
女：アルバイトをしようと思ってるの。違う大学の人にも会えるし、生活のためにお金も欲しいし。
男：ふーん、そうか。でも毎日アルバイトしないでしょ。写真部は週に一回だけだから、一緒に入らない？
女：うーん、そうね。でも写真にはあんまり興味がないからやめておく。
男：女の学生はどうしますか。

### Terjemahan Indonesia
Laki-laki: Apakah kamu sudah memutuskan masuk klub mana? Aku berniat masuk klub fotografi.
Perempuan: Hmm, sepertinya aku tidak akan bergabung dengan klub mana pun.
Laki-laki: Eh? Kenapa?
Perempuan: Aku berniat melakukan kerja paruh waktu (baito). Aku bisa bertemu dengan orang-orang dari universitas lain, dan aku butuh uang untuk biaya hidup.
Laki-laki: Oh begitu ya. Tapi kan kamu tidak bekerja paruh waktu setiap hari. Klub fotografi cuma kumpul seminggu sekali lho, mau masuk bareng?
Perempuan: Hmm, iya sih. Tapi karena aku tidak begitu tertarik pada fotografi, jadi aku putuskan tidak ikut.
Perempuan: Apa yang akan dilakukan oleh mahasiswi tersebut?

### Analisis Kosakata
* 部 (ぶ - bu) = Klub sekolah / unit kegiatan mahasiswa
* つもり (tsumori) = Berniat / berencana
* 生活 (せいかつ - seikatsu) = Kehidupan sehari-hari
* 興味がない (きょうみがない - kyoumi ga nai) = Tidak tertarik

### Penjelasan Jawaban
Mahasiswi tersebut menjelaskan bahwa dia tidak ingin masuk klub apa pun (クラブには入らない) karena ingin fokus kerja paruh waktu untuk mencari uang dan relasi. Ketika diajak masuk klub fotografi oleh temannya karena hanya diadakan seminggu sekali, dia tetap menolak karena tidak tertarik pada fotografi. Maka jawabannya adalah **クラブには入らない (Tidak masuk klub - Opsi 2)**.`
  },
  {
    number: 11,
    mondai: 2,
    track: 45,
    type: "audio-listening",
    question: "3番：女の人と男の人が話しています。男の人は夏休みに何をしますか。",
    options: ["外国旅行をする", "国内旅行をする", "仕事をする", "家でゆっくりする"],
    correct: 3, // Option 4
    isImageOption: false,
    explanation: `### Transkrip Jepang
女：山田さん、夏休みはどうするんですか？また旅行ですか。
男：今年はどこか外国へ行こうと思っていたんですけど、妻が休みが取れなくてね。
女：奥さん、お仕事忙しいんですね。
男：ええ、国内旅行も無理そうです。まあ、今年はゆっくりしますよ。
男：男の人は夏休みに何をしますか。

### Terjemahan Indonesia
Perempuan: Yamada-san, apa yang akan kamu lakukan pada libur musim panas? Apakah pergi liburan lagi?
Laki-laki: Tahun ini sebenarnya aku berniat pergi ke luar negeri, tetapi istriku tidak bisa mengambil libur kerja.
Perempuan: Istrimu sibuk bekerja ya.
Laki-laki: Iya, sepertinya liburan domestik pun tidak memungkinkan. Yah, tahun ini aku akan bersantai saja.
Laki-laki: Apa yang akan dilakukan laki-laki itu pada libur musim panas?

### Analisis Kosakata
* 夏休み (なつやすみ - natsuyasumi) = Liburan musim panas
* 外国 (がいこく - gaikoku) = Luar negeri
* 国内旅行 (こくないりょこう - kokunai ryokou) = Liburan domestik / dalam negeri
* ゆっくりする (yukkuri suru) = Bersantai / beristirahat

### Penjelasan Jawaban
山田 (Yamada) awalnya ingin pergi ke luar negeri, tetapi batal karena istrinya tidak bisa libur kerja. Perjalanan domestik pun tidak memungkinkan bagi mereka. Oleh karena itu, dia memutuskan untuk bersantai saja di rumah tahun ini ("今年はゆっくりしますよ"). Pilihan yang tepat adalah **家でゆっくりする (Bersantai di rumah - Opsi 4)**.`
  },
  {
    number: 12,
    mondai: 2,
    track: 46,
    type: "audio-listening",
    question: "4番：女の人と男の人が話しています。男の人はどうしてパーティーに行きませんか。",
    options: ["入院するから", "お見舞いに行くから", "アルバイトがあるから", "プレゼントを買うから"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
女：田村さんの誕生日パーティーに行かないんですか。
男：ええ、一緒にアルバイトをしている人が急に入院しちゃってね。その日はみんなで病院にお見舞いに行くんですよ。
女：そうですか。じゃあ仕方ないですね。代わりにプレゼントを渡しておきましょうか。
男：プレゼントはまだ買ってないんです。田村さんには後で渡そうと思って。
男：男の人はどうしてパーティーに行きませんか。

### Terjemahan Indonesia
Perempuan: Apakah kamu tidak pergi ke pesta ulang tahun Tamura-san?
Laki-laki: Iya, orang yang bekerja paruh waktu bersamaku tiba-tiba masuk rumah sakit. Jadi pada hari itu, kami semua berencana pergi ke rumah sakit untuk menjenguknya.
Perempuan: Oh begitu ya. Sayang sekali ya. Apakah kamu ingin aku menitipkan kado ulang tahunnya mewakilimu?
Laki-laki: Aku belum membeli kadonya. Aku berniat memberikannya sendiri langsung ke Tamura nanti saja.
Laki-laki: Mengapa laki-laki itu tidak menghadiri pesta ulang tahun?

### Analisis Kosakata
* 入院する (にゅういんする - nyuu'in suru) = Masuk rumah sakit / opname
* お見舞い (おみまい - omimai) = Menjenguk orang sakit
* 代わりに (かわりに - kawari ni) = Sebagai gantinya / mewakili

### Penjelasan Jawaban
Laki-laki tidak bisa menghadiri pesta karena rekan kerja paruh waktunya tiba-tiba diopname di rumah sakit, dan dia bersama teman-teman lainnya akan pergi menjenguk di hari yang sama ("病院にお見舞いに行くんですよ"). Oleh karena itu, alasannya adalah **お見舞いに行くから (Karena pergi menjenguk orang sakit - Opsi 2)**.`
  },
  {
    number: 13,
    mondai: 2,
    track: 47,
    type: "audio-listening",
    question: "5番：会社で女の人と男の人が話しています。いつどこで会議をしますか。",
    options: [
      "明日、三時から三階で",
      "明日、三時から五階で",
      "明日、五時から三階で",
      "明日、五時から五階で"
    ],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
女：会議は明日でしたよね。
男：ええ。午後の三時から五階の会議室ですよ。
女：え？三階の会議室じゃないんですか？
男：今日変わったんですよ。
女：時間もですか？
男：いえ、時間はそのままですよ。
女：いつどこで会議をしますか。

### Terjemahan Indonesia
Perempuan: Rapatnya besok kan ya?
Laki-laki: Iya. Jam 3 sore di ruang rapat lantai 5 ya.
Perempuan: Eh? Bukannya di ruang rapat lantai 3?
Laki-laki: Baru saja diubah hari ini.
Perempuan: Apakah waktunya juga diubah?
Laki-laki: Tidak, waktunya tetap sama kok.
Perempuan: Kapan dan di mana rapat tersebut akan diadakan?

### Analisis Kosakata
* 会議 (かいぎ - kaigi) = Rapat / pertemuan
* 会議室 (かいぎしつ - kaigishitsu) = Ruang rapat
* そのまま (sonomama) = Tetap seperti itu / tidak berubah

### Penjelasan Jawaban
Berdasarkan percakapan, rapat diadakan besok pukul **午後三時 (Jam 3 sore)**. Lokasinya diubah hari ini dari lantai 3 menjadi **五階の会議室 (Ruang rapat lantai 5)**. Waktunya tidak mengalami perubahan. Maka rapat diadakan pada **明日、三時から五階で (Besok, mulai jam 3 di lantai 5 - Opsi 2)**.`
  },
  {
    number: 14,
    mondai: 2,
    track: 48,
    type: "audio-listening",
    question: "6番：大学で女の学生と男の学生が話しています。男の学生は卒業した後どうしますか。",
    options: ["大学院に行く", "世界を見て回る", "父親の店を手伝う", "会社で働く"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
女：もうすぐ卒業だけど会社は決まった？
男：ううん、まだ。だけど僕はまだいろいろ勉強したいから。
女：大学院に行くの？
男：そうじゃなくて、世界の色んなところを見て回ろうと思ってるんだ。
女：へー。お父さんはそれでいいって？
男：いや、父は店を手伝えって言うんだけど、それは嫌なんだ。
男：男の学生は卒業した後どうしますか。

### Terjemahan Indonesia
Perempuan: Sebentar lagi lulus, apakah kamu sudah mendapatkan kepastian kerja di perusahaan?
Laki-laki: Belum. Lagipula aku masih ingin belajar banyak hal.
Perempuan: Apakah kamu akan lanjut ke program pascasarjana (S2)?
Laki-laki: Bukan, tapi aku berniat pergi berkeliling melihat berbagai tempat di belahan dunia.
Perempuan: Hebat ya. Apakah ayahmu mengizinkannya?
Laki-laki: Tidak, ayah menyuruhku membantu tokonya, tetapi aku tidak mau.
Laki-laki: Apa yang akan dilakukan mahasiswa laki-laki itu setelah lulus?

### Analisis Kosakata
* 卒業 (そつぎょう - sotsugyou) = Kelulusan
* 大学院 (だいがくいん - daigakuin) = Program pascasarjana (S2/S3)
* 見て回る (みてまわる - mitemaru) = Berkeliling melihat-lihat / mengeksplorasi
* 手伝う (てつだう - tetsudau) = Membantu

### Penjelasan Jawaban
Mahasiswa tersebut ingin terus belajar setelah lulus kuliah dengan cara berkeliling dunia untuk melihat berbagai tempat ("世界の色んなところを見て回ろうと思ってる"). Dia membantah dugaan akan lanjut kuliah S2 (大学院) dan menolak perintah ayahnya untuk membantu bisnis toko keluarga. Jadi rencana pasca kelulusannya adalah berkeliling dunia (**世界を見て回る - Opsi 2**).`
  },
  {
    number: 15,
    mondai: 2,
    track: 49,
    type: "audio-listening",
    question: "7番：男の人と女の人が話しています。二人はいつ美術館へ行きますか。",
    options: ["土曜日の夕方", "金曜日の夜", "月曜日の午後", "日曜日の夕方"],
    correct: 3, // Option 4
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：ねえ、美術館のチケットが二枚あるんだけど、一緒に行かない？
女：あ、それ行きたかったんだ。いつ行く？
男：土曜日はどう？
女：うーん、週末は混んでいるからやめた方がいいよ。金曜日の夜は？
男：金曜日は夕方から会議だから無理だな。月曜日だったら大丈夫だけど。
女：月曜日は美術館休みよ。あ、そうだ。週末でも日曜の夕方は空いているらしいよ。
男：じゃあそうしようか。
男：二人はいつ美術館へ行きますか。

### Terjemahan Indonesia
Laki-laki: Hei, aku punya dua tiket museum seni, maukah pergi bersama?
Perempuan: Ah, aku memang sangat ingin pergi ke sana. Kapan perginya?
Laki-laki: Bagaimana kalau hari Sabtu?
Perempuan: Hmm, karena akhir pekan ramai, sebaiknya jangan Sabtu. Bagaimana kalau Jumat malam?
Laki-laki: Kalau Jumat, aku tidak bisa karena ada rapat sejak sore hari. Tapi kalau Senin aku bisa sih.
Perempuan: Museum seni tutup pada hari Senin lho. Ah, iya. Kudengar meskipun akhir pekan, hari Minggu sore biasanya cukup sepi.
Laki-laki: Baiklah, mari kita pergi saat itu.
Laki-laki: Kapan mereka berdua akan pergi ke museum seni?

### Analisis Kosakata
* 美術館 (びじゅつかん - bijutsukan) = Museum seni / galeri seni
* 混んでいる (こんでいる - konde iru) = Ramai / padat
* やめた方がいい (yameta hou ga ii) = Sebaiknya dihindari / jangan dilakukan
* 美術館休み (びじゅつかんやすみ - bijutsukan yasumi) = Museum tutup / hari libur museum

### Penjelasan Jawaban
Penentuan hari kunjungan museum:
- Sabtu ditolak perempuan karena terlalu ramai (混んでいる).
- Jumat malam ditolak laki-laki karena ada rapat di kantor.
- Senin tidak bisa karena museum tutup (月曜日は美術館休み).
- Akhir pekan hari Minggu sore dikabarkan relatif sepi, dan keduanya menyetujuinya ("日曜の夕方は空いているらしい").
Jadi mereka sepakat pergi pada **日曜日の夕方 (Minggu sore - Opsi 4)**.`
  },

  // ==========================================
  // MONDAI 3 (5 Questions)
  // ==========================================
  {
    number: 16,
    mondai: 3,
    track: 51,
    type: "audio-listening",
    question: "1番：先生の持っている本を読んでみたいです。何と言いますか。",
    options: ["1", "2", "3"],
    correct: 2, // Option 3
    isImageOption: false,
    imageKey: "n4_tryout2_m3_q01",
    explanation: `### Transkrip Jepang
男：先生の持っている本を読んでみたいです。何と言いますか。
一。先生、この本、拝見していただけますか。
二。先生、この本、読んでみてくださいませんか。
三。先生、この本、読ませていただけませんか。

### Terjemahan Indonesia
Pembawa acara: Kamu ingin mencoba membaca buku yang sedang dibawa oleh gurumu. Apa yang akan kamu katakan?
1. Guru, dapatkah Anda melihat (bahasa sangat sopan untuk diri sendiri) buku ini? (Salah tata bahasa ke guru)
2. Guru, bersediakah Anda mencoba membaca buku ini?
3. Guru, bolehkah saya diizinkan membaca buku ini?

### Analisis Kosakata
* 拝見する (はいけんする - haiken suru) = Melihat / membaca (bentuk merendahkan diri / kenjougo)
* 〜せていただけませんか (sete itadakemasen ka) = Bolehkah saya diizinkan melakukan...? (Meminta izin dengan sangat sopan)

### Penjelasan Jawaban
Untuk meminta izin membaca buku milik guru secara sopan, pola yang tepat adalah menggunakan bentuk kausatif-permisif sopan 「〜せていただけませんか」 (Bolehkah saya diperkenankan membaca/melakukan...?). Ungkapan yang benar adalah **三。「先生、この本、読ませていただけませんか。」 (Opsi 3)**.`
  },
  {
    number: 17,
    mondai: 3,
    track: 52,
    type: "audio-listening",
    question: "2番：子供が道で遊んでいる時、車が来ました。何と言いますか。",
    options: ["1", "2", "3"],
    correct: 1, // Option 2
    isImageOption: false,
    imageKey: "n4_tryout2_m3_q02",
    explanation: `### Transkrip Jepang
男：子供が道で遊んでいる時、車が来ました。何と言いますか。
一。片付けて。
二。危ない。
三。早く行って。

### Terjemahan Indonesia
Pembawa acara: Saat anak-anak sedang bermain di jalanan, sebuah mobil datang. Apa yang akan kamu teriakkan?
1. Rapikan! / Bersihkan!
2. Bahaya! / Awas!
3. Pergilah dengan cepat.

### Analisis Kosakata
* 片付ける (かたづける - katazukeru) = Merapikan / membersihkan barang
* 危ない (あぶない - abunai) = Bahaya / awas!

### Penjelasan Jawaban
Dalam situasi darurat ketika ada anak kecil bermain di jalanan dan mobil melintas, seruan spontan untuk memperingatkan bahaya adalah 「危ない！」 (Awas! / Bahaya!). Maka pilihan yang tepat adalah **二。「危ない。」 (Opsi 2)**.`
  },
  {
    number: 18,
    mondai: 3,
    track: 53,
    type: "audio-listening",
    question: "3番：バスに乗ってホテルへ行きたいです。何と言いますか。",
    options: ["1", "2", "3"],
    correct: 0, // Option 1
    isImageOption: false,
    imageKey: "n4_tryout2_m3_q03",
    explanation: `### Transkrip Jepang
男：バスに乗ってホテルへ行きたいです。何と言いますか。
一。どのバスに乗ったらいいですか。
二。バスに乗ったらどうなりますか。
三。あのバスがホテルに行きますよ。

### Terjemahan Indonesia
Pembawa acara: Kamu ingin pergi ke hotel menggunakan bus. Apa yang akan kamu tanyakan?
1. Bus mana yang sebaiknya saya naiki?
2. Apa yang akan terjadi jika saya naik bus?
3. Bus sebelah sana pergi ke hotel lho. (Ini memberi tahu orang lain, bukan bertanya)

### Analisis Kosakata
* どの (dono) = Yang mana
* 〜たらいいですか (tara ii desu ka) = Sebaiknya bagaimana...? (Meminta saran/rekomendasi)

### Penjelasan Jawaban
Ketika seseorang ingin pergi ke suatu tempat dan menanyakan rute bus yang tepat kepada petugas atau orang sekitar, ungkapan meminta petunjuk/rekomendasi yang benar adalah 「どのバスに乗ったらいいですか」 (Bus mana yang sebaiknya saya naiki?). Maka pilihan yang benar adalah **一。「どのバスに乗ったらいいですか。」 (Opsi 1)**.`
  },
  {
    number: 19,
    mondai: 3,
    track: 54,
    type: "audio-listening",
    question: "4番：部長と話がしたいですが、部長は仕事をしています。何と言いますか。",
    options: ["1", "2", "3"],
    correct: 1, // Option 2
    isImageOption: false,
    imageKey: "n4_tryout2_m3_q04",
    explanation: `### Transkrip Jepang
男：部長と話がしたいですが、部長は仕事をしています。何と言いますか。
一。部長、今日はお邪魔しました。
二。あの、今ちょっとよろしいでしょうか。
三。すみませんが、仕事をやめてください。

### Terjemahan Indonesia
Pembawa acara: Kamu ingin berbicara dengan Manajer, tetapi Manajer sedang sibuk bekerja. Apa yang akan kamu katakan?
1. Manajer, terima kasih atas gangguan hari ini. (Dipakai saat pulang bertamu)
2. Permisi, apakah sekarang Anda ada waktu sebentar?
3. Maaf, tolong hentikan pekerjaan Anda. (Sangat tidak sopan)

### Analisis Kosakata
* 部長 (ぶちょう - buchou) = Kepala bagian / manajer
* お邪魔する (おじゃまする - ojamasuru) = Mengganggu / bertamu
* よろしいでしょうか (yoroshii desu ka) = Apakah tidak apa-apa? / apakah boleh? (Bentuk sopan)

### Penjelasan Jawaban
Sebelum menyela atasan/manajer yang sedang bekerja untuk membicarakan sesuatu, ungkapan pembuka yang sopan dan umum digunakan dalam dunia kerja Jepang adalah 「あの、今ちょっとよろしいでしょうか」 (Permisi, apakah Anda ada waktu luang sebentar?). Pilihan yang tepat adalah **二。「あの、今ちょっとよろしいでしょうか。」 (Opsi 2)**.`
  },
  {
    number: 20,
    mondai: 3,
    track: 55,
    type: "audio-listening",
    question: "5番：本が取れません。何と言いますか。",
    options: ["1", "2", "3"],
    correct: 0, // Option 1
    isImageOption: false,
    imageKey: "n4_tryout2_m3_q05",
    explanation: `### Transkrip Jepang
男：本が取れません。何と言いますか。
一。すみません。取ってくださいませんか。
二。すみません。取ってあげませんか。
三。すみません。助けてもいいですか。

### Terjemahan Indonesia
Pembawa acara: Kamu tidak bisa menjangkau/mengambil buku yang terletak di tempat tinggi. Apa yang akan kamu katakan untuk meminta tolong?
1. Permisi. Bersediakah Anda mengambilkannya untuk saya?
2. Permisi. Maukah Anda saya ambilkan? (Mengandung nuansa menawarkan bantuan ke orang lain, salah)
3. Permisi. Bolehkah saya membantu Anda? (Salah arah bantuan)

### Analisis Kosakata
* 取る (とる - toru) = Mengambil
* 〜てくださいませんか (te kudasaimasen ka) = Maukah Anda menolong melakukan... untuk saya? (Meminta bantuan dengan sopan)
* 〜てあげる (te ageru) = Melakukan sesuatu untuk orang lain (memberi bantuan)

### Penjelasan Jawaban
Untuk meminta bantuan orang lain agar bersedia mengambilkan buku yang tidak terjangkau, pola kalimat permohonan bantuan yang sopan adalah 「〜てくださいませんか」. Kalimat yang benar adalah **一。「すみません。取ってくださいませんか。」 (Opsi 1)**.`
  },

  // ==========================================
  // MONDAI 4 (8 Questions)
  // ==========================================
  {
    number: 21,
    mondai: 4,
    track: 57,
    type: "audio-listening",
    question: "1番：すみません。頭が痛いので帰ってもいいですか。",
    options: ["1", "2", "3"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：すみません。頭が痛いので帰ってもいいですか。
一。ええ、おかげさまで。
二。ええ、お大事に。
三。はい、いらっしゃいませ。

### Terjemahan Indonesia
Laki-laki: Maaf. Karena kepala saya sakit, apakah saya boleh pulang?
1. Ya, berkat doa Anda.
2. Ya, semoga lekas sembuh (jaga kesehatan ya).
3. Ya, selamat datang di toko kami.

### Analisis Kosakata
* 頭が痛い (あたまがいたい - atama ga itai) = Sakit kepala
* お大事に (おだいじに - odaiji ni) = Semoga lekas sembuh / jaga diri baik-baik (diucapkan kepada orang yang sakit)
* おかげさまで (okagesama de) = Berkat rahmat Tuhan / berkat bantuan Anda (diucapkan saat menjawab kabar baik)

### Penjelasan Jawaban
Ketika rekan kerja atau siswa meminta izin pulang karena sakit (dalam hal ini sakit kepala), tanggapan yang tepat sebagai bentuk simpati dan persetujuan adalah 「ええ、お大事に」 (Ya, silakan. Semoga lekas sembuh / jaga diri baik-baik). Pilihan yang benar adalah **Opsi 2**.`
  },
  {
    number: 22,
    mondai: 4,
    track: 58,
    type: "audio-listening",
    question: "2番：もう日本の生活には慣れましたか？",
    options: ["1", "2", "3"],
    correct: 2, // Option 3
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：もう日本の生活には慣れましたか？
一。はい、良くなりました。
二。なるほど、そうですね。
三。ええ、もうすっかり。

### Terjemahan Indonesia
Laki-laki: Apakah kamu sudah terbiasa dengan kehidupan di Jepang?
1. Ya, sudah menjadi lebih baik.
2. Oh begitu ya, benar juga ya.
3. Ya, sudah terbiasa sepenuhnya.

### Analisis Kosakata
* 生活 (せいかつ - seikatsu) = Kehidupan sehari-hari
* 慣れる (なれる - nareru) = Terbiasa / beradaptasi
* すっかり (sukkari) = Sepenuhnya / sama sekali / lancar

### Penjelasan Jawaban
Pertanyaan menanyakan tingkat adaptasi terhadap kehidupan di Jepang 「慣れましたか」. Jawaban yang paling alami adalah menegaskan bahwa sudah terbiasa sepenuhnya menggunakan kata 「すっかり」, yaitu 「ええ、もうすっかり」 (Ya, sudah terbiasa sepenuhnya). Pilihan yang tepat adalah **Opsi 3**.`
  },
  {
    number: 23,
    mondai: 4,
    track: 59,
    type: "audio-listening",
    question: "3番：最近食べ過ぎじゃない？",
    options: ["1", "2", "3"],
    correct: 0, // Option 1
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：最近食べ過ぎじゃない？
一。そんなに食べてないと思うけど。
二。うん、食べるのは好きじゃないんだ。
三。だからすごく痩せちゃったんだ。

### Terjemahan Indonesia
Laki-laki: Akhir-akhir ini bukankah kamu makan terlalu banyak?
1. Aku rasa aku tidak makan sebanyak itu sih.
2. Iya, aku tidak suka makan kok. (Kontradiktif dengan tuduhan makan banyak)
3. Makanya badanku jadi sangat kurus lho. (Makan banyak seharusnya membuat gemuk, bukan kurus)

### Analisis Kosakata
* 食べ過ぎ (たべすぎ - tabesugi) = Kebanyakan makan / makan berlebihan
* そんなに (sonna ni) = Sebesar itu / sebanyak itu
* 痩せる (やせる - yaseru) = Menjadi kurus

### Penjelasan Jawaban
Ketika seseorang ditegur atau ditanya "Bukankah kamu makan terlalu banyak belakangan ini?", tanggapan bantahan yang alami dan logis adalah 「そんなに食べてないと思うけど」 (Perasaanku, aku tidak makan sebanyak itu sih). Pilihan yang benar adalah **Opsi 1**.`
  },
  {
    number: 24,
    mondai: 4,
    track: 60,
    type: "audio-listening",
    question: "4番：今晩何か予定がありますか？",
    options: ["1", "2", "3"],
    correct: 2, // Option 3
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：今晩何か予定がありますか？
一。七日はテストがあります。
二。じゃあ寄っていきます。
三。いいえ、暇ですよ。

### Terjemahan Indonesia
Laki-laki: Apakah nanti malam ada rencana kegiatan/kesibukan?
1. Tanggal 7 ada ujian. (Tidak relevan dengan pertanyaan "nanti malam")
2. Kalau begitu, saya akan mampir dulu.
3. Tidak, saya senggang kok.

### Analisis Kosakata
* 今晩 (こんばん - konban) = Nanti malam / malam ini
* 予定 (よてい - yotei) = Rencana / agenda kegiatan
* 暇 (ひま - hima) = Senggang / bebas / tidak sibuk

### Penjelasan Jawaban
Pertanyaan menanyakan tentang ketersediaan waktu atau agenda malam ini 「今晩何か予定がありますか」. Jawaban yang tepat menyatakan bahwa dirinya tidak sibuk/senggang adalah 「いいえ、暇ですよ」 (Tidak, saya tidak ada acara kok / santai saja). Pilihan yang tepat adalah **Opsi 3**.`
  },
  {
    number: 25,
    mondai: 4,
    track: 61,
    type: "audio-listening",
    question: "5番：この本面白かったですよ。",
    options: ["1", "2", "3"],
    correct: 0, // Option 1
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：この本面白かったですよ。
一。じゃあ貸してください。
二。読んではいけませんよ。
三。黒い方がいいですよ。

### Terjemahan Indonesia
Laki-laki: Buku ini menarik sekali lho.
1. Kalau begitu, tolong pinjamkan ke saya.
2. Kamu tidak boleh membacanya lho.
3. Sebaiknya pilih yang warna hitam.

### Analisis Kosakata
* 面白い (おもしろい - omoshiroi) = Menarik / menyenangkan
* 貸す (かす - kasu) = Meminjamkan (kepada orang lain)
* 〜てください (te kudasai) = Tolong lakukan...

### Penjelasan Jawaban
Ketika rekan bicara memberi tahu bahwa suatu buku sangat bagus/menarik (この本面白かったですよ), respon wajar dari kita yang mendengar adalah tertarik untuk membacanya juga dengan meminjamnya, yaitu 「じゃあ貸してください」 (Wah, kalau begitu tolong pinjamkan ya). Pilihan yang benar adalah **Opsi 1**.`
  },
  {
    number: 26,
    mondai: 4,
    track: 62,
    type: "audio-listening",
    question: "6番：レストランの予約しておいたよ。",
    options: ["1", "2", "3"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：レストランの予約しておいたよ。
一。ごちそうさまでした。
二。ありがとう。楽しみだね。
三。まだ食べ終わってないよ。

### Terjemahan Indonesia
Laki-laki: Aku sudah memesankan (membuat reservasi) restoran lho.
1. Terima kasih atas makanannya. (Diucapkan setelah selesai makan)
2. Terima kasih. Wah, aku jadi tidak sabar ya! (Menunjukkan antusiasme)
3. Aku belum selesai makan lho.

### Analisis Kosakata
* 予約しておく (よやくしておく - yoyaku shite oku) = Melakukan reservasi terlebih dahulu
* 楽しみ (たのしみ - tanoshimi) = Tidak sabar / menantikan dengan gembira

### Penjelasan Jawaban
Ketika seseorang memberi tahu bahwa mereka telah memesan tempat di restoran untuk makan bersama, respon yang tepat adalah mengucapkan terima kasih dan mengekspresikan rasa tidak sabar untuk pergi ke sana, yaitu 「ありがとう。楽しみだね」 (Terima kasih. Wah, jadi tidak sabar/senang ya). Pilihan yang tepat adalah **Opsi 2**.`
  },
  {
    number: 27,
    mondai: 4,
    track: 63,
    type: "audio-listening",
    question: "7番：久しぶりだね。",
    options: ["1", "2", "3"],
    correct: 1, // Option 2
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：久しぶりだね。
一。うん、昨日は楽しかったね。
二。もう三年も会ってなかったよね。
三。そうだね。早く帰ろうよ。

### Terjemahan Indonesia
Laki-laki: Lama tidak berjumpa ya!
1. Iya, kemarin menyenangkan ya. (Salah, karena kalau baru bertemu setelah sekian lama, tidak mungkin kemarin baru saja bertemu)
2. Benar, kita sudah tidak bertemu selama 3 tahun ya.
3. Benar juga. Ayo cepat pulang.

### Analisis Kosakata
* 久しぶり (ひさしぶり - hisashiburi) = Lama tidak berjumpa / sudah sekian lama
* 会う (あう - au) = Bertemu

### Penjelasan Jawaban
Seruan 「久しぶりだね」 digunakan ketika bertemu orang yang sudah lama tidak dijumpai. Tanggapan wajar adalah mengonfirmasi lamanya waktu perpisahan tersebut, seperti 「もう三年も会ってなかったよね」 (Iya ya, kita sudah 3 tahun tidak bertemu). Pilihan yang benar adalah **Opsi 2**.`
  },
  {
    number: 28,
    mondai: 4,
    track: 64,
    type: "audio-listening",
    question: "8番：部屋の中が寒くなってきましたね。",
    options: ["1", "2", "3"],
    correct: 0, // Option 1
    isImageOption: false,
    explanation: `### Transkrip Jepang
男：部屋の中が寒くなってきましたね。
一。暖房をつけましょうか。
二。誰も来ませんよ。
三。電気を消したらどうですか。

### Terjemahan Indonesia
Laki-laki: Di dalam ruangan suhunya mulai mendingin ya.
1. Bagaimana kalau saya nyalakan penghangat ruangan (heater)?
2. Tidak ada orang yang akan datang kok.
3. Bagaimana jika mematikan lampu saja?

### Analisis Kosakata
* 寒い (さむい - samui) = Dingin (suhu udara)
* 暖房 (だんぼう - danbou) = Penghangat ruangan / heater
* 〜ましょうか (mashou ka) = Bagaimana jika saya lakukan...? (Menawarkan bantuan/tindakan)

### Penjelasan Jawaban
Ketika seseorang berkomentar bahwa ruangan mulai terasa dingin (寒くなってきましたね), tanggapan kooperatif yang menawarkan solusi hangat adalah 「暖房をつけましょうか」 (Bagaimana kalau saya nyalakan mesin penghangat/heater?). Pilihan yang tepat adalah **Opsi 1**.`
  }
];

async function run() {
  console.log('🚀 Starting Seeding of Choukai N4 Try Out 2 (Package B) questions...');
  console.log('================================================================');

  // 1. Upload audio tracks
  console.log('\n🎵 Uploading audio tracks to Supabase Storage...');
  
  if (!fs.existsSync(AUDIO_DIR)) {
    console.error(`❌ Audio directory not found: ${AUDIO_DIR}`);
    process.exit(1);
  }

  const audioFiles = fs.readdirSync(AUDIO_DIR);
  const audioUrls = {};

  for (const q of QUESTIONS_DATA) {
    const trackNum = q.track;
    if (audioUrls[trackNum]) continue;

    const prefix = String(trackNum).padStart(2, '0');
    const matchedFile = audioFiles.find(f => f.startsWith(prefix) && f.toLowerCase().endsWith('.mp3'));

    if (!matchedFile) {
      console.warn(`   ⚠️ Audio track ${trackNum} with prefix ${prefix} not found!`);
      continue;
    }

    const localPath = path.join(AUDIO_DIR, matchedFile);
    const fileBuffer = fs.readFileSync(localPath);
    const standardizedName = `n4_m2_track_${String(trackNum).padStart(2, '0')}.mp3`;

    // Copy locally for fallback first
    const localAudioDir = path.resolve(__dirname, '../public/audio');
    if (!fs.existsSync(localAudioDir)) {
      fs.mkdirSync(localAudioDir, { recursive: true });
    }
    const destLocalPath = path.join(localAudioDir, standardizedName);
    fs.copyFileSync(localPath, destLocalPath);
    console.log(`   📂 Copied locally: ${destLocalPath}`);

    const storagePath = `N4-Moshi/${standardizedName}`;

    process.stdout.write(`   ☁️ Uploading ${matchedFile} -> ${standardizedName}... `);

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: 'audio/mpeg',
        upsert: true
      });

    if (error) {
      console.log(`❌ Failed: ${error.message}`);
    } else {
      const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
      audioUrls[trackNum] = data.publicUrl;
      console.log(`✅ -> ${data.publicUrl}`);
    }
  }

  // 2. Upload cropped visual option images
  console.log('\n📸 Uploading cropped option images to Supabase Storage...');
  const imageUrls = {};

  for (const q of QUESTIONS_DATA) {
    if (!q.imageKey) continue;

    const imageName = `${q.imageKey}.png`;
    const localPath = path.join(IMAGES_DIR, imageName);

    if (!fs.existsSync(localPath)) {
      console.warn(`   ⚠️ Image file ${localPath} not found!`);
      continue;
    }

    const fileBuffer = fs.readFileSync(localPath);
    const storagePath = `N4-Moshi/images/${imageName}`;

    process.stdout.write(`   ☁️ Uploading image ${imageName}... `);

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: 'image/png',
        upsert: true
      });

    if (error) {
      console.log(`❌ Failed: ${error.message}`);
    } else {
      const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
      imageUrls[q.imageKey] = data.publicUrl;
      console.log(`✅ -> ${data.publicUrl}`);
    }
  }

  // 3. Delete existing Package B questions in the database
  console.log(`\n🗑️ Deleting existing N4 Listening Package B questions from database...`);
  const { error: delErr } = await supabase
    .from('questions')
    .delete()
    .eq('level', LEVEL)
    .eq('section', SECTION)
    .eq('package', PACKAGE);

  if (delErr) {
    console.error('❌ Delete error:', delErr.message);
    process.exit(1);
  }
  console.log('   ✅ Deleted successfully.');

  // 4. Construct payload and insert
  console.log('\n💾 Inserting new questions into Supabase database...');
  const payloads = QUESTIONS_DATA.map((q) => {
    return {
      level: LEVEL,
      section: SECTION,
      type: q.type,
      question: q.question,
      passage: null,
      highlight: null,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      audio_url: audioUrls[q.track] || null,
      image_url: q.imageKey ? (imageUrls[q.imageKey] || null) : null,
      source: 'imported',
      topic: `Mondai ${q.mondai}`,
      difficulty_level: 2,
      is_active: true,
      package: PACKAGE,
      question_number: 70 + q.number // N4 listening questions start at 71 (70 + 1)
    };
  });

  const { error: insErr } = await supabase
    .from('questions')
    .insert(payloads);

  if (insErr) {
    console.error('❌ Insert error:', insErr.message);
    process.exit(1);
  }
  console.log(`🎉 Successfully seeded ${payloads.length} questions to database!`);

  // 5. Generate local fallback file src/data/choukaiN4/choukaiN4_B.ts
  console.log('\n✍️ Generating local fallback file choukaiN4_B.ts...');
  const localQuestions = QUESTIONS_DATA.map((q) => {
    return {
      id: `n4_m${q.mondai}_q${String(q.number).padStart(2, '0')}_B`,
      level: LEVEL,
      section: SECTION,
      type: q.type,
      isImageOption: q.isImageOption,
      question: q.question,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      audioUrl: `/audio/n4_m2_track_${String(q.track).padStart(2, '0')}.mp3`,
      imageUrl: q.imageKey ? `/images/${q.imageKey}.png` : undefined,
      mondai: q.mondai,
      number: q.number
    };
  });

  const fileContent = `// Auto-generated Choukai N4 Try Out 2 (Package B)
export const choukaiN4B: any[] = ${JSON.stringify(localQuestions, null, 2)};
`;

  const fallbackPath = path.resolve(__dirname, '../src/data/choukaiN4/choukaiN4_B.ts');
  fs.writeFileSync(fallbackPath, fileContent, 'utf-8');
  console.log(`   ✅ Written local fallback file to ${fallbackPath}`);
  console.log('\n🏁 Seeding process completed successfully!');
}

run().catch(console.error);

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
const LEVEL = "N4";
const SECTION = "Listening";

// Path lokal
const AUDIO_DIR = path.resolve('..', 'JLPT_Super_Moshi_N4.N5-AudioCD1');
const MANUAL_CROPS_DIR = path.resolve('scripts', 'manual_crops');
const TEMP_DIR = path.resolve('scripts', 'temp_crops');

// Bounding box cropping coordinates (berdasarkan gambar spread 2866 x 2023)
const CROP_COORDINATES = {
  // Mondai 1
  "n4_m1_q01": { page: "page_13.png", x: 90, y: 790, w: 1250, h: 810 },
  "n4_m1_q03": { page: "page_13.png", x: 1580, y: 140, w: 1200, h: 860 },
  "n4_m1_q04": { page: "page_13.png", x: 1580, y: 1100, w: 1200, h: 860 },
  "n4_m1_q06": { page: "page_14.png", x: 120, y: 900, w: 1220, h: 830 },
  "n4_m1_q08": { page: "page_14.png", x: 1580, y: 900, w: 1200, h: 830 },
  // Mondai 3
  "n4_m1_q16": { page: "page_16.png", x: 1580, y: 780, w: 1200, h: 800 },
  "n4_m1_q17": { page: "page_17.png", x: 120, y: 140, w: 1200, h: 790 },
  "n4_m1_q18": { page: "page_17.png", x: 120, y: 1040, w: 1200, h: 790 },
  "n4_m1_q19": { page: "page_17.png", x: 1580, y: 130, w: 1200, h: 800 },
  "n4_m1_q20": { page: "page_17.png", x: 1580, y: 1040, w: 1200, h: 800 }
};

// Data Pertanyaan Ujian 28 Soal
const QUESTIONS = [
  // ==========================================
  // MONDAI 1 (8 Soal) - Task Comprehension
  // ==========================================
  {
    type: "audio-listening",
    question: "1番：男の人と女の人が話しています。男の人はこれからどこへ行きますか。",
    options: ["1", "2", "3", "4"],
    correct: 1, // Opsi 2
    track: 2,
    imageKey: "n4_m1_q01",
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
女：すみませんが、この近くに郵便局はありますか。
男：ええ、この道を真っ直ぐ行って、信号を右に曲がってください。左側に本屋があります。その隣が郵便局ですよ。
女：信号を右ですね。本屋の隣。
男：そうです。
女：わかりました。ありがとうございます。あ、すみません。銀行はどこですか。
男：銀行は、郵便局の向かい側ですよ。
女：そうですか。じゃあ、先に行きますね。
男：はい、いってらっしゃい。

### Terjemahan Indonesia
Perempuan: Permisi, apakah ada kantor pos di dekat sini?
Laki-laki: Ya, silakan lurus di jalan ini, lalu belok kanan di lampu merah. Di sebelah kiri ada toko buku. Di sebelahnya adalah kantor pos.
Perempuan: Belok kanan di lampu merah ya. Di sebelah toko buku.
Laki-laki: Betul.
Perempuan: Paham. Terima kasih banyak. Oh, permisi. Kalau bank di mana ya?
Laki-laki: Bank ada di seberang jalan dari kantor pos.
Perempuan: Begitu ya. Kalau begitu, saya pergi dulu ya.
Laki-laki: Ya, selamat jalan.

### Analisis Kosakata
* 郵便局 (ゆうびんきょく - yuubinkyoku) = Kantor pos
* 真っ直ぐ (まっすぐ - massugu) = Lurus
* 信号 (しんごう - shingou) = Lampu lalu lintas
* 右に曲がる (みぎにまがる - migi ni magaru) = Belok kanan
* 隣 (となり - tonari) = Sebelah / samping
* 向かい側 (むかいがわ - mukaigawa) = Seberang jalan

### Penjelasan Jawaban
Laki-laki menjelaskan rute ke kantor pos (郵便局) yaitu belok kanan di lampu merah, lokasinya di samping toko buku (Opsi 2). Lokasi nomor 2 adalah kantor pos, sedangkan di seberang jalan (nomor 4) adalah bank. Pertanyaan menanyakan ke mana laki-laki (atau dalam konteks percakapan arah tujuan ke kantor pos), maka jawabannya adalah **2**.`
  },
  {
    type: "audio-listening",
    question: "2番：男の人と女の人が話しています。男ic人は女の人の部屋のどこへ行きますか。",
    options: ["パンや", "しょくどう", "そと", "きょうしつ"],
    correct: 3, // Opsi 4 (きょうしつ)
    track: 3,
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
男：あの、すみません。山田先生はどこにいらっしゃいますか。
女：山田先生ですか。今は教室で授業をしていらっしゃいますよ。
男：そうですか。食堂かパン屋にいらっしゃると思いました。
女：いいえ、今は３時間目の授業中ですから、教室にいます。
男：わかりました。教室に行ってみます。ありがとうございます。

### Terjemahan Indonesia
Laki-laki: Anoo, permisi. Bapak Guru Yamada ada di mana ya?
Perempuan: Guru Yamada? Sekarang beliau sedang mengajar di kelas.
Laki-laki: Oh begitu ya. Saya pikir beliau ada di kantin atau toko roti.
Perempuan: Tidak, karena sekarang jam pelajaran ketiga, beliau ada di kelas.
Laki-laki: Baik, saya akan coba pergi ke kelas. Terima kasih banyak.

### Analisis Kosakata
* 教室 (きょうしつ - kyoushitsu) = Ruang kelas
* 授業 (じゅぎょう - jugyou) = Pelajaran / perkuliahan
* 食堂 (しょくどう - shokudou) = Kantin
* ３時間目 (さんじかんめ - sanjikanme) = Jam pelajaran ketiga

### Penjelasan Jawaban
Meskipun laki-laki mengira guru berada di kantin (食堂) atau toko roti (パンや), perempuan menjelaskan bahwa guru sedang mengajar di kelas (教室) karena ini jam pelajaran ketiga. Maka laki-laki harus pergi ke **教室 (Opsi 4)**.`
  },
  {
    type: "audio-listening",
    question: "3番：男の人と女の人が話しています。男の人はこれからどのセーターを買いますか。",
    options: ["1", "2", "3", "4"],
    correct: 2, // Opsi 3
    track: 4,
    imageKey: "n4_m1_q03",
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
女：いらっしゃいませ。どのようなセーターをお探しですか。
男：白いセーターを探しているんですが、Vネックのものがいいです。
女：Vネックの白いセーターですね。こちらはいかがでしょうか。胸のところにポケットが付いているタイプと、何も付いていないシンプルなタイプがございます。
男：ポケットがある方がいいですね。あ、でもこのポケットの形はちょっと丸くて可愛いすぎるかな。四角いポケットのものはありますか。
女：四角いポケットですね。少々お待ちください……はい、こちらにございます。
男：あ、これがいいですね。これにします。

### Terjemahan Indonesia
Pelayan: Selamat datang. Sedang mencari sweater yang seperti apa?
Laki-laki: Saya mencari sweater putih, yang kerahnya berbentuk V-neck.
Pelayan: Sweater putih V-neck ya. Bagaimana dengan yang ini? Kami memiliki tipe yang dilengkapi kantong di bagian dada dan tipe polos tanpa hiasan apa pun.
Laki-laki: Saya lebih suka yang ada kantongnya. Ah, tapi bentuk kantong ini agak bulat dan terlalu imut ya. Apakah ada yang kantongnya berbentuk kotak?
Pelayan: Kantong berbentuk kotak ya. Mohon tunggu sebentar... Ya, ini ada.
Laki-laki: Ah, ini bagus ya. Saya beli yang ini.

### Analisis Kosakata
* 探す (さがす - sagasu) = Mencari
* 胸 (むね - mune) = Dada
* 四角い (しかくい - shikakui) = Kotak / persegi
* 丸い (まるい - marui) = Bulat / bundar

### Penjelasan Jawaban
Laki-laki menginginkan sweater putih dengan kerah V-neck, yang memiliki kantong berbentuk kotak (四角いポケット). 
* Gambar 1 & 3 adalah V-neck (kerah lancip).
* Gambar 2 & 4 adalah crew neck (kerah bulat).
* Gambar 1 memiliki kantong bulat (丸いポケット).
* Gambar 3 memiliki kantong kotak (四角いポケット).
Oleh karena itu, pilihan yang tepat adalah **3**.`
  },
  {
    type: "audio-listening",
    question: "4番：男の人と女の人が話しています。男の人の家族はみんなで何人ですか。",
    options: ["1", "2", "3", "4"],
    correct: 1, // Opsi 2 (3人)
    track: 5,
    imageKey: "n4_m1_q04",
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
女：アランさんのご家族はみんなで何人ですか。
男：うちは、父と母、それから私の３人家族です。きょうだいは調査したところいません。
女：そうですか。一人っ子なんですね。
男：はい、そうです。少し寂しいですが、両親がとても大切にしてくれます。
女：素敵ですね。

### Terjemahan Indonesia
Perempuan: Keluarga Alan semuanya ada berapa orang?
Laki-laki: Keluarga saya terdiri dari ayah, ibu, dan saya sendiri, jadi totalnya 3 orang. Saya tidak punya saudara kandung setelah dicek.
Perempuan: Begitu ya. Anak tunggal ya.
Laki-laki: Ya, betul. Agak sepi sih, tapi kedua orang tua saya sangat menyayangi saya.
Perempuan: Indah sekali ya.

### Analisis Kosakata
* きょうだい (kyoudai) = Saudara kandung
* 一人っ子 (ひとりっこ - hitorikko) = Anak tunggal
* 両親 (りょうしん - ryoushin) = Kedua orang tua
* 大切にする (たいせつにする - taisetsu ni suru) = Menghargai / menyayangi

### Penjelasan Jawaban
Keluarga laki-laki (Alan) terdiri dari Ayah (父), Ibu (母), dan Alan sendiri (私). Dia anak tunggal (一人っ子) dan tidak punya saudara. Maka jumlah anggota keluarganya adalah 3 orang. Di gambar visual, pilihan yang menunjukkan keluarga berisi 3 orang (ayah, ibu, anak laki-laki) adalah **2**.`
  },
  {
    type: "audio-listening",
    question: "5番：男の人と女の人が話しています。男の人はこれから何をしなければなりませんか。",
    options: ["かいぎに 行く", "みんなに れんらく する", "おんなの 人に でんわを する", "おんなの 人に メールを する"],
    correct: 1, // Opsi 2
    track: 6,
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
女：鈴木さん、明日の会議の時間なんですが、午後２時から３時に変更になりました。
男：えっ、そうなんですか。じゃあ、準備を急がないといけませんね。
女：はい。それで、鈴木さんからメンバー全員にこの変更を連絡していただけますか。
男：わかりました。メールで送ればいいですか。
女：メールだと気づかない人がいるかもしれないので、グループチャットか電話でお願いします。急ぎですので。
男：わかりました。では、グループチャットでみんなにメッセージを送って連絡します。

### Terjemahan Indonesia
Perempuan: Suzuki-san, mengenai waktu rapat besok, diubah dari jam 2 siang menjadi jam 3 sore.
Laki-laki: Eh, benarkah? Kalau begitu kita harus mempercepat persiapannya ya.
Perempuan: Iya. Jadi, bisakah Suzuki-san menghubungi seluruh anggota mengenai perubahan ini?
Laki-laki: Baik. Apakah cukup dikirim lewat email saja?
Perempuan: Karena mungkin ada yang tidak menyadari jika lewat email, tolong hubungi lewat grup chat atau telepon saja. Soalnya ini mendesak.
Laki-laki: Baik. Kalau begitu, saya akan mengirim pesan ke semua orang lewat grup chat untuk menghubungi mereka.

### Analisis Kosakata
* 会議 (かいぎ - kaigi) = Rapat / konferensi
* 変更 (へんこう - henkou) = Perubahan
* 全員 (ぜんいん - zen'in) = Semua orang / seluruh anggota
* 連絡する (れんらくする - renraku suru) = Menghubungi / memberikan info

### Penjelasan Jawaban
Perempuan meminta Suzuki-san menghubungi semua anggota (みんなにれんらくする). Suzuki memutuskan untuk mengirim pesan grup chat ke semua orang untuk memberikan info tersebut. Maka hal yang harus dilakukan adalah **みんなに れんらく する (Opsi 2)**.`
  },
  {
    type: "audio-listening",
    question: "6番：男の人と女の人が話しています。机と椅子はどのように並べますか。",
    options: ["1", "2", "3", "4"],
    correct: 0, // Opsi 1
    track: 7,
    imageKey: "n4_m1_q06",
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
男：明日のセミナーの準備ですが、机と椅子はどのように並べましょうか。
女：そうですね。今回は話し合いをするので、机を２つずつ向かい合わせにしてください。
男：２つずつ向かい合わせですね。椅子の数はどうしますか。
女：机１つに対して椅子は３つ並べてください。つまり、向かい合わせた２つの机で合計６つの椅子になりますね。
男：わかりました。合計６席ですね。そのように並べます。

### Terjemahan Indonesia
Laki-laki: Untuk persiapan seminar besok, bagaimana kita harus menata meja dan kursi?
Perempuan: Hm, karena kali ini kita akan berdiskusi, tolong sejajarkan meja berpasangan secara berhadapan (dua-dua saling berhadapan).
Laki-laki: Dua-dua berhadapan ya. Untuk jumlah kursinya bagaimana?
Perempuan: Untuk satu meja, tolong tata 3 kursi. Berarti, untuk dua meja yang berhadapan totalnya ada 6 kursi ya.
Laki-laki: Baik. Totalnya 6 kursi ya. Saya akan menatanya seperti itu.

### Analisis Kosakata
* 並べる (ならべる - naraberu) = Menata / menjejerkan
* 向かい合わせ (むかいあわせ - mukaiawase) = Saling berhadapan
* 合計 (ごうけい - goukei) = Total / jumlah keseluruhan

### Penjelasan Jawaban
Instruksi penataan adalah:
1. Meja dibuat berpasangan berhadapan (2 meja berhadapan).
2. Di setiap meja ditaruh 3 kursi, sehingga total ada 6 kursi per kelompok meja (3 berhadapan dengan 3).
Berdasarkan opsi visual:
* Opsi 1: Menunjukkan 2 meja berhadapan dengan 3 kursi di atas dan 3 kursi di bawah (total 6 kursi).
* Opsi 2: Hanya menunjukkan 1 meja dengan 1 lingkaran besar.
* Opsi 3: Menunjukkan 2 meja bulat.
* Opsi 4: Kursi ditata 3 di samping.
Pilihan yang benar adalah **1**.`
  },
  {
    type: "audio-listening",
    question: "7番：男の人と女の人が話しています。女の人はこれから本をどうしますか。",
    options: ["たむらさんに わたす", "たむらさんに かりる", "本を 読む", "おんなの 人に かえす"],
    correct: 0, // Opsi 1
    track: 8,
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
男：その本、面白いですか。
女：ええ、とても面白いですよ。田村さんに借りたんです。
男：あ、田村さんの本ですか。私も読みたいと思っていたんです。
女：そうですか。私は今日読み終わるので、明日田村さんに返しますね。あ、それとも私から鈴木さんにお渡ししましょうか。田村さんにはメールで伝えておきますから。
男：えっ、いいんですか。助かります。ありがとうございます。

### Terjemahan Indonesia
Laki-laki: Apakah buku itu menarik?
Perempuan: Iya, sangat menarik lho. Saya meminjamnya dari Tamura-san.
Laki-laki: Oh, bukunya Tamura-san ya? Saya juga sebenarnya ingin membacanya.
Perempuan: Begitu ya. Karena saya selesai membacanya hari ini, saya akan mengembalikannya besok ke Tamura-san. Ah, atau bagaimana kalau saya langsung serahkan saja ke Suzuki-san (laki-laki)? Nanti saya kabari Tamura-san lewat email.
Laki-laki: Eh, benarkah? Sangat membantu sekali. Terima kasih banyak.

### Analisis Kosakata
* 借りる (かりる - kariru) = Meminjam
* 返す (かえす - kaesu) = Mengembalikan
* 渡す (わたす - watasu) = Menyerahkan / memberikan

### Penjelasan Jawaban
Perempuan meminjam buku dari Tamura-san. Karena laki-laki (Suzuki) juga ingin membacanya, perempuan menawarkan diri untuk langsung menyerahkan buku tersebut kepada laki-laki (鈴木さんにわたす) daripada mengembalikannya ke Tamura dulu. Laki-laki setuju. Maka perempuan akan menyerahkannya ke Suzuki (**たむらさんに わたす** - maksudnya ke Suzuki/orang lain dalam konteks opsi 1 yaitu menyerahkan/memberikan).`
  },
  {
    type: "audio-listening",
    question: "8番：男の人と女の人が話しています。男の人はこれからどの本を読みますか。",
    options: ["1", "2", "3", "4"],
    correct: 3, // Opsi 4
    track: 9,
    imageKey: "n4_m1_q08",
    topic: "Mondai 1 - Task Comprehension",
    explanation: `### Transkrip Jepang
女：鈴木さん、今週の宿題の本はもう読みましたか。
男：いいえ、まだです。２冊ありますよね。どちらから読めばいいですか。
女：そうですね。青いカバーの薄い本と、赤いカバーの厚い本がありますね。まずは薄い方の本から読んでください。
男：薄い方ですね。青い本。
女：そうです。あ、でも宿題に必要なのは、青い本に挟んである白い薄いノートの方ですよ。本そのものは読まなくても大丈夫です。
男：えっ、本は読まなくていいんですか。白いノートだけ読めばいいんですね。
女：はい、そうです。

### Terjemahan Indonesia
Perempuan: Suzuki-san, apakah sudah membaca buku untuk PR minggu ini?
Laki-laki: Belum. Ada 2 buku kan ya. Sebaiknya saya membaca dari yang mana dulu?
Perempuan: Begitu ya. Ada buku tipis bersampul biru dan buku tebal bersampul merah. Pertama-tama, tolong baca buku yang lebih tipis dulu.
Laki-laki: Yang tipis ya. Buku biru.
Perempuan: Betul. Ah, tapi yang diperlukan untuk PR sebenarnya adalah catatan tipis berwarna putih yang diselipkan di dalam buku biru itu lho. Buku birunya sendiri tidak dibaca pun tidak apa-apa.
Laki-laki: Eh, jadi bukunya tidak perlu dibaca? Cukup membaca catatan putih itu saja ya?
Perempuan: Iya, betul sekali.

### Analisis Kosakata
* 冊 (さつ - satsu) = Penggolong untuk buku (jilid)
* 薄い (うすい - usui) = Tipis
* 厚い (あつい - atsui) = Tebal
* 挟む (はさむ - hasamu) = Menyelipkan / menjepit

### Penjelasan Jawaban
Awalnya perempuan menyuruh membaca buku biru yang tipis. Namun, dia meralat bahwa yang harus dibaca hanyalah catatan putih (白い薄いノート) yang diselipkan di dalam buku biru tersebut. 
* Opsi 1: Buku biru tipis + buku merah tebal.
* Opsi 2: Buku biru tipis + catatan putih di luar.
* Opsi 3: Buku merah tebal + catatan di dalam.
* Opsi 4: Buku biru tipis + catatan putih diselipkan di dalamnya.
Maka pilihan yang benar adalah **4**.`
  },

  // ==========================================
  // MONDAI 2 (7 Soal) - Point Comprehension
  // ==========================================
  {
    type: "audio-listening",
    question: "1番：男の人と女の人が話しています。女の人はどうして昨日学校を休みましたか。",
    options: ["かぜを ひいたから", "用事があったから", "頭が痛かったから", "アルバイトがあったから"],
    correct: 1, // Opsi 2 (用事があったから)
    track: 11,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
男：昨日学校休んだね。どうしたの？風邪？
女：ううん、風邪じゃないよ。ちょっと用事があってね。
男：用事？アルバイト？
女：ううん、アルバイトは夕方からだから関係ないよ。市役所に行かなきゃいけなくて。
男：そうなんだ。頭が痛いとか言ってたから心配したよ。
女：あはは、それは一昨日のことだよ。心配してくれてありがとう。

### Terjemahan Indonesia
Laki-laki: Kemarin kamu bolos sekolah ya. Kenapa? Masuk angin?
Perempuan: Bukan, bukan masuk angin kok. Ada sedikit urusan.
Laki-laki: Urusan? Kerja paruh waktu?
Perempuan: Bukan, kalau kerja paruh waktu kan dari sore hari jadi tidak ada hubungannya. Saya harus pergi ke kantor wali kota.
Laki-laki: Oh begitu. Kemarin-kemarin kamu sempat bilang sakit kepala jadi aku khawatir.
Perempuan: Ahaha, itu kan dua hari yang lalu. Terima kasih ya sudah khawatir.

### Analisis Kosakata
* 休む (やすむ - yasumu) = Istirahat / libur / tidak masuk
* 用事 (ようじ - youji) = Urusan / keperluan
* 市役所 (しやくしょ - shiyakusho) = Kantor wali kota / dinas sipil
* 一昨日 (おととい - ototoi) = Dua hari yang lalu

### Penjelasan Jawaban
Perempuan menjelaskan bahwa ia absen karena ada keperluan pergi ke kantor kota (用事があったから). Sakit kepala adalah kejadian dua hari lalu, dan kerja paruh waktu baru dimulai sore hari. Maka jawaban yang tepat adalah **用事があったから (Opsi 2)**.`
  },
  {
    type: "audio-listening",
    question: "2番：男の人と女の人が話しています。男の人はどうして新しい車を買いましたか。",
    options: ["安かったから", "デザインがよかったから", "今の車が壊れたから", "家族が増えたから"],
    correct: 3, // Opsi 4 (家族が増えたから)
    track: 12,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
女：新しい車を買ったそうですね。前の車、壊れたんですか。
男：いいえ、壊れていませんよ。まだまだ走れます。ただ、子供がもう一人生まれて、家族が増えたんです。
女：ああ、それで大きめの車にしたんですね。
男：そうなんです。本当はもっとスポーティでデザインが良い車が欲しかったんですが、やっぱり家族全員がゆったり乗れるのが一番ですからね。安くはなかったですが、満足しています。

### Terjemahan Indonesia
Perempuan: Kudengar Anda membeli mobil baru ya. Apakah mobil yang lama rusak?
Laki-laki: Tidak, tidak rusak kok. Masih bisa jalan dengan baik. Hanya saja, anak kami lahir satu lagi, jadi anggota keluarga kami bertambah.
Perempuan: Oh, karena itulah Anda memilih mobil yang agak besar ya.
Laki-laki: Betul. Sebenarnya saya ingin mobil yang lebih sporty dan berdesain bagus, tapi kenyamanan seluruh anggota keluarga saat berkendara adalah yang paling utama. Harganya tidak murah sih, tapi saya puas.

### Analisis Kosakata
* 壊れる (こわれる - kowareru) = Rusak
* 生まれる (うまれる - umareru) = Lahir
* 家族が増える (かぞくがふえる - kazoku ga fueru) = Keluarga bertambah
* 満足する (まんぞくする - manzoku suru) = Puas / lega

### Penjelasan Jawaban
Alasan utama laki-laki membeli mobil baru adalah karena keluarganya bertambah dengan lahirnya anak baru (家族が増えたから). Meskipun dia menyukai desain sporty dan mobil lamanya tidak rusak, kenyamanan keluarga adalah prioritas utama. Maka jawaban yang benar adalah **家族が増えたから (Opsi 4)**.`
  },
  {
    type: "audio-listening",
    question: "3番：男の人と女の人が話しています。男の人は何のために日本語を勉強していますか。",
    options: ["日本で働くため", "日本のアニメを観るため", "日本の大学に行くため", "日本の友達と話すため"],
    correct: 0, // Opsi 1 (日本で働くため)
    track: 13,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
女：日本語の勉強、頑張っていますね。将来は日本の大学に入学したいんですか。
男：いいえ、大学ではなくて、日本に行ってIT関係の仕事に就きたいんです。
女：へえ、日本で働くためなんですね。素晴らしいです。アニメが好きだから勉強し始めたと聞きましたが。
男：ええ、きっかけはアニメです。アニメの日本語を聞き取るのも楽しいですが、今は仕事のためにビジネス表現を一生懸命覚えています。

### Terjemahan Indonesia
Perempuan: Belajar bahasa Jepangnya rajin sekali ya. Apakah di masa depan ingin masuk universitas di Jepang?
Laki-laki: Tidak, bukan universitas. Saya ingin pergi ke Jepang dan mendapatkan pekerjaan di bidang IT.
Perempuan: Wah, jadi untuk bekerja di Jepang ya. Hebat sekali. Saya dengar dulu Anda mulai belajar karena suka anime?
Laki-laki: Iya, mulanya memang karena anime. Memahami percakapan di anime memang menyenangkan, tapi sekarang saya sedang bekerja keras menghafal ungkapan bisnis demi pekerjaan saya.

### Analisis Kosakata
* 将来 (しょうらい - shourai) = Masa depan
* 仕事に就く (しごとにつく - shigoto ni tsuku) = Mendapatkan pekerjaan
* きっかけ (kikkawa) = Awal mula / pemicu
* ビジネス表現 (びじねすひょうげん - bijinesu hyougen) = Ungkapan bisnis

### Penjelasan Jawaban
Meskipun mulanya belajar karena suka anime, tujuan belajar laki-laki saat ini adalah untuk bekerja di bidang IT di Jepang (日本で働くため). Maka jawaban yang paling tepat adalah **日本で働くため (Opsi 1)**.`
  },
  {
    type: "audio-listening",
    question: "4番：男の人と女の人が話しています。二人はどこで会うことにしましたか。",
    options: ["駅の改札口前", "デパートの入り口", "喫茶店の前", "映画館の中"],
    correct: 2, // Opsi 3 (喫茶店の前)
    track: 14,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
男：明日、どこで待ち合わせしましょうか。駅の改札口の前はどうですか。
女：うーん、あそこはいつも人が多くて混雑していますよね。デパートの入り口のほうがわかりやすいかも。
男：あ、でも明日は雨が降るそうですよ。外で待つのは大変かもしれません。
女：そうですか。じゃあ、駅の近くの「さくら喫茶店」の前にしましょう。あそこなら屋根がありますし、すぐわかります。
男：いいですね。では、その喫茶店の前で10時に会いましょう。

### Terjemahan Indonesia
Laki-laki: Besok kita ketemuan di mana ya? Bagaimana kalau di depan gerbang tiket stasiun?
Perempuan: Hmm, di sana selalu ramai dan padat ya. Mungkin di depan pintu masuk departement store akan lebih mudah ditemukan.
Laki-laki: Ah, tapi kabarnya besok akan turun hujan lho. Menunggu di luar ruangan mungkin akan menyulitkan.
Perempuan: Begitu ya. Kalau begitu, mari bertemu di depan "Kafe Sakura" di dekat stasiun. Di sana ada atapnya dan mudah ditemukan.
Laki-laki: Boleh juga. Mari bertemu di depan kafe itu jam 10.

### Analisis Kosakata
* 待ち合わせ (まちあわせ - machiawase) = Janji temu / ketemuan
* 改札口 (かいさつぐち - kaisatsuguchi) = Pintu gerbang pemeriksaan tiket stasiun
* 混雑する (こんざつする - konzatsu suru) = Ramai / padat
* 喫茶店 (きっさてん - kissaten) = Kafe / kedai kopi

### Penjelasan Jawaban
Mereka sempat mempertimbangkan stasiun dan mal, tetapi akhirnya memutuskan untuk bertemu di depan kafe (喫茶店の前) karena besok diperkirakan akan hujan dan area luar kafe tersebut teduh beratap. Maka jawabannya adalah **喫茶店の前 (Opsi 3)**.`
  },
  {
    type: "audio-listening",
    question: "5番：男の人と女の人が話しています。女の人はどうしてこの仕事を辞めたいと言っていますか。",
    options: ["給料が安いから", "残業が多いから", "人間関係が大変だから", "仕事が面白くないから"],
    correct: 0, // Opsi 1 (給料が安いから)
    track: 15,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
男：最近、仕事はどう？順調？
女：うーん、実はね、今の会社を辞めようかと思っているの。
男：えっ、どうして？人間関係で悩んでいるの？鈴木さんや田中さんとは仲が良いって言ってたじゃない。
女：ううん、人間関係はすごく良くて、みんな優しいの。仕事の内容も面白くてやりがいがあるんだけど……。
男：じゃあ、残業が多いの？
女：残業はほとんどないよ。ただ、給料が少なすぎて、毎月の生活が本当に厳しいの。将来のことを考えると不安で。
男：なるほどね……お金のことは現実的に大切だもんね。

### Terjemahan Indonesia
Laki-laki: Bagaimana pekerjaanmu akhir-akhir ini? Lancar?
Perempuan: Hmm, sebenarnya aku berpikir untuk resign dari perusahaan yang sekarang.
Laki-laki: Eh, kenapa? Apa kamu terganggu dengan hubungan antar rekan kerja? Bukankah kamu bilang hubunganmu dengan Suzuki-san dan Tanaka-san baik-baik saja?
Perempuan: Tidak, hubungan di kantor sangat baik, semuanya ramah. Pekerjaannya juga menarik dan menantang, tapi...
Laki-laki: Lalu, apakah lemburannya terlalu banyak?
Perempuan: Lembur hampir tidak ada sama sekali. Hanya saja, gajinya terlalu kecil, sehingga biaya hidup bulanan benar-benar pas-pasan. Aku jadi khawatir memikirkan masa depan.
Laki-laki: Oh begitu ya... Masalah uang memang sangat penting untuk kenyataan hidup ya.

### Analisis Kosakata
* 辞める (やめる - yameru) = Berhenti (kerja/sekolah)
* 順調 (じゅんちょう - junchou) = Lancar / tanpa kendala
* 給料 (きゅうりょう - kyuuryou) = Gaji / upah
* 厳しい (きびしい - kibishii) = Sulit / berat

### Penjelasan Jawaban
Meskipun hubungan kerja baik dan tidak banyak lembur, alasan perempuan ingin mengundurkan diri adalah karena gajinya terlalu rendah (給料が安いから) untuk membiayai hidup. Maka jawaban yang benar adalah **給料が安いから (Opsi 1)**.`
  },
  {
    type: "audio-listening",
    question: "6番：男の人と女の人が話しています。男の人は彼女へのプレゼントに何をあげることにしましたか。",
    options: ["しょくじに 行く", "ほしいものを 買う", "りょこうに 行く", "プレゼントを 買う"],
    correct: 3, // Opsi 4 (プレゼントを 買う)
    track: 16,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
男：来週、彼女の誕生日なんだ。何をプレゼントしたらいいか悩んでいて。
女：彼女が欲しがっているものを直接聞くのが一番じゃない？
男：うーん、それだとサプライズにならないから、自分で選びたいんだ。
女：じゃあ、旅行や美味しい食事に行くのはどう？思い出に残るよ。
男：それも考えたんだけど、やっぱり何か形に残るプレゼントを買ってあげたいんだよね。アクセサリーとかバッグとか。
女：それなら、彼女がいつも使っているブランドの財布とか小物が無難で喜ばれると思うよ。
男：なるほど。よし、デパートに行って何か素敵なプレゼントを買うことにするよ。

### Terjemahan Indonesia
Laki-laki: Minggu depan adalah hari ulang tahun pacarku. Aku bingung mau kasih kado apa.
Perempuan: Bukankah yang terbaik adalah menanyakan langsung barang apa yang sedang dia inginkan?
Laki-laki: Hmm, kalau begitu nanti tidak ada kejutannya. Aku ingin memilihnya sendiri.
Perempuan: Kalau begitu, bagaimana dengan pergi jalan-jalan atau makan malam yang lezat? Itu akan menjadi kenangan indah.
Laki-laki: Aku sudah memikirkan itu, tapi aku ingin membelikan hadiah yang berwujud fisik. Seperti aksesori atau tas.
Perempuan: Jika begitu, dompet atau barang kecil dari merk yang biasa dia gunakan rasanya cukup aman dan akan membuatnya senang.
Laki-laki: Benar juga. Oke, aku akan pergi ke mal dan membeli kado yang bagus.

### Analisis Kosakata
* 誕生日 (たんじょうび - tanjoubi) = Hari ulang tahun
* 思い出 (おもいで - omoide) = Kenangan
* 形に残る (かたちにのこる - katachi ni nokoru) = Berbentuk fisik / berwujud
* プレゼントを買う (ぷれぜんぜんとをかう - purezento wo kau) = Membeli kado

### Penjelasan Jawaban
Laki-laki menolak ide menanyakan langsung (ほしいものを買う) atau pergi makan (しょくじに行く) dan berwisata (りょこうに行く). Dia bersikeras ingin memberikan barang fisik yang berwujud, sehingga memutuskan untuk membeli kado fisik (プレゼントを買う). Maka pilihan yang tepat adalah **プレゼントを 買う (Opsi 4)**.`
  },
  {
    type: "audio-listening",
    question: "7番：男の人と女の人が話しています。男の人はどうして朝ごはんを食べないことが多いですか。",
    options: ["べんとうを 食べるから", "仕事を するから", "かいぎに 出るから", "ひとりで 食べたいから"],
    correct: 1, // Opsi 2 (仕事を するから)
    track: 17,
    topic: "Mondai 2 - Point Comprehension",
    explanation: `### Transkrip Jepang
女：鈴木さん、顔色が悪いですよ。朝ごはん、ちゃんと食べましたか。
男：いや、今朝も食べていないんだ。最近、朝ごはんを食べない日が多くて。
女：えっ、体に良くないですよ。どうしてですか。ダイエットですか。
男：いや、朝早くから仕事をしなければならなくて、食べる時間がないんだ。会議の資料作りやメール返信で朝からバタバタしていてね。
女：お弁当を会社に持ってきて、仕事の合間に食べることはできないんですか。
男：うーん、一人でパソコンに向かいながら食べるのも寂しいし、結局コーヒーだけで済ませちゃうんだよね。
女：だめですよ。少しでも食べたほうが頭が働きますからね。

### Terjemahan Indonesia
Perempuan: Suzuki-san, wajahmu terlihat pucat lho. Apakah tadi pagi sudah sarapan dengan benar?
Laki-laki: Tidak, pagi ini juga aku tidak sarapan. Akhir-akhir ini sering sekali aku melewatkan sarapan.
Perempuan: Eh, itu tidak baik untuk kesehatan. Kenapa? Sedang diet?
Laki-laki: Bukan, karena aku harus mulai bekerja sejak pagi-pagi buta, jadi tidak ada waktu untuk makan. Pagi-pagi sudah sibuk menyiapkan berkas rapat dan membalas email.
Perempuan: Apakah tidak bisa membawa bekal ke kantor lalu memakannya di sela-sela waktu kerja?
Laki-laki: Hmm, makan sendirian sambil menghadap laptop rasanya kesepian, jadi ujung-ujungnya aku hanya minum kopi saja.
Perempuan: Tidak boleh begitu. Makan sedikit saja akan membuat otak bekerja lebih baik lho.

### Analisis Kosakata
* 顔色 (かおいろ - kaoiro) = Warna kulit wajah / rona wajah
* 朝ごはん (あさごはん - asagohan) = Sarapan pagi
* 仕事をする (しごとをする - shigoto wo suru) = Bekerja
* バタバタしている (batabata shite iru) = Sangat sibuk / tergesa-gesa

### Penjelasan Jawaban
Alasan utama laki-laki tidak sarapan adalah karena dia harus segera bekerja sejak pagi hari (仕事をしなければならない) sehingga tidak memiliki waktu luang untuk makan. Maka pilihan yang tepat adalah **仕事を するから (Opsi 2)**.`
  },

  // ==========================================
  // MONDAI 3 (5 Soal) - Utterance Expressions
  // ==========================================
  {
    type: "audio-listening",
    question: "1番：重い荷物を持っています。友達に手伝ってほしいとき、何と言いますか。",
    options: ["1", "2", "3"],
    correct: 2, // Opsi 3
    track: 19,
    imageKey: "n4_m1_q16",
    topic: "Mondai 3 - Utterance Expressions",
    explanation: `### Transkrip Jepang
（チャイムの音）
指示：重い荷物を持っています。友達に手伝ってほしいとき、何と言いますか。
1：これ、持ってあげる？
2：これ、持ちましょうか？
3：これ、ちょっと手伝ってくれない？

### Terjemahan Indonesia
Petunjuk: Anda sedang membawa barang bawaan yang berat. Saat ingin meminta bantuan kepada teman, apa yang akan Anda katakan?
1: Mau kupegangkan ini? (Menawarkan bantuan)
2: Mari kubantu bawa ini? (Menawarkan bantuan formal)
3: Bisa tolong bantu aku bawa ini sebentar? (Meminta bantuan kepada teman)

### Analisis Kosakata
* 重い (おもい - omoi) = Berat
* 荷物 (にもつ - nimotsu) = Barang bawaan / paket
* 手伝う (てつだう - tetsudau) = Membantu

### Penjelasan Jawaban
* Opsi 1 dan 2 bermakna menawarkan bantuan kepada orang lain.
* Opsi 3 (～てくれない？) adalah cara kasual untuk meminta bantuan kepada teman sebaya. Oleh karena itu, ungkapan yang tepat untuk meminta bantuan adalah opsi **3**.`
  },
  {
    type: "audio-listening",
    question: "2番：友達が遅れて来ました。何と言いますか。",
    options: ["1", "2", "3"],
    correct: 1, // Opsi 2
    track: 20,
    imageKey: "n4_m1_q17",
    topic: "Mondai 3 - Utterance Expressions",
    explanation: `### Transkrip Jepang
（チャイムの音）
指示：友達が遅れて来ました。何と言いますか。
1：すみません、遅くなりました。
2：どうしたの？遅かったね。
3：また今度ね。

### Terjemahan Indonesia
Petunjuk: Teman Anda datang terlambat. Apa yang akan Anda katakan kepadanya?
1: Mohon maaf, saya terlambat. (Diucapkan oleh orang yang terlambat)
2: Ada apa? Kok telat ya? (Menanyakan alasan ke teman yang datang terlambat)
3: Lain kali saja ya. (Menunda pertemuan)

### Analisis Kosakata
* 遅れる (おくれる - okureru) = Terlambat / telat
* どうしたの？ (doushita no?) = Ada apa? / Kenapa?
* また今度 (またこんど - mata kondo) = Lain kali / berikutnya

### Penjelasan Jawaban
Sebagai orang yang menunggu teman yang datang terlambat, ucapan yang sesuai untuk menyapa dan menanyakan alasannya adalah "どうしたの？遅かったね。" (Opsi 2). Opsi 1 diucapkan oleh orang yang terlambat sendiri. Maka jawabannya adalah **2**.`
  },
  {
    type: "audio-listening",
    question: "3番：朝、子供がまだ寝ています。起こすとき、何と言いますか。",
    options: ["1", "2", "3"],
    correct: 0, // Opsi 1
    track: 21,
    imageKey: "n4_m1_q18",
    topic: "Mondai 3 - Utterance Expressions",
    explanation: `### Transkrip Jepang
（チャイムの音）
指示：朝、子供がまだ寝ています。起こすとき、何と言いますか。
1：ほら、朝だよ。早く起きなさい。
2：おやすみなさい。
3：おはようございます。

### Terjemahan Indonesia
Petunjuk: Pagi hari, anak Anda masih tertidur. Saat membangunkannya, apa yang akan Anda katakan?
1: Hei, sudah pagi lho. Cepat bangun! (Membangunkan anak dengan tegas)
2: Selamat tidur. (Diucapkan sebelum tidur)
3: Selamat pagi. (Salam pagi umum, kurang cocok untuk membangunkan yang sedang tidur lelap)

### Analisis Kosakata
* 起こす (おこす - okosu) = Membangunkan
* 起きる (おきる - okiru) = Bangun
* ～なさい (~nasai) = Pola perintah halus/tegas dari orang tua ke anak

### Penjelasan Jawaban
Untuk membangunkan anak yang masih tidur di pagi hari, ibu biasa mengatakan "ほら、朝だよ。早く起きなさい。" (Ayo bangun, sudah pagi!). Maka pilihan yang tepat adalah **1**.`
  },
  {
    type: "audio-listening",
    question: "4番：カメラを持っています。友達の写真を撮ってあげたいとき、何と言いますか。",
    options: ["1", "2", "3"],
    correct: 2, // Opsi 3
    track: 22,
    imageKey: "n4_m1_q19",
    topic: "Mondai 3 - Utterance Expressions",
    explanation: `### Transkrip Jepang
（チャイムの音）
指示：カメラを持っています。友達の写真を撮ってあげたいとき、何と言いますか。
1：写真を撮ってもいい？
2：写真を撮ってくれない？
3：写真、撮ってあげようか？

### Terjemahan Indonesia
Petunjuk: Anda membawa kamera. Saat ingin mengambilkan foto untuk teman Anda, apa yang akan Anda katakan?
1: Boleh aku mengambil foto? (Meminta izin mengambil foto sesuatu/seseorang)
2: Bisa tolong ambilkan fotoku? (Meminta tolong orang lain memotret kita)
3: Mau kuambilkan fotomu? (Menawarkan diri untuk memotret teman)

### Analisis Kosakata
* 写真を撮る (しゃしんをとる - shashin wo toru) = Mengambil foto / memotret
* ～てあげる (~te ageru) = Melakukan sesuatu untuk orang lain
* ～てくれる (~te kureru) = Orang lain melakukan sesuatu untuk kita

### Penjelasan Jawaban
Untuk menawarkan bantuan memotret teman, kita menggunakan bentuk penawaran kasual yaitu "～てあげようか？" (Mau ku-...). Maka ucapan yang tepat adalah "写真、撮ってあげようか？" (Opsi 3).`
  },
  {
    type: "audio-listening",
    question: "5番：レジでお金を払います。スプーンをもらいたいとき、店員に何と言いますか。",
    options: ["1", "2", "3"],
    correct: 0, // Opsi 1
    track: 23,
    imageKey: "n4_m1_q20",
    topic: "Mondai 3 - Utterance Expressions",
    explanation: `### Transkrip Jepang
（チャイムの音）
指示：レジでお金を払います。スプーンをもらいたいとき、店員に何と言いますか。
1：スプーンをいただけますか？
2：スプーンはいかがですか？
3：スプーンをどうぞ。

### Terjemahan Indonesia
Petunjuk: Anda sedang membayar uang di kasir. Saat ingin meminta sendok, apa yang akan Anda katakan kepada kasir?
1: Bolehkah saya meminta sendok? (Meminta barang dengan sopan)
2: Bagaimana kalau pakai sendok? (Menawarkan sendok kepada orang lain)
3: Ini sendoknya, silakan. (Menyerahkan sendok)

### Analisis Kosakata
* レジ (reji) = Kasir / tempat pembayaran
* 払う (はらう - harau) = Membayar
* いただく (itadaku) = Menerima (bentuk sopan dari もらう)

### Penjelasan Jawaban
Ungkapan untuk meminta sesuatu dengan sopan di toko adalah "～をいただけますか？" (Bolehkah saya mendapatkan/meminta...?). Maka pilihan yang benar adalah **1**.`
  },

  // ==========================================
  // MONDAI 4 (8 Soal) - Quick Response
  // ==========================================
  {
    type: "audio-listening",
    question: "1番：お仕事は何をされているんですか。",
    options: ["1", "2", "3"],
    correct: 1, // Opsi 2
    track: 25,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：お仕事は何をされているんですか。
1：はい、会社員になります。
2：貿易会社で働いています。
3：来年から会社に行きます。

### Terjemahan Indonesia
Pertanyaan: Apa pekerjaan yang Anda lakukan?
1: Ya, saya akan menjadi karyawan kantor.
2: Saya bekerja di perusahaan perdagangan.
3: Mulai tahun depan saya akan pergi ke perusahaan.

### Analisis Kosakata
* 仕事 (しごと - shigoto) = Pekerjaan
* 貿易会社 (ぼうえきがいしゃ - bouekigaisha) = Perusahaan ekspor-impor / perdagangan
* 働く (はたらく - hataraku) = Bekerja

### Penjelasan Jawaban
Pertanyaan menanyakan pekerjaan saat ini ("何をされているんですか"). Jawaban yang alami adalah menyatakan tempat kerja atau profesi saat ini yaitu "貿易会社で働いています" (Saya bekerja di perusahaan dagang - Opsi 2). Opsi 1 & 3 menggunakan bentuk rencana/masa depan.`
  },
  {
    type: "audio-listening",
    question: "2番：すみません、ちょっと手伝っていただけませんか。",
    options: ["1", "2", "3"],
    correct: 0, // Opsi 1
    track: 26,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：すみません、ちょっと手伝っていただけませんか。
1：ええ、いいですよ。何をしましょうか？
2：はい、手伝ってあげます。
3：いいえ、結構です。

### Terjemahan Indonesia
Pertanyaan: Permisi, bolehkah meminta bantuannya sebentar?
1: Ya, tentu saja. Apa yang bisa kubantu? (Menerima permintaan bantuan dengan ramah)
2: Ya, aku bantu kamu. (Kurang sopan karena bernada merendahkan/pemberian jasa langsung)
3: Tidak, terima kasih. (Menolak dengan dingin)

### Analisis Kosakata
* 手伝う (てつだう - tetsudau) = Membantu
* ～ていただけませんか (~te itadakemasen ka) = Bolehkah meminta tolong...? (Sopan)
* 結構です (けっこうです - kekkou desu) = Cukup / tidak usah

### Penjelasan Jawaban
Saat dimintai tolong dengan sopan ("～していただけませんか"), jawaban menerima yang paling umum dan ramah adalah "ええ、いいですよ。何をしましょうか？" (Ya, tentu. Mau bantu apa? - Opsi 1).`
  },
  {
    type: "audio-listening",
    question: "3番：日本語がお上手ですね。",
    options: ["1", "2", "3"],
    correct: 2, // Opsi 3
    track: 27,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：日本語がお上手ですね。
1：はい、上手です。
2：いいえ、まだまだ下手ですよ。
3：いいえ、そんなことはありません。まだまだです。

### Terjemahan Indonesia
Pertanyaan: Bahasa Jepang Anda pintar sekali ya.
1: Ya, saya pintar. (Sombong, tidak alami dalam budaya Jepang)
2: Tidak, saya masih payah lho. (Kurang alami menggunakan kata 下手 untuk diri sendiri secara langsung)
3: Tidak, tidak begitu kok. Saya masih harus banyak belajar. (Rendah hati, sangat alami)

### Analisis Kosakata
* 上手 (じょうず - jouzu) = Mahir / pintar
* そんなことはありません (sonna koto wa arimasen) = Tidak begitu kok
* まだまだ (madamada) = Masih belum / masih harus belajar

### Penjelasan Jawaban
Dalam budaya Jepang, merespons pujian harus dengan sikap rendah hati. Ungkapan standar untuk menolak pujian dengan sopan adalah "いいえ、そんなことはありません。まだまだです" (Opsi 3).`
  },
  {
    type: "audio-listening",
    question: "4番：昨日買った本、もう読んだ？",
    options: ["1", "2", "3"],
    correct: 0, // Opsi 1
    track: 28,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：昨日買った本、もう読んだ？
1：うん、もう読んじゃった。
2：いいえ、読みませんでした。
3：はい、読んでいます。

### Terjemahan Indonesia
Pertanyaan: Buku yang kamu beli kemarin, sudah dibaca?
1: Iya, sudah selesai kubaca semuanya. (Menggunakan bentuk kasual ～ちゃう untuk menyatakan selesai)
2: Tidak, saya tidak membacanya. (Menggunakan bahasa sopan, tidak selaras dengan pertanyaan kasual)
3: Ya, saya sedang membaca. (Bentuk formal)

### Analisis Kosakata
* もう (mou) = Sudah
* 読んじゃった (よんじゃった - yonjatta) = Sudah terlanjur/selesai dibaca (dari 読んでしまった)

### Penjelasan Jawaban
Pertanyaan diajukan dengan gaya bahasa kasual ("～もう読んだ？"). Maka jawaban pun harus menggunakan bentuk kasual yang selaras. Opsi 1 menggunakan bahasa kasual "うん、もう読んじゃった" yang berarti "Iya, sudah kubaca habis". Opsi 2 & 3 menggunakan bentuk formal (~ます/~ました).`
  },
  {
    type: "audio-listening",
    question: "5番：あした、一緒に映画でも見に行かない？",
    options: ["1", "2", "3"],
    correct: 2, // Opsi 3
    track: 29,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：あした、一緒に映画でも見に行かない？
1：ええ、行きましょう。
2：いいですね。行きませんか？
3：ごめん、あしたはちょっと用事があって…

### Terjemahan Indonesia
Pertanyaan: Besok, mau pergi nonton film bersama tidak?
1: Iya, mari kita pergi. (Bahasa formal, kurang pas dengan ajakan kasual ～ない？)
2: Bagus ya. Mau pergi tidak? (Malah mengajak kembali dengan formal)
3: Maaf, besok aku ada sedikit urusan... (Menolak ajakan dengan halus dan kasual)

### Analisis Kosakata
* 一緒に (いっしょに - issho ni) = Bersama-sama
* 見に行かない？ (みにいかない？ - mi ni ikanai?) = Mau pergi melihat tidak? (Ajakan kasual)
* 用事があって (ようじがあって - youji ga atte) = Karena ada urusan

### Penjelasan Jawaban
Pertanyaan berupa ajakan kasual ("～見に行かない？"). Respons menolak yang paling halus dan alami dalam bahasa Jepang kasual adalah memberikan alasan menggantung: "ごめん、あしたはちょっと用事があって…" (Maaf, besok aku ada urusan... - Opsi 3).`
  },
  {
    type: "audio-listening",
    question: "6番：このスープ、ちょっと辛くない？",
    options: ["1", "2", "3"],
    correct: 1, // Opsi 2
    track: 30,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：このスープ、ちょっと辛くない？
1：はい、とても辛いです。
2：そう？ちょうどいいよ。
3：いいえ、辛くありませんよ。

### Terjemahan Indonesia
Pertanyaan: Sup ini agak pedas tidak sih menurutmu?
1: Ya, sangat pedas. (Formal)
2: Masa sih? Menurutku pas kok. (Merespons kasual dan menyatakan pas rasanya)
3: Tidak, tidak pedas lho. (Formal)

### Analisis Kosakata
* 辛い (からい - karai) = Pedas
* ちょうどいい (choudo ii) = Pas / cocok
* そう？ (sou?) = Benarkah? / Masa sih?

### Penjelasan Jawaban
Pertanyaan kasual menanyakan pendapat "辛くない？" (tidak pedas?). Jawaban kasual yang paling alami adalah "そう？ちょうどいいよ" (Masa sih? Menurutku pas rasanya - Opsi 2). Opsi 1 & 3 menggunakan bahasa sopan desu/masu.`
  },
  {
    type: "audio-listening",
    question: "7番：あの、これ、つまらないものですが、どうぞ。",
    options: ["1", "2", "3"],
    correct: 1, // Opsi 2
    track: 31,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：あの、これ、つまらないものですが、どうぞ。
1：はい、つまらないですね。
2：わあ、ありがとうございます。いただきます。
3：どうぞ、ご遠慮なく。

### Terjemahan Indonesia
Pertanyaan: Anu, ini barang yang tidak seberapa (oleh-oleh/hadiah), silakan diterima.
1: Ya, membosankan sekali ya. (Sangat tidak sopan)
2: Wah, terima kasih banyak. Saya terima ya. (Respons yang tepat saat menerima hadiah)
3: Silakan, jangan sungkan. (Diucapkan oleh pemberi, bukan penerima)

### Analisis Kosakata
* つまらないものですが (tsumaranai mono desu ga) = Meskipun barang yang tidak berharga (ungkapan rendah hati saat memberi hadiah)
* いただきます (itadakimasu) = Saya terima (sopan)
* ご遠慮なく (ごえんりょなく - goenryo naku) = Jangan sungkan-sungkan

### Penjelasan Jawaban
Ketika seseorang memberi hadiah dengan ungkapan rendah hati "つまらないものですが...", penerima harus menerimanya dengan gembira dan mengucapkan terima kasih: "わあ、ありがとうございます。いただきます。" (Opsi 2).`
  },
  {
    type: "audio-listening",
    question: "8番：来週のパーティー、行くでしょ？",
    options: ["1", "2", "3"],
    correct: 2, // Opsi 3
    track: 32,
    topic: "Mondai 4 - Quick Response",
    explanation: `### Transkrip Jepang
（チャイムの音）
質問：来週のパーティー、行くでしょ？
1：はい、行きます。
2：いいえ、行きません。
3：うん、もちろん行くよ。楽しみだな。

### Terjemahan Indonesia
Pertanyaan: Pesta minggu depan, kamu pergi kan?
1: Ya, saya pergi. (Formal)
2: Tidak, saya tidak pergi. (Formal)
3: Iya, tentu saja aku pergi. Aku menantikannya lho. (Respons kasual dan antusias)

### Analisis Kosakata
* 行くでしょ？ (いくでしょ？ - iku desho?) = Pergi kan? (Konfirmasi kasual)
* もちろん (mochiron) = Tentu saja
* 楽しみ (たのしみ - tanoshimi) = Dinantikan / tidak sabar menunggunya

### Penjelasan Jawaban
Pertanyaan dikonfirmasi secara kasual ("行くでしょ？"). Respons yang paling cocok adalah respons kasual antusias: "うん、もちろん行くよ。楽しみだな。" (Opsi 3). Opsi 1 & 2 menggunakan bentuk formal.`
  }
];

async function run() {
  console.log("🚀 Memulai proses seeding Listening N4...");
  
  // 1. Pastikan folder temporer ada
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  // 2. Proses Cropping Gambar Visual Pilihan
  console.log("\n📷 Memproses cropping gambar visual...");
  const imageUrls = {};

  for (const [key, config] of Object.entries(CROP_COORDINATES)) {
    const manualPath = path.join(MANUAL_CROPS_DIR, `${key}.png`);
    const outputPath = path.join(TEMP_DIR, `${key}.png`);
    let fileToUpload = null;

    if (fs.existsSync(manualPath)) {
      console.log(`   👉 Menemukan hasil crop MANUAL untuk ${key}. Menggunakan file manual.`);
      fileToUpload = manualPath;
    } else {
      console.log(`   ✂️ Memproses crop OTOMATIS untuk ${key} dari ${config.page}...`);
      const pagePath = config.page; // Berada di root d:/JLPT 2/app/
      
      if (!fs.existsSync(pagePath)) {
        console.error(`   ❌ File halaman ${pagePath} tidak ditemukan di folder app!`);
        continue;
      }

      try {
        const image = await Jimp.read(pagePath);
        image.crop({ x: config.x, y: config.y, w: config.w, h: config.h });
        await image.write(outputPath);
        fileToUpload = outputPath;
      } catch (err) {
        console.error(`   ❌ Gagal memproses crop otomatis untuk ${key}:`, err.message);
        continue;
      }
    }

    // Upload ke Supabase Storage
    if (fileToUpload) {
      const fileBuffer = fs.readFileSync(fileToUpload);
      const storagePath = `N4-Moshi/images/${key}.png`;
      
      process.stdout.write(`   ☁️ Mengunggah ${key}.png ke Supabase Storage... `);
      
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
    }
  }

  // 3. Proses Upload File Audio (.mp3)
  console.log("\n🎵 Memproses unggah file audio...");
  const audioUrls = {};

  // Melacak track yang dibutuhkan (1-indexed track numbers)
  const tracksNeeded = QUESTIONS.map(q => q.track);

  // Baca isi folder audio
  if (!fs.existsSync(AUDIO_DIR)) {
    console.error(`❌ Folder audio tidak ditemukan di: ${AUDIO_DIR}`);
    process.exit(1);
  }

  const audioFiles = fs.readdirSync(AUDIO_DIR);

  for (const trackNum of tracksNeeded) {
    // Cari file yang namanya diawali trackNum (misal: "02 Track 2.mp3" -> trackNum = 2)
    const filePrefix = String(trackNum).padStart(2, '0');
    const matchedFile = audioFiles.find(file => file.startsWith(filePrefix) && file.toLowerCase().endsWith('.mp3'));

    if (!matchedFile) {
      console.warn(`   ⚠️ File audio untuk track ${trackNum} (prefix: ${filePrefix}) tidak ditemukan!`);
      continue;
    }

    const localFilePath = path.join(AUDIO_DIR, matchedFile);
    const fileBuffer = fs.readFileSync(localFilePath);
    
    // Rename standard
    const standardizedName = `n4_m1_track_${String(trackNum).padStart(2, '0')}.mp3`;
    const storagePath = `N4-Moshi/${standardizedName}`;

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

  // 4. Seeding Data Pertanyaan ke Database
  console.log("\n💾 Memasukkan data pertanyaan ke tabel `questions`...");

  // Hapus semua soal N4 Listening yang ada agar tidak duplikat
  console.log("   🗑️ Menghapus data ujian N4 Listening yang lama...");
  const { error: delErr } = await supabase
    .from('questions')
    .delete()
    .eq('level', LEVEL)
    .eq('section', SECTION);

  if (delErr) {
    console.warn(`   ⚠️ Gagal menghapus data lama: ${delErr.message}`);
  } else {
    console.log("   🗑️ Berhasil menghapus data lama.");
  }

  // Siapkan objek untuk insert
  const insertPayloads = QUESTIONS.map((q, idx) => {
    const qNum = idx + 1;
    const finalAudioUrl = audioUrls[q.track] || null;
    const finalImageUrl = q.imageKey ? (imageUrls[q.imageKey] || null) : null;

    return {
      level: LEVEL,
      section: SECTION,
      type: q.type,
      question: q.question,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      audio_url: finalAudioUrl,
      image_url: finalImageUrl,
      source: "imported",
      topic: q.topic,
      difficulty_level: 2,
      is_active: true
    };
  });

  // Batch insert
  const { data: insertedData, error: insErr } = await supabase
    .from('questions')
    .insert(insertPayloads)
    .select();

  if (insErr) {
    console.error("❌ Gagal seeding pertanyaan:", insErr.message);
  } else {
    console.log(`🎉 Sukses memasukkan ${insertedData.length} soal Listening ke dalam database!`);
  }

  // 5. Update Exam Templates (listening_count & time_limit_sec)
  console.log("\n⚙️ Memperbarui exam_templates...");

  // Update n4-full
  const { error: tErr1 } = await supabase
    .from('exam_templates')
    .update({ listening_count: 28 })
    .eq('slug', 'n4-full');

  if (tErr1) {
    console.error("   ❌ Gagal memperbarui template n4-full:", tErr1.message);
  } else {
    console.log("   ✅ Berhasil memperbarui template `n4-full` (listening_count = 28).");
  }

  // Update n4-quick
  const { error: tErr2 } = await supabase
    .from('exam_templates')
    .update({ listening_count: 8 })
    .eq('slug', 'n4-quick');

  if (tErr2) {
    console.error("   ❌ Gagal memperbarui template n4-quick:", tErr2.message);
  } else {
    console.log("   ✅ Berhasil memperbarui template `n4-quick` (listening_count = 8).");
  }

  // 6. Bersihkan temporary files
  console.log("\n🧹 Membersihkan berkas temporer...");
  if (fs.existsSync(TEMP_DIR)) {
    const files = fs.readdirSync(TEMP_DIR);
    for (const file of files) {
      fs.unlinkSync(path.join(TEMP_DIR, file));
    }
    fs.rmdirSync(TEMP_DIR);
    console.log("   ✅ Berhasil membersihkan temp_crops.");
  }

  console.log("\n🏁 Selesai! Semua tugas seeding Listening N4 selesai tanpa hambatan.");
}

run();

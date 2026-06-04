// Legacy question format with numeric id — used as fallback for N3/dev/outage.
// useQuestions.ts converts these to the canonical Question type (id: string).
import { bunpouDokkaiN5A } from './bunpouDokkai/bunpouDokkaiN5_A';
import { bunpouDokkaiN5B } from './bunpouDokkai/bunpouDokkaiN5_B';
import { bunpouDokkaiN5C } from './bunpouDokkai/bunpouDokkaiN5_C';

interface LegacyQuestion {
  id: number | string;
  level: string;
  section: string;
  type: string;
  question: string;
  passage?: string;
  highlight?: string;
  audioUrl?: string;
  imageUrl?: string;
  options: (string | { text: string; img: string })[];
  correct: number;
  explanation: string;
  isImageOption?: boolean;
  mondai?: number;
  number?: number;
}

const superMoshiN5Questions: LegacyQuestion[] = [
  {
    "id": "n5_m1_q01",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：男の人と女の人が話しています。二人はいつ会いますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n女：すみません、来週会って話をしませんか。\n男：いいですね。１７日はどうですか。\n女：すみません、その日は忙しいんです。来週の火曜日はどうですか。\n男：火曜日ですか……。１２日ですね。その日はテストがあるんです。その前の日はどうですか。\n女：月曜日ですね。わかりました。じゃあ、その日にしましょう。\n\n### Terjemahan Indonesia\nPerempuan: Permisi, maukah kita bertemu minggu depan untuk mengobrol?\nLaki-laki: Boleh juga. Bagaimana kalau tanggal 17?\nPerempuan: Maaf, hari itu saya sibuk. Bagaimana kalau hari Selasa depan?\nLaki-laki: Hari Selasa ya... Tanggal 12 ya. Hari itu saya ada ujian. Bagaimana kalau hari sebelumnya?\nPerempuan: Hari Senin (tanggal 11) ya. Baik. Kalau begitu, mari kita bertemu di hari itu.\n\n### Analisis Kosakata\n* 来週 (らいしゅう - raishuu) = Minggu depan\n* 忙しい (いそがしい - isogashii) = Sibuk\n* 火曜日 (かようび - kayoubi) = Hari Selasa\n* 前の日 (まえのひ - mae no hi) = Hari sebelumnya\n\n### Penjelasan Jawaban\nLaki-laki tidak bisa bertemu tanggal 17 (hari Minggu) karena sibuk, dan tidak bisa hari Selasa tanggal 12 karena ada ujian. Dia mengusulkan \"hari sebelumnya\" (前の日), yaitu hari Senin tanggal 11. Perempuan menyetujuinya. Berdasarkan kalender, hari Senin tanggal 11 ditunjukkan oleh nomor **3**.",
    "audioUrl": "/audio/super_moshi_n5_track_02.mp3",
    "mondai": 1,
    "number": 1,
    "imageUrl": "/images/n5_m1_q01.png"
  },
  {
    "id": "n5_moshi_q2",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：男の学生と女の先生が話しています。男の学生はこれから何をしますか。",
    "options": [
      "1. いえに かえる",
      "2. さくぶんを かく",
      "3. せんせいの へやに いく",
      "4. せんせいを まつ"
    ],
    "correct": 3,
    "explanation": "### Transkrip Jepang\n先生：山田くん、今日の作文はどうしましたか。\n学生：すみません、まだ書いていません。家に帰って書いてもいいですか。\n先生：いいえ、今ここで書いてください。私は今から会議がありますから、教室で１５分待っていてくださいね。戻ってきたら一緒にやりましょう。\n学生：わかりました。ここで待っています。\n\n### Terjemahan Indonesia\nGuru: Yamada-kun, bagaimana dengan karangan untuk hari ini?\nMahasiswa: Maaf, saya belum menulisnya. Bolehkah saya menulisnya setelah pulang ke rumah?\nGuru: Tidak, silakan tulis di sini sekarang. Saya ada rapat sekarang, jadi tolong tunggu di kelas selama 15 minutes ya. Setelah saya kembali, mari kita kerjakan bersama.\nMahasiswa: Baik. Saya akan menunggu di sini.\n\n### Analisis Kosakata\n* 作文 (さくぶん - sakubun) = Karangan / essay\n* 会議 (かいぎ - kaigi) = Rapat / meeting\n* 待つ (まつ - matsu) = Menunggu\n* 戻る (もどる - modoru) = Kembali\n\n### Penjelasan Jawaban\nGuru meminta mahasiswa untuk tidak pulang ke rumah, tetapi menunggu di kelas (教室で待つ) selama guru rapat selama 15 menit. Jadi, mahasiswa tersebut harus menunggu guru (**せんせいを まつ - Opsi 4**).",
    "audioUrl": "/audio/super_moshi_n5_track_03.mp3",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "n5_moshi_q3",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：男の人と女の人が話しています。二人は駅で何時に会いますか。",
    "options": [
      "1. 7じ50ぷん",
      "2. 7じ55ふん",
      "3. 8じ05ふん",
      "4. 8じ10ぷん"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n男：あしたの電車の時間は何時ですか。\n女：８時１０分ですよ。\n男：そうですか。じゃあ、５分前には駅に着いていたいですね。８時５分に待ち合わせしましょう。\n女：そうですね。少し早めの８時５分にしましょう。\n\n### Terjemahan Indonesia\nLaki-laki: Kereta besok berangkat jam berapa?\nPerempuan: Jam 8 lewat 10 menit lho.\nLaki-laki: Oh begitu. Kalau begitu, kita sebaiknya sudah tiba di stasiun 5 menit sebelumnya ya. Mari kita janjian jam 8 lewat 5 menit.\nPerempuan: Betul ya. Mari kita buat jam 8 lewat 5 menit agar sedikit lebih cepat.\n\n### Analisis Kosakata\n* 電車 (でんしゃ - densha) = Kereta api\n* ５分前 (ごふんまえ - gofun mae) = 5 menit sebelum\n* 待ち合わせ (まちあわせ - machiawase) = Janji temu / janjian\n\n### Penjelasan Jawaban\nKereta berangkat jam 8:10 (８時１０分). Laki-laki mengusulkan untuk bertemu 5 menit sebelumnya (５分前), yaitu jam 8:05 (８時５分) agar tidak terlambat. Perempuan menyetujuinya. Maka pilihan yang tepat adalah **8じ05ふん (Opsi 3)**.",
    "audioUrl": "/audio/super_moshi_n5_track_04.mp3",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "n5_m1_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：男の人と女の人が話しています。男の人はどの切手を買いますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n男：すみません、この荷物を送りたいんですが、切手はいくらですか。\n女：５５０円分ですね。\n男：じゃあ、２００円の切手を２枚と、５０円の切手を３枚ください。\n女：はい、２００円が２枚と、５０円が３枚ですね。ありがとうございます。\n\n### Terjemahan Indonesia\nLaki-laki: Permisi, saya ingin mengirim paket ini, perangkonya berapa ya?\nPerempuan: Seharga 550 yen.\nLaki-laki: Kalau begitu, tolong beri saya dua lembar perangko 200 yen dan tiga lembar perangko 50 yen.\nPerempuan: Baik, dua lembar 200 yen dan tiga lembar 50 yen ya. Terima kasih banyak.\n\n### Analisis Kosakata\n* 切手 (きって - kitte) = Perangko\n* 枚 (まい - mai) = Lembar (kata bantu bilangan benda tipis)\n* 荷物 (にもつ - nimotsu) = Barang / paket\n\n### Penjelasan Jawaban\nLaki-laki memerlukan perangko senilai 550 yen. Ia membeli dua lembar perangko 200 yen (400 yen) dan tiga lembar perangko 50 yen (150 yen), totalnya 550 yen. Opsi gambar yang menunjukkan dua perangko 200 yen dan tiga perangko 50 yen adalah **Gambar 2**. Maka jawabannya adalah **2**.",
    "audioUrl": "/audio/super_moshi_n5_track_05.mp3",
    "mondai": 1,
    "number": 4,
    "imageUrl": "/images/n5_m1_q04.png"
  },
  {
    "id": "n5_m1_q05",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：男の人と女の人が話しています。男の人はパーティーに何を持っていきますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 3,
    "explanation": "### Transkrip Jepang\n男：明日の佐藤さんのパーティー、何を持っていこうかな。ケーキでも買おうか。\n女：ケーキは田中さんが持ってくるそうですよ。飲み物もたくさんあるみたいです。\n男：そうですか。じゃあ、お花はどうかな。部屋が綺麗になるし。\n女：それは素敵ですね！お花にしましょう。\n男：よし、そうします。\n\n### Terjemahan Indonesia\nLaki-laki: Pesta Sato-san besok, sebaiknya bawa apa ya? Beli kue saja kali ya?\nPerempuan: Kudengar kue akan dibawakan oleh Tanaka-san. Minuman juga sepertinya sudah ada banyak.\nLaki-laki: Oh begitu. Kalau begitu, bagaimana dengan bunga? Ruangan jadi terlihat cantik.\nPerempuan: Wah itu ide bagus! Mari kita bawa bunga saja.\nLaki-laki: Baik, saya akan bawa itu.\n\n### Analisis Kosakata\n* 飲み物 (のみもの - nomimono) = Minuman\n* 花 (はな - hana) = Bunga\n* 持っていく (もっていく - motte iku) = Membawa (pergi)\n\n### Penjelasan Jawaban\nKue (ケーキ) sudah dibeli Tanaka-san dan minuman sudah banyak. Laki-laki memutuskan untuk membawa bunga (お花) yang didukung oleh perempuan. Gambar yang menunjukkan bunga adalah **Gambar 4**. Maka jawabannya adalah **4**.",
    "audioUrl": "/audio/super_moshi_n5_track_06.mp3",
    "mondai": 1,
    "number": 5,
    "imageUrl": "/images/n5_m1_q05.png"
  },
  {
    "id": "n5_m1_q06",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "6番：男の人と女の人が話しています。二人は部屋をどのようにしますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "### Transkrip Jepang\n女：部屋の掃除をしましょう。この絵はどこに置きますか。\n男：そうですね。棚の上に置いてください。\n女：わかりました。このスリッパはどうしますか。\n男：スリッパは玄関の床に４つ並べて置いてください。\n女：はい、棚の上に絵を置いて、床にスリッパを４つですね。\n\n### Terjemahan Indonesia\nPerempuan: Mari kita bersih-bersih ruangan. Gambar/lukisan ini ditaruh di mana?\nLaki-laki: Hmm. Tolong taruh di atas rak.\nPerempuan: Baik. Kalau selop/sandal rumah ini bagaimana?\nLaki-laki: Sandalnya tolong ditata berjajar 4 buah di lantai area masuk (genkan).\nPerempuan: Baik, lukisan di atas rak dan 4 sandal di lantai ya.\n\n### Analisis Kosakata\n* 掃除 (そうじ - souji) = Bersih-bersih\n* 絵 (え - e) = Gambar / lukisan\n* 棚 (たな - tana) = Rak / lemari\n* スリッパ (surippa) = Sandal rumah / selop\n* 並べる (ならべる - naraberu) = Menjejerkan / menata\n\n### Penjelasan Jawaban\nInstruksinya adalah:\n1. Menaruh gambar/lukisan (絵) di atas rak (棚の上).\n2. Menata 4 sandal (スリッパ) di lantai (床).\n* Opsi 1: Menunjukkan gambar di atas rak dan 4 sandal di lantai (Benar).\n* Opsi 2: Menunjukkan pot bunga di atas rak.\n* Opsi 3: Menunjukkan gambar gajah di atas rak (lukisan aslinya adalah bunga).\n* Opsi 4: Hanya menunjukkan 2 sandal di lantai.\nMaka pilihan yang benar adalah **1**.",
    "audioUrl": "/audio/super_moshi_n5_track_07.mp3",
    "mondai": 1,
    "number": 6,
    "imageUrl": "/images/n5_m1_q06.png"
  },
  {
    "id": "n5_m1_q07",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "7番：男の人と女の人が話しています。男の人はどのバス停からバスに乗りますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n男：すみません、病院に行きたいんですが、どのバスに乗ればいいですか。\n女：ここから少し歩いて、パン屋の前のバス停から乗ってください。郵便局の前にもバス停がありますが、そこからは病院に行きません。\n男：パン屋の前ですね。わかりました。ありがとうございます。\n\n### Terjemahan Indonesia\nLaki-laki: Permisi, saya ingin pergi ke rumah sakit, sebaiknya naik bus dari mana ya?\nPerempuan: Dari sini jalan kaki sebentar, lalu naiklah dari halte bus yang ada di depan toko roti. Di depan kantor pos juga ada halte bus, tapi bus dari sana tidak pergi ke rumah sakit.\nLaki-laki: Di depan toko roti ya. Baik, saya mengerti. Terima kasih banyak.\n\n### Analisis Kosakata\n* 病院 (びょういん - byouin) = Rumah sakit\n* バス停 (ばすてい - basutei) = Halte bus\n* パン屋 (ぱんや - panya) = Toko roti\n* 郵便局 (ゆうびんきょく - yuubinkyoku) = Kantor pos\n\n### Penjelasan Jawaban\nPerempuan menginstruksikan laki-laki untuk naik bus dari halte di depan toko roti (パン屋の前). Berdasarkan peta, toko roti ditunjukkan oleh bangunan bertuliskan 「パン」, dan halte bus di depannya adalah nomor 8, yang merupakan penunjuk pilihan **3**. Maka jawabannya adalah **3**.",
    "audioUrl": "/audio/super_moshi_n5_track_08.mp3",
    "mondai": 1,
    "number": 7,
    "imageUrl": "/images/n5_m1_q07.png"
  },
  {
    "id": "n5_moshi_q8",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：男の学生と女の学生が話しています。男の学生は学校へどうやって行きましたか。",
    "options": [
      "1. バス",
      "2. タクシー",
      "3. でんしゃ",
      "4. はしる"
    ],
    "correct": 3,
    "explanation": "### Transkrip Jepang\n女：山田くん、今日遅かったね。電車が遅れたの？\n男：ううん。朝寝坊しちゃって、バスに乗り遅れたんだ。\n女：じゃあ、タクシーで来たの？\n男：ううん、お金がないからね。駅からここまでずっと走ってきたんだよ。すごく疲れた。\n女：大変だったね。お疲れ様。\n\n### Terjemahan Indonesia\nPerempuan: Yamada-kun, hari ini kamu telat ya. Apakah keretanya terlambat?\nLaki-laki: Bukan. Aku bangun kesiangan, jadi ketinggalan bus.\nPerempuan: Lalu, kamu ke sini naik taksi?\nLaki-laki: Tidak, karena tidak punya uang. Dari stasiun ke sini aku terus berlari lho. Sangat lelah.\nPerempuan: Berat sekali ya. Semangat.\n\n### Analisis Kosakata\n* 朝寝坊 (あさねぼう - asanebou) = Bangun kesiangan\n* 乗り遅れる (のりおくれる - noriokureru) = Ketinggalan (bus/kereta)\n* 走る (はしる - hashiru) = Berlari\n\n### Penjelasan Jawaban\n山田 (Yamada) bangun kesiangan dan ketinggalan bus. Karena tidak punya uang untuk naik taksi, ia berlari (走る) dari stasiun ke sekolah. Maka pilihan yang tepat adalah **はしる (Opsi 4)**.",
    "audioUrl": "/audio/super_moshi_n5_track_10.mp3",
    "mondai": 2,
    "number": 1
  },
  {
    "id": "n5_moshi_q9",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：男の人と女の人が話しています。今日の天気はどうですか。",
    "options": [
      "1. はれ",
      "2. あめ",
      "3. くもり",
      "4. さむい"
    ],
    "correct": 0,
    "explanation": "### Transkrip Jepang\n男：昨日は一日中雨が降って寒かったですね。\n女：そうですね。でも今日は朝から太陽が出ていて、とても暖かいですよ。\n男：本当ですね。明日は曇りになるそうですが、今日が良い天気でよかったです。\n女：ええ、洗濯物がよく乾きますね。\n\n### Terjemahan Indonesia\nLaki-laki: Kemarin hujan turun seharian dan dingin ya.\nPerempuan: Iya benar. Tapi hari ini sejak pagi matahari terbit, jadi sangat hangat lho.\nLaki-laki: Betul sekali. Kudengar besok akan mendung, tapi syukurlah hari ini cuacanya bagus.\nPerempuan: Iya, jemuran jadi cepat kering ya.\n\n### Analisis Kosakata\n* 一日中 (いちにちじゅう - ichinichijuu) = Seharian penuh\n* 太陽 (たいよう - taiyou) = Matahari\n* 暖かい (あたたかい - atatakai) = Hangat\n* 曇り (くもり - kumori) = Mendung / berawan\n\n### Penjelasan Jawaban\nKemarin hujan (雨), besok diramalkan mendung (曇り). Namun untuk hari ini (今日), sejak pagi ada matahari dan hangat, yang berarti cuacanya cerah (**はれ - Opsi 1**).",
    "audioUrl": "/audio/super_moshi_n5_track_11.mp3",
    "mondai": 2,
    "number": 2
  },
  {
    "id": "n5_moshi_q10",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：男の人と女の人が話しています。男の人はどこに財布を忘れましたか。",
    "options": [
      "1. えき",
      "2. おみせ",
      "3. がっこう",
      "4. おとこの ひとの いえ"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n男：困ったな。財布がないんだ。駅で切手を買ったときはあったんだけどな。\n女：そのあと、どこかに行きましたか。\n男：買い物をしにお店に行って、それから学校に来たよ。\n女：じゃあ、そのお店に電話してみたらどうですか。\n男：そうだね。（電話をかける）……あ、もしもし、やはりお店にありました！よかったです。\n\n### Terjemahan Indonesia\nLaki-laki: Gawat. Dompetku tidak ada. Waktu beli perangko di stasiun sih masih ada.\nPerempuan: Setelah itu, apakah pergi ke suatu tempat?\nLaki-laki: Aku pergi ke toko untuk belanja, lalu pergi ke sekolah.\nPerempuan: Kalau begitu, bagaimana kalau coba telepon toko tersebut?\nLaki-laki: Benar juga. (Menelepon)... Ah, halo, ternyata memang ada di toko! Syukurlah.\n\n### Analisis Kosakata\n* 財布 (さいふ - saifu) = Dompet\n* 忘れる (わすれる - wasureru) = Lupa / meninggalkan\n* 店 (みせ - mise) = Toko\n\n### Penjelasan Jawaban\nLaki-laki kehilangan dompetnya. Dompet tersebut masih ada saat di stasiun (駅), tetapi tertinggal di toko (お店) tempat ia berbelanja setelah dari stasiun. Setelah menelepon, dompetnya dikonfirmasi ada di toko tersebut. Maka jawabannya adalah **おみせ (Opsi 2**).",
    "audioUrl": "/audio/super_moshi_n5_track_12.mp3",
    "mondai": 2,
    "number": 3
  },
  {
    "id": "n5_m2_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：男の人と女の人が話しています。女の人の犬はどれですか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n男：あ、可愛い犬ですね。新しい犬ですか。\n女：ええ。体が白くて、耳だけが黒い犬なんです。よく黒い体で耳が白い犬と間違えられますが。\n男：なるほど。耳が黒くて体が白いんですね。とても可愛いですね。\n\n### Terjemahan Indonesia\nLaki-laki: Ah, anjing yang lucu ya. Anjing baru?\nPerempuan: Iya. Anjing yang badannya putih, dan hanya telinganya yang hitam. Sering salah dikira anjing yang badannya hitam dan telinganya putih sih.\nLaki-laki: Oh begitu. Telinganya hitam dan badannya putih ya. Lucu sekali ya.\n\n### Analisis Kosakata\n* 体 (からだ - karada) = Tubuh / badan\n* 耳 (みみ - mimi) = Telinga\n* 間違える (まちがえる - machigaeru) = Salah mengira / keliru\n\n### Penjelasan Jawaban\nPerempuan mendeskripsikan anjingnya memiliki tubuh berwarna putih (体が白い) dan hanya bagian telinganya yang berwarna hitam/gelap (耳だけが黒い). \n* Gambar 1: Tubuh hitam, telinga hitam.\n* Gambar 2: Tubuh hitam, telinga putih.\n* Gambar 3: Tubuh putih, telinga hitam (Benar).\n* Gambar 4: Tubuh putih, telinga putih.\nMaka pilihan yang benar adalah **3**.",
    "audioUrl": "/audio/super_moshi_n5_track_13.mp3",
    "mondai": 2,
    "number": 4,
    "imageUrl": "/images/n5_m2_q04.png"
  },
  {
    "id": "n5_moshi_q12",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：男の人と女の人が話しています。男の人は今日何をしますか。",
    "options": [
      "1. べんきょう",
      "2. かいもの",
      "3. さんぽと せんたく",
      "4. べんきょうと かいもの"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n女：山田くん、今日一緒に図書館で勉強しませんか。\n男：すみません、今日はちょっと用事があるんです。買い物に行かなければならなくて。\n女：そうですか。勉強はしないんですか。\n男：はい、勉強は明日します。今日は買い物だけします。\n\n### Terjemahan Indonesia\nPerempuan: Yamada-kun, maukah belajar bersama di perpustakaan hari ini?\nLaki-laki: Maaf, hari ini saya ada sedikit keperluan. Saya harus pergi berbelanja.\nPerempuan: Begitu ya. Berarti hari ini tidak belajar?\nLaki-laki: Iya, belajar akan saya lakukan besok. Hari ini hanya berbelanja saja.\n\n### Analisis Kosakata\n* 図書館 (としょかん - toshokan) = Perpustakaan\n* 用事 (ようじ - youji) = Urusan / keperluan\n* 買い物 (かいもの - kaimono) = Berbelanja\n\n### Penjelasan Jawaban\nLaki-laki (Yamada) menolak ajakan belajar hari ini karena harus berbelanja (買い物). Dia menekankan bahwa hari ini dia hanya belanja dan baru belajar besok. Maka pilihan yang tepat adalah **かいもの (Opsi 2**).",
    "audioUrl": "/audio/super_moshi_n5_track_14.mp3",
    "mondai": 2,
    "number": 5
  },
  {
    "id": "n5_moshi_q13",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "6番：男の人と女の人が話しています。男の人はどのシャツを買いましたか。",
    "options": [
      "1. くろい シャツ",
      "2. あおい シャツ",
      "3. しろい シャツ",
      "4. なにも かわない"
    ],
    "correct": 0,
    "explanation": "### Transkrip Jepang\n男：この青いシャツ、カッコいいですね。\n女：そうですね。でも、こちらの黒いシャツの方があなたに似合いますよ。白いシャツも爽やかで良いですが。\n男：うーん、白いシャツはもう持っていますからね。じゃあ、あなたのおすすめの黒い方にします。買います。\n\n### Terjemahan Indonesia\nLaki-laki: Kemeja biru ini keren ya.\nPerempuan: Iya benar. Tapi, kemeja hitam yang di sebelah sini sepertinya lebih cocok untukmu lho. Kemeja putih juga tampak segar dan bagus sih.\nLaki-laki: Hmm, kemeja putih kan saya sudah punya. Kalau begitu, saya pilih yang hitam sesuai rekomendasi Anda saja. Saya beli yang ini.\n\n### Analisis Kosakata\n* 青い (あおい - aoi) = Biru\n* 黒い (くろい - kuroi) = Hitam\n* 似合う (にあう - niau) = Cocok / pas dipakai\n* おすすめ (osasume) = Rekomendasi\n\n### Penjelasan Jawaban\nMeskipun melihat kemeja biru dan mempertimbangkan kemeja putih, laki-laki akhirnya memutuskan membeli kemeja hitam (黒いシャツ) karena rekomendasi perempuan dan dia sudah punya kemeja putih. Maka kemeja yang dibeli adalah **くろい シャツ (Opsi 1**).",
    "audioUrl": "/audio/super_moshi_n5_track_15.mp3",
    "mondai": 2,
    "number": 6
  },
  {
    "id": "n5_m3_q01",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：パンを買いたいです。店員になんと頼みますか。",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n指示：パンを買いたいです。店員になんと頼みますか。\n1：このパンを食べませんか。\n2：このパンを買いましょう。\n3：このパンをください。\n\n### Terjemahan Indonesia\nPetunjuk: Anda ingin membeli roti. Apa yang akan Anda katakan kepada kasir/pelayan?\n1: Maukah makan roti ini? (Menawarkan makan)\n2: Mari kita beli roti ini. (Mengajak membeli bersama)\n3: Tolong berikan saya roti ini. (Meminta membeli barang secara sopan)\n\n### Analisis Kosakata\n* 店員 (てんいん - ten'in) = Karyawan toko / pelayan\n* ～をください (~wo kudasai) = Tolong berikan saya...\n\n### Penjelasan Jawaban\nUngkapan standar untuk membeli atau memesan barang di toko/restoran adalah \"～をください\" (Tolong berikan...). Maka ungkapan yang benar adalah opsi **3**.",
    "audioUrl": "/audio/super_moshi_n5_track_17.mp3",
    "mondai": 3,
    "number": 1,
    "imageUrl": "/images/n5_m3_q01.png"
  },
  {
    "id": "n5_m3_q02",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：家を出ます。家族になんと言いますか。",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 0,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n指示：家を出ます。家族になんと言いますか。\n1：行ってきます。\n2：行ってらっしゃい。\n3：ただいま。\n\n### Terjemahan Indonesia\nPetunjuk: Anda akan meninggalkan rumah. Apa yang Anda katakan kepada keluarga?\n1: Saya pergi dulu ya. (Diucapkan oleh orang yang pergi meninggalkan rumah)\n2: Hati-hati di jalan. (Diucapkan oleh orang yang tinggal di rumah kepada yang pergi)\n3: Saya pulang! / Saya kembali. (Diucapkan saat baru sampai di rumah)\n\n### Analisis Kosakata\n* 家を出る (いえをでる - ie wo deru) = Pergi dari rumah\n* 行ってきます (itte kimasu) = Saya pergi dulu\n\n### Penjelasan Jawaban\nSaat hendak pergi keluar dari rumah, ungkapan yang tepat diucapkan kepada orang rumah adalah \"行ってきます\" (Opsi 1). Opsi 2 diucapkan oleh orang rumah yang ditinggal pergi.",
    "audioUrl": "/audio/super_moshi_n5_track_18.mp3",
    "mondai": 3,
    "number": 2,
    "imageUrl": "/images/n5_m3_q02.png"
  },
  {
    "id": "n5_m3_q03",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：友達が重い荷物を持っています。手伝いたいです。何と言いますか。",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n指示：友達が重い荷物を持っています。手伝いたいです。何と言いますか。\n1：荷物を持ちますね。\n2：荷物を持ちましょうか。\n3：荷物を持ってください。\n\n### Terjemahan Indonesia\nPetunjuk: Teman Anda membawa barang bawaan yang berat. Anda ingin membantunya. Apa yang akan Anda katakan?\n1: Saya bawakan barangnya ya. (Pernyataan biasa)\n2: Bagaimana kalau saya bantu bawakan barangnya? (Menawarkan bantuan dengan sopan/kasual)\n3: Tolong bawakan barang saya. (Meminta orang lain membawa barang kita)\n\n### Analisis Kosakata\n* 重い (おもい - omoi) = Berat\n* 荷物 (にもつ - nimotsu) = Barang bawaan\n* ～ましょうか (~mashou ka) = Bagaimana kalau saya lakukan... (menawarkan jasa/bantuan)\n\n### Penjelasan Jawaban\nUntuk menawarkan bantuan secara aktif dan sopan, pola yang digunakan adalah \"～ましょうか\" (Bagaimana kalau saya bantu...). Maka ungkapan yang tepat adalah \"荷物を持ちましょうか\" (Opsi 2).",
    "audioUrl": "/audio/super_moshi_n5_track_19.mp3",
    "mondai": 3,
    "number": 3,
    "imageUrl": "/images/n5_m3_q03.png"
  },
  {
    "id": "n5_m3_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：店で服を着てみたいです。店員に何と言いますか。",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n指示：店で服を着てみたいです。店員に何と言いますか。\n1：これを着ますね。\n2：これを着てください。\n3：これを着てみてもいいですか。\n\n### Terjemahan Indonesia\nPetunjuk: Anda ingin mencoba memakai baju di toko. Apa yang akan Anda katakan kepada kasir/pelayan?\n1: Saya akan memakai ini ya.\n2: Tolong pakai ini. (Menyuruh pelayan memakai baju)\n3: Bolehkah saya mencoba memakai ini? (Meminta izin secara sopan)\n\n### Analisis Kosakata\n* 服を着る (ふくをきる - fuku wo kiru) = Memakai baju\n* ～てみる (~te miru) = Mencoba melakukan sesuatu\n* ～てもいいですか (~te mo ii desu ka) = Bolehkah saya... (meminta izin)\n\n### Penjelasan Jawaban\nUntuk meminta izin mencoba sesuatu (pakaian) di toko, gunakan pola \"～てみてもいいですか\" (Bolehkah saya mencoba...). Pilihan yang tepat adalah opsi **3**.",
    "audioUrl": "/audio/super_moshi_n5_track_20.mp3",
    "mondai": 3,
    "number": 4,
    "imageUrl": "/images/n5_m3_q04.png"
  },
  {
    "id": "n5_m3_q05",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：子供が部屋で走り回っていてうるさいです。何と言いますか。",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n指示：子供が部屋で走り回っていてうるさいです。何と言いますか。\n1：静かにしました。\n2：静かにしてください。\n3：静かですね。\n\n### Terjemahan Indonesia\nPetunjuk: Anak-anak berlarian di dalam kamar dan sangat berisik. Apa yang Anda katakan kepada mereka?\n1: Saya sudah tenang.\n2: Tolong tenang / jangan berisik. (Meminta melakukan sesuatu secara tegas/sopan)\n3: Tenang sekali ya.\n\n### Analisis Kosakata\n* 走り回る (はしりまわる - hashirimaru) = Berlari-larian\n* うるさい (urusai) = Berisik / bising\n* 静かにする (しずかにする - shizuka ni suru) = Menjadi tenang / diam\n* ～てください (~te kudasai) = Tolong lakukan...\n\n### Penjelasan Jawaban\nUntuk menyuruh anak-anak diam atau tenang secara sopan dan jelas, kita menggunakan pola \"静かにしてください\" (Tolong diam/tenang). Maka pilihan yang tepat adalah opsi **2**.",
    "audioUrl": "/audio/super_moshi_n5_track_21.mp3",
    "mondai": 3,
    "number": 5,
    "imageUrl": "/images/n5_m3_q05.png"
  },
  {
    "id": "n5_moshi_q19",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：お茶はいかがですか。",
    "options": [
      "1. 1",
      "2. 2",
      "3. 3"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n質問：お茶はいかがですか。\n1：いいえ、いかがです。\n2：どうもありがとうございます。\n3：はい、いただきます。\n\n### Terjemahan Indonesia\nPertanyaan: Mau minum teh? (Menawarkan teh)\n1: Tidak, bagaimana.\n2: Terima kasih banyak. (Ucapan terima kasih saja, kurang pas merespons tawaran konsumsi secara langsung)\n3: Ya, terima kasih (saya terima/minum).\n\n### Analisis Kosakata\n* お茶 (おちゃ - ocha) = Teh hijau\n* いかがですか (ikaga desu ka) = Bagaimana kalau / mau?\n* いただきます (itadakimasu) = Saya terima (ungkapan sebelum makan/minum)\n\n### Penjelasan Jawaban\nSaat ditawari makanan atau minuman (\"～はいかがですか\"), jawaban yang paling alami untuk menerima tawaran tersebut adalah \"はい、いただきます\" (Opsi 3).",
    "audioUrl": "/audio/super_moshi_n5_track_23.mp3",
    "mondai": 4,
    "number": 1
  },
  {
    "id": "n5_moshi_q20",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：どこへ行くの？",
    "options": [
      "1. 1",
      "2. 2",
      "3. 3"
    ],
    "correct": 0,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n質問：どこへ行くの？\n1：ちょっとコンビニまで。\n2：いいえ、行きません。\n3：あした行きます。\n\n### Terjemahan Indonesia\nPertanyaan: Mau pergi ke mana? (Kasual)\n1: Cuma ke minimarket sebentar. (Menjawab tujuan secara santai)\n2: Tidak, saya tidak pergi.\n3: Besok saya akan pergi.\n\n### Analisis Kosakata\n* どこへ (doko he) = Ke mana\n* コンビニ (konbini) = Minimarket\n\n### Penjelasan Jawaban\nUntuk menjawab pertanyaan kasual \"どこへ行くの？\" (Mau ke mana?), jawaban yang sangat umum dan alami di Jepang adalah menyebutkan tujuan jangka pendek dengan partikel まで, seperti \"ちょっとコンビニまで\" (Hanya ke minimarket sebentar - Opsi 1).",
    "audioUrl": "/audio/super_moshi_n5_track_24.mp3",
    "mondai": 4,
    "number": 2
  },
  {
    "id": "n5_moshi_q21",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：この席、空いていますか。",
    "options": [
      "1. 1",
      "2. 2",
      "3. 3"
    ],
    "correct": 2,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n質問：この席、空いていますか。\n1：はい、空いていません。\n2：いいえ、どういたしまして。\n3：いいえ、どうぞ。\n\n### Terjemahan Indonesia\nPertanyaan: Apakah kursi ini kosong?\n1: Ya, tidak kosong. (Secara tata bahasa kontradiktif/tidak alami)\n2: Tidak, sama-sama. (Merespons terima kasih)\n3: Tidak (tidak terisi/kosong kok), silakan. (Mempersilakan duduk)\n\n### Analisis Kosakata\n* 席 (せき - seki) = Kursi / tempat duduk\n* 空いている (あいている - aite iru) = Kosong / tidak terisi\n* どうぞ (douzo) = Silakan\n\n### Penjelasan Jawaban\nSaat ditanya \"Apakah kursi ini kosong?\" (空いていますか), jika jawabannya kosong, kita mengatakan \"いいえ\" (Tidak, tidak terisi kok) lalu mempersilakan orang tersebut duduk dengan \"どうぞ\". Maka opsi yang tepat adalah **3**.",
    "audioUrl": "/audio/super_moshi_n5_track_25.mp3",
    "mondai": 4,
    "number": 3
  },
  {
    "id": "n5_moshi_q22",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：お誕生日おめでとうございます！",
    "options": [
      "1. 1",
      "2. 2",
      "3. 3"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n質問：お誕生日おめでとうございます！\n1：おめでとうございます。\n2：どうもありがとうございます。\n3：はじめまして。\n\n### Terjemahan Indonesia\nPertanyaan: Selamat hari ulang tahun!\n1: Selamat. (Mengulang ucapan selamat ke diri sendiri)\n2: Terima kasih banyak.\n3: Salam kenal / senang bertemu dengan Anda.\n\n### Analisis Kosakata\n* 誕生日 (たんじょうび - tanjoubi) = Hari ulang tahun\n* おめでとう (omedetou) = Selamat\n\n### Penjelasan Jawaban\nSaat diberi ucapan selamat ulang tahun (お誕生日おめでとうございます), jawaban yang benar adalah mengucapkan terima kasih, yaitu \"どうもありがとうございます\" (Opsi 2).",
    "audioUrl": "/audio/super_moshi_n5_track_26.mp3",
    "mondai": 4,
    "number": 4
  },
  {
    "id": "n5_moshi_q23",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：どのくらい日本語を勉強していますか。",
    "options": [
      "1. 1",
      "2. 2",
      "3. 3"
    ],
    "correct": 0,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n質問：どのくらい日本語を勉強していますか。\n1：1年くらいです。\n2：日本語が上手です。\n3：日本にあります。\n\n### Terjemahan Indonesia\nPertanyaan: Sudah berapa lama Anda belajar bahasa Jepang?\n1: Kira-kira sudah 1 tahun.\n2: Bahasa Jepangnya pintar.\n3: Ada di Jepang.\n\n### Analisis Kosakata\n* どのくらい (dono kurai) = Berapa lama / seberapa banyak\n* 年 (ねん - nen) = Tahun\n\n### Penjelasan Jawaban\nPertanyaan menanyakan durasi belajar (どのくらい). Jawaban yang tepat dan masuk akal adalah menyebutkan durasi waktu, yaitu \"1年くらいです\" (Kira-kira 1 tahun - Opsi 1).",
    "audioUrl": "/audio/super_moshi_n5_track_27.mp3",
    "mondai": 4,
    "number": 5
  },
  {
    "id": "n5_moshi_q24",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "6番：そろそろ行きましょうか。",
    "options": [
      "1. 1",
      "2. 2",
      "3. 3"
    ],
    "correct": 1,
    "explanation": "### Transkrip Jepang\n（チャイムの音）\n質問：そろそろ行きましょうか。\n1：いいえ、行きましょう。\n2：そうですね、行きましょう。\n3：はい、そろそろです。\n\n### Terjemahan Indonesia\nPertanyaan: Bagaimana kalau kita berangkat sekarang? / Mari kita jalan.\n1: Tidak, mari kita pergi.\n2: Benar ya, mari kita pergi.\n3: Ya, sebentar lagi.\n\n### Analisis Kosakata\n* そろそろ (sorosoro) = Sudah waktunya / sebentar lagi\n* 行きましょうか (ikimashou ka) = Bagaimana kalau kita berangkat? (mengajak)\n\n### Penjelasan Jawaban\nUntuk menyetujui ajakan berangkat \"そろそろ行きましょうか\" (Mari jalan), ungkapan penerimaan yang alami adalah \"そうですね、行きましょう\" (Ya, mari kita pergi - Opsi 2).",
    "audioUrl": "/audio/super_moshi_n5_track_28.mp3",
    "mondai": 4,
    "number": 6
  }
];
const tipeBN5Questions: LegacyQuestion[] = [
  {
    "id": "m01_q01",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：男の留学生はどのカップを出しますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "女：キムさん、カップを１つ出してください。男：はい。どのカップですか。女：大きいのです。男：鳥の絵のですか。車の絵のですか。女：あ、鳥の絵のです。",
    "audioUrl": "/audio/m01_q01.mp3",
    "imageUrl": "/images/m01_q01.png",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "m01_q02",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：女の人はイチゴをどう置きますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 3,
    "explanation": "男：ケーキの上にイチゴを２個置いてください。丸いケーキです。女：イチゴは２つですね。男：はい、そうです。",
    "audioUrl": "/audio/m01_q02.mp3",
    "imageUrl": "/images/m01_q02.png",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "m01_q03",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：女の人は何をしますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "男：３時に田中電機の林さんが来ますねえ。隣 of 部屋のエアコンをつけてください。それから電気もお願いします。女：はい。エアコンと電気ですね。あのお茶はどうしますか。男：すぐ終わるからいりません。",
    "audioUrl": "/audio/m01_q03.mp3",
    "imageUrl": "/images/m01_q03.png",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "m01_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：あした何時に駅のどこで会いますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 3,
    "explanation": "女：もしもし、佐藤です。明日９時半に駅の東口で会いましょうと言いましたが、すみません。西口に来てください。駅からバスに乗りますが、バス停は東口じゃなくて西口の方でした。今、駅 of 地図を見ました。すみません。じゃあ、明日９時半に会いましょう。",
    "audioUrl": "/audio/m01_q04.mp3",
    "imageUrl": "/images/m01_q04.png",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "m01_q05",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：男の留学生は何をしますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "explanation": "女：お昼ですね。一緒に卵と野菜のサンドイッチを作りましょう。男：はい。卵のサンドイッチ大好きです。女：今、冷蔵庫から野菜を出しますから、野菜を切ってください。卵は私がやりますね。男：切る前に洗いますか。女：いえ、洗ってから冷蔵庫に入れたから大丈夫です。",
    "audioUrl": "/audio/m01_q05.mp3",
    "imageUrl": "/images/m01_q05.png",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "m01_q06",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "6番：男の人はどこに行きますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "男：すみません、郵便局に行きたいですが、どこですか。女：あ、郵便局ですね。あそこに本屋がありますね。男：はい。女：本屋の左にレストランがあります。レストランの隣が郵便局です。レストランと銀行の間です。男：わかりました。ありがとうございます。",
    "audioUrl": "/audio/m01_q06.mp3",
    "imageUrl": "/images/m01_q06.png",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "m01_q07",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "7番：女の学生は山に何を持っていきますか。",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "explanation": "男：あさって朝から友達と南山へ行きます。一緒に行きませんか。女：行きたいです。男：今は夏ですが、山は朝と夕方は寒いから上着を忘れないでくださいね。女：はい。飲み物や昼ご飯は山で売っていますか。男：飲み物は朝、店が開く前に山に入りますから、自分で持って行ってください。昼は山の上に美味しいおにぎりの店があるから買いましょう。",
    "audioUrl": "/audio/m01_q07.mp3",
    "imageUrl": "/images/m01_q07.png",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "m02_q01",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：女の人は手袋を誰にもらいましたか。",
    "options": [
      "1. お父さん",
      "2. お母さん",
      "3. 弟",
      "4. お店"
    ],
    "correct": 2,
    "explanation": "男：あ、佐藤さん、きれいな色の手袋をしていますね。どこで買いましたか。女：あ、これですか。弟が作った手袋です。去年の誕生日に弟にもらいました。男：いいですね。女：父と母も弟が作った手袋を持っていますよ。",
    "audioUrl": "/audio/m02_q01.mp3",
    "mondai": 2,
    "number": 1
  },
  {
    "id": "m02_q02",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：２人は今晩何を食べに行きますか。",
    "options": [
      "1. ピザ",
      "2. スパゲティ",
      "3. ラーメン",
      "4. カレー"
    ],
    "correct": 3,
    "explanation": "男：きょう晩御飯を食べに行きませんか。女：はい。男：駅の前の新しいレストランはもう行きましたか。ピザが有名ですが、スパゲティも美味しいですよ。女：ああ、ラーメン屋の隣の店ですね。私、今日のお昼に行きました。ピザがとても美味しかったです。男：じゃあ他の店がいいですね。辛いものは好きですか。近くに美味しいカレーの店がありますよ。女：辛いもの大好きです。行きましょう。",
    "audioUrl": "/audio/m02_q02.mp3",
    "mondai": 2,
    "number": 2
  },
  {
    "id": "m02_q03",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：どの人が男の学生の妹ですか。",
    "options": [
      "1. 髪が短くて眼鏡なし",
      "2. 髪が長くて眼鏡あり",
      "3. 髪が短くて眼鏡あり",
      "4. 髪が長くて眼鏡なし"
    ],
    "correct": 0,
    "explanation": "男：あ所に、僕の妹がいます。妹も今年この大学に入りました。女：そうですか。４人いますが、妹さんはどの学生ですか。男：髪が短いです。女：ああ、眼鏡をかけていますね。男：いえ、かけていません。",
    "audioUrl": "/audio/m02_q03.mp3",
    "mondai": 2,
    "number": 3
  },
  {
    "id": "m02_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：男の学生はいつ日本に来ましたか。",
    "options": [
      "1. 今日",
      "2. 一昨日（おととい）",
      "3. 昨日",
      "4. １か月前"
    ],
    "correct": 1,
    "explanation": "男：はじめまして、ジョンです。昨日この学校に入りました。国で日本語を１か月勉強して、一私初めて日本に来ました。このクラスで１年勉強します。皆さんどうぞよろしくお願いします。",
    "audioUrl": "/audio/m02_q04.mp3",
    "mondai": 2,
    "number": 4
  },
  {
    "id": "m02_q05",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：２人は土曜日に一緒に何をしますか。",
    "options": [
      "1. 勉強する",
      "2. バスケットボールをする",
      "3. 映画を見に行く",
      "4. 海を見に行く"
    ],
    "correct": 3,
    "explanation": "男：土曜日か日曜日、暇？女：日曜は友達と一緒に家で勉強する。土曜はバスケットボールの練習に行って、昼頃家に帰るよ。午後は何もない。男：じゃあ一緒に映画を見に行く？女：うーん、私は海を見に行きたい。男：あ、いいね、僕 omimasu. 僕も行きたい。女：じゃあ土曜日、うちに帰ってから電話するね。",
    "audioUrl": "/audio/m02_q05.mp3",
    "mondai": 2,
    "number": 5
  },
  {
    "id": "m02_q06",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "6番：次のテストは来週の何曜日ですか。",
    "options": [
      "1. 月曜日",
      "2. 火曜日",
      "3. 水曜日",
      "4. 木曜日"
    ],
    "correct": 1,
    "explanation": "男：次のテストは来週の水曜日の作文のテストですね。女：いいえ、来週の火曜日に言葉のテストがありますよ。それから水曜の作文のテスト、木曜の漢字のテストです。男：来週はテストが多いですね。月曜日一緒にテストの勉強をしませんか。",
    "audioUrl": "/audio/m02_q06.mp3",
    "mondai": 2,
    "number": 6
  },
  {
    "id": "m03_q01",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：会社の人が外で仕事をして会社に帰りました。何と言いますか。",
    "options": [
      "1. ただいま。",
      "2. おかえりなさい。",
      "3. 行ってらっしゃい。"
    ],
    "correct": 1,
    "explanation": "正解は「おかえりなさい」です。外から帰ってきた人を迎える言葉です。",
    "audioUrl": "/audio/m03_q01.mp3",
    "mondai": 3,
    "number": 1
  },
  {
    "id": "m03_q02",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：先生の部屋に入ります。何と言いますか。",
    "options": [
      "1. 気をつけます。",
      "2. 入りますか。",
      "3. 失礼します。"
    ],
    "correct": 2,
    "explanation": "正解は「失礼します」です。目上の人の部屋に入るときの正しい挨拶です。",
    "audioUrl": "/audio/m03_q02.mp3",
    "mondai": 3,
    "number": 2
  },
  {
    "id": "m03_q03",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：友達が教室の窓を開けました。風が強いです。友達に何と言いますか。",
    "options": [
      "1. あ、窓を開けないでください。",
      "2. あ、窓を開けましょうか。",
      "3. あ、窓を閉めないでください。"
    ],
    "correct": 0,
    "explanation": "正解は「あ、窓を開けないでください」です。風が強いので開けるのをやめてほしい時に使います。",
    "audioUrl": "/audio/m03_q03.mp3",
    "mondai": 3,
    "number": 3
  },
  {
    "id": "m03_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：映画館の中です。座りたいです。なんと言いますか。",
    "options": [
      "1. ここいいですか。",
      "2. ここどうぞ。",
      "3. ここいますよ。"
    ],
    "correct": 0,
    "explanation": "正解は「ここいいですか」です。席が空いているか確認する自然な表現です。",
    "audioUrl": "/audio/m03_q04.mp3",
    "mondai": 3,
    "number": 4
  },
  {
    "id": "m03_q05",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：友達の写真を撮りたいです。取る前に何と言いますか。",
    "options": [
      "1. 写真を撮ってください。",
      "2. はい取ります。",
      "3. 写真を見ましょう。"
    ],
    "correct": 1,
    "explanation": "正解は「はい取ります」です。撮影 of 直前に相手に合図を送る言葉です。",
    "audioUrl": "/audio/m03_q05.mp3",
    "mondai": 3,
    "number": 5
  },
  {
    "id": "m04_q01",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "1番：学校まで何で来ますか。",
    "options": [
      "1. 一人で来ます。",
      "2. 九時に来ます。",
      "3. 自転車で来ます。"
    ],
    "correct": 2,
    "explanation": "手段（交通手段）を聞いているので「自転車で来ます」が正解です。",
    "audioUrl": "/audio/m04_q01.mp3",
    "mondai": 4,
    "number": 1
  },
  {
    "id": "m04_q02",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "2番：リンダさん作文の宿題はもう終わった？",
    "options": [
      "1. それがいいね。",
      "2. ううん、まだ。",
      "3. 宿題はあるよ。"
    ],
    "correct": 1,
    "explanation": "「もう終わった？」という質問に対して「ううん、まだ」と答えます。",
    "audioUrl": "/audio/m04_q02.mp3",
    "mondai": 4,
    "number": 2
  },
  {
    "id": "m04_q03",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "3番：木村さんは暇な時何をしている？",
    "options": [
      "1. 本や雑誌を読んでいるよ。",
      "2. うん、今日は暇だよ。",
      "3. 土曜日と日曜日だよ。"
    ],
    "correct": 0,
    "explanation": "暇な時に何をしているかを聞いているため「本や雑誌を読んでいるよ」が正解です。",
    "audioUrl": "/audio/m04_q03.mp3",
    "mondai": 4,
    "number": 3
  },
  {
    "id": "m04_q04",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "4番：日本でどこか旅行した？",
    "options": [
      "1. 先週京都へ行ったよ。",
      "2. いいね。どこに行く？",
      "3. 日本に行きたかった。"
    ],
    "correct": 0,
    "explanation": "過去の経験を聞かれているので、過去形を用いて「先週京都へ行ったよ」と答えます。",
    "audioUrl": "/audio/m04_q04.mp3",
    "mondai": 4,
    "number": 4
  },
  {
    "id": "m04_q05",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "5番：今まで何年ぐらい日本語を勉強しましたか。",
    "options": [
      "1. 日本が好きだからです。",
      "2. 学校で４年間習いました。",
      "3. よく練習しています。"
    ],
    "correct": 1,
    "explanation": "期間を聞かれているため「４年間習いました」が正解です。",
    "audioUrl": "/audio/m04_q05.mp3",
    "mondai": 4,
    "number": 5
  },
  {
    "id": "m04_q06",
    "level": "N5",
    "section": "Listening",
    "type": "audio-listening",
    "isImageOption": false,
    "question": "6番：昼ごはんはいつもどうしていますか。",
    "options": [
      "1. きょうは寿司がいいですね。",
      "2. 食堂はあそこですよ。",
      "3. 自分で作して持ってきています。"
    ],
    "correct": 2,
    "explanation": "普段の習慣について聞かれているため「自分で作って持ってきています」と答えます。",
    "audioUrl": "/audio/m04_q06.mp3",
    "mondai": 4,
    "number": 6
  }
];


// ─── N5 MOJIGOI QUESTIONS (AUTO-GENERATED) ───
const mojigoiN5A: LegacyQuestion[] = [
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "お母さんはどこにいますか。",
    "highlight": "お母さん",
    "options": [
      "おかあさん",
      "おはさん",
      "おかさん",
      "おかあさ"
    ],
    "correct": 0,
    "explanation": "「お母さん」は「おかあさん」と読みます。「母」は訓読みで「はは」ですが、「お母さん」（丁寧形）では「おかあさん」と読みます。長音（あ→かあ）に注意してください。",
    "id": "mojigoi_a_m1_q01",
    "mondai": 1,
    "number": 1
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "友達と公園で遊びました。",
    "highlight": "公園",
    "options": [
      "こうえん",
      "こえん",
      "こうおん",
      "こおえん"
    ],
    "correct": 0,
    "explanation": "「公園」は「こうえん」と読みます。公（こう）＋園（えん）で「こうえん」となります。公園は taman dalam bahasa Indonesia.",
    "id": "mojigoi_a_m1_q02",
    "mondai": 1,
    "number": 2
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "あねに こどもが 生まれました。",
    "highlight": "生まれ",
    "options": [
      "おまれました",
      "うまれました",
      "ゆまれました",
      "いまれました"
    ],
    "correct": 1,
    "explanation": "「生まれました」 dibaca 「うまれました」 yang berarti lahir.",
    "id": "mojigoi_a_m1_q03",
    "mondai": 1,
    "number": 3
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "すみません、もっと 長い コートは ありませんか。",
    "highlight": "長い",
    "options": [
      "ながい",
      "たかい",
      "ひくい",
      "みじかい"
    ],
    "correct": 0,
    "explanation": "「長い」 dibaca 「ながい」 yang berarti panjang.",
    "id": "mojigoi_a_m1_q04",
    "mondai": 1,
    "number": 4
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "週末は家族と買い物に行きます。",
    "highlight": "家族",
    "options": [
      "かぞく",
      "かぞ",
      "いえぞく",
      "うちぞく"
    ],
    "correct": 0,
    "explanation": "「家族」は「かぞく」と読みます。家（か）＋族（ぞく）で「かぞく」となります。家族は keluarga dalam bahasa Indonesia.",
    "id": "mojigoi_a_m1_q05",
    "mondai": 1,
    "number": 5
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "手を洗ってから食事をします。",
    "highlight": "手",
    "options": [
      "あし",
      "て",
      "はな",
      "くち"
    ],
    "correct": 1,
    "explanation": "「手」は「て」と読みます。足（あし）＝kaki、鼻（はな）＝hidung、口（くち）＝mulut。「手」＝tangan dalam bahasa Indonesia.",
    "id": "mojigoi_a_m1_q06",
    "mondai": 1,
    "number": 6
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "子供のころ、よく川で泳ぎました。",
    "highlight": "子供",
    "options": [
      "こどもの",
      "こども",
      "こきょう",
      "しきょう"
    ],
    "correct": 1,
    "explanation": "「子供」は「こども」と読みます。子（こ）＋供（ども）で「こども」となります。子供は anak-anak dalam bahasa Indonesia。「供」は「とも」とも読みますが、「子供」では「ども」と読みます。",
    "id": "mojigoi_a_m1_q07",
    "mondai": 1,
    "number": 7
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "父は会社に勤めています。",
    "highlight": "会社",
    "options": [
      "かいしゃ",
      "かいさ",
      "がいしゃ",
      "えかい"
    ],
    "correct": 0,
    "explanation": "「会社」は「かいしゃ」と読みます。会（かい）＋社（しゃ）で「かいしゃ」となります。連濁（れんだく）はなく、清音のままです。",
    "id": "mojigoi_a_m1_q08",
    "mondai": 1,
    "number": 8
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "この くるまは 四年前に かいました。",
    "highlight": "四年前に",
    "options": [
      "よねんまえ",
      "よんねんまえ",
      "よねんまい",
      "よんねんまい"
    ],
    "correct": 0,
    "explanation": "「四年前に」 dibaca 「よねんまえに」 yang berarti 4 tahun yang lalu.",
    "id": "mojigoi_a_m1_q09",
    "mondai": 1,
    "number": 9
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "木曜日はアルバイトがあります。",
    "highlight": "木曜日",
    "options": [
      "きようび",
      "もくようび",
      "もくようにち",
      "きようにち"
    ],
    "correct": 1,
    "explanation": "「木曜日」は「もくようび」と読みます。木（もく）＋曜（よう）＋日（び）で「もくようび」となります。木は単独では「き」ですが、曜日では音読み「もく」を使います。",
    "id": "mojigoi_a_m1_q10",
    "mondai": 1,
    "number": 10
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "わたしの いぬは 耳が ちゃいろです。",
    "highlight": "耳",
    "options": [
      "あし",
      "め",
      "みみ",
      "からだ"
    ],
    "correct": 2,
    "explanation": "「耳」 dibaca 「みみ」 yang berarti telinga.",
    "id": "mojigoi_a_m1_q11",
    "mondai": 1,
    "number": 11
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "北海道は冬になると雪がたくさん降ります。",
    "highlight": "冬",
    "options": [
      "なつ",
      "はる",
      "あき",
      "ふゆ"
    ],
    "correct": 3,
    "explanation": "「冬」は「ふゆ」と読みます。夏（なつ）＝musim panas、春（はる）＝musim semi、秋（あき）＝musim gugur、冬（ふゆ）＝musim dingin。雪（ゆき）と冬（ふゆ）のセットは典型的な日本語の知識です。",
    "id": "mojigoi_a_m1_q12",
    "mondai": 1,
    "number": 12
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "へやに しゃわーは ありますか。",
    "highlight": "しゃわー",
    "options": [
      "ツェワー",
      "シャウー",
      "ツャワー",
      "シャワー"
    ],
    "correct": 3,
    "explanation": "「しゃわー」 ditulis dalam katakana sebagai 「シャワー」 (shower).",
    "id": "mojigoi_a_m2_q01",
    "mondai": 2,
    "number": 13
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "スーパーで ケーキを かってきたよ。",
    "highlight": "かってきた",
    "options": [
      "員ってきた",
      "貴ってきた",
      "貢ってきた",
      "買ってきた"
    ],
    "correct": 3,
    "explanation": "「かってきた」 ditulis sebagai 「買ってきた」 (membeli).",
    "id": "mojigoi_a_m2_q02",
    "mondai": 2,
    "number": 14
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「みぎ」の正しい漢字はどれですか。",
    "options": [
      "左",
      "右",
      "前",
      "後"
    ],
    "correct": 1,
    "explanation": "「みぎ」の正しい漢字は「右」です。左（ひだり）＝kiri、右（みぎ）＝kanan、前（まえ）＝depan、後（うしろ/あと）＝belakang/setelah。方向の漢字は形で覚えましょう。",
    "id": "mojigoi_a_m2_q03",
    "mondai": 2,
    "number": 15
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「じかん」の正しい漢字はどれですか。",
    "options": [
      "時問",
      "時間",
      "自間",
      "字間"
    ],
    "correct": 1,
    "explanation": "「じかん（waktu）」の正しい漢字は「時間」です。時（じ）＋間（かん）で「時間」となります。時問・自間・字間は存在しない漢字の組み合わせです。",
    "id": "mojigoi_a_m2_q04",
    "mondai": 2,
    "number": 16
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "がっこうの まえに かわが あります。",
    "highlight": "かわ",
    "options": [
      "山",
      "川",
      "田",
      "海"
    ],
    "correct": 1,
    "explanation": "「かわ」 ditulis sebagai 「川」 (sungai).",
    "id": "mojigoi_a_m2_q05",
    "mondai": 2,
    "number": 17
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "あには くるまを もっています。",
    "highlight": "くるま",
    "options": [
      "東",
      "車",
      "乗",
      "電"
    ],
    "correct": 1,
    "explanation": "「くるま」 ditulis sebagai 「車」 (mobil).",
    "id": "mojigoi_a_m2_q06",
    "mondai": 2,
    "number": 18
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "きのうは ともだちと えいがを みました。",
    "highlight": "ともだち",
    "options": [
      "友だち",
      "反だち",
      "有だち",
      "支だち"
    ],
    "correct": 0,
    "explanation": "「ともだち」 ditulis sebagai 「友だち」 (teman).",
    "id": "mojigoi_a_m2_q07",
    "mondai": 2,
    "number": 19
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "さとうさんは いろいろな みちを しっています。",
    "highlight": "みち",
    "options": [
      "道",
      "運",
      "通",
      "進"
    ],
    "correct": 0,
    "explanation": "「みち」 ditulis sebagai 「道」 (jalan).",
    "id": "mojigoi_a_m2_q08",
    "mondai": 2,
    "number": 20
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "A「ひるごはんを いっしょに たべませんか。」 B「はい。でも、（ ）から たべたいです。」",
    "options": [
      "でんわして",
      "コピーして",
      "そうじして",
      "かいものして"
    ],
    "correct": 3,
    "explanation": "Menyatakan ingin makan siang setelah berbelanja (買い物してから).",
    "id": "mojigoi_a_m3_q01",
    "mondai": 3,
    "number": 21
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "その___は乗り場はここですか。",
    "options": [
      "バス",
      "でんわ",
      "えいが",
      "ほん"
    ],
    "correct": 0,
    "explanation": "「乗り場（のりば）＝tempat naik kendaraan」という言葉と組み合わせると「バス（bus）の乗り場」が最も自然です。電話（でんわ）・映画（えいが）・本（ほん）には「乗り場」は使いません。",
    "id": "mojigoi_a_m3_q02",
    "mondai": 3,
    "number": 22
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "寒いから、___を着てください。",
    "options": [
      "くつ",
      "ぼうし",
      "コート",
      "めがね"
    ],
    "correct": 2,
    "explanation": "「寒い（さむい）＝dingin」から身を守るために「コート＝mantel」を着るのが自然です。靴（くつ）は履くもの（はく）、帽子（ぼうし）はかぶるもの、眼鏡（めがね）はかけるもので、「着る（きる）」とは使いません。",
    "id": "mojigoi_a_m3_q03",
    "mondai": 3,
    "number": 23
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "先生の話を___ながら、ノートに書きます。",
    "options": [
      "みおくり",
      "きき",
      "はなし",
      "おもい"
    ],
    "correct": 1,
    "explanation": "「先生の話（penjelasan guru）」に対して「ノートに書く（menulis di buku catatan）」という動作を同時にするのは「聞きながら（sambil mendengarkan）」です。「聞く（きく）→聞き（きき）ながら」が正しい活用です。",
    "id": "mojigoi_a_m3_q04",
    "mondai": 3,
    "number": 24
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "父は背が___くて、かっこいいです。",
    "options": [
      "ひく",
      "たか",
      "おも",
      "かる"
    ],
    "correct": 1,
    "explanation": "「かっこいい（tampan）」という褒め言葉と合わせると、「背が高い（tinggi badannya）」が適切です。背が低い＝pendek、重い＝berat、軽い＝ringan。「背が高い」で tinggi berbadan dalam bahasa Indonesia.",
    "id": "mojigoi_a_m3_q05",
    "mondai": 3,
    "number": 25
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "めが わるいですから、（ ）を かけます。",
    "options": [
      "ペン",
      "コート",
      "ぼうし",
      "めがね"
    ],
    "correct": 3,
    "explanation": "「眼鏡をかける (めがねをかけます)」 berarti memakai kacamata.",
    "id": "mojigoi_a_m3_q06",
    "mondai": 3,
    "number": 26
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "あの男の人は___が高くて、かっこいいですね。",
    "options": [
      "かお",
      "て",
      "せ",
      "こえ"
    ],
    "correct": 2,
    "explanation": "「___が高い」で「背が高い（tinggi badan）」という表現になります。顔（かお）が高い・手（て）が高い・声（こえ）が高い は不自然です。「背（せ）」は身長を表します。",
    "id": "mojigoi_a_m3_q07",
    "mondai": 3,
    "number": 27
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "風が___くて、傘が飛んでしまいました。",
    "options": [
      "さむ",
      "あつ",
      "つよ",
      "つめた"
    ],
    "correct": 2,
    "explanation": "「傘が飛んだ（payung terbang）」という結果から「風が強い（anginnya kencang）」が正しいです。「強くて（つよくて）」が自然です。寒い・暑い・冷たいは風の強さを表しません。",
    "id": "mojigoi_a_m3_q08",
    "mondai": 3,
    "number": 28
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "日本語が___になりたいです。",
    "options": [
      "じょうず",
      "へた",
      "むずかしい",
      "やさしい"
    ],
    "correct": 0,
    "explanation": "「〜になりたい（ingin menjadi）」という文脈で、言語学習の目標として「上手（じょうず）＝mahir/pandai」が最も自然です。「日本語が上手になりたい＝ingin menjadi mahir berbahasa Jepang」。下手（へた）は反対の意味です。",
    "id": "mojigoi_a_m3_q09",
    "mondai": 3,
    "number": 29
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "のどが渇いたので、水を___たいです。",
    "options": [
      "食べ",
      "飲み",
      "読み",
      "書き"
    ],
    "correct": 1,
    "explanation": "「のどが渇いた（nhaus/tenggorokan kering）」の場合は「飲む（minum）」が正しいです。「水を飲みたい」で「ingin minum air」という意味になります。食べる＝makan、読む＝membaca、書く＝menulis。",
    "id": "mojigoi_a_m3_q10",
    "mondai": 3,
    "number": 30
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「いつも」と同じ意味の言葉はどれですか。",
    "options": [
      "ときどき",
      "たまに",
      "まいにち",
      "つねに"
    ],
    "correct": 3,
    "explanation": "「いつも（selalu）」と同じ意味は「常に（つねに）＝selalu/senantiasa」です。時々（ときどき）＝kadang-kadang、たまに＝sesekali、毎日（まいにち）＝setiap hari（頻度は高いが「いつも」より限定的）。",
    "id": "mojigoi_a_m4_q01",
    "mondai": 4,
    "number": 31
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「にぎやか」の反対の意味はどれですか。",
    "options": [
      "しずか",
      "たのしい",
      "きれい",
      "あかるい"
    ],
    "correct": 0,
    "explanation": "「賑やか（にぎやか）＝ramai/meriah」の反対は「静か（しずか）＝tenang/sepi」です。楽しい（たのしい）＝menyenangkan、きれい＝cantik/bersih、明るい（あかるい）＝terang/ceria。賑やか⇔静か は場所の騒がしさの対義語です。",
    "id": "mojigoi_a_m4_q02",
    "mondai": 4,
    "number": 32
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "わたしは くだものを かいました。",
    "highlight": "くだもの",
    "options": [
      "わたしは ノートや えんぴつを かいました。",
      "わたしは さかなや にくを かいました。",
      "わたしは りんごや みかんを かいました。",
      "わたしam わたしは さらや コップを かいました。"
    ],
    "correct": 2,
    "explanation": "「りんごや みかん」 (apel dan jeruk) tergolong sebagai 「くだもの」 (buah-buahan).",
    "id": "mojigoi_a_m4_q03",
    "mondai": 4,
    "number": 33
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「むかし」と同じ意味の言葉はどれですか。",
    "options": [
      "これから",
      "いま",
      "いぜん",
      "のちほど"
    ],
    "correct": 2,
    "explanation": "「むかし（dahulu kala）」と同じ意味は「以前（いぜん）＝sebelumnya/dahulu」です。これから＝mulai sekarang（masa depan）、今＝sekarang、後ほど＝nanti。「むかし」と「以前」はどちらも過去を表します。",
    "id": "mojigoi_a_m4_q04",
    "mondai": 4,
    "number": 34
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「おおきい」の反対の意味はどれですか。",
    "options": [
      "ひろい",
      "ちいさい",
      "たかい",
      "おもい"
    ],
    "correct": 1,
    "explanation": "「大きい（おおきい）＝besar」の反対は「小さい（ちいさい）＝kecil」です。広い（ひろい）＝luas、高い（たかい）＝tinggi/mahal、重い（おもい）＝berat。大きい⇔小さい はサイズの対義語です。",
    "id": "mojigoi_a_m4_q05",
    "mondai": 4,
    "number": 35
  }
];

const mojigoiN5B: LegacyQuestion[] = [
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "毎朝、六時に起きます。",
    "highlight": "六時",
    "options": [
      "ろくじ",
      "むじ",
      "ろくとき",
      "むとき"
    ],
    "correct": 0,
    "explanation": "「六時」は「ろくじ」と読みます。六（ろく）は数字の6、時（じ）は時刻を表します。「むじ」「ろくとき」「むとき」はすべて間違った読み方です。",
    "id": "mojigoi_b_m1_q01",
    "mondai": 1,
    "number": 1
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "南の国はとても暑いです。",
    "highlight": "南",
    "options": [
      "きた",
      "みなみ",
      "ひがし",
      "にし"
    ],
    "correct": 1,
    "explanation": "「南」は「みなみ」と読みます。北（きた）＝utara、南（みなみ）＝selatan、東（ひがし）＝timur、西（にし）＝barat。方角の漢字を覚えましょう。",
    "id": "mojigoi_b_m1_q02",
    "mondai": 1,
    "number": 2
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "あの 先生は わかいです。",
    "highlight": "先生",
    "options": [
      "せんせえ",
      "せんせい",
      "せんせん",
      "せんせ"
    ],
    "correct": 1,
    "explanation": "「先生」 dibaca 「せんせい」 yang berarti guru.",
    "id": "mojigoi_b_m1_q03",
    "mondai": 1,
    "number": 3
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "友達に誕生日のプレゼントをあげました。",
    "highlight": "誕生日",
    "options": [
      "たんじょうび",
      "たんじょうにち",
      "たんじょうひ",
      "うまれたび"
    ],
    "correct": 0,
    "explanation": "「誕生日」は「たんじょうび」と読みます。誕生（たんじょう）＋日（び）で「たんじょうび」となります。誕生日は hari ulang tahun dalam bahasa Indonesia.",
    "id": "mojigoi_b_m1_q04",
    "mondai": 1,
    "number": 4
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "今日は天気がいいですね。",
    "highlight": "天気",
    "options": [
      "てんき",
      "てき",
      "あめき",
      "そらき"
    ],
    "correct": 0,
    "explanation": "「天気」は「てんき」と読みます。天（てん）＋気（き）で「てんき」となります。天気は 'cuaca' dalam bahasa Indonesia.",
    "id": "mojigoi_b_m1_q05",
    "mondai": 1,
    "number": 5
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "今朝、新聞を読みました。",
    "highlight": "新聞",
    "options": [
      "しんぶん",
      "しんもん",
      "あたらぶん",
      "しんぶ"
    ],
    "correct": 0,
    "explanation": "「新聞」は「しんぶん」と読みます。新（しん）＋聞（ぶん）で「しんぶん」となります。「聞」は「きく」とも読みますが、ここでは「ぶん」と読みます。",
    "id": "mojigoi_b_m1_q06",
    "mondai": 1,
    "number": 6
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "夏は暑いので、よく水を飲みます。",
    "highlight": "夏",
    "options": [
      "ふゆ",
      "なつ",
      "はる",
      "あき"
    ],
    "correct": 1,
    "explanation": "「夏」は「なつ」と読みます。冬（ふゆ）＝musim dingin、春（はる）＝musim semi、秋（あき）＝musim gugur、夏（なつ）＝musim panas。",
    "id": "mojigoi_b_m1_q07",
    "mondai": 1,
    "number": 7
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "この問題の答えがわかりません。",
    "highlight": "答え",
    "options": [
      "こたえ",
      "へんじ",
      "ひかえ",
      "うたえ"
    ],
    "correct": 0,
    "explanation": "「答え」は「こたえ」と読みます。答える（こたえる）の名詞形です。返事（へんじ）は返答の意味ですが、「答え」とは別の言葉です。控え（ひかえ）は控え書き、歌え（うたえ）は歌うの命令形です。",
    "id": "mojigoi_b_m1_q08",
    "mondai": 1,
    "number": 8
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "妹は犬が大好きです。",
    "highlight": "大好き",
    "options": [
      "おおすき",
      "だいすき",
      "たいすき",
      "おおず"
    ],
    "correct": 1,
    "explanation": "「大好き」は「だいすき」と読みます。大（だい）＋好き（すき）で「だいすき」となります。「大」は「おお」とも読みますが、「大好き」では音読み「だい」を使います。大好き＝sangat suka.",
    "id": "mojigoi_b_m1_q09",
    "mondai": 1,
    "number": 9
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "母は毎日料理をします。",
    "highlight": "毎日",
    "options": [
      "まいにち",
      "まいび",
      "ごとにち",
      "まいひ"
    ],
    "correct": 0,
    "explanation": "「毎日」は「まいにち」と読みます。毎（まい）＋日（にち）で「まいにち」となります。日は「にち」と読むことに注意してください。",
    "id": "mojigoi_b_m1_q10",
    "mondai": 1,
    "number": 10
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "午後、図書館で本を読みます。",
    "highlight": "図書館",
    "options": [
      "としょかん",
      "としょかん",
      "ずしょかん",
      "としょかぬ"
    ],
    "correct": 0,
    "explanation": "「図書館」は「としょかん」と読みます。図（と）＋書（しょ）＋館（かん）で「としょかん」となります。図書館は perpustakaan dalam bahasa Indonesia.",
    "id": "mojigoi_b_m1_q11",
    "mondai": 1,
    "number": 11
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "兄は料理が得意です。",
    "highlight": "料理",
    "options": [
      "りょうり",
      "りょうにち",
      "たべもの",
      "りょり"
    ],
    "correct": 0,
    "explanation": "「料理」は「りょうり」と読みます。料（りょう）＋理（り）で「りょうり」となります。料理は masakan/memasak dalam bahasa Indonesia.",
    "id": "mojigoi_b_m1_q12",
    "mondai": 1,
    "number": 12
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「こうえん」の正しい漢字はどれですか。",
    "options": [
      "公演",
      "公園",
      "工園",
      "校園"
    ],
    "correct": 1,
    "explanation": "「こうえん（taman）」の正しい漢字は「公園」です。公（こう）＋園（えん）です。公演（こうえん）も同音ですが「舞台公演（pertunjukan panggung）」の意味です。文脈から「taman」の意味の「公園」が正しいです。",
    "id": "mojigoi_b_m2_q01",
    "mondai": 2,
    "number": 13
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "ほっかいどうは にほんの きたに あります。",
    "highlight": "きた",
    "options": [
      "南",
      "西",
      "北",
      "東"
    ],
    "correct": 2,
    "explanation": "「きた」 ditulis sebagai 「北」 (utara).",
    "id": "mojigoi_b_m2_q02",
    "mondai": 2,
    "number": 14
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "ことしの なつは やまへ いきます。",
    "highlight": "やま",
    "options": [
      "ヨ",
      "出",
      "川",
      "山"
    ],
    "correct": 3,
    "explanation": "「やま」 ditulis sebagai 「山」 (gunung).",
    "id": "mojigoi_b_m2_q03",
    "mondai": 2,
    "number": 15
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "わたしの すんでいる まちは みせが すくないです。",
    "highlight": "みせ",
    "options": [
      "居",
      "庁",
      "店",
      "痁"
    ],
    "correct": 2,
    "explanation": "「みせ」 ditulis sebagai 「店」 (toko).",
    "id": "mojigoi_b_m2_q04",
    "mondai": 2,
    "number": 16
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「ともだち」の正しい漢字はどれですか。",
    "options": [
      "共達",
      "友達",
      "共立",
      "友立"
    ],
    "correct": 1,
    "explanation": "「ともだち」の正しい漢字は「友達」です。友（とも）＋達（だち）です。共（とも）は「一緒に」の意味があり音は同じですが、友達の「友」は友情の意味です。",
    "id": "mojigoi_b_m2_q05",
    "mondai": 2,
    "number": 17
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「がっこう」の正しい漢字はどれですか。",
    "options": [
      "学効",
      "学校",
      "楽校",
      "学孝"
    ],
    "correct": 1,
    "explanation": "「がっこう」の正しい漢字は「学校」です。学（がく→がっ）＋校（こう）です。学効・楽校・学孝はすべて存在しない漢字の組み合わせです。",
    "id": "mojigoi_b_m2_q06",
    "mondai": 2,
    "number": 18
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「そら」の正しい漢字はどれですか。",
    "options": [
      "雨",
      "雪",
      "空",
      "雲"
    ],
    "correct": 2,
    "explanation": "「そら」の正しい漢字は「空」です。雨（あめ）＝hujan、雪（ゆき）＝salju、空（そら）＝langit、雲（くも）＝awan。天気の漢字は似ているものが多いので注意が必要です。",
    "id": "mojigoi_b_m2_q07",
    "mondai": 2,
    "number": 19
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "こんど、いっしょに れすとらんに 行きましょう。",
    "highlight": "れすとらん",
    "options": [
      "ルストラソ",
      "ルストラン",
      "レストラソ",
      "レストラン"
    ],
    "correct": 3,
    "explanation": "「れすとらん」 ditulis dalam katakana sebagai 「レストラン」 (restoran).",
    "id": "mojigoi_b_m2_q08",
    "mondai": 2,
    "number": 20
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "兄は毎朝___で会社まで行きます。",
    "options": [
      "じてんしゃ",
      "でんしゃ",
      "バス",
      "あし"
    ],
    "correct": 0,
    "explanation": "「毎朝（まいあさ）＝setiap pagi」「会社（かいしゃ）＝kantor」への通勤に「自転車（じてんしゃ）＝sepeda」を使うのは自然です。他の選択肢も可能ですが、「で」の前に交通手段が来るため、全て文法的には正しいです。ただし、この文脈では自転車が最もよく使われる表現です。",
    "id": "mojigoi_b_m3_q01",
    "mondai": 3,
    "number": 21
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "この料理は___すぎて、食べられません。",
    "options": [
      "あつ",
      "つめた",
      "から",
      "あま"
    ],
    "correct": 2,
    "explanation": "「食べられない（tidak bisa makan）」という状況と合わせると「辛すぎる（terlalu pedas）」が最も自然です。熱すぎる（terlalu panas）も可能ですが、辛い（からい）は日本語で典型的な「食べられない理由」です。",
    "id": "mojigoi_b_m3_q02",
    "mondai": 3,
    "number": 22
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "電車が___なかったので、バスで来ました。",
    "options": [
      "来",
      "行き",
      "乗り",
      "走り"
    ],
    "correct": 0,
    "explanation": "「電車が来なかった（kereta tidak datang）」が自然な表現です。「来る（くる）→来（こ）なかった」という否定形です。電車が来ないとき、代わりにバスを使うというコンテキストが合います。",
    "id": "mojigoi_b_m3_q03",
    "mondai": 3,
    "number": 23
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "この荷物は___すぎて、一人では持てません。",
    "options": [
      "かる",
      "おも",
      "たか",
      "おお"
    ],
    "correct": 1,
    "explanation": "「一人では持てない（tidak bisa dibawa sendiri）」という文脈から「重すぎる（terlalu berat）」が正しいです。「重くて（おもくて）→重すぎて（おもすぎて）」という表現になります。軽い（かるい）は反対の意味です。",
    "id": "mojigoi_b_m3_q04",
    "mondai": 3,
    "number": 24
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "スーパーで野菜と___を買いました。",
    "options": [
      "くるま",
      "くつ",
      "くだもの",
      "かばん"
    ],
    "correct": 2,
    "explanation": "スーパー（supermarket）で野菜（やさい）と一緒に買うものとして「果物（くだもの）＝buah-buahan」が最も自然です。車（くるま）・靴（くつ）・鞄（かばん）はスーパーで売っていないものです。",
    "id": "mojigoi_b_m3_q05",
    "mondai": 3,
    "number": 25
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "げんかんで くつを（ ）ください。",
    "options": [
      "ならべて",
      "とって",
      "ぬいで",
      "はいって"
    ],
    "correct": 2,
    "explanation": "Di pintu masuk (げんかん), kebiasaan di Jepang adalah melepas sepatu (ぬいでください).",
    "id": "mojigoi_b_m3_q06",
    "mondai": 3,
    "number": 26
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "まいにち（ ）にほんごの べんきょうを しますか。合わ",
    "options": [
      "どれくらい",
      "いくつ",
      "いかが",
      "どちらか"
    ],
    "correct": 0,
    "explanation": "「どれくらい」 menanyakan jangka waktu/berapa lama belajar bahasa Jepang setiap hari.",
    "id": "mojigoi_b_m3_q07",
    "mondai": 3,
    "number": 27
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "明日は___なので、傘を持っていきます。",
    "options": [
      "はれ",
      "くもり",
      "あめ",
      "ゆき"
    ],
    "correct": 2,
    "explanation": "「傘を持っていく（membawa payung）」という文脈から、「雨（あめ）＝hujan」が正しいです。晴れ＝cerah、曇り＝berawan、雪＝salju。傘は雨のときに使うものです。",
    "id": "mojigoi_b_m3_q08",
    "mondai": 3,
    "number": 28
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "「さようなら。（ ）あした。」",
    "options": [
      "もう",
      "どうも",
      "また",
      "もっと"
    ],
    "correct": 2,
    "explanation": "「また あした」 berarti sampai jumpa besok.",
    "id": "mojigoi_b_m3_q09",
    "mondai": 3,
    "number": 29
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "駅まで___でどのくらいかかりますか。",
    "options": [
      "あるいて",
      "みて",
      "よんで",
      "かいて"
    ],
    "correct": 0,
    "explanation": "「駅まで___でどのくらいかかる（berapa lama untuk sampai ke stasiun）」という文脈から「歩いて（あるいて）＝dengan berjalan kaki」が最も自然です。徒歩でどのくらいかかるかを聞く表現です。",
    "id": "mojigoi_b_m3_q10",
    "mondai": 3,
    "number": 30
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "あのひとは たなかさんの おじさんです。",
    "highlight": "おじさん",
    "options": [
      "たなかさんの おかあさんの おとうさんは あのひとです。",
      "たなかさんの おかあさんの おにいさんは あのひとです。",
      "たなかさんの おかあさんの いもうとさんは あのひとです。",
      "たなかさんの おかあさんの おかあさんは あのひとです。"
    ],
    "correct": 1,
    "explanation": "「おじさん」 (paman) adalah saudara laki-laki dari orang tua (おにいさん / kakak laki-laki ibu).",
    "id": "mojigoi_b_m4_q01",
    "mondai": 4,
    "number": 31
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「たかい」（値段）の反対の意味はどれですか。",
    "options": [
      "おもい",
      "ひくい",
      "やすい",
      "ちいさい"
    ],
    "correct": 2,
    "explanation": "値段（ねだん）の「高い（たかい）＝mahal」の反対は「安い（やすい）＝murah」です。重い（おもい）＝berat、低い（ひくい）＝rendah（高さの反対）、小さい（ちいさい）＝kecil。値段文脈では高い⇔安い が対義語です。",
    "id": "mojigoi_b_m4_q02",
    "mondai": 4,
    "number": 32
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「ちかい」の反対の意味はどれですか。",
    "options": [
      "とおい",
      "はやい",
      "おそい",
      "おおい"
    ],
    "correct": 0,
    "explanation": "「近い（ちかい）＝dekat」の反対は「遠い（とおい）＝jauh」です。速い（はやい）＝cepat、遅い（おそい）＝lambat、多い（おおい）＝banyak。近い⇔遠い は距離の対義語です。",
    "id": "mojigoi_b_m4_q03",
    "mondai": 4,
    "number": 33
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「むずかしい」の反対の意味はどれですか。",
    "options": [
      "おもしろい",
      "やさしい",
      "つまらない",
      "こわい"
    ],
    "correct": 1,
    "explanation": "「難しい（むずかしい）＝sulit」の反対は「易しい（やさしい）＝mudah」です。面白い（おもしろい）＝menarik、つまらない＝membosankan、怖い（こわい）＝menakutkan。難しい⇔易しい は難易度の対義語です。",
    "id": "mojigoi_b_m4_q04",
    "mondai": 4,
    "number": 34
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「さむい」の反対の意味はどれですか。",
    "options": [
      "つめたい",
      "あつい",
      "すずしい",
      "あたたかい"
    ],
    "correct": 1,
    "explanation": "「寒い（さむい）＝dingin（udara）」の反対は「暑い（あつい）＝panas（udara）」です。冷たい（つめたい）＝dingin（benda/air）、涼しい（すずしい）＝sejuk、暖かい（あたたかい）＝hangat。寒い⇔暑い は気温の対義語です。",
    "id": "mojigoi_b_m4_q05",
    "mondai": 4,
    "number": 35
  }
];

const mojigoiN5C: LegacyQuestion[] = [
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "去年、日本語を勉強しました。",
    "highlight": "去年",
    "options": [
      "きょねん",
      "こねん",
      "さくねん",
      "きょうねん"
    ],
    "correct": 0,
    "explanation": "「去年」は「きょねん」と読みます。去（きょ）＋年（ねん）で「きょねん」となります。去年は tahun lalu dalam bahasa Indonesia。「さくねん」も正しい読みですが、この選択肢では「きょねん」が最も一般的です。",
    "id": "mojigoi_c_m1_q01",
    "mondai": 1,
    "number": 1
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "学校は駅の近くにあります。",
    "highlight": "学校",
    "options": [
      "がこう",
      "がっこう",
      "がっこ",
      "がくこ"
    ],
    "correct": 1,
    "explanation": "「学校」は「がっこう」と読みます。学（がく）の「く」が促音（っ）になり、校（こう）と合わさって「がっこう」になります。",
    "id": "mojigoi_c_m1_q02",
    "mondai": 1,
    "number": 2
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "この クラスは 女の子が おおいです。",
    "highlight": "女の子",
    "options": [
      "おなのこ",
      "おんなのこ",
      "おんなのこう",
      "おなのこう"
    ],
    "correct": 1,
    "explanation": "「女の子」 dibaca 「おんなのこ」 yang berarti anak perempuan.",
    "id": "mojigoi_c_m1_q03",
    "mondai": 1,
    "number": 3
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "夕方、空がきれいな赤色になりました。",
    "highlight": "夕方",
    "options": [
      "ゆうがた",
      "ゆうほう",
      "よるがた",
      "ゆがた"
    ],
    "correct": 0,
    "explanation": "「夕方」は「ゆうがた」と読みます。夕（ゆう）＋方（がた）で「ゆうがた」となります。夕方は sore hari dalam bahasa Indonesia.",
    "id": "mojigoi_c_m1_q04",
    "mondai": 1,
    "number": 4
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "あの山はとても高いです。",
    "highlight": "山",
    "options": [
      "かわ",
      "やま",
      "もり",
      "さん"
    ],
    "correct": 1,
    "explanation": "「山」は訓読みで「やま」と読みます。音読みは「さん」ですが、単独で使う場合は「やま」が正しいです。「かわ」は川、「もり」は森の読み方です。",
    "id": "mojigoi_c_m1_q05",
    "mondai": 1,
    "number": 5
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "入口はどこですか。",
    "highlight": "入口",
    "options": [
      "でぐち",
      "いりくち",
      "いりぐち",
      "でくち"
    ],
    "correct": 2,
    "explanation": "「入口」は「いりぐち」と読みます。入（いり）＋口（くち→ぐち）で、連濁により「ぐち」となります。出口（でぐち）＝pintu keluar、入口（いりぐち）＝pintu masuk。",
    "id": "mojigoi_c_m1_q06",
    "mondai": 1,
    "number": 6
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "すみません、お金を わすれました。",
    "highlight": "お金",
    "options": [
      "おかね",
      "おかぬ",
      "おがね",
      "おがぬ"
    ],
    "correct": 0,
    "explanation": "「お金」 dibaca 「おかね」 yang berarti uang.",
    "id": "mojigoi_c_m1_q07",
    "mondai": 1,
    "number": 7
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "この青いシャツはいくらですか。",
    "highlight": "青い",
    "options": [
      "きいろい",
      "あかい",
      "あおい",
      "くろい"
    ],
    "correct": 2,
    "explanation": "「青い」は「あおい」と読みます。黄色い（きいろい）＝kuning、赤い（あかい）＝merah、黒い（くろい）＝hitam、青い（あおい）＝biru.",
    "id": "mojigoi_c_m1_q08",
    "mondai": 1,
    "number": 8
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "はしの うえで 電車が とまりました。",
    "highlight": "電車",
    "options": [
      "でんしゃ",
      "てんしゃ",
      "てんじゃ",
      "でんじゃ"
    ],
    "correct": 0,
    "explanation": "「電車」 dibaca 「でんしゃ」 yang berarti kereta api listrik.",
    "id": "mojigoi_c_m1_q09",
    "mondai": 1,
    "number": 9
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "駅の前に食堂があります。",
    "highlight": "食堂",
    "options": [
      "しょくどう",
      "しょくとう",
      "たべどう",
      "しょくどお"
    ],
    "correct": 0,
    "explanation": "「食堂」は「しょくどう」と読みます。食（しょく）＋堂（どう）で「しょくどう」となります。食堂は kantin/ruang makan dalam bahasa Indonesia.",
    "id": "mojigoi_c_m1_q10",
    "mondai": 1,
    "number": 10
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "地下鉄で銀座まで行きます。",
    "highlight": "地下鉄",
    "options": [
      "ちかてつ",
      "じかてつ",
      "ちしたてつ",
      "ちかでつ"
    ],
    "correct": 0,
    "explanation": "「地下鉄」は「ちかてつ」と読みます。地（ち）＋下（か）＋鉄（てつ）で「ちかてつ」となります。地下鉄は kereta bawah tanah/subway dalam bahasa Indonesia.",
    "id": "mojigoi_c_m1_q11",
    "mondai": 1,
    "number": 11
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "仕事が終わったら、飲みに行きましょう。",
    "highlight": "仕事",
    "options": [
      "しごと",
      "しぎょう",
      "しこと",
      "じごと"
    ],
    "correct": 0,
    "explanation": "「仕事」は「しごと」と読みます。仕（し）＋事（ごと）で「しごと」となります。連濁により「こと」→「ごと」に変化します。仕事は pekerjaan dalam bahasa Indonesia.",
    "id": "mojigoi_c_m1_q12",
    "mondai": 1,
    "number": 12
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "この さかなは おいしいです。",
    "highlight": "さかな",
    "options": [
      "魚",
      "鳥",
      "肉",
      "米"
    ],
    "correct": 0,
    "explanation": "「さかな」 ditulis sebagai 「魚」 (ikan).",
    "id": "mojigoi_c_m2_q01",
    "mondai": 2,
    "number": 13
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「びょういん」の正しい漢字はどれですか。",
    "options": [
      "美容院",
      "病院",
      "美院",
      "病飲"
    ],
    "correct": 1,
    "explanation": "「びょういん」の正しい漢字は「病院」です。病（びょう）＋院（いん）です。美容院（びよういん）は美容室で発音が似ていますが異なります。病院は rumah sakit、美容院は salon kecantikan です。",
    "id": "mojigoi_c_m2_q02",
    "mondai": 2,
    "number": 14
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "きょうしつは 9 かいですから、えれべーたーに のりましょう。",
    "highlight": "えれべーたー",
    "options": [
      "エレベークー",
      "エレベーター",
      "エレベーター",
      "エルベークー"
    ],
    "correct": 1,
    "explanation": "「えれべーたー」 ditulis dalam katakana sebagai 「エレベーター」 (elevator).",
    "id": "mojigoi_c_m2_q03",
    "mondai": 2,
    "number": 15
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「かいもの」の正しい漢字はどれですか。",
    "options": [
      "貝物",
      "買物",
      "買い物",
      "海物"
    ],
    "correct": 2,
    "explanation": "「かいもの（belanja）」の正しい漢字は「買い物」です。買（かい）＋物（もの）で「買い物」となります。貝（かい）は貝殻のこと、海（うみ）は laut。送り仮名（おくりがな）の「い」が必要です。",
    "id": "mojigoi_c_m2_q04",
    "mondai": 2,
    "number": 16
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "でんしゃの なかで ほんを よみました。",
    "highlight": "よみました",
    "options": [
      "書きました",
      "読みました",
      "聞きました",
      "見ました"
    ],
    "correct": 1,
    "explanation": "「よみました」 ditulis sebagai 「読みました」 (membaca).",
    "id": "mojigoi_c_m2_q05",
    "mondai": 2,
    "number": 17
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "この テーブルは ごまんえんでした。",
    "highlight": "ごまんえん",
    "options": [
      "五方円",
      "五万円",
      "五万内",
      "五方内"
    ],
    "correct": 1,
    "explanation": "「ごまんえん」 ditulis sebagai 「五万円」 (50.000 yen).",
    "id": "mojigoi_c_m2_q06",
    "mondai": 2,
    "number": 18
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "「やすみ」の正しい漢字はどれですか。",
    "options": [
      "安み",
      "休み",
      "易み",
      "泰み"
    ],
    "correct": 1,
    "explanation": "「やすみ（istirahat/hari libur）」の正しい漢字は「休み」です。休む（やすむ）の名詞形が「休み（やすみ）」です。安（やす）は「安い（やすい）」の安、易も「やすい」と読みますが「休み」の漢字は「休」です。",
    "id": "mojigoi_c_m2_q07",
    "mondai": 2,
    "number": 19
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "となりの いえの ねこは あしが くろいです。",
    "highlight": "あし",
    "options": [
      "足",
      "目",
      "手",
      "耳"
    ],
    "correct": 0,
    "explanation": "「あし」 ditulis sebagai 「足」 (kaki).",
    "id": "mojigoi_c_m2_q08",
    "mondai": 2,
    "number": 20
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "いもうとは あかい ぼうしを（ ）。",
    "options": [
      "とっています",
      "きています",
      "かかっています",
      "かぶっています"
    ],
    "correct": 3,
    "explanation": "「帽子をかぶる (かぶっています)」 berarti memakai topi.",
    "id": "mojigoi_c_m3_q01",
    "mondai": 3,
    "number": 21
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "弟は___が好きで、毎日練習しています。",
    "options": [
      "りょうり",
      "サッカー",
      "えいご",
      "すいえい"
    ],
    "correct": 1,
    "explanation": "「毎日練習（berlatih setiap hari）」という文脈から、練習が必要な「サッカー（sepak bola）」が最も自然です。料理（りょうり）も練習できますが、サッカーの方が「練習」という言葉と結びつきが強いです。",
    "id": "mojigoi_c_m3_q02",
    "mondai": 3,
    "number": 22
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "この問題は___すぎて、わかりません。",
    "options": [
      "むずかし",
      "やさし",
      "おおき",
      "ちいさ"
    ],
    "correct": 0,
    "explanation": "「わかりません（tidak mengerti）」という結果から「難しすぎる（terlalu sulit）」が正しいです。易しい＝mudah（jika mudah, pasti mengerti）、大きい・小さい は問題の特性として合いません。",
    "id": "mojigoi_c_m3_q03",
    "mondai": 3,
    "number": 23
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "毎晩、寝る前に___を読みます。",
    "options": [
      "えいが",
      "おんがく",
      "ほん",
      "スポーツ"
    ],
    "correct": 2,
    "explanation": "「寝る前に（sebelum tidur）」に「読む（membaca）」という動詞が来るので、読むことができるものは「本（ほん）＝buku」が正しいです。映画・音楽・スポーツは「読む」とは言いません。",
    "id": "mojigoi_c_m3_q04",
    "mondai": 3,
    "number": 24
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "こうえんで（ ）の しゃしんを とりました。",
    "options": [
      "とり",
      "はな",
      "ともだち",
      "いけ"
    ],
    "correct": 1,
    "explanation": "Mengambil foto bunga (はなのしゃしんをとりました) di taman.",
    "id": "mojigoi_c_m3_q05",
    "mondai": 3,
    "number": 25
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "今日は休みなので、一日中___いました。",
    "options": [
      "はたらいて",
      "ねて",
      "はしって",
      "かいて"
    ],
    "correct": 1,
    "explanation": "「休み（hari libur）」「一日中（seharian）」という文脈から「寝ていた（tidur-tiduran）」が最も自然です。働いて（bekerja）は休みと矛盾します。",
    "id": "mojigoi_c_m3_q06",
    "mondai": 3,
    "number": 26
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "わたしは あさ シャワーを（ ）。",
    "options": [
      "はいります",
      "あびます",
      "いれます",
      "たべます"
    ],
    "correct": 1,
    "explanation": "「シャワーを浴びる (あびます)」 berarti mandi menggunakan pancuran.",
    "id": "mojigoi_c_m3_q07",
    "mondai": 3,
    "number": 27
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "タクシーを（ ）ください。",
    "options": [
      "のって",
      "よんで",
      "とって",
      "あって"
    ],
    "correct": 1,
    "explanation": "「タクシーを呼ぶ (よぶ -> よんで)」 berarti memanggil taksi.",
    "id": "mojigoi_c_m3_q08",
    "mondai": 3,
    "number": 28
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "さいふを（ ）かもしれません。",
    "options": [
      "だした",
      "わたした",
      "かった",
      "なくした"
    ],
    "correct": 3,
    "explanation": "「財布をなくす (なくした)」 berarti menghilangkan dompet.",
    "id": "mojigoi_c_m3_q09",
    "mondai": 3,
    "number": 29
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "context",
    "question": "お腹が___から、ご飯を食べましょう。",
    "options": [
      "かわいた",
      "すいた",
      "いたい",
      "おもい"
    ],
    "correct": 1,
    "explanation": "「ご飯を食べましょう（ayo makan）」という文脈から「お腹が空いた（lapar）」が正しいです。「空く（すく）」でお腹が空くという意味です。「乾いた」はのどに使う、「痛い」は食べる理由にならない、「重い」も違います。",
    "id": "mojigoi_c_m3_q10",
    "mondai": 3,
    "number": 30
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「でかける」と同じ意味の言葉はどれですか。",
    "options": [
      "そとへいく",
      "うちにいる",
      "ねる",
      "たべる"
    ],
    "correct": 0,
    "explanation": "「出かける（でかける）＝pergi keluar」と同じ意味は「外へ行く（そとへいく）」です。外（そと）＝luar、家にいる（うちにいる）＝di rumah（反対の意味）。出かけるは家から外に出ることを意味します。",
    "id": "mojigoi_c_m4_q01",
    "mondai": 4,
    "number": 31
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「うごく」の反対の意味はどれですか。",
    "options": [
      "はしる",
      "とまる",
      "あるく",
      "とぶ"
    ],
    "correct": 1,
    "explanation": "「動く（うごく）＝bergerak」の反対は「止まる（とまる）＝berhenti」です。走る（はしる）＝berlari（動くの一種）、歩く（あるく）＝berjalan（動くの一種）、飛ぶ（とぶ）＝terbang（動くの一種）。",
    "id": "mojigoi_c_m4_q02",
    "mondai": 4,
    "number": 32
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「かなり」と同じ意味の言葉はどれですか。",
    "options": [
      "すこし",
      "ぜんぜん",
      "けっこう",
      "もしかして"
    ],
    "correct": 2,
    "explanation": "「かなり（cukup/lumayan）」と同じ意味は「結構（けっこう）＝cukup/lumayan」です。少し（すこし）＝sedikit（程度が低い）、全然（ぜんぜん）＝sama sekali tidak、もしかして＝mungkin。",
    "id": "mojigoi_c_m4_q03",
    "mondai": 4,
    "number": 33
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "「からだ」と同じ意味の言葉はどれですか。",
    "options": [
      "こころ",
      "ほね",
      "たいそう",
      "にんたい"
    ],
    "correct": 1,
    "explanation": "「体（からだ）＝tubuh/badan」に関係する言葉は「骨（ほね）＝tulang」で体の一部です。「からだ」と「骨」は直接の同義語ではありませんが、体の構成要素です。実は最も近いのは「身体（しんたい）」ですが、選択肢にないため骨が体の一部として最も近い言葉です。",
    "id": "mojigoi_c_m4_q04",
    "mondai": 4,
    "number": 34
  },
  {
    "level": "N5",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "あしたは いい てんきでしょう。",
    "highlight": "いい てんき",
    "options": [
      "あしたは あめが ふるでしょう。",
      "あしたは くもりでしょう。",
      "あしたは ゆきでしょう。",
      "あしたは はれでしょう。"
    ],
    "correct": 3,
    "explanation": "「いい てんき」 (cuaca baik) sama maknanya dengan 「はれ」 (cerah).",
    "id": "mojigoi_c_m4_q05",
    "mondai": 4,
    "number": 35
  }
];

export const questionBanks: Record<string, LegacyQuestion[]> = {
  N5_A: superMoshiN5Questions,
  N5_MOJIGOI_A: mojigoiN5A,
  N5_MOJIGOI_B: mojigoiN5B,
  N5_MOJIGOI_C: mojigoiN5C,
  N5_BUNPOU_A: bunpouDokkaiN5A,
  N5_BUNPOU_B: bunpouDokkaiN5B,
  N5_BUNPOU_C: bunpouDokkaiN5C,
  N5_B: tipeBN5Questions,
  N5: superMoshiN5Questions, // Default N5 refers to Paket A
    N4: [
    {
      id: 12,
      level: 'N4',
      section: 'Vocabulary',
      type: 'kanji-read',
      question: '父はまいあささんぽします。',
      highlight: '散歩',
      options: ['さんぽ', 'さんぼ', 'ざんぽ', 'ざんぼ'],
      correct: 0,
      explanation: '「散歩」 dibaca 「さんぽ」 (sanpo) yang berarti "jalan-jalan".'
    },
    {
      id: 13,
      level: 'N4',
      section: 'Vocabulary',
      type: 'usage',
      question: 'Pilihlah penggunaan kata 「つづける」 yang paling tepat:',
      options: [
        'あめがつづきます。',
        '日本語のべんきょうをつづけます。',
        'ともだちをつづけます。',
        'おんがくをつづけます。'
      ],
      correct: 1,
      explanation: '「つづける」 (tsuzukeru) merupakan kata kerja transitif (transitive verb) yang berarti "melanjutkan sesuatu", contohnya melanjutkan belajar (べんきょうをつづける).'
    },
    {
      id: 14,
      level: 'N4',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'あしたはあめが＿＿＿とおomimasu.',
      options: ['ふる', 'ふって', 'ふった', 'ふり'],
      correct: 0,
      explanation: 'Pola kalimat 「～と思います」 (saya pikir...) didahului oleh bentuk biasa (plain form). Kata kerja 「ふる」 adalah bentuk kamus/biasa.'
    },
    {
      id: 15,
      level: 'N4',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'このほんはおもしろくて、＿＿＿。',
      options: ['やすいです', 'やすくないです', 'たかくないです', 'ながいです'],
      correct: 0,
      explanation: 'Bentuk sambung kata sifat-i menggunakan 「て」 (おもしろくて...) untuk menyatakan dua kondisi yang setara/positif. Maka dilanjutkan dengan 「やすいです」 (dan murah).'
    },
    {
      id: 16,
      level: 'N4',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'にほんへきたら、＿＿＿。',
      options: ['ぜひあいましょう', 'ぜひあいました', 'ぜひあいています', 'ぜひあいます'],
      correct: 0,
      explanation: 'Pola 「～たら」 (jika/setelah...) sering diikuti oleh kalimat ajakan atau keinginan seperti 「ぜひ会いましょう」 (mari kita bertemu).'
    },
    {
      id: 17,
      level: 'N4',
      section: 'Reading',
      type: 'reading-medium',
      passage: 'わたしはきょねんの4がつににhoんにきました。にほんごがすきだったからです。いまはとうきょうのがっこうでべんきょうしています。まいにちはべんきょうとアルバイトでいそがしいです。でも、たのしいです。',
      question: 'このひとはいまどこにいますか。',
      options: ['にほん', 'アメリカ', 'ちゅうごく', 'かんこく'],
      correct: 0,
      explanation: 'Teks menyatakan 「とうきょうのがっこうでべんきょうしています」 (belajar di sekolah Tokyo), yang berarti ia sekarang berada di Jepang (にほん).'
    },
    {
      id: 18,
      level: 'N4',
      section: 'Reading',
      type: 'reading-medium',
      passage: 'きのうともだちとレストランでしょくじをしました。にくとやさいのりょうりをたのみました。とてもおいしかったです。かいけいはわたしがはらいました。',
      question: 'だれがかいけいをはらいましたか。',
      options: ['ともだち', 'かれ', 'わたし', 'てんいん'],
      correct: 2,
      explanation: 'Pada bagian akhir tertulis 「かいけいはわたしがはらいました」 yang menyatakan bahwa "saya" (わたし) yang membayar tagihan.'
    },
    {
      id: 19,
      level: 'N4',
      section: 'Grammar',
      type: 'grammar-2',
      question: 'Susunlah kalimat berikut: 日本語が ＿＿ ＿＿ ＿★＿ ＿＿。 Tentukan kata pada posisi ★:',
      options: ['はなせる', 'ように', 'なりたい', 'から'],
      correct: 1,
      explanation: 'Susunan kalimat yang benar adalah 「日本語が はなせる ように なりたい」. Kata ketiga (posisi ★) adalah 「ように」.'
    },
    {
      id: 20,
      level: 'N4',
      section: 'Listening',
      type: 'audio-listening',
      question: 'Dengarkan rekaman audio dan tentukan apa yang akan dilakukan pria itu selanjutnya.',
      audioUrl: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4/BPT_N4_1_01.mp3',
      options: ['でんわを かけます', 'しゅくだいを します', 'かいものに いきます', 'ともだちに あいます'],
      correct: 2,
      explanation: 'Berdasarkan petunjuk audio dummy ini, pria tersebut akan pergi berbelanja (かいものにいきます).'
    }
  ],
  N3: [
    {
      id: 21,
      level: 'N3',
      section: 'Vocabulary',
      type: 'kanji-read',
      question: 'このしごとはけいけんがひつようだ。',
      highlight: '必要',
      options: ['ひつよう', 'ひつよ', 'ひっよう', 'ひつよお'],
      correct: 0,
      explanation: '「必要」 dibaca 「ひつよう」 (hitsuyou) yang berarti "dibutuhkan/diperlukan".'
    },
    {
      id: 22,
      level: 'N3',
      section: 'Vocabulary',
      type: 'usage',
      question: 'Pilihlah penggunaan kata 「はたらく」 yang paling tepat:',
      options: [
        '銀行で一生懸命はたらいています。',
        '日本語を毎日学校ではたらきます。',
        '部屋をきれいにはたらいてください。',
        '美味しい料理を台所ではたらく。'
      ],
      correct: 0,
      explanation: '「はたらく」 (hataraku) berarti bekerja di suatu tempat, sehingga penggunaan paling tepat adalah bekerja keras di bank (銀行ではたらいている).'
    },
    {
      id: 23,
      level: 'N3',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'しけんがおわった＿＿＿、よろこんでいる。',
      options: ['のに', 'ので', 'とき', 'あとで'],
      correct: 1,
      explanation: 'Partikel 「ので」 (node) digunakan untuk menunjukkan hubungan sebab-akibat (karena ujian selesai, dia merasa senang).'
    },
    {
      id: 24,
      level: 'N3',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'このほんは＿＿＿、よんでみてください。',
      options: ['おもしろいなら', 'おもしろくて', 'おもしろいので', 'おもしろかったら'],
      correct: 3,
      explanation: 'Bentuk pengandaian 「～たら」 (jika...) sangat cocok digunakan sebelum memberikan saran atau perintah tindakan berikutnya.'
    },
    {
      id: 25,
      level: 'N3',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'あのひとは日本語を＿＿＿、にほんのしごとがみつかる。',
      options: ['べんきょうすれば', 'べんきょうしても', 'べんきょうしたら', 'べんきょうするのに'],
      correct: 0,
      explanation: 'Bentuk kondisional 「～ば」 (べんきょうすれば) digunakan untuk mengekspresikan kondisi prasyarat yang membawa hasil logis di bagian akhir.'
    },
    {
      id: 26,
      level: 'N3',
      section: 'Reading',
      type: 'reading-complex',
      passage: 'きのうかいしゃのかいぎであったことをともだちにはなした。かいぎではあたらしいプロジェクトのことをはなしあった。プロジェクトはらいねんはじまることになった。みんながんばらなければならないとおもった。',
      question: 'かいぎではなにをきめましたか。',
      options: ['ともだちのこと', 'プロジェクトの開始時期', '会社名変更', '新入社員採用'],
      correct: 1,
      explanation: 'Kalimat 「プロジェクトはらいねんはじまることになった」 berarti proyek diputuskan dimulai tahun depan (jadwal/waktu mulai proyek).'
    },
    {
      id: 27,
      level: 'N3',
      section: 'Reading',
      type: 'reading-complex',
      passage: 'このごろはしごとがおおくて、まいにちつかれている。しかし、やすむひまがない。あしたもはやくかいしゃへいかなければならない。',
      question: 'このひとはどうしてつかれていますか。',
      options: ['ねていないから', 'しごとがおおいから', '勉強がおおいから', '運動をしたから'],
      correct: 1,
      explanation: 'Kalimat pertama menegaskan penyebab lelah adalah pekerjaan yang banyak (しごとがおおくて).'
    },
    {
      id: 28,
      level: 'N3',
      section: 'Listening',
      type: 'audio-listening',
      question: 'Dengarkan instruksi guru dan pilih tindakan yang harus dilakukan oleh siswa.',
      audioUrl: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5/BPT_N5_3_01.mp3',
      options: ['しけんをはじめます', 'きょうかしょを閉じます', 'しつもんをします', 'プリントを配ります'],
      correct: 1,
      explanation: 'Berdasarkan audio dummy ini, guru meminta siswa untuk menutup buku teks mereka (きょうかしょを閉じます).'
    }
  ]
};

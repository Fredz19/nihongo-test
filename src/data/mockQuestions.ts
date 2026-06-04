// Legacy question format with numeric id — used as fallback for N3/dev/outage.
// useQuestions.ts converts these to the canonical Question type (id: string).
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

export const questionBanks: Record<string, LegacyQuestion[]> = {
  N5_A: superMoshiN5Questions,
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

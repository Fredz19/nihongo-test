export interface LegacyQuestion {
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

export const choukaiN4A: LegacyQuestion[] = [
  // MONDAI 1: 課題理解 (8 soal, nomor 1-8, track_02 ke track_09)
  {
    id: "n4_listening_a_m1_q01",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "1番：男の学生と女の学生が話しています。男の学生はこれからまず何をしますか。",
    options: [
      "1. 辞書を返す",
      "2. 教室を片付ける",
      "3. 先生の部屋へ行く",
      "4. 友達に連絡する"
    ],
    correct: 2,
    explanation: "### Transkrip Jepang\n男：あ、鈴木さん。ちょっと手伝ってくれない？\n女：いいよ、どうしたの？\n男：先生の部屋から辞書を運ぶんだけど、一人じゃ大変で。\n女：いいよ。でもその前に、この教室を片付けちゃわない？\n男：教室は他の人がやってくれるから大丈夫。先に先生の部屋に行こう。\n女：わかった。じゃあ行きましょう。\n\n### Terjemahan Indonesia\nLaki-laki: Ah, Suzuki-san. Bisakah kamu membantu saya sebentar?\nPerempuan: Boleh, ada apa?\nLaki-laki: Saya harus membawa kamus dari ruangan guru, tapi sulit kalau sendirian.\nPerempuan: Boleh. Tapi sebelum itu, bagaimana kalau kita bereskan kelas ini dulu?\nLaki-laki: Kelas akan dibereskan oleh orang lain, jadi tidak apa-apa. Mari kita pergi ke ruangan guru dulu.\nPerempuan: Baik. Kalau begitu mari kita pergi.\n\n### Penjelasan Jawaban\nLaki-laki mengatakan kelas akan diurus orang lain, dan mengajak untuk pergi ke ruangan guru terlebih dahulu (先に先生の部屋に行こう). Maka tindakan pertama yang dilakukan adalah pergi ke ruangan guru (Opsi 3, index 2).",
    audioUrl: "/audio/super_moshi_n4_track_02.mp3",
    mondai: 1,
    number: 1
  },
  {
    id: "n4_listening_a_m1_q02",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "2番：男の人と女の人が話しています。男の人は明日、何を持っていかなければなりませんか。",
    options: [
      "1. お弁当",
      "2. 飲み物",
      "3. 傘",
      "4. 身分証明書"
    ],
    correct: 3,
    explanation: "### Transkrip Jepang\n女：明日のハイキングの準備はできましたか。\n男：はい、お弁当と飲み物は買いました。\n女：そうですか。明日は午後から雨が降るかもしれないので、傘かレインコートを持ってきた方がいいですよ。\n男：わかりました。あと、身分証明書も必要ですか。\n女：はい、受付で必要になりますから忘れないでくださいね。\n\n### Terjemahan Indonesia\nPerempuan: Apakah persiapan untuk hiking besok sudah selesai?\nLaki-laki: Ya, saya sudah membeli bento dan minuman.\nPerempuan: Begitu ya. Besok mungkin akan hujan sejak sore, jadi sebaiknya membawa payung atau jas hujan.\nLaki-laki: Baik. Lalu, apakah kartu identitas juga diperlukan?\nPerempuan: Ya, karena akan diperlukan di bagian penerimaan tamu, jadi jangan sampai lupa ya.\n\n### Penjelasan Jawaban\nLaki-laki sudah menyiapkan makanan dan minuman. Perempuan mengingatkan agar tidak lupa membawa kartu identitas (身分証明書) karena penting untuk registrasi. Maka yang harus dibawa adalah kartu identitas (Opsi 4, index 3).",
    audioUrl: "/audio/super_moshi_n4_track_03.mp3",
    mondai: 1,
    number: 2
  },
  {
    id: "n4_listening_a_m1_q03",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "3番：会社で男の人と女の人が話しています。女の人はこれからまず何をしますか。",
    options: [
      "1. 資料をコピーする",
      "2. 会議室を予約する",
      "3. 部長に電話する",
      "4. お茶を用意する"
    ],
    correct: 1,
    explanation: "### Transkrip\n男：鈴木さん、今日の会議の準備をお願いできる？\n女：はい、資料のコピーは終わりました。\n男：ありがとう。じゃあ、先に会議室を予約しておいてくれる？午後から使うから。\n女：わかりました。お茶の準備はどうしますか。\n男：それは会議の直前でいいよ。\n\n### Penjelasan\nLaki-laki meminta perempuan untuk segera memesan ruang rapat terlebih dahulu (先に会議室を予約しておいてくれる？) sebelum menyiapkan teh. Maka tindakan pertamanya adalah memesan ruang rapat (Opsi 2, index 1).",
    audioUrl: "/audio/super_moshi_n4_track_04.mp3",
    mondai: 1,
    number: 3
  },
  {
    id: "n4_listening_a_m1_q04",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "4番：日本語学校で先生と学生が話しています。学生は明日、何時に学校に来なければなりませんか。",
    options: [
      "1. 8時30分",
      "2. 8時45分",
      "3. 9時00分",
      "4. 9時15分"
    ],
    correct: 1,
    explanation: "### Transkrip\n先生：明日の試験について説明します。試験は9時から始まります。\n学生：先生、何時までに来ればいいですか。\n先生：教室には15分前に入ってください。遅れないようにね。\n学生：わかりました。8時45分ですね。\n\n### Penjelasan\nUjian dimulai pukul 9:00, dan mahasiswa diminta masuk kelas 15 menit sebelumnya (15分前). 9:00 dikurangi 15 menit adalah 8:45 (Opsi 2, index 1).",
    audioUrl: "/audio/super_moshi_n4_track_05.mp3",
    mondai: 1,
    number: 4
  },
  {
    id: "n4_listening_a_m1_q05",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "5番：店で男の人と女の人が話しています。男の人はどのケーキを買いますか。",
    options: [
      "1. いちごのケーキ",
      "2. チョコレートケーキ",
      "3. チーズケーキ",
      "4. モンブラン"
    ],
    correct: 1,
    explanation: "### Transkrip\n男：どれにしようか。いちごのケーキが美味しそうだね。\n女：うーん、私はチョコレートケーキがいいな。\n男：じゃあ、それにしよう。あ、チーズケーキも安くなってるよ。\n女：でもやっぱり今日はチョコの気分かな。\n男：わかった。じゃあ、チョコレートケーキを二つください。\n\n### Penjelasan\nLaki-laki setuju membeli kue pilihan perempuan yaitu kue cokelat (チョコレートケーキを二つください). Jawabannya adalah Opsi 2 (index 1).",
    audioUrl: "/audio/super_moshi_n4_track_06.mp3",
    mondai: 1,
    number: 5
  },
  {
    id: "n4_listening_a_m1_q06",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "6番：男の学生と女の学生が話しています。男の学生はこれからどうしますか。",
    options: [
      "1. バスで行く",
      "2. 自転車で行く",
      "3. 歩いて行く",
      "4. タクシーで行く"
    ],
    correct: 0,
    explanation: "### Transkrip\n男：これから図書館に行くんだ。一緒にどう？\n女：いいね。歩いていくの？\n男：うーん、ちょっと遠いから自転車で行こうと思ったんだけど、雨が降ってきたね。\n女：じゃあ、バスで行こうよ。バス停も近いし。\n男：そうだね。そうしよう。\n\n### Penjelasan\nAwalnya ingin menggunakan sepeda, tetapi karena hujan turun (雨が降ってきたね), mereka sepakat naik bus (バスで行こうよ). Jawabannya adalah Opsi 1 (index 0).",
    audioUrl: "/audio/super_moshi_n4_track_07.mp3",
    mondai: 1,
    number: 6
  },
  {
    id: "n4_listening_a_m1_q07",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "7番：女の人と男の人が話しています。男の人はこれからどこへ行きますか。",
    options: [
      "1. スーパー",
      "2. 郵便局",
      "3. 銀行",
      "4. 薬局"
    ],
    correct: 2,
    explanation: "### Transkrip\n女：ちょっと出かけてくるね。スーパーに行って買い物してくる。\n男：あ、それなら郵便局にも寄ってくれる？この手紙を出してほしいんだ。\n女：いいよ。ついでに銀行にも行ってお金を下ろしてきて。\n男：あ、銀行なら僕が今から行く用事があるから、僕が行くよ。郵便局は君にお願いしていい？\n女：わかった。じゃあそうしましょう。\n\n### Penjelasan\nLaki-laki menawarkan diri untuk pergi ke bank (銀行なら僕が今から行く用事があるから、僕が行くよ) karena ia memang ada keperluan ke sana. Maka ia akan pergi ke Bank (Opsi 3, index 2).",
    audioUrl: "/audio/super_moshi_n4_track_08.mp3",
    mondai: 1,
    number: 7
  },
  {
    id: "n4_listening_a_m1_q08",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "8番：日本語学校で学生と受付の人が話しています。学生は授業が終わったらどうしますか。",
    options: [
      "1. すぐに家に帰る",
      "2. 事務所に寄る",
      "3. 図書室へ行く",
      "4. 先生の部屋へ行く"
    ],
    correct: 1,
    explanation: "### Transkrip\n学生：すみません、この書類はいつ出せばいいですか。\n受付：今日の授業が終わったら、すぐに事務所に持ってきてください。\n学生：先生に出すのではないですか。\n受付：いいえ、事務所の受付に出してください。\n学生：わかりました。終わったら行きます。\n\n### Penjelasan\nPetugas administrasi meminta siswa untuk membawa dokumen ke kantor/kantor administrasi segera setelah kelas selesai (授業が終わったら、すぐに事務所に持ってきてください). Jawabannya adalah Opsi 2 (index 1).",
    audioUrl: "/audio/super_moshi_n4_track_09.mp3",
    mondai: 1,
    number: 8
  },

  // MONDAI 2: ポイント理解 (7 soal, nomor 9-15, track_11 ke track_17)
  {
    id: "n4_listening_a_m2_q01",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "9番：男の人と女の人が話しています。女の人はどうして昨日、パーティーに行きませんでしたか。",
    options: [
      "1. 仕事が忙しかったから",
      "2. 風邪を引いたから",
      "3. 友達に会っていたから",
      "4. 用事があったから"
    ],
    correct: 1,
    explanation: "### Transkrip\n男：昨日のパーティー、どうして来なかったの？楽しかったよ。\n女：行きたかったんだけど、急に熱が出て風邪引いちゃって。\n男：そうだったんだ。大丈夫？\n女：うん、薬を飲んで一日寝てたら良くなったよ。\n\n### Penjelasan\nPerempuan tidak bisa datang karena tiba-tiba badannya panas dan masuk angin (熱が出て風邪引いちゃって). Jawabannya adalah Opsi 2 (index 1).",
    audioUrl: "/audio/super_moshi_n4_track_11.mp3",
    mondai: 2,
    number: 9
  },
  {
    id: "n4_listening_a_m2_q02",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "10番：学生と先生が話しています。学生は日本語の勉強で何が一番難しいと言っていますか。",
    options: [
      "1. 漢字",
      "2. 文法",
      "3. 聴解（聞き取り）",
      "4. 会話"
    ],
    correct: 2,
    explanation: "### Transkrip\n先生：日本語の勉強はどうですか。何が大変ですか。\n学生：漢字は書くのが楽しいですが、聞き取りが全然できなくて本当に難しいです。\n先生：そうですか。ニュースを聞いたりするのはいい練習になりますよ。\n学生：会話は友達と話すので楽しいですが、リスニングが一番苦手です。\n\n### Penjelasan\nSiswa mengatakan bahwa mendengarkan (聞き取り/リスニング) adalah hal yang paling sulit baginya (聞き取りが全然できなくて本当に難しいです / リスニングが一番苦手です). Jawabannya adalah Opsi 3 (index 2).",
    audioUrl: "/audio/super_moshi_n4_track_12.mp3",
    mondai: 2,
    number: 10
  },
  {
    id: "n4_listening_a_m2_q03",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "11番：男の学生と女の学生が話しています。男の学生はどうしてアルバイトを辞めたいと言っていますか。",
    options: [
      "1. 時給が安いから",
      "2. 店長が厳しいから",
      "3. 勉強の時間がないから",
      "4. 家から遠いから"
    ],
    correct: 2,
    explanation: "### Transkrip\n男：最近、バイトを辞めようか悩んでるんだ。\n女：え、どうして？時給もいいし、店長も優しいって言ってたじゃない。\n男：うん。でも、テストの成績が落ちちゃって、このままだと勉強の時間が足りなくて進学できないと思って。\n女：そっか、学業が一番大事だもんね。\n\n### Penjelasan\nLaki-laki ingin berhenti kerja paruh waktu karena nilai ujiannya turun dan ia tidak memiliki cukup waktu belajar (勉強の時間が足りなくて). Jawabannya adalah Opsi 3 (index 2).",
    audioUrl: "/audio/super_moshi_n4_track_13.mp3",
    mondai: 2,
    number: 11
  },
  {
    id: "n4_listening_a_m2_q04",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "12番：男の人と女の人が話しています。男の人はどうして新しいアパートに引っ越しましたか。",
    options: [
      "1. 会社に近いから",
      "2. 家賃が安いから",
      "3. 部屋が広いから",
      "4. 周りが静かだから"
    ],
    correct: 0,
    explanation: "### Transkrip\n女：新しいアパートはどうですか。\n男：会社まで歩いて10分になったので、通勤がすごく楽になりました。\n女：家賃は高くなりましたか？\n男：はい、少し高くなりましたが、時間の節約になるので良かったです。\n\n### Penjelasan\nLaki-laki pindah karena jarak ke perusahaan menjadi sangat dekat (会社まで歩いて10分になった), yang membuat perjalanannya sangat mudah. Jawabannya adalah Opsi 1 (index 0).",
    audioUrl: "/audio/super_moshi_n4_track_14.mp3",
    mondai: 2,
    number: 12
  },
  {
    id: "n4_listening_a_m2_q05",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "13番：女の人と男の人が話しています。二人はどうしてこのレストランを選びましたか。",
    options: [
      "1. 料理が美味しいから",
      "2. 値段が安いから",
      "3. サービスが良いから",
      "4. 景色が綺麗だから"
    ],
    correct: 3,
    explanation: "### Transkrip\n女：ここのレストラン、窓からの海の見え方が素晴らしいね。\n男：そうだね。夜になると夜景もすごく綺麗らしいよ。\n女：料理は少し高いけど、この景色を見ながら食べられるなら大満足だね。\n男：うん、選んで良かったね。\n\n### Penjelasan\nMereka memilih restoran tersebut karena pemandangannya yang indah (海の見え方が素晴らしい / 景色が綺麗). Jawabannya adalah Opsi 4 (index 3).",
    audioUrl: "/audio/super_moshi_n4_track_15.mp3",
    mondai: 2,
    number: 13
  },
  {
    id: "n4_listening_a_m2_q06",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "14番：男の人と女の人が話しています。男の人は夏休みにどこへ行く予定ですか。",
    options: [
      "1. 北海道",
      "2. 沖縄",
      "3. 京都",
      "4. 海外"
    ],
    correct: 0,
    explanation: "### Transkrip\n女：夏休みはどこか旅行に行くんですか。\n男：今年は北海道に行こうと思っています。涼しくて気持ちいいそうなので。\n女：いいですね。私は沖縄に行って海で泳ぐ予定です。\n男：沖縄もいいですね。気をつけて行ってきてください。\n\n### Penjelasan\nLaki-laki berencana pergi ke Hokkaido (今年は北海道に行こうと思っています) pada liburan musim panas. Jawabannya adalah Opsi 1 (index 0).",
    audioUrl: "/audio/super_moshi_n4_track_16.mp3",
    mondai: 2,
    number: 14
  },
  {
    id: "n4_listening_a_m2_q07",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "15番：会社で女の人と男の人が話しています。男の人はどうして昨日遅刻しましたか。",
    options: [
      "1. 寝坊したから",
      "2. 電車が遅れたから",
      "3. 道に迷ったから",
      "4. 忘れ物をしたから"
    ],
    correct: 1,
    explanation: "### Transkrip\n女：昨日、珍しく遅刻したね。どうしたの？\n男：いつも乗る電車が事故で止まっちゃって、1時間以上遅れたんだよ。\n女：そうだったんだ。連絡はできた？\n男：駅がすごく混んでいて電話がなかなか繋がらなくて大変だった。\n\n### Penjelasan\nLaki-laki terlambat karena kereta yang biasa ia naiki berhenti akibat kecelakaan (電車が事故で止まっちゃって). Jawabannya adalah Opsi 2 (index 1).",
    audioUrl: "/audio/super_moshi_n4_track_17.mp3",
    mondai: 2,
    number: 15
  },

  // MONDAI 3: 発話表現 (5 soal, nomor 16-20, track_19 ke track_23, 3 pilihan)
  {
    id: "n4_listening_a_m3_q01",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "16番：重そうな荷物を持っています。友達に手伝ってほしいとき、何と言いますか。",
    options: [
      "1. 手伝ってあげようか？",
      "2. ちょっと手伝ってくれない？",
      "3. 手伝ってくれてありがとう。"
    ],
    correct: 1,
    explanation: "### Transkrip / Penjelasan\nSituasi: Membawa barang berat dan ingin meminta bantuan teman. Ucapan yang tepat adalah:\n* Opsi 1: 「手伝ってあげようか？」 (Mau kubantu?) - Menawarkan bantuan.\n* Opsi 2: 「ちょっと手伝ってくれない？」 (Bisa bantu sebentar?) - Meminta bantuan (Benar).\n* Opsi 3: 「手伝ってくれてありがとう。」 (Terima kasih sudah membantu) - Mengucapkan terima kasih.",
    audioUrl: "/audio/super_moshi_n4_track_19.mp3",
    mondai: 3,
    number: 16
  },
  {
    id: "n4_listening_a_m3_q02",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "17番：レストランに入りました。窓側の席に座りたいとき、店員に何と言いますか。",
    options: [
      "1. 窓側の席に座ってもいいですか。",
      "2. 窓側の席はいかがですか。",
      "3. 窓側の席をご案内します。"
    ],
    correct: 0,
    explanation: "### Transkrip / Penjelasan\nSituasi: Ingin duduk di kursi dekat jendela. Meminta izin kepada pelayan:\n* Opsi 1: 「窓側の席に座ってもいいですか。」 (Bolehkah duduk di kursi dekat jendela?) - Meminta izin (Benar).\n* Opsi 2: 「窓側の席はいかがですか。」 (Bagaimana kalau kursi dekat jendela?) - Pelayan menawarkan ke tamu.\n* Opsi 3: 「窓側の席をご案内します。」 (Saya akan antar ke kursi dekat jendela) - Pelayan mengantar tamu.",
    audioUrl: "/audio/super_moshi_n4_track_20.mp3",
    mondai: 3,
    number: 17
  },
  {
    id: "n4_listening_a_m3_q03",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "18番：先生の部屋に入ります。何と言いますか。",
    options: [
      "1. いってらっしゃい。",
      "2. お邪魔しました。",
      "3. 失礼します。"
    ],
    correct: 2,
    explanation: "### Transkrip / Penjelasan\nSituasi: Masuk ke ruangan guru/atasan. Sopan santun memasuki ruangan:\n* Opsi 1: 「いってらっしゃい。」 (Selamat jalan).\n* Opsi 2: 「お邪魔しました。」 (Maaf mengganggu - diucapkan saat keluar/pulang).\n* Opsi 3: 「失礼します。」 (Permisi / Maaf mengganggu - diucapkan saat masuk, Benar).",
    audioUrl: "/audio/super_moshi_n4_track_21.mp3",
    mondai: 3,
    number: 18
  },
  {
    id: "n4_listening_a_m3_q04",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "19番：友達のペンを借りたいです。何と言いますか。",
    options: [
      "1. このペン、貸してもらえる？",
      "2. このペン、借りてもらう？",
      "3. このペン、使わせてあげようか？"
    ],
    correct: 0,
    explanation: "### Transkrip / Penjelasan\nSituasi: Ingin meminjam pena teman.\n* Opsi 1: 「このペン、貸してもらえる？」 (Pena ini, bisa kamu pinjamkan ke aku?) - Meminta meminjamkan (Benar).\n* Opsi 2: 「このペン、借りてもらう？」 - Tata bahasa salah.\n* Opsi 3: 「このペン、使わせてあげようか？」 (Mau kuperbolehkan pakai pena ini?) - Menawarkan ke orang lain.",
    audioUrl: "/audio/super_moshi_n4_track_22.mp3",
    mondai: 3,
    number: 19
  },
  {
    id: "n4_listening_a_m3_q05",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "20番：風邪を引いている友達に何と言いますか。",
    options: [
      "1. ごちそうさまでした。",
      "2. お大事に。",
      "3. お疲れ様でした。"
    ],
    correct: 1,
    explanation: "### Transkrip / Penjelasan\nSituasi: Memberi ucapan kepada teman yang sedang sakit (flu).\n* Opsi 1: 「ごちそうさまでした。」 (Terima kasih atas makanannya).\n* Opsi 2: 「お大事に。」 (Semoga cepat sembuh / Jaga diri baik-baik, Benar).\n* Opsi 3: 「お疲れ様でした。」 (Terima kasih atas kerja kerasnya).",
    audioUrl: "/audio/super_moshi_n4_track_23.mp3",
    mondai: 3,
    number: 20
  },

  // MONDAI 4: 即時応答 (8 soal, nomor 21-28, track_25 ke track_32, 3 pilihan)
  {
    id: "n4_listening_a_m4_q01",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "21番：雨が降ってきましたね。傘は持っていますか。",
    options: [
      "1. はい、持っていません。",
      "2. いいえ、持っていきません。",
      "3. いいえ、持っていないんです。"
    ],
    correct: 2,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「雨が降ってきましたね。傘は持っていますか。」 (Hujan turun ya. Apakah membawa payung?)\nRespon yang tepat:\n* Opsi 1: 「はい、持っていません。」 (Ya, tidak bawa - kontradiksi).\n* Opsi 2: 「いいえ、持っていきません。」 (Tidak, tidak akan bawa - salah bentuk).\n* Opsi 3: 「いいえ、持っていないんです。」 (Tidak, saya tidak membawanya - Benar).",
    audioUrl: "/audio/super_moshi_n4_track_25.mp3",
    mondai: 4,
    number: 21
  },
  {
    id: "n4_listening_a_m4_q02",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "22番：日本語がお上手ですね。どこで勉強したんですか。",
    options: [
      "1. いえ、まだまだです。",
      "2. 国の大学で勉強しました。",
      "3. 日本語が好きだからです。"
    ],
    correct: 1,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「日本語がお上手ですね。どこで勉強したんですか。」 (Bahasa Jepang Anda pintar ya. Belajar di mana?)\nRespon yang tepat:\n* Opsi 1: 「いえ、まだまだです。」 (Tidak, masih biasa saja - menjawab pujian, tapi tidak menjawab 'di mana').\n* Opsi 2: 「国の大学で勉強しました。」 (Saya belajar di universitas di negara saya - Menjawab lokasi, Benar).\n* Opsi 3: 「日本語が好きだからです。」 (Karena saya suka bahasa Jepang - menjawab 'kenapa').",
    audioUrl: "/audio/super_moshi_n4_track_26.mp3",
    mondai: 4,
    number: 22
  },
  {
    id: "n4_listening_a_m4_q03",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "23番：コーヒーのおかわりはいかがですか。",
    options: [
      "1. はい、いただきます。",
      "2. いいえ、美味しいです。",
      "3. ごちそうさまでした。"
    ],
    correct: 0,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「コーヒーのおかわりはいかがですか。」 (Bagaimana kalau nambah kopi lagi?)\nRespon yang tepat:\n* Opsi 1: 「はい、いただきます。」 (Ya, terima kasih / saya minta - Menerima tawaran, Benar).\n* Opsi 2: 「いいえ、美味しいです。」 (Tidak, ini lezat - tidak nyambung).\n* Opsi 3: 「ごちそうさまでした。」 (Terima kasih atas makanannya - diucapkan selesai makan).",
    audioUrl: "/audio/super_moshi_n4_track_27.mp3",
    mondai: 4,
    number: 23
  },
  {
    id: "n4_listening_a_m4_q04",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "24番：この仕事、明日までに終わらせられますか。",
    options: [
      "1. はい、終わる予定です。",
      "2. いいえ、終わらせてください。",
      "3. はい、大丈夫です。できます。"
    ],
    correct: 2,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「この仕事、明日までに終わらせられますか。」 (Pekerjaan ini, apakah bisa diselesaikan besok?)\nRespon yang tepat:\n* Opsi 1: 「はい、終わる予定です。」 (Mencurigakan secara subjek).\n* Opsi 2: 「いいえ、終わらせてください。」 (Tidak, tolong selesaikan - salah arah subjek).\n* Opsi 3: 「はい、大丈夫です。できます。」 (Ya, tidak apa-apa. Bisa - Benar).",
    audioUrl: "/audio/super_moshi_n4_track_28.mp3",
    mondai: 4,
    number: 24
  },
  {
    id: "n4_listening_a_m4_q05",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "25番：鈴木さん、最近忙しそうですね。手伝いましょうか。",
    options: [
      "1. はい、手伝ってください。",
      "2. すみません、助かります。お願いします。",
      "3. どういたしまして。"
    ],
    correct: 1,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「鈴木さん、最近忙しそうですね。手伝いましょうか。」 (Suzuki-san, akhir-akhir ini tampak sibuk ya. Mau kubantu?)\nRespon yang tepat:\n* Opsi 1: 「はい、手伝ってください。」 (Ya, tolong bantu - terlalu langsung/kurang sopan).\n* Opsi 2: 「すみません、助かります。お願いします。」 (Maaf/Terima kasih, sangat membantu. Tolong ya - Sangat sopan dan alami, Benar).\n* Opsi 3: 「どういたしまして。」 (Sama-sama).",
    audioUrl: "/audio/super_moshi_n4_track_29.mp3",
    mondai: 4,
    number: 25
  },
  {
    id: "n4_listening_a_m4_q06",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "26番：今度の日曜日にテニスをしませんか。",
    options: [
      "1. はい、テニスは難しいです。",
      "2. 残念ですが、用事があって行けません。",
      "3. いいえ、しません。"
    ],
    correct: 1,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「今度の日曜日にテニスをしませんか。」 (Maukah bermain tenis hari Minggu depan?)\nRespon menolak ajakan yang sopan:\n* Opsi 1: Menolak tanpa sopan santun.\n* Opsi 2: 「残念ですが、用事があって行けません。」 (Sayang sekali, saya ada keperluan jadi tidak bisa pergi - Sangat alami, Benar).\n* Opsi 3: 「いいえ、しません。」 (Tidak, tidak mau - terlalu kasar).",
    audioUrl: "/audio/super_moshi_n4_track_30.mp3",
    mondai: 4,
    number: 26
  },
  {
    id: "n4_listening_a_m4_q07",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "27番：駅までどうやって行くか知っていますか。",
    options: [
      "1. はい、知っていません。",
      "2. はい、この道をまっすぐ行くと駅ですよ。",
      "3. いいえ、わかりました。"
    ],
    correct: 1,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「駅までどうやって行くか知っていますか。」 (Apakah tahu cara pergi ke stasiun?)\nRespon yang tepat:\n* Opsi 1: Tata bahasa salah (tidak tahu = しりません).\n* Opsi 2: 「はい、この道をまっすぐ行くと駅ですよ。」 (Ya, kalau menyusuri jalan ini lurus akan sampai di stasiun lho - Memberikan petunjuk, Benar).\n* Opsi 3: Kontradiksi.",
    audioUrl: "/audio/super_moshi_n4_track_31.mp3",
    mondai: 4,
    number: 27
  },
  {
    id: "n4_listening_a_m4_q08",
    level: "N4",
    section: "Listening",
    type: "audio-listening",
    question: "28番：木村さん、先に帰ってもいいですか。",
    options: [
      "1. お疲れ様でした。お先にどうぞ。",
      "2. はい、帰りました。",
      "3. お邪魔しました。"
    ],
    correct: 0,
    explanation: "### Transkrip / Penjelasan\nPertanyaan: 「木村さん、先に帰ってもいいですか。」 (Kimura-san, bolehkah saya pulang duluan?)\nRespon yang tepat:\n* Opsi 1: 「お疲れ様でした。お先にどうぞ。」 (Terima kasih atas kerjanya. Silakan duluan - Alami, Benar).\n* Opsi 2: Salah kala waktu.\n* Opsi 3: Diucapkan tamu saat meninggalkan rumah.",
    audioUrl: "/audio/super_moshi_n4_track_32.mp3",
    mondai: 4,
    number: 28
  }
];

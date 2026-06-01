// Legacy question format with numeric id — used as fallback for N3/dev/outage.
// useQuestions.ts converts these to the canonical Question type (id: string).
interface LegacyQuestion {
  id: number;
  level: string;
  section: string;
  type: string;
  question: string;
  passage?: string;
  highlight?: string;
  audioUrl?: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const questionBanks: Record<string, LegacyQuestion[]> = {

  N5: [
    {
      id: 1,
      level: 'N5',
      section: 'Vocabulary',
      type: 'kanji-read',
      question: 'この ちかくに 山があります。',
      highlight: '山',
      options: ['かわ', 'やま', 'いけ', 'うみ'],
      correct: 1,
      explanation: '「山」 dibaca 「やま」 (yama) yang berarti "gunung".'
    },
    {
      id: 2,
      level: 'N5',
      section: 'Vocabulary',
      type: 'kanji-read',
      question: 'ともだちといっしょに学校にいきます。',
      highlight: '学校',
      options: ['がこう', 'がこお', 'がっこう', 'がっこお'],
      correct: 2,
      explanation: '「学校」 dibaca 「がっこう」 (gakkou) dengan sokuon (っ) sebelum こ.'
    },
    {
      id: 3,
      level: 'N5',
      section: 'Vocabulary',
      type: 'context',
      question: 'さとうさんは ギターを じょうずに(＿＿＿)。',
      options: ['うたいます', 'ききます', 'ひきます', 'あそびます'],
      correct: 2,
      explanation: '「ひきます」 digunakan untuk memainkan alat musik petik seperti gitar (ギターをひく).'
    },
    {
      id: 4,
      level: 'N5',
      section: 'Vocabulary',
      type: 'paraphrase',
      question: '「たべもの」 yang bermakna sama adalah:',
      options: ['のみもの', 'りょうり', 'しょくじ', 'くだもの'],
      correct: 2,
      explanation: '「たべもの」 (tabemono) berarti makanan, yang memiliki kaitan makna paling dekat dengan 「しょくじ」 (shokuji) yang berarti hidangan/makanan.'
    },
    {
      id: 5,
      level: 'N5',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'わたしは ともだち＿＿＿えいがを みました。',
      options: ['と', 'に', 'で', 'を'],
      correct: 0,
      explanation: 'Partikel 「と」 digunakan untuk menunjukkan penyerta ("bersama dengan" teman).'
    },
    {
      id: 6,
      level: 'N5',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'きょうと＿＿＿いきます。',
      options: ['で', 'に', 'へ', 'を'],
      correct: 2,
      explanation: 'Partikel 「へ」 (dibaca e) digunakan untuk menunjukkan arah tujuan perjalanan.'
    },
    {
      id: 7,
      level: 'N5',
      section: 'Grammar',
      type: 'grammar-1',
      question: 'このペンは あかく＿＿＿。',
      options: ['です', 'ありません', 'ないです', 'います'],
      correct: 2,
      explanation: 'Untuk menegasikan kata sifat-i 「あかい」, huruf 「い」 diubah menjadi 「く」 lalu ditambah 「ないです」 (あかくないです).'
    },
    {
      id: 8,
      level: 'N5',
      section: 'Grammar',
      type: 'grammar-2',
      question: 'Susunlah kalimat berikut: あした ＿＿ ＿＿ ＿★＿ ＿＿。 Tentukan kata pada posisi ★:',
      options: ['がっこう', 'へ', 'いきます', 'から'],
      correct: 1,
      explanation: 'Susunan kalimat yang benar adalah 「あした がっこう へ いきます」. Kata ketiga (posisi ★) adalah 「へ」.'
    },
    {
      id: 9,
      level: 'N5',
      section: 'Reading',
      type: 'reading-short',
      passage: 'わたしのへやはせまいです。でも、きれいです。まどがおおきいですから、ひかりがはいります。',
      question: 'へやはどんなへやですか。',
      options: ['ひろくてきれいです', 'せまいですがきれいです', 'くらくてせまいです', 'おおきくてあたたかいです'],
      correct: 1,
      explanation: 'Berdasarkan bacaan, kamar tersebut sempit (せまいです) tetapi bersih/indah (きれいです).'
    },
    {
      id: 10,
      level: 'N5',
      section: 'Reading',
      type: 'reading-short',
      passage: 'きのうはあめでした。さかなやさんにいきました。さかなをかいました。',
      question: 'きのうなにをかいましたか。',
      options: ['にく', 'やさい', 'さかな', 'くだもの'],
      correct: 2,
      explanation: 'Kalimat terakhir menyebutkan 「さかなをかいました」 yang berarti "membeli ikan".'
    },
    {
      id: 11,
      level: 'N5',
      section: 'Listening',
      type: 'audio-listening',
      question: 'Dengarkan percakapan berikut dan pilih jawaban yang paling sesuai berdasarkan pertanyaan di audio.',
      audioUrl: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5/BPT_N5_1_01.mp3',
      options: ['じしょを かします', 'ほんを かします', 'ノートを かします', 'えんぴつを かします'],
      correct: 2,
      explanation: 'Dalam audio dummy ini, jawaban yang benar adalah opsi C karena pembicara meminjamkan catatan (ノート).'
    }
  ],
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

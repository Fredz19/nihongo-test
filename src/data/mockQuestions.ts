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
  options: (string | { text: string; img: string })[];
  correct: number;
  explanation: string;
  isImageOption?: boolean;
  mondai?: number;
  number?: number;
}

export const questionBanks: Record<string, LegacyQuestion[]> = {

  N5: [
    // ─── MONDAI 1 (Image-based Options Grid) ───
    {
      id: "m01_q01", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "1番：男の留学生はどのカップを出しますか。",
      options: [
        { text: "1. 大きくて、鳥の絵のカップ", img: "/images/m01_q01_1.png" },
        { text: "2. 小さくて、鳥の絵のカップ", img: "/images/m01_q01_2.png" },
        { text: "3. 大きくて、車の絵のカップ", img: "/images/m01_q01_3.png" },
        { text: "4. 小さくて、車の絵のカップ", img: "/images/m01_q01_4.png" }
      ],
      correct: 0,
      explanation: "女：キムさん、カップを１つ出してください。男：はい。どのカップですか。女：大きいのです。男：鳥の絵のですか。車の絵のですか。女：あ、鳥の絵のです。",
      audioUrl: "/audio/m01_q01.mp3", mondai: 1, number: 1
    },
    {
      id: "m01_q02", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "2番：女の人はイチゴをどう置きますか。",
      options: [
        { text: "1. 三角いケーキの上に３個", img: "/images/m01_q02_1.png" },
        { text: "2. 四角いケーキの上に２個", img: "/images/m01_q02_2.png" },
        { text: "3. 三角いケーキの上に２個", img: "/images/m01_q02_3.png" },
        { text: "4. 丸いケーキの上に２個", img: "/images/m01_q02_4.png" }
      ],
      correct: 3,
      explanation: "男：ケーキの上にイチゴを２個置いてください。丸いケーキです。女：イチゴは２つですね。男：はい、そうです。",
      audioUrl: "/audio/m01_q02.mp3", mondai: 1, number: 2
    },
    {
      id: "m01_q03", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "3番：女の人は何をしますか。",
      options: [
        { text: "1. エアコンと電気をつける", img: "/images/m01_q03_1.png" },
        { text: "2. お茶を準備する", img: "/images/m01_q03_2.png" },
        { text: "3. エアコンだけつける", img: "/images/m01_q03_3.png" },
        { text: "4. 電気だけつける", img: "/images/m01_q03_4.png" }
      ],
      correct: 0,
      explanation: "男：３時に田中電機の林さんが来ますねえ。隣 of 部屋のエアコンをつけてください。それから電気もお願いします。女：はい。エアコンと電気ですね。あのお茶はどうしますか。男：すぐ終わるからいりません。",
      audioUrl: "/audio/m01_q03.mp3", mondai: 1, number: 3
    },
    {
      id: "m01_q04", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "4番：あした何時に駅のどこで会いますか。",
      options: [
        { text: "1. 9時半に東口", img: "/images/m01_q04_1.png" },
        { text: "2. 9時に西口", img: "/images/m01_q04_2.png" },
        { text: "3. 9時に東口", img: "/images/m01_q04_3.png" },
        { text: "4. 9時半に西口", img: "/images/m01_q04_4.png" }
      ],
      correct: 3,
      explanation: "女：もしもし、佐藤です。明日９時半に駅の東口で会いましょうと言いましたが、すみません。西口に来てください。駅からバスに乗りますが、バス停は東口じゃなくて西口の方でした。今、駅 of 地図を見ました。すみません。じゃあ、明日９時半に会いましょう。",
      audioUrl: "/audio/m01_q04.mp3", mondai: 1, number: 4
    },
    {
      id: "m01_q05", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "5番：男の留学生は何をしますか。",
      options: [
        { text: "1. 野菜を洗う", img: "/images/m01_q05_1.png" },
        { text: "2. 卵を料理する", img: "/images/m01_q05_2.png" },
        { text: "3. 野菜を切る", img: "/images/m01_q05_3.png" },
        { text: "4. サンドイッチを作る", img: "/images/m01_q05_4.png" }
      ],
      correct: 2,
      explanation: "女：お昼ですね。一緒に卵と野菜のサンドイッチを作りましょう。男：はい。卵のサンドイッチ大好きです。女：今、冷蔵庫から野菜を出しますから、野菜を切ってください。卵は私がやりますね。男：切る前に洗いますか。女：いえ、洗ってから冷蔵庫に入れたから大丈夫です。",
      audioUrl: "/audio/m01_q05.mp3", mondai: 1, number: 5
    },
    {
      id: "m01_q06", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "6番：男の人はどこに行きますか。",
      options: [
        { text: "1. 本屋", img: "/images/m01_q06_1.png" },
        { text: "2. 郵便局", img: "/images/m01_q06_2.png" },
        { text: "3. レストラン", img: "/images/m01_q06_3.png" },
        { text: "4. 銀行", img: "/images/m01_q06_4.png" }
      ],
      correct: 1,
      explanation: "男：すみません、郵便局に行きたいですが、どこですか。女：あ、郵便局ですね。あそこに本屋がありますね。男：はい。女：本屋の左にレストランがあります。レストランの隣が郵便局です。レストランと銀行の間です。男：わかりました。ありがとうございます。",
      audioUrl: "/audio/m01_q06.mp3", mondai: 1, number: 6
    },
    {
      id: "m01_q07", level: "N5", section: "Listening", type: "audio-listening", isImageOption: true,
      question: "7番：女の学生は山に何を持っていきますか。",
      options: [
        { text: "1. 上着と飲み物", img: "/images/m01_q07_1.png" },
        { text: "2. 上着と昼ご飯", img: "/images/m01_q07_2.png" },
        { text: "3. 飲み物と昼ご飯", img: "/images/m01_q07_3.png" },
        { text: "4. 上着だけ", img: "/images/m01_q07_4.png" }
      ],
      correct: 0,
      explanation: "男：あさって朝から友達と南山へ行きます。一緒に行きませんか。女：行きたいです。男：今は夏ですが、山は朝と夕方は寒いから上着を忘れないでくださいね。女：はい。飲み物や昼ご飯は山で売っていますか。男：飲み物は朝、店が開く前に山に入りますから、自分で持って行ってください。昼は山の上に美味しいおにぎりの店があるから買いましょう。",
      audioUrl: "/audio/m01_q07.mp3", mondai: 1, number: 7
    },

    // ─── MONDAI 2 (Text-based Options) ───
    {
      id: "m02_q01", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "1番：女の人は手袋を誰にもらいましたか。",
      options: ["1. お父さん", "2. お母さん", "3. 弟", "4. お店"],
      correct: 2,
      explanation: "男：あ、佐藤さん、きれいな色の手袋をしていますね。どこで買いましたか。女：あ、これですか。弟が作った手袋です。去年の誕生日に弟にもらいました。男：いいですね。女：父と母も弟が作った手袋を持っていますよ。",
      audioUrl: "/audio/m02_q01.mp3", mondai: 2, number: 1
    },
    {
      id: "m02_q02", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "2番：２人は今晩何を食べに行きますか。",
      options: ["1. ピザ", "2. スパゲティ", "3. ラーメン", "4. カレー"],
      correct: 3,
      explanation: "男：きょう晩御飯を食べに行きませんか。女：はい。男：駅の前の新しいレストランはもう行きましたか。ピザが有名ですが、スパゲティも美味しいですよ。女：ああ、ラーメン屋の隣の店ですね。私、今日のお昼に行きました。ピザがとても美味しかったです。男：じゃあ他の店がいいですね。辛いものは好きですか。近くに美味しいカレーの店がありますよ。女：辛いもの大好きです。行きましょう。",
      audioUrl: "/audio/m02_q02.mp3", mondai: 2, number: 2
    },
    {
      id: "m02_q03", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "3番：どの人が男の学生の妹ですか。",
      options: ["1. 髪が短くて眼鏡なし", "2. 髪が長くて眼鏡あり", "3. 髪が短くて眼鏡あり", "4. 髪が長くて眼鏡なし"],
      correct: 0,
      explanation: "男：あそこに、僕の妹がいます。妹も今年この大学に入りました。女：そうですか。４人いますが、妹さんはどの学生ですか。男：髪が短いです。女：ああ、眼鏡をかけていますね。男：いえ、かけていません。",
      audioUrl: "/audio/m02_q03.mp3", mondai: 2, number: 3
    },
    {
      id: "m02_q04", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "4番：男の学生はいつ日本に来ましたか。",
      options: ["1. 今日", "2. 一昨日（おととい）", "3. 昨日", "4. １か月前"],
      correct: 1,
      explanation: "男：はじめまして、ジョンです。昨日この学校に入りました。国で日本語を１か月勉強して、一私初めて日本に来ました。このクラスで１年勉強します。皆さんどうぞよろしくお願いします。",
      audioUrl: "/audio/m02_q04.mp3", mondai: 2, number: 4
    },
    {
      id: "m02_q05", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "5番：２人は土曜日に一緒に何をしますか。",
      options: ["1. 勉強する", "2. バスケットボールをする", "3. 映画を見に行く", "4. 海を見に行く"],
      correct: 3,
      explanation: "男：土曜日か日曜日、暇？女：日曜は友達と一緒に家で勉強する。土曜はバスケットボールの練習に行って、昼頃家に帰るよ。午後は何もない。男：じゃあ一緒に映画を見に行く？女：うーん、私は海を見に行きたい。男：あ、いいね、僕も行きたい。女：じゃあ土曜日、うちに帰ってから電話するね。",
      audioUrl: "/audio/m02_q05.mp3", mondai: 2, number: 5
    },
    {
      id: "m02_q06", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "6番：次のテストは来週の何曜日ですか。",
      options: ["1. 月曜日", "2. 火曜日", "3. 水曜日", "4. 木曜日"],
      correct: 1,
      explanation: "男：次のテストは来週の水曜日の作文のテストですね。女：いいえ、来週の火曜日に言葉のテストがありますよ。それから水曜の作文のテスト、木曜の漢字のテストです。男：来週はテストが多いですね。月曜日一緒にテストの勉強をしませんか。",
      audioUrl: "/audio/m02_q06.mp3", mondai: 2, number: 6
    },

    // ─── MONDAI 3 ───
    {
      id: "m03_q01", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "1番：会社の人が外で仕事をして会社に帰りました。何と言いますか。",
      options: ["1. ただいま。", "2. おかえりなさい。", "3. 行ってらっしゃい。"],
      correct: 1,
      explanation: "正解は「おかえりなさい」です。外から帰ってきた人を迎える言葉です。",
      audioUrl: "/audio/m03_q01.mp3", mondai: 3, number: 1
    },
    {
      id: "m03_q02", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "2番：先生の部屋に入ります。何と言いますか。",
      options: ["1. 気をつけます。", "2. 入りますか。", "3. 失礼します。"],
      correct: 2,
      explanation: "正解は「失礼します」です。目上の人の部屋に入るときの正しい挨拶です。",
      audioUrl: "/audio/m03_q02.mp3", mondai: 3, number: 2
    },
    {
      id: "m03_q03", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "3番：友達が教室の窓を開けました。風が強いです。友達に何と言いますか。",
      options: ["1. あ、窓を開けないでください。", "2. あ、窓を開けましょうか。", "3. あ、窓を閉めないでください。"],
      correct: 0,
      explanation: "正解は「あ、窓を開けないでください」です。風が強いので開けるのをやめてほしい時に使います。",
      audioUrl: "/audio/m03_q03.mp3", mondai: 3, number: 3
    },
    {
      id: "m03_q04", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "4番：映画館の中です。座りたいです。なんと言いますか。",
      options: ["1. ここいいですか。", "2. ここどうぞ。", "3. ここいますよ。"],
      correct: 0,
      explanation: "正解は「ここいいですか」です。席が空いているか確認する自然な表現です。",
      audioUrl: "/audio/m03_q04.mp3", mondai: 3, number: 4
    },
    {
      id: "m03_q05", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "5番：友達の写真を撮りたいです。取る前に何と言いますか。",
      options: ["1. 写真を撮ってください。", "2. はい取ります。", "3. 写真を見ましょう。"],
      correct: 1,
      explanation: "正解は「はい取ります」です。撮影の直前に相手に合図を送る言葉です。",
      audioUrl: "/audio/m03_q05.mp3", mondai: 3, number: 5
    },

    // ─── MONDAI 4 ───
    {
      id: "m04_q01", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "1番：学校まで何で来ますか。",
      options: ["1. 一人で来ます。", "2. 九時に来ます。", "3. 自転車で来ます。"],
      correct: 2,
      explanation: "手段（交通手段）を聞いているので「自転車で来ます」が正解です。",
      audioUrl: "/audio/m04_q01.mp3", mondai: 4, number: 1
    },
    {
      id: "m04_q02", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "2番：リンダさん作文の宿題はもう終わった？",
      options: ["1. それがいいね。", "2. ううん、まだ。", "3. 宿題はあるよ。"],
      correct: 1,
      explanation: "「もう終わった？」という質問に対して「ううん、まだ」と答えます。",
      audioUrl: "/audio/m04_q02.mp3", mondai: 4, number: 2
    },
    {
      id: "m04_q03", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "3番：木村さんは暇な時何をしている？",
      options: ["1. 本や雑誌を読んでいるよ。", "2. うん、今日は暇だよ。", "3. 土曜日と日曜日だよ。"],
      correct: 0,
      explanation: "暇な時に何をしているかを聞いているため「本や雑誌を読んでいるよ」が正解です。",
      audioUrl: "/audio/m04_q03.mp3", mondai: 4, number: 3
    },
    {
      id: "m04_q04", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "4番：日本でどこか旅行した？",
      options: ["1. 先週京都へ行ったよ。", "2. いいね。どこに行く？", "3. 日本に行きたかった。"],
      correct: 0,
      explanation: "過去の経験を聞かれているので、過去形を用いて「先週京都へ行ったよ」と答えます。",
      audioUrl: "/audio/m04_q04.mp3", mondai: 4, number: 4
    },
    {
      id: "m04_q05", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "5番：今まで何年ぐらい日本語を勉強しましたか。",
      options: ["1. 日本が好きだからです。", "2. 学校で４年間習いました。", "3. よく練習しています。"],
      correct: 1,
      explanation: "期間を聞かれているため「４年間習いました」が正解です。",
      audioUrl: "/audio/m04_q05.mp3", mondai: 4, number: 5
    },
    {
      id: "m04_q06", level: "N5", section: "Listening", type: "audio-listening", isImageOption: false,
      question: "6番：昼ごはんはいつもどうしていますか。",
      options: ["1. きょうは寿司がいいですね。", "2. 食堂はあそこですよ。", "3. 自分で作して持ってきています。"],
      correct: 2,
      explanation: "普段の習慣について聞かれているため「自分で作って持ってきています」と答えます。",
      audioUrl: "/audio/m04_q06.mp3", mondai: 4, number: 6
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

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

export const bunpouDokkaiN5A: LegacyQuestion[] = [
  // MONDAI 1
  {
    id: "n5_bunpou_a_m1_q01",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "わたしは　まいあさ　コーヒー（　　）　のみます。",
    options: ["が", "に", "を", "へ"],
    correct: 2,
    explanation: "Kata kerja 「のみます」 (minum) membutuhkan partikel penunjuk objek 「を」. Kalimat berarti: Saya minum kopi setiap pagi.",
    mondai: 1,
    number: 1
  },
  {
    id: "n5_bunpou_a_m1_q02",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "あした　ともだち（　　）　えいがを　みます。",
    options: ["と", "で", "を", "に"],
    correct: 0,
    explanation: "Partikel 「と」 digunakan untuk menunjukkan hubungan kebersamaan (bersama teman). Kalimat berarti: Besok saya akan menonton film bersama teman.",
    mondai: 1,
    number: 2
  },
  {
    id: "n5_bunpou_a_m1_q03",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "きのう　デパート（　　）　くつを　かいました。",
    options: ["に", "で", "へ", "が"],
    correct: 1,
    explanation: "Partikel 「で」 digunakan untuk menandai tempat terjadinya suatu aktivitas/tindakan (membeli sepatu di department store).",
    mondai: 1,
    number: 3
  },
  {
    id: "n5_bunpou_a_m1_q04",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "つくえの　うえ（　　）　ほんが　あります。",
    options: ["で", "に", "を", "が"],
    correct: 1,
    explanation: "Partikel 「に」 digunakan untuk menandai keberadaan benda mati dengan kata kerja 「あります」 (ada buku di atas meja).",
    mondai: 1,
    number: 4
  },
  {
    id: "n5_bunpou_a_m1_q05",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "「あついですね。」<br/>「ええ、つめたい　おみず（　　）　のみたいですね。」",
    options: ["が", "を", "に", "で"],
    correct: 0,
    explanation: "Untuk mengekspresikan keinginan 「～たい」, objek yang diinginkan sering kali ditandai dengan partikel 「が」 (ingin minum air dingin).",
    mondai: 1,
    number: 5
  },
  {
    id: "n5_bunpou_a_m1_q06",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "この　へやは　ひろくて　（　　）です。",
    options: ["あかるい", "あかるくて", "あかるく", "あかるかった"],
    correct: 0,
    explanation: "Menghubungkan dua kata sifat: kata sifat-i pertama menggunakan bentuk て (ひろくて), lalu diikuti bentuk biasa kata sifat-i kedua sebelum 「です」 (あかるいです).",
    mondai: 1,
    number: 6
  },
  {
    id: "n5_bunpou_a_m1_q07",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "ゆうべは　10じ（　　）　ねました。",
    options: ["ごろ", "など", "しか", "まで"],
    correct: 0,
    explanation: "Partikel 「ごろ」 digunakan untuk menunjukkan waktu perkiraan (kira-kira jam 10 malam).",
    mondai: 1,
    number: 7
  },
  {
    id: "n5_bunpou_a_m1_q08",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "せんせいは　いま　きょうしつに　（　　）。",
    options: ["います", "あります", "します", "きます"],
    correct: 0,
    explanation: "Kata kerja 「います」 digunakan untuk menunjukkan keberadaan makhluk hidup (guru berada di dalam kelas).",
    mondai: 1,
    number: 8
  },
  {
    id: "n5_bunpou_a_m1_q09",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "「いっしょに　かえりませんか。」<br/>「すみません、きょうは　すこし　（　　）かえります。」",
    options: ["はやく", "はやくて", "はやい", "はやった"],
    correct: 0,
    explanation: "Kata sifat-i 「はやい」 diubah menjadi kata keterangan (adverb) dengan mengganti -i menjadi -ku (はやく) untuk menerangkan kata kerja 「かえります」.",
    mondai: 1,
    number: 9
  },
  {
    id: "n5_bunpou_a_m1_q10",
    level: "N5",
    section: "Grammar",
    type: "grammar-1",
    question: "あしたは　てんき（　　）　いいでしょう。",
    options: ["が", "を", "に", "は"],
    correct: 0,
    explanation: "Partikel 「が」 menandai subjek dari kata sifat 「いい」 (cuaca bagus). 「てんきがいい」 berarti cuaca yang baik.",
    mondai: 1,
    number: 10
  },

  // MONDAI 2
  {
    id: "n5_bunpou_a_m2_q01",
    level: "N5",
    section: "Grammar",
    type: "grammar-2",
    question: "つくえの　<ruby>上<rt>うえ</rt></ruby>に　＿＿　＿＿　＿★＿　＿＿　あります。<br/>★に選択肢から最もよいものを選んでください。",
    options: ["<ruby>黒<rt>くろ</rt></ruby>い", "ペン", "が", "2<ruby>本<rt>ほん</rt></ruby>"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「つくえの上に 黒い(1) ペン(2) が(3) 2本(4) あります。」 Posisi bintang (ke-3) diisi oleh 「が」 (Opsi 2).",
    mondai: 2,
    number: 11
  },
  {
    id: "n5_bunpou_a_m2_q02",
    level: "N5",
    section: "Grammar",
    type: "grammar-2",
    question: "「きのうは　どこへ　行きましたか。」<br/>「デパートへ　＿＿　＿＿　＿★＿　＿＿　行きました。」<br/>★に選択肢から最もよいものを選んでください。",
    options: ["ともだち", "と", "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>", "に"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「デパートへ ともだち(1) と(2) 買い物(3) に(4) 行きました。」 Posisi bintang (ke-3) diisi oleh 「買い物」 (Opsi 2).",
    mondai: 2,
    number: 12
  },
  {
    id: "n5_bunpou_a_m2_q03",
    level: "N5",
    section: "Grammar",
    type: "grammar-2",
    question: "わたしは　＿＿　＿＿　＿★＿　＿＿　です。<br/>★に選択肢から最もよいものを選んでください。",
    options: ["<ruby>日本語<rt>にほんご</rt></ruby>の", "<ruby>勉強<rt>べんきょう</rt></ruby>", "が", "<ruby>好<rt>す</rt></ruby>き"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「わたしは 日本語の(1) 勉強(2) が(3) 好き(4) です。」 Posisi bintang (ke-3) diisi oleh 「が」 (Opsi 2).",
    mondai: 2,
    number: 13
  },
  {
    id: "n5_bunpou_a_m2_q04",
    level: "N5",
    section: "Grammar",
    type: "grammar-2",
    question: "あれは　＿＿　＿＿　＿★＿　＿＿　辞書ですね。<br/>★に選択肢から最もよいものを選んでください。",
    options: ["<ruby>木<rt>き</rt></ruby>の<ruby>下<rt>した</rt></ruby>", "で", "<ruby>本<rt>ほん</rt></ruby>を", "<ruby>読<rt>よ</rt></ruby>んでいる人の"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「あれは 木の下(1) で(2) 本を(3) 読んでいる人の(4) 辞書ですね。」 Posisi bintang (ke-3) diisi oleh 「本を」 (Opsi 2).",
    mondai: 2,
    number: 14
  },
  {
    id: "n5_bunpou_a_m2_q05",
    level: "N5",
    section: "Grammar",
    type: "grammar-2",
    question: "「きのうは　寒かったですね。」<br/>「ええ、風も　＿＿　＿＿　＿★＿　＿＿　おもいます。」<br/>★に選択肢から最もよいものを選んでください。",
    options: ["<ruby>強<rt>つよ</rt></ruby>く", "<ruby>吹<rt>ふ</rt></ruby>いて", "いた", "と"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「ええ、風も 強く(1) 吹いて(2) いた(3) と(4) おもいます。」 Posisi bintang (ke-3) diisi oleh 「いた」 (Opsi 2).",
    mondai: 2,
    number: 15
  },

  // MONDAI 3 (Shared Passage)
  {
    id: "n5_bunpou_a_m3_q01",
    level: "N5",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「<ruby>日記<rt>にっき</rt></ruby>」</strong><br/>わたしは　きのう　ともだちの　キムさんと　デパートへ　行きました。デパートには　いろいろな　店が　ありました。わたしは　シャツを　１まい　買いました。キムさんは　くつを　買いたがって　いましたが、いいものが　<u>（ 16 ）</u>でした。<br/>それから、わたしたちは　レストランで　しょくじを　しました。キムさんは　カレーライスを　食べました。わたしは　スパゲッティを　食べました。とても　<u>（ 17 ）</u>です。<br/>しょくじの　あとで、デパートの　<u>（ 18 ）</u>にある　こうえんを　さんぽしました。こうえんには　きれいな　はなが　たくさん　さいて　いました。<br/>キムさんは　カメラで　しゃしんを　<u>（ 19 ）</u>とりました。<br/>夕方、わたしたちは　駅で　「また　<u>（ 20 ）</u>遊びましょう」と言って　わかれました。とても　たのしい　一日でした。",
    question: "<u>（ 16 ）</u>に入る最もよいものを選んでください。",
    options: ["ありません", "ありませんでした", "なかった", "なくない"],
    correct: 1,
    explanation: "Karena kalimat menceritakan pengalaman lampau (kemarin), maka bentuk lampau negatif 「ありませんでした」 yang tepat.",
    mondai: 3,
    number: 16
  },
  {
    id: "n5_bunpou_a_m3_q02",
    level: "N5",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「<ruby>日記<rt>にっき</rt></ruby>」</strong><br/>わたしは　きのう　ともだちの　キムさんと　デパートへ　行きました。デパートには　いろいろな　店が　ありました。わたしは　シャツを　１まい　買いました。キムさんは　くつを　買いたがって　いましたが、いいものが　<u>（ 16 ）</u>でした。<br/>それから、わたしたちは　レストランで　しょくじを　しました。キムさんは　カレーライスを　食べました。わたしは　スパゲッティを　食べました。とても　<u>（ 17 ）</u>です。<br/>しょくじの　あとで、デパートの　<u>（ 18 ）</u>にある　こうえんを　さんぽしました。こうえんには　きれいな　はなが　たくさん　さいて　いました。<br/>キムさんは　カメラで　しゃしんを　<u>（ 19 ）</u>とりました。<br/>夕方、わたしたちは　駅で　「また　<u>（ 20 ）</u>遊びましょう」と言って　わかれました。とても　たのしい　一日でした。",
    question: "<u>（ 17 ）</u>に入る最もよいものを選んでください。",
    options: ["おいしい", "おいしく", "おいしかった", "おいしそう"],
    correct: 2,
    explanation: "Untuk menyambungkan dengan akhiran 「です」 menjadi 「おいしかったです」 (sangat lezat saat itu).",
    mondai: 3,
    number: 17
  },
  {
    id: "n5_bunpou_a_m3_q03",
    level: "N5",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「<ruby>日記<rt>にっき</rt></ruby>」</strong><br/>わたしは　きのう　ともだちの　キムさんと　デパートへ　行きました。デパートには　いろいろな　店が　ありました。わたしは　シャツを　１まい　買いました。キムさんは　くつを　買いたがって　いましたが、いいものが　<u>（ 16 ）</u>でした。<br/>それから、わたしたちは　レストランで　しょくじを　しました。キムさんは　カレーライスを　食べました。わたしは　スパゲッティを　食べました。とても　<u>（ 17 ）</u>です。<br/>しょくじの　あとで、デパートの　<u>（ 18 ）</u>にある　こうえんを　さんぽしました。こうえんには　きれいな　はなが　たくさん　さいて　いました。<br/>キムさんは　カメラで　しゃしんを　<u>（ 19 ）</u>とりました。<br/>夕方、わたしたちは　駅で　「また　<u>（ 20 ）</u>遊びましょう」と言って　わかれました。とても　たのしい　一日でした。",
    question: "<u>（ 18 ）</u>に入る最もよいものを選んでください。",
    options: ["となり", "なか", "した", "うしろ"],
    correct: 0,
    explanation: "Kata penunjuk lokasi 「となり」 (sebelah/tetangga) menunjukkan taman berada tepat di samping department store tersebut.",
    mondai: 3,
    number: 18
  },
  {
    id: "n5_bunpou_a_m3_q04",
    level: "N5",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「<ruby>日記<rt>にっき</rt></ruby>」</strong><br/>わたしは　きのう　ともだちの　キムさんと　デパートへ　行きました。デパートには　いろいろな　店が　ありました。わたしは　シャツを　１まい　買いました。キムさんは　くつを　買いたがって　いましたが、いいものが　<u>（ 16 ）</u>でした。<br/>それから、わたしたちは　レストランで　しょくじを　しました。キムさんは　カレーライスを　食べました。わたしは　スパゲッティを　食べました。とても　<u>（ 17 ）</u>です。<br/>しょくじの　あとで、デパートの　<u>（ 18 ）</u>にある　こうえんを　さんぽしました。こうえんには　きれいな　はなが　たくさん　さいて　いました。<br/>キムさんは　カメラで　しゃしんを　<u>（ 19 ）</u>とりました。<br/>夕方、わたしたちは　駅で　「また　<u>（ 20 ）</u>遊びましょう」と言って　わかれました。とても　たのしい　一日でした。",
    question: "<u>（ 19 ）</u>に入る最もよいものを選んでください。",
    options: ["たくさん", "すこし", "ぜんぜん", "あまり"],
    correct: 0,
    explanation: "Mengambil foto dalam jumlah banyak ditandai oleh kata 「たくさん」. Kata lainnya bermakna sedikit atau negatif.",
    mondai: 3,
    number: 19
  },
  {
    id: "n5_bunpou_a_m3_q05",
    level: "N5",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「<ruby>日記<rt>にっき</rt></ruby>」</strong><br/>わたしは　きのう　ともだちの　キムさんと　デパートへ　行きました。デパートには　いろいろな　店が　ありました。わたしは　シャツを　１まい　買いました。キムさんは　くつを　買いたがって　いましたが、いいものが　<u>（ 16 ）</u>でした。<br/>それから、わたしたちは　レストランで　しょくじを　しました。キムさんは　カレーライスを　食べました. わたしは　スパゲッティを　食べました。とても　<u>（ 17 ）</u>です。<br/>しょくじの　あとで、デパートの　<u>（ 18 ）</u>にある　こうえんを　さんぽしました。こうえんには　きれいな　はなが　たくさん　さいて　いました。<br/>キムさんは　カメラで　しゃしんを　<u>（ 19 ）</u>とりました。<br/>夕方、わたしたちは　駅で　「また　<u>（ 20 ）</u>遊びましょう」と言って　わかれました。とても　たのしい　一日でした。",
    question: "<u>（ 20 ）</u>に入る最もよいものを選んでください。",
    options: ["らいしゅう", "あした", "いっしょに", "ひとりで"],
    correct: 2,
    explanation: "Ajakan 「（いっしょに）遊びましょう」 memiliki makna bersenang-senang / bermain bersama.",
    mondai: 3,
    number: 20
  },

  // MONDAI 4 (Reading Short)
  {
    id: "n5_bunpou_a_m4_q01",
    level: "N5",
    section: "Reading",
    type: "reading-short",
    passage: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>日曜日<rt>にちようび</rt></ruby>です。わたしはどこへも行きません。うちでゆっくり<ruby>本<rt>ほん</rt></ruby>を読んだり、テレビを見たりします。<ruby>夜<rt>よる</rt></ruby>はともだちがうちに来て、いっしょに<ruby>晩<rt>ばん</rt></ruby>ご飯を食べます。",
    question: "この人は今日、昼に何をしますか。",
    options: [
      "ともだちのうちへ行きます。",
      "ともだちと晩ご飯を食べます。",
      "うちで本やテレビを楽しみます。",
      "デパートへ買い物に行きます。"
    ],
    correct: 2,
    explanation: "Teks menerangkan bahwa pada siang hari dia di rumah membaca buku dan menonton TV (うちでゆっくり本を読んだり、テレビを見たりします). Temannya baru akan datang berkunjung pada malam hari (夜).",
    mondai: 4,
    number: 21
  },
  {
    id: "n5_bunpou_a_m4_q02",
    level: "N5",
    section: "Reading",
    type: "reading-short",
    passage: "<ruby>木村<rt>きむら</rt></ruby>さん、あしたの<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>９<ruby>時<rt>じ</rt></ruby>からではなく、１０<ruby>時半<rt>じはん</rt></ruby>からになりました。<ruby>教室<rt>きょうしつ</rt></ruby>は３０２<ruby>号室<rt>ごうしつ</rt></ruby>です。<ruby>遅<rt>おく</rt></ruby>れないように来てください。よろしくお願いします。――<ruby>山田<rt>やまだ</rt></ruby>より",
    question: "木村さんはあした、何時にどこへ行かなければなりませんか。",
    options: [
      "９時に３０２号室に行きます。",
      "１０時半に３０２号室に行きます。",
      "９時に山田さんの部屋に行きます。",
      "１０時半に山田さんの部屋に行きます。"
    ],
    correct: 1,
    explanation: "Informasi dalam pesan menyatakan kelas diganti menjadi jam 10:30 (１０時半からになりました) di ruang 302 (３０２号室).",
    mondai: 4,
    number: 22
  },
  {
    id: "n5_bunpou_a_m4_q03",
    level: "N5",
    section: "Reading",
    type: "reading-short",
    passage: "わたしは<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きです。<ruby>漢字<rt>かんじ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>しています。ひらがなとカタカナはもう<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>書<rt>か</rt></ruby>くことができます。<ruby>来月<rt>らいげつ</rt></ruby>、日本語のテストがありますから、今<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby>勉強しています。",
    question: "この人について正しいものはどれですか。",
    options: [
      "漢字を書くことができません。",
      "来月日本語のテストがあります。",
      "ひらがながまだよくわかりません。",
      "毎日学校でテストがあります。"
    ],
    correct: 1,
    explanation: "Kalimat terakhir menyatakan 「来月、日本語のテストがあります」 (Bulan depan ada tes bahasa Jepang).",
    mondai: 4,
    number: 23
  },

  // MONDAI 5 (Reading Mid)
  {
    id: "n5_bunpou_a_m5_q01",
    level: "N5",
    section: "Reading",
    type: "reading-mid",
    passage: "<ruby>私<rt>わたし</rt></ruby>の<ruby>国<rt>くに</rt></ruby>はベトナムです。ベトナムの<ruby>果物<rt>くだもの</rt></ruby>はとてもおいしくて安いです。私は日本に来てから、果物をあまり食べなくなりました。日本の果物はとてもきれいで美味しいですが、少し高いからです。でも、昨日は私の<ruby>誕生日<rt>たんじょうび</rt></ruby>でしたから、スーパーでリンゴとイチゴを買いました。日本のリンゴは大きくて甘くて、とても美味しかったです。ベトナムの家族にも日本の美味しいリンゴを食べさせたいですが、果物を国に送ることはできません。ですから、来年家族が日本に来るときに、一緒にたくさん食べようと思っています。",
    question: "この人はどうして日本で果物をあまり食べませんか。",
    options: [
      "日本の果物が美味しくないからです。",
      "日本の果物が少し高いからです。",
      "ベトナムの果物の方が好きだからです。",
      "果物を国に送りたいからです。"
    ],
    correct: 1,
    explanation: "Teks menyatakan: 「日本の果物はとてもきれいで美味しいですが、少し高いからです」 (Karena buah-buahan di Jepang sedikit mahal).",
    mondai: 5,
    number: 24
  },
  {
    id: "n5_bunpou_a_m5_q02",
    level: "N5",
    section: "Reading",
    type: "reading-mid",
    passage: "<ruby>私<rt>わたし</rt></ruby>の<ruby>国<rt>くに</rt></ruby>はベトナムです。ベトナムの<ruby>果物<rt>くだもの</rt></ruby>はとてもおいしくて安いです。私は日本に来てから、果物をあまり食べなくなりました。日本の果物はとてもきれいで美味しいですが、少し高いからです。でも、昨日は私の<ruby>誕生日<rt>たんじょうび</rt></ruby>でしたから、スーパーでリンゴとイチゴを買いました。日本のリンゴは大きくて甘くて、とても美味しかったです。ベトナムの家族にも日本の美味しいリンゴを食べさせたいですが、果物を国に送ることはできません。ですから、来年家族が日本に来るときに、一緒にたくさん食べようと思っています。",
    question: "この人は来年、家族と何をしたいですか。",
    options: [
      "ベトナムへ帰って果物を食べたいです。",
      "日本で一緒にリンゴや果物を食べたいです。",
      "日本の美味しいイチゴをベトナムへ送りたいです。",
      "家族の誕生日にリンゴをプレゼントしたいです。"
    ],
    correct: 1,
    explanation: "Di bagian akhir, penulis menyatakan tidak bisa mengirim buah ke luar negeri, jadi saat keluarganya datang ke Jepang tahun depan, mereka akan memakannya bersama (来年家族が日本に来るときに、一緒にたくさん食べようと思っています).",
    mondai: 5,
    number: 25
  },

  // MONDAI 6 (Reading Info)
  {
    id: "n5_bunpou_a_m6_q01",
    level: "N5",
    section: "Reading",
    type: "reading-info",
    passage: "<div class=\"border p-4 rounded-lg bg-gray-50 text-sm\">\n  <h3 class=\"font-bold border-b pb-1 mb-2 text-center text-indigo-900\"><ruby>日本語<rt>にほんご</rt></ruby>クラスの<ruby>案内<rt>あんない</rt></ruby></h3>\n  <table class=\"w-full border-collapse border border-gray-300\">\n    <thead>\n      <tr class=\"bg-indigo-100\">\n        <th class=\"border border-gray-300 p-1\"><ruby>クラス<rt>くらす</rt></ruby></th>\n        <th class=\"border border-gray-300 p-1\"><ruby>曜日<rt>ようび</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby></th>\n        <th class=\"border border-gray-300 p-1\"><ruby>お金<rt>おかね</rt></ruby></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"border border-gray-300 p-1 font-semibold text-center\">クラスA（はじめて）</td>\n        <td class=\"border border-gray-300 p-1 text-center\"><ruby>火曜日<rt>かようび</rt></ruby><br/>10:00 - 11:30</td>\n        <td class=\"border border-gray-300 p-1 text-center\">500<ruby>円<rt>えん</rt></ruby></td>\n      </tr>\n      <tr>\n        <td class=\"border border-gray-300 p-1 font-semibold text-center\">クラスB（すこしできる）</td>\n        <td class=\"border border-gray-300 p-1 text-center\"><ruby>木曜日<rt>もくようび</rt></ruby><br/>14:00 - 15:30</td>\n        <td class=\"border border-gray-300 p-1 text-center\">500円</td>\n      </tr>\n      <tr>\n        <td class=\"border border-gray-300 p-1 font-semibold text-center\">クラスC（かいわ）</td>\n        <td class=\"border border-gray-300 p-1 text-center\"><ruby>土曜日<rt>どようび</rt></ruby><br/>13:00 - 14:30</td>\n        <td class=\"border border-gray-300 p-1 text-center\">800円</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"mt-2 text-xs text-red-600\">\n    * はじめての人は、火曜日のクラスに入ってください。<br/>\n    * お金はクラスの前に払ってください。\n  </div>\n</div>",
    question: "日本語の勉強がはじめてのワンさんは、何曜日のクラスに行きますか。また、お金はいくらですか。",
    options: [
      "火曜日のクラスで、500円です。",
      "木曜日のクラスで、500円です。",
      "土曜日のクラスで、800円です。",
      "火曜日のクラスで、無料で受けられます。"
    ],
    correct: 0,
    explanation: "Berdasarkan tabel dan petunjuk di bawahnya, orang yang baru pertama kali belajar harus masuk ke Kelas A (火曜日のクラス) yang berharga 500 yen.",
    mondai: 6,
    number: 26
  }
];

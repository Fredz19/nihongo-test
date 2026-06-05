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

export const bunpouDokkaiN4A: LegacyQuestion[] = [
  // MONDAI 1: 文の文法1 (13 soal)
  {
    id: "n4_grammar_a_m1_q01",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "私は昨日、友達に映画（　　）誘われました。",
    options: ["に", "を", "へ", "と"],
    correct: 0,
    explanation: "Kalimat pasif (受身形 - ukemikei). Polanya: Orang yang mengajak + に + kata kerja pasif. 「友達に誘われました」 berarti diundang oleh teman.",
    mondai: 1,
    number: 1
  },
  {
    id: "n4_grammar_a_m1_q02",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "この新しいカメラは安くて、使い（　　）です。",
    options: ["やすい", "にくい", "やすく", "にくく"],
    correct: 0,
    explanation: "Pola 「Masu-stem + やすい」 berarti mudah untuk dilakukan. 「使いやすい」 berarti mudah digunakan.",
    mondai: 1,
    number: 2
  },
  {
    id: "n4_grammar_a_m1_q03",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "先生、この辞書を少し（　　）もよろしいでしょうか。",
    options: ["お借りして", "お貸しして", "お借りになって", "お貸しになって"],
    correct: 0,
    explanation: "Bahasa hormat merendahkan diri (謙譲語 - kenjougo). Pola 「お/ご + Masu-stem + します/いたします」. Meminjam dari guru diungkapkan dengan 「お借りします」. Bentuk te-nya: 「お借りして」.",
    mondai: 1,
    number: 3
  },
  {
    id: "n4_grammar_a_m1_q04",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "今にも雨が降り（　　）だから、傘を持っていきましょう。",
    options: ["そう", "みたい", "らしい", "よう"],
    correct: 0,
    explanation: "Pola 「Masu-stem + そう」 untuk menyatakan perkiraan atas sesuatu yang tampaknya akan segera terjadi (kelihatannya akan turun hujan).",
    mondai: 1,
    number: 4
  },
  {
    id: "n4_grammar_a_m1_q05",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "明日早く起きられる（　　）に、今日は早く寝ます。",
    options: ["ように", "ために", "ほど", "ばかり"],
    correct: 0,
    explanation: "Pola 「Kata kerja bentuk kamus/bisa (potensial) + ように」 digunakan untuk menyatakan tujuan agar suatu keadaan dapat tercapai. 「起きられるように」 = agar bisa bangun.",
    mondai: 1,
    number: 5
  },
  {
    id: "n4_grammar_a_m1_q06",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "宿題を忘れたので、先生に（　　）てしまいました。",
    options: ["怒られ", "怒らせ", "怒り", "怒ってあげ"],
    correct: 0,
    explanation: "Kalimat pasif penderitaan (迷惑の受身). Pola: Pelaku + に + kata kerja pasif. 「先生に怒られました」 berarti dimarahi oleh guru.",
    mondai: 1,
    number: 6
  },
  {
    id: "n4_grammar_a_m1_q07",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "お腹が空いたから、何か食べ（　　）行きましょう。",
    options: ["に", "て", "を", "へ"],
    correct: 0,
    explanation: "Pola 「Masu-stem + に行く」 menunjukkan tujuan pergi untuk melakukan suatu tindakan. 「食べに行く」 = pergi untuk makan.",
    mondai: 1,
    number: 7
  },
  {
    id: "n4_grammar_a_m1_q08",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "電車に乗って（　　）とき、財布がないことに気づきました。",
    options: ["いる", "いた", "いなく", "いたの"],
    correct: 0,
    explanation: "Pola 「Kata kerja て-form + いる + とき」 menyatakan kejadian di tengah-tengah suatu aktivitas sedang berlangsung. 「乗っているとき」 = saat sedang naik kereta.",
    mondai: 1,
    number: 8
  },
  {
    id: "n4_grammar_a_m1_q09",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "日本語がもっと上手に話せる（　　）なりたいです。",
    options: ["ように", "ために", "ことに", "のに"],
    correct: 0,
    explanation: "Pola 「Kata kerja bentuk kamus/potensial + ように＋なる」 menyatakan perubahan kemampuan/kebiasaan. 「話せるようになりたい」 = ingin menjadi bisa berbicara.",
    mondai: 1,
    number: 9
  },
  {
    id: "n4_grammar_a_m1_q10",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "今日は寒いですから、暖かい服を着た（　　）いいですよ。",
    options: ["ほうが", "ように", "ことに", "ために"],
    correct: 0,
    explanation: "Pola 「Kata kerja た-form + ほうがいい」 digunakan untuk memberikan saran/rekomendasi kuat. 「着たほうがいい」 = sebaiknya memakai.",
    mondai: 1,
    number: 10
  },
  {
    id: "n4_grammar_a_m1_q11",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "あ、あそこの窓が開いて（　　）ね。",
    options: ["います", "あります", "おきます", "みます"],
    correct: 0,
    explanation: "Kata kerja intransitif 「開く（あく）」 dipadukan with 「ている」 untuk menunjukkan kondisi/keadaan yang sedang berlangsung (jendela terbuka).",
    mondai: 1,
    number: 11
  },
  {
    id: "n4_grammar_a_m1_q12",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "部屋が暗くなってきたので、電気を点けて（　　）ました。",
    options: ["おき", "しまい", "み", "あり"],
    correct: 0,
    explanation: "Pola 「Kata kerja て-form + おく」 menyatakan melakukan persiapan terlebih dahulu untuk masa depan. 「点けておきました」 = menyalakan terlebih dahulu.",
    mondai: 1,
    number: 12
  },
  {
    id: "n4_grammar_a_m1_q13",
    level: "N4",
    section: "Grammar",
    type: "grammar-1",
    question: "会議室には誰も（　　）ようですね。静かです。",
    options: ["いない", "いる", "いなかった", "いないの"],
    correct: 0,
    explanation: "Pola 「Kata kerja bentuk kasual + よう（様）」 digunakan untuk menyatakan dugaan/kondisi yang tampaknya demikian. Karena tidak ada orang, digunakan 「いないようですね」.",
    mondai: 1,
    number: 13
  },

  // MONDAI 2: 文の組み立て (5 soal)
  {
    id: "n4_grammar_a_m2_q01",
    level: "N4",
    section: "Grammar",
    type: "grammar-2",
    question: "「きのうは何をしましたか。」<br/>「雨が　＿＿　＿＿　＿★＿　＿＿　家にいました。」<br/>★に選択肢から最もよいものを選んでください。",
    options: ["降って", "いた", "ので", "ずっと"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「雨が 降って(1) いた(2) ので(3) ずっと(4) 家にいました。」 Posisi bintang (ke-3) diisi oleh 「ので」 (Opsi 3, index 2).",
    mondai: 2,
    number: 14
  },
  {
    id: "n4_grammar_a_m2_q02",
    level: "N4",
    section: "Grammar",
    type: "grammar-2",
    question: "私は　＿＿　＿＿　＿★＿　＿＿　旅行に行きたいです。<br/>★に選択肢から最もよいものを選んでください。",
    options: ["暇な", "ときに", "ゆっくり", "北海道へ"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「私は 暇な(1) ときに(2) ゆっくり(3) 北海道へ(4) 旅行に行きたいです。」 Posisi bintang (ke-3) diisi oleh 「ゆっくり」 (Opsi 3, index 2).",
    mondai: 2,
    number: 15
  },
  {
    id: "n4_grammar_a_m2_q03",
    level: "N4",
    section: "Grammar",
    type: "grammar-2",
    question: "「木村さん、そのカメラはどうしたんですか。」<br/>「これは　＿＿　＿＿　＿★＿　＿＿　カメラなんです。」<br/>★に選択肢から最もよいものを選んでください。",
    options: ["父", "に", "買ってもらった", "誕生日に"],
    correct: 1,
    explanation: "Susunan kalimat yang benar: 「これは 誕生日に(4) 父(1) に(2) 買ってもらった(3) カメラなんです。」 Posisi bintang (ke-3) diisi oleh 「に」 (Opsi 2, index 1).",
    mondai: 2,
    number: 16
  },
  {
    id: "n4_grammar_a_m2_q04",
    level: "N4",
    section: "Grammar",
    type: "grammar-2",
    question: "先生は　＿＿　＿＿　＿★＿　＿＿　おっしゃいました。<br/>★に選択肢から最もよいものを選んでください。",
    options: ["来週の", "試験は", "ない", "と"],
    correct: 2,
    explanation: "Susunan kalimat yang benar: 「先生は 来週の(1) 試験は(2) ない(3) と(4) おっしゃいました。」 Posisi bintang (ke-3) diisi oleh 「ない」 (Opsi 3, index 2).",
    mondai: 2,
    number: 17
  },
  {
    id: "n4_grammar_a_m2_q05",
    level: "N4",
    section: "Grammar",
    type: "grammar-2",
    question: "図書館では　＿＿　＿＿　＿★＿　＿＿　いけません。<br/>★に選択肢から最もよいものを選んでください。",
    options: ["大声で", "話して", "は", "決して"],
    correct: 1,
    explanation: "Susunan kalimat yang benar: 「図書館では 決して(4) 大声で(1) 話して(2) は(3) いけません。」 Posisi bintang (ke-3) diisi oleh 「話して」 (Opsi 2, index 1).",
    mondai: 2,
    number: 18
  },

  // MONDAI 3: 文章の文法 (5 soal)
  {
    id: "n4_grammar_a_m3_q01",
    level: "N4",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「週末の旅行」</strong><br/>先週の土曜日、私は友達の山田さんと一緒に京都へ行きました。京都は古いお寺がたくさんあって、とてもきれいな街です。私たちは朝早く新幹線に乗りました。新幹線の中でお弁当を<u>（ 19 ）</u>。とても美味しかったです。<br/>京都に着いてから、まず金閣寺へ行きました。金閣寺は本当に金色で、太陽の光でピカピカ光っていました。山田さんは「うわあ、きれいだね」と言って、写真を何枚も<u>（ 20 ）</u>。<br/>それから、私たちは近くのレストランで昼ご飯を食べました。京都の豆腐料理は有名なので、それを注文しました。豆腐料理は体に良くて、味も優しかったです。山田さんも「美味しい」と言って、喜んで<u>（ 21 ）</u>。<br/>午後は、清水寺へ行きました。清水寺は山の上にあります。清水寺から京都の街が全部見えて、素晴らしい景色でした。私たちはそこでたくさん歩きました。少し疲れましたが、風が気持ちよかったです。<br/>夕方、私たちは京都駅に戻りました。お土産を買ってから、また新幹線で東京へ帰りました。<br/>帰りの新幹線の中で、私たちは「楽しかったね。また一緒に行こう」と<u>（ 22 ）</u>。<br/>今回は一日だけの旅行でしたが、とても良い思い出になりました。皆さんも機会があれば、<u>（ 23 ）</u>京都へ行ってみてください。",
    question: "<u>（ 19 ）</u>に入る最もよいものを選んでください。",
    options: ["食べます", "食べたかったです", "食べました", "食べるでしょう"],
    correct: 2,
    explanation: "Kalimat menceritakan kejadian yang sudah terjadi di masa lampau (kemarin), maka kata kerja bentuk lampau positif 「食べました」 yang tepat.",
    mondai: 3,
    number: 19
  },
  {
    id: "n4_grammar_a_m3_q02",
    level: "N4",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「週末の旅行」</strong><br/>先週の土曜日、私は友達の山田さんと一緒に京都へ行きました。京都は古いお寺がたくさんあって、とてもきれいな街です。私たちは朝早く新幹線に乗りました。新幹線の中でお弁当を<u>（ 19 ）</u>。とても美味しかったです。<br/>京都に着いてから、まず金閣寺へ行きました。金閣寺は本当に金色で、太陽の光でピカピカ光っていました。山田さんは「うわあ、きれいだね」と言って、写真を何枚も<u>（ 20 ）</u>。<br/>それから、私たちは近くのレストランで昼ご飯を食べました。京都の豆腐料理は有名なので、それを注文しました。豆腐料理は体に良くて、味も優しかったです。山田さんも「美味しい」と言って、喜んで<u>（ 21 ）</u>。<br/>午後は、清水寺へ行きました。清水寺は山の上にあります。清水寺から京都の街が全部見えて、素晴らしい景色でした。私たちはそこでたくさん歩きました。少し疲れましたが、風が気持ちよかったです。<br/>夕方、私たちは京都駅に戻りました。お土産を買ってから、また新幹線で東京へ帰りました。<br/>帰りの新幹線の中で、私たちは「楽しかったね。また一緒に行こう」と<u>（ 22 ）</u>。<br/>今回は一日だけの旅行でしたが、とても良い思い出になりました。皆さんも機会があれば、<u>（ 23 ）</u>京都へ行ってみてください。",
    question: "<u>（ 20 ）</u>に入る最もよいものを選んでください。",
    options: ["撮らせました", "撮っていました", "撮るつもりです", "撮られます"],
    correct: 1,
    explanation: "Menyatakan tindakan yang sedang dilakukan berulang kali saat kejadian berlangsung: 「撮っていました」 (sedang memotret / asyik memotret).",
    mondai: 3,
    number: 20
  },
  {
    id: "n4_grammar_a_m3_q03",
    level: "N4",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「週末の旅行」</strong><br/>先週の土曜日、私は友達の山田さんと一緒に京都へ行きました。京都は古いお寺がたくさんあって、とてもきれいな街です。私たちは朝早く新幹線に乗りました。新幹線の中でお弁当を<u>（ 19 ）</u>。とても美味しかったです。<br/>京都に着いてから、まず金閣寺へ行きました。金閣寺は本当に金色で、太陽の光でピカピカ光っていました。山田さんは「うわあ、きれいだね」と言って、写真を何枚も<u>（ 20 ）</u>。<br/>それから、私たちは近くのレストランで昼ご飯を食べました。京都の豆腐料理は有名なので、それを注文しました。豆腐料理は体に良くて、味も優しかったです。山田さんも「美味しい」と言って、喜んで<u>（ 21 ）</u>。<br/>午後は、清水寺へ行きました。清水寺は山の上にあります。清水寺から京都の街が全部見えて、素晴らしい景色でした。私たちはそこでたくさん歩きました。少し疲れましたが、風が気持ちよかったです。<br/>夕方、私たちは京都駅に戻りました。お土産を買ってから、また新幹線で東京へ帰りました。<br/>帰りの新幹線の中で、私たちは「楽しかったね。また一緒に行こう」と<u>（ 22 ）</u>。<br/>今回は一日だけの旅行でしたが、とても良い思い出になりました。皆さんも機会があれば、<u>（ 23 ）</u>京都へ行ってみてください。",
    question: "<u>（ 21 ）</u>に入る最もよいものを選んでください。",
    options: ["食べました", "食べていました", "食べるつもりでした", "食べそうでした"],
    correct: 1,
    explanation: "Menyatakan keadaan/tindakan yang sedang berlangsung (yamada sedang menyantapnya dengan senang hati): 「食べていました」.",
    mondai: 3,
    number: 21
  },
  {
    id: "n4_grammar_a_m3_q02_2",
    level: "N4",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「週末の旅行」</strong><br/>先週の土曜日、私は友達の山田さんと一緒に京都へ行きました。京都は古いお寺がたくさんあって、とてもきれいな街です。私たちは朝早く新幹線に乗りました。新幹線の中でお弁当を<u>（ 19 ）</u>。とても美味しかったです。<br/>京都に着いてから、まず金閣寺へ行きました。金閣寺は本当に金色で、太陽の光でピカピカ光っていました。山田さんは「うわあ、きれいだね」と言って、写真を何枚も<u>（ 20 ）</u>。<br/>それから、私たちは近くのレストランで昼ご飯を食べました。京都の豆腐料理は有名なので、それを注文しました。豆腐料理は体に良くて、味も優しかったです。山田さんも「美味しい」と言って、喜んで<u>（ 21 ）</u>。<br/>午後は、清水寺へ行きました。清水寺は山の上にあります。清水寺から京都の街が全部見えて、素晴らしい景色でした。私たちはそこでたくさん歩きました。少し疲れましたが、風が気持ちよかったです。<br/>夕方、私たちは京都駅に戻りました。お土産を買ってから、また新幹線で東京へ帰りました。<br/>帰りの新幹線の中で、私たちは「楽しかったね。また一緒に行こう」と<u>（ 22 ）</u>。<br/>今回は一日だけの旅行でしたが、とても良い思い出になりました。皆さんも機会があれば、<u>（ 23 ）</u>京都へ行ってみてください。",
    question: "<u>（ 22 ）</u>に入る最もよいものを選んでください。",
    options: ["話し合いました", "話し合われました", "話しました", "話すようでした"],
    correct: 2,
    explanation: "Melaporkan kutipan pembicaraan langsung 「楽しかったね。また一緒に行こう」 と... Kata kerja yang tepat adalah 「話しました」 (kami berbicara / berbincang).",
    mondai: 3,
    number: 22
  },
  {
    id: "n4_grammar_a_m3_q03_2",
    level: "N4",
    section: "Grammar",
    type: "grammar-3",
    passage: "<strong>「週末の旅行」</strong><br/>先週の土曜日、私は友達の山田さんと一緒に京都へ行きました。京都は古いお寺がたくさんあって、とてもきれいな街です。私たちは朝早く新幹線に乗りました。新幹線の中でお弁当を<u>（ 19 ）</u>。とても美味しかったです。<br/>京都に着いてから、まず金閣寺へ行きました。金閣寺は本当に金色で、太陽の光でピカピカ光っていました。山田さんは「うわあ、きれいだね」と言って、写真を何枚も<u>（ 20 ）</u>。<br/>それから、私たちは近くのレストランで昼ご飯を食べました。京都の豆腐料理は有名なので、それを注文しました。豆腐料理は体に良くて、味も優しかったです。山田さんも「美味しい」と言って、喜んで<u>（ 21 ）</u>。<br/>午後は、清水寺へ行きました。清水寺は山の上にあります。清水寺から京都の街が全部見えて、素晴らしい景色でした。私たちはそこでたくさん歩きました。少し疲れましたが、風が気持ちよかったです。<br/>夕方、私たちは京都駅に戻りました。お土産を買ってから、また新幹線で東京へ帰りました。<br/>帰りの新幹線の中で、私たちは「楽しかったね。また一緒に行こう」と<u>（ 22 ）</u>。<br/>今回は一日だけの旅行でしたが、とても良い思い出になりました。皆さんも機会があれば、<u>（ 23 ）</u>京都へ行ってみてください。",
    question: "<u>（ 23 ）</u>に入る最もよいものを選んでください。",
    options: ["ぜひ", "きっと", "たぶん", "ぜんぜん"],
    correct: 0,
    explanation: "Pola penekanan ajakan/harapan 「ぜひ～てください」 (benar-benar cobalah pergi ke Kyoto). Maka 「ぜひ」 adalah jawaban yang benar.",
    mondai: 3,
    number: 23
  },

  // MONDAI 4: 内容理解・短文 (4 soal)
  {
    id: "n4_reading_a_m4_q01",
    level: "N4",
    section: "Reading",
    type: "reading-short",
    passage: "山田さんへ<br/>お疲れ様です。木村です。<br/>今日の午後3時からの会議ですが、急な用事が入ってしまったため、開始時間を30分遅らせて、3時半からにしたいです。場所は予定通り第2会議室です。もし都合が悪ければ、私に連絡してください。よろしくお願いします。",
    question: "今日の会議はどうなりますか。",
    options: [
      "午後3時から第2会議室で始まります。",
      "午後3時半から別の部屋で始まります。",
      "午後3時半から第2会議室で始まります。",
      "今日は中止（キャンセル）になります。"
    ],
    correct: 2,
    explanation: "Memo menyatakan: 「開始時間を30分遅らせて、3時半からにしたいです。場所は予定通り第2会議室です。」 Jadi rapat akan dimulai pukul 15:30 di Ruang Rapat 2 (Opsi 3, index 2).",
    mondai: 4,
    number: 24
  },
  {
    id: "n4_reading_a_m4_q02",
    level: "N4",
    section: "Reading",
    type: "reading-short",
    passage: "<strong>このアパートのゴミの捨て方について</strong><br/>毎週火曜日と金曜日は「燃えるゴミ」の日です。朝8時までにアパートの前のゴミ置き場に出してください。ペットボトルや缶は木曜日の朝に出すことになっています。月曜日はゴミを出してはいけません。",
    question: "火曜日の朝に何を出してもいいですか。",
    options: [
      "燃えるゴミ",
      "ペットボトル",
      "缶",
      "何も出してはいけない"
    ],
    correct: 0,
    explanation: "Teks menyatakan: 「毎週火曜日と金曜日は『燃えるゴミ』の日です。」 Jadi pada Selasa pagi, sampah yang boleh dikeluarkan adalah sampah yang bisa dibakar (燃えるゴミ, Opsi 1, index 0).",
    mondai: 4,
    number: 25
  },
  {
    id: "n4_reading_a_m4_q03",
    level: "N4",
    section: "Reading",
    type: "reading-short",
    passage: "うちには猫が1匹います。名前は「タマ」です。タマは普段とても静かで、昼間はほとんど寝ています。しかし、夜になると急に元気になって、部屋の中を走り回ります。ですから、夜は少しうるさいですが、寝ている顔がとても可愛いので、私はタマが大好きです。",
    question: "日記を書いた人はタマについてどう思っていますか。",
    options: [
      "昼間はうるさいので困っている。",
      "夜走り回るから嫌いだ。",
      "夜は少しうるさいけれど、大好きだ。",
      "いつも静かだから可愛いと思っている。"
    ],
    correct: 2,
    explanation: "Penulis menyatakan: 「夜は少しうるさいですが、寝ている顔がとても可愛いので、私はタマが大好きです。」 Ini sama maknanya dengan Opsi 3 (Meskipun malam agak berisik, tetapi ia sangat menyukainya).",
    mondai: 4,
    number: 26
  },
  {
    id: "n4_reading_a_m4_q04",
    level: "N4",
    section: "Reading",
    type: "reading-short",
    passage: "<strong>薬 of 飲み方：</strong><br/>この薬は、朝ご飯と晩ご飯を食べた後、30分以内に飲んでください。昼ご飯の後は飲む必要はありません。1回に2錠（じょう）ずつ、水と一緒に飲んでください。お茶やジュースで飲んではいけません。",
    question: "この薬の正しい飲み方はどれですか。",
    options: [
      "毎食後、30分以内に1錠飲む。",
      "朝と晩の食事の後、30分以内にお茶で2錠飲む。",
      "朝と晩 of 食事の後、30分以内に水で2錠飲む。",
      "昼ご飯の後、30分以内に水で2錠飲む。"
    ],
    correct: 2,
    explanation: "Aturan minum obat: pagi dan malam setelah makan (朝ご飯と晩ご飯を食べた後), dalam 30 menit (30分以内), 2 tablet dengan air (水と一緒に2錠ずつ). Opsi yang tepat adalah 3 (index 2).",
    mondai: 4,
    number: 27
  },

  // MONDAI 5: 内容理解・中文 (3 soal)
  {
    id: "n4_reading_a_m5_q01",
    level: "N4",
    section: "Reading",
    type: "reading-mid",
    passage: "<strong>「日本の自動販売機」</strong><br/>日本にはたくさんの自動販売機（じどうはんばいき）があります。街を歩くと、数メートルおきに飲み物の自動販売機を見つけることができます。暖かい飲み物と冷たい飲み物が同じ機械で売られているのは、外国人にとって非常に珍しいことのようです。<br/>最近の自動販売機は、飲み物だけでなく、様々なものが売られています。例えば、温かいラーメンやうどん、新鮮な果物、パン、おもちゃなどもあります。また、災害（地震や大雨など）が発生したときに、お金を入れなくても飲み物を取り出すことができる特別な自動販売機も増えています。<br/>さらに、電気をあまり使わないような仕組みになっているため、環境（かんきょう）にも優しいです。日本の自動販売機は、ただ便利であるだけでなく、社会や地球のためにも役に立っているのです。",
    question: "外国人が日本の自動販売機で特に珍しいと思うことは何ですか。",
    options: [
      "自動販売機が街にたくさんあること。",
      "温かい飲み物と冷たい飲み物が同じ機械で売られていること。",
      "お金を入れなくても飲み物がもらえること。",
      "ラーメンやうどんが自動販売機で売られていること。"
    ],
    correct: 1,
    explanation: "Teks menyatakan: 「暖かい飲み物と冷たい飲み物が同じ機械で売られているのは、外国人にとって非常に珍しいことのようです。」 (Opsi 2, index 1).",
    mondai: 5,
    number: 28
  },
  {
    id: "n4_reading_a_m5_q02",
    level: "N4",
    section: "Reading",
    type: "reading-mid",
    passage: "<strong>「日本の自動販売機」</strong><br/>日本にはたくさんの自動販売機（じどうはんばいき）があります。街を歩くと、数メートルおきに飲み物の自動販売機を見つけることができます。暖かい飲み物と冷たい飲み物が同じ機械で売られているのは、外国人にとって非常に珍しいことのようです。<br/>最近の自動販売機は、飲み物だけでなく、様々なものが売られています。例えば、温かいラーメンやうどん、新鮮な果物、パン、おもちゃなどもあります。また、災害（地震や大雨など）が発生したときに、お金を入れなくても飲み物を取り出すことができる特別な自動販売機も増えています。<br/>さらに、電気をあまり使わないような仕組みになっているため、環境（かんきょう）にも優しいです。日本の自動販売機は、ただ便利であるだけでなく、社会や地球のためにも役に立っているのです。",
    question: "災害が発生したとき、特別な自動販売機はどうなりますか。",
    options: [
      "壊れて使えなくなります。",
      "自動的に電気が消えて節電モードになります。",
      "無料（お金を入れない）で飲み物を取り出すことができます。",
      "避難所に自動的に移動します。"
    ],
    correct: 2,
    explanation: "Teks menyatakan: 「災害（地震や大雨など）が発生したときに、お金を入れなくても飲み物を取り出すことができる特別な自動販売機も増えています。」 Ini berarti gratis (Opsi 3, index 2).",
    mondai: 5,
    number: 29
  },
  {
    id: "n4_reading_a_m5_q03",
    level: "N4",
    section: "Reading",
    type: "reading-mid",
    passage: "<strong>「日本の自動販売機」</strong><br/>日本にはたくさんの自動販売機（じどうはんばいき）があります。街を歩くと、数メートルおきに飲み物の自動販売機を見つけることができます。暖かい飲み物と冷たい飲み物が同じ機械で売られているのは、外国人にとって非常に珍しいことのようです。<br/>最近の自動販売機は、飲み物だけでなく、様々なものが売られています。例えば、温かいラーメンやうどん、新鮮な果物、パン、おもちゃなどもあります。また、災害（地震や大雨など）が発生したときに、お金を入れなくても飲み物を取り出すことができる特別な自動販売機も増えています。<br/>さらに、電気をあまり使わないような仕組みになっているため、環境（かんきょう）にも優しいです。日本の自動販売機は、ただ便利であるだけでなく、社会や地球のためにも役に立っているのです。",
    question: "この文章で筆者が一番伝えたいことは何ですか。",
    options: [
      "日本の自動販売機はとても種類が多いということ。",
      "自動販売機は日本の街並みの特徴であるということ。",
      "日本の自動販売機は便利であるだけでなく、社会や環境の役にも立っているということ。",
      "もっと多くの自動販売機を外国に輸出すべきだということ。"
    ],
    correct: 2,
    explanation: "Kalimat penutup menyimpulkan inti tulisan: 「日本の自動販売機は、ただ便利であるだけでなく、社会や地球のためにも役に立っているのです。」 (Opsi 3, index 2).",
    mondai: 5,
    number: 30
  },

  // MONDAI 6: 情報検索 (2 soal)
  {
    id: "n4_reading_a_m6_q01",
    level: "N4",
    section: "Reading",
    type: "reading-info",
    passage: "<strong>「日本語スピーチコンテストのお知らせ」</strong><br/>日本語スピーチコンテストを以下の通り開催します。<br/>■日時：7月10日（日）午後1時〜午後4時<br/>■場所：国際交流センター 3階ホール<br/>■参加資格：日本に住んでいる外国人（留学生や働いている人など）。ただし、日本に住んでいる期間が合計で3年以内の人に限ります。<br/>■スピーチのテーマ：「私が見つけた日本」<br/>■時間：1人5分以内<br/>■申込方法：ホームページから申込用紙をダウンロードし、6月20日までに事務局へ送ってください。<br/>■参加費：無料",
    question: "このスピーチコンテストに参加できる人は誰ですか。",
    options: [
      "日本に5年住んでいる外国人留学生。",
      "日本に住んでいる日本人で、外国人と交流したい人。",
      "日本に住んで2年になる外国人会社員。",
      "海外に住んでいて、日本語学校に通う学生。"
    ],
    correct: 2,
    explanation: "Syarat peserta: orang asing yang tinggal di Jepang (日本に住んでいる外国人) dengan masa tinggal maksimal 3 tahun (3年以内). Orang asing yang tinggal selama 2 tahun (Opsi 3, index 2) memenuhi syarat ini.",
    mondai: 6,
    number: 31
  },
  {
    id: "n4_reading_a_m6_q02",
    level: "N4",
    section: "Reading",
    type: "reading-info",
    passage: "<strong>「日本語スピーチコンテストのお知らせ」</strong><br/>日本語スピーチコンテストを以下の通り開催します。<br/>■日時：7月10日（日）午後1時〜午後4時<br/>■場所：国際交流センター 3階ホール<br/>■参加資格：日本に住んでいる外国人（留学生や働いている人など）。ただし、日本に住んでいる期間が合計で3年以内の人に限ります。<br/>■スピーチのテーマ：「私が見つけた日本」<br/>■時間：1人5分以内<br/>■申込方法：ホームページから申込用紙をダウンロードし、6月20日までに事務局へ送ってください。<br/>■参加費：無料",
    question: "コンテストに参加したい人は、まずどうしなければなりませんか。",
    options: [
      "7月10日までに国際交流センターへ直接行く。",
      "6月20日までに申込用紙を送る。",
      "事前に入場料として参加費を払う。",
      "5分以上のスピーチ原稿を録音して送る。"
    ],
    correct: 1,
    explanation: "Cara mendaftar: unduh formulir dari situs web dan kirimkan paling lambat 20 Juni (6月20日までに事務局へ送る). Opsi yang tepat adalah 2 (index 1).",
    mondai: 6,
    number: 32
  }
];

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

export const mojigoiN4A: LegacyQuestion[] = [
  // MONDAI 1: 漢字の読み方 (9 soal)
  {
    id: "n4_vocab_a_m1_q01",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "病院へ行って、薬をもらいました。",
    highlight: "病院",
    options: ["びょういん", "びよういん", "びょうえん", "びようえん"],
    correct: 0,
    explanation: "「病院」は「びょういん」と読みます。びょう（病）＋いん（院）で「びょういん」となります。「びよういん（美容院 - salon kecantikan）」との違いに注意しましょう。",
    mondai: 1,
    number: 1
  },
  {
    id: "n4_vocab_a_m1_q02",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "車の運転は難しいですか。",
    highlight: "運転",
    options: ["うんてん", "うんどん", "えんてん", "えんどん"],
    correct: 0,
    explanation: "「運転」は「うんてん」と読みます。運（うん）＋転（てん）で、車の運転（menyetir mobil）を意味します。",
    mondai: 1,
    number: 2
  },
  {
    id: "n4_vocab_a_m1_q03",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "荷物を国へ送ります。",
    highlight: "送ります",
    options: ["おこります", "おくります", "まもります", "おくります"],
    correct: 1,
    explanation: "「送ります」は「おくります」と読みます。「送る」は mengirim dalam bahasa Indonesia.",
    mondai: 1,
    number: 3
  },
  {
    id: "n4_vocab_a_m1_q04",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "台風が北に進んでいます。",
    highlight: "進んで",
    options: ["はこんで", "ならんで", "すすんで", "あそんで"],
    correct: 2,
    explanation: "「進んで」は「すすんで」と読みます。原形は「進む」（maju/bergerak maju）。",
    mondai: 1,
    number: 4
  },
  {
    id: "n4_vocab_a_m1_q05",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "テストの答えを教えてください。",
    highlight: "答え",
    options: ["こたえ", "といただえ", "こたあえ", "といあわせ"],
    correct: 0,
    explanation: "「答え」は「こたえ」と読みます。「答える」の名詞形で jawapan/jawaban.",
    mondai: 1,
    number: 5
  },
  {
    id: "n4_vocab_a_m1_q06",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "旅行の準備をしましょう。",
    highlight: "準備",
    options: ["じゅんび", "じゅんべい", "しゅんび", "しゅんべい"],
    correct: 0,
    explanation: "「準備」は「じゅんび」と読みます。準（じゅん）＋備（び）で persiapan.",
    mondai: 1,
    number: 6
  },
  {
    id: "n4_vocab_a_m1_q07",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "今日は特別な日です。",
    highlight: "特別",
    options: ["とくべつ", "とくべち", "とくべつな", "とっべつ"],
    correct: 0,
    explanation: "「特別」は「とくべつ」と読みます。特（とく）＋別（べつ）で istimewa / spesial.",
    mondai: 1,
    number: 7
  },
  {
    id: "n4_vocab_a_m1_q08",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "あなたの意見を聞かせてください。",
    highlight: "意見",
    options: ["いけん", "いみん", "いぎん", "いせん"],
    correct: 0,
    explanation: "「意見」は「いけん」と読みます。意（い）＋見（けん）で pendapat / opini.",
    mondai: 1,
    number: 8
  },
  {
    id: "n4_vocab_a_m1_q09",
    level: "N4",
    section: "Vocabulary",
    type: "kanji-read",
    question: "来年の計画を立てました。",
    highlight: "計画",
    options: ["けいかく", "けいがく", "けいかく", "けいかく"],
    correct: 0,
    explanation: "「計画」は「けいかく」と読みます。計（けい）＋画（かく）で rencana / program.",
    mondai: 1,
    number: 9
  },

  // MONDAI 2: 表記 (6 soal)
  {
    id: "n4_vocab_a_m2_q01",
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "今日はとてもあついです。",
    highlight: "あつい",
    options: ["暑い", "熱い", "厚い", "甘い"],
    correct: 0,
    explanation: "Cuaca panas ditulis dengan kanji 「暑い」. 「熱い」 digunakan untuk benda/cairan panas (misal teh panas), sedangkan 「厚い」 berarti tebal.",
    mondai: 2,
    number: 1
  },
  {
    id: "n4_vocab_a_m2_q02",
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "自動車にちゅういしてください。",
    highlight: "ちゅうい",
    options: ["注意", "注文", "注射", "特急"],
    correct: 0,
    explanation: "Hati-hati / perhatian ditulis 「注意」 (ちゅうい). 「注文」 (ちゅうもん) berarti memesan, 「注射」 (ちゅうしゃ) berarti suntikan.",
    mondai: 2,
    number: 2
  },
  {
    id: "n4_vocab_a_m2_q03",
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "店のしなものを見ました。",
    highlight: "しなもの",
    options: ["品物", "新物", "物品", "信物"],
    correct: 0,
    explanation: "Barang dagangan ditulis 「品物」 (しなもの). 品 (品物) + 物 (barang).",
    mondai: 2,
    number: 3
  },
  {
    id: "n4_vocab_a_m2_q04",
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "先生のせつめいを聞きます。",
    highlight: "せつめい",
    options: ["説明", "説名", "説話", "語明"],
    correct: 0,
    explanation: "Penjelasan ditulis 「説明」 (せつめい). 説 (menjelaskan) + 明 (terang/jelas).",
    mondai: 2,
    number: 4
  },
  {
    id: "n4_vocab_a_m2_q05",
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "テストが終わってあんしんしました。",
    highlight: "あんしん",
    options: ["安心", "安全", "安定", "安神"],
    correct: 0,
    explanation: "Lega / tenang pikiran ditulis 「安心」 (あんしん). 安 (murah/tenang) + 心 (hati). 「安全」 (あんぜん) berarti aman.",
    mondai: 2,
    number: 5
  },
  {
    id: "n4_vocab_a_m2_q06",
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "毎日しあわせに暮らしています。",
    highlight: "しあわせ",
    options: ["幸せ", "辛せ", "幸い", "吉せ"],
    correct: 0,
    explanation: "Bahagia ditulis dengan kanji 「幸せ」 (しあわせ). Kanji 「辛い」 (からい/つらい) sangat mirip tetapi berbeda makna (pedas/berat).",
    mondai: 2,
    number: 6
  },

  // MONDAI 3: 文脈規定 (11 soal)
  {
    id: "n4_vocab_a_m3_q01",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "会議に（　　）遅れてしまいました。",
    options: ["すこし", "うっかり", "はっきり", "すっかり"],
    correct: 1,
    explanation: "「うっかり」 berarti tanpa sengaja / melamun. Kalimat berarti: Saya tanpa sengaja terlambat datang ke rapat.",
    mondai: 3,
    number: 1
  },
  {
    id: "n4_vocab_a_m3_q02",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "鈴木さんはいつも（　　）を言って人をだまします。",
    options: ["うそ", "うわさ", "ひみつ", "はなし"],
    correct: 0,
    explanation: "鈴木さん selalu berbohong (うそを言う) dan menipu orang. 「うそ」 berarti bohong.",
    mondai: 3,
    number: 2
  },
  {
    id: "n4_vocab_a_m3_q03",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "この部屋は（　　）が悪いので、窓を開けましょう。",
    options: ["風", "空気", "天気", "気分"],
    correct: 1,
    explanation: "Karena udara (空気 - くうき) di ruangan ini buruk, mari kita buka jendela. 「空気」 berarti udara.",
    mondai: 3,
    number: 3
  },
  {
    id: "n4_vocab_a_m3_q04",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "将来、都会を離れて自分の店を（　　）たいです。",
    options: ["ひらき", "はじめ", "たて", "おこし"],
    correct: 0,
    explanation: "Membuka toko sendiri diungkapkan dengan 「店を開く（みせをひらく）」. Jadi bentuk keinginan (tai-form) adalah 「ひらきたい」.",
    mondai: 3,
    number: 4
  },
  {
    id: "n4_vocab_a_m3_q05",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "料理に砂糖を入れすぎて、（　　）なってしまいました。",
    options: ["からく", "あまく", "すっぱく", "にがく"],
    correct: 1,
    explanation: "Terlalu banyak memasukkan gula membuat masakan menjadi manis (甘い -> あまく). 「からい」 pedas/asin, 「すっぱい」 asam, 「にがい」 pahit.",
    mondai: 3,
    number: 5
  },
  {
    id: "n4_vocab_a_m3_q06",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "バスが遅れたので、朝の授業に（　　）しまいました。",
    options: ["まにあって", "おくれて", "おちて", "いそいで"],
    correct: 1,
    explanation: "「授業に遅れる（じゅぎょうにおくれる）」 berarti terlambat kelas. Karena bus lambat, saya terlambat kelas pagi.",
    mondai: 3,
    number: 6
  },
  {
    id: "n4_vocab_a_m3_q07",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "日曜日なので、デパートはとても（　　）いました。",
    options: ["すいて", "こんで", "あいて", "しまって"],
    correct: 1,
    explanation: "Karena hari Minggu, departement store sangat ramai/padat (混む -> こんでいます). 「すく」 berarti sepi/kosong.",
    mondai: 3,
    number: 7
  },
  {
    id: "n4_vocab_a_m3_q08",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "大切なパスポートを（　　）ので、旅行に行けません。",
    options: ["なくした", "わすれた", "おとした", "すてた"],
    correct: 0,
    explanation: "Karena menghilangkan (なくした - dari なくす) paspor penting, tidak bisa pergi traveling. 「おとした」 menjatuhkan.",
    mondai: 3,
    number: 8
  },
  {
    id: "n4_vocab_a_m3_q09",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "友達の結婚式に（　　）されました。",
    options: ["招待", "紹介", "案内", "相談"],
    correct: 0,
    explanation: "Diundang ke pesta pernikahan teman. 「招待（しょうたい）する」 diundang/mengundang. 「紹介（しょうかい）」 perkenalan, 「案内（あんない）」 panduan.",
    mondai: 3,
    number: 9
  },
  {
    id: "n4_vocab_a_m3_q10",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "昨日から風邪を引いて、のどが（　　）です。",
    options: ["いたい", "かゆい", "つめたい", "あつい"],
    correct: 0,
    explanation: "Karena masuk angin/flu, tenggorokan sakit (痛い -> いたい). 「かゆい」 gatal, 「つめたい」 dingin.",
    mondai: 3,
    number: 10
  },
  {
    id: "n4_vocab_a_m3_q11",
    level: "N4",
    section: "Vocabulary",
    type: "context",
    question: "毎晩、日本語の発音の（　　）をしています。",
    options: ["しゅくだい", "れんしゅう", "べんきょう", "ほんやく"],
    correct: 1,
    explanation: "Setiap malam saya berlatih (練習 -> れんしゅう) pelafalan bahasa Jepang. 「れんしゅうをする」 adalah kolokasi yang tepat untuk melatih pelafalan.",
    mondai: 3,
    number: 11
  },

  // MONDAI 4: 言い換え類義 (9 soal)
  {
    id: "n4_vocab_a_m4_q01",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "あそこは**うるさい**ですね。",
    highlight: "うるさい",
    options: ["にぎやか", "しずか", "さわがしい", "きたない"],
    correct: 2,
    explanation: "「うるさい」 (bising/ribut) memiliki arti yang sama dengan 「さわがしい（騒がしい）」. 「にぎやか」 lebih berarti ramai (berkonotasi positif).",
    mondai: 4,
    number: 1
  },
  {
    id: "n4_vocab_a_m4_q02",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "鈴木さんは**うそをつきました**。",
    highlight: "うそをつきました",
    options: [
      "本当のことを言わなかった",
      "正しいことを言わなかった",
      "悪いことを言った",
      "何も言わなかった"
    ],
    correct: 0,
    explanation: "「うそをつく」 (berbohong) sama dengan tidak mengatakan hal yang sebenarnya (本当のことを言わなかった).",
    mondai: 4,
    number: 2
  },
  {
    id: "n4_vocab_a_m4_q03",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "この映画は**つまらない**です。",
    highlight: "つまらない",
    options: ["おもしろくない", "むずかしい", "やさしい", "ながい"],
    correct: 0,
    explanation: "「つまらない」 (membosankan) sama maknanya dengan 「おもしろくない」 (tidak menarik/seru).",
    mondai: 4,
    number: 3
  },
  {
    id: "n4_vocab_a_m4_q04",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "先月、会社を**やめました**。",
    highlight: "やめました",
    options: [
      "会社で働くのをやめました",
      "会社の場所を変えました",
      "会社を休みました",
      "会社を新しく作りました"
    ],
    correct: 0,
    explanation: "「会社をやめる」 (mengundurkan diri/berhenti kerja) berarti berhenti bekerja di perusahaan tersebut (働くのをやめました).",
    mondai: 4,
    number: 4
  },
  {
    id: "n4_vocab_a_m4_q05",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "鈴木さんは**ハンサム**ですね。",
    highlight: "ハンサム",
    options: ["かっこいい", "やさしい", "まじめ", "あたまがいい"],
    correct: 0,
    explanation: "「ハンサム」 (tampan) memiliki sinonim 「かっこいい」 (keren/menarik secara penampilan).",
    mondai: 4,
    number: 5
  },
  {
    id: "n4_vocab_a_m4_q06",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "彼は**まもなく**来ます。",
    highlight: "まもなく",
    options: ["すぐに", "ゆっくり", "ずっと", "はじめて"],
    correct: 0,
    explanation: "「まもなく」 (sebentar lagi / segera) memiliki arti yang mirip dengan 「すぐに」.",
    mondai: 4,
    number: 6
  },
  {
    id: "n4_vocab_a_m4_q07",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "ここでタバコを吸っては**だめ**です。",
    highlight: "だめ",
    options: ["いけません", "できません", "かまいません", "ありません"],
    correct: 0,
    explanation: "「だめです」 (tidak boleh) sama maknanya dengan larangan 「いけません」.",
    mondai: 4,
    number: 7
  },
  {
    id: "n4_vocab_a_m4_q08",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "田中さんは部屋の**かたづけ**をしました。",
    highlight: "かたづけ",
    options: ["そうじ", "せんたく", "かいもの", "りょうり"],
    correct: 0,
    explanation: "「かたづけ（片付け）」 (membereskan/merapikan ruangan) memiliki kesamaan aktivitas dengan 「そうじ（掃除）」 (bersih-bersih).",
    mondai: 4,
    number: 8
  },
  {
    id: "n4_vocab_a_m4_q09",
    level: "N4",
    section: "Vocabulary",
    type: "paraphrase",
    question: "駅からここまで**だいたい**10分です。",
    highlight: "だいたい",
    options: ["およそ", "ちょうど", "ぜひ", "ぜんぜん"],
    correct: 0,
    explanation: "「だいたい」 (kira-kira) sama maknanya dengan 「およそ」 (kurang lebih).",
    mondai: 4,
    number: 9
  }
];

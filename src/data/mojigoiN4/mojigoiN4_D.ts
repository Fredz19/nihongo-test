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

export const mojigoiN4D: LegacyQuestion[] = [
  {
    "id": "mojigoi_n4_d_m1_q01",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "この町は不便です。",
    "options": ["ふべん", "ふべい", "ふへん", "ふぺん"],
    "correct": 0,
    "explanation": "「不便」は「ふべん」と読みます。意味は 'tidak nyaman, tidak praktis'. Kata lawannya adalah 便利 (べんり)。",
    "mondai": 1,
    "number": 1,
    "highlight": "不便"
  },
  {
    "id": "mojigoi_n4_d_m1_q02",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "あの人は親切です。",
    "options": ["しんせつ", "しんぜつ", "しんせっ", "しんぜっ"],
    "correct": 0,
    "explanation": "「親切」は「しんせつ」と読みます。意味は 'baik hati, ramah'. Lawan: 不親切 (ふしんせつ)。",
    "mondai": 1,
    "number": 2,
    "highlight": "親切"
  },
  {
    "id": "mojigoi_n4_d_m1_q03",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "政治について勉強しています。",
    "options": ["せいじ", "せいぢ", "せいし", "せいじゅ"],
    "correct": 0,
    "explanation": "「政治」は「せいじ」と読みます。意味は 'politik'. Bukan せいぢ (ぢ jarang dipakai)。",
    "mondai": 1,
    "number": 3,
    "highlight": "政治"
  },
  {
    "id": "mojigoi_n4_d_m1_q04",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "この問題は難しいです。",
    "options": ["もんだい", "もんたい", "もんざい", "もんれい"],
    "correct": 0,
    "explanation": "「問題」は「もんだい」と読みます。意味は 'soal, masalah'. Bacaan standar JLPT N4。",
    "mondai": 1,
    "number": 4,
    "highlight": "問題"
  },
  {
    "id": "mojigoi_n4_d_m1_q05",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "経済が大切です。",
    "options": ["けいざい", "けいさい", "けいじゃい", "けいぜい"],
    "correct": 0,
    "explanation": "「経済」は「けいざい」と読みます。意味は 'ekonomi'. 「ざ」bukan 「さい」。",
    "mondai": 1,
    "number": 5,
    "highlight": "経済"
  },
  {
    "id": "mojigoi_n4_d_m1_q06",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "自由に使ってください。",
    "options": ["じゆう", "じゅう", "じよう", "じゅゆう"],
    "correct": 0,
    "explanation": "「自由」は「じゆう」と読みます。意味は 'bebas'. Perhatikan: bukan 「じゅう」",
    "mondai": 1,
    "number": 6,
    "highlight": "自由"
  },
  {
    "id": "mojigoi_n4_d_m1_q07",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "準備をしています。",
    "options": ["じゅんび", "じゅんぴ", "じゅんべ", "じゅんびゅ"],
    "correct": 0,
    "explanation": "「準備」は「じゅんび」と読みます。意味は 'persiapan'. Bacaan standar.",
    "mondai": 1,
    "number": 7,
    "highlight": "準備"
  },
  {
    "id": "mojigoi_n4_d_m1_q08",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "特別な日です。",
    "options": ["とくべつ", "とくべい", "とくへつ", "とくぺつ"],
    "correct": 0,
    "explanation": "「特別」は「とくべつ」と読みます。意味は 'istimewa, khusus'.",
    "mondai": 1,
    "number": 8,
    "highlight": "特別"
  },
  {
    "id": "mojigoi_n4_d_m1_q09",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "注意してください。",
    "options": ["ちゅうい", "ちゅい", "じゅうい", "ちゅうえ"],
    "correct": 0,
    "explanation": "「注意」は「ちゅうい」と読みます。意味は 'perhatian, hati-hati'.",
    "mondai": 1,
    "number": 9,
    "highlight": "注意"
  },
  {
    "id": "mojigoi_n4_d_m2_q10",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "このきょうしつはあたらしいです。",
    "options": ["教室", "教空", "孝室", "教窒"],
    "correct": 0,
    "explanation": "きょうしつ = ruang kelas. 教 (mengajar) + 室 (ruang)。",
    "mondai": 2,
    "number": 10,
    "highlight": "きょうしつ"
  },
  {
    "id": "mojigoi_n4_d_m2_q11",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "しゅうまつにえいがを見ました。",
    "options": ["週末", "週未", "周未", "周末"],
    "correct": 0,
    "explanation": "しゅうまつ = akhir pekan. 週 (minggu) + 末 (akhir)。",
    "mondai": 2,
    "number": 11,
    "highlight": "しゅうまつ"
  },
  {
    "id": "mojigoi_n4_d_m2_q12",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "しょうらいのゆめをかなえたいです。",
    "options": ["将来", "将采", "将莱", "将夾"],
    "correct": 0,
    "explanation": "しょうらい = masa depan. 将 (memimpin) + 来 (datang)。",
    "mondai": 2,
    "number": 12,
    "highlight": "しょうらい"
  },
  {
    "id": "mojigoi_n4_d_m2_q13",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "せいかつがたいへんです。",
    "options": ["生活", "生話", "性活", "生舌"],
    "correct": 0,
    "explanation": "せいかつ = kehidupan, hidup. 生 (hidup) + 活 (aktivitas)。",
    "mondai": 2,
    "number": 13,
    "highlight": "せいかつ"
  },
  {
    "id": "mojigoi_n4_d_m2_q14",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "にゅういんしました。",
    "options": ["入院", "入完", "入浣", "入皖"],
    "correct": 0,
    "explanation": "にゅういん = dirawat di RS. 入 (masuk) + 院 (institusi)。",
    "mondai": 2,
    "number": 14,
    "highlight": "にゅういん"
  },
  {
    "id": "mojigoi_n4_d_m2_q15",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "はっぴょうをしました。",
    "options": ["発表", "発麦", "発平", "発評"],
    "correct": 0,
    "explanation": "はっぴょう = presentasi, pengumuman. 発 (mengeluarkan) + 表 (menyatakan)。",
    "mondai": 2,
    "number": 15,
    "highlight": "はっぴょう"
  },
  {
    "id": "mojigoi_n4_d_m3_q16",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "あしたは（　　）ですから、学校に行きません。",
    "options": ["きのう", "きょう", "やすみ", "いま"],
    "correct": 2,
    "explanation": "Konieks: tidak pergi ke sekolah → hari libur (休み)。",
    "mondai": 3,
    "number": 16
  },
  {
    "id": "mojigoi_n4_d_m3_q17",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "このかばんは（　　）ですね。たくさん入ります。",
    "options": ["ちいさい", "おおきい", "たかい", "やすい"],
    "correct": 1,
    "explanation": "Konteks: bisa memuat banyak → besar (大きい)。",
    "mondai": 3,
    "number": 17
  },
  {
    "id": "mojigoi_n4_d_m3_q18",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "かぜをひいて、（　　）が痛いです。",
    "options": ["あたま", "かお", "て", "あし"],
    "correct": 0,
    "explanation": "Konteks: masuk angin → sakit kepala (頭が痛い) adalah gejala umum。",
    "mondai": 3,
    "number": 18
  },
  {
    "id": "mojigoi_n4_d_m3_q19",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "あのレストランは（　　）がいいです。",
    "options": ["おんがく", "おんせん", "おんど", "おんりょう"],
    "correct": 0,
    "explanation": "Konteks: restoran → musik (音楽) yang bagus。",
    "mondai": 3,
    "number": 19
  },
  {
    "id": "mojigoi_n4_d_m3_q20",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "でんしゃの（　　）をかいました。",
    "options": ["きっぷ", "きっさ", "きっか", "きっと"],
    "correct": 0,
    "explanation": "Konteks: kereta → tiket (切符)。",
    "mondai": 3,
    "number": 20
  },
  {
    "id": "mojigoi_n4_d_m3_q21",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "きょうは（　　）がふるでしょう。",
    "options": ["あめ", "ひ", "かぜ", "ゆき"],
    "correct": 3,
    "explanation": "Konteks: turun (ふる) → salju (雪) turun. Hujan (雨) juga bisa, tapi 雪 lebih spesifik untuk N4。",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "mojigoi_n4_d_m3_q22",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "このほんは（　　）です。よんでください。",
    "options": ["おもしろい", "つまらない", "むずかしい", "かんたん"],
    "correct": 0,
    "explanation": "Konteks: suruh baca → menarik (面白い)。",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "mojigoi_n4_d_m3_q23",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "ともだちに（　　）をもらいました。",
    "options": ["プレゼント", "プラン", "プログラム", "プロジェクト"],
    "correct": 0,
    "explanation": "Konteks: menerima dari teman → hadiah (プレゼント)。",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "mojigoi_n4_d_m3_q24",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "このみちは（　　）です。気をつけてください。",
    "options": ["あぶない", "たいせつ", "べんり", "じょうず"],
    "correct": 0,
    "explanation": "Konteks: hati-hati → berbahaya (危ない)。",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "mojigoi_n4_d_m3_q25",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "（　　）にいきたいです。",
    "options": ["えいがかん", "としょかん", "びじゅつかん", "はくぶつかん"],
    "correct": 0,
    "explanation": "Konteks: ingin pergi → bioskop (映画館)。",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "mojigoi_n4_d_m4_q26",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "この料理はおいしいです。",
    "options": ["りょうり", "りょうし", "りょうきん", "りょうかい"],
    "correct": 0,
    "explanation": "料理 (りょうり) = masakan. Pilihan lain: 漁師 (nelayan), 料金 (biaya), 了解 (pengertian)。",
    "mondai": 4,
    "number": 26,
    "highlight": "料理"
  },
  {
    "id": "mojigoi_n4_d_m4_q27",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "たいへんな仕事です。",
    "options": ["かんたん", "むずかしい", "たのしい", "つまらない"],
    "correct": 1,
    "explanation": "大変 (たいへん) = sulit/berat. Sinonim terdekat: 難しい (むずかしい)。",
    "mondai": 4,
    "number": 27,
    "highlight": "たいへん"
  },
  {
    "id": "mojigoi_n4_d_m4_q28",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "きっと来るでしょう。",
    "options": ["たぶん", "ぜったい", "きっと", "もしかしたら"],
    "correct": 1,
    "explanation": "きっと = pasti. Sinonim kuat: 絶対 (ぜったい)。",
    "mondai": 4,
    "number": 28,
    "highlight": "きっと"
  },
  {
    "id": "mojigoi_n4_d_m4_q29",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "この問題を解いてください。",
    "options": ["もんだい", "しつもん", "しけん", "れんしゅう"],
    "correct": 0,
    "explanation": "問題 (もんだい) = soal. 質問 = pertanyaan, 試験 = ujian, 練習 = latihan。",
    "mondai": 4,
    "number": 29,
    "highlight": "問題"
  },
  {
    "id": "mojigoi_n4_d_m4_q30",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "にんきのある歌です。",
    "options": ["ゆうめい", "たいせつ", "にんき", "しゅうちゅう"],
    "correct": 2,
    "explanation": "人気 (にんき) = populer. Sinonim: 有名 (ゆうめい) = terkenal (mirip tapi beda nuansa). Jawaban paling tepat tetap 人気。",
    "mondai": 4,
    "number": 30,
    "highlight": "にんき"
  },
  {
    "id": "mojigoi_n4_d_m5_q31",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「あつい」をただしくつかっているぶんはどれですか。",
    "options": [
      "あつい本を読みました。",
      "きょうはあついです。",
      "あつい人が好きです。",
      "このりょうりはあついです。"
    ],
    "correct": 1,
    "explanation": "暑い (あつい) = panas (suhu udara). Benda tebal menggunakan 「厚い」、makanan panas menggunakan 「熱い」。",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "mojigoi_n4_d_m5_q32",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「はやい」をただしくつかっているぶんはどれですか。",
    "options": [
      "このかばんははやいです。",
      "かれははやいです。",
      "このレストランははやいです。",
      "あのいえははやいです。"
    ],
    "correct": 1,
    "explanation": "速い/早い (はやい) = cepat. Bisa untuk orang (berlari cepat).",
    "mondai": 5,
    "number": 32
  },
  {
    "id": "mojigoi_n4_d_m5_q33",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「おもい」をただしくつかっているぶんはどれですか。",
    "options": [
      "このかばんはおもいです。",
      "きのうはおもいでした。",
      "このえいがはおもいです。",
      "あの人はおもいです。"
    ],
    "correct": 0,
    "explanation": "重い (おもい) = berat. Untuk benda yang memiliki bobot.",
    "mondai": 5,
    "number": 33
  },
  {
    "id": "mojigoi_n4_d_m5_q34",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「ひくい」をただしくつかっているぶんはどれですか。",
    "options": [
      "この山はひくいです。",
      "この本はひくいです。",
      "あの人はひくいです。",
      "このくるまはひくいです。"
    ],
    "correct": 0,
    "explanation": "低い (ひくい) = rendah. Untuk ketinggian gunung, bangunan, dsb. Tubuh pendek/rendah menggunakan 「背が低い」 dan mobil ceper menggunakan 「車高が低い」 tetapi standard gunung rendah adalah 「山が低い」。",
    "mondai": 5,
    "number": 34
  },
  {
    "id": "mojigoi_n4_d_m5_q35",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「あたらしい」をただしくつかっているぶんはどれですか。",
    "options": [
      "あたらしい人が来ました。",
      "あたらしいかぜをひきました。",
      "あたらしいかばんを買いました。",
      "あたらしいりょうりを食べました。"
    ],
    "correct": 2,
    "explanation": "新しい (あたらしい) = baru. Untuk kondisi benda yang baru dibeli/dibuat.",
    "mondai": 5,
    "number": 35
  }
];

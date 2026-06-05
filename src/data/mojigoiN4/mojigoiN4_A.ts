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
  {
    "id": "mojigoi_n4_a_m1_q01",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "あした試験があります。",
    "options": [
      "しけん",
      "じっけん",
      "しつけん",
      "じけん"
    ],
    "correct": 0,
    "explanation": "「試験」は「しけん」と読みます。意味は 'ujian'. 「じっけん」は実験、「じけん」は事件です。",
    "mondai": 1,
    "number": 1,
    "highlight": "試験"
  },
  {
    "id": "mojigoi_n4_a_m1_q02",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "わたしは冬がすきです。",
    "options": [
      "はる",
      "なつ",
      "あき",
      "ふゆ"
    ],
    "correct": 3,
    "explanation": "「冬」は「ふゆ」と読みます。意味は 'musim dingin'. 「はる」は春（musim semi）、「なつ」は夏（musim panas）、「あき」は秋（musim gugur）です。",
    "mondai": 1,
    "number": 2,
    "highlight": "冬"
  },
  {
    "id": "mojigoi_n4_a_m1_q03",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "ここは空気があまりよくないですね。",
    "options": [
      "くき",
      "くうけ",
      "くうき",
      "くんき"
    ],
    "correct": 2,
    "explanation": "「空気」は「くうき」と読みます。意味は 'udara'. 選択肢3が正しい読み方です。",
    "mondai": 1,
    "number": 3,
    "highlight": "空気"
  },
  {
    "id": "mojigoi_n4_a_m1_q04",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "わたしは運転したことがありません。",
    "options": [
      "うんてん",
      "うんでん",
      "うんどう",
      "うんどん"
    ],
    "correct": 0,
    "explanation": "「運転」は「うんてん」と読みます。意味は 'mengemudi'. 「うんどう」は運動（olahraga）です。",
    "mondai": 1,
    "number": 4,
    "highlight": "運転"
  },
  {
    "id": "mojigoi_n4_a_m1_q05",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "もう一度いってください。",
    "options": [
      "いど",
      "いちど",
      "いかい",
      "いっかい"
    ],
    "correct": 1,
    "explanation": "「一度」は「いちど」と読みます。意味は 'sekali'. 「いっかい」は一回（satu kali）です。",
    "mondai": 1,
    "number": 5,
    "highlight": "一度"
  },
  {
    "id": "mojigoi_n4_a_m1_q06",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "ともだちと会って、ごはんを食べます。",
    "options": [
      "まって",
      "あって",
      "たって",
      "おって"
    ],
    "correct": 1,
    "explanation": "「会って」は「あって」と読みます。原形は「会う」（bertemu）。",
    "mondai": 1,
    "number": 6,
    "highlight": "会って"
  },
  {
    "id": "mojigoi_n4_a_m1_q07",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "じこででんしゃが動いていません。",
    "options": [
      "がいして",
      "ひいて",
      "うごいて",
      "はしって"
    ],
    "correct": 2,
    "explanation": "「動いて」は「うごいて」と読みます。原形は「動く」（bergerak/berjalan）。",
    "mondai": 1,
    "number": 7,
    "highlight": "動いて"
  },
  {
    "id": "mojigoi_n4_a_m1_q08",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "あしたのあさはやくおきます。",
    "options": [
      "おそく",
      "おおく",
      "はやく",
      "いそがしく"
    ],
    "correct": 2,
    "explanation": "「早く」は「はやく」と読みます。意味は 'cepat/pagi-pagi'. 对义语は「遅く」（おそく）です。",
    "mondai": 1,
    "number": 8,
    "highlight": "早く"
  },
  {
    "id": "mojigoi_n4_a_m1_q09",
    "level": "N4",
    "section": "Vocabulary",
    "type": "kanji-read",
    "question": "広い家にすんでいます。",
    "options": [
      "ひろい",
      "せまい",
      "あるい",
      "さむい"
    ],
    "correct": 0,
    "explanation": "「広い」は「ひろい」と読みます。意味は 'luas'. 对义语は「狭い」（せまい）です。",
    "mondai": 1,
    "number": 9,
    "highlight": "広い"
  },
  {
    "id": "mojigoi_n4_a_m2_q10",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "おかねがたりないからかえません。",
    "options": [
      "足りない",
      "有りない",
      "少ない",
      "多りない"
    ],
    "correct": 0,
    "explanation": "「たりない」は漢字で「足りない」と書きます。原形は「足りる」（cukup）。",
    "mondai": 2,
    "number": 10,
    "highlight": "たりない"
  },
  {
    "id": "mojigoi_n4_a_m2_q11",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "このことばのいみがわかりません。",
    "options": [
      "以外",
      "意味",
      "意見",
      "理由"
    ],
    "correct": 1,
    "explanation": "「いみ」は漢字で「意味」と書きます。意味は 'arti/makna'. 「意見」はいけん（pendapat）です。",
    "mondai": 2,
    "number": 11,
    "highlight": "いみ"
  },
  {
    "id": "mojigoi_n4_a_m2_q12",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "わたしはにくを食べません。",
    "options": [
      "鳥",
      "牛",
      "肉",
      "魚"
    ],
    "correct": 2,
    "explanation": "「にく」は漢字で「肉」と書きます。意味は 'daging'. 「鳥」はとり、「牛」はうし、「魚」はさかなです。",
    "mondai": 2,
    "number": 12,
    "highlight": "にく"
  },
  {
    "id": "mojigoi_n4_a_m2_q13",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "あるいて会社にいきます。",
    "options": [
      "走って",
      "行って",
      "歩いて",
      "動いて"
    ],
    "correct": 2,
    "explanation": "「あるいて」は漢字で「歩いて」と書きます。意味は 'dengan berjalan kaki'. 原形は「歩く」。",
    "mondai": 2,
    "number": 13,
    "highlight": "あるいて"
  },
  {
    "id": "mojigoi_n4_a_m2_q14",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "ちちはちからがつよいです。",
    "options": [
      "安い",
      "不",
      "強い",
      "弱い"
    ],
    "correct": 2,
    "explanation": "「つよい」は漢字で「強い」と書きます。意味は 'kuat'. 对义语は「弱い」（よわい）です。",
    "mondai": 2,
    "number": 14,
    "highlight": "つよい"
  },
  {
    "id": "mojigoi_n4_a_m2_q15",
    "level": "N4",
    "section": "Vocabulary",
    "type": "orthography",
    "question": "ちずをもっていってください。",
    "options": [
      "地理",
      "地図",
      "地帯",
      "地台"
    ],
    "correct": 1,
    "explanation": "「ちず」は漢字で「地図」と書きます。意味は 'peta'. 「地理」はちり（geografi）です。",
    "mondai": 2,
    "number": 15,
    "highlight": "ちず"
  },
  {
    "id": "mojigoi_n4_a_m3_q16",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "ともだちがびょうきなので、( )にいきました。",
    "options": [
      "お見舞い",
      "おみやげ",
      "お祝い",
      "お祭り"
    ],
    "correct": 0,
    "explanation": "病気や入院している人を見舞うことは「お見舞い（おみまい）」と言います。お祝い（merayakan）、お祭り（festival）。",
    "mondai": 3,
    "number": 16
  },
  {
    "id": "mojigoi_n4_a_m3_q17",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "こんなたくさんのりょうりをひとりで食べるのは( )です。",
    "options": [
      "不便",
      "無理",
      "邪魔",
      "非常"
    ],
    "correct": 1,
    "explanation": "量が多くて一人で食べきれない様子を「無理（むり）= mustahil/memaksakan diri」と言います。",
    "mondai": 3,
    "number": 17
  },
  {
    "id": "mojigoi_n4_a_m3_q18",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "だいがくをそつぎょうしても日本語のべんきょうを( )つもりです。",
    "options": [
      "始める",
      "続ける",
      "届ける",
      "眠る"
    ],
    "correct": 1,
    "explanation": "卒業した後も継続して学習することを表すため、「続ける（つづける）= melanjutkan」が正解です。",
    "mondai": 3,
    "number": 18
  },
  {
    "id": "mojigoi_n4_a_m3_q19",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "もう日本の生活に( )か。",
    "options": [
      "払いました",
      "戻りました",
      "慣れました",
      "降りました"
    ],
    "correct": 2,
    "explanation": "新しい環境に適応することを「生活に慣れる（なれる）= terbiasa dengan kehidupan」と言います。",
    "mondai": 3,
    "number": 19
  },
  {
    "id": "mojigoi_n4_a_m3_q20",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "くるまの( )がありません。",
    "options": [
      "サンダル",
      "カメラ",
      "ガソリン",
      "切符"
    ],
    "correct": 2,
    "explanation": "車を動かすための燃料が必要なため、「ガソリン」が入ります。",
    "mondai": 3,
    "number": 20
  },
  {
    "id": "mojigoi_n4_a_m3_q21",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "たくさん食べて、おなかが( )。",
    "options": [
      "いっぱいです",
      "すきました",
      "こみました",
      "あんしんです"
    ],
    "correct": 0,
    "explanation": "たくさん食べた結果、満腹になることを「お腹がいっぱい = kenyang/penuh」と言います。すきました（lapar）。",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "mojigoi_n4_a_m3_q22",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "( )アルバイトをはじめました。",
    "options": [
      "最近",
      "将来",
      "いつか",
      "いつも"
    ],
    "correct": 0,
    "explanation": "過去に近い出来事を表す「最近（さいきん）= akhir-akhir ini/baru-baru ini」が文脈に最も合います。",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "mojigoi_n4_a_m3_q23",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "せきが( )から、すわりませんか。",
    "options": [
      "済んだ",
      "空いた",
      "動いた",
      "変わった"
    ],
    "correct": 1,
    "explanation": "席に誰も座っていなくて空いている状態を「空く（あく -> 空いた）」と言います。「空いた席に座る」が自然です。",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "mojigoi_n4_a_m3_q24",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "たいふうでたくさんの木が( )。",
    "options": [
      "世話した",
      "過ぎた",
      "倒れた",
      "捕まえた"
    ],
    "correct": 2,
    "explanation": "台風の風などで立っていたものが横倒しになることを「倒れる（たおれる）= tumbang/roboh」と言います。",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "mojigoi_n4_a_m3_q25",
    "level": "N4",
    "section": "Vocabulary",
    "type": "context",
    "question": "やさいを( )きってください。",
    "options": [
      "大きく",
      "悲しく",
      "深く",
      "細かく"
    ],
    "correct": 3,
    "explanation": "料理などの文脈で、野菜を小さく刻むことを「細かく（こまかく）切る」と言います。",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "mojigoi_n4_a_m4_q26",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "ともだちがおみやげをくれました。",
    "options": [
      "わたしはともだちにおみやげを買いました。",
      "わたしはともだちにおみやげをもらいました。",
      "わたしはともだちにおみやげをあげました。",
      "ともだちはわたしにおみやげをもらいました。"
    ],
    "correct": 1,
    "explanation": "「Aが（私に）〜をくれる」は、「私はAに〜をもらう」と同じ意味（menerima dari teman）になります。",
    "mondai": 4,
    "number": 26,
    "highlight": "おみやげをくれました"
  },
  {
    "id": "mojigoi_n4_a_m4_q27",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "オウさんがけっこんすると聞いて、びっくりしました。",
    "options": [
      "オウさんがけっこんすると聞いて、おこりました。",
      "オウさんがけっこんすると聞いて、よろこびました。",
      "オウさんがけっこんすると聞いて、おどろきました。",
      "オウさんがけっこんすると聞いて、しっぱいしました。"
    ],
    "correct": 2,
    "explanation": "「びっくりする」と「おどろく（驚く）= terkejut」はほぼ同義の表現です。",
    "mondai": 4,
    "number": 27,
    "highlight": "びっくりしました"
  },
  {
    "id": "mojigoi_n4_a_m4_q28",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "かとうさんのむすこさんがなくなりました。",
    "options": [
      "かとうさんのむすこさんがみつかったそうです。",
      "かとうさんのむすこさんがうまれたそうです。",
      "かとうさんのむすこさんがしんだそうです。",
      "かとうさんのむすこさんがいないそうです。"
    ],
    "correct": 2,
    "explanation": "人が「亡くなる（なくなる）」ことは「死ぬ（しぬ）= meninggal dunia」の丁寧な表現です。",
    "mondai": 4,
    "number": 28,
    "highlight": "なくなりました"
  },
  {
    "id": "mojigoi_n4_a_m4_q29",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "あしたリーさんにあやまります。",
    "options": [
      "あしたリーさんに「ありがとう」といいます。",
      "あしたリーさんに「ごめんなさい」といいます。",
      "あしたリーさんに「おねがいします」といいます。",
      "あしたリーさんに「おだいに」といいます。"
    ],
    "correct": 1,
    "explanation": "「謝る（あやまる）= meminta maaf」ことは、相手に対して「ごめんなさい」と言うことです。",
    "mondai": 4,
    "number": 29,
    "highlight": "あやまります"
  },
  {
    "id": "mojigoi_n4_a_m4_q30",
    "level": "N4",
    "section": "Vocabulary",
    "type": "paraphrase",
    "question": "やくそくした時間に間に合いませんでした。",
    "options": [
      "やくそくした時間に遅れました。",
      "やくそくした時間より早く着きました。",
      "やくそくした時間に出発しました。",
      "やくそくした時間に連絡しました。"
    ],
    "correct": 0,
    "explanation": "「時間に間に合わない（まにあわない）」は、予定していた時刻に「遅れる（おくれる）= terlambat」という意味です。",
    "mondai": 4,
    "number": 30,
    "highlight": "間に合いませんでした"
  },
  {
    "id": "mojigoi_n4_a_m5_q31",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「ぬる」を正しく使っている文はどれですか。",
    "options": [
      "パソコンを水でぬってしまった。",
      "はがきに切手をぬって出した。",
      "つかれたからちょっとぬりましよ。",
      "へやのかべを赤にぬった。"
    ],
    "correct": 3,
    "explanation": "「塗る（ぬる）= mengecat/mengoleskan」は、表面にペンキなどをつける時に使います。壁を赤に塗るのが正しい使い方です。1は「濡らす」、2は「貼る」、3は「休む」が適切です。",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "mojigoi_n4_a_m5_q32",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「はっきり」を正しく使っている文はどれですか。",
    "options": [
      "窓を開けて空気をはっきりしましょう。",
      "もっとはっきり言ってください。",
      "彼はとてもはっきりな人です。",
      "もうすぐ電車が来るからはっきりしましょう。"
    ],
    "correct": 1,
    "explanation": "「はっきり（dengan jelas）」は明瞭で分かりやすい様子を表します。「もっとはっきり言ってください」が正しいです。",
    "mondai": 5,
    "number": 32
  },
  {
    "id": "mojigoi_n4_a_m5_q33",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「退院」を正しく使っている文はどれですか。",
    "options": [
      "しけんに落ちて大学を退院した。",
      "病気がなおって退院した。",
      "65さいになって会社を退院した。",
      "病院でかみをみじかく退院した。"
    ],
    "correct": 1,
    "explanation": "「退院（たいいん）= keluar dari RS」は病気が治って退院することです。1は「退学」、3は「退職/定年退職」が適切です。",
    "mondai": 5,
    "number": 33
  },
  {
    "id": "mojigoi_n4_a_m5_q34",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「もうすぐ」を正しく使っている文はどれですか。",
    "options": [
      "もうすぐ夏休みだから、予定を立てておこう。",
      "事故です。もうすぐ警察を呼んでください。",
      "急に歯が痛くなったから、もうすぐ歯医者にいった。",
      "けんかしたから彼女に、もうすぐ会いたくない。"
    ],
    "correct": 0,
    "explanation": "「もうすぐ（sebentar lagi）」は未来の近い予定に使います。過去形（3）や否定（4）とは組み合わせません。",
    "mondai": 5,
    "number": 34
  },
  {
    "id": "mojigoi_n4_a_m5_q35",
    "level": "N4",
    "section": "Vocabulary",
    "type": "usage",
    "question": "「用事」を正しく使っている文はどれですか。",
    "options": [
      "用事が悪くて、パーティーにいけませんでした。",
      "用事があって、パーティーにいけませんでした。",
      "用事がなくて、パーティーにいけませんでした。",
      "用事をもらって、パーティーにいけませんでした。"
    ],
    "correct": 1,
    "explanation": "「用事（ようじ）= keperluan」はしなければならない仕事のことで、「用事がある（ada keperluan）」のように使います。",
    "mondai": 5,
    "number": 35
  }
];

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

export const bunpouDokkaiN4C: LegacyQuestion[] = [
  {
    "id": "bunpou_n4_c_q01",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "彼女はピアノ___弾くことができます。",
    "options": [
      "を",
      "が",
      "に",
      "で"
    ],
    "correct": 0,
    "explanation": "正解は「を」です。「ピアノを弾く」はN4の基本的な表現で、楽器を弾く場合には助詞「を」を使います。「が」は能力を表す「弾くことができる」と組み合わせる場合もありますが、「ピアノを弾くことができる」の形が標準的です。",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "bunpou_n4_c_q02",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "日本語___話せるようになりたいです。",
    "options": [
      "が",
      "を",
      "に",
      "で"
    ],
    "correct": 0,
    "explanation": "正解は「が」です。「〜ができる」の可能形では、直接目的語に「が」を使います。「日本語が話せる」(bisa berbicara bahasa Jepang) は可能形の標準的な用法で、「〜ようになりたい」は徐々に変化を望む表現です。",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "bunpou_n4_c_q03",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "子供のとき、木に___ことができました。",
    "options": [
      "登る",
      "登れる",
      "登った",
      "登り"
    ],
    "correct": 1,
    "explanation": "正解は「登れる」です。「〜ことができました」は過去の能力を表します。「木に登れること」(bisa memanjat pohon) という可能形を使うのが自然です。「登る」は辞書形で〜ことができるに接続できますが、ここでは可能形「登れる」がより自然です。",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "bunpou_n4_c_q04",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "この問題は難し___、解けませんでした。",
    "options": [
      "すぎて",
      "すぎながら",
      "すぎでも",
      "すぎたり"
    ],
    "correct": 0,
    "explanation": "正解は「すぎて」です。「難しすぎて」は「あまりにも難しくて」という意味で、その結果として「解けなかった」という因果関係を表します。「〜すぎて〜できない」はN4でよく使われるパターンです。",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "bunpou_n4_c_q05",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "来年、海外に留学___と思っています。",
    "options": [
      "しよう",
      "する",
      "した",
      "して"
    ],
    "correct": 0,
    "explanation": "正解は「しよう」です。「〜しようと思っている」は自分の意図・計画を表す表現です。「しようと思う」(berniat untuk melakukan) はN4の重要な文型です。「する」は辞書形で不自然、「した」は過去形で意味が変わります。",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "bunpou_n4_c_q06",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "もっと早く起きられる___、電車に乗れたのに。",
    "options": [
      "なら",
      "たら",
      "ば",
      "と"
    ],
    "correct": 1,
    "explanation": "正解は「たら」です。「もっと早く起きられたら、電車に乗れたのに」は反事実条件（実際には起きられなかった）を表す「〜たら〜のに」の構造です。この文脈では「たら」が最も自然です。",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "bunpou_n4_c_q07",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "春になる___、桜が咲きます。",
    "options": [
      "と",
      "たら",
      "なら",
      "ば"
    ],
    "correct": 0,
    "explanation": "正解は「と」です。「春になると桜が咲く」は自然現象・習慣的事実を表す「と」条件です。「と」は前件が成立すれば必ず後件が起こる場合に使います。他の条件形もあり得ますが、自然現象には「と」が最も適切です。",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "bunpou_n4_c_q08",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "彼に宿題を手伝って___ました。",
    "options": [
      "もらい",
      "あげ",
      "くれ",
      "やり"
    ],
    "correct": 0,
    "explanation": "正解は「もらい」です。「彼に手伝ってもらった」は「私が彼から助けをもらった」という意味です。主語（私）が恩恵を受けるとき「もらう」を使います。「あげる」は与える側、「くれる」は第三者から話者へ。",
    "mondai": 1,
    "number": 8
  },
  {
    "id": "bunpou_n4_c_q09",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "先生が私に漢字の書き方を教えて___ました。",
    "options": [
      "くれ",
      "もらい",
      "あげ",
      "やり"
    ],
    "correct": 0,
    "explanation": "正解は「くれ」です。「先生が私に教えてくれた」は「先生（第三者）が話者（私）に恩恵を与えた」という意味で「くれる」を使います。「もらう」は主語が受け取る側、「あげる」は主語が与える側です。",
    "mondai": 1,
    "number": 9
  },
  {
    "id": "bunpou_n4_c_q10",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "部長は社員に残業___ました。",
    "options": [
      "させ",
      "した",
      "され",
      "して"
    ],
    "correct": 0,
    "explanation": "正解は「させ」です。「部長は社員に残業させた」は使役形で、「上位の人が下位の人にさせる」という使役の意味です。「〜させる」はN4の使役形の基本パターンです。",
    "mondai": 1,
    "number": 10
  },
  {
    "id": "bunpou_n4_c_q11",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "私は母に野菜を食べ___ました。",
    "options": [
      "させられ",
      "させ",
      "される",
      "させて"
    ],
    "correct": 0,
    "explanation": "正解は「させられ」です。「母に野菜を食べさせられた」は使役受動形で、「自分が望まない行為を誰かにさせられる（強いられる）」ことを表します。話者は嫌々野菜を食べさせられた、というニュアンスです。",
    "mondai": 1,
    "number": 11
  },
  {
    "id": "bunpou_n4_c_q12",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "私の財布が___しまいました。",
    "options": [
      "盗まれて",
      "盗んで",
      "盗ませて",
      "盗もうとして"
    ],
    "correct": 0,
    "explanation": "正解は「盗まれて」です。「財布が盗まれた」は受身形で、話者が被害を受けたことを表します。受身の「〜れる/られる」はN4の重要文法です。「盗んで」は能動形、「盗ませて」は使役、「盗もうとして」は意図の表現です。",
    "mondai": 1,
    "number": 12
  },
  {
    "id": "bunpou_n4_c_q13",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "この橋は100年前に___ました。",
    "options": [
      "建てられ",
      "建て",
      "建てさせ",
      "建てよう"
    ],
    "correct": 0,
    "explanation": "正解は「建てられ」です。「橋は建てられた」は受身形で、客観的な事実（誰かによって建てられた）を表します。この受身形はN4で重要なパターンです。「建て」は不完全、「建てさせ」は使役、「建てよう」は意志形です。",
    "mondai": 1,
    "number": 13
  },
  {
    "id": "bunpou_n4_c_q14",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "お客様、こちらの商品はいかが___でしょうか。",
    "options": [
      "ございます",
      "あります",
      "います",
      "です"
    ],
    "correct": 0,
    "explanation": "正解は「ございます」です。「ございます」は「あります」の謙譲・丁寧語で、接客の場面で使います。「いかがでございましょうか」(bagaimana menurut Anda?) は丁寧なサービス表現です。「あります」「います」「です」はより普通の丁寧語です。",
    "mondai": 1,
    "number": 14
  },
  {
    "id": "bunpou_n4_c_q15",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "本日はお忙しいところ、お越し___ありがとうございます。",
    "options": [
      "いただき",
      "くださり",
      "もらい",
      "あげ"
    ],
    "correct": 1,
    "explanation": "正解は「くださり」です。「お越しくださりありがとうございます」は「来てくださってありがとう」という丁寧な表現で、「くださる」は「くれる」の尊敬語です。「いただき」は「もらう」の謙譲語です。このような接客・ビジネスシーンの表現はN4で重要です。",
    "mondai": 1,
    "number": 15
  },
  {
    "id": "bunpou_n4_c_q16",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "彼女は ＿＿ ＿★＿ ＿＿ ＿＿ らしいです。 [★の位置に入る語を選んでください]\n選択肢: ① 日本語 ② 話せる ③ だけでなく ④ 英語も",
    "options": [
      "話せる",
      "日本語",
      "だけでなく",
      "英語も"
    ],
    "correct": 0,
    "explanation": "正しい語順は「日本語だけでなく英語も話せるらしいです」です。★の位置は「話せる」が入ります。「〜だけでなく〜も」は「不仅〜，还〜」という意味で、N4の重要表現です。正しい語順: ①日本語 ③だけでなく ④英語も ②話せる。",
    "mondai": 2,
    "number": 16
  },
  {
    "id": "bunpou_n4_c_q17",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "田中さんは ＿＿ ＿★＿ ＿＿ ＿＿ 帰りました。 [★の位置に入る語を選んでください]\n選択肢: ① 会議 ② 終わって ③ が ④ から",
    "options": [
      "終わって",
      "が",
      "会議",
      "から"
    ],
    "correct": 0,
    "explanation": "正しい語順は「会議が終わってから帰りました」です。★の位置は「終わって」が入ります。「〜てから〜する」は「setelah〜, melakukan〜」という順序を表す重要表現です。正しい語順: ①会議 ③が ②終わって ④から。",
    "mondai": 2,
    "number": 17
  },
  {
    "id": "bunpou_n4_c_q18",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "先生に ＿＿ ＿★＿ ＿＿ ＿＿ ありがとうございます。 [★の位置に入る語を選んでください]\n選択肢: ① 教えて ② いただき ③ ご丁寧に ④ まして",
    "options": [
      "いただき",
      "ご丁寧に",
      "教えて",
      "まして"
    ],
    "correct": 0,
    "explanation": "正しい語順は「先生にご丁寧に教えていただきましてありがとうございます」です。★の位置は「いただき」が入ります。「〜ていただく」は「もらう」の謙譲語で、目上の人から恩恵を受けたときに使います。正しい語順: ③ご丁寧に ①教えて ②いただき ④まして。",
    "mondai": 2,
    "number": 18
  },
  {
    "id": "bunpou_n4_c_q19",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "彼は ＿＿ ＿★＿ ＿＿ ＿＿ はずです。 [★の位置に入る語を選んでください]\n選択肢: ① もう ② 帰って ③ に ④ 家",
    "options": [
      "帰って",
      "家",
      "に",
      "もう"
    ],
    "correct": 0,
    "explanation": "正しい語順は「彼はもう家に帰っているはずです」です。★の位置は「帰って」が入ります。「〜はず」は根拠に基づく推測を表します。正しい語順: ①もう ④家 ③に ②帰って。",
    "mondai": 2,
    "number": 19
  },
  {
    "id": "bunpou_n4_c_q20",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "彼女に ＿＿ ＿★＿ ＿＿ ＿＿ ました。 [★の位置に入る語を選んでください]\n選択肢: ① 手伝って ② もらい ③ 宿題を ④ に",
    "options": [
      "もらい",
      "手伝って",
      "宿題を",
      "に"
    ],
    "correct": 0,
    "explanation": "正しい語順は「彼女に宿題を手伝ってもらいました」です。★の位置は「もらい」が入ります。「〜てもらう」は「恩恵を受ける」表現です。正しい語順: ③宿題を ①手伝って ②もらい。",
    "mondai": 2,
    "number": 20
  },
  {
    "id": "bunpou_n4_c_q21",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "田中さんは毎朝6時に起きる___にしています。健康のために___ようになりたいと思って、三ヶ月前から始めました。今では、朝起きることが苦になら___なりました。空欄に入る最も適切なものを選んでください。（最初の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g1.mp3",
    "options": [
      "よう",
      "こと",
      "もの",
      "ため"
    ],
    "correct": 0,
    "explanation": "正解は「よう」です。「〜ようにする」は「意識的に〜する習慣をつける」という意味で、N4の重要文型です。「毎朝6時に起きるようにしている」は健康習慣として意識的に行っていることを表します。",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "bunpou_n4_c_q22",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "田中さんは毎朝6時に起きるようにしています。健康のために早起きできる___と思って、三ヶ月前から始めました。今では、朝起きることが苦になら___なりました。空欄に入る最も適切なものを選んでください。（二番目の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g2.mp3",
    "options": [
      "ようになりたい",
      "ようにした",
      "ようになった",
      "ようにしない"
    ],
    "correct": 0,
    "explanation": "正解は「ようになりたい」です。「〜ようになりたい」は「〜できるようになることを望む」という意志・目標を表します。「早起きできるようになりたい」(ingin bisa bangun pagi) という文脈が自然です。",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "bunpou_n4_c_q23",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "田中さんは毎朝6時に起きるようにしています。健康のために早起きできるようになりたいと思って、三ヶ月前から始めました。今では、朝起きることが苦に___なりました。空欄に入る最も適切なものを選んでください。（三番目の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g2.mp3",
    "options": [
      "ならなく",
      "なら",
      "なれなく",
      "ならなかっ"
    ],
    "correct": 0,
    "explanation": "正解は「ならなく」です。「苦にならなくなりました」は「苦ではなくなった」=「もう苦ではない」という変化を表します。「〜なくなる」は否定の変化で、「ならなく」+「なりました」の構造です。",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "bunpou_n4_c_q24",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "鈴木さんは先週、上司に急に残業___ました。彼女は疲れて___まいましたが、仕事だから仕方がないと思いました。次回は事前に___ように話し合いたいと思っています。（最初の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g3.mp3",
    "options": [
      "させられ",
      "させ",
      "され",
      "させて"
    ],
    "correct": 0,
    "explanation": "正解は「させられ」です。「残業させられた」は使役受動形で、「上司に望まない残業を強いられた」という意味です。「させられる」=「forced to do (against one's will)」はN4の重要文型です。",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "bunpou_n4_c_q25",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "鈴木さんは先週、上司に急に残業させられました。彼女は疲れて___まいましたが、仕事だから仕方がないと思いました。次回は事前に___ように話し合いたいと思っています。（二番目の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g4.mp3",
    "options": [
      "し",
      "い",
      "お",
      "き"
    ],
    "correct": 0,
    "explanation": "正解は「し」です。「疲れてしまいました」は「〜てしまう」の過去形で、意図せず疲れてしまったというニュアンスです。「しまう」はN4の重要文型です。",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "bunpou_n4_c_q26",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、正しいものを選んでください。",
    "passage": "山田さんは先月から新しい仕事を始めました。最初は慣れなくて大変でしたが、今はだいぶ慣れてきました。仕事の後は疲れているので、早く寝るようにしています。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q1.mp3",
    "options": [
      "山田さんは新しい仕事に最初から慣れていました。",
      "山田さんは仕事後に早く寝るようにしています。",
      "山田さんは今でも仕事に慣れていません。",
      "山田さんは先月仕事をやめました。"
    ],
    "correct": 1,
    "explanation": "文章に「仕事の後は疲れているので、早く寝るようにしています」と書いてあります。選択肢1は「最初から慣れていた」と書いてありますが、文章では「最初は慣れなくて大変」とあります。選択肢3は誤りで、今は慣れてきています。選択肢4も誤りで、仕事を始めたのであって辞めていません。",
    "mondai": 4,
    "number": 26
  },
  {
    "id": "bunpou_n4_c_q27",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、田中さんはなぜ電車に乗れなかったのですか。",
    "passage": "田中さんは今朝、いつもより少し遅く家を出ました。駅に急いで行きましたが、電車のドアが閉まる直前でした。次の電車を待った結果、会社に10分遅刻してしまいました。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q2.mp3",
    "options": [
      "電車が故障していたから",
      "駅に着いたとき、電車のドアがちょうど閉まったから",
      "電車の時刻が変わったから",
      "駅の場所が分からなかったから"
    ],
    "correct": 1,
    "explanation": "文章に「駅に急いで行きましたが、電車のドアが閉まる直前でした」とあります。田中さんは電車に乗れなかった理由は、駅に着いたときにちょうどドアが閉まる寸前だったからです。電車の故障や時刻変更、道に迷ったとは書いてありません。",
    "mondai": 4,
    "number": 27
  },
  {
    "id": "bunpou_n4_c_q28",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、このお知らせの内容として正しいものを選んでください。",
    "passage": "図書館からのお知らせ：来週月曜日（6月3日）は館内清掃のため、図書館は終日休館します。ご不便をおかけしますが、ご理解をよろしくお願いします。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q3.mp3",
    "options": [
      "図書館は6月3日の午前中だけ休みです。",
      "図書館は6月3日、一日中休みです。",
      "図書館は来週の全ての日が休みです。",
      "図書館の清掃は6月4日に行われます。"
    ],
    "correct": 1,
    "explanation": "お知らせに「6月3日は館内清掃のため、図書館は終日休館します」とあります。「終日」は一日中という意味です。選択肢1の「午前中だけ」は誤りです。「来週の全ての日」でもなく、清掃が6月4日というわけでもありません。",
    "mondai": 4,
    "number": 28
  },
  {
    "id": "bunpou_n4_c_q29",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、鈴木さんは今どういう状態ですか。",
    "passage": "鈴木さんは先週から風邪をひいていましたが、昨日やっと熱が下がりました。でも、まだ咳が少し残っているので、今日も念のため会社を休みました。明日からは仕事に戻る予定です。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q4.mp3",
    "options": [
      "熱が高くてとても苦しい状態です。",
      "熱は下がったが、まだ咳があります。",
      "完全に回復していて、今日も仕事をしています。",
      "明日も仕事を休む予定です。"
    ],
    "correct": 1,
    "explanation": "文章に「昨日やっと熱が下がりました。でも、まだ咳が少し残っている」とあります。熱は下がりましたが、咳がまだあります。今日は会社を休んでいますが（選択肢3は誤り）、明日からは仕事に戻る予定です（選択肢4は誤り）。",
    "mondai": 4,
    "number": 29
  },
  {
    "id": "bunpou_n4_c_q30",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "この文章を読んで、田中さんが日本語を勉強し続けている最大の理由は何ですか。",
    "passage": "田中さんはインドネシア出身で、日本語を勉強して5年になります。最初は文法が難しくて何度も諦めそうになりました。しかし、日本のアニメや映画が大好きで、字幕なしで楽しみたいという夢がありました。その夢のために諦めずに勉強を続けた結果、今では日本人との会話もある程度できるようになりました。田中さんは「言語の勉強に近道はない。毎日少しずつ続けることが一番大切」と言っています。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m5.mp3",
    "options": [
      "日本に留学するため",
      "字幕なしで日本のアニメや映画を楽しみたいため",
      "日本語の先生になるため",
      "日本人の友人を作るため"
    ],
    "correct": 1,
    "explanation": "文章に「日本のアニメや映画が大好きで、字幕なしで楽しみたいという夢がありました。その夢のために諦めずに勉強を続けた」とあります。これが田中さんが日本語を続けた最大の理由です。留学、先生になること、友人を作ることについては書いてありません。",
    "mondai": 5,
    "number": 30
  },
  {
    "id": "bunpou_n4_c_q31",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "このメールを読んで、佐藤さんは山田さんに何を伝えていますか。",
    "passage": "山田様\n\nお疲れ様です。佐藤です。来週月曜日の会議についてご連絡します。当初の予定では午後2時からでしたが、部長の都合により午前10時に変更となりました。場所は第2会議室のままです。\n\nお手数ですが、スケジュールのご確認をお願いいたします。ご不明な点があれば、ご連絡ください。\n\n佐藤",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m5.mp3",
    "options": [
      "会議が来週からキャンセルになったこと",
      "会議の時刻が午後2時から午前10時に変わったこと",
      "会議の場所が第1会議室に変わったこと",
      "部長が会議に参加できないこと"
    ],
    "correct": 1,
    "explanation": "メールに「当初の予定では午後2時からでしたが、部長の都合により午前10時に変更となりました」とあります。会議の時刻変更が主な内容です。会議はキャンセルではなく（選択肢1は誤り）、場所は第2会議室のまま（選択肢3は誤り）、部長が参加できないとは書いていません（選択肢4は誤り）。",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "bunpou_n4_c_q32",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "この資料を読んで、アルバイトをすぐに始められる人はどれですか。",
    "passage": "【求人情報】\n職種：レストランスタッフ（ホール・キッチン）\n勤務地：渋谷区〇〇\n時給：ホール 1,050円 / キッチン 1,100円\n\n【応募資格】\n・18歳以上（高校生不可）\n・週3日以上勤務できる方\n・日本語での基本的なコミュニケーションができる方\n・経験不問（研修あり）\n\n【勤務時間】\nランチ：11:00〜15:00\nディナー：17:00〜22:00\n（シフト制・週3日〜）\n\n【待遇】\n・交通費全額支給\n・賄い食あり\n・昇給あり（3ヶ月ごとに査定）\n\n※応募はお電話またはメールにて承ります。",
    "options": [
      "17歳の高校生で週4日働ける人",
      "20歳の大学生で週3日働けて日本語での会話ができる人",
      "22歳で週1日しか働けない人",
      "18歳の高校生で週5日働ける人"
    ],
    "correct": 1,
    "explanation": "応募資格は①18歳以上（高校生不可）、②週3日以上、③日本語コミュニケーション可です。選択肢2の「20歳の大学生で週3日、日本語会話可」はすべての条件を満たします。選択肢1は17歳で高校生なので不可。選択肢3は週1日のみで条件未満。選択肢4は18歳でも高校生は不可。",
    "mondai": 6,
    "number": 32
  }
];

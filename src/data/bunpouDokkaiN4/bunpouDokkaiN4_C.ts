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
    "question": "試験に合格した___、もっと喜んでもよかったのに。",
    "options": [
      "のに",
      "ので",
      "から",
      "が"
    ],
    "correct": 0,
    "explanation": "正解は「のに」です。「試験に合格したのに、もっと喜んでよかったのに」という文は、期待と現実のギャップを表す「のに」の用法です。「のに」は「〜であるにもかかわらず」という逆接の意味を持ちます。",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "bunpou_n4_c_q02",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "雨が降っている___、試合は中止になりました。",
    "options": [
      "ので",
      "のに",
      "から",
      "が"
    ],
    "correct": 0,
    "explanation": "正解は「ので」です。「雨が降っているので試合は中止になった」は原因・理由を表す「ので」の用法です。「ので」は客観的な理由を丁寧に述べるときに使います。「から」も理由を表しますが、「ので」の方がより丁寧な印象です。",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "bunpou_n4_c_q03",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "映画を見る___が大好きです。",
    "options": [
      "こと",
      "の",
      "もの",
      "ため"
    ],
    "correct": 0,
    "explanation": "正解は「こと」です。「映画を見ることが大好き」はN4の名詞化「こと」の用法です。動詞を名詞化する「こと」は「〜が好き」「〜が大切」などの文に頻繁に使われます。「の」も使えますが、「こと」がより標準的です。",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "bunpou_n4_c_q04",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "彼が怒っている___が分かりました。",
    "options": [
      "の",
      "こと",
      "もの",
      "ため"
    ],
    "correct": 0,
    "explanation": "正解は「の」です。「〜のが分かる」は知覚・認識を表す「の」の名詞化用法です。「彼が怒っているのが分かった」は感覚的・直接的な認識を表します。「こと」も使えますが、「分かる」「見える」「聞こえる」のような知覚動詞との相性は「の」が自然です。",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "bunpou_n4_c_q05",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "毎朝ジョギングをする___にしています。",
    "options": [
      "よう",
      "こと",
      "つもり",
      "はず"
    ],
    "correct": 0,
    "explanation": "正解は「よう」です。「〜ようにしている」は「習慣として意識的に〜するようにしている」という意味で、N4の重要表現です。「毎朝ジョギングをするようにしている」(saya biasakan untuk joging setiap pagi) は努力・心がけを表します。",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "bunpou_n4_c_q06",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "財布を忘れて___、コンビニで買い物ができませんでした。",
    "options": [
      "しまって",
      "みて",
      "おいて",
      "いて"
    ],
    "correct": 0,
    "explanation": "正解は「しまって」です。「財布を忘れてしまって」は「〜てしまう」の形で、失敗・後悔を表します。「しまう」は意図しない結果や残念な気持ちを表すN4の重要文型です。",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "bunpou_n4_c_q07",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "新しいレストランに食べに行って___ください。",
    "options": [
      "み",
      "おき",
      "しまい",
      "い"
    ],
    "correct": 0,
    "explanation": "正解は「み」です。「食べに行ってみてください」は「試しに〜する」という「〜てみる」の表現で、N4の重要文型です。「おく」は準備として行う、「しまう」は完了や後悔、「いる」は継続を表します。",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "bunpou_n4_c_q08",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "日本語が上手になる___に、毎日練習します。",
    "options": [
      "よう",
      "ため",
      "こと",
      "の"
    ],
    "correct": 0,
    "explanation": "正解は「よう」です。「上手になるように、毎日練習する」は目的・目標を表す「〜ように」の用法です。「ために」も目的を表しますが、「ように」は能力・変化の達成を目指す文脈でより自然です。",
    "mondai": 1,
    "number": 8
  },
  {
    "id": "bunpou_n4_c_q09",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "もし時間があれば、美術館に行って___ですか。",
    "options": [
      "みませんか",
      "みましょう",
      "みました",
      "みます"
    ],
    "correct": 0,
    "explanation": "正解は「みませんか」です。「〜てみませんか」は相手を誘う丁寧な表現です。「美術館に行ってみませんか」(mau tidak mencoba pergi ke museum?) は誘いの表現として自然です。「みましょう」は一緒にしましょうという提案、「みました」は過去形です。",
    "mondai": 1,
    "number": 9
  },
  {
    "id": "bunpou_n4_c_q10",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "彼は日本語___もちろん、英語も話せます。",
    "options": [
      "は",
      "が",
      "を",
      "に"
    ],
    "correct": 0,
    "explanation": "正解は「は」です。「日本語はもちろん、英語も」は「日本語はもちろんのこと、英語も」という表現の省略形です。「Aはもちろん、Bも〜」はN4レベルの重要表現で、「Aはもちろん」は'A sudah jelas/tentu saja' を意味します。",
    "mondai": 1,
    "number": 10
  },
  {
    "id": "bunpou_n4_c_q11",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "この本は子供___読めるほど簡単です。",
    "options": [
      "でも",
      "だけ",
      "しか",
      "まで"
    ],
    "correct": 0,
    "explanation": "正解は「でも」です。「子供でも読めるほど簡単だ」は「子供でさえ読めるくらい簡単だ」という意味で、「でも」は最低条件を表す用法です。「だけ」は限定、「しか〜ない」は唯一性、「まで」は程度・到達点です。",
    "mondai": 1,
    "number": 11
  },
  {
    "id": "bunpou_n4_c_q12",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "体の具合が悪い___、会社を休んでもいいですよ。",
    "options": [
      "なら",
      "たら",
      "と",
      "ば"
    ],
    "correct": 0,
    "explanation": "正解は「なら」です。「体の具合が悪いなら、休んでもいい」は状況・条件に基づいたアドバイスを表す「なら」の用法です。「なら」は「もしその状況だとしたら」というニュアンスで使います。",
    "mondai": 1,
    "number": 12
  },
  {
    "id": "bunpou_n4_c_q13",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "もっとゆっくり話して___ば、聞き取れるのに。",
    "options": [
      "くれれ",
      "もらえれ",
      "あげれ",
      "くれたら"
    ],
    "correct": 0,
    "explanation": "正解は「くれれ」です。「話してくれれば」は「話す」＋「くれる」の仮定形「〜てくれれば」で、相手に恩恵を期待する表現です。「もっとゆっくり話してくれれば聞き取れるのに」は反事実・願望を表します。",
    "mondai": 1,
    "number": 13
  },
  {
    "id": "bunpou_n4_c_q14",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "私は弟___部屋の掃除をさせました。",
    "options": [
      "に",
      "を",
      "が",
      "で"
    ],
    "correct": 0,
    "explanation": "正解は「に」です。「弟に掃除をさせた」は使役形で、使役の対象（させられる人）には「に」を使います。「弟を掃除させた」も文法的に許容されますが、一般的には「に」が標準です。",
    "mondai": 1,
    "number": 14
  },
  {
    "id": "bunpou_n4_c_q15",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "先生に作文を直して___ました。",
    "options": [
      "いただき",
      "くれ",
      "あげ",
      "もらい"
    ],
    "correct": 0,
    "explanation": "正解は「いただき」です。「先生に直していただいた」は「もらう」の謙譲語「いただく」を使って、目上の人（先生）から恩恵を受けたことを丁寧に表します。「もらい」も正しいですが、先生に対しては「いただく」がより適切です。",
    "mondai": 1,
    "number": 15
  },
  {
    "id": "bunpou_n4_c_q16",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "この薬は ＿＿ ＿★＿ ＿＿ ＿＿ ください。 [★の位置に入る語を選んでください]\n選択肢: ① 食後 ② 飲んで ③ に ④ 必ず",
    "options": [
      "飲んで",
      "食後",
      "に",
      "必ず"
    ],
    "correct": 0,
    "explanation": "正しい語順は「この薬は必ず食後に飲んでください」です。★の位置は「飲んで」が入ります。「食後に飲む」は医薬の服用指示でよく使われる表現です。正しい語順: ④必ず ①食後 ③に ②飲んで。",
    "mondai": 2,
    "number": 16
  },
  {
    "id": "bunpou_n4_c_q17",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "彼は ＿＿ ＿★＿ ＿＿ ＿＿ ようです。 [★の位置に入る語を選んでください]\n選択肢: ① 仕事 ② に ③ 疲れて ④ いる",
    "options": [
      "疲れて",
      "仕事",
      "に",
      "いる"
    ],
    "correct": 0,
    "explanation": "正しい語順は「彼は仕事に疲れているようです」です。★の位置は「疲れて」が入ります。「〜ているようだ」は外見・様子からの推測を表します。正しい語順: ①仕事 ②に ③疲れて ④いる。",
    "mondai": 2,
    "number": 17
  },
  {
    "id": "bunpou_n4_c_q18",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "もし ＿＿ ＿★＿ ＿＿ ＿＿ のに。 [★の位置に入る語を選んでください]\n選択肢: ① たら ② もっと ③ 勉強 ④ 合格した",
    "options": [
      "合格した",
      "もっと",
      "勉強",
      "たら"
    ],
    "correct": 0,
    "explanation": "正しい語順は「もしもっと勉強したら合格したのに」です。★の位置は「合格した」が入ります。「〜たら〜のに」は反事実の後悔を表すN4表現です。正しい語順: ②もっと ③勉強 ④したら ①合格した。",
    "mondai": 2,
    "number": 18
  },
  {
    "id": "bunpou_n4_c_q19",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "子供を ＿＿ ＿★＿ ＿＿ ＿＿ しまいました。 [★の位置に入る語を選んでください]\n選択肢: ① 泣かせて ② 親 ③ が ④ 一人で",
    "options": [
      "泣かせて",
      "一人で",
      "親",
      "が"
    ],
    "correct": 0,
    "explanation": "正しい語順は「親が子供を一人で泣かせてしまいました」です。★の位置は「泣かせて」が入ります。「〜させてしまう」は使役と「てしまう」の組み合わせで、意図せず（または残念なことに）させてしまったことを表します。正しい語順: ②親 ④が ④一人で ①泣かせて。",
    "mondai": 2,
    "number": 19
  },
  {
    "id": "bunpou_n4_c_q20",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "この会社では ＿＿ ＿★＿ ＿＿ ＿＿ います。 [★の位置に入る語を選んでください]\n選択肢: ① 英語 ② が ③ 使われて ④ よく",
    "options": [
      "使われて",
      "英語",
      "が",
      "よく"
    ],
    "correct": 0,
    "explanation": "正しい語順は「この会社では英語がよく使われています」です。★の位置は「使われて」が入ります。「〜が使われる」は受身形で、「英語がよく使われる」は自然な受身表現です。正しい語順: ①英語 ②が ④よく ③使われて。",
    "mondai": 2,
    "number": 20
  },
  {
    "id": "bunpou_n4_c_q21",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "鈴木さんは先週、上司に急に残業させられました。彼女は疲れてしまいましたが、仕事だから仕方がないと思いました。次回は事前に___ように話し合いたいと思っています。（三番目の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g1.mp3",
    "options": [
      "連絡してもらえる",
      "連絡する",
      "連絡される",
      "連絡させる"
    ],
    "correct": 0,
    "explanation": "正解は「連絡してもらえる」です。「連絡してもらえるように話し合いたい」は「上司に連絡してもらいたい」という希望を表します。「〜てもらえる」はお願い・依頼のニュアンスを含んだ「もらう」の可能形です。",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "bunpou_n4_c_q22",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "日本語を勉強し始めた頃、発音が難し___、全然うまく話せませんでした。でも毎日練習___おかげで、少しずつ話せる___なりました。（最初の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g2.mp3",
    "options": [
      "すぎて",
      "すぎれば",
      "すぎれど",
      "すぎても"
    ],
    "correct": 0,
    "explanation": "正解は「すぎて」です。「難しすぎて全然話せなかった」は「〜すぎて〜できない」の因果関係を表します。「すぎて」は程度が過剰で、結果として良くないことが起きることを表します。",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "bunpou_n4_c_q23",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "日本語を勉強し始めた頃、発音が難しすぎて、全然うまく話せませんでした。でも毎日練習した___で、少しずつ話せるようになりました。（空欄に入るものを選んでください）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g3.mp3",
    "options": [
      "おかげ",
      "せい",
      "ため",
      "こと"
    ],
    "correct": 0,
    "explanation": "正解は「おかげ」です。「練習したおかげで話せるようになった」は「〜おかげで」(berkat〜) の用法で、肯定的な結果の原因を表します。「せいで」は否定的な原因、「ため」は目的や理由、「こと」は名詞化です。",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "bunpou_n4_c_q24",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "日本語を勉強し始めた頃、発音が難しすぎて、全然うまく話せませんでした。でも毎日練習したおかげで、少しずつ話せる___なりました。（空欄に入るものを選んでください）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g3.mp3",
    "options": [
      "ように",
      "ため",
      "こと",
      "はず"
    ],
    "correct": 0,
    "explanation": "正解は「ように」です。「話せるようになりました」は「〜ようになる」の形で、能力・状態の変化を表します。「話せる」は可能形で、「〜ようになる」と組み合わさって「できるようになった」という意味になります。",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "bunpou_n4_c_q25",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "山田さんは昨日、財布を___しまいました。お金が___ので、友達に借りることにしました。もし明日___、すぐに返すつもりです。（最初の空欄）",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m3_g4.mp3",
    "options": [
      "なくして",
      "なくした",
      "なくする",
      "なくしれ"
    ],
    "correct": 0,
    "explanation": "正解は「なくして」です。「財布をなくしてしまいました」は「〜てしまう」の形で、意図せず財布を失った後悔のニュアンスを表します。「なくして」はて形で「しまいました」に接続します。",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "bunpou_n4_c_q26",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、このメールの目的は何ですか。",
    "passage": "山本様、先日はお世話になりました。おかげさまで、プロジェクトが無事に終了することができました。今後ともよろしくお願いいたします。田中太郎",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q1.mp3",
    "options": [
      "会議の日時を確認するため",
      "プロジェクト完了の報告とお礼のため",
      "新しいプロジェクトを提案するため",
      "休暇を申請するため"
    ],
    "correct": 1,
    "explanation": "このメールには「プロジェクトが無事に終了することができました」とあり、「おかげさまで」という感謝の表現も使われています。つまり、プロジェクト完了の報告とお礼が目的です。会議の確認、新提案、休暇申請の内容は書かれていません。",
    "mondai": 4,
    "number": 26
  },
  {
    "id": "bunpou_n4_c_q27",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この広告を読んで、正しいものを選んでください。",
    "passage": "【スポーツジム会員募集】初月会費無料！2名以上でのご入会で、さらに2ヶ月目も半額になります。申し込みは今月末まで。詳細はウェブサイトをご覧ください。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q2.mp3",
    "options": [
      "一人で入会すると2ヶ月間無料です。",
      "2人以上で入会すると、2ヶ月目が半額になります。",
      "申し込みの締め切りは来月末です。",
      "詳細は電話で確認できます。"
    ],
    "correct": 1,
    "explanation": "広告に「2名以上でのご入会で、さらに2ヶ月目も半額になります」と書いてあります。選択肢1の「一人で2ヶ月間無料」は誤り（一人では1ヶ月目のみ無料）。申し込みは「今月末まで」で来月末ではありません。詳細はウェブサイトで確認します。",
    "mondai": 4,
    "number": 27
  },
  {
    "id": "bunpou_n4_c_q28",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、内容に合っているものを選んでください。",
    "passage": "この地域では毎年夏に祭りが行われます。今年は例年より規模を大きくして、3日間開催される予定です。昨年は2日間でしたが、来場者が非常に多く大好評でした。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q3.mp3",
    "options": [
      "今年の祭りは2日間開催されます。",
      "昨年の祭りは来場者が多く評判が良かったです。",
      "この地域では毎年冬に祭りが行われます。",
      "今年の祭りは規模が縮小されます。"
    ],
    "correct": 1,
    "explanation": "文章に「昨年は2日間でしたが、来場者が非常に多く大好評でした」とあります。今年は3日間（選択肢1は誤り）、夏に開催（選択肢3は誤り）、規模は大きくなっています（選択肢4は誤り）。",
    "mondai": 4,
    "number": 28
  },
  {
    "id": "bunpou_n4_c_q29",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この文章を読んで、旅行プランについて正しいものを選んでください。",
    "passage": "来月の旅行では、初日に京都の寺院を見学し、2日目に大阪の食べ歩きを楽しむ予定です。3日目は自由行動にして、各自好きな場所を訪れることにしました。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m4_q4.mp3",
    "options": [
      "初日に大阪の食べ歩きをします。",
      "3日目は自由に行動できます。",
      "旅行は2日間の予定です。",
      "2日目に京都の寺院を見学します。"
    ],
    "correct": 1,
    "explanation": "文章に「3日目は自由行動にして、各自好きな場所を訪れることにしました」とあります。初日は京都の寺院（選択肢1は誤り）、2日目は大阪（選択肢4は誤り）、旅行は3日間（選択肢3は誤り）です。",
    "mondai": 4,
    "number": 29
  },
  {
    "id": "bunpou_n4_c_q30",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "この文章を読んで、日本の食文化についての内容として正しいものを選んでください。",
    "passage": "日本の食文化はとても多様です。和食は2013年にユネスコの無形文化遺産に登録されました。ご飯、みそ汁、おかずという基本形は今も続いていますが、若い世代を中心に洋食や中華料理も日常的に食べられています。また、コンビニエンスストアの普及により、手軽に様々な食品が購入できるようになりました。食事の形態も家族揃って食べる「共食」から一人で食べる「孤食」へと変化しつつある点も指摘されています。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m5.mp3",
    "options": [
      "和食は2015年にユネスコに登録されました。",
      "現代の若者は和食だけを食べています。",
      "コンビニの普及で、様々な食品が手軽に買えるようになりました。",
      "日本人は全員、毎日家族で食事をしています。"
    ],
    "correct": 2,
    "explanation": "文章に「コンビニエンスストアの普及により、手軽に様々な食品が購入できるようになりました」とあります。和食は2013年登録（選択肢1の2015年は誤り）。若者は洋食や中華も食べる（選択肢2は誤り）。孤食への変化も指摘されている（選択肢4は誤り）。",
    "mondai": 5,
    "number": 30
  },
  {
    "id": "bunpou_n4_c_q31",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "この案内を読んで、このイベントに参加できる人はどれですか。",
    "passage": "【日本語スピーチコンテスト開催のお知らせ】\n対象：日本語を学んでいる外国人の方（大学生または社会人）\n参加条件：日本語能力試験N4以上の取得者、または同等レベルの方\nスピーチ時間：5分〜7分\n テーマ：「私の国の文化」\n申し込み締め切り：今月25日\n\n参加希望の方は事務局までメールにてご連絡ください。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_c_m5.mp3",
    "options": [
      "日本語を学んでいる日本人の大学生",
      "日本語能力試験N5を持つ外国人の社会人",
      "日本語能力試験N3を持つ外国人の大学生",
      "日本語を勉強したことがない外国人"
    ],
    "correct": 2,
    "explanation": "対象は「日本語を学んでいる外国人の方（大学生または社会人）」で、条件は「N4以上の取得者または同等レベル」です。N3はN4以上なので条件を満たし、外国人の大学生なので参加できます。日本人は対象外（選択肢1）。N5はN4未満なので参加不可（選択肢2）。日本語を勉強したことがない人は対象外（選択肢4）。",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "bunpou_n4_c_q32",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "このメールを読んで、受取人はどのような行動を取るべきですか。",
    "passage": "件名：研修参加の確認について\n\n鈴木様\n\nお疲れ様です。人事部の山田です。\n来週月曜日（5月12日）に予定している新入社員研修について、ご参加の確認をお願いしております。\n\n研修詳細：\n日時：5月12日（月）9:00〜17:00\n場所：本社5階研修室\n持参物：筆記用具、身分証明書\n\n参加できる場合は返信不要です。参加が難しい場合は、5月9日（金）17時までに本メールへご返信ください。\n\nよろしくお願いいたします。\n人事部 山田",
    "options": [
      "研修に参加できる場合、すぐに返信する",
      "研修に参加できない場合、5月9日17時までに返信する",
      "持参物について、電話で確認する",
      "研修の場所について、メールで質問する"
    ],
    "correct": 1,
    "explanation": "メールに「参加できる場合は返信不要です。参加が難しい場合は、5月9日（金）17時までに本メールへご返信ください」とあります。参加できるなら返信不要（選択肢1は誤り）。持参物（筆記用具・身分証）と場所（本社5階研修室）はすでに明記されている（選択肢3・4は不要）。",
    "mondai": 6,
    "number": 32
  }
];

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

export const bunpouDokkaiN4B: LegacyQuestion[] = [
  {
    "id": "bunpou_n4_b_q01",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "外で、変な音（　　）しますよ。ちょっと見てきてください。",
    "options": [
      "が",
      "を",
      "に",
      "で"
    ],
    "correct": 0,
    "explanation": "Pola kata kerja 「〜がする」 digunakan untuk menyatakan adanya suara, bau, atau rasa (変な音がする).",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "bunpou_n4_b_q02",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「あしたアルバイトは何時に終わりますか。」\nB「たぶん、7時（　　）終わると思います。」",
    "options": [
      "まで",
      "までに",
      "から",
      "を"
    ],
    "correct": 1,
    "explanation": "Pola 〜までに (paling lambat sebelum...) digunakan untuk tindakan titik akhir (selesai) yang harus terlaksana sebelum batas waktu tertentu.",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "bunpou_n4_b_q03",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「山下さんは来月、引っ越しする（　　）ですよ。」\nB「あ、その話、わたしも聞きました。本当なんですか。」",
    "options": [
      "つもりだ",
      "ようと",
      "ばかり",
      "らしい"
    ],
    "correct": 3,
    "explanation": "Pola 〜らしい (katanya/sepertinya...) digunakan untuk menyampaikan kabar atau perkiraan berdasarkan informasi yang didengar dari orang lain.",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "bunpou_n4_b_q04",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「さっき冷蔵庫に入れて（　　）ビールはもう冷えていますか。」\nB「いいえ、まだです。」",
    "options": [
      "おいた",
      "いる",
      "きた",
      "しまった"
    ],
    "correct": 0,
    "explanation": "Pola 〜ておく (melakukan persiapan...) diubah ke bentuk lampau menjadi 〜ておいた (telah dipersiapkan).",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "bunpou_n4_b_q05",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "となりの部屋からテレビの音が聞こえる。だれかいる（　　）。",
    "options": [
      "ようだ",
      "はずだ",
      "わけだ",
      "ものだ"
    ],
    "correct": 0,
    "explanation": "Pola 〜ようだ (sepertinya/kelihatannya...) digunakan untuk menduga situasi berdasarkan indra pendengaran atau penglihatan (mendengar suara TV, menduga ada orang).",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "bunpou_n4_b_q06",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "わたしが病気のとき、友だちに薬を買ってきて（　　）。",
    "options": [
      "あげた",
      "くれた",
      "やった",
      "もらった"
    ],
    "correct": 3,
    "explanation": "Pola 〜てもらう (menerima kebaikan dari orang lain) digunakan karena pembicara (saya) menerima tindakan membelikan obat dari teman.",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "bunpou_n4_b_q07",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "息子は学校から帰ってくると、宿題も（　　）ずに、遊びに行ってしまった。",
    "options": [
      "し",
      "しない",
      "せ",
      "する"
    ],
    "correct": 2,
    "explanation": "Pola 〜ずに (tanpa...) berpasangan dengan bentuk Nai tanpa nai. Khusus kata kerja する berubah menjadi 「せず」 (せずに).",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "bunpou_n4_b_q08",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "事故があったので、いま、その道は（　　）よ。",
    "options": [
      "通りません",
      "通れません",
      "通るはずがありません",
      "通られません"
    ],
    "correct": 1,
    "explanation": "Kata kerja potential bentuk negatif 「通れない（通れません）」 (tidak bisa lewat/dilalui) karena ada kecelakaan.",
    "mondai": 1,
    "number": 8
  },
  {
    "id": "bunpou_n4_b_q09",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "おなかがいっぱいなら、全部（　　）もかまいませんよ。",
    "options": [
      "食べても",
      "食べずに",
      "食べなくても",
      "食べないで"
    ],
    "correct": 2,
    "explanation": "Pola 〜なくてもかまわない (tidak ... pun tidak apa-apa/boleh tidak ...) untuk kata kerja 食べる adalah 食べなくてもかまいません.",
    "mondai": 1,
    "number": 9
  },
  {
    "id": "bunpou_n4_b_q10",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "母が新しいパソコンを（　　）たがっているので、いっしょに電気屋に行くつもりです。",
    "options": [
      "買いたい",
      "買った",
      "買わ",
      "買い"
    ],
    "correct": 3,
    "explanation": "Pola 〜たがる (ingin - untuk pihak ketiga) dilekatkan pada bentuk Masu-stem (tanpa masu). Kata kerja 買います diubah menjadi 買い + たがる.",
    "mondai": 1,
    "number": 10
  },
  {
    "id": "bunpou_n4_b_q11",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「このペンは（　　）ですよ。どうぞ使ってみてください。」\nB「あ、いいペンですね。」",
    "options": [
      "書きやすい",
      "書きにくい",
      "書くらしい",
      "書くみたい"
    ],
    "correct": 0,
    "explanation": "Pola 〜やすい (mudah untuk...) dilekatkan pada bentuk Masu-stem. 書きやすい berarti mudah ditulis/enak dipakai menulis.",
    "mondai": 1,
    "number": 11
  },
  {
    "id": "bunpou_n4_b_q12",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "あしたは（　　）ので、ハイキングに行きましょう。",
    "options": [
      "休みだ",
      "休みな",
      "休み",
      "休んで"
    ],
    "correct": 1,
    "explanation": "Pola 〜ので (karena...) yang dilekatkan pada kata benda (休む -> kata benda: 休み) memerlukan penyambung 「な」 (休みなので).",
    "mondai": 1,
    "number": 12
  },
  {
    "id": "bunpou_n4_b_q13",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「どうしたんですか。具合が悪そうですね。」\nB「ええ、窓を（　　）寝てしまって、かぜをひいてしまったんです。」",
    "options": [
      "開けっぱなし",
      "開けたきり",
      "開けたまま",
      "開けるだけ"
    ],
    "correct": 2,
    "explanation": "Pola 〜たまま (dalam kondisi ... tetap/dibiarkan) digunakan untuk menyatakan tidur dalam keadaan jendela tetap terbuka.",
    "mondai": 1,
    "number": 13
  },
  {
    "id": "bunpou_n4_b_q14",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「今日中にこれをとどけてもらえますか。」\n係員「はい、お好きな時間にお（　　）します。」",
    "options": [
      "とどけ",
      "とどける",
      "とどけて",
      "とどけられ"
    ],
    "correct": 0,
    "explanation": "Bentuk sopan merendahkan diri (kenjougo) adalah お + Masu-stem + する. Untuk とどけます menjadi おとどけします.",
    "mondai": 1,
    "number": 14
  },
  {
    "id": "bunpou_n4_b_q15",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "頭が痛くて熱もあるので、わたしは今日の会議には（　　）。",
    "options": [
      "出られそうもない",
      "出ないらしい",
      "出かけなければならない",
      "出たがらない"
    ],
    "correct": 0,
    "explanation": "Pola 〜そうもない / 〜そうにない (sepertinya tidak mungkin...) dikombinasikan dengan bentuk potensial 出られる -> 出られそうもない (sepertinya saya tidak bisa hadir).",
    "mondai": 1,
    "number": 15
  },
  {
    "id": "bunpou_n4_b_q16",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "きょうは、 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ 。",
    "options": [
      "おなかが",
      "痛くて",
      "何も",
      "食べられない"
    ],
    "correct": 2,
    "explanation": "Urutan yang benar: きょうは、[おなかが (0)] [痛くて (1)] [★何も (2)] [食べられない (3)]。Arti: 'Hari ini, karena perut saya sakit, saya tidak bisa makan apa-apa'.",
    "mondai": 2,
    "number": 16
  },
  {
    "id": "bunpou_n4_b_q17",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "よく聞こえません。もういちど、 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ いただけませんか。",
    "options": [
      "大きな",
      "言って",
      "もっと",
      "声で"
    ],
    "correct": 3,
    "explanation": "Urutan yang benar: [もっと (2)] [大きな (0)] [★声で (3)] [言って (1)] いただけませんか。Arti: 'Bisa minta tolong diucapkan sekali lagi dengan suara yang lebih keras?'",
    "mondai": 2,
    "number": 17
  },
  {
    "id": "bunpou_n4_b_q18",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "わたしが ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ ときでした。",
    "options": [
      "のは",
      "ギターを",
      "習い",
      "はじめた"
    ],
    "correct": 3,
    "explanation": "Urutan yang benar: [ギターを (1)] [習い (2)] [★はじめた (3)] [のは (0)] 10歳のときでした。Arti: 'Saat saya mulai belajar bermain gitar adalah ketika saya berumur 10 tahun'.",
    "mondai": 2,
    "number": 18
  },
  {
    "id": "bunpou_n4_b_q19",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "だれか ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ この映画を見に行きたいと思っています。",
    "options": [
      "人が",
      "いっしょに",
      "いれば",
      "行く"
    ],
    "correct": 0,
    "explanation": "Urutan yang benar: [いっしょに (1)] [行く (3)] [★人が (0)] [いれば (2)]。Arti: 'Jika ada orang yang pergi bersama, saya berniat pergi menonton film ini'.",
    "mondai": 2,
    "number": 19
  },
  {
    "id": "bunpou_n4_b_q20",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "ヤンさんが来たら、 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ 伝えてください。",
    "options": [
      "事務所に",
      "くる",
      "ように",
      "ここではなく"
    ],
    "correct": 1,
    "explanation": "Urutan yang benar: ヤンさんが来たら、[ここではなく (3)] [事務所に (0)] [★くる (1)] [ように (2)] 伝えてください。Arti: 'Jika Yan-san datang, tolong sampaikan agar dia pergi ke kantor, bukan ke sini'.",
    "mondai": 2,
    "number": 20
  },
  {
    "id": "bunpou_n4_b_q21",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　21　）に入る最もよいものを選んでください。",
    "passage": "8月に行われるオリンピックの日本代表マラソン選手に、藤原さん（　21　）えらばれた。藤原さんは、2年前まで会社のチームの中で練習していた。そのときは、みんなと同じ練習をして、きめられた試合に（　22　）。自分で自由にきめることができないのがいやで、会社をやめた。（　23　）、どんな練習や食事をすればいいか自分で考えるようになった。自分で考えた練習がいいかどうかわからないこともあったし、一人で練習するのは大変だったが、今は日本人のなかで一番速く走れるようになった。（　24　）、藤原さんは「世界にはもっと速い人たちがいるから、今のままではだめだ。（　25　）もっとちがう練習がひつようだ。」と言っている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m3.mp3",
    "options": [
      "に",
      "が",
      "を",
      "と"
    ],
    "correct": 1,
    "explanation": "Subjek utama dari kalimat pasif 'dipilih' (えらばれた) adalah Fujiwara-san, sehingga ditandai dengan partikel 「が」.",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "bunpou_n4_b_q22",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　22　）に入る最もよいものを選んでください。",
    "passage": "8月に行われるオリンピックの日本代表マラソン選手に、藤原さん（　21　）えらばれた。藤原さんは、2年前まで会社のチームの中で練習していた。そのときは、みんなと同じ練習をして、きめられた試合に（　22　）。自分で自由にきめることができないのがいやで、会社をやめた。（　23　）、どんな練習や食事をすればいいか自分で考えるようになった。自分で考えた練習がいいかどうかわからないこともあったし、一人で練習するのは大変だったが、今は日本人のなかで一番速く走れるようになった。（　24　）、藤原さんは「世界にはもっと速い人たちがいるから、今のままではだめだ。（　25　）もっとちがう練習がひつようだ。」と言っている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m3.mp3",
    "options": [
      "出たがっていた",
      "出られたかもしれない",
      "出させてあげたかった",
      "出なければならなかった"
    ],
    "correct": 3,
    "explanation": "Fujiwara-san merasa terikat karena ia 'harus berpartisipasi' (出なければならなかった) dalam pertandingan yang ditentukan oleh perusahaan.",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "bunpou_n4_b_q23",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　23　）に入る最もよいものを選んでください。",
    "passage": "8月に行われるオリンピックの日本代表マラソン選手に、藤原さん（　21　）えらばれた。藤原さんは、2年前まで会社のチームの中で練習していた。そのときは、みんなと同じ練習をして、きめられた試合に（　22　）。自分で自由にきめることができないのがいやで、会社をやめた。（　23　）、どんな練習や食事をすればいいか自分で考えるようになった。自分で考えた練習がいいかどうかわからないこともあったし、一人で練習するのは大変だったが、今は日本人のなかで一番速く走れるようになった。（　24　）、藤原さんは「世界にはもっと速い人たちがいるから、今のままではだめだ。（　25　）もっとちがう練習がひつようだ。」と言っている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m3.mp3",
    "options": [
      "会社をやめてから",
      "会社をやめる前に",
      "会社をやめたいとき",
      "会社をやめようとするとき"
    ],
    "correct": 0,
    "explanation": "Kalimat menunjukkan perubahan kebiasaan setelah ia mengundurkan diri (会社をやめてから), barulah ia mulai berpikir sendiri tentang menu latihan dan makanannya.",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "bunpou_n4_b_q24",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　24　）に入る最もよいものを選んでください。",
    "passage": "8月に行われるオリンピックの日本代表マラソン選手に、藤原さん（　21　）えらばれた。藤原さんは、2年前まで会社のチームの中で練習していた。そのときは、みんなと同じ練習をして、きめられた試合に（　22　）。自分で自由にきめることができないのがいやで、会社をやめた。（　23　）、どんな練習や食事をすればいいか自分で考えるようになった。自分で考えた練習がいいかどうかわからないこともあったし、一人で練習するのは大変だったが、今は日本人のなかで一番速く走れるようになった。（　24　）、藤原さんは「世界にはもっと速い人たちがいるから、今のままではだめだ。（　25　）もっとちがう練習がひつようだ。」と言っている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m3.mp3",
    "options": [
      "しかし",
      "それで",
      "そのうえ",
      "ところで"
    ],
    "correct": 0,
    "explanation": "Kata sambung pertentangan 'namun/tetapi' (しかし) digunakan untuk menghubungkan pencapaiannya sebagai yang tercepat di Jepang dengan kenyataan bahwa itu belum cukup untuk bersaing di tingkat dunia.",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "bunpou_n4_b_q25",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　25　）に入る最もよいものを選んでください。",
    "passage": "8月に行われるオリンピックの日本代表マラソン選手に、藤原さん（　21　）えらばれた. 藤原さんは、2年前まで会社のチームの中で練習していた。そのときは、みんなと同じ練習をして、きめられた試合に（　22　）。自分で自由にきめることができないのがいやで、会社をやめた。（　23　）、どんな練習や食事をすればいいか自分で考えるようになった。自分で考えた練習がいいかどうかわからないこともあったし、一人で練習するのは大変だったが、今は日本人のなかで一番速く走れるようになった。（　24　）、藤原さんは「世界にはもっと速い人たちがいるから、今のままではだめだ。（　25　）もっとちがう練習がひつようだ。」と言っている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m3.mp3",
    "options": [
      "世界で一番になれるためには",
      "世界で一番にするようには",
      "世界で一番なるためには",
      "世界で一番にできるようには"
    ],
    "correct": 2,
    "explanation": "Untuk menyatakan tujuan (menjadi nomor satu di dunia), pola yang tepat adalah menggunakan kata kerja bentuk kamus + ためには (なるためには).",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "bunpou_n4_b_q26",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "富士山の一番上で、できないことは何ですか。",
    "passage": "富士山に登ったことがありますか。富士山は3776メートルですが、一番上の場所まで登ったことがありますか。富士山に登った人は、まず神社へ行って神様にあいさつをします。神社の隣には、小さな建物があって、富士山に登った人はそこに泊まることができます。お風呂はありません。また食堂ではカレーやそばを食べることができます。小さな店もあって、お土産を買うことができます。それから、郵便局もあって、手紙を出すことができます。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m4_q1.mp3",
    "options": [
      "買い物をすること",
      "はがきを送ること",
      "食事をすること",
      "体を洗うこと"
    ],
    "correct": 3,
    "explanation": "Berdasarkan teks, di puncak Gunung Fuji tidak disediakan pemandian (お風呂はありません), sehingga pengunjung tidak bisa mandi/mencuci badan (体を洗うこと).",
    "mondai": 4,
    "number": 26
  },
  {
    "id": "bunpou_n4_b_q27",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "どうして「駅弁」は、人気があるのですか。",
    "passage": "日本人はよく弁当を食べます。お母さんの作った弁当も食べるし、コンビニの弁当も食べます。もう一つの人気のあるのは「駅弁」です。駅弁というのは、ある町の駅やその町を通る電車の中で売っている弁当のことです。駅弁がコンビニの弁当と違うのは、その町の有名な料理が入っていることと、弁当の箱がとても面白い形をしていることです。もちろん値段はそれほど安くありませんが、その町でしか買えません。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m4_q2.mp3",
    "options": [
      "弁当の箱がコンビニの弁当の箱と同じだから",
      "お母さんの作った弁当のようだから",
      "その町の有名な料理が入っていて、箱の形が面白いから",
      "値段が安くて、どこでも買えるから"
    ],
    "correct": 2,
    "explanation": "Teks menjelaskan keunikan Ekiben yang membuatnya populer adalah adanya hidangan khas daerah tersebut (有名な料理) dan bentuk kotaknya yang menarik (面白い形).",
    "mondai": 4,
    "number": 27
  },
  {
    "id": "bunpou_n4_b_q28",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "工場見学で、してはいけないことは何ですか。",
    "passage": "来週は、お菓子工場を見学します。9時10分に遅れないように来てください。見学のときは、写真を撮ったり、大きな声で話したりする人がいるので、注意してください。質問をしたりメモをとったりすることはできますが、案内する人の話を静かに聞くようにしましょう。見学の後、お菓子をもらえますが、そこで食べてはいけません。自分で持って帰って食べましょう。自分で持ってきたお菓子やゴミは、必ず持って帰ってください。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m4_q3.mp3",
    "options": [
      "質問をすること",
      "メモをとること",
      "案内する人の話を聞くこと",
      "もらったお菓子をそこで食べること"
    ],
    "correct": 3,
    "explanation": "Teks menyatakan bahwa setelah tur selesai pengunjung akan mendapatkan kue, tetapi dilarang memakannya di sana (そこで食べてはいけません). Kue tersebut harus dibawa pulang.",
    "mondai": 4,
    "number": 28
  },
  {
    "id": "bunpou_n4_b_q29",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "王さんはあした、何をしますか。",
    "passage": "山本さんへ\n先週のお花見では大変ありがとうございました。はじめて日本の桜を見ましたが、上野公園の桜はとてもきれいで、忘れることができません。写真もたくさんとったので、できたらお送りします。また、山本さんが作って持ってきてくれたお弁当もとてもおいしかったです。特に卵焼きがおいしかったです。今度、作り方を教えてくださいませんか。来月の山登りも楽しみですね。あした、図書館で山のガイドブックを借りるつもりです。おすすめの本があったら教えてくださいね。\n王",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m4_q4.mp3",
    "options": [
      "山本さんに卵焼きの作り方を教える",
      "山登りのガイドブックを借りる",
      "上野公園で桜を見る",
      "山登りに行く"
    ],
    "correct": 1,
    "explanation": "Wang-san menulis dalam suratnya bahwa besok dia berencana meminjam buku panduan mendaki gunung di perpustakaan (あした、図書館で山のガイドブックを借りるつもりです).",
    "mondai": 4,
    "number": 29
  },
  {
    "id": "bunpou_n4_b_q30",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "（　①　）にはどんなことばが入りますか。",
    "passage": "わたしたちは、目が悪くなって、ものが見えにくくなったとき、メガネやコンタクトレンズを使う。そうすることで、見えにくいものが見えるようになる。メガネもコンタクトレンズもどちらも目の悪い人には、ひつようなものである。しかし、メガネとコンタクトレンズは（　①　）。まず、メガネはかけているから、ほかの人が見たらはっきりわかるが、コンタクトレンズは目の中に入れているので、つけていてもほかの人には②わからない。また、メガネは、運動すると、とれたりおちたりすることがあって、運動しにくい。しかし、コンタクトレンズをつけて運動しても③そんなことはあまり心配しなくてよい。しかし、あぶないこともある。コンタクトレンズをつけているときにボールがあたったら、けがをしてしまうこともあるからだ。それぞれのいいところを考えて、わたしは、運動するときはコンタクトレンズを使って、勉強をしたり本を読むときはメガネをかけるようにしている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m5.mp3",
    "options": [
      "同じだ",
      "同じではない",
      "どちらもひつようではない",
      "どちらか一つだけひつようだ"
    ],
    "correct": 1,
    "explanation": "Paragraf berikutnya menjelaskan perbedaan antara kacamata dan lensa kontak, sehingga kata yang tepat untuk mengisi bagian rumpang adalah 「同じではない」 (tidak sama).",
    "mondai": 5,
    "number": 30
  },
  {
    "id": "bunpou_n4_b_q31",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "何が②わからないのですか。",
    "passage": "わたしたちは、目が悪くなって、ものが見えにくくなったとき、メガネやコンタクトレンズを使う。そうすることで、見えにくいものが見えるようになる。メガネもコンタクトレンズもどちらも目の悪い人には、ひつようなものである。しかし、メガネとコンタクトレンズは（　①　）。まず、メガネはかけているから、ほかの人が見たらはっきりわかるが、コンタクトレンズは目の中に入れているので、つけていてもほかの人には②わからない。また、メガネは、運動すると、とれたりおちたりすることがあって、運動しにくい。しかし、コンタクトレンズをつけて運動しても③そんなことはあまり心配しなくてよい。しかし、あぶないこともある。コンタクトレンズをつけているときにボールがあたったら、けがをしてしまうこともあるからだ。それぞれのいいところを考えて、わたしは、運動するときはコンタクトレンズを使って、勉強をしたり本を読むときはメガネをかけるようにしている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m5.mp3",
    "options": [
      "メガネをかけているかどうか",
      "コンタクトレンズをつけていること",
      "コンタクトレンズがメガネよりいいこと",
      "メガネがコンタクトレンズよりよく見えるかどうか"
    ],
    "correct": 1,
    "explanation": "Kalimatnya adalah 'Karena lensa kontak dimasukkan ke dalam mata, meskipun dipakai, orang lain tidak tahu (bahwa dia sedang memakai lensa kontak)'. Maka hal yang tidak diketahui orang lain adalah 'apakah orang tersebut memakai lensa kontak' (コンタクトレンズをつけていること).",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "bunpou_n4_b_q32",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "③そんなことは、どんなことですか。",
    "passage": "わたしたちは、目が悪くなって、ものが見えにくくなったとき、メガネやコンタクトレンズを使う。そうすることで、見えにくいものが見えるようになる。メガネもコンタクトレンズもどちらも目の悪い人には、ひつようなものである。しかし、メガネとコンタクトレンズは（　①　）。まず、メガネはかけているから、ほかの人が見たらはっきりわかるが、コンタクトレンズは目の中に入れているので、つけていてもほかの人には②わからない。また、メガネは、運動すると、とれたりおちたりすることがあって、運動しにくい。しかし、コンタクトレンズをつけて運動しても③そんなことはあまり心配しなくてよい。しかし、あぶないこともある。コンタクトレンズをつけているときにボールがあたったら、けがをしてしまうこともあるからだ。それぞれのいいところを考えて、わたしは、運動するときはコンタクトレンズを使って、勉強をしたり本を読むときはメガネをかけるようにしている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m5.mp3",
    "options": [
      "コンタクトレンズがとれたり、おちたりすること",
      "メガネがとれたり、おちたりすること",
      "コンタクトレンズをつけて運動すること",
      "メガネをかけて運動すること"
    ],
    "correct": 1,
    "explanation": "Di kalimat sebelumnya dinyatakan bahwa kacamata saat berolahraga bisa terlepas atau jatuh (とれたりおちたりすること). Maka 'hal semacam itu' (③そんなこと) merujuk pada 'kacamata terlepas atau jatuh' (メガネがとれたり、おちたりすること).",
    "mondai": 5,
    "number": 32
  },
  {
    "id": "bunpou_n4_b_q33",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "この人は、コンタクトレンズはどうだと言っていますか。",
    "passage": "わたしたちは、目が悪くなって、ものが見えにくくなったとき、メガネやコンタクトレンズを使う。そうすることで、見えにくいものが見えるようになる。メガネもコンタクトレンズもどちらも目の悪い人には、ひつようなものである。しかし、メガネとコンタクトレンズは（　①　）。まず、メガネはかけているから、ほかの人が見たらはっきりわかるが、コンタクトレンズは目の中に入れているので、つけていてもほかの人には②わからない。また、メガネは、運動すると、とれたりおちたりすることがあって、運動しにくい。しかし、コンタクトレンズをつけて運動しても③そんなことはあまり心配しなくてよい。しかし、あぶないこともある。コンタクトレンズをつけているときにボールがあたったら、けがをしてしまうこともあるからだ。それぞれのいいところを考えて、わたしは、運動するときはコンタクトレンズを使って、勉強をしたり本を読むときはメガネをかけるようにしている。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_b_m5.mp3",
    "options": [
      "勉強したり、本を読んだりするのにいい。",
      "本を読むときはいいが、運動しにくい。",
      "運動はしやすいが、あぶないときもある。",
      "運動にもいいし、ぜんぜんあぶなくない。"
    ],
    "correct": 2,
    "explanation": "Penulis menyatakan bahwa lensa kontak memudahkan berolahraga karena tidak mudah jatuh (運動はしやすい), namun juga bisa berbahaya jika terhantam bola (あぶないときもある).",
    "mondai": 5,
    "number": 33
  },
  {
    "id": "bunpou_n4_b_q34",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "いちばん早くできるのはどれですか。",
    "passage": "<div class=\"space-y-6\">\n  <div class=\"border-b pb-3 mb-4\">\n    <h3 class=\"text-xl font-bold text-[#1d3557]\">さくら市体育館の利用案内</h3>\n    <div class=\"flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-sm text-gray-600\">\n      <span>〇 <strong>料金：</strong>おとな 200円、小中学生 100円</span>\n      <span>〇 くつ以外の道具は借りられます。</span>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n    <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\">\n      <div class=\"bg-[#1d3557] px-4 py-2 text-white font-bold text-center\">\n        たっきゅう (卓球)\n      </div>\n      <table class=\"w-full text-left border-collapse text-sm\">\n        <thead>\n          <tr class=\"bg-slate-100 border-b border-slate-200 text-slate-700\">\n            <th class=\"p-3 font-semibold\">曜日</th>\n            <th class=\"p-3 font-semibold\">場所</th>\n            <th class=\"p-3 font-semibold\">区分</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-100 text-slate-700\">\n          <tr>\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第1木曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第2月曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第3月曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第3木曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3 font-medium\">第4月曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\">\n      <div class=\"bg-[#457b9d] px-4 py-2 text-white font-bold text-center\">\n        バレーボール (排球)\n      </div>\n      <table class=\"w-full text-left border-collapse text-sm\">\n        <thead>\n          <tr class=\"bg-slate-100 border-b border-slate-200 text-slate-700\">\n            <th class=\"p-3 font-semibold\">曜日</th>\n            <th class=\"p-3 font-semibold\">場所</th>\n            <th class=\"p-3 font-semibold\">区分</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-100 text-slate-700\">\n          <tr>\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第1土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3\">南町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第2土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">南町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3 font-medium\">第3土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第4土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">南町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-50 p-4 rounded-xl text-xs space-y-2 border border-slate-100 text-slate-600 leading-relaxed\">\n    <div>〇 <strong>10人以上</strong>での利用は「グループ」、それ以下での利用は「一般」となります。</div>\n    <div>★<strong>「グループ」</strong>は、かならず1週間前までに予約してください。（「一般」は、予約のひつようはありません。）</div>\n    <div>※<strong>「※」</strong>は先生に教えてもらえます。</div>\n  </div>\n\n  <div class=\"flex flex-col items-center justify-center border border-slate-200 rounded-xl bg-white p-4 max-w-sm mx-auto shadow-sm\">\n    <h4 class=\"text-sm font-bold text-slate-700 mb-3 flex items-center gap-1.5\">\n      <svg class=\"w-4 h-4 text-indigo-500\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5\"></path></svg>\n      今月のカレンダー\n    </h4>\n    <div class=\"grid grid-cols-7 gap-1 text-center w-full\">\n      <div class=\"text-xs font-bold text-red-500 py-1\">日</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">月</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">火</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">水</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">木</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">金</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">土</div>\n      \n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">1</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">2</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">3</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">4</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">5</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">6</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">7</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">8</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">9</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">10</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">11</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">12</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">13</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">14</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">15</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">16</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">17</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">18</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">19</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">20</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">21</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">22</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">23</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">24</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">25</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">26</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">27</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">28</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">29</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">30</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">31</div>\n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n    </div>\n  </div>\n</div>\n\n※友だち4人で卓球（たっきゅう）がしたいです。はじめてなので先生に教えてもらいたいです。今日は15日です。いちばん早くできるのはどれですか。",
    "options": [
      "第2月曜に西町で",
      "第3月曜に東町で",
      "第3水曜に西町で",
      "第4月曜に西町で"
    ],
    "correct": 3,
    "explanation": "Mereka berjumlah 4 orang (kategori '一般'), ingin bermain tenis meja dengan bimbingan guru (tanda '※'). Hari ini tanggal 15 (hari Senin). Sesi tenis meja dengan guru (一般※) berikutnya adalah Hari Senin ke-4 (第4月曜日) di 西町. Jadi pilihan yang benar adalah '第4月曜に西町で'.",
    "mondai": 6,
    "number": 34
  },
  {
    "id": "bunpou_n4_b_q35",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "一番早くできるのはどれですか。",
    "passage": "<div class=\"space-y-6\">\n  <div class=\"border-b pb-3 mb-4\">\n    <h3 class=\"text-xl font-bold text-[#1d3557]\">さくら市体育館の利用案内</h3>\n    <div class=\"flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-sm text-gray-600\">\n      <span>〇 <strong>料金：</strong>おとな 200円、小中学生 100円</span>\n      <span>〇 くつ以外の道具は借りられます。</span>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n    <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\">\n      <div class=\"bg-[#1d3557] px-4 py-2 text-white font-bold text-center\">\n        たっきゅう (卓球)\n      </div>\n      <table class=\"w-full text-left border-collapse text-sm\">\n        <thead>\n          <tr class=\"bg-slate-100 border-b border-slate-200 text-slate-700\">\n            <th class=\"p-3 font-semibold\">曜日</th>\n            <th class=\"p-3 font-semibold\">場所</th>\n            <th class=\"p-3 font-semibold\">区分</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-100 text-slate-700\">\n          <tr>\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第1木曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第2月曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第3月曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第3木曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">東町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3 font-medium\">第4月曜日</td>\n            <td class=\"p-3\">西町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\">\n      <div class=\"bg-[#457b9d] px-4 py-2 text-white font-bold text-center\">\n        バレーボール (排球)\n      </div>\n      <table class=\"w-full text-left border-collapse text-sm\">\n        <thead>\n          <tr class=\"bg-slate-100 border-b border-slate-200 text-slate-700\">\n            <th class=\"p-3 font-semibold\">曜日</th>\n            <th class=\"p-3 font-semibold\">場所</th>\n            <th class=\"p-3 font-semibold\">区分</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-100 text-slate-700\">\n          <tr>\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第1土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3\">南町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第2土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">南町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr>\n            <td class=\"p-3 font-medium\">第3土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">一般※</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3 font-medium\" rowspan=\"2\">第4土曜日</td>\n            <td class=\"p-3\">北町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium\">一般</span></td>\n          </tr>\n          <tr class=\"bg-slate-50/50\">\n            <td class=\"p-3\">南町</td>\n            <td class=\"p-3\"><span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">グループ★</span></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-50 p-4 rounded-xl text-xs space-y-2 border border-slate-100 text-slate-600 leading-relaxed\">\n    <div>〇 <strong>10人以上</strong>での利用は「グループ」、それ以下での利用は「一般」となります。</div>\n    <div>★<strong>「グループ」</strong>は、かならず1週間前までに予約してください。（「一般」は、予約のひつようはありません。）</div>\n    <div>※<strong>「※」</strong>は先生に教えてもらえます。</div>\n  </div>\n\n  <div class=\"flex flex-col items-center justify-center border border-slate-200 rounded-xl bg-white p-4 max-w-sm mx-auto shadow-sm\">\n    <h4 class=\"text-sm font-bold text-slate-700 mb-3 flex items-center gap-1.5\">\n      <svg class=\"w-4 h-4 text-indigo-500\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5\"></path></svg>\n      今月のカレンダー\n    </h4>\n    <div class=\"grid grid-cols-7 gap-1 text-center w-full\">\n      <div class=\"text-xs font-bold text-red-500 py-1\">日</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">月</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">火</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">水</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">木</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">金</div>\n      <div class=\"text-xs font-bold text-slate-500 py-1\">土</div>\n      \n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">1</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">2</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">3</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">4</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">5</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">6</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">7</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">8</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">9</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">10</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">11</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">12</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">13</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">14</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">15</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">16</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">17</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">18</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">19</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">20</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">21</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">22</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">23</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">24</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">25</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">26</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">27</div>\n      \n      <div class=\"text-sm py-1.5 text-red-500 font-semibold\">28</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">29</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">30</div>\n      <div class=\"text-sm py-1.5 text-slate-700 font-medium\">31</div>\n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n      <div class=\"text-sm py-1.5 text-slate-300\"></div>\n    </div>\n  </div>\n</div>\n\n※友だち12人でバレーボールがしたいです。今日は10日です。一番早くできるのはどれですか。",
    "options": [
      "第2土曜に北町で",
      "第2土曜に南町で",
      "第4土曜に北町で",
      "第4土曜に南町で"
    ],
    "correct": 3,
    "explanation": "Mereka berjumlah 12 orang (kategori 'グループ'), sehingga wajib melakukan reservasi minimal 1 minggu sebelum hari H. Karena hari ini tanggal 10, tanggal paling awal untuk bermain adalah tanggal 17 ke atas. Berdasarkan jadwal voli, sesi voli grup (グループ★) terdekat setelah tanggal 17 adalah hari Sabtu ke-4 (第4土曜日) di 南町. Jadi pilihan yang benar adalah '第4土曜に南町で'.",
    "mondai": 6,
    "number": 35
  }
];

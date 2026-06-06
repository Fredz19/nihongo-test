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
  {
    "id": "bunpou_n4_a_q01",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "わたしは大学を出たら、大きい会社に入って、家族（　　）あんしんさせたいです。",
    "options": [
      "が",
      "と",
      "で",
      "を"
    ],
    "correct": 3,
    "explanation": "Kata kerja あんしんさせたい adalah bentuk kausatif dari あんしんする (membuat lega/tenang). Partikel yang menandai objek yang dibuat tenang/lega adalah 「を」.",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "bunpou_n4_a_q02",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「かわいいスカートですね。」\nB「ええ、友だち（　　）くれたんです。」",
    "options": [
      "に",
      "が",
      "を",
      "で"
    ],
    "correct": 1,
    "explanation": "Pola くれる (memberi kepada saya) menggunakan partikel 「が」 untuk menandai subjek pemberi (dalam hal ini, teman).",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "bunpou_n4_a_q03",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "先月は恋人の誕生日があったから、10万円（　　）つかってしまいました。",
    "options": [
      "も",
      "が",
      "しか",
      "まで"
    ],
    "correct": 0,
    "explanation": "Partikel 「も」 diletakkan setelah jumlah/nominal untuk menekankan jumlah yang sangat besar atau melebihi perkiraan (sampai menghabiskan 100 ribu yen).",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "bunpou_n4_a_q04",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「きれいな部屋ですね。ホテルの（　　）部屋ですね。」\nB「そうですか。ありがとうございます。」",
    "options": [
      "ような",
      "ように",
      "みたい",
      "みたいに"
    ],
    "correct": 0,
    "explanation": "Pola 〜のような (seperti...) digunakan untuk membandingkan atau memberikan contoh tentang suatu kata benda. Di sini kamar tersebut dibandingkan keindahannya dengan hotel (ホテルのような部屋).",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "bunpou_n4_a_q05",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "朝はたいていコーヒーを飲みますが、ときどき紅茶を（　　）ことがあります。",
    "options": [
      "飲み",
      "飲んだ",
      "飲んで",
      "飲む"
    ],
    "correct": 3,
    "explanation": "Pola 〜ことがある (terkadang melakukan...) menggunakan kata kerja bentuk kamus (dictionary form). Jadi bentuk yang tepat adalah 飲む (nomu).",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "bunpou_n4_a_q06",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「だめですよ。ここには車を（　　）と書いてありますよ。」\nB「あ、本当ですね。じゃ、スーパーの駐車場にとめましょう。」",
    "options": [
      "とめない",
      "とめるな",
      "とめて",
      "とめる"
    ],
    "correct": 1,
    "explanation": "Pola 〜と書いてある (tertulis...) digunakan untuk menyatakan larangan atau isi tulisan. Kata とめるな adalah bentuk larangan keras (prohibitive form) dari とめる (jangan memarkir).",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "bunpou_n4_a_q07",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "午後から雨ですから、かさを持って（　　）ほうがいいですよ。",
    "options": [
      "あげた",
      "きいた",
      "いった",
      "みた"
    ],
    "correct": 2,
    "explanation": "Pola 〜たほうがいい (sebaiknya...) untuk memberikan saran menggunakan bentuk lampau KK (-ta form). 持っていきます (pergi membawa) diubah menjadi bentuk lampau yaitu 持っていった.",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "bunpou_n4_a_q08",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「どうしてそのアパートに引っ越したんですか。」\nB「駅から（　　）、家賃も安いからです。」",
    "options": [
      "近いし",
      "近いか",
      "近いしで",
      "近いしに"
    ],
    "correct": 0,
    "explanation": "Partikel 「し」 digunakan untuk menyebutkan alasan-alasan yang sejajar (karena dekat dari stasiun, dan harga sewanya juga murah).",
    "mondai": 1,
    "number": 8
  },
  {
    "id": "bunpou_n4_a_q09",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "どんなに（　　）最後までがんばります。",
    "options": [
      "大変くても",
      "大変だっても",
      "大変でも",
      "大変かっても"
    ],
    "correct": 2,
    "explanation": "Pola どんなに〜ても (bagaimanapun / seberapa pun...) untuk kata sifat-na menggunakan bentuk 〜でも. Jadi bentuk yang tepat adalah 大変でも (taihen demo).",
    "mondai": 1,
    "number": 9
  },
  {
    "id": "bunpou_n4_a_q10",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "たばこを（　　）、あちらの席で吸ってください。",
    "options": [
      "吸ったら",
      "吸えば",
      "吸うなら",
      "吸うと"
    ],
    "correct": 2,
    "explanation": "Pola 〜なら (jika/kalau...) digunakan untuk memberikan saran berdasarkan situasi yang disebutkan (jika ingin merokok, silakan di sebelah sana).",
    "mondai": 1,
    "number": 10
  },
  {
    "id": "bunpou_n4_a_q11",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "こちらの紙にご住所とお名前をお（　　）ください。",
    "options": [
      "書いて",
      "書き",
      "書く",
      "書け"
    ],
    "correct": 1,
    "explanation": "Pola sopan meminta seseorang melakukan sesuatu adalah お + KK bentuk Masu (tanpa masu) + ください. KK 書きます diubah menjadi お書きください.",
    "mondai": 1,
    "number": 11
  },
  {
    "id": "bunpou_n4_a_q12",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "10年前、その絵をいくらで（　　）、覚えていますか。",
    "options": [
      "買うか",
      "買った",
      "買って",
      "買ったか"
    ],
    "correct": 3,
    "explanation": "Pola kata tanya + KK bentuk biasa + か digunakan untuk membuat anak kalimat tanya di dalam kalimat utama. Kalimat ini menanyakan apakah ingat dengan harga berapa membeli lukisan itu (買ったか).",
    "mondai": 1,
    "number": 12
  },
  {
    "id": "bunpou_n4_a_q13",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "駅で電車に（　　）としたときに、かばんがないことに気がついた。",
    "options": [
      "乗れる",
      "乗ろう",
      "乗り",
      "乗れ"
    ],
    "correct": 1,
    "explanation": "Pola 〜ようとする (bersiap/mencoba melakukan...) menggunakan kata kerja bentuk maksud/volitional (乗ろう) diikuti としたときに.",
    "mondai": 1,
    "number": 13
  },
  {
    "id": "bunpou_n4_a_q14",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "ひとりできびしかったので、友だちが（　　）うれしかった。",
    "options": [
      "来てくれて",
      "来られて",
      "来てもらって",
      "来させて"
    ],
    "correct": 0,
    "explanation": "Pola 〜てくれる (melakukan kebaikan untuk saya) digunakan karena kedatangan teman dirasakan sebagai bantuan/kebaikan bagi pembicara.",
    "mondai": 1,
    "number": 14
  },
  {
    "id": "bunpou_n4_a_q15",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "A「さっき、駅でリンさんを見ましたよ。」\nB「それは、リンさんではありません。リンさんは国に帰りましたから、ここにいる（　　）でしょう。」",
    "options": [
      "こと",
      "ことがない",
      "はず",
      "はずがない"
    ],
    "correct": 3,
    "explanation": "Pola 〜はずがない (tidak mungkin...) menunjukkan keyakinan kuat bahwa sesuatu tidak terjadi. \"Karena Lin sudah pulang ke negaranya, tidak mungkin dia ada di stasiun.\"",
    "mondai": 1,
    "number": 15
  },
  {
    "id": "bunpou_n4_a_q16",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "朝から晩 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ 勉強しなさい。",
    "options": [
      "テレビ",
      "見て",
      "ばかり",
      "まで"
    ],
    "correct": 2,
    "explanation": "Urutan yang benar: テレビ [ばかり (0)] [見て (1)] [★い (2)] [ないで (3)] 勉強しなさい。Pola 〜てばかりいないで berarti 'jangan hanya melakukan ... saja'.",
    "mondai": 2,
    "number": 16
  },
  {
    "id": "bunpou_n4_a_q17",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "リンさんは、会社の仕事で、 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ と言っていました。",
    "options": [
      "なった",
      "行く",
      "大阪に",
      "ことに"
    ],
    "correct": 3,
    "explanation": "Urutan yang benar: [日本へ (0)] [行く (1)] [★こと (2)] [になった (3)] と言っていました。Pola 〜ことになる menyatakan suatu keputusan/keadaan yang telah ditetapkan.",
    "mondai": 2,
    "number": 17
  },
  {
    "id": "bunpou_n4_a_q18",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "パーティーで、 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ わかりません。",
    "options": [
      "歌う",
      "が",
      "マリアさん",
      "どうか"
    ],
    "correct": 0,
    "explanation": "Urutan yang benar: [マリアさん (0)] [が (1)] [★歌う (2)] [かどうか (3)] わかりません。Pola 〜かどうか digunakan untuk kalimat tanya tidak langsung (apakah ... atau tidak).",
    "mondai": 2,
    "number": 18
  },
  {
    "id": "bunpou_n4_a_q19",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "山田さんの ＿＿＿ ＿★＿ ＿＿＿ ＿＿＿ です。",
    "options": [
      "カメラは",
      "使いやすくない",
      "わたしの",
      "ほど"
    ],
    "correct": 2,
    "explanation": "Urutan yang benar: [カメラは (0)] [★わたし (1)] [のほど (2)] [使いやすくない (3)] です。Pola 〜ほど〜ない menyatakan perbandingan negatif ('tidak se-... milik saya').",
    "mondai": 2,
    "number": 19
  },
  {
    "id": "bunpou_n4_a_q20",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "リンさんは、来月 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ 行きたいそうです。",
    "options": [
      "家の近くの",
      "国へ",
      "公園へ",
      "帰ったら"
    ],
    "correct": 0,
    "explanation": "Urutan yang benar: [国へ (0)] [帰ったら (1)] [★家の近くの (2)] [公園へ行きたい (3)] そうです。Urutan kalimat pengandaian conditonal 〜たら.",
    "mondai": 2,
    "number": 20
  },
  {
    "id": "bunpou_n4_a_q21",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　21　）に入る最もよいものを選んでください。",
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）練習したのに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g1.mp3",
    "options": [
      "帰ったところ",
      "帰るところ",
      "帰ってきたところ",
      "帰ってきているところ"
    ],
    "correct": 1,
    "explanation": "Karena Lin sedang menulis email dari dalam kereta (電車の中で), dia sedang dalam perjalanan pulang. Pola 〜ところです menunjukkan tahap tindakan, di mana 帰るところです berarti sedang/akan pulang.",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "bunpou_n4_a_q22",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　22　）に入る最もよいものを選んでください。",
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）練習したのに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g1.mp3",
    "options": [
      "から",
      "ため",
      "ので",
      "ばかり"
    ],
    "correct": 3,
    "explanation": "Pola 〜ばかり (hanya/melulu) digunakan untuk menyatakan bahwa tes tersebut hanya berisi soal membaca dan menjawab, tidak ada soal kanji/tata bahasa.",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "bunpou_n4_a_q23",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　23　）に入る最もよいものを選んでください。",
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）練習したのに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g1.mp3",
    "options": [
      "こんなに",
      "そんなに",
      "あんなに",
      "どんなに"
    ],
    "correct": 2,
    "explanation": "Kata あんなに (sebanyak itu) merujuk pada usaha keras di masa lalu (latihan bersama guru) yang dirasa sangat banyak, namun ternyata tetap tidak lancar saat wawancara.",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "bunpou_n4_a_q24",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　24　）に入る最もよいものを選んでください。",
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）練習したのに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g2.mp3",
    "options": [
      "聞けました",
      "聞かれました",
      "聞けませんでした",
      "聞かれませんでした"
    ],
    "correct": 3,
    "explanation": "Dalam kalimat pasif, 'tidak ditanya' dinyatakan dengan 聞かれませんでした (dari kata 聞く diubah ke bentuk pasif 聞かれる).",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "bunpou_n4_a_q25",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　25　）に入る最もよいものを選んでください。",
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）練習したのに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g1.mp3",
    "options": [
      "ご連絡していただきたいと",
      "ご連絡させていただきたいと",
      "ご連絡してあげたいと",
      "ご連絡してもらいたいと"
    ],
    "correct": 1,
    "explanation": "Sebagai murid kepada guru, bentuk sopan merendahkan diri (humble) yang tepat untuk menyatakan keinginan menghubungi adalah ご連絡させていただきたい (ingin berizin menghubungi Anda).",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "bunpou_n4_a_q26",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "どうしてコンビニを利用する人が増えましたか。",
    "passage": "日本ではコンビニを利用する人が増えました。コンビニには、石鹸など日常生活で使うものや、お弁当やパンなどすぐに食べられるものが置いてあるから、便利です。日本には、お年寄りや一人で住んでいる人、共働きの家族が多くなりました。その人たちが、遠くのスーパーで安いものをたくさん買うより、必要なものだけを簡単に買える近くの店に行ったほうがいいと考えるようになったのです。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m4_q1.mp3",
    "options": [
      "安いものしか買いたくない人が多いから",
      "スーパーよりコンビニのほうが安いから",
      "必要なものだけ買いたい人がふえたから",
      "コンビニには食べ物が置いてあるから"
    ],
    "correct": 2,
    "explanation": "Berdasarkan teks, orang-orang seperti lansia, orang yang tinggal sendiri, atau keluarga bekerja lebih memilih membeli barang yang benar-benar dibutuhkan secara mudah di toko terdekat (konbini) daripada pergi to supermarket yang jauh.",
    "mondai": 4,
    "number": 26
  },
  {
    "id": "bunpou_n4_a_q27",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "いい会社を作るには、どのような人が必要ですか。",
    "passage": "仕事のやり方はみんな違います。会社には「バリバリ型」と「コツコツ型」のどちらのタイプの人も必要なのでしょうか。いつも元気で一生懸命頑張る「バリバリ型」の人がいると、会社が明るくなるので、とても大切です。でも、会社は面白いところで、同じタイプの人だけが集まっても、いい会社はできません。だから、何も言わないで一人で静かに「コツコツ」仕事をする人も大切にしなければなりません。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m4_q2.mp3",
    "options": [
      "バリバリ型の人とコツコツ型の人",
      "バリバリ型の人だけ",
      "コツコツ型の人だけ",
      "静かに仕事をしたい人だけ"
    ],
    "correct": 0,
    "explanation": "Teks menyatakan bahwa untuk membuat perusahaan yang baik, tidak bisa hanya mengumpulkan satu tipe orang saja. Baik tipe 'baribari' (bersemangat) maupun 'kotsukotsu' (tekun bekerja diam-diam) keduanya sangat penting.",
    "mondai": 4,
    "number": 27
  },
  {
    "id": "bunpou_n4_a_q28",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "車で練習に行く人はどうしたらいいですか。",
    "passage": "サッカーチームのみなさんへ\n次の練習は南運動場で行います。南運動場は野田市の運動場です。規則があるので注意してください。\n練習の日、運動場入り口の駐車場は使えません。もし車で来るときは、近くのコインパーキング（1時間200円の駐車場）を使ってください。近くの道には絶対に車を止めないこと。近所の人が困ります。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m4_q3.mp3",
    "options": [
      "近所の人におねがいして、近くの道に車をとめる。",
      "近くのコインパーキングに車をとめる。",
      "南運動場の使っていないところに車をとめる。",
      "お金をはらって、運動場入り口の駐車場に車をとめる。"
    ],
    "correct": 1,
    "explanation": "Pengumuman menyatakan bahwa tempat parkir di pintu masuk lapangan tidak bisa digunakan, dan dilarang keras memarkir mobil di jalan sekitar. Pemain yang membawa mobil disarankan menggunakan parkir koin terdekat.",
    "mondai": 4,
    "number": 28
  },
  {
    "id": "bunpou_n4_a_q29",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この動物園ではパンダは何を食べていますか。",
    "passage": "パンダは中国の高い山の中にいて、毛の色が白と黒にはっきりとわかれている、めずらしい動物として知られている。そのパンダが2頭、去年の4月、この動物園にやってきた。パンダは竹しか食べないと言われているが、ここでは何を食べているのだろう。この動物園では1日に20kgから30kgの竹を食べさせていて、そのほかにニンジンやリンゴなども3回から4回食べさせているそうだ。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m4_q4.mp3",
    "options": [
      "竹も食べるが、ニンジンやリンゴなども食べている。",
      "竹は食べないが、ニンジンやリンゴなどを食べている。",
      "ニンジンやリンゴなどもあげているが、竹しか食べない。",
      "ニンジンやリンゴは食べないが、竹は20kgから30kg食べている。"
    ],
    "correct": 0,
    "explanation": "Berdasarkan teks, kebun binatang tersebut memberi makan panda 20kg-30kg bambu per hari, dan selain itu juga memberikan wortel serta apel sebanyak 3-4 kali sehari.",
    "mondai": 4,
    "number": 29
  },
  {
    "id": "bunpou_n4_a_q30",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "どうして、①とてもいい時代だったと思っているのですか。",
    "passage": "30年ぐらい前、日本では、男性は60さいまで一つの会社につとめるのがふつうだった。そして、女性はけっこんしたり、子どもをうんだりしたら仕事をやめるのがふつうだった。つまが仕事をしなくても、おっとが会社からもらうお金があれば、家族みんながじゅうぶんに生活できたからだ。\nお金のしんばいをしないで家族が安心して生活できたのは、①とてもいい時代だったと思う。今のように、日本のけいざいが悪くなり、仕事でもらうお金が少なくなったり、仕事がなくなったりする時代とくらべると、ずっといいと思う。\n\n\nでも、②そのころは、仕事がすきで、男性のようにはたらきたきと思っていた女性には、いやな時代だったらしい。\n\n\n今は、おっとが仕事でもらうお金だけでは生活できなくなってきたので、女性は、けっこんしてからも仕事をつづけるようになった。すると、今度は、むかしとはんたいの考えの人がふえてきた。わかい女性は、けっこんしたら家の中のことでくわいてからも仕事以外のことでがんばりたいと考えるようになった。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m5.mp3",
    "options": [
      "男性が家の仕事を手つだうのがふつうだったから",
      "お金のしんばいをしないで家族が安心して生活できたから",
      "仕事のすきな女性は男性のようにはたらくことができたから",
      "仕事でもらえるお金が少なくなっても、仕事はなくならなかったから"
    ],
    "correct": 1,
    "explanation": "Berdasarkan teks, 30 tahun lalu, bahkan jika istri tidak bekerja, gaji suami dari perusahaan sudah cukup bagi seluruh keluarga untuk hidup aman tanpa mengkhawatirkan uang (お金のしんばいをしないで家族が安心して生活できた).",
    "mondai": 5,
    "number": 30
  },
  {
    "id": "bunpou_n4_a_q31",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "②そのころは、どんな時代でしたか。",
    "passage": "30年ぐらい前、日本では、男性は60さいまで一つの会社につとめるのがふつうだった。そして、女性はけっこんしたり、子どもをうんだりしたら仕事をやめるのがふつうだった。つまが仕事をしなくても、おっとが会社からもらうお金があれば、家族みんながじゅうぶんに生活できたからだ。\nお金のしんばいをしないで家族が安心して生活できたのは、①とてもいい時代だったと思う。今のように、日本のけいざいが悪くなり、仕事でもらうお金が少なくなったり、仕事がなくなったりする時代とくらべると、ずっといいと思う。\n\n\nでも、②そのころは、仕事がすきで、男性のようにはたらきたきと思っていた女性には、いやな時代だったらしい。\n\n\n今は、おっとが仕事でもらうお金だけでは生活できなくなってきたので、女性は、けっこんしてからも仕事をつづけるようになった。すると、今度は、むかしとはんたいの考えの人がふえてきた。わかい女性は、けっこんしたら家の中のことでくわいてからも仕事以外のことでがんばりたいと考えるようになった。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m5.mp3",
    "options": [
      "おっとだけがはたらけば、家族みんなが生活できた時代",
      "今よりも日本のけいざいが悪くて、女性の仕事がなかった時代",
      "女性も60さいまで一つの会社につとめるのがふつうだった時代",
      "男性も女性も、仕事でもらえるお金が少なくなってしまった時代"
    ],
    "correct": 0,
    "explanation": "Teks menyebutkan bahwa pada masa itu (30 tahun lalu), jika suami (おっと) bekerja di perusahaan, uangnya sudah cukup bagi seluruh keluarga untuk hidup (おっとが会社からもらうお金があれば、家族みんながじゅうぶんに生活できた).",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "bunpou_n4_a_q32",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "仕事がすきな女性は、30年前、どう思っていましたか。",
    "passage": "30年ぐらい前、日本では、男性は60さいまで一つの会社につとめるのがふつうだった。そして、女性はけっこんしたり、子どもをうんだりしたら仕事をやめるのがふつうだった。つまが仕事をしなくても、おっとが会社からもらうお金があれば、家族みんながじゅうぶんに生活できたからだ。\nお金のしんばいをしないで家族が安心して生活できたのは、①とてもいい時代だったと思う。今のように、日本のけいざいが悪くなり、仕事でもらうお金が少なくなったり、仕事がなくなったりする時代とくらべると、ずっといいと思う。\n\n\nでも、②そのころは、仕事がすきで、男性のようにはたらきたきと思っていた女性には、いやな時代だったらしい。\n\n\n今は、おっとが仕事でもらうお金だけでは生活できなくなってきたので、女性は、けっこんしてからも仕事をつづけるようになった。すると、今度は、むかしとはんたいの考えの人がふえてきた。わかい女性は、けっこんしたら家の中のことでくわいてからも仕事以外のことでがんばりたいと考えるようになった。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m5.mp3",
    "options": [
      "家族にお金のしんばいをさせないために仕事がしたい",
      "子どもがうまれたら、仕事をやめて家の仕事をしたい",
      "おっとは、もっとお金がもらえるようにがんばってほしい",
      "仕事がすきなのに、男性のようにはたらけなくてざんねんだ"
    ],
    "correct": 3,
    "explanation": "Berdasarkan teks, bagi wanita yang menyukai pekerjaan, masa 30 tahun lalu adalah masa yang buruk karena mereka merasa menyesal tidak bisa bekerja bebas seperti pria (仕事がすきなのに、男性のようにはたらけなくてざんねんだ).",
    "mondai": 5,
    "number": 32
  },
  {
    "id": "bunpou_n4_a_q33",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "今は、どんな考えのわかい女性が増えていますか。",
    "passage": "30年ぐらい前、日本では、男性は60さいまで一つの会社につとめるのがふつうだった。そして、女性はけっこんしたり、子どもをうんだりしたら仕事をやめるのがふつうだった。つまが仕事をしなくても、おっとが会社からもらうお金があれば、家族みんながじゅうぶんに生活できたからだ。\nお金のしんばいをしないで家族が安心して生活できたのは、①とてもいい時代だったと思う。今のように、日本のけいざいが悪くなり、仕事でもらうお金が少なくなったり、仕事がなくなったりする時代とくらべると、ずっといいと思う。\n\n\nでも、②そのころは、仕事がすきで、男性のようにはたらきたきと思っていた女性には、いやな時代だったらしい。\n\n\n今は、おっとが仕事でもらうお金だけでは生活できなくなってきたので、女性は、けっこんしてからも仕事をつづけるようになった。すると、今度は、むかしとはんたいの考えの人がふえてきた。わかい女性は、けっこんしたら家の中のことでくわいてからも仕事以外のことでがんばりたいと考えるようになった。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m5.mp3",
    "options": [
      "外ではたらくよりも、家の仕事をしたい",
      "家の仕事をするよりも、外ではたらきたい",
      "女性が外ではたらけるように、男性は家の仕事を手つだってほしい",
      "男性は、同じ会社ではたらく女性をもっと大切にしてほしい"
    ],
    "correct": 1,
    "explanation": "Teks menyatakan bahwa sekarang banyak wanita muda yang berpikir bahwa setelah menikah, mereka ingin sibuk dengan urusan rumah tangga dan fokus pada hal-hal selain pekerjaan (外ではたらくよりも、家の仕事をしたい).",
    "mondai": 5,
    "number": 33
  },
  {
    "id": "bunpou_n4_a_q34",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "日本語学校に通っているマリアさんは、学校が休みの日 に日本の文化を習いたいと 思っています。 学校は土曜日と日曜日が休みです。 少しでも安いほうがいいです。どの教室がいちばんいいですか。",
    "passage": "<div class=\"space-y-6\">\n  <div class=\"border-b pb-3 mb-4\">\n    <h3 class=\"text-xl font-bold text-[#1d3557]\">留学生のための日本文化教室</h3>\n    <p class=\"text-sm text-indigo-600 font-semibold mt-1\">やさしい日本語で教えます！</p>\n  </div>\n\n  <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\">\n    <table class=\"w-full text-left border-collapse text-sm\">\n      <thead>\n        <tr class=\"bg-slate-100 border-b border-slate-200 text-slate-700\">\n          <th class=\"p-3 font-semibold\">内容 (Naiyou)</th>\n          <th class=\"p-3 font-semibold\">曜日・時間 (Youbi/Jikan)</th>\n          <th class=\"p-3 font-semibold\">費用 (Hiyou)</th>\n        </tr>\n      </thead>\n      <tbody class=\"divide-y divide-slate-100 text-slate-700\">\n        <tr>\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">いけ花 (Ikebana)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">日本の伝統的な美しい いけ花をやってみませんか。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">月曜 / 木曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">19:00 - 20:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 1,500円</td>\n        </tr>\n        <tr class=\"bg-slate-50/50\">\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">日本料理のマナー (Manners)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">日本料理の正しい食べ方を教えます。おいしい料理を食べながら日本文化を勉強しませんか。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">金曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">18:30 - 20:30</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 2,000円</td>\n        </tr>\n        <tr>\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">着物の着付け (Kitsuke)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">浴衣を使って、かんたんな着物の着方を教えます。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-teal-50 text-teal-700 rounded text-xs font-semibold border border-teal-100\">火曜 / 水曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">16:00 - 18:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-emerald-600\">無料</td>\n        </tr>\n        <tr class=\"bg-slate-50/50\">\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">すし作り (Sushi tsukuri)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">ひとりでもかんたんに巻き寿司を作れる作り方を教えます。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-rose-50 text-rose-700 rounded text-xs font-semibold border border-rose-100\">日曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">10:00 - 12:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 1,000円</td>\n        </tr>\n        <tr>\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">天ぷら作り (Tempura tsukuri)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">野菜と魚の天ぷらを作ってみましょう。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-sky-50 text-sky-700 rounded text-xs font-semibold border border-sky-100\">月曜 / 水曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">18:00 - 19:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 1,200円</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"bg-slate-50 p-3 rounded-xl text-xs border border-slate-100 text-slate-600\">\n    <div>注：無料…お金はかかりません (Catatan: Gratis... Tidak dikenakan biaya)</div>\n  </div>\n</div>",
    "options": [
      "いけ花",
      "日本料理のマナー",
      "着物の着付け",
      "すし作り"
    ],
    "correct": 3,
    "explanation": "Sekolah Maria libur pada hari Sabtu dan Minggu (土曜日と日曜日). Dari lima pilihan kelas yang ada, kelas yang diadakan pada akhir pekan adalah \"すし作り\" (Hari Minggu). Kelas ini dikenakan biaya 1.000 yen (lebih murah dibandingkan \"いけ花\" seharga 1.500 yen).",
    "mondai": 6,
    "number": 34
  },
  {
    "id": "bunpou_n4_a_q35",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "日本の大学で勉強している アレン さんは、平日の夕方、大学の帰りに何か習いたいと 思っています。大学の授業は平日 5 時までです。アレン さんの趣味は料理で、日本の料理を作れるようになりたいと思っています。どの教室がいちばんいいですか。",
    "passage": "<div class=\"space-y-6\">\n  <div class=\"border-b pb-3 mb-4\">\n    <h3 class=\"text-xl font-bold text-[#1d3557]\">留学生のための日本文化教室</h3>\n    <p class=\"text-sm text-indigo-600 font-semibold mt-1\">やさしい日本語で教えます！</p>\n  </div>\n\n  <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\">\n    <table class=\"w-full text-left border-collapse text-sm\">\n      <thead>\n        <tr class=\"bg-slate-100 border-b border-slate-200 text-slate-700\">\n          <th class=\"p-3 font-semibold\">内容 (Naiyou)</th>\n          <th class=\"p-3 font-semibold\">曜日・時間 (Youbi/Jikan)</th>\n          <th class=\"p-3 font-semibold\">費用 (Hiyou)</th>\n        </tr>\n      </thead>\n      <tbody class=\"divide-y divide-slate-100 text-slate-700\">\n        <tr>\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">いけ花 (Ikebana)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">日本の伝統的な美しい いけ花をやってみませんか。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-100\">月曜 / 木曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">19:00 - 20:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 1,500円</td>\n        </tr>\n        <tr class=\"bg-slate-50/50\">\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">日本料理のマナー (Manners)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">日本料理の正しい食べ方を教えます。おいしい料理を食べながら日本文化を勉強しませんか。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-semibold border border-amber-100\">金曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">18:30 - 20:30</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 2,000円</td>\n        </tr>\n        <tr>\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">着物の着付け (Kitsuke)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">浴衣を使って、かんたんな着物の着方を教えます。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-teal-50 text-teal-700 rounded text-xs font-semibold border border-teal-100\">火曜 / 水曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">16:00 - 18:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-emerald-600\">無料</td>\n        </tr>\n        <tr class=\"bg-slate-50/50\">\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">すし作り (Sushi tsukuri)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">ひとりでもかんたんに巻き寿司を作れる作り方を教えます。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-rose-50 text-rose-700 rounded text-xs font-semibold border border-rose-100\">日曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">10:00 - 12:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 1,000円</td>\n        </tr>\n        <tr>\n          <td class=\"p-3\">\n            <div class=\"font-bold text-slate-800\">天ぷら作り (Tempura tsukuri)</div>\n            <div class=\"text-xs text-slate-500 mt-0.5\">野菜と魚の天ぷらを作ってみましょう。</div>\n          </td>\n          <td class=\"p-3\">\n            <span class=\"px-2 py-0.5 bg-sky-50 text-sky-700 rounded text-xs font-semibold border border-sky-100\">月曜 / 水曜</span>\n            <div class=\"text-xs text-slate-600 mt-1\">18:00 - 19:00</div>\n          </td>\n          <td class=\"p-3 font-medium text-slate-900\">1回 1,200円</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"bg-slate-50 p-3 rounded-xl text-xs border border-slate-100 text-slate-600\">\n    <div>注：無料…お金はかかりません (Catatan: Gratis... Tidak dikenakan biaya)</div>\n  </div>\n</div>",
    "options": [
      "いけ花",
      "日本料理のマナー",
      "すし作り",
      "天ぷら作り"
    ],
    "correct": 3,
    "explanation": "Allen-san ingin belajar memasak makanan Jepang (\"日本の料理を作れるようになりたい\") di hari kerja sore/malam hari setelah kuliah selesai pukul 17:00 (\"平日の夕方、大学の帰り\"). Kelas \"天ぷら作り\" (Membuat Tempura) diadakan pada Senin/Rabu jam 18:00 - 19:00, yang memenuhi semua kriteria tersebut.",
    "mondai": 6,
    "number": 35
  }
];

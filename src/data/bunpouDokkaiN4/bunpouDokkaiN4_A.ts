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
    "question": "A「きれいなホテルの（　　）部屋ですね。」\nB「そうですか。ありがとうございます。」",
    "options": [
      "ような",
      "ようの",
      "みたい",
      "らしい"
    ],
    "correct": 0,
    "explanation": "Pola 〜のような (seperti...) digunakan untuk membandingkan atau memberikan contoh tentang suatu kata benda. Di sini kamar tersebut dibandingkan keindahannya dengan hotel (ホテルのような部屋).",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "bunpou_n4_a_q03",
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
    "number": 3
  },
  {
    "id": "bunpou_n4_a_q04",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "先月は恋人の誕生日があったから、10万円（　　）つかってしまいました。",
    "options": [
      "も",
      "が",
      "で",
      "を"
    ],
    "correct": 0,
    "explanation": "Partikel 「も」 diletakkan setelah jumlah/nominal untuk menekankan jumlah yang sangat besar atau melebihi perkiraan (sampai menghabiskan 100 ribu yen).",
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
    "number": 12
  },
  {
    "id": "bunpou_n4_a_q13",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "駅で電車に（　　）としたときに、かばんがないことに気づきました。",
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
    "question": "A「さっき、駅でリンさんを見ましたよ。」\nB「それは、リンさんではありません。リンさんは国に帰りました（　　）でしょう。」",
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
    "question": "朝からテレビ ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ 勉強しなさい。",
    "options": [
      "ばかり",
      "見て",
      "い",
      "ないで"
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
      "日本へ",
      "行く",
      "こと",
      "になった"
    ],
    "correct": 2,
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
      "マリアさん",
      "が",
      "歌う",
      "かどうか"
    ],
    "correct": 2,
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
      "わたし",
      "のほど",
      "使いやすくない"
    ],
    "correct": 1,
    "explanation": "Urutan yang benar: [カメラは (0)] [★わたし (1)] [のほど (2)] [使いやすくない (3)] です。Pola 〜ほど〜ない menyatakan perbandingan negatif ('tidak se-... milik saya').",
    "mondai": 2,
    "number": 19
  },
  {
    "id": "bunpou_n4_a_q20",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "リンさんは、来月 ＿＿＿ ＿＿＿ ＿★＿ ＿＿＿ そうです。",
    "options": [
      "国へ",
      "帰ったら",
      "家の近くの",
      "公園へ行きたい"
    ],
    "correct": 2,
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
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）のに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
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
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）のに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
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
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）のに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
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
    "passage": "前田先生\n先生、こんばんは. リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）のに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g2.mp3",
    "options": [
      "聞かれません",
      "聞かせてください",
      "聞きました",
      "聞くつもり"
    ],
    "correct": 0,
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
    "passage": "前田先生\n先生、こんばんは。リンです。\n今、大学から家に（　21　）です。電車の中でこのメールを書いています。\n午前は日本語の試験、午後は大学の先生と一人ずつ話をしました。\n日本語の試験は、読んで答える問題（　22　）で、漢字やぶんぽうの問題はありませんでした。\n午後は田中先生という先生と話をしました。\n大学に入りたい理由や、将来どんな仕事がしたいかなどを質問されました。\n前田先生と一緒に（　23　）のに、うまく話せませんでした。\nアルバイトをするつもりがあるかは（　24　）でした。\n結果がどうなるか心配です。\nわかり次第、（　25　）と思います。\nリン",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m3_g1.mp3",
    "options": [
      "ご連絡したいと",
      "ご連絡させていただきますと",
      "ご連絡してあげたいと",
      "ご連絡させていただきたいと"
    ],
    "correct": 3,
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
      "必要なものだけを近くで買いたい人が増えたから",
      "コンビニには食べ物しか置いていないから"
    ],
    "correct": 2,
    "explanation": "Berdasarkan teks, orang-orang seperti lansia, orang yang tinggal sendiri, atau keluarga bekerja lebih memilih membeli barang yang benar-benar dibutuhkan secara mudah di toko terdekat (konbini) daripada pergi ke supermarket yang jauh.",
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
      "一人で静かに仕事をしたい人だけ"
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
      "近くの道に車を止める。",
      "近くのコインパーキングに車を止める。",
      "南運動場の使っていないところに車を止める。",
      "運動場入り口の駐車場に車を止める。"
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
    "passage": "パンダは毛の色が白と黒にはっきりと分かれている、珍しい動物として知られています。そのパンダが2頭、去年の4月からこの動物園にいます。毎日たくさんの人が見に来ます。パンダは何を食べているのでしょうか。この動物園では、1日に20kgから30kgの竹を食べさせていて、そのほかにニンジンやリンゴなども1日に3回から4回食べさせているそうです。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m4_q4.mp3",
    "options": [
      "竹だけを食べている。",
      "ニンジンやリンゴだけを食べている。",
      "竹も食べるが、ニンジンやリンゴなども食べている。",
      "何も食べないで毎日寝ている。"
    ],
    "correct": 2,
    "explanation": "Berdasarkan teks, kebun binatang tersebut memberi makan panda 20kg-30kg bambu per hari, dan selain itu juga memberikan wortel serta apel sebanyak 3-4 kali sehari.",
    "mondai": 4,
    "number": 29
  },
  {
    "id": "bunpou_n4_a_q30",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "どうして、30年前について「とてもいい時代だった」と思う人がいるのですか。",
    "passage": "30年ぐらい前、日本では、男性は60歳まで一つの会社に勤めるのが普通だった。そして、女性は結婚したり、子どもを産んだりしたら仕事をやめるのが普通だった。夫が会社からもらうお金があれば、家族みんなが十分生活できたからだ。お金の心配をしないで家族が安心して生活できたのは、とてもいい時代だったと思う。しかしその後、日本の経済が悪くなり、仕事でもらうお金が少なくなったり、仕事がなくなったりするようになった。すると今度は、夫のお金だけでは生活できなくなったので、妻も結婚してからも仕事を続けるようになった。仕事が好きな女性にとっては、30年前は嫌な時代だったらしい。仕事が好きなのに、男性のようにはたらけなくて残念だと思っていたからだ。今は、共働きの家庭が増え、若い女性も結婚して子どもを育てながら仕事を続けたいと考える人が多くなった。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m5.mp3",
    "options": [
      "女性が家事をするのが普通だったから",
      "お金の心配をしないで家族が安心して生活できたから",
      "仕事が好きな女性が男性のようにはたらけたから",
      "仕事がなくなってもお金がもらえたから"
    ],
    "correct": 1,
    "explanation": "Teks menyebutkan bahwa 30 tahun lalu, bahkan jika istri tidak bekerja, gaji suami dari perusahaan sudah cukup bagi seluruh keluarga untuk hidup aman tanpa mengkhawatirkan uang.",
    "mondai": 5,
    "number": 30
  },
  {
    "id": "bunpou_n4_a_q31",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "仕事が好きな女性は、30年前、どう思っていましたか。",
    "passage": "30年ぐらい前、日本では、男性は60歳まで一つの会社に勤めるのが普通だった。そして、女性は結婚したり、子どもを産んだりしたら仕事をやめるのが普通だった。夫が会社からもらうお金があれば、家族みんなが十分生活できたからだ。お金の心配をしないで家族が安心して生活できたのは、とてもいい時代だったと思う。しかしその後、日本の経済が悪くなり、仕事でもらうお金が少なくなったり、仕事がなくなったりするようになった。すると今度は、夫のお金だけでは生活できなくなったので、妻も結婚してからも仕事を続けるようになった。仕事が好きな女性にとっては、30年前は嫌な時代だったらしい。仕事が好きなのに、男性のようにはたらけなくて残念だと思っていたからだ。今は、共働きの家庭が増え、若い女性も結婚して子どもを育てながら仕事を続けたいと考える人が多くなった。",
    "audioUrl": "https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N4-Bunpou-Dokkai/n4_bunpou_dokkai_a_m5.mp3",
    "options": [
      "家族のためにはたらきたくないと思っていた",
      "子どもが生まれたらすぐに仕事をやめたいと思っていた",
      "仕事が好きなのに男性のようにはたらけなくて残念だと思っていた",
      "夫がもっとはたらいてお金を稼いでほしいと思っていた"
    ],
    "correct": 2,
    "explanation": "Teks menyatakan bahwa bagi wanita yang suka bekerja, 30 tahun lalu adalah era yang tidak menyenangkan karena mereka merasa menyesal tidak bisa bekerja secara bebas seperti pria.",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "bunpou_n4_a_q32",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "マリアさんはどの教室に行くのがいちばんいいですか。",
    "passage": "【留学生のための日本文化教室】\nやさしい日本語で教えます！日本の文化を体験しませんか。\n\n・いけ花：月曜日・木曜日 19:00 - 20:00（1回 1,500円）\n・着物の着付け：火曜日・水曜日 16:00 - 18:00（無料）\n・すし作り：日曜日 10:00 - 12:00（1回 1,000円）\n・天ぷら作り：月曜日・水曜日 18:00 - 19:00（1回 1,200円）\n\n※マリアさんは日本語学校に通っています。学校が休みの日に日本文化を勉強したいです。学校は土曜日と日曜日が休みです。できるだけ安いほうがいいです。",
    "options": [
      "いけ花",
      "着物の着付け",
      "すし作り",
      "天ぷら作り"
    ],
    "correct": 2,
    "explanation": "Sekolah Maria libur pada hari Sabtu dan Minggu. Dari empat pilihan kelas yang ada, hanya kelas \"すし作り\" (Membuat Sushi) yang diadakan pada hari Minggu (10:00 - 12:00) dengan biaya 1.000 yen.",
    "mondai": 6,
    "number": 32
  }
];

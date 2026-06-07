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

export const bunpouDokkaiN4D: LegacyQuestion[] = [
  {
    "id": "bunpou_n4_d_q01",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "きのう（　　）えいがを見ました。",
    "options": ["は", "が", "を", "に"],
    "correct": 0,
    "explanation": "Kemarin saya menonton film. Partikel 「は」 digunakan di sini untuk menandai topik waktu (きのうは)。",
    "mondai": 1,
    "number": 1
  },
  {
    "id": "bunpou_n4_d_q02",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "この本は（　　）おもしろいです。",
    "options": ["とても", "とてもに", "とてもの", "とてもを"],
    "correct": 0,
    "explanation": "Buku ini sangat menarik. 「とても」 adalah kata keterangan (adverb) yang memodifikasi kata sifat langsung tanpa membutuhkan partikel tambahan.",
    "mondai": 1,
    "number": 2
  },
  {
    "id": "bunpou_n4_d_q03",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "ともだち（　　）手紙を書きました。",
    "options": ["に", "を", "で", "が"],
    "correct": 0,
    "explanation": "Saya menulis surat untuk teman. Partikel 「に」 menandai penerima sasaran dari kata kerja tindakan (menulis kepada siapa).",
    "mondai": 1,
    "number": 3
  },
  {
    "id": "bunpou_n4_d_q04",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "あさごはんを（　　）から、学校へ行きます。",
    "options": ["たべる", "たべた", "たべて", "たべます"],
    "correct": 2,
    "explanation": "Setelah sarapan, saya pergi to sekolah. Pola 〜てから (setelah...) menggunakan Kata Kerja bentuk-て (たべて) untuk menyatakan urutan kegiatan.",
    "mondai": 1,
    "number": 4
  },
  {
    "id": "bunpou_n4_d_q05",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "この道は（　　）歩いてください。",
    "options": ["まっすぐ", "まっ方向に", "まっすぐで", "まっすぐを"],
    "correct": 0,
    "explanation": "Harap berjalan lurus di jalan ini. 「まっすぐ」 adalah kata keterangan yang langsung memodifikasi kata kerja tanpa partikel tambahan (まっすぐ歩く).",
    "mondai": 1,
    "number": 5
  },
  {
    "id": "bunpou_n4_d_q06",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "にほんごが（　　）なりました。",
    "options": ["じょうず", "じょうずに", "じょうずだ", "じょうずで"],
    "correct": 1,
    "explanation": "Bahasa Jepang saya menjadi mahir. Kata sifat-na + に + なる (じょうずに + なる) digunakan untuk menyatakan perubahan kondisi.",
    "mondai": 1,
    "number": 6
  },
  {
    "id": "bunpou_n4_d_q07",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "あしたはあめが（　　）でしょう。",
    "options": ["ふる", "ふって", "ふった", "ふり"],
    "correct": 0,
    "explanation": "Besok mungkin akan hujan. Prediksi atau perkiraan menggunakan 「～でしょう」 didahului oleh Kata Kerja bentuk biasa/kamus (ふる).",
    "mondai": 1,
    "number": 7
  },
  {
    "id": "bunpou_n4_d_q08",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "かぜをひいて、（　　）きました。",
    "options": ["ねたい", "ねたく", "ねたくて", "ねたくない"],
    "correct": 2,
    "explanation": "Saya masuk angin dan ingin tidur. Pola KK bentuk keinginan -たい diubah menjadi bentuk bersambung -たくて untuk menyatakan alasan/penyebab.",
    "mondai": 1,
    "number": 8
  },
  {
    "id": "bunpou_n4_d_q09",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "このケーキは（　　）作りました。",
    "options": ["じぶんで", "じぶんに", "じぶんを", "じぶんが"],
    "correct": 0,
    "explanation": "Kue ini saya buat sendiri. 「じぶんで」 berarti 'dengan usaha sendiri'. Partikel 「で」 menunjukkan pelaku/cara.",
    "mondai": 1,
    "number": 9
  },
  {
    "id": "bunpou_n4_d_q10",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "かぞく（　　）にほんにいます。",
    "options": ["は", "が", "と", "を"],
    "correct": 0,
    "explanation": "Keluarga saya berada di Jepang. Partikel 「は」 menandai topik utama kalimat (かぞくは).",
    "mondai": 1,
    "number": 10
  },
  {
    "id": "bunpou_n4_d_q11",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "まどを（　　）ください。",
    "options": ["あけて", "あけた", "あける", "あけます"],
    "correct": 0,
    "explanation": "Harap buka jendela. Pola permintaan sopan menggunakan KK bentuk-て + ください (あけてください).",
    "mondai": 1,
    "number": 11
  },
  {
    "id": "bunpou_n4_d_q12",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "にほん（　　）いきたいです。",
    "options": ["へ", "を", "で", "に"],
    "correct": 0,
    "explanation": "Saya ingin pergi ke Jepang. Partikel 「へ」 menunjukkan arah tujuan (ke Jepang).",
    "mondai": 1,
    "number": 12
  },
  {
    "id": "bunpou_n4_d_q13",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "このくるまは（　　）です。",
    "options": ["あたらしくて", "あたらしく", "あたらしい", "あたらし"],
    "correct": 2,
    "explanation": "Mobil ini baru. Kata sifat-i sebelum 「です」 menggunakan bentuk kamus langsung (あたらしい).",
    "mondai": 1,
    "number": 13
  },
  {
    "id": "bunpou_n4_d_q14",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "べんきょう（　　）、テレビを見ます。",
    "options": ["してから", "して", "した", "する"],
    "correct": 0,
    "explanation": "Setelah belajar, saya menonton TV. Pola 「～てから」 menyatakan urutan kejadian (setelah melakukan belajar).",
    "mondai": 1,
    "number": 14
  },
  {
    "id": "bunpou_n4_d_q15",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-1",
    "question": "かれは（　　）人です。",
    "options": ["しんせつな", "しんせつに", "しんせつで", "しんせつだ"],
    "correct": 0,
    "explanation": "Dia adalah orang yang baik hati. Kata sifat な membutuhkan akhiran 「な」 sebelum menerangkan kata benda (しんせつな人).",
    "mondai": 1,
    "number": 15
  },
  {
    "id": "bunpou_n4_d_q16",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "＿★＿ ＿＿＿ ＿＿＿ ＿＿＿",
    "options": ["きのう", "本", "を", "買いました"],
    "correct": 0,
    "explanation": "Urutan yang benar: [きのう (1)] [本 (2)] [を (3)] [買いました (4)]. Bintang berada di posisi pertama, yaitu kata 「きのう」.",
    "mondai": 2,
    "number": 16
  },
  {
    "id": "bunpou_n4_d_q17",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "＿★＿ ＿＿＿ ＿＿＿ ＿＿＿",
    "options": ["いつも", "バスで", "学校へ", "行きます"],
    "correct": 0,
    "explanation": "Urutan yang benar: [いつも (1)] [バスで (2)] [学校へ (3)] [行きます (4)]. Bintang di posisi pertama adalah kata frekuensi 「いつも」.",
    "mondai": 2,
    "number": 17
  },
  {
    "id": "bunpou_n4_d_q18",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "＿★＿ ＿＿＿ ＿＿＿ ＿＿＿",
    "options": ["薬を", "食べて", "から", "寝ました"],
    "correct": 0,
    "explanation": "Urutan yang benar: [薬を (1)] [食べて (2)] [から (3)] [寝ました (4)]. Bintang di posisi pertama adalah objek obat 「薬を」.",
    "mondai": 2,
    "number": 18
  },
  {
    "id": "bunpou_n4_d_q19",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "＿★＿ ＿＿＿ ＿＿＿ ＿＿＿",
    "options": ["私は", "日本語が", "少し", "話せます"],
    "correct": 0,
    "explanation": "Urutan yang benar: [私は (1)] [日本語が (2)] [少し (3)] [話せます (4)]. Bintang di posisi pertama adalah subjek topik 「私は」.",
    "mondai": 2,
    "number": 19
  },
  {
    "id": "bunpou_n4_d_q20",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-2",
    "question": "＿★＿ ＿＿＿ ＿＿＿ ＿＿＿",
    "options": ["今日は", "寒くて", "出かけたく", "ありません"],
    "correct": 0,
    "explanation": "Urutan yang benar: [今日は (1)] [寒くて (2)] [出かけたく (3)] [ありません (4)]. Bintang di posisi pertama adalah topik waktu hari ini 「今日は」.",
    "mondai": 2,
    "number": 20
  },
  {
    "id": "bunpou_n4_d_q21",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　21　）に入る最もよいものを選んでください。",
    "passage": "きのう、ともだちのたなかさんに会いました。田中さんはいつも元気で、（　21　）人です。私たちは喫茶店でコーヒーを飲みながら、（　22　）話しました。田中さんは来月日本へ帰る（　23　）、少しさびしいです。でも、また会える（　24　）、がんばります。田中さんは「メールを（　25　）ね」と言いました。",
    "options": ["しんせつ", "しんせつな", "しんせつに", "しんせつだ"],
    "correct": 1,
    "explanation": "Kata sifat な + 「な」 sebelum kata benda (人). Jadi bentuk yang tepat adalah しんせつな人。",
    "mondai": 3,
    "number": 21
  },
  {
    "id": "bunpou_n4_d_q22",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　22　）に入る最もよいものを選んでください。",
    "passage": "きのう、ともだちのたなかさんに会いました。田中さんはいつも元気で、（　21　）人です。私たちは喫茶店でコーヒーを飲みながら、（　22　）話しました。田中さんは来月日本へ帰る（　23　）、少しさびしいです。でも、また会える（　24　）、がんばります。田中さんは「メールを（　25　）ね」と言いました。",
    "options": ["いろいろ", "いろいろな", "いろいろに", "いろいろだ"],
    "correct": 0,
    "explanation": "「いろいろ」 di sini digunakan langsung sebagai kata keterangan (adverb) yang memodifikasi kata kerja (話しました = mengobrol banyak hal).",
    "mondai": 3,
    "number": 22
  },
  {
    "id": "bunpou_n4_d_q23",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　23　）に入る最もよいものを選んでください。",
    "passage": "きのう、ともだちのたなかさんに会いました。田中さんはいつも元気で、（　21　）人です。私たちは喫茶店でコーヒーを飲みながら、（　22　）話しました。田中さんは来月日本へ帰る（　23　）、少しさびしいです。でも、また会える（　24　）、がんばります。田中さんは「メールを（　25　）ね」と言いました。",
    "options": ["から", "ので", "けれど", "しかし"],
    "correct": 1,
    "explanation": "「ので」 menyatakan hubungan sebab-akibat (karena pulang ke Jepang, saya merasa sedikit sedih). Lebih sopan dan halus dibandingkan 「から」。",
    "mondai": 3,
    "number": 23
  },
  {
    "id": "bunpou_n4_d_q24",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　24　）に入る最もよいものを選んでください。",
    "passage": "きのう、ともだちのたなかさんに会いました。田中さんはいつも元気で、（　21　）人です。私たちは喫茶店でコーヒーを飲みながら、（　22　）話しました。田中さんは来月日本へ帰る（　23　）、少しさびしいです。でも、また会える（　24　）、がんばります。田中さんは「メールを（　25　）ね」と言いました。",
    "options": ["から", "のに", "ために", "ように"],
    "correct": 0,
    "explanation": "「から」 menyatakan alasan logis (karena nanti bisa bertemu kembali, saya akan berusaha/bersemangat).",
    "mondai": 3,
    "number": 24
  },
  {
    "id": "bunpou_n4_d_q25",
    "level": "N4",
    "section": "Grammar",
    "type": "grammar-3",
    "question": "（　25　）に入る最もよいものを選んでください。",
    "passage": "きのう、ともだちのたなかさんに会いました。田中さんはいつも元気で、（　21　）人です。私たちは喫茶店でコーヒーを飲みながら、（　22　）話しました。田中さんは来月日本へ帰る（　23　）、少しさびしいです。でも、また会える（　24　）、がんばります。田中さんは「メールを（　25　）ね」と言いました。",
    "options": ["書く", "書いて", "書くと", "書くから"],
    "correct": 1,
    "explanation": "Pola KK bentuk-て + ね digunakan untuk meminta/mengajak lawan bicara secara santai dan akrab (書いてね = kirim/tulis email ya).",
    "mondai": 3,
    "number": 25
  },
  {
    "id": "bunpou_n4_d_q26",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "このメールの目的は何ですか。",
    "passage": "山田さんへ\n\nお元気ですか。先週はどうもありがとうございました。おいしい料理をたくさん作ってくれて、とてもうれしかったです。来月、私の町へ来るときは、ぜひうちに泊まってください。一緒に近くの山へ登りましょう。待っています。\n\n佐藤より",
    "options": [
      "山田さんに料理を教えること",
      "山田さんに感謝して、来月の約束をすること",
      "山田さんに山の写真を送ること",
      "山田さんに仕事を頼むこと"
    ],
    "correct": 1,
    "explanation": "Email dikirim oleh Sato kepada Yamada untuk mengucapkan terima kasih (感謝) atas masakan lezat minggu lalu dan mengundang Yamada menginap di rumahnya bulan depan untuk naik gunung bersama (来月の約束).",
    "mondai": 4,
    "number": 26
  },
  {
    "id": "bunpou_n4_d_q27",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "会議室を使うとき、何が必要ですか。",
    "passage": "会議室の使用について\n\n・会議室は予約が必要です。\n・予約は前日の午後5時までに事務室へ行ってください。\n・使用後は、机の上をきれいにして、ゴミは持ち帰ってください。\n・飲み物は持ち込み可能ですが、食べ物は禁止です。",
    "options": [
      "当日予約すること",
      "前日の午後5時までに予約すること",
      "食べ物を持っていくこと",
      "事務室で食べること"
    ],
    "correct": 1,
    "explanation": "Sesuai memo aturan penggunaan, reservasi ruang rapat harus diselesaikan paling lambat pukul 5 sore sehari sebelum penggunaan (前日の午後5時までに予約する).",
    "mondai": 4,
    "number": 27
  },
  {
    "id": "bunpou_n4_d_q28",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "図書館はいつ閉まりますか。",
    "passage": "図書館からのお知らせ\n\n来月1日から、図書館の開館時間が変わります。新しい時間は、平日午前9時から午後8時までです。土日は午前10時から午後6時までです。休館日は毎月第1月曜日です。どうぞよろしくお願いいたします。",
    "options": [
      "平日は午後6時",
      "土日は午後8時",
      "平日は午後8時",
      "毎日午後6時"
    ],
    "correct": 2,
    "explanation": "Ditanyakan waktu tutup perpustakaan (閉まります). Teks menyebutkan jam buka hari kerja adalah jam 9 pagi sampai jam 8 malam (平日...午後8時まで). Maka hari kerja tutup pukul 8 malam (平日は午後8時).",
    "mondai": 4,
    "number": 28
  },
  {
    "id": "bunpou_n4_d_q29",
    "level": "N4",
    "section": "Reading",
    "type": "reading-short",
    "question": "この人は田中さんに何を頼んでいますか。",
    "passage": "田中さん、お疲れ様です。明日の会議の資料ですが、コピーがまだ終わっていません。申し訳ありませんが、明日の朝、早く来てコピーをお願いできますか。よろしくお願いします。",
    "options": [
      "会議を中止すること",
      "資料を書くこと",
      "明日の朝、早く来てコピーすること",
      "今日の夜、残業すること"
    ],
    "correct": 2,
    "explanation": "Pesan singkat tersebut meminta Tanaka datang lebih awal besok pagi untuk memfotokopi berkas rapat yang belum selesai (明日の朝、早く来てコピーをお願いできますか).",
    "mondai": 4,
    "number": 29
  },
  {
    "id": "bunpou_n4_d_q30",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "初めのころ、筆者はどうでしたか。",
    "passage": "私は去年、日本へ留学しました。初めは日本語があまり話せなくて、買い物も電話もとても大変でした。でも、ホストファミリーの人たちが親切にしてくれました。毎晩、一緒に晩ご飯を食べながら、たくさん話しました。お母さんはいつもおいしい料理を作ってくれて、お父さんは週末に近くの公園へ連れて行ってくれました。日本語の勉強は大変でしたが、毎日が楽しかったです。\n\n三か月後、日本語が少し話せるようになりました。学校の友達もたくさんできました。一緒に映画を見たり、買い物に行ったりしました。日本の生活は初めは不安でしたが、今ではとても好きです。来年も日本にいたいと思っています。家族や友達に会いたいときは、ビデオ電話で話します。日本に来て、本当によかったです。",
    "options": [
      "日本語がぺらぺら話せました",
      "買い物や電話が大変でした",
      "友達がたくさんいました",
      "日本の生活がとても好きでした"
    ],
    "correct": 1,
    "explanation": "Di paragraf pertama ditulis: 「初めは日本語があまり話せなくて、買い物も電話もとても大変でした」 (Awalnya belanja dan menelepon sangat sulit karena belum lancar berbahasa Jepang).",
    "mondai": 5,
    "number": 30
  },
  {
    "id": "bunpou_n4_d_q31",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "ホストファミリーは筆者に何をしてくれましたか。",
    "passage": "私は去年、日本へ留学しました。初めは日本語があまり話せなくて、買い物も電話 juga とても大変でした。でも、ホストファミリーの人たちが親切にしてくれました。毎晩、一緒に晩ご飯を食べながら、たくさん話しました。お母さんはいつもおいしい料理を作ってくれて、お父さんは週末に近くの公園へ連れて行ってくれました。日本語の勉強は大変でしたが、毎日が楽しかったです。\n\n三か月後、日本語が少し話せるようになりました。学校 of 友達もたくさんできました。一緒に映画を見たり、買い物に行ったりしました。日本の生活は初めは不安でしたが、今ではとても好きです。来年も日本にいたいと思っています。家族や友達に会いたいときは、ビデオ電話で話します。日本に来て、本当によかったです。",
    "options": [
      "日本語を教えてくれました",
      "毎晩一緒に話して、週末に公園へ連れて行ってくれました",
      "学校の宿題を手伝ってくれました",
      "日本へ来るお金を出してくれました"
    ],
    "correct": 1,
    "explanation": "Keluarga inang makan malam bersama sambil mengobrol setiap malam (毎晩、一緒に晩ご飯を食べながら、たくさん話しました) dan ayah inang mengajak ke taman di akhir pekan (お父さんは週末に近くの公園へ連れて行ってくれました).",
    "mondai": 5,
    "number": 31
  },
  {
    "id": "bunpou_n4_d_q32",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "三か月後、筆者はどうなりましたか。",
    "passage": "私は去年、日本へ留学しました。初めは日本語があまり話せなくて、買い物も電話 juga とても大変でした。でも、ホストファミリーの人たちが親切にしてくれました。毎晩、一緒に晩ご飯を食べながら、たくさん話しました。お母さんはいつもおいしい料理を作ってくれて、お父さんは週末に近くの公園へ連れて行ってくれました。日本語の勉強は大変でしたが、毎日が楽しかったです。\n\n三か月後、日本語が少し話せるようになりました。学校の友達もたくさんできました。一緒に映画を見たり、買い物に行ったりしました。日本の生活は初めは不安でしたが、今ではとても好きです。来年も日本にいたいと思っています。家族や友達に会いたいときは、ビデオ電話で話します。日本に来て、本当によかったです。",
    "options": [
      "日本へ帰りました",
      "日本語が少し話せるようになりました",
      "ホストファミリーと別れました",
      "日本の生活が嫌いになりました"
    ],
    "correct": 1,
    "explanation": "Paragraf kedua menyatakan: 「三か月後、日本語が少し話せるようになりました」 (Tiga bulan kemudian, saya menjadi bisa berbicara sedikit bahasa Jepang).",
    "mondai": 5,
    "number": 32
  },
  {
    "id": "bunpou_n4_d_q33",
    "level": "N4",
    "section": "Reading",
    "type": "reading-medium",
    "question": "この文章で筆者が言いたいことは何ですか。",
    "passage": "私は去年、日本へ留学しました。初めは日本語があまり話せなくて、買い物も電話 juga とても大変でした。でも、ホストファミリーの人たちが親切にしてくれました。毎晩、一緒に晩ご飯を食べながら、たくさん話しました。お母さんはいつもおいしい料理を作ってくれて、お父さんは週末に近くの公園へ連れて行ってくれました。日本語の勉強は大変でしたが、毎日が楽しかったです。\n\n三か月後、日本語が少し話せるようになりました。学校の友達もたくさんできました。一緒に映画を見たり、買い物に行ったりしました。日本の生活は初めは不安でしたが、今ではとても好きです。来年も日本にいたいと思っています。家族や友達に会いたいときは、ビデオ電話で話します。日本に来て、本当によかったです。",
    "options": [
      "日本の学校は難しい",
      "日本に留学してよかった",
      "ホストファミリーは厳しい",
      "日本語は簡単に覚えられる"
    ],
    "correct": 1,
    "explanation": "Kalimat terakhir merangkum sentimen utama penulis: 「日本に来て、本当によかったです」 (Saya benar-benar senang telah datang ke Jepang).",
    "mondai": 5,
    "number": 33
  },
  {
    "id": "bunpou_n4_d_q34",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "お客さんが3月3日に来たら、何が安くなりますか。",
    "passage": "<div class=\"space-y-6\">\n  <div class=\"border-b pb-3 mb-4\">\n    <h3 class=\"text-xl font-bold text-[#1d3557]\">春のスーパーセール</h3>\n    <p class=\"text-sm text-indigo-600 font-semibold mt-1\">🌸 春の大感謝祭 🌸</p>\n  </div>\n\n  <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 p-4\">\n    <div class=\"mb-3 text-slate-700\">\n      <strong>【開催期間】</strong>3月1日（金）～ 3月7日（木）<br/>\n      <strong>【営業時間】</strong>午前9時～午後10時（※最終日は午後8時まで）\n    </div>\n\n    <div class=\"border-t pt-3 space-y-4 text-slate-700\">\n      <div>\n        <span class=\"font-bold text-slate-800\">■ 食品コーナー</span>\n        <ul class=\"list-disc list-inside text-sm text-slate-600 pl-2\">\n          <li>野菜・果物：全品20%OFF</li>\n          <li>お肉：国産牛が30%OFF</li>\n          <li class=\"text-indigo-600 font-semibold\">※ 3月3日（日）のみ、お魚も20%OFF</li>\n        </ul>\n      </div>\n\n      <div>\n        <span class=\"font-bold text-slate-800\">■ 日用品コーナー</span>\n        <ul class=\"list-disc list-inside text-sm text-slate-600 pl-2\">\n          <li>洗剤・シャンプー：2個で10%OFF</li>\n          <li>ティッシュ：5個セットで500円</li>\n        </ul>\n      </div>\n\n      <div>\n        <span class=\"font-bold text-slate-800\">■ 特別サービス</span>\n        <ul class=\"list-disc list-inside text-sm text-slate-600 pl-2\">\n          <li>3,000円以上お買い上げの方に、オリジナルエコバッグをプレゼント！ (※なくなり次第終了)</li>\n        </ul>\n      </div>\n\n      <div class=\"text-xs text-slate-500 pt-2 border-t\">\n        <div>※ 3月4日（月）は定休日のためお休みです。</div>\n        <div>※ クレジットカード、電子マネーご利用可能。</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "options": [
      "国産牛だけ",
      "野菜・果物・お肉・お魚",
      "洗剤とシャンプー",
      "ティッシュだけ"
    ],
    "correct": 1,
    "explanation": "Pada tanggal 3 Maret (Minggu), selain sayur/buah (20% OFF) dan daging sapi domestik (30% OFF) yang didiskon harian, ikan juga mendapat diskon 20% khusus hari tersebut (※3月3日のみ、お魚も20%OFF)。",
    "mondai": 6,
    "number": 34
  },
  {
    "id": "bunpou_n4_d_q35",
    "level": "N4",
    "section": "Reading",
    "type": "reading-complex",
    "question": "エコバッグがもらえる条件は何ですか。",
    "passage": "<div class=\"space-y-6\">\n  <div class=\"border-b pb-3 mb-4\">\n    <h3 class=\"text-xl font-bold text-[#1d3557]\">春のスーパーセール</h3>\n    <p class=\"text-sm text-indigo-600 font-semibold mt-1\">🌸 春の大感謝祭 🌸</p>\n  </div>\n\n  <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 p-4\">\n    <div class=\"mb-3 text-slate-700\">\n      <strong>【開催期間】</strong>3月1日（金）～ 3月7日（木）<br/>\n      <strong>【営業時間】</strong>午前9時～午後10時（※最終日は午後8時まで）\n    </div>\n\n    <div class=\"border-t pt-3 space-y-4 text-slate-700\">\n      <div>\n        <span class=\"font-bold text-slate-800\">■ 食品コーナー</span>\n        <ul class=\"list-disc list-inside text-sm text-slate-600 pl-2\">\n          <li>野菜・果物：全品20%OFF</li>\n          <li>お肉：国産牛が30%OFF</li>\n          <li class=\"text-indigo-600 font-semibold\">※ 3月3日（日）のみ、お魚も20%OFF</li>\n        </ul>\n      </div>\n\n      <div>\n        <span class=\"font-bold text-slate-800\">■ 日用品コーナー</span>\n        <ul class=\"list-disc list-inside text-sm text-slate-600 pl-2\">\n          <li>洗剤・シャンプー：2個で10%OFF</li>\n          <li>ティッシュ：5個セットで500円</li>\n        </ul>\n      </div>\n\n      <div>\n        <span class=\"font-bold text-slate-800\">■ 特別サービス</span>\n        <ul class=\"list-disc list-inside text-sm text-slate-600 pl-2\">\n          <li>3,000円以上お買い上げの方に、オリジナルエコバッグをプレゼント！ (※なくなり次第終了)</li>\n        </ul>\n      </div>\n\n      <div class=\"text-xs text-slate-500 pt-2 border-t\">\n        <div>※ 3月4日（月）は定休日のためお休みです。</div>\n        <div>※ クレジットカード、電子マネーご利用可能。</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "options": [
      "何men-pun 買うと、もらえる",
      "3,000円以上買って、bag-masing-masing-masing-masing まだ残っているとき",
      "3月4日に来ると、もらえる",
      "電子マネーで払うと、もらえる"
    ],
    "correct": 1,
    "explanation": "Sesuai brosur, syarat mendapatkan tas ramah lingkungan gratis adalah belanja minimum 3,000 yen (3,000円以上お買い上げ) dan persediaan tas masih ada (※なくなり次第終了)。",
    "mondai": 6,
    "number": 35
  }
];

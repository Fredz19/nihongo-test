const fs = require('fs');
const path = require('path');

const n5BaseData = [
  {
    id: 'n5-001',
    level: 'N5',
    pattern: '〜は〜です',
    reading: 'wa ... desu',
    meaning: 'Menyatakan identitas, status, atau keadaan (A adalah B).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Menghubungkan subjek/topik utama dengan predikat kesopanan di akhir kalimat.',
    structure: '[Subjek/Topik] は [Predikat/Kata Benda/Kata Sifat] です',
    notes: 'Partikel は ditulis dengan karakter "ha" tetapi dilafalkan "wa". です (desu) melambangkan kesopanan (polite).',
    examples: [
      {
        japanese: '私sはインドネシア人です。',
        furigana: '私[わたし]は インドネシア人[じん]です。',
        romaji: 'Watashi wa indonesiah-jin desu.',
        translation: 'Saya adalah orang Indonesia.'
      },
      {
        japanese: '山田さんは先生です。',
        furigana: '山田[やまだ]さんは 先生[せんせい]です。',
        romaji: 'Yamada-san wa sensei desu.',
        translation: 'Tuan Yamada adalah seorang guru.'
      }
    ],
    relatedPatterns: ['n5-002'],
    tags: ['copula', 'polite', 'basics'],
    variations: ['です', 'だ', 'でした', 'だった']
  },
  {
    id: 'n5-002',
    level: 'N5',
    pattern: '〜じゃありません',
    reading: 'ja arimasen',
    meaning: 'Bukan... / Tidak... (Bentuk negatif dari です).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Menyatakan negasi atau penyangkalan bentuk sopan untuk kata benda dan kata sifat-na.',
    structure: '[Subjek] は [Kata Benda / Kata Sifat-na] じゃありません / ではありません',
    notes: 'ではありません (de wa arimasen) lebih formal/tertulis dibandingkan じゃありません (ja arimasen) yang biasa digunakan dalam percakapan.',
    examples: [
      {
        japanese: 'これは私の本じゃありません。',
        furigana: 'これは 私[わたし]の 本[ほん]じゃありません。',
        romaji: 'Kore wa watashi no hon ja arimasen.',
        translation: 'Ini bukan buku saya.'
      },
      {
        japanese: 'あそこは静かじゃありません。',
        furigana: 'あそこは 静[しず]かじゃありません。',
        romaji: 'Asoko wa shizuka ja arimasen.',
        translation: 'Di sana tidak tenang.'
      }
    ],
    relatedPatterns: ['n5-001'],
    tags: ['negation', 'copula', 'polite'],
    variations: ['じゃありません', 'ではありません', 'じゃなかった', 'じゃありませんでした', 'れませんでした']
  },
  {
    id: 'n5-003',
    level: 'N5',
    pattern: '〜も',
    reading: 'mo',
    meaning: 'Juga / Pun (menyatakan kesamaan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menggantikan partikel は (wa) atau が (ga) untuk menunjukkan bahwa informasi tersebut juga berlaku untuk subjek ini.',
    structure: '[Subjek/Objek] も [Predikat]',
    notes: 'Jika digunakan bersama partikel lain seperti に (ni) atau で (de), partikel も diletakkan setelahnya (contoh: にom, でも).',
    examples: [
      {
        japanese: '私も日本語を勉強します。',
        furigana: '私[わたし]も 日本語[にほんご]を 勉強[べんきょう]します。',
        romaji: 'Watashi mo nihongo wo benkyou shimasu.',
        translation: 'Saya juga belajar bahasa Jepang.'
      },
      {
        japanese: 'あれも日本の車です。',
        furigana: 'あれも 日本[にほん]の 車[くるま]です。',
        romaji: 'Are mo nihon no kuruma desu.',
        translation: 'Itu juga mobil buatan Jepang.'
      }
    ],
    relatedPatterns: ['n5-001'],
    tags: ['particle', 'basics', 'addition']
  },
  {
    id: 'n5-004',
    level: 'N5',
    pattern: '〜の',
    reading: 'no',
    meaning: 'Menyatakan kepemilikan, modifikasi, atau asal-usul.',
    category: 'Partikel Dasar',
    jlptFunction: 'Menghubungkan dua kata benda di mana kata benda pertama menerangkan kata benda kedua.',
    structure: '[Kata Benda 1] の [Kata Benda 2]',
    notes: 'Kata benda pertama dapat berupa pemilik, kategori, bahan pembuat, lokasi, atau asal produk dari kata benda kedua.',
    examples: [
      {
        japanese: 'これは私の傘です。',
        furigana: 'これは 私[わたし]の 傘[かさ]です。',
        romaji: 'Kore wa watashi no kasa desu.',
        translation: 'Ini adalah payung milik saya.'
      },
      {
        japanese: '日本のカメラはいいです。',
        furigana: '日本[にほん]の カメラはいいです。',
        romaji: 'Nihon no kamera wa ii desu.',
        translation: 'Kamera buatan Jepang itu bagus.'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'possessive', 'modifier']
  },
  {
    id: 'n5-005',
    level: 'N5',
    pattern: '〜に (Tujuan/Waktu)',
    reading: 'ni',
    meaning: 'Di / Ke / Pada (penanda waktu spesifik, tempat keberadaan, atau tujuan pergerakan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan waktu terjadinya aktivitas (spesifik angka), tujuan pergi, atau letak benda berada.',
    structure: '[Waktu/Tempat/Aktivitas] に [Kata Kerja Pergerakan/Keberadaan]',
    notes: 'Untuk waktu relatif seperti "besok", "kemarin", atau "minggu depan", partikel に tidak digunakan.',
    examples: [
      {
        japanese: '毎朝七時に起きます。',
        furigana: '毎朝[まいあさ] 七時[しちじ]に 起[お]きます。',
        romaji: 'Maiasa shichiji ni okimasu.',
        translation: 'Saya bangun pada jam tujuh setiap pagi.'
      },
      {
        japanese: '図書館に本があります。',
        furigana: '図書館[としょかん]に 本[ほん]があります。',
        romaji: 'Toshokan ni hon ga arimasu.',
        translation: 'Di perpustakaan ada buku.'
      }
    ],
    relatedPatterns: ['n5-006', 'n5-007'],
    tags: ['particle', 'time', 'location']
  },
  {
    id: 'n5-006',
    level: 'N5',
    pattern: '〜へ',
    reading: 'e',
    meaning: 'Ke / Menuju ke (arah pergerakan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menandai arah pergerakan atau tujuan perjalanan subjek.',
    structure: '[Tempat Tujuan] へ [いきます / きます / かえります]',
    notes: 'Partikel へ ditulis dengan hiragana "he" namun dilafalkan "e". Fungsinya mirip dengan に tetapi lebih menekankan pada "arah perjalanannya".',
    examples: [
      {
        japanese: '明日東京へ行きます。',
        furigana: '明日[あした] 東京[とうきょう]へ 行[い]きます。',
        romaji: 'Ashita toukyou e ikimasu.',
        translation: 'Besok saya akan pergi ke Tokyo.'
      },
      {
        japanese: '家へ帰ってもいいですか。',
        furigana: '家[うち]へ 帰[かえ]ってもいいですか。',
        romaji: 'Uchi e kaette mo ii desu ka.',
        translation: 'Bolehkah saya pulang ke rumah?'
      }
    ],
    relatedPatterns: ['n5-005'],
    tags: ['particle', 'destination', 'motion']
  },
  {
    id: 'n5-007',
    level: 'N5',
    pattern: '〜で',
    reading: 'de',
    meaning: 'Di (tempat aktivitas) / Dengan (menggunakan alat/transportasi).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menandai tempat terjadinya aksi aktif, atau cara/alat/sarana yang digunakan untuk melakukan sesuatu.',
    structure: '[Tempat/Alat/Metode] で [Kata Kerja]',
    notes: 'Jangan tertukar dengan に. Partikel で digunakan untuk aktivitas aktif (e.g. makan, belajar), sedangkan に digunakan untuk posisi diam (e.g. tinggal, ada).',
    examples: [
      {
        japanese: '食堂で昼ご飯を食べます。',
        furigana: '食堂[しょくどう]で 昼[ひる]ご飯[ごはん]を 食べ[たべ]ます。',
        romaji: 'Shokudou de hirugohan wo tabemasu.',
        translation: 'Saya makan siang di kantin.'
      },
      {
        japanese: 'ハサミで紙を切ります。',
        furigana: 'ハサミで 紙[かみ]を 切り[き]ます。',
        romaji: 'Hasami de kami wo kirimasu.',
        translation: 'Saya memotong kertas dengan gunting.'
      }
    ],
    relatedPatterns: ['n5-005'],
    tags: ['particle', 'location', 'means']
  },
  {
    id: 'n5-008',
    level: 'N5',
    pattern: '〜を',
    reading: 'wo / o',
    meaning: 'Menandai objek penderita (objek langsung dari kata kerja).',
    category: 'Partikel Dasar',
    jlptFunction: 'Diletakkan langsung setelah kata benda yang menjadi target tindakan kata kerja transitif.',
    structure: '[Objek Kata Benda] を [Kata Kerja Transitif]',
    notes: 'Ditulis dengan hiragana "wo" tetapi diucapkan sebagai "o".',
    examples: [
      {
        japanese: '毎日水を飲みます。',
        furigana: '毎日[まいにch] 水[mizu]を 飲み[の]みます。',
        romaji: 'Mainichi mizu wo nomimasu.',
        translation: 'Saya minum air setiap hari.'
      },
      {
        japanese: 'テレビを見ます。',
        furigana: 'テレビを 見[み]ます。',
        romaji: 'Terebi wo mimasu.',
        translation: 'Saya menonton televisi.'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'object', 'basics']
  },
  {
    id: 'n5-009',
    level: 'N5',
    pattern: '〜と',
    reading: 'to',
    meaning: 'Dan (menghubungkan benda) / Bersama dengan (penyerta).',
    category: 'Partikel Dasar',
    jlptFunction: 'Digunakan untuk mendaftarkan semua kata benda secara lengkap, atau menunjukkan rekan dalam melakukan suatu kegiatan.',
    structure: '[Kata Benda 1] と [Kata Benda 2] / [Orang/Hewan] と [Kata Kerja]',
    notes: 'Jika ingin menyebutkan daftar benda secara acak atau tidak lengkap, gunakan partikel や (ya) sebagai gantinya.',
    examples: [
      {
        japanese: 'パンと卵を食べました。',
        furigana: 'パンと 卵[たまご]を 食べ[たべ]ました。',
        romaji: 'Pan to tamago wo tabemashita.',
        translation: 'Saya telah makan roti dan telur.'
      },
      {
        japanese: '友達と映画を見ました。',
        furigana: '友達[ともだち]と 映画[えいが]を 見[み]ました。',
        romaji: 'Tomodachi to eiga wo mimashita.',
        translation: 'Saya menonton film bersama teman.'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'conjunction', 'basics']
  },
  {
    id: 'n5-010',
    level: 'N5',
    pattern: '〜から 〜まで',
    reading: 'kara ... made',
    meaning: 'Dari... sampai... (batasan waktu atau tempat).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan titik awal (から) dan titik akhir (まで) dari durasi waktu atau jarak geografis.',
    structure: '[Titik Awal] から [Titik Akhir] まで',
    notes: 'Kedua partikel ini bisa digunakan terpisah secara mandiri sesuai keperluan kalimat.',
    examples: [
      {
        japanese: '仕事は九時から五時までです。',
        furigana: '仕事[しごと]は 九時[くじ]から 五時[ごじ]までです。',
        romaji: 'Shigoto wa kuji kara goji made desu.',
        translation: 'Pekerjaan saya dari jam sembilan sampai jam lima.'
      },
      {
        japanese: '駅から大学まで歩きます。',
        furigana: '駅[えき]から 大学[だいがく]まで 歩[ある]きます。',
        romaji: 'Eki kara daigaku made arukimasu.',
        translation: 'Saya berjalan kaki dari stasiun sampai ke universitas.'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'time', 'distance']
  },
  {
    id: 'n5-011',
    level: 'N5',
    pattern: '〜があります',
    reading: 'ga arimasu',
    meaning: 'Ada... / Memiliki... (untuk benda mati dan tumbuhan).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Menyatakan keberadaan benda tidak bernyawa di suatu lokasi, atau menyatakan kepemilikan barang abstrak/mati.',
    structure: '[Tempat] に [Kata Benda] が あります',
    notes: 'Bentuk negatifnya adalah ありません (arimasen). Untuk benda hidup (orang/hewan), gunakan います (imasu).',
    examples: [
      {
        japanese: '机の上に本があります。',
        furigana: '机[つくえ]の 上[うえ]に 本[ほん]があります。',
        romaji: 'Tsukue no ue ni hon ga arimasu.',
        translation: 'Ada buku di atas meja.'
      },
      {
        japanese: '私は車があります。',
        furigana: '私[わたし]は 車[くるま]があります。',
        romaji: 'Watashi wa kuruma ga arimasu.',
        translation: 'Saya mempunyai/memiliki mobil.'
      }
    ],
    relatedPatterns: ['n5-012'],
    tags: ['existence', 'possession', 'basics']
  },
  {
    id: 'n5-012',
    level: 'N5',
    pattern: '〜がいます',
    reading: 'ga imasu',
    meaning: 'Ada... / Memiliki... (untuk manusia dan hewan).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Menyatakan keberadaan makhluk bernyawa di suatu lokasi.',
    structure: '[Tempat] に [Makhluk Hidup] が います',
    notes: 'Bentuk negatifnya adalah いません (imasen). Bentuk kamus / biasanya adalah いる (iru).',
    examples: [
      {
        japanese: '教室に学生がいます。',
        furigana: '教室[きょうしつ]に 学生[gあくせい]がいます。',
        romaji: 'Kyoushitsu ni gakusei ga imasu.',
        translation: 'Ada siswa di dalam kelas.'
      },
      {
        japanese: '私には猫が三匹います。',
        furigana: '私[わたし]には 猫[ねこ]ga 三匹[さんびき]います。',
        romaji: 'Watashi ni wa neko ga sanbiki imasu.',
        translation: 'Saya mempunyai tiga ekor kucing.'
      }
    ],
    relatedPatterns: ['n5-011'],
    tags: ['existence', 'people', 'animals']
  },
  {
    id: 'n5-013',
    level: 'N5',
    pattern: '〜てください',
    reading: 'te kudasai',
    meaning: 'Tolong... / Silakan... (permintaan sopan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Memberikan instruksi bersahabat, permohonan bantuan secara sopan, atau mempersilakan tamu.',
    structure: 'Kata Kerja (Bentuk -te) + ください',
    notes: 'Gunakan bentuk 〜ないでください (naide kudasai) untuk melarang seseorang secara halus.',
    examples: [
      {
        japanese: '窓を開けてください。',
        furigana: '窓[まど]を 開[あ]けてください。',
        romaji: 'Mado wo akete kudasai.',
        translation: 'Tolong buka jendelanya.'
      },
      {
        japanese: 'ここに名前を書いてください。',
        furigana: 'ここに 名前[namae]を 書[か]いてください。',
        romaji: 'Koko ni namae wo kaite kudasai.',
        translation: 'Tolong tulis nama Anda di sini.'
      }
    ],
    relatedPatterns: ['n5-014', 'n5-015'],
    tags: ['request', 'te-form', 'polite']
  },
  {
    id: 'n5-014',
    level: 'N5',
    pattern: '〜ないでください',
    reading: 'naide kudasai',
    meaning: 'Tolong jangan... (permintaan negatif sopan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Meminta seseorang secara halus untuk tidak melakukan suatu tindakan.',
    structure: 'Kata Kerja (Bentuk -nai) + でください',
    notes: 'Pola ini merupakan lawan langsung dari pola 〜てください (te kudasai).',
    examples: [
      {
        japanese: 'ここで写真を撮らないでください。',
        furigana: 'ここで 写真[しゃしん]を 撮[と]らないでください。',
        romaji: 'Koko de shashin wo toranaide kudasai.',
        translation: 'Tolong jangan mengambil foto di sini.'
      },
      {
        japanese: '無理をしないでください。',
        furigana: '無理[むり]をしないでください。',
        romaji: 'Muri wo shinaide kudasai.',
        translation: 'Tolong jangan memaksakan diri Anda.'
      }
    ],
    relatedPatterns: ['n5-013'],
    tags: ['prohibition', 'request', 'negative']
  },
  {
    id: 'n5-015',
    level: 'N5',
    pattern: '〜てもいいです',
    reading: 'te mo ii desu',
    meaning: 'Boleh... (menyatakan izin / meminta izin).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Memberikan izin untuk berbuat sesuatu, atau menanyakan kelayakan tindakan (meminta permisi).',
    structure: 'Kata Kerja (Bentuk -te) + もいい (desu / desuka)',
    notes: 'Menambahkan ですか (desu ka) di akhir merubah fungsinya menjadi pertanyaan permisi ("Bolehkah saya...?").',
    examples: [
      {
        japanese: 'タバコを吸ってもいいですか。',
        furigana: 'タバコを 吸[す]ってもいいですか。',
        romaji: 'Tabako wo sutte mo ii desu ka.',
        translation: 'Bolehkah saya merokok?'
      },
      {
        japanese: 'ここで遊んでもいいですよ。',
        furigana: 'ここで 遊[あそ]んでもいいですよ。',
        romaji: 'Koko de asonde mo ii desu yo.',
        translation: 'Kamu boleh bermain di sini lho.'
      }
    ],
    relatedPatterns: ['n5-013', 'n5-016'],
    tags: ['permission', 'te-form', 'request']
  },
  {
    id: 'n5-016',
    level: 'N5',
    pattern: '〜てはいけません',
    reading: 'te wa ikemasen',
    meaning: 'Tidak boleh... / Dilarang... (larangan keras).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan larangan resmi atau aturan ketat yang tidak mengizinkan suatu perbuatan.',
    structure: 'Kata Kerja (Bentuk -te) + は + いけません',
    notes: 'Ditulis dengan hiragana "ha" namun dibaca "wa". Pola ini terdengar tegas dan sering ada pada papan peraturan umum.',
    examples: [
      {
        japanese: 'ここに車を止めてはいけません。',
        furigana: 'ここに 車[くるま]を 止め[と]めてはいけません。',
        romaji: 'Koko ni kuruma wo tomete wa ikemasen.',
        translation: 'Dilarang memarkir mobil di sini.'
      },
      {
        japanese: '試験中に話してはいけません。',
        furigana: '試験[しけん]中[ちゅう]に 話[は]なしてはいけません。',
        romaji: 'Shikenchuu ni hanashite wa ikemasen.',
        translation: 'Tidak boleh berbicara selama ujian berlangsung.'
      }
    ],
    relatedPatterns: ['n5-015'],
    tags: ['prohibition', 'rules', 'te-form']
  },
  {
    id: 'n5-017',
    level: 'N5',
    pattern: '〜ています',
    reading: 'te imasu',
    meaning: 'Sedang... / Menyatakan kondisi/status yang berlangsung.',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menunjukkan aksi yang sedang berjalan saat ini (continuous), atau status permanen pasca aksi (seperti status menikah/bertempat tinggal).',
    structure: 'Kata Kerja (Bentuk -te) + います',
    notes: 'Kata kerja seperti 知る (shiru - tahu) atau 住む (sumu - tinggal) harus selalu digunakan dalam bentuk 〜ています untuk menyatakan kondisi saat ini.',
    examples: [
      {
        japanese: '彼は今、音楽を聞いています。',
        furigana: '彼[かれ]は 今[いま]、 音楽[おんがく]を 聞[き]いています。',
        romaji: 'Kare wa ima, ongaku wo kiite imasu.',
        translation: 'Dia sedang mendengarkan musik sekarang.'
      },
      {
        japanese: '私はジャカルタに住んでいます。',
        furigana: '私[わたし]は ジャカルタに 住[す]んでいます。',
        romaji: 'Watashi wa jakaruta ni sunde imasu.',
        translation: 'Saya tinggal di Jakarta.'
      }
    ],
    relatedPatterns: [],
    tags: ['continuous', 'state', 'te-form']
  },
  {
    id: 'n5-018',
    level: 'N5',
    pattern: '〜ましょう',
    reading: 'mashou',
    meaning: 'Mari... / Ayo kita... (ajakan bersemangat).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Mengajak lawan bicara untuk melakukan suatu aktivitas bersama-sama dengan nada positif.',
    structure: 'Kata Kerja (Bentuk Masu tanpa masu) + ましょう',
    notes: 'Merupakan bentuk ajakan formal dari Kata Kerja biasa.',
    examples: [
      {
        japanese: '一緒にご飯を食べましょう。',
        furigana: '一緒[いっしょ]に ご飯[ごはん]を 食べ[たべ]ましょう。',
        romaji: 'Issho ni gohan wo tabemashou.',
        translation: 'Mari kita makan bersama-sama.'
      },
      {
        japanese: '少し休みましょう。',
        furigana: '少し[すこし] 休み[やす]みましょう。',
        romaji: 'Sukoshi yasumimashou.',
        translation: 'Ayo kita istirahat sebentar.'
      }
    ],
    relatedPatterns: ['n5-019'],
    tags: ['invitation', 'volitional', 'polite']
  },
  {
    id: 'n5-019',
    level: 'N5',
    pattern: '〜ましょうか',
    reading: 'mashou ka',
    meaning: 'Bagaimana jika saya bantu...? / Haruskah kita...?',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menawarkan bantuan kepada lawan bicara secara inisiatif sendiri, atau menawarkan ide kegiatan bersama.',
    structure: 'Kata Kerja (Bentuk Masu tanpa masu) + ましょうか',
    notes: 'Jika diucapkan dengan intonasi menawarkan bantuan pribadi, lawan bicara biasanya merespon dengan Arigatou gozaimasu.',
    examples: [
      {
        japanese: '荷物を持ちましょうか。',
        furigana: '荷物[にもつ]を 持ち[も]ましょうか。',
        romaji: 'Nimotsu wo mochishou ka.',
        translation: 'Bagaimana jika saya bantu membawakan barang Anda?'
      },
      {
        japanese: '冷たい水を飲みましょうか。',
        furigana: '冷[つめ]たい 水[mizu]を 飲み[の]ましょうか。',
        romaji: 'Tsumetai mizu wo nomimashou ka.',
        translation: 'Haruskah kita minum air dingin?'
      }
    ],
    relatedPatterns: ['n5-018'],
    tags: ['offering-help', 'invitation', 'polite']
  },
  {
    id: 'n5-020',
    level: 'N5',
    pattern: '〜たいです',
    reading: 'tai desu',
    meaning: 'Ingin... (menyatakan keinginan subjek pembicara).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan keinginan internal pembicara (orang pertama) untuk melakukan suatu aksi.',
    structure: 'Kata Kerja (Bentuk Masu tanpa masu) + たい (desu)',
    notes: 'Hanya boleh digunakan untuk keinginan diri sendiri. Partikel objek を (wo) sering kali diubah menjadi が (ga) jika memakai pola ini.',
    examples: [
      {
        japanese: '日本へ行きたいです。',
        furigana: '日本[にほん]へ 行[い]きたいです。',
        romaji: 'Nihon e ikitai desu.',
        translation: 'Saya ingin pergi ke Jepang.'
      },
      {
        japanese: '新しいスマホを買いたいです。',
        furigana: '新しい[あたら]しい スマホを 買い[か]いたいです。',
        romaji: 'Atarashii sumaho wo kaitai desu.',
        translation: 'Saya ingin membeli ponsel pintar yang baru.'
      }
    ],
    relatedPatterns: [],
    tags: ['desire', 'verb-stem', 'expression']
  },
  {
    id: 'n5-021',
    level: 'N5',
    pattern: '〜とき',
    reading: 'toki',
    meaning: 'Saat... / Ketika... (keterangan waktu peristiwa).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menunjukkan situasi temporal atau latar belakang terjadinya peristiwa utama.',
    structure: '[Kata Kerja/Sifat/Benda (Bentuk Biasa)] + とき',
    notes: 'Untuk Kata Sifat-na tambah な (na) sebelum とき. Untuk Kata Benda tambah の (no) sebelum とき.',
    examples: [
      {
        japanese: '子供のとき、よくこの川で泳ぎました。',
        furigana: '子供[こども]のとき、よくこの 川[かわ]で 泳[およ]ぎました。',
        romaji: 'Kodomo no toki, yoku kono kawa de oyogimashita.',
        translation: 'Saat masih anak-anak, saya sering berenang di sungai ini.'
      },
      {
        japanese: '忙しいとき、夜遅くまで働きます。',
        furigana: '忙[いそが]しいとき、 夜[よる]遅[おそ]くまで 働き[はたら]きます。',
        romaji: 'Isogashii toki, yoru osoku made hatarakimasu.',
        translation: 'Ketika sibuk, saya bekerja sampai larut malam.'
      }
    ],
    relatedPatterns: [],
    tags: ['temporal', 'time-clause', 'grammar-modifier']
  },
  {
    id: 'n5-022',
    level: 'N5',
    pattern: '〜から (Alasan)',
    reading: 'kara',
    meaning: 'Karena... (menghubungkan sebab akibat).',
    category: 'Kata Sambung',
    jlptFunction: 'Meletakkan klausa alasan di depan, sebelum klausa kesimpulan/akibat.',
    structure: '[Klausa Sebab (Sopan/Biasa)] から、 [Klausa Akibat]',
    notes: 'から meletakkan alasan subjektif dari sudut pandang pembicara. Berbeda dengan Bahasa Indonesia, posisinya ada di akhir kalimat sebab.',
    examples: [
      {
        japanese: '危ないですから、触らないでください。',
        furigana: '危[あぶ]ないですから、 触[さわ]らないでください。',
        romaji: 'Abunai desu kara, sawaranaide kudasai.',
        translation: 'Karena berbahaya, tolong jangan disentuh.'
      },
      {
        japanese: '日本語が好きですから、毎日勉強します。',
        furigana: '日本語[にほんご]打[す]きですから、毎日 勉強[べんきょう]します。',
        romaji: 'Nihongo ga suki desu kara, mainichi benkyou shimasu.',
        translation: 'Karena menyukai bahasa Jepang, saya belajar setiap hari.'
      }
    ],
    relatedPatterns: [],
    tags: ['reason', 'conjunction', 'basics']
  },
  {
    id: 'n5-023',
    level: 'N5',
    pattern: '〜が (Tetapi)',
    reading: 'ga',
    meaning: '...tetapi... / namun... (kontras kalimat).',
    category: 'Kata Sambung',
    jlptFunction: 'Menyambung dua buah klausa yang memiliki isi maknawi saling bertentangan secara formal.',
    structure: '[Klausa 1 (Sopan)] が、 [Klausa 2]',
    notes: 'Selain sebagai kontras kata sambung, が juga sering dipakai sebagai pengantar pembuka obrolan yang sopan (misal: Sumimasen ga...).',
    examples: [
      {
        japanese: 'この辞書は高いですが、とても便利です。',
        furigana: 'この 辞書[じしょ]は 高[たか]いですが、とても 便利[べんり]です。',
        romaji: 'Kono jisho wa takai desu ga, totemo benri desu.',
        translation: 'Kamus ini mahal tetapi sangat praktis.'
      },
      {
        japanese: '日本語が少しわかりますが,まだ下手です。',
        furigana: '日本語[にほんご]が 少し[すこ]しわかりますが,まだ 下手[へた]です。',
        romaji: 'Nihongo ga sukoshi wakarimasu ga, mada heta desu.',
        translation: 'Saya mengerti sedikit bahasa Jepang, tetapi masih belum mahir.'
      }
    ],
    relatedPatterns: [],
    tags: ['contrast', 'conjunction', 'polite']
  },
  {
    id: 'n5-024',
    level: 'N5',
    pattern: '〜たり 〜たりする',
    reading: 'tari ... tari suru',
    meaning: 'Melakukan hal seperti A dan B (menyebutkan contoh aktivitas).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Mendaftarkan representasi dari sekian banyak tindakan alternatif acak yang dilakukan dalam suatu rentang waktu.',
    structure: 'Kata Kerja 1 (Bentuk -ta) + り、Kata Kerja 2 (Bentuk -ta) + り する',
    notes: 'Pola ini diakhiri dengan kata kerja する (suru) yang disesuaikan bentuk tensenya (e.g. します, しました).',
    examples: [
      {
        japanese: '日曜日は部屋を掃除したり、本を読んだりします。',
        furigana: '日曜日[にちようび]は 部屋[へや]を 掃除[そうじ]したり、 本[ほん]を 読[よ]んだりします。',
        romaji: 'Nichiyoubi wa heya wo souji shitari, hon wo yondari shimasu.',
        translation: 'Hari Minggu saya bersih-bersih kamar, membaca buku, dan melakukan aktivitas sejenisnya.'
      },
      {
        japanese: '旅行で泳いだり、買い物したりしました。',
        furigana: '旅行[りょこう]で 泳[およ]いだり、 買い物[かいもの]したりしました。',
        romaji: 'Ryokou de oyoidari, kaimono shitari shimashita.',
        translation: 'Saat liburan saya berenang, berbelanja, dan sebagainya.'
      }
    ],
    relatedPatterns: [],
    tags: ['activities', 'tari-form', 'list']
  },
  {
    id: 'n5-025',
    level: 'N5',
    pattern: '〜にする',
    reading: 'ni suru',
    meaning: 'Memutuskan untuk memilih... (keputusan aktif).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan pilihan final subjek terhadap tawaran barang, pesanan makanan, atau arah kebijakan.',
    structure: '[Kata Benda] にする',
    notes: 'Sering dipakai saat memesan menu di restoran (e.g. コーヒーにします - Saya pilih kopi).',
    examples: [
      {
        japanese: '私はジュースにします。',
        furigana: '私[わたし]は ジュースにします。',
        romaji: 'Watashi wa juusu ni shimasu.',
        translation: 'Saya memutuskan untuk memesan jus saja.'
      },
      {
        japanese: 'お土産は日本のお菓子にしました。',
        furigana: 'お 土産[みやげ]は 日本[にほん]の お 菓子[かし]にしました。',
        romaji: 'Omiyage wa nihon no okashi ni shimashita.',
        translation: 'Untuk oleh-oleh saya memutuskan memilih kue khas Jepang.'
      }
    ],
    relatedPatterns: [],
    tags: ['decision', 'choice', 'polite']
  },
  {
    id: 'n5-026',
    level: 'N5',
    pattern: '〜くなる / 〜にする',
    reading: 'kunaru / ni naru',
    meaning: 'Menjadi... (perubahan keadaan alami).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengindikasikan proses transisi keadaan dari suatu wujud ke wujud baru.',
    structure: 'Kata Sifat-i (tanpa -i) + くなる / Kata Sifat-na & Kata Benda + になる',
    notes: 'Contoh: 寒くなる (menjadi dingin), 医者になる (menjadi dokter).',
    examples: [
      {
        japanese: 'だんだん暖かくなりました。',
        furigana: 'だんだん 暖[あたた]かくなりました。',
        romaji: 'Dandan atatakaku narimashita.',
        translation: 'Lama kelamaan cuaca telah menjadi lebih hangat.'
      },
      {
        japanese: '将来、日本語 of 通訳になりたいです。',
        furigana: '将来[しょうらい]、日本語[にほんご]の 通訳[つうやく]になりたいです。',
        romaji: 'Shourai, nihongo no tsuuyaku ni naritai desu.',
        translation: 'Di masa depan, saya ingin menjadi penerjemah bahasa Jepang.'
      }
    ],
    relatedPatterns: [],
    tags: ['change', 'adjective-change', 'verbs']
  },
  {
    id: 'n5-027',
    level: 'N5',
    pattern: '〜すぎる',
    reading: 'sugiru',
    meaning: 'Terlalu... / Berlebihan melakukan sesuatu.',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan bahwa suatu aktivitas atau sifat fisik melampaui batas batas normal/wajar.',
    structure: 'Kata Kerja (Bentuk Masu tanpa masu) / Kata Sifat (tanpa i/na) + すぎる',
    notes: 'Pola ini berkonjugasi sebagai kata kerja Golongan 2 (Ru-verbs). Contoh: 食べすぎる (terlalu banyak makan).',
    examples: [
      {
        japanese: '昨夜お酒を飲みすぎました。',
        furigana: '昨夜[ゆうべ]お 酒[さけ]を 飲み[の]みますぎました。',
        romaji: 'Yuube osake wo nomisugimashita.',
        translation: 'Semalam saya telah terlalu banyak meminum sake.'
      },
      {
        japanese: 'この試験は難しすぎます。',
        furigana: 'この 試験[しけん]は 難[むずか]しすぎます。',
        romaji: 'Kono shiken wa muzukashisugimasu.',
        translation: 'Ujian ini terlalu sulit.'
      }
    ],
    relatedPatterns: [],
    tags: ['excessive', 'verb-modifier', 'verbs']
  },
  {
    id: 'n5-028',
    level: 'N5',
    pattern: '〜より〜のほうが',
    reading: 'yori ... no hou ga',
    meaning: '...lebih... daripada... (perbandingan kata benda).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Membandingkan dua hal dan menetapkan mana yang memiliki kadar sifat lebih tinggi.',
    structure: '[Kata Benda 1] より [Kata Benda 2] のほうが [Kata Sifat] です',
    notes: 'Kata ほうが (hou ga) secara harfiah berarti "ke arah / bagian yang ini".',
    examples: [
      {
        japanese: 'バスより電車のほうが速いです。',
        furigana: 'バスより 電車[でんしゃ]のほうが 速[はや]いです。',
        romaji: 'Basu yori densha no hou ga hayai desu.',
        translation: 'Kereta api lebih cepat daripada bus.'
      },
      {
        japanese: 'コーヒーより紅茶のほうが好きです。',
        furigana: 'コーヒーより 紅茶[こうちゃ]のほうが 好き[す]きです。',
        romaji: 'Koohii yori koucha no hou ga suki desu.',
        translation: 'Saya lebih menyukai teh hitam daripada kopi.'
      }
    ],
    relatedPatterns: ['n5-029'],
    tags: ['comparison', 'adjectives', 'polite']
  },
  {
    id: 'n5-029',
    level: 'N5',
    pattern: '〜の中で〜が一番',
    reading: 'no naka de ... ga ichiban',
    meaning: 'Paling... di antara... (perbandingan paling/superlatif).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menentukan satu subjek unggulan utama yang memegang gelar ter- di antara suatu kelompok grup/lingkup.',
    structure: '[Kelompok Benda] の中で [Subjek] が 一番[いちばん] [Kata Sifat] です',
    notes: '一番 (ichiban) berarti nomor satu / paling utama.',
    examples: [
      {
        japanese: '果物の中でりんごが一番好きです。',
        furigana: '果物[くだもの]の 中[なか]で りんごが 一番[いちばん] 好き[す]きです。',
        romaji: 'Kudamono no naka de ringo ga ichiban suki desu.',
        translation: 'Di antara buah-buahan, apel adalah yang paling saya sukai.'
      },
      {
        japanese: '一年の中で十二月が一番寒いです。',
        furigana: '一年[いちねん]の 中[なか]で 十二月[じゅうにがつ]が 一番[いちばん] 寒い[さむ]いです。',
        romaji: 'Ichinen no naka de juunigatsu ga ichiban samui desu.',
        translation: 'Di dalam satu tahun, bulan Desember adalah yang paling dingin.'
      }
    ],
    relatedPatterns: ['n5-028'],
    tags: ['superlative', 'comparison', 'adjectives']
  },
  {
    id: 'n5-030',
    level: 'N5',
    pattern: '〜でしょう',
    reading: 'deshou',
    meaning: 'Mungkin... / Bukankah... (perkiraan / konfirmasi lembut).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Mengekspresikan dugaan sopan pembicara mengenai sesuatu hal yang kemungkinan besar benar, atau meminta persetujuan halus.',
    structure: '[Kata Benda / Kata Sifat / Kata Kerja (Bentuk Biasa)] + でしょう',
    notes: 'Dalam bahasa sehari-hari informal, でしょう disingkat menjadi だろう (darou) dengan intonasi turun untuk perkiraan, naik untuk konfirmasi.',
    examples: [
      {
        japanese: '明日は雨が降るでしょう。',
        furigana: '明日[あした]は 雨[あめ]が 降[ふ]るでしょう。',
        romaji: 'Ashita wa ame ga furu deshou.',
        translation: 'Besok mungkin hujan akan turun.'
      },
      {
        japanese: 'この映画 is面白いでしょう。',
        furigana: 'この 映画[えいが]は 面白い[おもしろ]いでしょう。',
        romaji: 'Kono eiga wa omoshiroi deshou.',
        translation: 'Film ini menarik, bukan?'
      }
    ],
    relatedPatterns: [],
    tags: ['probability', 'conjecture', 'polite']
  }
];

// Let's generate the next 55 patterns!
const additionalData = [
  {
    id: 'n5-031',
    level: 'N5',
    pattern: '〜か (Tanya/Pilihan)',
    reading: 'ka',
    meaning: 'Apakah... / Atau (penanda pertanyaan atau alternatif pilihan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Diletakkan di akhir kalimat untuk membuat kalimat tanya, atau di antara kata benda untuk menyatakan pilihan.',
    structure: '[Kalimat] か / [Kata Benda 1] か [Kata Benda 2]',
    notes: 'Merupakan partikel tanya dasar dalam bahasa Jepang. Jika digunakan sebagai penghubung kata benda, berarti "atau".',
    examples: [
      {
        japanese: 'これはあなたのかばんですか。',
        furigana: 'これは あなたの かばんですか。',
        romaji: 'Kore wa anata no kaban desu ka.',
        translation: 'Apakah ini tas milik Anda?'
      },
      {
        japanese: 'お茶かコーヒーを飲みます。',
        furigana: 'お 茶[ちゃ]か コーヒーを 飲み[の]みます。',
        romaji: 'Ocha ka koohii wo nomimasu.',
        translation: 'Saya akan minum teh atau kopi.'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'question', 'alternative']
  },
  {
    id: 'n5-032',
    level: 'N5',
    pattern: '〜ね',
    reading: 'ne',
    meaning: '...ya? / bukan? (partikel akhir untuk mencari persetujuan/konfirmasi lembut).',
    category: 'Partikel Dasar',
    jlptFunction: 'Diletakkan di akhir kalimat untuk menyuarakan simpati, mencari persetujuan, atau melembutkan ucapan.',
    structure: '[Kalimat] + ね',
    notes: 'Meminta konfirmasi terhadap hal yang dianggap sudah diketahui bersama oleh pembicara dan pendengar.',
    examples: [
      {
        japanese: '今日は本当に暑いですね。',
        furigana: '今日[きょう]は 本当[ほんとう]i 暑[あつ]iですね。',
        romaji: 'Kyou wa hontou ni atsui desu ne.',
        translation: 'Hari ini sangat panas ya.'
      },
      {
        japanese: 'あの映画は面白かったですね。',
        furigana: 'あの 映画[えいが]は 面白[おもしろ]かったですね。',
        romaji: 'Ano eiga wa omoshirokatta desu ne.',
        translation: 'Film itu menarik sekali, bukan?'
      }
    ],
    relatedPatterns: ['n5-033'],
    tags: ['particle', 'agreement', 'polite']
  },
  {
    id: 'n5-033',
    level: 'N5',
    pattern: '〜よ',
    reading: 'yo',
    meaning: 'lho! / lho ya! (partikel penegas informasi baru).',
    category: 'Partikel Dasar',
    jlptFunction: 'Diletakkan di akhir kalimat untuk meyakinkan pendengar atau memberikan informasi baru yang belum diketahuinya.',
    structure: '[Kalimat] + よ',
    notes: 'Terdengar asertif. Hindari penggunaan berlebih kepada atasan agar tidak terkesan menceramahi.',
    examples: [
      {
        japanese: 'この食堂のラーメンはおいしいですよ。',
        furigana: 'この 食堂[しょくどう]の ラーメンはおいしいですよ。',
        romaji: 'Kono shokudou no raamen wa oishii desu yo.',
        translation: 'Ramen di kantin ini enak lho!'
      },
      {
        japanese: 'あそこに佐藤さんがいますよ。',
        furigana: 'あそこに 佐藤[さとう]さんがいますよ。',
        romaji: 'Asoko ni Satou-san ga imasu yo.',
        translation: 'Di sana ada Tuan Sato lho!'
      }
    ],
    relatedPatterns: ['n5-032'],
    tags: ['particle', 'assertion', 'emphasis']
  },
  {
    id: 'n5-034',
    level: 'N5',
    pattern: '〜や',
    reading: 'ya',
    meaning: 'Dan (menghubungkan benda secara tidak lengkap/non-exhaustive).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menyebutkan contoh benda dari beberapa opsi benda yang ada (tidak disebut semua).',
    structure: '[Kata Benda 1] や [Kata Benda 2] (ya [Kata Benda 3])',
    notes: 'Berbeda dengan と (to) yang mendaftarkan seluruh anggota benda tanpa sisa, や hanya memberikan beberapa contoh representatif.',
    examples: [
      {
        japanese: '机の上に本やペンがあります。',
        furigana: '机[つくえ]の 上[うえ]に 本[ほん]や ペンがあります。',
        romaji: 'Tsukue no ue ni hon ya pen ga arimasu.',
        translation: 'Di atas meja ada buku, pulpen, dan barang sejenisnya.'
      },
      {
        japanese: '店でパンや牛乳を買いました。',
        furigana: '店[みせ]で パンや 牛乳[ぎゅうにゅう]を 買い[か]いました。',
        romaji: 'Mise de pan ya gyuunyuu wo kaimashita.',
        translation: 'Di toko saya membeli roti, susu, dan lain-lain.'
      }
    ],
    relatedPatterns: ['n5-009', 'n5-035'],
    tags: ['particle', 'list', 'basics']
  },
  {
    id: 'n5-035',
    level: 'N5',
    pattern: '〜など',
    reading: 'nado',
    meaning: '...dan lain-lain / ...dan sebagainya.',
    category: 'Partikel Dasar',
    jlptFunction: 'Menyertai partikel や di akhir contoh benda untuk mempertegas bahwa masih ada benda lainnya.',
    structure: '[Kata Benda 1] や [Kata Benda 2] など',
    notes: 'Sering digabungkan dengan partikel や menjadi "... ya ... nado" untuk memperhalus daftar contoh.',
    examples: [
      {
        japanese: 'かばんの中に財布や携帯などが入っています。',
        furigana: 'かばんの 中[なか]に 財布[さいふ]や 携帯[けいたい]などが 入っ[はい]ています。',
        romaji: 'Kaban no naka ni saifu ya keitai nado ga haitte imasu.',
        translation: 'Di dalam tas ada dompet, ponsel, dan sebagainya.'
      },
      {
        japanese: '日本には京都や奈良などの古い町があります。',
        furigana: '日本[にほん]には 京都[きょうと]や 奈良[なら]などの 古[ふる]い 町[まち]があります。',
        romaji: 'Nihon ni wa Kyouto ya Nara nado no furui machi ga arimasu.',
        translation: 'Di Jepang ada kota-kota kuno seperti Kyoto, Nara, dan lain-lain.'
      }
    ],
    relatedPatterns: ['n5-034'],
    tags: ['particle', 'list', 'basics']
  },
  {
    id: 'n5-036',
    level: 'N5',
    pattern: '〜だけ',
    reading: 'dake',
    meaning: 'Hanya... / Cuma... (menyatakan batasan positif).',
    category: 'Partikel Dasar',
    jlptFunction: 'Membatasi lingkup pilihan atau jumlah pada kata benda yang mendahuluinya.',
    structure: '[Kata Benda / Kata Kerja / Kata Sifat] + だけ',
    notes: 'Digunakan dalam klausa bernada positif. Jika kalimat bernada negatif, biasanya memakai しか (shika).',
    examples: [
      {
        japanese: 'このクラスにはインドネシア人だけがいます。',
        furigana: 'この クラスには インドネシア人[じん]だけがいます。',
        romaji: 'Kono kurasu ni wa indonesiah-jin dake ga imasu.',
        translation: 'Di kelas ini hanya ada orang Indonesia.'
      },
      {
        japanese: '五分だけ待ってください。',
        furigana: '五分[ごふん]だけ 待[ま]ってください。',
        romaji: 'Gofun dake matte kudasai.',
        translation: 'Tolong tunggu lima menit saja.'
      }
    ],
    relatedPatterns: ['n5-037'],
    tags: ['particle', 'limitation', 'basics']
  },
  {
    id: 'n5-037',
    level: 'N5',
    pattern: '〜しか〜ない',
    reading: 'shika ... nai',
    meaning: 'Hanya... / Tidak ada selain... (menyatakan batasan bernada negatif).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan batasan ketat dengan menggunakan partikel しか yang wajib dipasangkan dengan kata kerja bentuk negatif.',
    structure: '[Kata Benda] + しか + [Kata Kerja Negatif (nai/masen)]',
    notes: 'Mengandung nuansa rasa kecewa atau kurang memuaskan atas keterbatasan jumlah tersebut.',
    examples: [
      {
        japanese: '財布の中に百円しかありません。',
        furigana: '財布[さいふ]の 中[なか]に 百円[ひゃくえん]しかありません。',
        romaji: 'Saifu no naka ni hyakuen shika arimasen.',
        translation: 'Di dalam dompet hanya ada 100 yen (tidak ada lebih).'
      },
      {
        japanese: 'ひらがなしか書けません。',
        furigana: 'ひらがなしか 書[か]けません。',
        romaji: 'Hiragana shika kakemasen.',
        translation: 'Saya hanya bisa menulis hiragana saja.'
      }
    ],
    relatedPatterns: ['n5-036'],
    tags: ['particle', 'limitation', 'negative']
  },
  {
    id: 'n5-038',
    level: 'N5',
    pattern: '〜も〜も',
    reading: 'mo ... mo',
    meaning: 'Baik... maupun... (menegaskan kesamaan dua hal).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menggunakan partikel も ganda untuk merangkum dua subjek yang sama-sama memiliki predikat sejenis.',
    structure: '[Kata Benda 1] も [Kata Benda 2] も [Predikat]',
    notes: 'Dapat digunakan baik dalam kalimat positif ("baik A maupun B adalah...") maupun kalimat negatif ("baik A maupun B bukanlah...").',
    examples: [
      {
        japanese: '英語も日本語も話せます。',
        furigana: '英語[えいご]も 日本語[にほんご]も 話[は]なせます。',
        romaji: 'Eigo mo nihongo mo hanasemasu.',
        translation: 'Baik bahasa Inggris maupun bahasa Jepang, saya bisa membicarakannya.'
      },
      {
        japanese: '犬も猫も好きじゃありません。',
        furigana: '犬[いぬ]も 猫[ねこ]も 好き[す]きじゃありません。',
        romaji: 'Inu mo neko mo suki ja arimasen.',
        translation: 'Baik anjing maupun kucing, saya tidak menyukainya.'
      }
    ],
    relatedPatterns: ['n5-003'],
    tags: ['particle', 'basics', 'addition']
  },
  {
    id: 'n5-039',
    level: 'N5',
    pattern: '〜に (Keberadaan)',
    reading: 'ni',
    meaning: 'Di (lokasi posisi diam / keberadaan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menandai tempat menetapnya benda hidup atau mati saat dipasangkan dengan kata kerja diam seperti あります, います, 住みます.',
    structure: '[Tempat] に [Keberadaan / Tinggal]',
    notes: 'Jangan tertukar dengan で. Partikel に digunakan untuk keberadaan statis, sedangkan で untuk aksi dinamis.',
    examples: [
      {
        japanese: 'ここに荷物を置いてください。',
        furigana: 'ここに 荷物[にもつ]を 置[お]いてください。',
        romaji: 'Koko ni nimotsu wo oite kudasai.',
        translation: 'Tolong letakkan barang bawaan di sini.'
      },
      {
        japanese: '東京に住んでいます。',
        furigana: '東京[とうきょう]に 住[す]んでいます。',
        romaji: 'Toukyou ni sunde imasu.',
        translation: 'Saya tinggal di Tokyo.'
      }
    ],
    relatedPatterns: ['n5-005', 'n5-007'],
    tags: ['particle', 'existence', 'location']
  },
  {
    id: 'n5-040',
    level: 'N5',
    pattern: '〜に (Tujuan Gerak)',
    reading: 'ni',
    meaning: 'Pergi untuk... / Untuk melakukan... (menyatakan tujuan pergerakan aktif).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan maksud aktivitas pergerakan ketika dipasangkan dengan kata kerja pergi/pulang/datang.',
    structure: '[Kata Kerja (Stem Masu) / Kata Benda] に [いきます/きます/かえります]',
    notes: 'Menggunakan stem masu (kata kerja tanpa ます) sebelum に. Contoh: 買いにいきます (pergi untuk membeli).',
    examples: [
      {
        japanese: 'デパートへ服を買いに行きます。',
        furigana: 'デパートへ 服[ふく]を 買い[か]に 行[い]きます。',
        romaji: 'Depaato e fuku wo kai ni ikimasu.',
        translation: 'Saya pergi ke mal untuk membeli pakaian.'
      },
      {
        japanese: '日本へ日本語の勉強に来ました。',
        furigana: '日本[にほん]へ 日本語[にほんご]の 勉強[べんきょう]に 来[き]ました。',
        romaji: 'Nihon e nihongo no benkyou ni kimashita.',
        translation: 'Saya datang ke Jepang untuk belajar bahasa Jepang.'
      }
    ],
    relatedPatterns: ['n5-005', 'n5-006'],
    tags: ['particle', 'purpose', 'basics']
  },
  {
    id: 'n5-041',
    level: 'N5',
    pattern: '〜で (Bahan/Sarana)',
    reading: 'de',
    meaning: 'Menggunakan... / Terbuat dari... / Dengan cara...',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan bahan mentah pembuatan, alat yang digunakan, bahasa komunikasi, atau sarana transportasi.',
    structure: '[Alat/Bahan/Bahasa] で [Kata Kerja]',
    notes: 'Sangat serbaguna untuk menyatakan metode pengerjaan aksi.',
    examples: [
      {
        japanese: '日本語でレポートを書きます。',
        furigana: '日本語[にほんご]で レポートを 書き[か]きます。',
        romaji: 'Nihongo de repooto wo kakimasu.',
        translation: 'Saya menulis laporan dalam bahasa Jepang.'
      },
      {
        japanese: '紙で飛行機を作りました。',
        furigana: '紙[かみ]で 飛行機[ひこうき]を 作り[つく]りました。',
        romaji: 'Kami de hikouki wo tsukurimashita.',
        translation: 'Saya membuat pesawat mainan dari kertas.'
      }
    ],
    relatedPatterns: ['n5-007'],
    tags: ['particle', 'means', 'basics']
  },
  {
    id: 'n5-042',
    level: 'N5',
    pattern: '〜が (Subjek Fokus)',
    reading: 'ga',
    meaning: 'Penanda subjek (menekankan subjek baru atau fokus informasi).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjuk langsung subjek pelaku utama aksi, berbeda dengan は yang menandai tema obrolan umum.',
    structure: '[Subjek] が [Kata Kerja / Kata Sifat]',
    notes: 'Digunakan juga saat menanyakan kata tanya subjek seperti darea ga (siapa yang) atau nani ga (apa yang).',
    examples: [
      {
        japanese: 'だれが部屋を掃除しましたか。',
        furigana: 'だれが 部屋[へや]を 掃除[そうじ]しましたか。',
        romaji: 'Dare ga heya wo souji shimashita ka.',
        translation: 'Siapa yang telah membersihkan kamar?'
      },
      {
        japanese: '私がそれをやりました。',
        furigana: '私[わたし]が それをやりました。',
        romaji: 'Watashi ga sore wo yarimashita.',
        translation: 'Akulah yang melakukannya.'
      }
    ],
    relatedPatterns: ['n5-001', 'n5-023'],
    tags: ['particle', 'subject', 'basics']
  },
  {
    id: 'n5-043',
    level: 'N5',
    pattern: '〜ます / 〜ません',
    reading: 'masu / masen',
    meaning: 'Melakukan... / Tidak melakukan... (bentuk sopan masa depan/sekarang).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Bentuk konjugasi sopan utama untuk menyatakan tindakan positif (ます) dan negatif (ません) yang dilakukan rutin atau di masa depan.',
    structure: 'Kata Kerja (Stem Masu) + ます / ません',
    notes: 'Merupakan basis tata bahasa tingkat dasar dalam komunikasi sopan bahasa Jepang sehari-hari.',
    examples: [
      {
        japanese: '私は毎朝お茶を飲みます。',
        furigana: '私[わたし]は 毎朝[まいあさ] お茶[ちゃ]を 飲み[の]みます。',
        romaji: 'Watashi wa maiasa ocha wo nomimasu.',
        translation: 'Saya meminum teh setiap pagi.'
      },
      {
        japanese: '今日学校へ行きません。',
        furigana: '今日[きょう] 学校[gあっこう]へ 行[い]きません。',
        romaji: 'Kyou gakkou e ikimasen.',
        translation: 'Hari ini saya tidak pergi ke sekolah.'
      }
    ],
    relatedPatterns: ['n5-044'],
    tags: ['conjugation', 'polite', 'basics']
  },
  {
    id: 'n5-044',
    level: 'N5',
    pattern: '〜ました / 〜ませんでした',
    reading: 'mashita / masen deshita',
    meaning: 'Telah melakukan... / Tidak melakukan... (bentuk lampau sopan).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Bentuk konjugasi lampau sopan untuk menyatakan tindakan yang telah selesai terjadi (ました) atau tidak terjadi di masa lampau (ませんでした).',
    structure: 'Kata Kerja (Stem Masu) + ました / ませんでした',
    notes: 'Pastikan untuk tidak mendobel penanda lampau. Bentuk lampau negatif diakhiri dengan deshita.',
    examples: [
      {
        japanese: '昨日の晩、宿題をしました。',
        furigana: '昨日[きのう]の 晩[ばん]、 宿題[しゅくだい]をしました。',
        romaji: 'Kinou no ban, shukudai wo shimashita.',
        translation: 'Tadi malam, saya sudah mengerjakan PR.'
      },
      {
        japanese: '今朝は何も食べませんでした。',
        furigana: '今朝[けさ]は 何[なに]も 食べ[たべ]ませんでした。',
        romaji: 'Kesa wa nani mo tabemasen deshita.',
        translation: 'Pagi ini saya tidak makan apa pun.'
      }
    ],
    relatedPatterns: ['n5-043'],
    tags: ['conjugation', 'polite', 'basics']
  },
  {
    id: 'n5-045',
    level: 'N5',
    pattern: '〜ている (Status/Kondisi)',
    reading: 'te iru',
    meaning: 'Keadaan yang sedang terwujud (status permanen pasca-tindakan).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menyatakan hasil dari sebuah aksi yang terjadi di masa lalu yang efeknya masih terasa sampai saat ini.',
    structure: 'Kata Kerja (Bentuk -te) + いる / います',
    notes: 'Contoh terbaik adalah kekkon shiteiru (status menikah) atau shitteiru (tahu/memiliki ingatan).',
    examples: [
      {
        japanese: 'お姉さんはもう結婚しています。',
        furigana: 'お 姉[ねえ]さんはもう 結婚[けっこん]しています。',
        romaji: 'Onee-san wa mou kekkon shite imasu.',
        translation: 'Kakak perempuan saya sudah menikah.'
      },
      {
        japanese: '私はそのニュースを知っています。',
        furigana: '私[わたし]は その ニュースを 知[し]っています。',
        romaji: 'Watashi wa sono nyuusu wo shitte imasu.',
        translation: 'Saya mengetahui berita tersebut.'
      }
    ],
    relatedPatterns: ['n5-017'],
    tags: ['continuous', 'state', 'te-form']
  },
  {
    id: 'n5-046',
    level: 'N5',
    pattern: '〜てから',
    reading: 'te kara',
    meaning: 'Setelah melakukan... (urutan aktivitas beruntun).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa tindakan kedua baru boleh/akan dilakukan segera setelah tindakan pertama selesai dikerjakan.',
    structure: 'Kata Kerja (Bentuk -te) + から + [Tindakan Selanjutnya]',
    notes: 'Lebih kuat menunjukkan hubungan urutan kronologis dibandingkan sekadar menggunakan partikel te.',
    examples: [
      {
        japanese: '手を洗ってから、ご飯を食べます。',
        furigana: '手[て]を 洗[あら]ってから、 ご飯[ごはん]を 食べ[たべ]ます。',
        romaji: 'Te wo aratte kara, gohan wo tabemasu.',
        translation: 'Setelah mencuci tangan, saya menyantap makanan.'
      },
      {
        japanese: '家に帰ってから宿題をしました。',
        furigana: '家[うち]に 帰[かえ]ってから 宿題[しゅくだい]をしました。',
        romaji: 'Uchi ni kaette kara shukudai wo shimashita.',
        translation: 'Setelah pulang ke rumah, saya langsung mengerjakan PR.'
      }
    ],
    relatedPatterns: ['n5-070'],
    tags: ['time-clause', 'sequence', 'te-form']
  },
  {
    id: 'n5-047',
    level: 'N5',
    pattern: '〜てくださいませんか',
    reading: 'te kudasaimasen ka',
    meaning: 'Maukah Anda tolong... / Sudilah kiranya... (permintaan sangat sopan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Meminta bantuan atau memohon pertolongan secara lebih santun dan halus kepada lawan bicara.',
    structure: 'Kata Kerja (Bentuk -te) + くださいませんか',
    notes: 'Tingkat kesopanannya berada di atas te kudasai biasa.',
    examples: [
      {
        japanese: '日本語の漢字を教えてくださいませんか。',
        furigana: '日本語[にほんご]の 漢字[かんじ]を 教え[おし]えてくださいませんか。',
        romaji: 'Nihongo no kanji wo oshiete kudasaimasen ka.',
        translation: 'Maukah Anda bersedia mengajarkan kanji bahasa Jepang kepada saya?'
      },
      {
        japanese: 'すみませんが、窓を閉めてくださいませんか。',
        furigana: 'すみませんが、 窓[まど]を 閉[し]めてくださいませんか。',
        romaji: 'Sumimasen ga, mado wo shimete kudasaimasen ka.',
        translation: 'Maaf, sudi kiranya Anda menutup jendela tersebut?'
      }
    ],
    relatedPatterns: ['n5-013'],
    tags: ['request', 'te-form', 'polite']
  },
  {
    id: 'n5-048',
    level: 'N5',
    pattern: '〜なければなりません',
    reading: 'nakereba narimasen',
    meaning: 'Harus... / Wajib melakukan sesuatu.',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan kewajiban moral, aturan resmi, hukum alam, atau keharusan mutlak yang tidak bisa dihindari.',
    structure: 'Kata Kerja (Bentuk Negatif -nai tanpa -i) + ければなりません',
    notes: 'Bentuk informal/percakapannya adalah nakya atau nakucha.',
    examples: [
      {
        japanese: '明日試験がありますから、勉強しなければなりません。',
        furigana: '明日[あした] 試験[しけん]がありますから、 勉強[べんきょう]しなければなりません。',
        romaji: 'Ashita shiken ga arimasu kara, benkyou shinakereba narimasen.',
        translation: 'Karena besok ada ujian, saya harus belajar.'
      },
      {
        japanese: '毎日薬を飲まなければなりません。',
        furigana: '毎日[まいにち] 薬[くすり]を 飲[の]まなければなりません。',
        romaji: 'Mainichi kusuri wo nomanakeba narimasen.',
        translation: 'Saya harus meminum obat setiap hari.'
      }
    ],
    relatedPatterns: ['n5-049'],
    tags: ['obligation', 'necessity', 'verbs']
  },
  {
    id: 'n5-049',
    level: 'N5',
    pattern: '〜なくてもいいです',
    reading: 'nakute mo ii desu',
    meaning: 'Tidak perlu... / Boleh tidak melakukan...',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menghapus keharusan/kewajiban bagi lawan bicara untuk melakukan sesuatu hal.',
    structure: 'Kata Kerja (Bentuk Negatif -nai tanpa -i) + くてもいいです',
    notes: 'Lawan langsung dari kewajiban nakereba narimasen.',
    examples: [
      {
        japanese: '明日は学校へ行かなくてもいいです。',
        furigana: '明日[あした]は 学校[gあっこう]へ 行[い]かなくてもいいです。',
        romaji: 'Ashita wa gakkou e ikanakute mo ii desu.',
        translation: 'Besok tidak perlu pergi ke sekolah juga tidak apa-apa.'
      },
      {
        japanese: '急がなくてもいいですよ。時間はあります。',
        furigana: '急[いそ]がなくてもいいですよ。 時間[じかん]はあります。',
        romaji: 'Isoganakute mo ii desu yo. Jikan wa arimasu.',
        translation: 'Tidak usah terburu-buru lho. Waktunya masih ada.'
      }
    ],
    relatedPatterns: ['n5-048', 'n5-015'],
    tags: ['permission', 'necessity', 'verbs']
  },
  {
    id: 'n5-050',
    level: 'N5',
    pattern: '〜ことができる',
    reading: 'koto ga dekiru',
    meaning: 'Bisa... / Dapat melakukan... (kemampuan/potensi).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan kebisaan atau kelayakan situasi eksternal untuk melangsungkan suatu aktivitas.',
    structure: 'Kata Kerja (Bentuk Kamus) + ことが＋できる / できます',
    notes: 'Setara dengan bentuk potensial kata kerja (Kanoukei), namun polanya lebih panjang dan bernada tulisan formal.',
    examples: [
      {
        japanese: '私は日本語を話すことができます。',
        furigana: '私[わたし]は 日本語[にほんご]を 話[は]なすことができます。',
        romaji: 'Watashi wa nihongo wo hanasu koto ga dekiru.',
        translation: 'Saya bisa/mampu berbicara bahasa Jepang.'
      },
      {
        japanese: 'このホテルでカードを使うことができますか。',
        furigana: 'この ホテルで カードを 使[つか]うことができますか。',
        romaji: 'Kono hoteru de kaado wo tsukau koto ga dekimasu ka.',
        translation: 'Apakah kita dapat menggunakan kartu kredit di hotel ini?'
      }
    ],
    relatedPatterns: [],
    tags: ['ability', 'dictionary-form', 'basics']
  },
  {
    id: 'n5-051',
    level: 'N5',
    pattern: '〜ことがある',
    reading: 'koto ga aru',
    meaning: 'Pernah... (menyatakan pengalaman di masa lampau).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menunjukkan bahwa subjek pembicara memiliki riwayat pengalaman melakukan hal tersebut setidaknya sekali.',
    structure: 'Kata Kerja (Bentuk Lampau -ta) + ことがある / あります',
    notes: 'Jangan tertukar dengan bentuk kamus + koto ga aru (yang berarti kadang-kadang terjadi). Di N5, artinya adalah riwayat pengalaman lampau.',
    examples: [
      {
        japanese: '日本へ行ったことがありますか。',
        furigana: '日本[にほん]へ 行[い]ったことがありますか。',
        romaji: 'Nihon e itta koto ga arimasu ka.',
        translation: 'Apakah Anda pernah pergi ke Jepang?'
      },
      {
        japanese: '私は寿司を食べたことがありません。',
        furigana: '私[わたし]は 寿司[すし]を 食べ[た]べたことがありません。',
        romaji: 'Watashi wa sushi wo tabeta koto ga arimasen.',
        translation: 'Saya belum pernah mencicipi sushi.'
      }
    ],
    relatedPatterns: [],
    tags: ['experience', 'ta-form', 'basics']
  },
  {
    id: 'n5-052',
    level: 'N5',
    pattern: '〜がほしい',
    reading: 'ga hoshii',
    meaning: 'Menginginkan... / Ingin memiliki... (kepemilikan benda).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengekspresikan hasrat kepemilikan pembicara terhadap suatu kata benda konkret atau barang.',
    structure: '[Subjek] は [Kata Benda] が ほしい (desu)',
    notes: 'Pola ini murni untuk kata benda. Jika ingin melakukan aksi ("ingin makan/pergi"), gunakan pola tai sebagai gantinya.',
    examples: [
      {
        japanese: '私は新しい車がほしいです。',
        furigana: '私[わたし]は 新しい[あたら]しい 車[くるま]がほしいです。',
        romaji: 'Watashi wa atarashii kuruma ga hoshii desu.',
        translation: 'Saya mendambakan mobil baru.'
      },
      {
        japanese: '誕生日にカメラがほしいですか。',
        furigana: '誕生日[たんじょうび]に カメラがほしいですか。',
        romaji: 'Tanjoubi ni kamera ga hoshii desu ka.',
        translation: 'Apakah Anda menginginkan kamera di hari ulang tahun Anda?'
      }
    ],
    relatedPatterns: ['n5-020'],
    tags: ['desire', 'possession', 'adjectives']
  },
  {
    id: 'n5-053',
    level: 'N5',
    pattern: '〜つもりです',
    reading: 'tsumori desu',
    meaning: 'Berniat untuk... / Berencana untuk... (niat matang pembicara).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengekspresikan rencana aktif pribadi yang telah bulat dan direncanakan dalam pikiran pembicara.',
    structure: 'Kata Kerja (Bentuk Kamus / Bentuk -nai) + つもりです',
    notes: 'Untuk niat negatif, gunakan [Bentuk -nai] + tsumori desu.',
    examples: [
      {
        japanese: '来年、日本に留学するつもりです。',
        furigana: '来年[らいねん]、日本[にほん]に 留学[りゅうがく]するつもりです。',
        romaji: 'Rainen, nihon ni ryuugaku suru tsumori desu.',
        translation: 'Tahun depan, saya bertekad kuliah ke Jepang.'
      },
      {
        japanese: 'タバコはもう吸わないつもりです。',
        furigana: 'タバコはもう 吸[す]わないつもりです。',
        romaji: 'Tabako wa mou suwanai tsumori desu.',
        translation: 'Saya berniat tidak akan merokok lagi.'
      }
    ],
    relatedPatterns: ['n5-054'],
    tags: ['intention', 'plan', 'basics']
  },
  {
    id: 'n5-054',
    level: 'N5',
    pattern: '〜よていです',
    reading: 'yotei desu',
    meaning: 'Dijadwalkan untuk... / Rencananya akan...',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan jadwal resmi atau agenda eksternal yang sudah pasti dan melibatkan pihak luar.',
    structure: 'Kata Kerja (Bentuk Kamus) / Kata Benda + の + よていです',
    notes: 'Lebih formal dan terjadwal secara eksternal dibandingkan tsumori yang berbasis niat murni personal.',
    examples: [
      {
        japanese: '会議は十時に始まる予定です。',
        furigana: '会議[かいぎ]は 十時[じゅうじ]に 始まる[はじ]まる 予定[よてい]です。',
        romaji: 'Kaigi wa juuji ni hajimaru yotei desu.',
        translation: 'Rapat dijadwalkan bakal dimulai tepat jam sepuluh.'
      },
      {
        japanese: '日本へ行く予定は来月の十日です。',
        furigana: '日本[にほん]へ 行く[い]く 予定[よてい]は 来月[らいげつ]の 十日[とおか]です。',
        romaji: 'Nihon e iku yotei wa raigetsu no tooka desu.',
        translation: 'Agenda keberangkatan ke Jepang direncanakan tanggal 10 bulan depan.'
      }
    ],
    relatedPatterns: ['n5-053'],
    tags: ['plan', 'schedule', 'basics']
  },
  {
    id: 'n5-055',
    level: 'N5',
    pattern: '〜ほうがいいです',
    reading: 'hou ga ii desu',
    meaning: 'Sebaiknya... / Ada baiknya jika... (saran/rekomendasi).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Memberikan nasihat, rekomendasi tindakan, atau petunjuk solutif kepada orang lain.',
    structure: 'Kata Kerja (Bentuk Lampau -ta / Bentuk -nai) + ほうがいいです',
    notes: 'Untuk saran positif wajib menggunakan bentuk Lampau -ta, sedangkan saran negatif memakai bentuk negatif -nai.',
    examples: [
      {
        japanese: '風邪を引きましたから、早く寝たほうがいいですよ。',
        furigana: '風邪[かぜ]を 引き[ひ]きましたから、 早く[はや]く 寝[ne]たほうがいいですよ。',
        romaji: 'Kaze wo hikimashita kara, hayaku neta hou ga ii desu yo.',
        translation: 'Karena Anda terserang flu, sebaiknya lekas tidur lho.'
      },
      {
        japanese: 'あまり冷たい水を飲まないほうがいいです。',
        furigana: 'あまり 冷[つめ]たい 水[mizu]を 飲[の]まないほうがいいです。',
        romaji: 'Amari tsumetai mizu wo nomanai hou ga ii desu.',
        translation: 'Sebaiknya jangan meminum air es terlalu berlebihan.'
      }
    ],
    relatedPatterns: [],
    tags: ['advice', 'suggestion', 'polite']
  },
  {
    id: 'n5-056',
    level: 'N5',
    pattern: '〜と思います',
    reading: 'to omoimasu',
    meaning: 'Saya pikir... / Menurut opini saya... (mengemukakan opini pribadi).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengekspresikan gagasan, opini, spekulasi, atau perkiraan subjektif pembicara mengenai sesuatu hal.',
    structure: '[Kalimat Bentuk Biasa (Plain)] + と思います',
    notes: 'Untuk menyatakan dugaan orang lain, gunakan bentuk omotteimasu.',
    examples: [
      {
        japanese: '明日はいい天気になると思います。',
        furigana: '明日[あした]はいい 天気[tenki]に なると思います。',
        romaji: 'Ashita wa ii tenki ni naru to omoimasu.',
        translation: 'Menurut saya, besok cuaca akan menjadi cerah.'
      },
      {
        japanese: 'この辞書はとても役に立つと思います。',
        furigana: 'この 辞書[じしょ]はとても 役に[やく]立つ[た]つと思います。',
        romaji: 'Kono jisho wa totemo yaku ni tatsu to omoimasu.',
        translation: 'Saya rasa kamus ini akan sangat bermanfaat.'
      }
    ],
    relatedPatterns: [],
    tags: ['opinion', 'thought', 'polite']
  },
  {
    id: 'n5-057',
    level: 'N5',
    pattern: '〜と言います',
    reading: 'to iimasu',
    meaning: 'Berkata bahwa... / Bernama... (mengutip ucapan / menyatakan nama).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Digunakan untuk mengutip ucapan seseorang secara langsung maupun tidak langsung, atau menyebutkan nama benda/orang.',
    structure: '[Ucapan / Kutipan / Nama] + と言います / と言いました',
    notes: 'Ditulis dengan partikel to sebagai penanda kutipan.',
    examples: [
      {
        japanese: '先生は「明日テストがある」と言いました。',
        furigana: '先生[せんせい]は「明日[あした] テストがある」と 言[い]いました。',
        romaji: 'Sensei wa "ashita tesuto ga aru" to iimashia.',
        translation: 'Guru berkata bahwa "besok ada ujian".'
      },
      {
        japanese: 'この花は日本語で何と言いますか。',
        furigana: 'この 花[はな]は 日本語[にほんご]で 何[なん]と 言[い]いますか。',
        romaji: 'Kono hana wa nihongo de nan to iimasu ka.',
        translation: 'Bunga ini dalam bahasa Jepang dinamakan apa?'
      }
    ],
    relatedPatterns: [],
    tags: ['quotation', 'speech', 'basics']
  },
  {
    id: 'n5-058',
    level: 'N5',
    pattern: '〜まえに',
    reading: 'mae ni',
    meaning: 'Sebelum melakukan... (keterangan waktu pembatas depan).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa aktivitas utama dikerjakan mendahului kejadian di anak kalimat.',
    structure: 'Kata Kerja (Bentuk Kamus) / Kata Benda + の + まえに',
    notes: 'Gunakan bentuk kamus! Jangan tertukar dengan bentuk lampau. Kata benda wajib ditempeli partikel no.',
    examples: [
      {
        japanese: '寝る前に、歯を磨いてください。',
        furigana: '寝[ね]る 前[まえ]に、 歯[は]を 磨[みが]いてください。',
        romaji: 'Neru mae ni, ha wo migaite kudasai.',
        translation: 'Sebelum tidur, tolong sikat gigi.'
      },
      {
        japanese: '食事の前に、手をきleini洗います。',
        furigana: '食事[しょくじ]の 前[まえ]に、 手[て]をきれいに 洗[あら]います。',
        romaji: 'Shokuji no mae ni, te wo kirei ni araimasu.',
        translation: 'Sebelum bersantap, saya mencuci tangan hingga bersih.'
      }
    ],
    relatedPatterns: ['n5-059'],
    tags: ['temporal', 'time-clause', 'basics']
  },
  {
    id: 'n5-059',
    level: 'N5',
    pattern: '〜あとで',
    reading: 'ato de',
    meaning: 'Setelah melakukan... (keterangan waktu pembatas belakang).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa tindakan kedua baru dikerjakan setelah aktivitas di anak kalimat pertama selesai sepenuhnya.',
    structure: 'Kata Kerja (Bentuk Lampau -ta) / Kata Benda + の + あとで',
    notes: 'Menggunakan kata kerja bentuk lampau -ta. Untuk kata benda, disisipkan partikel no sebelum ato de.',
    examples: [
      {
        japanese: '仕事が終わったあとで、飲みに行きませんか。',
        furigana: '仕事[しごと]が 終わ[お]わったあとで、 飲み[の]みに 行[い]きませんか。',
        romaji: 'Shigoto ga owatta ato de, nomi ni ikimasen ka.',
        translation: 'Setelah pekerjaan rampung, maukah pergi minum bersama?'
      },
      {
        japanese: '授業のあとで、質問をしてください。',
        furigana: '授業[じゅぎょう]のあとで、 質問[しつもん]をしてください。',
        romaji: 'Jugyou no ato de, shitsumon wo shite kudasai.',
        translation: 'Setelah pelajaran usai, silakan ajukan pertanyaan.'
      }
    ],
    relatedPatterns: ['n5-058', 'n5-046'],
    tags: ['temporal', 'time-clause', 'basics']
  },
  {
    id: 'n5-060',
    level: 'N5',
    pattern: '〜ごろ / 〜ころ',
    reading: 'goro / koro',
    meaning: 'Sekitar... / Kira-kira... (menunjukkan estimasi titik waktu spesifik).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Memberikan perkiraan waktu terjadinya peristiwa (bukan durasi lamanya).',
    structure: '[Titik Waktu / Jam / Tanggal] + ごろ',
    notes: 'Hanya digunakan untuk penanda titik waktu kalender/jam (e.g. jam 3 sore, bulan Juni). Untuk jangka waktu/durasi, gunakan gurai.',
    examples: [
      {
        japanese: '昨日は七時半ごろ家に帰りました。',
        furigana: '昨日[きのう]は 七時[しちじ]半[はん]ごろ 家[うち]へ 帰[かえ]りました。',
        romaji: 'Kinou wa shichiji han goro uchi e kaerimashita.',
        translation: 'Kemarin saya pulang ke rumah sekitar pukul setengah delapan.'
      },
      {
        japanese: '来月の中旬ごろ、日本へ出発します。',
        furigana: '来月[らいげつ]の 中旬[chゅうじゅん]ごろ、 日本[にほん]へ 出発[しゅっぱつ]します。',
        romaji: 'Raigetsu no chuujun goro, nihon e shuppatsu shimasu.',
        translation: 'Saya akan bertolak ke Jepang sekitar pertengahan bulan depan.'
      }
    ],
    relatedPatterns: ['n5-061'],
    tags: ['time', 'estimation', 'basics']
  },
  {
    id: 'n5-061',
    level: 'N5',
    pattern: '〜くらい / 〜ぐらい',
    reading: 'kurai / gurai',
    meaning: 'Kira-kira... / Sekitar... / Kurang lebih... (menunjukkan taksiran kuantitas/durasi).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan taksiran lamanya waktu, jumlah orang, harga barang, atau ukuran kuantitatif lainnya.',
    structure: '[Jumlah / Durasi Waktu / Nominal] + ぐらい',
    notes: 'Berguna untuk menyatakan rentang waktu (e.g. 3 jam, 2 minggu) atau besaran fisik.',
    examples: [
      {
        japanese: '毎日二時間ぐらい日本語を勉強します。',
        furigana: '毎日[まいにち] 二時間[にじかん]ぐらい 日本語[にほんご]を 勉強[べんきょう]します。',
        romaji: 'Mainichi nijikan gurai nihongo wo benkyou shimasu.',
        translation: 'Saya belajar bahasa Jepang kurang lebih selama dua jam setiap hari.'
      },
      {
        japanese: '学校に学生が五十人ぐらいいます。',
        furigana: '学校[gあっこう]に 学生[がくせい]が 五十人[ごじゅうにん]ぐらいいます。',
        romaji: 'Gakkou ni gakusei ga gojuunin gurai imasu.',
        translation: 'Di sekolah ada kira-kira lima puluh siswa.'
      }
    ],
    relatedPatterns: ['n5-060'],
    tags: ['quantity', 'duration', 'estimation']
  },
  {
    id: 'n5-062',
    level: 'N5',
    pattern: '〜までに',
    reading: 'made ni',
    meaning: 'Paling lambat... / Sebelum... (batas akhir waktu pengerjaan).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menandai batas tenggat waktu krusial di mana suatu aksi harus diselesaikan.',
    structure: '[Batas Waktu] + までに + [Aksi]',
    notes: 'Sangat berbeda dengan made (sampai). Partikel made ni melambangkan deadline/tenggat waktu tunggal.',
    examples: [
      {
        japanese: 'レポートは金曜日までに提出してください。',
        furigana: 'レポートは 金曜日[きんようび]までに 提出[ていしゅつ]してください。',
        romaji: 'Repooto wa kinyoubi made ni teishutsu shite kudasai.',
        translation: 'Tolong kumpulkan laporannya paling lambat hari Jumat.'
      },
      {
        japanese: '夜の十時までに家に帰らなければなりません。',
        furigana: '夜[よる]の 十時[じゅうじ]までに 家[うち]へ 帰[かえ]らなければなりません。',
        romaji: 'Yoru no juuji made ni uchi e kaeranakeba narimasen.',
        translation: 'Saya wajib tiba di rumah paling lambat jam sepuluh malam.'
      }
    ],
    relatedPatterns: ['n5-010'],
    tags: ['temporal', 'deadline', 'basics']
  },
  {
    id: 'n5-063',
    level: 'N5',
    pattern: '〜中 (ちゅう / じゅう)',
    reading: 'chuu / juu',
    meaning: 'Sedang... / Sepanjang... (rentang keberlangsungan).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa subjek sedang sibuk melakukan aksi tersebut (chuu) atau melambangkan seluruh rentang wilayah/waktu (juu).',
    structure: '[Kata Benda] + 中',
    notes: 'Ucapannya bervariasi: kaigichuu (sedang rapat), ichinichijuu (sepanjang hari).',
    examples: [
      {
        japanese: '社長は今会議中ですから、少々お待ちください。',
        furigana: '社長[しゃちょう]は今 会議[かいぎ]中[ちゅう]ですから、少々お待ちください。',
        romaji: 'Shachou wa ima kaigichuu desu kara, shoushou omachi kudasai.',
        translation: 'Karena direktur sedang dalam rapat saat ini, tolong tunggu sebentar.'
      },
      {
        japanese: '彼は一年中旅行をしていますよ。',
        furigana: '彼[かれ]は 一年[いちねん]中[じゅう] 旅行[りょこう]をしていますよ。',
        romaji: 'Kare wa ichinenjuu ryokou wo shite imasu yo.',
        translation: 'Dia melakukan perjalanan sepanjang tahun lho.'
      }
    ],
    relatedPatterns: [],
    tags: ['time', 'state', 'suffix']
  },
  {
    id: 'n5-064',
    level: 'N5',
    pattern: '〜ずつ',
    reading: 'zutsu',
    meaning: 'Masing-masing... / Sedikit demi sedikit... (distribusi adil).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menunjukkan pembagian porsi kuantitas yang sama rata untuk setiap kali tindakan dilakukan.',
    structure: '[Jumlah / Satuan] + ずつ',
    notes: 'Dapat ditempelkan pada kuantitas bilangan jam, lembar, buah, atau porsi.',
    examples: [
      {
        japanese: 'この薬は一日に三回、一錠ずつ飲んでください。',
        furigana: 'この 薬[くすり]は 一日[icいにち]に 三回[さんkai]、 一錠[いちじょう]ずつ 飲[の]んでください。',
        romaji: 'Kono kusuri wa ichinichi ni sankai, ichijou zutsu nonde kudasai.',
        translation: 'Tolong minum obat ini tiga kali sehari, masing-masing satu tablet.'
      },
      {
        japanese: '毎日少しずつ日本語の言葉を覚えます。',
        furigana: '毎日[まいにち] 少し[すこ]しずつ 日本語[にほんご]の 言葉[ことば]を 覚え[おぼ]えます。',
        romaji: 'Mainichi sukoshi zutsu nihongo no kotoba wo oboemasu.',
        translation: 'Saya menghafal kosakata bahasa Jepang sedikit demi sedikit setiap hari.'
      }
    ],
    relatedPatterns: [],
    tags: ['distribution', 'quantity', 'basics']
  },
  {
    id: 'n5-065',
    level: 'N5',
    pattern: '〜方 (かた)',
    reading: 'kata',
    meaning: 'Cara melakukan... (tata cara pengerjaan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengubah kata kerja aktif menjadi kata benda yang melambangkan prosedur/metode pelaksanaan.',
    structure: 'Kata Kerja (Stem Masu) + 方',
    notes: 'Hasil penggabungan berkedudukan sebagai kata benda yang membutuhkan partikel no.',
    examples: [
      {
        japanese: 'この漢字の読み方を教えてくれませんか。',
        furigana: 'この 漢字[kanji]の 読み[よ]み方[かた]を 教え[おし]えてくれませんか。',
        romaji: 'Kono kanji no yomikata wo oshiete kuremasen ka.',
        translation: 'Bisakah Anda tolong tunjukkan cara membaca kanji ini?'
      },
      {
        japanese: '日本の料理の作り方は面白いです。',
        furigana: '日本[にほん]の 料理[りょうり]の 作り[つく]り方[かた]は 面白い[おもしろ]いです。',
        romaji: 'Nihon no ryouri no tsukurikata wa omoshiroi desu.',
        translation: 'Cara memasak makanan Jepang itu sangat menarik.'
      }
    ],
    relatedPatterns: [],
    tags: ['method', 'suffix', 'basics']
  },
  {
    id: 'n5-066',
    level: 'N5',
    pattern: '〜やすい',
    reading: 'yasui',
    meaning: 'Mudah untuk... (kemudahan aksi fisik).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan bahwa suatu aksi atau penggunaan barang sangat gampang dilaksanakan.',
    structure: 'Kata Kerja (Stem Masu) + やすい (desu)',
    notes: 'Hasil konjugasi berkedudukan seperti kata Sifat-i (i-adjective).',
    examples: [
      {
        japanese: 'この penは軽くて、とても書きやすいです。',
        furigana: 'この ペنは 軽く[かる]て、とても 書き[か]きやすいです。',
        romaji: 'Kono pen wa karukte, totemo kakiyasui desu.',
        translation: 'Pena ini ringan dan sangat mudah digunakan untuk menulis.'
      },
      {
        japanese: '日本の路線図はわかりやすいですね。',
        furigana: '日本[にほん]の 路線[ろせん]図[ず]はわかりやすいですね。',
        romaji: 'Nihon no rosenzu wa wakariyasui desu ne.',
        translation: 'Peta rute kereta Jepang sangat mudah dipahami ya.'
      }
    ],
    relatedPatterns: ['n5-067'],
    tags: ['easy', 'suffix', 'adjectives']
  },
  {
    id: 'n5-067',
    level: 'N5',
    pattern: '〜にくい',
    reading: 'nikui',
    meaning: 'Sulit untuk... / Susah untuk... (kesulitan aksi fisik).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan bahwa suatu tindakan atau pemahaman terasa sukar untuk direalisasikan.',
    structure: 'Kata Kerja (Stem Masu) + にくい (desu)',
    notes: 'Kebalikan langsung dari yasui. Hasil konjugasi berupa kata Sifat-i.',
    examples: [
      {
        japanese: 'この薬は大きくて、ちょっと飲みにくいです。',
        furigana: 'この 薬[くすり]は 大き[おお]くて、ちょっと 飲み[eの]みにくいです。',
        romaji: 'Kono kusuri wa ookikte, chotto nominikui desu.',
        translation: 'Pil obat ini besar, agak susah untuk ditelan.'
      },
      {
        japanese: '彼の字は小さくて読みにくいです。',
        furigana: '彼[かれ]の 字[じ]は 小さ[ちい]くて 読み[よ]みにくいです。',
        romaji: 'Kare no ji wa chiisakute yominikui desu.',
        translation: 'Tulisan tangannya kecil dan sulit dibaca.'
      }
    ],
    relatedPatterns: ['n5-066'],
    tags: ['difficult', 'suffix', 'adjectives']
  },
  {
    id: 'n5-068',
    level: 'N5',
    pattern: '〜そうです (Kelihatannya)',
    reading: 'sou desu',
    meaning: 'Kelihatannya... / Tampaknya... (dugaan visual sekilas).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengekspresikan opini dugaan berdasarkan penilaian indra penglihatan pembicara saat itu juga.',
    structure: 'Kata Sifat-i (tanpa -i) / Kata Sifat-na (tanpa -na) + そうです',
    notes: 'Kecualian: kata Sifat ii (bagus) menjadi yosasou desu.',
    examples: [
      {
        japanese: 'このケーキはとてもおいしそうです。',
        furigana: 'この ケーキはとてもおいしそうです。',
        romaji: 'Kono keeki wa totemo oishisou desu.',
        translation: 'Kue ini kelihatannya sangat lezat.'
      },
      {
        japanese: '空が暗いですから、雨が降りそうですね。',
        furigana: '空[そら]が 暗[くら]いですから、 雨[あめ]が 降り[ふ]りそうですね。',
        romaji: 'Sora ga kurai desu kara, ame ga furisou desu ne.',
        translation: 'Langitnya mendung gelap, tampaknya hujan akan turun ya.'
      }
    ],
    relatedPatterns: [],
    tags: ['conjecture', 'visual', 'adjectives']
  },
  {
    id: 'n5-069',
    level: 'N5',
    pattern: '〜ために',
    reading: 'tame ni',
    meaning: 'Demi... / Untuk keperluan... / Untuk tujuan...',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan target penerima manfaat, maksud tujuan akhir, atau alasan keuntungan suatu perbuatan.',
    structure: 'Kata Benda + の + ためi / Kata Kerja (Bentuk Kamus) + ために',
    notes: 'Kata benda membutuhkan partikel no sebelum tame ni.',
    examples: [
      {
        japanese: '家族のために、一生懸命働きます。',
        furigana: '家族[かぞく]のために、 一生懸命[いっしょうけんめい] 働き[はたら]きます。',
        romaji: 'Kazoku no tame ni, isshoukenmei hatarakimasu.',
        translation: 'Saya bekerja sekuat tenaga demi keluarga.'
      },
      {
        japanese: '新しい家を買うために、お金をためています。',
        furigana: '新しい[あたら]しい 家[いえ]を 買う[か]うために、お 金[かね]をためています。',
        romaji: 'Atarashii ie wo kau tame ni, okane wo tamete imasu.',
        translation: 'Saya menabung uang untuk keperluan membeli rumah baru.'
      }
    ],
    relatedPatterns: [],
    tags: ['purpose', 'benefit', 'basics']
  },
  {
    id: 'n5-070',
    level: 'N5',
    pattern: '〜ので',
    reading: 'node',
    meaning: 'Karena... (menyatakan sebab-akibat bernada objektif / sopan).',
    category: 'Kata Sambung',
    jlptFunction: 'Menyambungkan klausa sebab dengan klausa akibat secara halus dan sopan, sering dipakai saat meminta maaf/izin.',
    structure: '[Kata Kerja/Sifat/Benda (Bentuk Biasa)] + ので',
    notes: 'Bagi Kata Sifat-na & Kata Benda wajib disisipkan na sebelum node (e.g. byouki na node).',
    examples: [
      {
        japanese: '用事があるので、今日はお先に失礼します。',
        furigana: '用事[ようじ]があるので、 今日[きょう]はお 先[さき]に 失礼[しつれい]します。',
        romaji: 'Youji ga aru node, kyou wa osaki ni shitsurei shimasu.',
        translation: 'Karena ada suatu urusan, hari ini saya mohon izin pulang duluan.'
      },
      {
        japanese: '頭が痛いので、少し休んでもいいですか。',
        furigana: '頭[あたま]が 痛[いた]いので、 少し[すこ]し 休み[やす]んでもいいですか。',
        romaji: 'Atama ga itai node, sukoshi yasunde mo ii desu ka.',
        translation: 'Karena kepala saya pusing, bolehkah saya beristirahat sejenak?'
      }
    ],
    relatedPatterns: ['n5-022'],
    tags: ['reason', 'conjunction', 'polite']
  },
  {
    id: 'n5-071',
    level: 'N5',
    pattern: '〜けれども / 〜けど',
    reading: 'keredomo / kedo',
    meaning: 'Meskipun... / Tetapi... / Namun... (penghubung klausa kontras).',
    category: 'Kata Sambung',
    jlptFunction: 'Menyatakan kontradiksi antara dua klausa. Bentuk けど lebih sering digunakan dalam percakapan sehari-hari.',
    structure: '[Klausa 1 (Bentuk Biasa/Sopan)] + けど / けれども、 [Klausa 2]',
    notes: 'Fungsinya mirip dengan partikel ga kontras, namun kedo terasa lebih kasual dan akrab.',
    examples: [
      {
        japanese: '日本語は難しいけれど、とても面白いです。',
        furigana: '日本語[にほんご]は 難しい[むずか]しいけれど、とても 面白い[おもしろ]いです。',
        romaji: 'Nihongo wa muzukashii keredo, totemo omoshiroi desu.',
        translation: 'Meskipun bahasa Jepang itu sulit, namun sangat menarik.'
      },
      {
        japanese: 'たくさん食べたけれども、まだお腹が空いています。',
        furigana: 'たくさん 食べ[た]べたけれども、まだお 腹[なか]が 空[す]いています。',
        romaji: 'Takusan tabeta keredomo, mada onaka ga aite imasu.',
        translation: 'Meskipun sudah makan banyak, namun perut saya masih terasa lapar.'
      }
    ],
    relatedPatterns: ['n5-023'],
    tags: ['contrast', 'conjunction', 'basics']
  },
  {
    id: 'n5-072',
    level: 'N5',
    pattern: '〜たらどうですか',
    reading: 'tara dou desu ka',
    meaning: 'Bagaimana kalau... / Mengapa tidak... (menyarankan tindakan secara bersahabat).',
    category: 'Conditional',
    jlptFunction: 'Memberikan anjuran atau saran bersahabat kepada lawan bicara agar mencoba suatu perbuatan.',
    structure: 'Kata Kerja (Bentuk -ta) + らどうですか',
    notes: 'Pola ini didahului bentuk pengandaian tara. Sering disingkat menjadi tara dalam obrolan kasual.',
    examples: [
      {
        japanese: 'わからないときは、先生に聞いたらどうですか。',
        furigana: 'わからないときは、 先生[せんせい]に 聞い[き]いたらどうですか。',
        romaji: 'Wakaranai toki wa, sensei ni kiitara dou desu ka.',
        translation: 'Ketika tidak paham, bagaimana kalau coba bertanya kepada guru?'
      },
      {
        japanese: '疲れているなら、少し休んだらどうですか。',
        furigana: '疲れ[つか]れているなら、 少し[すこ]し 休[やす]んだらどうですか。',
        romaji: 'Tsukarete iru nara, sukoshi yasundara dou desu ka.',
        translation: 'Jika lelah, mengapa Anda tidak beristirahat sejenak?'
      }
    ],
    relatedPatterns: ['n5-055'],
    tags: ['suggestion', 'conditional', 'ta-form']
  },
  {
    id: 'n5-073',
    level: 'N5',
    pattern: '〜という',
    reading: 'to iu',
    meaning: 'Yang disebut... / Yang bernama... (pemberian identitas/nama).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan nama atau julukan suatu benda/orang yang mungkin belum dikenal oleh lawan bicara.',
    structure: '[Nama / Istilah] + という + [Kategori Kata Benda]',
    notes: 'Sangat sering digunakan untuk memperkenalkan nama produk, buku, lagu, atau orang.',
    examples: [
      {
        japanese: 'サクラという花を知っていますか。',
        furigana: 'サクラという 花[はな]を 知[し]っていますか。',
        romaji: 'Sakura to iu hana wo shitte imasu ka.',
        translation: 'Apakah Anda mengenal bunga yang dinamakan Sakura?'
      },
      {
        japanese: 'これは何という本ですか。',
        furigana: 'これは 何[なん]という 本[ほん]ですか。',
        romaji: 'Kore wa nan to iu hon desu ka.',
        translation: 'Ini buku yang berjudul apa?'
      }
    ],
    relatedPatterns: ['n5-057'],
    tags: ['naming', 'modifier', 'basics']
  },
  {
    id: 'n5-074',
    level: 'N5',
    pattern: '〜なさい',
    reading: 'nasai',
    meaning: 'Lakukanlah...! (perintah tegas tapi santun dari otoritas).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Memberikan perintah langsung dari atasan ke bawahan, guru ke murid, atau orang tua ke anak kandung.',
    structure: 'Kata Kerja (Stem Masu) + なさい',
    notes: 'Terdengar tegas dan bernada instruktif. Hindari memakainya kepada orang asing, rekan sejawat, atau atasan.',
    examples: [
      {
        japanese: 'もう遅い時間ですから、早く寝なさい。',
        furigana: 'もう 遅[おそ]い 時間[じかん]ですから、 早く[はや]く 寝[ね]なさい。',
        romaji: 'Mou osoi jikan desu kara, hayaku nenasai.',
        translation: 'Karena sudah larut malam, lekaslah tidur!'
      },
      {
        japanese: 'ここに名前と住所を書きなさい。',
        furigana: 'ここに 名前[namae]と 住所[じゅうしょ]を 書き[か]きなさい。',
        romaji: 'Koko ni name to juusho wo kakinasai.',
        translation: 'Tuliskan nama dan alamatmu di sini!'
      }
    ],
    relatedPatterns: ['n5-013'],
    tags: ['command', 'authority', 'polite']
  },
  {
    id: 'n5-075',
    level: 'N5',
    pattern: '〜ない (Informal Negatif)',
    reading: 'nai',
    meaning: 'Tidak... (bentuk negatif kasual/informal).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Bentuk biasa/kasual dari 〜ません. Digunakan dalam percakapan dengan teman atau sebelum pola tata bahasa tertentu.',
    structure: 'Kata Kerja (Bentuk -nai)',
    notes: 'Grup 1 berakhiran vokal -a + nai (e.g. 書く -> 書かない). Grup 2 berakhiran -nai (e.g. 食べる -> 食べない).',
    examples: [
      {
        japanese: '今日は晩ご飯を食べない。',
        furigana: '今日[きょう]は 晩[ばん]ご飯[ごはん]を 食べ[た]べない。',
        romaji: 'Kyou wa bangohan wo tabenai.',
        translation: 'Hari ini saya tidak makan malam (kasual).'
      },
      {
        japanese: 'お金がないから、何も買わない。',
        furigana: 'お 金[かね]がないから、 何[なに]も 買[か]わない。',
        romaji: 'Okane ga nai kara, nani mo kawanai.',
        translation: 'Karena tidak ada uang, saya tidak beli apa-apa.'
      }
    ],
    relatedPatterns: ['n5-043'],
    tags: ['negation', 'casual', 'conjugation']
  },
  {
    id: 'n5-076',
    level: 'N5',
    pattern: '〜た (Informal Lampau)',
    reading: 'ta',
    meaning: 'Telah... / Sudah... (bentuk lampau kasual/informal).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Bentuk biasa/kasual dari 〜ました. Penting untuk pembentukan klausa modifikasi dan percakapan kasual.',
    structure: 'Kata Kerja (Bentuk -ta)',
    notes: 'Cara konjugasinya sama persis dengan pembentukan bentuk -te, hanya saja huruf -e diganti menjadi -a.',
    examples: [
      {
        japanese: '昨日、面白い映画を見たよ。',
        furigana: '昨日[きのう]、 面白い[おもしろ]い 映画[えいが]を 見[み]たよ。',
        romaji: 'Kinou, omoshiroi eiga wo mita yo.',
        translation: 'Kemarin, saya sudah menonton film seru lho.'
      },
      {
        japanese: '宿題はもう終わった？',
        furigana: '宿題[しゅくだい]はもう 終わ[お]わった？',
        romaji: 'Shukudai wa mou owatta?',
        translation: 'Apakah tugas PR-mu sudah selesai?'
      }
    ],
    relatedPatterns: ['n5-044'],
    tags: ['past', 'casual', 'conjugation']
  },
  {
    id: 'n5-077',
    level: 'N5',
    pattern: '〜なかった (Informal Lampau Negatif)',
    reading: 'nakatta',
    meaning: 'Tidak... dulu (bentuk lampau negatif kasual/informal).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Bentuk biasa/kasual dari 〜ませんでした. Menyatakan penolakan atas peristiwa lampau secara santai.',
    structure: 'Kata Kerja (Bentuk -nai tanpa -i) + かった',
    notes: 'Dibuat dengan memodifikasi huruf -i terakhir pada bentuk -nai menjadi -katta.',
    examples: [
      {
        japanese: '昨日は雨が降らなかった。',
        furigana: '昨日[きのう]は 雨[あめ]gあ 降[ふ]らなかった。',
        romaji: 'Kinou wa ame ga furanakatta.',
        translation: 'Kemarin hujan tidak turun.'
      },
      {
        japanese: 'テストは難しくなかった。',
        furigana: 'テストは 難[むずか]しくなかった。',
        romaji: 'Tesuto wa muzukashikunakatta.',
        translation: 'Ujiannya tidak susah dulu.'
      }
    ],
    relatedPatterns: ['n5-044', 'n5-075'],
    tags: ['past', 'negation', 'casual']
  },
  {
    id: 'n5-078',
    level: 'N5',
    pattern: '〜あげる',
    reading: 'ageru',
    meaning: 'Memberikan... (dari pembicara ke orang lain atau sesama pihak ketiga).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan aksi memberikan benda fisik kepada pihak lain.',
    structure: '[Pemberi] は/gあ [Penerima] に [Benda] を あげる',
    notes: 'Hindari memakainya secara congkak. Hanya digunakan untuk hubungan setara atau ke bawah.',
    examples: [
      {
        japanese: '私は友達に誕生日プレゼントをあげました。',
        furigana: '私[わたし]は 友達[ともだち]に 誕生日[たんじょうび]プレゼントをあげました。',
        romaji: 'Watashi wa tomodachi ni tanjoubi purezento wo agemashita.',
        translation: 'Saya memberikan kado ulang tahun kepada teman.'
      },
      {
        japanese: '佐藤さんは猫に餌をあげました。',
        furigana: '佐藤[さとう]さんは 猫[ねこ]に 餌[えさ]をあげました。',
        romaji: 'Satou-san wa neko ni esa wo agemashita.',
        translation: 'Tuan Sato memberi makan kepada kucing.'
      }
    ],
    relatedPatterns: ['n5-079', 'n5-080'],
    tags: ['giving-receiving', 'social', 'basics']
  },
  {
    id: 'n5-079',
    level: 'N5',
    pattern: '〜くれる',
    reading: 'kureru',
    meaning: 'Memberikan... (dari orang lain kepada pembicara atau kerabat dekat).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan aksi pemberian benda di mana penerima manfaatnya wajib diri pembicara sendiri atau anggota keluarganya.',
    structure: '[Pemberi] は/が [Penerima (Saya)] に [Benda] を くれる / くれます',
    notes: 'Lawan arah dari あげる. Arah pemberian selalu memusat menuju saya.',
    examples: [
      {
        japanese: '山田さんは私にお土産をくれました。',
        furigana: '山田[やまだ]さんは 私[わたし]に お 土産[みやげ]をくれました。',
        romaji: 'Yamada-san wa watashi ni omiyage wo kuremashita.',
        translation: 'Tuan Yamada memberikan oleh-oleh kepada saya.'
      },
      {
        japanese: 'お兄ちゃんが美味しいお菓子をくれたよ。',
        furigana: 'お 兄[にい]ちゃんが 美味[おい]しいお 菓子[かし]をくれたよ。',
        romaji: 'Onii-chan ga oishii okashi wo kureta yo.',
        translation: 'Kakak laki-laki memberi saya kue lezat lho.'
      }
    ],
    relatedPatterns: ['n5-078', 'n5-080'],
    tags: ['giving-receiving', 'social', 'basics']
  },
  {
    id: 'n5-080',
    level: 'N5',
    pattern: '〜もらう',
    reading: 'morau',
    meaning: 'Menerima... (mendapatkan sesuatu dari orang lain).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan aksi menerima hadiah benda dari pihak lain dari sudut pandang sang penerima.',
    structure: '[Penerima] は/が [Pemberi] に/から [Benda] を もらう / もらいます',
    notes: 'Partikel penanda pemberi dapat berupa ni maupun kara.',
    examples: [
      {
        japanese: '私へ先生から英語の辞書をもらいました。',
        furigana: '私[わたし]は 先生[せんせい]から 英語[えいご]の 辞書[じしょ]をもらいました。',
        romaji: 'Watashi wa sensei kara eigo no jisho wo moraimashia.',
        translation: 'Saya menerima kamus bahasa Inggris dari guru.'
      },
      {
        japanese: '妹は彼氏に花をもらいました。',
        furigana: '妹[いもうと]は 彼氏[かれし]に 花[はな]をもらいました。',
        romaji: 'Imouto wa kareshil ni hana wo moraimashita.',
        translation: 'Adik perempuan saya mendapat bunga dari pacarnya.'
      }
    ],
    relatedPatterns: ['n5-078', 'n5-079'],
    tags: ['giving-receiving', 'social', 'basics']
  },
  {
    id: 'n5-081',
    level: 'N5',
    pattern: '〜てくださいませんか',
    reading: 'te kudasaimasen ka',
    meaning: 'Maukah Anda tolong... (permintaan sangat sopan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Memohon bantuan secara santun untuk melunakkan instruksi permintaan kepada orang lain.',
    structure: 'Kata Kerja (Bentuk -te) + くださいませんか',
    notes: 'Sangat disarankan dipakai dalam ranah pelayanan pelanggan atau dunia kerja kepada klien.',
    examples: [
      {
        japanese: 'ここでの書き方を教えてくださいませんか。',
        furigana: 'ここでの 書き[か]i方[かた]を 教え[おし]えてくださいませんか。',
        romaji: 'Koko de no kakikata wo oshiete kudasaimasen ka.',
        translation: 'Maukah Anda tolong mengajarkan cara menulis di sini?'
      },
      {
        japanese: '写真を撮ってくださいませんか。',
        furigana: '写真[しゃしん]を 撮[と]ってくださいませんか。',
        romaji: 'Shashin wo totte kudasaimasen ka.',
        translation: 'Bersediakah Anda tolong mengambil foto untuk kami?'
      }
    ],
    relatedPatterns: ['n5-013', 'n5-047'],
    tags: ['request', 'te-form', 'polite']
  },
  {
    id: 'n5-082',
    level: 'N5',
    pattern: '〜てみる',
    reading: 'te miru',
    meaning: 'Mencoba melakukan... (uji coba suatu perbuatan).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Melakukan suatu tindakan dengan maksud melihat hasil atau rasanya seperti apa.',
    structure: 'Kata Kerja (Bentuk -te) + みる / みます',
    notes: 'Kata miru di sini menggunakan hiragana biasa dan tidak memakai kanji 見る.',
    examples: [
      {
        japanese: '日本語の新しい本を読んでみます。',
        furigana: '日本語[にほんご]の 新しい[あたら]しい 本[ほん]を 読[よ]んでみます。',
        romaji: 'Nihongo no atarashii hon wo yonde mimasu.',
        translation: 'Saya akan mencoba membaca buku bahasa Jepang yang baru.'
      },
      {
        japanese: '日本の服を着てみました。とても軽いです。',
        furigana: '日本[にほん]の 服[ふく]を 着[き]てみました。とても 軽い[かる]いです。',
        romaji: 'Nihon no fuku wo kite mimashita. Totemo karui desu.',
        translation: 'Saya telah mencoba mengenakan pakaian khas Jepang. Sangat ringan.'
      }
    ],
    relatedPatterns: [],
    tags: ['try', 'te-form', 'verbs']
  },
  {
    id: 'n5-083',
    level: 'N5',
    pattern: '〜ておく',
    reading: 'te oku',
    meaning: 'Mempersiapkan... terlebih dahulu (persiapan masa depan).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Melakukan tindakan awal yang bermanfaat untuk mengantisipasi kejadian berikutnya atau menjaga kondisi tetap baik.',
    structure: 'Kata Kerja (Bentuk -te) + おく / おきます',
    notes: 'Dalam percakapan kasual, te oku disingkat menjadi toku.',
    examples: [
      {
        japanese: '旅行の前に、ホテルの予約をしておきます。',
        furigana: '旅行[りょこう]の 前[まえ]に、 ホテルの 予約[よやく]をしておきます。',
        romaji: 'Ryokou no mae ni, hoteru no yoyaku wo shite okimasu.',
        translation: 'Sebelum berwisata, saya akan memesan hotel terlebih dahulu.'
      },
      {
        japanese: 'パーティーがありますから、ビールを買っておきました。',
        furigana: 'パーティーがありますから、 ビールを 買[か]っておきました。',
        romaji: 'Paatii ga arimasu kara, biiru wo katte okimashia.',
        translation: 'Karena akan ada pesta, saya sudah membeli bir terlebih dahulu.'
      }
    ],
    relatedPatterns: [],
    tags: ['preparation', 'te-form', 'verbs']
  },
  {
    id: 'n5-084',
    level: 'N5',
    pattern: '〜のだ / 〜んです',
    reading: 'no da / n desu',
    meaning: 'Mengapa... / Begini lho... (bentuk penegasan / penjelasan sebab).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Mengekspresikan alasan mendalam, memperjelas motif di balik suatu situasi, atau mendesak konfirmasi penjelasan.',
    structure: '[Bentuk Biasa (Plain)] + んです / のです',
    notes: 'Kata Sifat-na dan Kata Benda membutuhkan penambahan na sebelum n desu.',
    examples: [
      {
        japanese: 'どうして遅れたんですか。バスが来なかったんです。',
        furigana: 'どうして 遅[おく]れたんですか。 バスが 来[こ]なかったんです。',
        romaji: 'Doushite okureta n desu ka. Basu ga konakatta n desu.',
        translation: 'Mengapa Anda terlambat? Begini, tadi bus tidak kunjung datang.'
      },
      {
        japanese: 'ちょっと頭が痛いんです。',
        furigana: 'ちょっと 頭[あたま]が 痛[いた]いんです。',
        romaji: 'Chotto atama ga itai n desu.',
        translation: 'Sebenarnya, kepala saya agak pusing.'
      }
    ],
    relatedPatterns: [],
    tags: ['explanation', 'emphasis', 'polite']
  },
  {
    id: 'n5-085',
    level: 'N5',
    pattern: '〜と (Kondisional Alami)',
    reading: 'to',
    meaning: 'Jika... pasti... / Begitu... langsung... (kondisional mutlak).',
    category: 'Conditional',
    jlptFunction: 'Menunjukkan hubungan sebab akibat alami, hukum alam, pengoperasian mesin, atau rute jalan yang pasti terjadi.',
    structure: 'Kata Kerja (Bentuk Kamus) + と、 [Klausa Hasil]',
    notes: 'Klausa hasil tidak boleh mengandung unsur kehendak personal pembicara (tidak boleh ada kudasai, tai, dsb).',
    examples: [
      {
        japanese: 'このボタンを押すと、お釣りが出ます。',
        furigana: 'この ボタンを 押す[お]すと、お 釣り[つり]が 出[de]ます。',
        romaji: 'Kono botan wo osu to, otsuri ga demasu.',
        translation: 'Jika tombol ini ditekan, uang kembalian pasti keluar.'
      },
      {
        japanese: 'まっすぐ行くと、右側に郵便局があります。',
        furigana: 'まっすぐ 行く[い]くと、 右側[migiがわ]に 郵便局[ゆうびんきょく]があります。',
        romaji: 'Massugu iku to, migigawa ni yuubinkyoku ga arimasu.',
        translation: 'Jika jalan lurus terus, di sisi kanan pasti ada kantor pos.'
      }
    ],
    relatedPatterns: [],
    tags: ['conditional', 'dictionary-form', 'basics']
  }
];

const allN5Grammar = [...n5BaseData, ...additionalData];

const fileContent = `import type { GrammarPattern } from '../types/grammar';

export const grammarN5Data: GrammarPattern[] = ${JSON.stringify(allN5Grammar, null, 2)};
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'grammarN5.ts'),
  fileContent,
  'utf8'
);

console.log('Successfully expanded grammarN5Data to 85 patterns!');

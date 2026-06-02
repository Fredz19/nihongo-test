import type { GrammarPattern } from '../types/grammar';

export const grammarN5Data: GrammarPattern[] = [
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
        japanese: '私はインドネシア人です。',
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
    tags: ['copula', 'polite', 'basics']
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
    tags: ['negation', 'copula', 'polite']
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
    notes: 'Jika digunakan bersama partikel lain seperti に (ni) atau で (de), partikel も diletakkan setelahnya (contoh: にも, でも).',
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
        furigana: '毎日[まいにち] 水[みず]を 飲み[の]みます。',
        romaji: 'Mainichi mizu wo nomimasu.',
        translation: 'Saya minum air setiap hari.'
      },
      {
        japanese: 'テレビを見ます。',
        furigana: 'テレビを 見[み]ます。',
        romaji: 'Terebi wo mimasen.',
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
        furigana: '教室[きょうしつ]に 学生[がくせい]がいます。',
        romaji: 'Kyoushitsu ni gakusei ga imasu.',
        translation: 'Ada siswa di dalam kelas.'
      },
      {
        japanese: '私には猫が三匹います。',
        furigana: '私[わたし]には 猫[ねこ]が 三匹[さんびき]います。',
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
        furigana: 'ここに 名前[なまえ]を 書[か]いてください。',
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
    structure: 'Kata Kerja (Bentuk -te) + もいい (です / ですか)',
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
        furigana: '冷[つめ]たい 水[みず]を 飲み[の]ましょうか。',
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
    meaning: 'Ingin... (menyatakan keinginan subjek pembicara).',
    reading: 'tai desu',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan keinginan internal pembicara (orang pertama) untuk melakukan suatu aksi.',
    structure: 'Kata Kerja (Bentuk Masu tanpa masu) + たい (です)',
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
        furigana: '新しい[あたら]しい スマhoを 買い[か]いたいです。',
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
        furigana: '日本語[にほんご]が 好き[す]きですから、毎日 勉強[べんきょう]します。',
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
    pattern: '〜くなる / 〜になる',
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
        japanese: '将来、日本語の通訳になりたいです。',
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
        furigana: '昨夜[ゆうべ]お 酒[さけ]を 飲み[の]みすぎました。',
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
        japanese: 'この映画は面白いでしょう。',
        furigana: 'この 映画[えいが]は 面白い[おもしろ]いでしょう。',
        romaji: 'Kono eiga wa omoshiroi deshou.',
        translation: 'Film ini menarik, bukan?'
      }
    ],
    relatedPatterns: [],
    tags: ['probability', 'conjecture', 'polite']
  }
];

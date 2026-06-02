const fs = require('fs');
const path = require('path');

const n4BaseData = [
  {
    id: 'n4-001',
    level: 'N4',
    pattern: '〜たら',
    reading: 'tara',
    meaning: 'Jika... / Setelah... (menunjukkan pengandaian atau urutan waktu bersyarat).',
    category: 'Conditional',
    jlptFunction: 'Membuat klausa pengandaian waktu lampau/tindakan selesai (ta-form) + ら untuk kondisi "jika A terjadi, maka B".',
    structure: 'Kata Kerja / Kata Sifat (Bentuk -ta / Lampau Biasa) + ら',
    notes: 'Pola ini sangat umum dan aman digunakan untuk menyatakan "jika" dalam percakapan sehari-hari dibandingkan pola conditional lain seperti 〜ば atau 〜と.',
    examples: [
      {
        japanese: '日本に着いたら、電話をしてください。',
        furigana: '日本[にほん]に 着[つ]いたら、 電話[でんわ]をしてください。',
        romaji: 'Nihon ni tsuitara, denwa wo shite kudasai.',
        translation: 'Setelah tiba di Jepang, tolong telepon saya.'
      },
      {
        japanese: '安かったら,それを買いたいです。',
        furigana: '安[やす]かったら,それを 買[か]いたいです。',
        romaji: 'Yasukattara, sore wo kaitai desu.',
        translation: 'Jika murah, saya ingin membelinya.'
      },
      {
        japanese: '雨が降ったら、行きません。',
        furigana: '雨[あめ]が 降[ふ]たら、 行[い]きません。',
        romaji: 'Ame ga futtara, ikimasen.',
        translation: 'Jika hujan turun, saya tidak akan pergi.'
      }
    ],
    relatedPatterns: [],
    tags: ['conditional', 'ta-form', 'basics']
  },
  {
    id: 'n4-002',
    level: 'N4',
    pattern: '〜ようにする',
    reading: 'you ni suru',
    meaning: 'Berusaha untuk / Membiasakan diri melakukan (atau tidak melakukan) sesuatu.',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menunjukkan komitmen usaha berkelanjutan untuk membiasakan suatu tindakan positif.',
    structure: 'Kata Kerja (Bentuk Kamus / Bentuk -nai) + ようにする',
    notes: 'Gunakan ようにしています (you ni shite imasu) jika tindakan tersebut sudah menjadi kebiasaan rutin yang berjalan.',
    examples: [
      {
        japanese: '毎日日本語を勉強するようにしています。',
        furigana: '毎日[まいにち] 日本語[にほんご]を 勉強[べんきょう]するようにしています。',
        romaji: 'Mainichi nihongo wo benkyou suru you ni shite imasu.',
        translation: 'Saya membiasakan diri belajar bahasa Jepang setiap hari.'
      },
      {
        japanese: '砂糖をあまり食べないようにします。',
        furigana: '砂糖[さとう]をあまり 食べ[たべ]ないようにします。',
        romaji: 'Satou wo amari tabenai you ni shimasu.',
        translation: 'Saya akan berusaha untuk tidak makan terlalu banyak gula.'
      }
    ],
    relatedPatterns: [],
    tags: ['effort', 'habit', 'commitment']
  },
  {
    id: 'n4-003',
    level: 'N4',
    pattern: '〜られる（可能形）',
    reading: 'rareru (kanoukei)',
    meaning: 'Bisa / Dapat melakukan sesuatu (Bentuk Potensial).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Mengubah kata kerja biasa ke bentuk yang menyatakan kesanggupan atau kemampuan.',
    structure: 'Grup 1 (U-dan -> E-dan + ru), Grup 2 (ru -> rareru), Grup 3 (suru -> dekiru, kuru -> korareru)',
    notes: 'Partikel penanda objek を (wo) sering kali berubah menjadi が (ga) ketika menggunakan bentuk potensial. Contoh: 日本語を話す -> 日本語が話せる.',
    examples: [
      {
        japanese: '私は刺身が食べられます。',
        furigana: '私[わたし]は 刺身[さしみ]が 食べ[たべ]られます。',
        romaji: 'Watashi wa sashimi ga taberaremasu.',
        translation: 'Saya bisa memakan sashimi.'
      },
      {
        japanese: '日本語で漢字が書けます。',
        furigana: '日本語[にほんご]で 漢字[かんじ]が 書[か]けます。',
        romaji: 'Nihongo de kanji ga kakemasu.',
        translation: 'Saya bisa menulis kanji dalam bahasa Jepang.'
      },
      {
        japanese: '一人で病院へ来られますか。',
        furigana: '一人[ひとり]で 病院[びょういん]へ 来[こ]られますか。',
        romaji: 'Hitori de byouin he koraremasu ka?',
        translation: 'Apakah kamu bisa datang ke rumah sakit sendirian?'
      }
    ],
    relatedPatterns: [],
    tags: ['ability', 'conjugation', 'potential']
  },
  {
    id: 'n4-004',
    level: 'N4',
    pattern: '〜ながら',
    reading: 'nagara',
    meaning: 'Sambil (melakukan dua tindakan secara bersamaan).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa subjek melakukan tindakan utama (di bagian akhir) sambil melakukan tindakan sekunder (di bagian depan).',
    structure: 'Kata Kerja (Bentuk Masu tanpa masu) + ながら',
    notes: 'Tindakan yang paling ditekankan adalah tindakan yang berada setelah partikel ながら.',
    examples: [
      {
        japanese: '音楽を聞きながら宿題をします。',
        furigana: '音楽[おんがく]を 聞[き]きながら 宿題[しゅくだい]をします。',
        romaji: 'Ongaku wo kikinagara shukudai wo shimasu.',
        translation: 'Saya mengerjakan PR sambil mendengarkan musik.'
      },
      {
        japanese: '歩きながらスマホを見ないでください。',
        furigana: '歩[ある]きながらスマホを 見[mi]ないでください。',
        romaji: 'Arukinagara sumaho wo minaide kudasai.',
        translation: 'Tolong jangan melihat ponsel sambil berjalan.'
      }
    ],
    relatedPatterns: [],
    tags: ['simultaneous', 'masu-stem', 'temporal']
  }
];

const additionalData = [
  {
    id: 'n4-005',
    level: 'N4',
    pattern: '〜ば (Conditional)',
    reading: 'ba',
    meaning: 'Jika... (Bentuk kondisional logis).',
    category: 'Conditional',
    jlptFunction: 'Menunjukkan prasyarat logis yang menghasilkan konsekuensi pasti.',
    structure: 'Kata Kerja (Grup 1: U-dan -> E-dan + ba, Grup 2: ru -> reba, Grup 3: suru -> sureba, kuru -> kureba)',
    notes: 'Pola ini murni logis dan objektif. Tidak bisa digunakan jika bagian akhir berupa keinginan atau perintah personal pembicara.',
    examples: [
      {
        japanese: '安ければ、それを買います。',
        furigana: '安[やす]ければ、それを 買[か]います。',
        romaji: 'Yasukereba, sore wo kaimasu.',
        translation: 'Jika murah, saya akan membelinya.'
      },
      {
        japanese: '毎日練習すれば、上手になりますよ。',
        furigana: '毎日[まいにち] 練習[れんしゅう]すれば、 上手[じょうず]になりますよ。',
        romaji: 'Mainichi renshuu sureba, jouzu ni narimasu yo.',
        translation: 'Jika berlatih setiap hari, kamu pasti akan menjadi mahir lho.'
      }
    ],
    relatedPatterns: ['n4-001', 'n4-006'],
    tags: ['conditional', 'conjugation']
  },
  {
    id: 'n4-006',
    level: 'N4',
    pattern: '〜なら',
    reading: 'nara',
    meaning: 'Kalau... / Jika berbicara tentang... (pengandaian berdasarkan konteks informasi).',
    category: 'Conditional',
    jlptFunction: 'Mengambil informasi yang baru didengar dari lawan bicara sebagai asumsi untuk memberikan saran atau pendapat.',
    structure: '[Kata Benda / Kata Kerja Bentuk Kamus] + なら',
    notes: 'Sangat praktis untuk membatasi topik pembicaraan ("Kalau urusan A, maka sebaiknya B").',
    examples: [
      {
        japanese: '日本へ行きたいなら、この本を読んだほうがいいです。',
        furigana: '日本[にほん]へ 行[い]きたいなら、この 本[ほん]を 読[よ]んだほうがいいです。',
        romaji: 'Nihon e ikitai nara, kono hon wo yonda hou ga ii desu.',
        translation: 'Kalau kamu ingin pergi ke Jepang, sebaiknya baca buku ini.'
      },
      {
        japanese: 'ひらがななら、すぐに書けますよ。',
        furigana: 'ひらがななら、すぐに 書[か]けますよ。',
        romaji: 'Hiragana nara, sugu ni kakemasu yo.',
        translation: 'Kalau cuma hiragana, saya bisa langsung menulisnya lho.'
      }
    ],
    relatedPatterns: ['n4-001', 'n4-005'],
    tags: ['conditional', 'context', 'basics']
  },
  {
    id: 'n4-007',
    level: 'N4',
    pattern: '〜てしまう',
    reading: 'te shimau',
    meaning: 'Selesai sepenuhnya / Terlanjur (tindakan yang disesali).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menyatakan bahwa suatu aktivitas telah selesai secara tuntas, atau mengekspresikan penyesalan atas kejadian yang tidak sengaja terjadi.',
    structure: 'Kata Kerja (Bentuk -te) + しまう / しまいました',
    notes: 'Dalam percakapan kasual, sering disingkat menjadi 〜ちゃう (chau) atau 〜じゃう (jau).',
    examples: [
      {
        japanese: '宿題を全部やってしまいました。',
        furigana: '宿題[しゅくだい]を 全部[ぜんぶ]やってしまいました。',
        romaji: 'Shukudai wo zenbu yatte shimaimashita.',
        translation: 'Saya telah menyelesaikan seluruh pekerjaan rumah sampai tuntas.'
      },
      {
        japanese: '電車のなかに傘を忘れてしまいました。',
        furigana: '電車[でんしゃ]のなかに 傘[かさ]を 忘れ[わす]れてしまいました。',
        romaji: 'Densha no naka ni kasa wo wasurete shimaimashita.',
        translation: 'Saya terlanjur meninggalkan payung saya di dalam kereta.'
      }
    ],
    relatedPatterns: [],
    tags: ['regret', 'completed', 'te-form']
  },
  {
    id: 'n4-008',
    level: 'N4',
    pattern: '〜ておく',
    reading: 'te oku',
    meaning: 'Mempersiapkan... terlebih dahulu / Melakukan tindakan antisipasi.',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Melakukan tindakan persiapan demi kelancaran agenda berikutnya, atau membiarkan kondisi barang tetap seperti semula.',
    structure: 'Kata Kerja (Bentuk -te) + おく / おきます',
    notes: 'Dalam obrolan kasual, te oku disingkat menjadi toku. Contoh: 買っておく -> 買っとく.',
    examples: [
      {
        japanese: '友達が来る前に、部屋を掃除しておきます。',
        furigana: '友達[ともだち]が 来[く]る 前[まえ]に、 部屋[へや]を 掃除[そうじ]しておきます。',
        romaji: 'Tomodachi ga kuru mae ni, heya wo souji shite okimasu.',
        translation: 'Sebelum teman datang, saya akan membersihkan kamar terlebih dahulu.'
      },
      {
        japanese: '旅行のために、チケットを買っておきました。',
        furigana: '旅行[りょこう]のために、チケットを 買[か]っておきました。',
        romaji: 'Ryokou no tame ni, chiketto wo katte okimashia.',
        translation: 'Demi keperluan tamasya, saya sudah membeli tiket terlebih dahulu.'
      }
    ],
    relatedPatterns: ['n4-009'],
    tags: ['preparation', 'anticipation', 'te-form']
  },
  {
    id: 'n4-009',
    level: 'N4',
    pattern: '〜てある',
    reading: 'te aru',
    meaning: 'Telah dipersiapkan... (kondisi benda hasil tindakan seseorang).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menjelaskan kondisi benda pasif yang sengaja diubah oleh seseorang untuk tujuan persiapan, dan efeknya masih bertahan.',
    structure: '[Kata Benda] が + Kata Kerja Transitif (Bentuk -te) + ある / あります',
    notes: 'Hanya berpasangan dengan kata kerja transitif (transitive verbs). Berbeda dengan 〜ている (state), 〜てある menekankan adanya motif/tujuan persiapan.',
    examples: [
      {
        japanese: '壁にカレンダーが掛けてあります。',
        furigana: '壁[かべ]に カレンダーが 掛[か]けてあります。',
        romaji: 'Kabe ni karendaai ga kakete arimasu.',
        translation: 'Di dinding telah digantungkan kalender (sengaja dipasang).'
      },
      {
        japanese: '机の上に料理が準備してあります。',
        furigana: '机[つくえ]の 上[うえ]に 料理[りょうり]が 準備[じゅんび]してあります。',
        romaji: 'Tsukue no ue ni ryouri ga junbi shite arimasu.',
        translation: 'Di atas meja, makanan telah dipersiapkan (sengaja dihidangkan).'
      }
    ],
    relatedPatterns: ['n4-008'],
    tags: ['state', 'preparation', 'te-form']
  },
  {
    id: 'n4-010',
    level: 'N4',
    pattern: '〜てみる',
    reading: 'te miru',
    meaning: 'Mencoba melakukan... (uji coba pengalaman baru).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menyatakan tindakan yang dikerjakan sekadar untuk mengetahui hasil atau kesannya.',
    structure: 'Kata Kerja (Bentuk -te) + みる / みます',
    notes: 'Kata みる (miru) di sini selalu ditulis dengan hiragana biasa (jangan memakai kanji 見る).',
    examples: [
      {
        japanese: '日本の寿司を食べてみたいです。',
        furigana: '日本[にほん]の 寿司[すし]を 食[た]べてみたいです。',
        romaji: 'Nihon no sushi wo tabete mitai desu.',
        translation: 'Saya ingin mencoba menyantap sushi khas Jepang.'
      },
      {
        japanese: 'この新しい薬を使ってみました。',
        furigana: 'この 新[あたら]しい 薬[くすり]を 使[つか]ってみました。',
        romaji: 'Kono atarashii kusuri wo tsukatte mimashia.',
        translation: 'Saya sudah mencoba menggunakan obat baru ini.'
      }
    ],
    relatedPatterns: [],
    tags: ['try', 'experience', 'te-form']
  },
  {
    id: 'n4-011',
    level: 'N4',
    pattern: '〜やすい',
    reading: 'yasui',
    meaning: 'Mudah untuk dilakukan... (karakteristik positif).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan bahwa pengerjaan suatu aksi fisik atau kognitif cenderung mudah dikerjakan.',
    structure: 'Kata Kerja (Stem Masu) + やすい (です)',
    notes: 'Hasil konjugasi berubah kelas menjadi kata Sifat-i (i-adjective).',
    examples: [
      {
        japanese: 'この教科書は説明がわかりやすいです。',
        furigana: 'この 教科書[きょうかしょ]は 説明[せつめい]がわかりやすいです。',
        romaji: 'Kono kyoukasho wa setsumei ga wakariyasui desu.',
        translation: 'Buku pelajaran ini penjelasannya mudah dipahami.'
      },
      {
        japanese: 'この靴は軽くて、とても歩きやすいです。',
        furigana: 'この 靴[くつ]は 軽く[かる]て、totemo 歩[ある]きやすいです。',
        romaji: 'Kono kutsu wa karukte, totemo arukiyasui desu.',
        translation: 'Sepatu ini ringan dan sangat mudah digunakan untuk berjalan.'
      }
    ],
    relatedPatterns: ['n4-012'],
    tags: ['easy', 'suffix', 'adjectives']
  },
  {
    id: 'n4-012',
    level: 'N4',
    pattern: '〜にくい',
    reading: 'nikui',
    meaning: 'Sulit untuk dilakukan... (karakteristik negatif).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan bahwa pengerjaan suatu aksi terasa sukar atau menghambat kelancaran.',
    structure: 'Kata Kerja (Stem Masu) + にくい (es)',
    notes: 'Kebalikan langsung dari 〜やすい (yasui). Hasil konjugasi berupa kata Sifat-i.',
    examples: [
      {
        japanese: 'このペンはインクが出なくて書きにくいです。',
        furigana: 'この ペンは インクが 出[で]なくて 書き[か]きにくいです。',
        romaji: 'Kono pen wa inku ga denakte kakinikui desu.',
        translation: 'Pena ini tintanya tidak keluar sehingga sulit digunakan untuk menulis.'
      },
      {
        japanese: 'あの先生の発音は聞き取りにくいです。',
        furigana: 'あの 先生[せんせい]の 発音[はつおん]は 聞[き]き取り[と]りにくいです。',
        romaji: 'Ano sensei no hatsuon wa kikitorinikui desu.',
        translation: 'Pelafalan guru itu sukar didengar dengan jelas.'
      }
    ],
    relatedPatterns: ['n4-011'],
    tags: ['difficult', 'suffix', 'adjectives']
  },
  {
    id: 'n4-013',
    level: 'N4',
    pattern: '〜すぎる',
    reading: 'sugiru',
    meaning: 'Terlalu... / Kelewat batas wajar.',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menunjukkan kuantitas aksi atau kadar keadaan sifat yang melampaui batas kewajaran.',
    structure: 'Kata Kerja (Stem Masu) / Kata Sifat (tanpa i/na) + すぎる',
    notes: 'Berkonjugasi sebagai kata kerja Golongan 2 (Ru-verbs). Contoh: 飲みすぎる (terlalu banyak minum).',
    examples: [
      {
        japanese: '昨日は宿題が多すぎて、疲れてしまいました。',
        furigana: '昨日[きのう]は 宿題[しゅくだい]が 多[おお]すぎて、 疲れ[つか]れてしまいました。',
        romaji: 'Kinou wa shukudai ga oosugite, tsukarete shimaimashita.',
        translation: 'Kemarin tugas PR terlalu banyak, saya menjadi sangat lelah.'
      },
      {
        japanese: 'お酒を飲みすぎないようにしてください。',
        furigana: 'お 酒[さけ]を 飲み[の]みすぎないようにしてください。',
        romaji: 'Osake wo nomisuginai you ni shite kudasai.',
        translation: 'Berusahalah untuk tidak meminum sake terlalu berlebihan.'
      }
    ],
    relatedPatterns: [],
    tags: ['excessive', 'suffix', 'verbs']
  },
  {
    id: 'n4-014',
    level: 'N4',
    pattern: '〜そうだ (Katanya / Hearsay)',
    reading: 'sou da (hearsay)',
    meaning: 'Katanya... / Kabarnya... (menyampaikan informasi rumor/laporan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengutip informasi yang diperoleh dari sumber luar (berita, rumor, atau ucapan orang lain) secara formal.',
    structure: '[Kata Benda / Kata Sifat / Kata Kerja (Bentuk Biasa/Plain)] + そうです',
    notes: 'Sifat-na & kata benda memakai だ sebelum そうです (e.g. 元気だそうです). Sangat berbeda konjugasinya dengan そう (tampaknya/kelihatannya).',
    examples: [
      {
        japanese: '天気予報によると、明日は雪が降るそうです。',
        furigana: '天気[てんき]予報[よほう]によると、 明日[あした]は 雪[ゆき]が 降[ふ]るそうです。',
        romaji: 'Tenki yohou ni yoru to, ashita wa yuki ga furu sou desu.',
        translation: 'Menurut ramalan cuaca, kabarnya besok salju akan turun.'
      },
      {
        japanese: '木村さんは日本語が上手だそうです。',
        furigana: '木村[きむら]さんは 日本語[にほんご]が 上手[じょうず]だそうです。',
        romaji: 'Kimura-san wa nihongo ga jouzu da sou desu.',
        translation: 'Katanya Tuan Kimura mahir berbahasa Jepang.'
      }
    ],
    relatedPatterns: ['n4-015', 'n4-078'],
    tags: ['hearsay', 'rumor', 'expression']
  },
  {
    id: 'n4-015',
    level: 'N4',
    pattern: '〜そうだ (Kelihatannya / Tampaknya)',
    reading: 'sou da (conjecture)',
    meaning: 'Kelihatannya... / Tampaknya... (dugaan visual sekilas).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengutarakan dugaan pembicara setelah mengamati wujud luar dari objek secara visual.',
    structure: 'Kata Sifat-i (tanpa -i) / Kata Sifat-na (tanpa -na) / Kata Kerja (Stem Masu) + そうです',
    notes: 'Kecualian: kata Sifat ii (bagus) menjadi よさそうです. Bentuk negatifnya adalah そうにない.',
    examples: [
      {
        japanese: 'この料理は辛そうですね。',
        furigana: 'この 料理[りょうり]は 辛[から]そうですね。',
        romaji: 'Kono ryouri wa karasou desu ne.',
        translation: 'Makanan ini kelihatannya pedas ya.'
      },
      {
        japanese: '雨が降りそうな空ですね。',
        furigana: '雨[あめ]が 降り[ふ]りそうな 空[そら]ですね。',
        romaji: 'Ame ga furisouna sora desu ne.',
        translation: 'Langitnya mendung tampak seperti akan turun hujan ya.'
      }
    ],
    relatedPatterns: ['n4-014', 'n4-077'],
    tags: ['conjecture', 'visual', 'adjectives']
  },
  {
    id: 'n4-016',
    level: 'N4',
    pattern: '〜かもしれない',
    reading: 'kamo shirenai',
    meaning: 'Mungkin saja... / Bisa jadi... (kemungkinan sedang/kecil).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Menyatakan perkiraan tingkat probabilitas sekitar 50% atau kurang bahwa suatu kondisi/aksi mungkin benar.',
    structure: '[Kata Benda / Kata Sifat / Kata Kerja (Bentuk Biasa/Plain)] + かもしれない',
    notes: 'Sifat-na & kata benda langsung berpasangan tanpa tambahan だ. Bentuk sopannya adalah かもしれません (kamo shiremasen).',
    examples: [
      {
        japanese: '明日は雨が降るかもしれません。',
        furigana: '明日[あした]は 雨[あめ]が 降[ふ]るかもしれません。',
        romaji: 'Ashita wa ame ga furu kamo shiremasen.',
        translation: 'Besok mungkin saja hujan akan turun.'
      },
      {
        japanese: '彼はもう家に帰ったかもしれません。',
        furigana: '彼[かれ]はもう 家[うち]へ 帰[かえ]ったかもしれません。',
        romaji: 'Kare wa mou uchi e kaetta kamo shiremasen.',
        translation: 'Bisa jadi dia sudah pulang ke rumah.'
      }
    ],
    relatedPatterns: ['n5-030'],
    tags: ['probability', 'conjecture', 'basics']
  },
  {
    id: 'n4-017',
    level: 'N4',
    pattern: '〜はずです / 〜はずだ',
    reading: 'hazu desu',
    meaning: 'Seharusnya... / Pasti... (keyakinan berdasarkan alasan logis).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan keyakinan kuat pembicara (sekitar 90%) atas dasar alasan rasional, bukti nyata, atau teori pendukung.',
    structure: 'Kata Kerja & Sifat-i (Bentuk Biasa) / Sifat-na + な / Kata Benda + の + はずです',
    notes: 'Untuk penyangkalan kuat gunakan 〜はずがありません (tidak mungkin...).',
    examples: [
      {
        japanese: '木村さんは十年間日本に住んでいましたから、日本語が上手なはずです。',
        furigana: '木村[きむら]さんは 十年間[じゅうねんかん] 日本[にほん]に 住[す]んでいましたから、日本語が 上手[じょうず]なはずです。',
        romaji: 'Kimura-san wa juunenkan nihon ni sunde imashia kara, nihongo ga jouzu na hazu desu.',
        translation: 'Tuan Kimura tinggal di Jepang selama sepuluh tahun, jadi dia seharusnya mahir berbahasa Jepang.'
      },
      {
        japanese: '荷物は今日届くはずですよ。',
        furigana: '荷物[にもつ]は 今日[きょう] 届[と]どくはずですよ。',
        romaji: 'Nimotsu wa kyou todoku hazu desu yo.',
        translation: 'Barang kiriman tersebut seharusnya tiba hari ini lho.'
      }
    ],
    relatedPatterns: ['n4-050'],
    tags: ['expectation', 'probability', 'logic']
  },
  {
    id: 'n4-018',
    level: 'N4',
    pattern: '〜つもりです',
    reading: 'tsumori desu',
    meaning: 'Berniat... / Berencana untuk... (niat personal bulat).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengutarakan niat aktif pribadi yang telah disiapkan matang di dalam pikiran untuk direalisasikan.',
    structure: 'Kata Kerja (Bentuk Kamus / Bentuk -nai) + つもりです',
    notes: 'N5 memperkenalkan dasar, di N4 polanya diekspansi untuk konjugasi rencana rumit dengan teman atau kerabat.',
    examples: [
      {
        japanese: '大学を卒業したあとで、日本の企業で働くつもりです。',
        furigana: '大学[だいがく]を 卒業[そつぎょう]したあとで、日本[にほん]の 企業[きぎょう]で 働く[はたら]くつもりです。',
        romaji: 'Daigaku wo sotsugyou shita ato de, nihon no kigyou de hataraku tsumori desu.',
        translation: 'Setelah lulus kuliah, saya berniat bekerja di perusahaan Jepang.'
      },
      {
        japanese: '将来、お酒を飲まないつもりです。',
        furigana: '将来[しょうらい]、お 酒[さけ]を 飲[の]まないつもりです。',
        romaji: 'Shourai, osake wo nomanai tsumori desu.',
        translation: 'Di masa depan, saya berniat untuk tidak meminum sake.'
      }
    ],
    relatedPatterns: ['n4-019'],
    tags: ['intention', 'plan', 'basics']
  },
  {
    id: 'n4-019',
    level: 'N4',
    pattern: '〜よていです',
    reading: 'yotei desu',
    meaning: 'Dijadwalkan untuk... / Rencananya bakal...',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan rencana formal terjadwal resmi yang pasti dijalankan karena melibatkan kesepakatan dengan pihak luar.',
    structure: 'Kata Kerja (Bentuk Kamus) / Kata Benda + の + 予定です',
    notes: 'Wajib dipasangkan dengan kata benda menggunakan partikel の (e.g. 出張の予定 - Jadwal dinas kerja).',
    examples: [
      {
        japanese: '来週の月曜日に新しいプロジェクトが始まる予定です。',
        furigana: '来週[らいしゅう]の 月曜日[げつようび]に 新[あたら]しい プロジェクトが 始まる[はじ]まる 予定[よてい]です。',
        romaji: 'Raishuu no getsuyoubi ni atarashii purojekto ga hajimaru yotei desu.',
        translation: 'Hari Senin minggu depan, proyek baru dijadwalkan akan dimulai.'
      },
      {
        japanese: '明日は九時から会議の予定です。',
        furigana: '明日[あした]は 九時[くじ]から 会議[かいぎ]の 予定[よてい]です。',
        romaji: 'Ashita wa kuji kara kaigi no yotei desu.',
        translation: 'Besok ada jadwal rapat mulai jam sembilan.'
      }
    ],
    relatedPatterns: ['n4-018'],
    tags: ['schedule', 'plan', 'basics']
  },
  {
    id: 'n4-020',
    level: 'N4',
    pattern: '〜ために (Sebab / Alasan)',
    reading: 'tame ni (cause)',
    meaning: 'Karena... / Akibat dari... (alasan objektif/kemalangan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menjelaskan alasan objektif terjadinya kemalangan, bencana, atau situasi buruk yang tidak dikehendaki.',
    structure: 'Kata Kerja & Sifat-i (Bentuk Biasa) / Sifat-na + な / Kata Benda + の + ために',
    notes: 'Hindari penggunaannya jika klausa akhir memuat kalimat perintah/ajakan. Sangat sering dipakai pada siaran berita/pengumuman resmi.',
    examples: [
      {
        japanese: '大雨のために、電車が遅れてしまいました。',
        furigana: '大雨[おおあめ]のために、 電車[でんしゃ]が 遅[おく]れてしまいました。',
        romaji: 'Ooame no tame ni, densha ga okurete shimaimashita.',
        translation: 'Akibat hujan lebat, kereta api terlanjur mengalami keterlambatan.'
      },
      {
        japanese: '台風が来たために、学校が休みになりました。',
        furigana: '台風[たいふう]が 来[き]たために、 学校[gあっこう]が 休み[やす]みになりました。',
        romaji: 'Taifuugi ga kita tame ni, gakkou ga yasumi ni narimashita.',
        translation: 'Karena datang angin topan, sekolah diliburkan.'
      }
    ],
    relatedPatterns: ['n4-046'],
    tags: ['cause', 'reason', 'polite']
  },
  {
    id: 'n4-021',
    level: 'N4',
    pattern: '〜ように (Tujuan / Agar)',
    reading: 'you ni (purpose)',
    meaning: 'Agar... / Supaya... (tujuan dengan subjek pasif/non-kehendak).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan maksud tujuan agar suatu kondisi ideal terwujud. Klausa depan dipasangkan dengan kata kerja non-aktif atau bentuk potensial.',
    structure: 'Kata Kerja (Bentuk Kamus Non-aktif / Bentuk Potensial / Bentuk -nai) + ように',
    notes: 'Sangat berbeda dengan ために yang menuntut tindakan aktif bersubjek kehendak manusia.',
    examples: [
      {
        japanese: '後ろの人にも聞こえるように、大きな声で話してください。',
        furigana: '後ろ[うし]の 人[ひと]にも 聞[き]こえるように、 大き[おお]な 声[こえ]で 話[は]なしてください。',
        romaji: 'Ushiro no hito ni mo kikoeru you ni, ookina koe de hanashite kudasai.',
        translation: 'Tolong berbicara dengan suara lantang agar orang yang di belakang juga dapat mendengar.'
      },
      {
        japanese: '日本語の漢字を忘れないように、毎日練習しています。',
        furigana: '日本語[にほんご]の 漢字[かんじ]を 忘れ[わす]れないように、毎日 練習[れんしゅう]しています。',
        romaji: 'Nihongo no kanji wo wasurenai you ni, mainichi renshuu shite imasu.',
        translation: 'Saya berlatih setiap hari supaya tidak melupakan kanji bahasa Jepang.'
      }
    ],
    relatedPatterns: ['n4-020', 'n4-022'],
    tags: ['purpose', 'potential', 'basics']
  },
  {
    id: 'n4-022',
    level: 'N4',
    pattern: '〜ようになる',
    reading: 'you ni naru',
    meaning: 'Menjadi bisa... / Mulai terbiasa... (perubahan kapabilitas).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengindikasikan proses transisi kemampuan dari tidak bisa menjadi sanggup melakukan sesuatu, atau terbentuknya kebiasaan baru.',
    structure: 'Kata Kerja (Bentuk Kamus Potensial / Bentuk Kamus Biasa) + ように＋なる / なりました',
    notes: 'Sering dipasangkan dengan kata kerja bentuk potensial (e.g. 話せるようになる - Menjadi bisa berbicara).',
    examples: [
      {
        japanese: '毎日練習しましたから、日本語で手紙が書けるようになりました。',
        furigana: '毎日[まいにち] 練習[れんしゅう]しましたから、日本語で 手紙[てがみ]が 書[か]けるようになりました。',
        romaji: 'Mainichi renshuu shimashia kara, nihongo de tegami ga kakeru you ni narimashia.',
        translation: 'Karena rajin berlatih setiap hari, saya sekarang telah menjadi bisa menulis surat dalam bahasa Jepang.'
      },
      {
        japanese: '最近、朝早く起きられるようになりました。',
        furigana: '最近[さいきん]、 朝[あさ] 早く[はや]く 起[お]きられるようになりました。',
        romaji: 'Saikin, asa hayaku okirareru you ni narimashia.',
        translation: 'Belakangan ini, saya sudah mulai terbiasa bangun pagi.'
      }
    ],
    relatedPatterns: ['n4-021', 'n4-002'],
    tags: ['change', 'ability', 'verbs']
  },
  {
    id: 'n4-023',
    level: 'N4',
    pattern: '〜ように言う',
    reading: 'you ni iu',
    meaning: 'Menyampaikan agar... / Menyuruh untuk... (perintah tidak langsung).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyampaikan pesan amanat instruktif/perintah dari pihak ketiga secara tidak langsung.',
    structure: 'Kata Kerja (Bentuk Kamus / Bentuk -nai) + ように + [言う / 伝える / 注意する]',
    notes: 'Sangat praktis untuk menirukan amanat larangan halus atau perintah dari atasan.',
    examples: [
      {
        japanese: '先生は明日遅れないように言いました。',
        furigana: '先生[せんせい]は 明日[あした] 遅[おく]れないように 言[い]いました。',
        romaji: 'Sensei wa ashita okurenai you ni iimashia.',
        translation: 'Guru menyampaikan agar kita tidak terlambat besok.'
      },
      {
        japanese: '社長に会議の資料を準備するように言われました。',
        furigana: '社長[しゃちょう]に 会議[かいぎ]の 資料[しりょう]を 準備[じゅんび]するように 言[い]われました。',
        romaji: 'Shachou ni kaigi no shiryou wo junbi suru you ni iwaremashia.',
        translation: 'Saya disuruh oleh direktur untuk mempersiapkan berkas rapat.'
      }
    ],
    relatedPatterns: ['n5-057'],
    tags: ['indirect-command', 'speech', 'verbs']
  },
  {
    id: 'n4-024',
    level: 'N4',
    pattern: '〜し',
    reading: 'shi',
    meaning: 'Dan lagi... / Di samping itu... (menggabungkan beberapa alasan/keadaan).',
    category: 'Kata Sambung',
    jlptFunction: 'Mendaftarkan representasi dari sekian banyak alasan yang saling mendukung untuk melahirkan satu kesimpulan final.',
    structure: '[Bentuk Biasa (Plain)] + し、 [Predikat Akhir]',
    notes: 'Kata benda dan sifat-na wajib ditempeli だ sebelum し (e.g. 親切だし).',
    examples: [
      {
        japanese: 'この店は料理もおいしいし、値段も安いから、いつも客が多いです。',
        furigana: 'この 店[みせ]は 料理[りょうり]もおいしいし、 値段[ねだん]も 安[やす]いから、いつも 客[きゃく]が 多い[おお]いです。',
        romaji: 'Kono mise wa ryouri mo oishii shi, nedan mo yasui kara, itsumo kyaku ga ooi desu.',
        translation: 'Di toko ini makanannya lezat, harganya pun murah, makanya pelanggannya selalu melimpah.'
      },
      {
        japanese: '今日は雨も降っているし、頭も痛いから、外へ出かけません。',
        furigana: '今日[きょう]は 雨[あめ]も 降[ふ]っているし、 頭[あたま]も 痛[いた]いから、 外[そと]へ出かけません。',
        romaji: 'Kyou wa ame mo futte iru shi, atama mo itai kara, soto e dekakemasen.',
        translation: 'Hari ini di samping hujan turun, kepala saya juga pusing, makanya saya tidak pergi keluar.'
      }
    ],
    relatedPatterns: [],
    tags: ['reason', 'list', 'conjunction']
  },
  {
    id: 'n4-025',
    level: 'N4',
    pattern: '〜のに (Meskipun)',
    reading: 'noni',
    meaning: 'Padahal... / Meskipun... (mengekspresikan rasa kecewa/keheranan).',
    category: 'Kata Sambung',
    jlptFunction: 'Menyambungkan klausa sebab dengan klausa akibat yang isinya saling bertentangan secara tidak wajar/mengherankan.',
    structure: '[Kata Kerja / Kata Sifat (Bentuk Biasa)] + のに / [Kata Benda & Sifat-na] + な + のに',
    notes: 'Mengandung muansa emosi penyesalan, kejengkelan, kekecewaan, atau rasa heran pembicara atas realita.',
    examples: [
      {
        japanese: '毎日一生懸命勉強したのに、試験に落ちてしまいました。',
        furigana: '毎日[まいにち] 一生懸命[いっしょうけんめい] 勉強[べんきょう]したのに、 試験[しけん]に 落ち[お]ちてしまいました。',
        romaji: 'Mainichi isshoukenmei benkyou shita noni, shiken ni ochite shimaimashita.',
        translation: 'Padahal sudah belajar mati-matian setiap hari, namun saya terlanjur gagal dalam ujian.'
      },
      {
        japanese: '今日は日曜日なのに、仕事をしなければなりません。',
        furigana: '今日[きょう]は 日曜日[にちようび]なのに、 仕事[しごと]をしなければなりません。',
        romaji: 'Kyou wa nichiyoubi na noni, shigoto wo shinakereba narimasen.',
        translation: 'Meskipun hari ini hari Minggu, saya tetap wajib bekerja.'
      }
    ],
    relatedPatterns: ['n5-023', 'n5-071'],
    tags: ['contrast', 'emotion', 'conjunction']
  },
  {
    id: 'n4-026',
    level: 'N4',
    pattern: '〜ばあいは',
    reading: 'baai wa',
    meaning: 'Dalam kasus... / Seandainya... / Jika terjadi situasi...',
    category: 'Conditional',
    jlptFunction: 'Menyatakan prasyarat penanganan khusus seandainya terjadi kasus darurat, kendala teknis, atau wujud situasi tertentu.',
    structure: 'Kata Kerja & Sifat-i (Bentuk Biasa) / Sifat-na + な / Kata Benda + の + 場合は',
    notes: 'Sangat sering dijumpai pada instruksi manual, penanganan darurat kecelakaan, atau asuransi.',
    examples: [
      {
        japanese: 'もし火事の場合は、すぐに非常口から逃げてください。',
        furigana: 'もし 火事[かじ]の場合は、すぐに 非常[ひじょう]口[ぐち]から 逃げ[に]げてください。',
        romaji: 'Moshi kaji no baai wa, sugu ni hijou guchi kara nigete kudasai.',
        translation: 'Seandainya terjadi kebakaran, tolong segera selamatkan diri melalui pintu darurat.'
      },
      {
        japanese: 'パスポートを紛失した場合は、警察署へ行ってください。',
        furigana: 'パスポートを 紛失[ふんしつ]した場合は、 警察[けいさつ]署[しょ]へ 行[い]ってください。',
        romaji: 'Pasupooto wo funshitsu shita baai wa, keisatsusho e itte kudasai.',
        translation: 'Dalam kasus kehilangan paspor, silakan datangi kantor polisi.'
      }
    ],
    relatedPatterns: ['n4-001'],
    tags: ['conditional', 'instruction', 'basics']
  },
  {
    id: 'n4-027',
    level: 'N4',
    pattern: '〜ところです / 〜ところ',
    reading: 'tokoro desu',
    meaning: 'Baru saja... / Sedang... / Nyaris akan... (keterangan aspek ketepatan waktu).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menunjukkan presisi ketepatan waktu keberlangsungan sebuah aksi yang dibagi menjadi tiga fase khusus.',
    structure: 'Kata Kerja (Bentuk Kamus = Baru akan, Bentuk -te iru = Sedang, Bentuk Lampau -ta = Baru saja selesai) + ところです',
    notes: 'Sangat berguna untuk melukiskan ketepatan fase pengerjaan aksi.',
    examples: [
      {
        japanese: '今ちょうどご飯を食べているところです。後で電話しますね。',
        furigana: '今[いま]ちょうど ご飯[ごはん]を 食べ[た]べているところです。後[あと]で 電話[でんわ]しますね。',
        romaji: 'Ima choudo gohan wo tabete iru tokoro desu. Ato de denwa shimasu ne.',
        translation: 'Saat ini saya kebetulan sedang berada di tengah-tengah menyantap makan. Nanti saya telepon balik ya.'
      },
      {
        japanese: '電車は今出発したところです。間に合いませんでした。',
        furigana: '電車[でんしゃ]は今 出発[しゅっぱつ]したところです。 間に合い[まにあ]いませんでした。',
        romaji: 'Densha wa ima shuppatsu shita tokoro desu. Maniai masen deshita.',
        translation: 'Kereta apinya baru saja persis berangkat. Saya tidak berhasil mengejarnya.'
      }
    ],
    relatedPatterns: ['n4-029'],
    tags: ['time', 'aspect', 'verbs']
  },
  {
    id: 'n4-028',
    level: 'N4',
    pattern: '〜ばかり',
    reading: 'bakari',
    meaning: 'Hanya... / Terus-menerus... (melakukan satu hal melulu).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan batasan ekstrem di mana subjek hanya berkutat melakukan aksi tunggal atau mengonsumsi barang sejenis melulu.',
    structure: '[Kata Benda] + ばかり + Kata Kerja / Kata Kerja (Bentuk -te) + ばかり いる',
    notes: 'Mengandung kritik halus atau kejengkelan pembicara terhadap perilaku melulu subjek tersebut.',
    examples: [
      {
        japanese: '弟は毎日ゲームばかりしていますよ。',
        furigana: '弟[おとうと]は毎日 ゲームばかりしていますよ。',
        romaji: 'Otouto wa mainichi geemu bakari shite imasu yo.',
        translation: 'Adik laki-laki saya setiap hari hanya bermain game melulu lho.'
      },
      {
        japanese: '肉ばかり食べないで、野菜も食べてください。',
        furigana: '肉[にく]ばかり 食べ[た]べないで、 野菜[やさい]も 食べ[た]べてください。',
        romaji: 'Niku bakari tabenaide, yasai mo tabete kudasai.',
        translation: 'Jangan makan daging melulu, santap sayurannya juga.'
      }
    ],
    relatedPatterns: ['n5-036', 'n4-029'],
    tags: ['limitation', 'criticism', 'basics']
  },
  {
    id: 'n4-029',
    level: 'N4',
    pattern: '〜たばかり',
    reading: 'ta bakari',
    meaning: 'Baru saja selesai... (berdasarkan perasaan subjektif pembicara).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa suatu perbuatan baru selesai dilakukan, meskipun waktu aktualnya mungkin sudah agak lama berlalu.',
    structure: 'Kata Kerja (Bentuk Lampau -ta) + ばかり (です)',
    notes: 'Berbeda dengan 〜たところ (tokoro) yang menuntut presisi objektif dalam hitungan detik/menit, 〜たばかり didasarkan atas perasaan subjektif.',
    examples: [
      {
        japanese: '日本に来たばかりですから、日本語がまだ下手です。',
        furigana: '日本[にほん]に 来[き]たばかりですから、日本語がまだ 下手[へた]です。',
        romaji: 'Nihon ni kita bakari desu kara, nihongo ga mada heta desu.',
        translation: 'Karena saya baru saja tiba di Jepang (misal: 1 minggu/bulan lalu), makanya saya belum mahir berbahasa Jepang.'
      },
      {
        japanese: 'このテレビは先週買ったばかりなのに、もう壊れました。',
        furigana: 'この テレビは 先週[せんしゅう] 買[か]ったばかりなのに、もう 壊れ[こわ]れました。',
        romaji: 'Kono terebi wa senshuu katta bakari na noni, mou kowaremashia.',
        translation: 'Meskipun TV ini baru saja dibeli minggu lalu, padahal kok sudah rusak.'
      }
    ],
    relatedPatterns: ['n4-027', 'n4-028'],
    tags: ['recent', 'temporal', 'ta-form']
  },
  {
    id: 'n4-030',
    level: 'N4',
    pattern: '〜がる',
    reading: 'garu',
    meaning: 'Tampak menunjukkan tanda... (ekspresi emosi orang ketiga).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengubah kata sifat emosi/keinginan diri sendiri menjadi bentuk kata kerja aktif untuk melukiskan perasaan orang ketiga.',
    structure: 'Kata Sifat-i (tanpa -i) / Kata Sifat-na (tanpa -na) / Kata Kerja (Bentuk -tai tanpa -i) + がる / がっている',
    notes: 'Orang Jepang sangat menghindari tebakan emosi langsung orang ketiga secara absolut, sehingga wajib memakai 〜がる.',
    examples: [
      {
        japanese: '犬が外へ行きたがっています。',
        furigana: '犬[いぬ]が 外[そと]へ 行[い]きたがっています。',
        romaji: 'Inu ga soto e ikitagatte imasu.',
        translation: 'Anjing itu tampak ingin sekali pergi keluar.'
      },
      {
        japanese: '子供は暗い部屋を怖がります。',
        furigana: '子供[こども]は 暗[くら]い 部屋[へや]を 怖[こわ]がります。',
        romaji: 'Kodomo wa kurai heya wo kowagarimasu.',
        translation: 'Anak-anak tampak menunjukkan ketakutan terhadap kamar yang gelap.'
      }
    ],
    relatedPatterns: ['n5-020', 'n5-052'],
    tags: ['feelings', 'third-person', 'adjectives']
  },
  {
    id: 'n4-031',
    level: 'N4',
    pattern: '〜受身形 (Bentuk Pasif - れる/られる)',
    reading: 'ukemi (passive)',
    meaning: 'Dikenai tindakan / Di-... (Bentuk Pasif).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Mengubah struktur kalimat di mana subjek menjadi sasaran penderita atas tindakan yang diluncurkan oleh pelaku.',
    structure: 'Grup 1 (U-dan -> A-dan + reru), Grup 2 (ru -> rareruu), Grup 3 (suru -> sareru, kuru -> korareru)',
    notes: 'Sering dipakai dalam bentuk "pasif merugi" (adversative passive) di mana pembicara merasa terganggu atas tindakan pelaku.',
    examples: [
      {
        japanese: '私はどろぼうに財布を盗まれました。',
        furigana: '私[わたし]は どろぼうに 財布[さいふ]を 盗[ぬす]まれました。',
        romaji: 'Watashi wa dorobou ni saifu wo nusumaremashia.',
        translation: 'Saya kecopetan dompet oleh pencuri (dompet saya dicuri).'
      },
      {
        japanese: 'このお寺は四百年に建てられました。',
        furigana: 'このお 寺[てら]は 四百年[よんひゃくねん]に 建て[た]てられました。',
        romaji: 'Kono otera wa yonhyakunen ni tateraremashia.',
        translation: 'Kuil ini didirikan pada 400 tahun yang lalu.'
      }
    ],
    relatedPatterns: ['n4-032'],
    tags: ['passive', 'conjugation', 'verbs']
  },
  {
    id: 'n4-032',
    level: 'N4',
    pattern: '〜使役形 (Bentuk Kausatif - せる/させる)',
    reading: 'shieki (causative)',
    meaning: 'Menyuruh melakukan... / Membiarkan melakukan... (Bentuk Kausatif).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menunjukkan instruksi perintah paksaan (menyuruh) atau pemberian izin kelonggaran (membiarkan) subjek melakukan tindakan.',
    structure: 'Grup 1 (U-dan -> A-dan + seru), Grup 2 (ru -> saseru), Grup 3 (suru -> saseru, kuru -> kosaseru)',
    notes: 'Dipadukan dengan partikel を untuk kata kerja intransitif, dan に untuk kata kerja transitif.',
    examples: [
      {
        japanese: 'お母さんは子供に野菜を食べさせました。',
        furigana: 'お 母[かあ]さんは 子供[こども]に 野菜[やさい]を 食べ[た]べさせました。',
        romaji: 'Okaa-san wa kodomo ni yasai wo tabesasemashia.',
        translation: 'Ibu menyuruh anaknya memakan sayur-sayuran.'
      },
      {
        japanese: '先生は学生を早く帰らせてくれました。',
        furigana: '先生[せんせい]は 学生[がくせい]を 早く[はや]く 帰[かえ]らせてくれました。',
        romaji: 'Sensei wa gakusei wo hayaku karaesete kuremashia.',
        translation: 'Guru membiarkan siswanya pulang lebih cepat.'
      }
    ],
    relatedPatterns: ['n4-031', 'n4-033'],
    tags: ['causative', 'conjugation', 'verbs']
  },
  {
    id: 'n4-033',
    level: 'N4',
    pattern: '〜使役受身形 (Kausatif-Pasif)',
    reading: 'shieki ukemi (causative-passive)',
    meaning: 'Terpaksa disuruh melakukan... (Bentuk Kausatif-Pasif).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Mengekspresikan kekesalan atau keluhan subjek karena dipaksa melakukan hal yang tidak disukai oleh pihak pelaku perintah.',
    structure: 'Grup 1 (U-dan -> A-dan + serareru / sされる), Grup 2 (ru -> saserareru), Grup 3 (suru -> saserareru, kuru -> kosaserareru)',
    notes: 'Sangat sering berkonjugasi singkat pada Grup 1 menjadi 〜される (e.g. 書かされる - Terpaksa disuruh menulis).',
    examples: [
      {
        japanese: '私は山田さんに二時間も待たされました。',
        furigana: '私[わたし]は 山田[やまだ]さんに 二時間[にじかん]も 待[ま]たされました。',
        romaji: 'Watashi wa Yamada-san ni nijikan mo matasaremashia.',
        translation: 'Saya terpaksa dibuat menunggu selama dua jam oleh Tuan Yamada.'
      },
      {
        japanese: '子供のとき,毎日親に牛乳を飲まされました。',
        furigana: '子供[こども]のとき,毎日 親[おや]に 牛乳[ぎゅうにゅう]を 飲[の]まされました。',
        romaji: 'Kodomo no toki, mainichi oya ni gyuunyuu wo nomasaremashia.',
        translation: 'Saat masih anak-anak, saya terpaksa disuruh minum susu setiap hari oleh orang tua.'
      }
    ],
    relatedPatterns: ['n4-031', 'n4-032'],
    tags: ['causative-passive', 'conjugation', 'verbs']
  },
  {
    id: 'n4-034',
    level: 'N4',
    pattern: '尊敬語 (Keigo Sonkeigo)',
    reading: 'sonkeigo (respectful)',
    meaning: 'Bahasa Sopan Penghormatan (menghormati aksi orang lain).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengubah predikat untuk mengagungkan tindakan atau keberadaan orang ketiga/atasan.',
    structure: 'Bentuk Pasif biasa ATAU お + Kata Kerja (Stem Masu) + になる / になります',
    notes: 'Kecualian khusus pada verba kehormatan absolut: 行く/来る/いる -> いらっしゃる, 言う -> おっしゃる.',
    examples: [
      {
        japanese: '社長はもうお帰りになりました。',
        furigana: '社長[しゃちょう]はもうお 帰り[かえ]になりました。',
        romaji: 'Shachou wa mou okaeri ni narimashia.',
        translation: 'Bapak Direktur sudah berkenan pulang.'
      },
      {
        japanese: '先生、何を召し上がりますか。',
        furigana: '先生[せんせい]、 何[なに]を 召[め]し上が[あ]りますか。',
        romaji: 'Sensei, nani wo meshiagarimasu ka.',
        translation: 'Bapak Guru, berkenan ingin menyantap hidangan apa?'
      }
    ],
    relatedPatterns: ['n4-035', 'n4-036'],
    tags: ['keigo', 'respectful', 'polite']
  },
  {
    id: 'n4-035',
    level: 'N4',
    pattern: '謙譲語 (Keigo Kenjougo)',
    reading: 'kenjougo (humble)',
    meaning: 'Bahasa Sopan Rendah Diri (merendahkan aksi diri sendiri).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Merendahkan derajat perilaku diri sendiri atau kelompok keluarga di hadapan lawan bicara sebagai wujud penghormatan tinggi.',
    structure: 'お/ご + Kata Kerja (Stem Masu) + する / いたします',
    notes: 'Kecualian verba rendah diri absolut: 行く/来る -> 参る (mairu), 言う -> 申す (mousu), 食べる/飲む -> いただく.',
    examples: [
      {
        japanese: '明日十時にそちらへ参ります。',
        furigana: '明日[あした] 十時[じゅうじ]にそちらへ 参[まい]ります。',
        romaji: 'Ashita juuji ni sochira e mairimasu.',
        translation: 'Besok jam sepuluh saya yang akan datang menghadap ke sana.'
      },
      {
        japanese: '荷物をお持ちしましょうか。',
        furigana: '荷物[にもつ]をお 持ち[も]しましょうか。',
        romaji: 'Nimotsu wo omochishiyou ka.',
        translation: 'Bagaimana kalau barang Anda saya bawakan?'
      }
    ],
    relatedPatterns: ['n4-034', 'n4-036'],
    tags: ['keigo', 'humble', 'polite']
  },
  {
    id: 'n4-036',
    level: 'N4',
    pattern: '丁寧語 (Keigo Teineigo)',
    reading: 'teineigo (polite)',
    meaning: 'Bahasa Sopan Standar / Estetis.',
    category: 'Pola Lanjutan',
    jlptFunction: 'Melembutkan tuturan estetika dengan memakai kata ganti khusus untuk benda mati di hadapan lawan bicara.',
    structure: 'お + Kata Benda (Jepang asli) / ご + Kata Benda (Sino-China) / です・ます',
    notes: 'Contoh: お茶 (ocha), ご連絡 (gorenraku).',
    examples: [
      {
        japanese: '美味しいお水をお持ちしました。',
        furigana: '美味しい[おい]しいお 水[mizu]をお 持ち[も]しました。',
        romaji: 'Oishii omizu wo omochishimashia.',
        translation: 'Saya telah membawakan air minum yang segar.'
      },
      {
        japanese: 'ご意見を聞かせてください。',
        furigana: 'ご 意見[いけん]を 聞[き]かせてください。',
        romaji: 'Goiken wo kikasete kudasai.',
        translation: 'Tolong perdengarkan opini Anda.'
      }
    ],
    relatedPatterns: ['n4-034', 'n4-035'],
    tags: ['keigo', 'polite', 'basics']
  },
  {
    id: 'n4-037',
    level: 'N4',
    pattern: '〜お〜ください',
    reading: 'o ... kudasai',
    meaning: 'Silakan... (Permintaan sopan tingkat tinggi/kehormatan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengutarakan instruksi mempersilakan tamu secara santun dan profesional di ranah pelayanan.',
    structure: 'お + Kata Kerja (Stem Masu) + ください',
    notes: 'Jauh lebih elegan dan sopan dibandingkan menggunakan 〜てください biasa.',
    examples: [
      {
        japanese: 'どうぞこちらにお掛けください。',
        furigana: 'どうぞこちらにお 掛け[か]けください。',
        romaji: 'Douzo kochira ni okake kudasai.',
        translation: 'Silakan, sudilah kiranya duduk di sebelah sini.'
      },
      {
        japanese: 'スリッパをお使いください。',
        furigana: 'スリッパをお 使い[つか]いください。',
        romaji: 'Surippa wo otsukai kudasai.',
        translation: 'Silakan pergunakan selop sandal ini.'
      }
    ],
    relatedPatterns: ['n5-013', 'n4-034'],
    tags: ['keigo', 'request', 'polite']
  },
  {
    id: 'n4-038',
    level: 'N4',
    pattern: '〜お〜する',
    reading: 'o ... suru',
    meaning: 'Saya (rendah diri) akan melakukan... demi Anda.',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengubah tindakan pembicara ke wujud rendah diri (kenjougo) aktif demi melayani pihak lawan bicara.',
    structure: 'お + Kata Kerja (Stem Masu) + する / いたします',
    notes: 'Hanya digunakan jika tindakan tersebut diarahkan langsung untuk keuntungan lawan bicara.',
    examples: [
      {
        japanese: '私が明日ご案内します。',
        furigana: '私[わたし]が明日ご 案内[あんない]します。',
        romaji: 'Watashi ga ashita goannai shimasu.',
        translation: 'Besok sayalah yang dengan senang hati akan mengantarkan pemanduan Anda.'
      },
      {
        japanese: 'お荷物を車までお届けいたします。',
        furigana: 'お 荷物[にもつ]を 車[くるま]までお届けいたします。',
        romaji: 'Onimotsu wo kuruma made otodoke itashimasu.',
        translation: 'Saya akan mengantarkan barang bawaan Anda sampai ke kendaraan.'
      }
    ],
    relatedPatterns: ['n4-035'],
    tags: ['keigo', 'humble', 'polite']
  },
  {
    id: 'n4-039',
    level: 'N4',
    pattern: '〜てあげる',
    reading: 'te ageru',
    meaning: 'Melakukan sesuatu untuk seseorang (memberi kebaikan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Melakukan tindakan sukarela yang mendatangkan keuntungan atau kegembiraan bagi penerima setara.',
    structure: 'Kata Kerja (Bentuk -te) + あげる / あげます',
    notes: 'Gunakan dengan hati-hati. Terlalu sering memakainya secara langsung kepada lawan bicara dapat terkesan pamer jasa.',
    examples: [
      {
        japanese: '私は妹に数学を教えてあげました。',
        furigana: '私[わたし]は 妹[いもうと]に 数学[すうがく]を 教え[おし]えてあげました。',
        romaji: 'Watashi wa imouto ni suugaku wo oshiete agemashia.',
        translation: 'Saya dengan senang hati mengajarkan matematika kepada adik perempuan saya.'
      },
      {
        japanese: '友達の荷物を持ってあげました。',
        furigana: '友達[ともだち]の 荷物[にもつ]を 持[も]ってあげました。',
        romaji: 'Tomodachi no nimotsu wo motte agemashia.',
        translation: 'Saya membawakan barang bawaan teman saya (untuk menolongnya).'
      }
    ],
    relatedPatterns: ['n5-078', 'n4-040', 'n4-041'],
    tags: ['benefactive', 'giving-receiving', 'te-form']
  },
  {
    id: 'n4-040',
    level: 'N4',
    pattern: '〜てくれる',
    reading: 'te kureru',
    meaning: 'Seseorang bersedia melakukan sesuatu untuk saya (menerima kebaikan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan rasa terima kasih atas tindakan sukarela orang lain yang menguntungkan diri pembicara.',
    structure: '[Pemberi Kebaikan] が + Kata Kerja (Bentuk -te) + くれる / くれます',
    notes: 'Arah tindakan kebaikan selalu memusat menuju subjek pembicara.',
    examples: [
      {
        japanese: '山田さんが傘を貸してくれました。',
        furigana: '山田[やまだ]さんが 傘[かさ]を 貸[か]してくれました。',
        romaji: 'Yamada-san ga kasa wo kashite kuremashia.',
        translation: 'Tuan Yamada berbaik hati meminjamkan payung kepada saya.'
      },
      {
        japanese: '友達が引っ越しを手伝ってくれたよ。',
        furigana: '友達[ともだち]が 引っ越し[ひっこし]を 手伝[てつだ]ってくれたよ。',
        romaji: 'Tomodachi ga hikkoshi wo tetsudatte kureta yo.',
        translation: 'Teman saya sudah berbaik hati membantu pindahan rumah lho.'
      }
    ],
    relatedPatterns: ['n5-079', 'n4-039', 'n4-041'],
    tags: ['benefactive', 'giving-receiving', 'te-form']
  },
  {
    id: 'n4-041',
    level: 'N4',
    pattern: '〜てもらう',
    reading: 'te morau',
    meaning: 'Menerima kebaikan aksi / Meminta tolong dilakukan...',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan bahwa pembicara berhasil membuat orang lain melakukan kebaikan demi kepentingannya, baik diminta atau tidak.',
    structure: '[Penerima] は + [Pemberi Kebaikan] に + Kata Kerja (Bentuk -te) + もらう / もらいます',
    notes: 'Penanda pelaku kebaikan selalu memakai partikel に.',
    examples: [
      {
        japanese: '私は木村さんに駅まで送ってもらいました。',
        furigana: '私[わたし]は 木村[きむら]さんに 駅[えき]まで 送[おく]ってもらいました。',
        romaji: 'Watashi wa Kimura-san ni eki made okutte moraimashia.',
        translation: 'Saya mendapat kebaikan diantarkan sampai ke stasiun oleh Nona Kimura.'
      },
      {
        japanese: '田中さんに日本語の作文を直してもらいました。',
        furigana: '田中[たなか]さんに 日本語[にほんご]の 作文[さくぶん]を 直[なお]してもらいました。',
        romaji: 'Tanaka-san ni nihongo no sakubun wo naoshite moraimashia.',
        translation: 'Saya meminta karangan bahasa Jepang saya dikoreksi oleh Tuan Tanaka.'
      }
    ],
    relatedPatterns: ['n5-080', 'n4-039', 'n4-040'],
    tags: ['benefactive', 'giving-receiving', 'te-form']
  },
  {
    id: 'n4-042',
    level: 'N4',
    pattern: '〜ていただけませんか',
    reading: 'te itadakemasen ka',
    meaning: 'Sudi kiranya Anda tolong... / Bisakah Anda tolong...? (Permintaan profesional sangat sopan).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Meminta bantuan secara ekstra santun kepada orang asing, pelanggan, klien, atau atasan kerja.',
    structure: 'Kata Kerja (Bentuk -te) + いただけませんか',
    notes: 'Jauh lebih sopan dibandingkan kudasaimasen ka dan te kudasai.',
    examples: [
      {
        japanese: 'すみませんが、もう一度説明していただけませんか。',
        furigana: 'すみませんが、もう 一度[いちど] 説明[せつめい]していただけませんか。',
        romaji: 'Sumimasen ga, mou ichido setsumei shite itadakemasen ka.',
        translation: 'Maaf, sudilah kiranya Anda bersedia menerangkan sekali lagi?'
      },
      {
        japanese: 'この荷物の重さを測っていただけませんか。',
        furigana: 'この 荷物[にもつ]の 重[おも]さを 測[はか]っていただけませんか。',
        romaji: 'Kono nimotsu no omosa wo hakatte itadakemasen ka.',
        translation: 'Bisakah Anda tolong timbangkan berat barang bawaan ini?'
      }
    ],
    relatedPatterns: ['n5-047', 'n5-013'],
    tags: ['request', 'te-form', 'polite']
  },
  {
    id: 'n4-043',
    level: 'N4',
    pattern: '〜おかげで',
    reading: 'okage de',
    meaning: 'Berkat... / Terima kasih kepada... (alasan bermotif keberuntungan/positif).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menjelaskan sebab akibat yang melahirkan keberhasilan/kebahagiaan berkat sumbangsih positif pihak luar.',
    structure: 'Kata Kerja & Sifat-i (Plain) / Sifat-na + な / Kata Benda + の + おかげで',
    notes: 'Mengandung luansa apresiasi bersyukur pembicara atas nasib mujur.',
    examples: [
      {
        japanese: '先生のおかげで、JLPT N4試験に合格することができました。',
        furigana: '先生[せんせい]のおかげで、JLPT N4試験[しけん]に 合格[ごうかく]することができました。',
        romaji: 'Sensei no okage de, JLPT N4 shiken ni goukaku suru koto ga dekimasu.',
        translation: 'Berkat bantuan Bapak Guru, saya berhasil lulus ujian JLPT N4.'
      },
      {
        japanese: '薬を飲んだおかげで、熱がすっかり下がりました。',
        furigana: '薬[くすり]を 飲[の]んだおかげで、 熱[ねつ]がすっかり 下[さ]がりました。',
        romaji: 'Kusuri wo nonda okage de, netsu ga sukkari sagarimashia.',
        translation: 'Terima kasih atas obat yang saya telan, panas demam saya telah turun seutuhnya.'
      }
    ],
    relatedPatterns: ['n4-046'],
    tags: ['reason', 'benefit', 'polite']
  },
  {
    id: 'n4-044',
    level: 'N4',
    pattern: '〜せいで',
    reading: 'sei de',
    meaning: 'Gara-gara... / Akibat buruk dari... (alasan bermotif menyalahkan/negatif).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menimpakan tuduhan kesalahan atau penyebab malapetaka buruk atas tindakan luar.',
    structure: 'Kata Kerja & Sifat-i (Plain) / Sifat-na + な / Kata Benda + の + せいで',
    notes: 'Mengandung muansa mengeluh, jengkel, atau menyalahkan kondisi sekeliling.',
    examples: [
      {
        japanese: '寝坊したせいで、学校行きのバスに乗り遅れてしまいました。',
        furigana: '寝坊[ねぼう]したせいで、 学校[がっこう]行[い]きの バスに 乗り[の]り遅[おく]れてしまいました。',
        romaji: 'Nebou shita sei de, gakkou iki no basu ni noriokurete shimaimashita.',
        translation: 'Gara-gara bangun kesiangan, saya terlanjur ketinggalan bus sekolah.'
      },
      {
        japanese: '彼のせいで、プロジェクトが失敗してしまいました。',
        furigana: '彼[かれ]のせいで、プロジェクトが 失敗[しっぱい]してしまいました。',
        romaji: 'Kare no sei de, purojekto ga shippai shite shimaimashita.',
        translation: 'Gara-gara ulahnya, proyek ini terlanjur menemui kegagalan.'
      }
    ],
    relatedPatterns: ['n4-043', 'n4-020'],
    tags: ['reason', 'fault', 'complaint']
  },
  {
    id: 'n4-045',
    level: 'N4',
    pattern: '〜について',
    reading: 'ni tsuite',
    meaning: 'Mengenai... / Tentang... (batasan topik riset/bahasan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menandai lingkup bahasan intelektual, penelitian akademis, diskusi, atau pembicaraan utama.',
    structure: '[Kata Benda] + について (の + [Kata Benda])',
    notes: 'Jika memodifikasi kata benda berikutnya, wajib ditambahi の (e.g. 将来についての夢 - Impian mengenai masa depan).',
    examples: [
      {
        japanese: '日本の歴史について論文を書きます。',
        furigana: '日本[にほん]の 歴史[れきし]について 論文[ろんぶん]を 書き[か]きます。',
        romaji: 'Nihon no rekishi ni tsuite ronbun wo kakimasu.',
        translation: 'Saya akan menulis tesis mengenai sejarah Jepang.'
      },
      {
        japanese: '仕事について相談してもいいですか。',
        furigana: '仕事[しごと]について 相談[そうだん]してもいいですか。',
        romaji: 'Shigoto ni tsuite soudan shite mo ii desu ka.',
        translation: 'Bolehkah saya berkonsultasi mengenai urusan pekerjaan?'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'topic', 'basics']
  },
  {
    id: 'n4-046',
    level: 'N4',
    pattern: '〜によって',
    reading: 'ni yotte',
    meaning: 'Oleh... / Karena... / Tergantung pada... / Dengan cara...',
    category: 'Partikel Dasar',
    jlptFunction: 'Sangat serbaguna untuk menyatakan pencipta karya pasif (oleh), penyebab musibah (karena), keragaman (tergantung), atau metode (dengan).',
    structure: '[Kata Benda] + によって',
    notes: 'Sangat sering dijumpai pada teks ilmiah formal atau surat kabar.',
    examples: [
      {
        japanese: '台風によって多くの家が壊れました。',
        furigana: '台風[たいふう]によって 多く[おお]の 家[いえ]が 壊[こわ]れました。',
        romaji: 'Taifuugi ni yotte ooku no ie ga kowaremashia.',
        translation: 'Karena terjangan angin topan, banyak rumah menjadi hancur.'
      },
      {
        japanese: '人によって意見が違います。',
        furigana: '人[ひと]によって 意見[いけん]が 違い[ちが]います。',
        romaji: 'Hito ni yotte iken ga chigaimasu.',
        translation: 'Tergantung pada masing-masing orang, opininya berbeda-beda.'
      }
    ],
    relatedPatterns: ['n4-031'],
    tags: ['particle', 'method', 'agent']
  },
  {
    id: 'n4-047',
    level: 'N4',
    pattern: '〜として',
    reading: 'to shite',
    meaning: 'Sebagai... / Dalam kapasitas sebagai... (peran formal).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menunjukkan status resmi, kualifikasi pekerjaan, sudut pandang peran, atau kapasitas fungsional subjek.',
    structure: '[Kata Benda] + として',
    notes: 'Sangat kokoh melambangkan peran identitas.',
    examples: [
      {
        japanese: '私は奨学生として日本へ留学します。',
        furigana: '私[わたし]は 奨学生[しょうがくせい]として 日本[にほん]へ 留学[りゅうがく]します。',
        romaji: 'Watashi wa shougakusei to shite nihon e ryuugaku shimasu.',
        translation: 'Saya berkuliah ke Jepang sebagai penerima beasiswa.'
      },
      {
        japanese: 'この部屋は会議室として使われています。',
        furigana: 'この 部屋[へや]は 会議[かいぎ]室[しつ]として 使[つか]われています。',
        romaji: 'Kono heya wa kaigishitsu to shite tsukawarete imasu.',
        translation: 'Kamar ini dipergunakan sebagai ruang rapat.'
      }
    ],
    relatedPatterns: [],
    tags: ['particle', 'role', 'status']
  },
  {
    id: 'n4-048',
    level: 'N4',
    pattern: '〜はずがない',
    reading: 'hazu ga nai',
    meaning: 'Tidak mungkin... / Mustahil jika... (penolakan logis keras).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan keyakinan mutlak pembicara atas kemustahilan suatu peristiwa berdasarkan nalar akal sehat.',
    structure: 'Kata Kerja & Sifat-i (Bentuk Biasa) / Sifat-na + な / Kata Benda + の + はずがない',
    notes: 'Lawan arah keyakinan mutlak negatif dari 〜はずです.',
    examples: [
      {
        japanese: '真面目な佐藤さんが嘘をつくはずがありません。',
        furigana: '真面目[まじめ]な 佐藤[さとう]さんが 嘘[うそ]をつくはずがありません。',
        romaji: 'Majime na Satou-san ga uso wo tsuku hazu ga arisen.',
        translation: 'Tuan Sato yang jujur dan bersungguh-sungguh itu tidak mungkin berkata bohong.'
      },
      {
        japanese: 'まだ鍵を持っていますから、彼が中に入れるはずがありません。',
        furigana: 'まだ 鍵[かぎ]を 持[も]っていますから、彼[かれ]が 中[なか]に 入[はい]れるはずがありません。',
        romaji: 'Mada kagi wo motte imasu kara, kare ga naka ni haireru hazu ga arimasen.',
        translation: 'Karena saya masih memegang kuncinya, dia tidak mungkin bisa masuk ke dalam.'
      }
    ],
    relatedPatterns: ['n4-017'],
    tags: ['expectation', 'probability', 'logic']
  },
  {
    id: 'n4-049',
    level: 'N4',
    pattern: '〜わけだ',
    reading: 'wake da',
    meaning: 'Pantas saja... / Tentu saja secara logis... (kesimpulan wajar).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyimpulkan suatu akibat logis yang terasa wajar setelah memahami latar belakang duduk perkaranya.',
    structure: '[Bentuk Biasa (Plain)] + わけだ (Sifat-na + な / Kata Benda + の/である)',
    notes: 'Sangat cocok diucapkan saat menemukan "Aha! Pantas saja begini rasanya".',
    examples: [
      {
        japanese: '彼は十年間もイギリスに住んでいたのか。英語が上手なわけだ。',
        furigana: '彼[かれ]は 十年間[じゅうねんkan]も イギリスに 住[す]んでいたのか。 英語[えいご]が 上手[じょうず]なわけだ。',
        romaji: 'Kare wa juunenkan mo igirisu ni sunde ita no ka. Eigo ga jouzu na wake da.',
        translation: 'Oh, rupanya dia tinggal di Inggris selama sepuluh tahun ya. Pantas saja bahasa Inggrisnya mahir.'
      },
      {
        japanese: 'エアコンが消えている。部屋が暑いわけだ。',
        furigana: 'エアコンが 消[き]えている。 部屋[へや]が 暑[あつ]いわけだ。',
        romaji: 'Eakon ga kiete iru. Heya ga atsui wake da.',
        translation: 'AC-nya dalam kondisi mati. Pantas saja kamarnya terasa gerah.'
      }
    ],
    relatedPatterns: ['n4-048', 'n4-052'],
    tags: ['explanation', 'conclusion', 'logic']
  },
  {
    id: 'n4-050',
    level: 'N4',
    pattern: '〜わけではない',
    reading: 'wake de wa nai',
    meaning: 'Bukan berarti... / Tidak selalu... (penyangkalan sebagian).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menolak anggapan ekstrem lawan bicara, menjelaskan bahwa kebenaran situasi tidak sepenuhnya 100% seperti itu.',
    structure: '[Bentuk Biasa (Plain)] + わけではない',
    notes: 'Pola mitigasi sopan untuk melunakkan penyangkalan total.',
    examples: [
      {
        japanese: '日本料理が嫌いなわけではありませんが、納豆は食べられません。',
        furigana: '日本[にほん]料理[りょうり]が 嫌い[きら]なわけではありませんが、 納豆[なっとう]は 食べ[た]べられません。',
        romaji: 'Nihon ryouri ga kirai na wake de wa arimasen ga, nattou wa taberaremasen.',
        translation: 'Bukan berarti saya membenci masakan Jepang, tetapi saya memang tidak bisa menelan natto.'
      },
      {
        japanese: 'お金があれば幸せになれるわけではない。',
        furigana: 'お 金[かね]があれば 幸せ[しあわせ]になれるわけではない。',
        romaji: 'Okane ga areba shiawase ni nareru wake de wa nai.',
        translation: 'Tentu saja tidak selalu memiliki banyak uang otomatis menjamin kebahagiaan hidup.'
      }
    ],
    relatedPatterns: ['n4-049'],
    tags: ['negation', 'mitigation', 'logic']
  },
  {
    id: 'n4-051',
    level: 'N4',
    pattern: '〜ばかりでなく',
    reading: 'bakari de naku',
    meaning: 'Tidak hanya... tetapi juga... (penambahan setara).',
    category: 'Kata Sambung',
    jlptFunction: 'Menambahkan satu wujud fakta baru yang levelnya setara atau bahkan lebih tinggi dari klausa pertama.',
    structure: '[Bentuk Biasa] / Kata Benda + ばかりでなく + [Klausa Tambahan]',
    notes: 'Setara dengan pola 〜だけでなく (dake de naku) namun terdengar lebih formal.',
    examples: [
      {
        japanese: '彼は頭がいいばかりでなく、スポーツも得意です。',
        furigana: '彼[かれ]は 頭[あたま]がいいばかりでなく、スポーツも 得意[とくい]です。',
        romaji: 'Kare wa atama ga ii bakari de naku, supootsu mo tokui desu.',
        translation: 'Dia tidak hanya cerdas, tetapi juga sangat mahir dalam berolahraga.'
      },
      {
        japanese: '日本語ばかりでなく,英語も勉強しなければなりません。',
        furigana: '日本語[にほんご]ばかりでなく, 英語[えいご]も 勉強[べんきょう]しなければなりません。',
        romaji: 'Nihongo bakari de naku, eigo mo benkyou shinakereba narimasen.',
        translation: 'Tidak hanya bahasa Jepang, kita juga wajib mempelajari bahasa Inggris.'
      }
    ],
    relatedPatterns: ['n5-036', 'n4-028'],
    tags: ['addition', 'conjunction', 'basics']
  },
  {
    id: 'n4-052',
    level: 'N4',
    pattern: '〜はもちろん',
    reading: 'wa mochiron',
    meaning: 'Sudah tentu... / Jangankan... (penegasan opsi utama).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyebutkan satu subjek ekstrem yang kebenarannya sudah mutlak, sebelum menyertakan opsi minor lain.',
    structure: '[Kata Benda] + はもちろん、 [Klausa minor/tambahan]',
    notes: 'Sangat bernada meyakinkan.',
    examples: [
      {
        japanese: '彼女はひらがなはもちろん、漢字も上手に書けます。',
        furigana: '彼女[かのじょ]はひらがなはもちろン、 漢字[かんじ]も 上手[じょうず]に 書[か]けます。',
        romaji: 'Kanojo wa hiragana wa mochiron, kanji mo jouzu ni kakemasu.',
        translation: 'Jangankan hiragana (sudah pasti), kanji pun dia mampu menulisnya dengan sangat mahir.'
      },
      {
        japanese: '風邪を引いたときは、薬を飲むのはもちろん、よく休むことが大切です。',
        furigana: '風邪[かぜ]を 引き[ひ]いたときは、 薬[くすり]を 飲む[の]むのはもちろん、よく 休[やす]むことが 大切[たいせつ]です。',
        romaji: 'Kaze wo hiita toki wa, kusuri wo nomu no wa mochiron, yoku yasumu koto ga taisetsu desu.',
        translation: 'Saat terserang flu, meminum obat sudah tentu wajib, namun istirahat dengan nyenyak juga amat penting.'
      }
    ],
    relatedPatterns: [],
    tags: ['emphasis', 'logic', 'basics']
  },
  {
    id: 'n4-053',
    level: 'N4',
    pattern: '〜の（名詞化）',
    reading: 'no (nominalizer)',
    meaning: 'Hal... / Tindakan... (mengubah kata kerja menjadi kata benda).',
    category: 'Partikel Dasar',
    jlptFunction: 'Mengubah klausa kata kerja aktif menjadi kata benda abstrak penanda subjek/objek agar bisa ditempeli partikel selanjutnya.',
    structure: 'Kata Kerja (Bentuk Kamus) + の + [が/を/は]',
    notes: 'Sangat cocok untuk menyatakan hobi (e.g. 歌うのが好き - Menyukai hal menyanyi) atau aksi indra langsung.',
    examples: [
      {
        japanese: '私は音楽を聞くのが好きです。',
        furigana: '私[わたし]は 音楽[おんがく]を 聞[き]くのが 好き[す]きです。',
        romaji: 'Watashi wa ongaku wo kiku no ga suki desu.',
        translation: 'Saya menyukai aktivitas mendengarkan musik.'
      },
      {
        japanese: '暗い部屋で一人で待つのは怖いです。',
        furigana: '暗[くら]い 部屋[heや]で 一人[ひとり]で 待[ま]つのは 怖[こわ]いです。',
        romaji: 'Kurai heya de hitori de matsu no wa kowai desu.',
        translation: 'Menunggu sendirian di dalam kamar gelap itu menyeramkan.'
      }
    ],
    relatedPatterns: ['n4-054'],
    tags: ['nominalization', 'grammar-modifier', 'basics']
  },
  {
    id: 'n4-054',
    level: 'N4',
    pattern: '〜こと（名詞化）',
    reading: 'koto (nominalizer)',
    meaning: 'Hal... / Aktivitas... (mengubah kata kerja menjadi wujud benda tertulis).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengubah kata kerja ke kedudukan kata benda untuk menyatakan definisi tertulis, peraturan resmi, atau kemampuan.',
    structure: 'Kata Kerja (Bentuk Kamus) + こと',
    notes: 'Sedikit lebih bernada formal/tertulis dibandingkan partikel の.',
    examples: [
      {
        japanese: '私の趣味は日本画を描くことです。',
        furigana: '私[わたし]の 趣味[しゅみ]は 日本[にほん]画[が]を 描[え]くことです。',
        romaji: 'Watashi no shumi wa nihonga wo描くkoto desu.',
        translation: 'Hobi saya adalah melukis lukisan tradisional gaya Jepang.'
      },
      {
        japanese: '図書館での注意は、大声で話さないことです。',
        furigana: '図書館[としょかん]での 注意[ちゅうい]は、 大声[おおごえ]で 話[は]なさないことです。',
        romaji: 'Toshokan de no chuui wa, oogoe de hanasanai koto desu.',
        translation: 'Peraturan penting di perpustakaan adalah dilarang berbicara dengan suara keras.'
      }
    ],
    relatedPatterns: ['n4-053', 'n5-050'],
    tags: ['nominalization', 'formal', 'basics']
  },
  {
    id: 'n4-055',
    level: 'N4',
    pattern: '〜がする (Suhu/Bau/Rasa/Suara)',
    reading: 'ga suru',
    meaning: 'Terasa... / Tercium... / Terdengar... (sistem indra pasif).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Mengekspresikan sensasi fisiologis indra pembicara (bau, suara, rasa makanan, firasat) yang hadir secara alami.',
    structure: '[Suara/Bau/Rasa/Firasat] + がする / します',
    notes: 'Menggunakan partikel が. Contoh: いいにおいがする (tercium bau harum).',
    examples: [
      {
        japanese: '台所からいいにおいがしていますね。',
        furigana: '台所[だいどころ]からいいにおいがしていますね。',
        romaji: 'Daidokoro kara ii nioi ga shite imasu ne.',
        translation: 'Tercium aroma yang sangat harum dari arah dapur ya.'
      },
      {
        japanese: '外で変な音がしましたよ。',
        furigana: '外[そと]で 変[へん]な 音[おと]がしましたよ。',
        romaji: 'Soto de hen na oto ga shimashia yo.',
        translation: 'Terdengar bunyi yang aneh di luar lho.'
      }
    ],
    relatedPatterns: [],
    tags: ['sensation', 'perception', 'basics']
  },
  {
    id: 'n4-056',
    level: 'N4',
    pattern: '〜ているところだ',
    reading: 'te iru tokoro da',
    meaning: 'Sedang berada di tengah-tengah melakukan... (keberlangsungan aktif).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menegaskan fokus bahwa subjek sedang sibuk-sibuknya melangsungkan tindakan tersebut tepat pada detik ini.',
    structure: 'Kata Kerja (Bentuk -te) + いるところだ / います',
    notes: 'Bagian dari pola tri-fase 〜ところ.',
    examples: [
      {
        japanese: '今レポートを書いているところですから、後で連絡します。',
        furigana: '今[いま]レポートを 書い[か]いているところですから、後[aton]で 連絡[れんらく]します。',
        romaji: 'Ima repooto wo kaite iru tokoro desu kara, ato de renraku shimasu.',
        translation: 'Karena saat ini saya sedang berada di tengah-tengah menulis laporan, nanti saya hubungi kembali.'
      },
      {
        japanese: '山田さんは今お風呂に入っているところです。',
        furigana: '山田[やまだ]さんは今お 風呂[ふろ]に 入っ[はい]っているところです。',
        romaji: 'Yamada-san wa ima ofuro ni haitte iru tokoro desu.',
        translation: 'Tuan Yamada kebetulan sedang berada di tengah-tengah mandi berendam saat ini.'
      }
    ],
    relatedPatterns: ['n4-027'],
    tags: ['continuous', 'aspect', 'te-form']
  },
  {
    id: 'n4-057',
    level: 'N4',
    pattern: '〜たとたん',
    reading: 'ta totan',
    meaning: 'Begitu... langsung... / Seketika setelah... (kejadian spontan tak terduga).',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menyatakan bahwa tindakan/peristiwa kedua mendadak terjadi seketika setelah tindakan pertama selesai.',
    structure: 'Kata Kerja (Bentuk Lampau -ta) + とたん / とたんに',
    notes: 'Klausa hasil di bagian akhir biasanya berupa peristiwa spontan di luar kontrol/kehendak pembicara.',
    examples: [
      {
        japanese: 'お酒を飲んだとたん、顔が赤くなってしまいました。',
        furigana: 'お 酒[さけ]を 飲[の]んだとたん、 顔[かお]が 赤[あか]くなってしまいました。',
        romaji: 'Osake wo nonda totan, kao ga akaku natte shimaimashita.',
        translation: 'Begitu menenggak sake, wajah saya seketika langsung berubah menjadi merah.'
      },
      {
        japanese: '窓を開けたとたん、冷たい風が入ってきました。',
        furigana: '窓[まど]を 開[あ]けたとたん、 冷[つめ]たい 風[かぜ]が 入っ[はい]てきました。',
        romaji: 'Mado wo aketa totan, tsumetai kaze ga haitte kimashia.',
        translation: 'Begitu jendela dibuka, embusan angin es langsung menyapu masuk ke dalam.'
      }
    ],
    relatedPatterns: ['n5-085'],
    tags: ['instantaneous', 'temporal', 'ta-form']
  },
  {
    id: 'n4-058',
    level: 'N4',
    pattern: '〜うちに',
    reading: 'uchi ni',
    meaning: 'Selagi... / Mumpung... / Selama kondisi belum berubah...',
    category: 'Ekspresi Waktu',
    jlptFunction: 'Menganjurkan untuk merampungkan aksi utama selagi kondisi lingkungan masih mendukung sebelum wujudnya berubah menjadi menyulitkan.',
    structure: 'Kata Kerja (Kamus / -te iru / -nai) / Sifat-i & Sifat-na + な / Kata Benda + の + うちに',
    notes: 'Sangat sering diartikan sebagai "selagi / mumpung masih...".',
    examples: [
      {
        japanese: '日本にいるうちに、富士山に登ってみたいです。',
        furigana: '日本[にほん]にいるうちに、 富士山[ふじさん]に 登[の]ぼってみたいです。',
        romaji: 'Nihon ni iru uchi ni, fujisan ni nobotte mitai desu.',
        translation: 'Selagi mumpung masih berada di Jepang, saya ingin mencoba mendaki gunung Fuji.'
      },
      {
        japanese: 'スープが温かいうちに、早く召し上がってください。',
        furigana: 'スープが 温[あたた]かいうちに、 早く[はや]く 召[め]し上が[あ]ってください。',
        romaji: 'Suupu ga atatakai uchi ni, hayaku meshiagatte kudasai.',
        translation: 'Mumpung supnya masih hangat, silakan lekas disantap.'
      }
    ],
    relatedPatterns: [],
    tags: ['temporal', 'opportunity', 'basics']
  },
  {
    id: 'n4-059',
    level: 'N4',
    pattern: '〜さえ',
    reading: 'sae',
    meaning: 'Bahkan... / Pun... (menunjukkan batas ekstrem terkecil).',
    category: 'Partikel Dasar',
    jlptFunction: 'Menyebutkan satu permisalan contoh terkecil yang sangat ekstrem untuk melukiskan bahwa hal umum lainnya tentu saja berlaku demikian.',
    structure: '[Kata Benda] + さえ',
    notes: 'Jika dipasangkan dengan kondisional (sae... ba), berarti "jika saja...". Di N4, fokus pada wujud penegasan "bahkan".',
    examples: [
      {
        japanese: 'この問題は、子供でさえ解くことができますよ。',
        furigana: 'この 問題[もんだい]は、 子供[こども]でさえ 解[と]くことができますよ。',
        romaji: 'Kono mondai wa, kodomo de sae toku koto ga dekimasu yo.',
        translation: 'Soal ujian ini, bahkan anak-anak pun sanggup memecahkannya lho.'
      },
      {
        japanese: '忙しすぎて、水を飲む時間さえありません。',
        furigana: '忙[いそが]しすぎて、 水[mizu]を 飲む[の]む 時間[じかん]さえありません。',
        romaji: 'Isogashisugite, mizu wo nomu jikan sae arimasen.',
        translation: 'Karena terlalu kelewat sibuk, bahkan waktu untuk sekadar meneguk air pun tidak ada.'
      }
    ],
    relatedPatterns: ['n5-036'],
    tags: ['emphasis', 'extreme', 'particle']
  },
  {
    id: 'n4-060',
    level: 'N4',
    pattern: '〜かける',
    reading: 'kake',
    meaning: 'Hampir... / Baru mulai... (tindakan setengah jalan belum selesai).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menerangkan kondisi wujud fisik benda atau aktivitas yang sudah diinisiasi namun sengaja terhenti di tengah jalan.',
    structure: 'Kata Kerja (Stem Masu) + かける / かけの (kata benda)',
    notes: 'Hasil konjugasinya bisa berupa kata benda (e.g. 飲みかけの牛乳 - Susu yang baru diminum setengah).',
    examples: [
      {
        japanese: '机の上に読みかけの本が置いてあります。',
        furigana: '机[つくえ]の 上[うえ]に 読み[よ]みかけの本が 置[お]いてあります。',
        romaji: 'Tsukue no ue ni yomikake no hon ga oite arimasu.',
        translation: 'Di atas meja tergeletak buku yang baru dibaca setengah (belum selesai).'
      },
      {
        japanese: '彼は何か言いかけましたが、すぐにやめました。',
        furigana: '彼[かれ]は 何[なに]か 言[い]いかけましたが、すぐにやめました。',
        romaji: 'Kare wa nani ka iikakemashia ga, sugu ni yamemashia.',
        translation: 'Dia sempat nyaris mulai mengucapkan sesuatu, tetapi langsung terdiam.'
      }
    ],
    relatedPatterns: [],
    tags: ['incomplete', 'aspect', 'verbs']
  },
  {
    id: 'n4-061',
    level: 'N4',
    pattern: '〜きる',
    reading: 'kiru',
    meaning: 'Melakukan sampai tuntas habis / Sangat... (kemantapan selesai).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Menegaskan bahwa suatu tindakan aktif telah dilangsungkan sampai benar-benar habis tidak bersisa.',
    structure: 'Kata Kerja (Stem Masu) + きる / きれる (bisa tuntas)',
    notes: 'Bentuk negatifnya, 〜きれない (kirenai), berarti "tidak sanggup menuntaskan semuanya karena saking banyaknya".',
    examples: [
      {
        japanese: 'こんなにたくさんの料理は,一人では食べきれませんよ。',
        furigana: 'こんなにたくさんの 料理[りょうり]は, 一人[ひとり]では 食べ[た]べきれませんよ。',
        romaji: 'Konna ni takusan no ryouri wa, hitori de wa tabekiremasen yo.',
        translation: 'Hidangan sebanyak ini, tidak mungkin sanggup saya habiskan sendirian lho.'
      },
      {
        japanese: '彼はマラソンを最後まで走りきりました。',
        furigana: '彼[かれ]は マラソンを 最後[さいご]まで 走り[はし]りきりました。',
        romaji: 'Kare wa marason wo saigo made hashirikirimasu.',
        translation: 'Dia berhasil berlari menuntaskan maraton hingga garis finis akhir.'
      }
    ],
    relatedPatterns: [],
    tags: ['exhaust', 'completed', 'verbs']
  },
  {
    id: 'n4-062',
    level: 'N4',
    pattern: '〜だす',
    reading: 'dasu',
    meaning: 'Tiba-tiba mulai... / Mendadak keluar... (spontanitas mendadak).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Melukiskan permulaan aksi dinamis secara mendadak, mengejutkan, atau di luar perkiraan wajar.',
    structure: 'Kata Kerja (Stem Masu) + だす / だしました',
    notes: 'Sangat berbeda dengan 〜はじめる yang bernada gradual/direncanakan. Pola だす murni menggambarkan kejutan spontan.',
    examples: [
      {
        japanese: 'さっきまで晴れていたのに、突然雨が降りだしました。',
        furigana: 'さっきまで 晴れ[は]れていたのに、 突然[とつぜん] 雨[あめ]が 降り[ふ]りだしました。',
        romaji: 'Sakki made harete ita noni, totsuzen ame ga furidashimashia.',
        translation: 'Padahal baru saja cerah tadi, kok mendadak tiba-tiba hujan turun lebat.'
      },
      {
        japanese: '赤ちゃんが急に泣きだして、困ってしまいました。',
        furigana: '赤ちゃん[あかちゃん]が 急[きゅう]に 泣[な]きだして、 困[こま]ってしまいました。',
        romaji: 'Akachan ga kyuu ni nakidashite, komatte shimaimashita.',
        translation: 'Bayinya sekonyong-konyong menangis histeris mendadak, saya terlanjur dibuat kebingungan.'
      }
    ],
    relatedPatterns: ['n4-065'],
    tags: ['sudden', 'aspect', 'verbs']
  },
  {
    id: 'n4-066',
    level: 'N4',
    pattern: '〜意向形 (Bentuk Ajakan Kasual - ou / you)',
    reading: 'ikoukei (volitional)',
    meaning: 'Ayo... / Mari... (ajakan/niat kasual akrab).',
    category: 'Bentuk Kata Kerja',
    jlptFunction: 'Bentuk biasa/kasual dari 〜ましょう. Digunakan untuk mengajak teman karib melakukan aktivitas bersama, atau menyuarakan isi hati.',
    structure: 'Grup 1 (U-dan -> O-dan + u), Grup 2 (ru -> you), Grup 3 (suru -> shiyou, kuru -> koyou)',
    notes: 'Sering digabungkan dengan partikel と思っています untuk menyatakan niat/rencana.',
    examples: [
      {
        japanese: 'ちょっと休憩しよう。疲れたね。',
        furigana: 'ちょっと 休憩[きゅうけい]しよう。 疲れ[つか]れたね。',
        romaji: 'Chotto kyuukei shiyou. Tsukareta ne.',
        translation: 'Ayo kita istirahat sejenak. Lelah sekali ya.'
      },
      {
        japanese: '明日、一緒に図書館へ行こうよ。',
        furigana: '明日[あした]、 一緒[いっしょ]に 図書館[としょかん]へ 行[い]こうよ。',
        romaji: 'Ashita, issho ni toshokan e ikou yo.',
        translation: 'Besok, ayo kita pergi ke perpustakaan bersama-sama lho.'
      }
    ],
    relatedPatterns: ['n5-018', 'n4-076'],
    tags: ['volitional', 'casual', 'conjugation']
  },
  {
    id: 'n4-076',
    level: 'N4',
    pattern: '〜意向形 + と思っています',
    reading: 'ikoukei + to omotte imasu',
    meaning: 'Sedang berencana untuk... / Berniat melakukan...',
    category: 'Pola Lanjutan',
    jlptFunction: 'Mengekspresikan niat rencana matang personal pembicara yang sudah lama terlintas dan dipertimbangkan di dalam benak kepala.',
    structure: 'Kata Kerja (Bentuk Ajakan/Volitional) + と思っています / と思います',
    notes: 'Menggunakan bentuk 思っています menunjukkan bahwa keputusan tersebut bukan sekadar dadakan saat berbicara, melainkan sudah dipikirkan sejak lama.',
    examples: [
      {
        japanese: '週末に新しいパソコンを買おうと思っています。',
        furigana: '週末[しゅうまつ]に 新[あたら]しい パソコンを 買[か]おうと思っています。',
        romaji: 'Shuumatsu ni atarashii pasokon wo kaou to omotte imasu.',
        translation: 'Saya sedang berencana untuk membeli laptop baru di akhir pekan.'
      },
      {
        japanese: '会社をやめて、留学しようと思っています。',
        furigana: '会社[かいしゃ]をやめて、 留学[りゅうがく]しようと思っています。',
        romaji: 'Kaisha wo yamete, ryuugaku shiyou to omotte imasu.',
        translation: 'Saya sedang berniat mengundurkan diri dari kantor untuk melanjutkan kuliah luar negeri.'
      }
    ],
    relatedPatterns: ['n4-066', 'n4-018'],
    tags: ['intention', 'plan', 'volitional']
  },
  {
    id: 'n4-077',
    level: 'N4',
    pattern: '〜みたいだ / 〜みたいです',
    reading: 'mitai da',
    meaning: 'Mirip seperti... / Kelihatannya... (analogi percakapan kasual).',
    category: 'Kopula & Keadaan',
    jlptFunction: 'Membuat analogi majas kesamaan (mirip) atau menarik simpulan asumsi (kelihatannya) secara kasual akrab.',
    structure: '[Kata Benda / Kata Sifat / Kata Kerja (Bentuk Biasa)] + みたいだ',
    notes: 'Sangat populer digunakan dalam percakapan gaul sehari-hari. Merupakan versi santai dari pola 〜のようだ.',
    examples: [
      {
        japanese: 'あの雲はまるでアイスクリームみたいですね。',
        furigana: 'あの 雲[くも]はまるで アイスクリームみたいですね。',
        romaji: 'Ano kumo wa marude aisukuriimu mitai desu ne.',
        translation: 'Awan itu sungguh mirip sekali seperti es krim ya.'
      },
      {
        japanese: '佐藤さんはもう帰ったみたいですよ。電気が消えています。',
        furigana: '佐藤[さとう]さんはもう 帰[かえ]ったみたいですよ。 電気[でんき]が 消[き]えています。',
        romaji: 'Satou-san wa mou kaetta mitai desu yo. Denki ga kiete imasu.',
        translation: 'Tampaknya Tuan Sato sudah pulang lho. Lampunya sudah padam.'
      }
    ],
    relatedPatterns: ['n4-015', 'n4-078'],
    tags: ['colloquial', 'similarity', 'conjecture']
  },
  {
    id: 'n4-078',
    level: 'N4',
    pattern: '〜らしい',
    reading: 'rashii',
    meaning: 'Sangat mencerminkan karakter... / Sepertinya kabarnya... (tipikal ideal / dugaan berbasis bukti).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menyatakan bahwa subjek benar-benar mencerminkan standar ideal aslinya (e.g. jantan, feminin, khas anak-anak), atau menduga berdasarkan laporan konkret.',
    structure: '[Kata Benda] + らしい / [Plain Form] + らしい',
    notes: 'Contoh: 男らしい (jantan/lelaki sejati).',
    examples: [
      {
        japanese: '今日は春らしい暖かい日ですね。',
        furigana: '今日[きょう]は 春[はる]らしい 暖かい[あたた]かい 日[ひ]ですね。',
        romaji: 'Kyou wa haru rashii atatakai hi desu ne.',
        translation: 'Hari ini hari yang hangat, sangat khas mencerminkan musim semi ya.'
      },
      {
        japanese: '山田さんは来月仕事を辞めるらしいです。',
        furigana: '山田[やまだ]さんは 来月[らいげつ] 仕事[しごと]を 辞[や]めるらしいです。',
        romaji: 'Yamada-san wa raigetsu shigoto wo yameru rashii desu.',
        translation: 'Kabarnya, sepertinya Tuan Yamada akan mengundurkan diri dari pekerjaannya bulan depan.'
      }
    ],
    relatedPatterns: ['n4-014', 'n4-077'],
    tags: ['characteristic', 'hearsay', 'adjectives']
  },
  {
    id: 'n4-079',
    level: 'N4',
    pattern: '〜っぽい',
    reading: 'ppoi',
    meaning: 'Kebiri-birian... / Cenderung bermotif... (sifat kemiripan subjektif kasual).',
    category: 'Pola Lanjutan',
    jlptFunction: 'Menerangkan wujud kemiripan fisik yang bernada negatif/murahan, atau menyatakan kecenderungan sifat (e.g. pelupa, bosanan).',
    structure: '[Kata Benda / Kata Kerja Stem Masu] + っぽい (です)',
    notes: 'Contoh populer: 安っぽい (kelihatan murah/low-quality), 忘れっぽい (pelupa).',
    examples: [
      {
        japanese: 'この牛乳は水っぽくて、あまり美味しくないです。',
        furigana: 'この 牛乳[ぎゅうにゅう]は 水[みず]っぽくて、あまり 美味[おい]しくないです.',
        romaji: 'Kono gyuunyuu wa mizuppokte, amari oishiknai desu.',
        translation: 'Susu ini encer keair-airan, makanya kurang begitu lezat.'
      },
      {
        japanese: '祖父は最近、忘れっぽくなってしまいました。',
        furigana: '祖父[そふ]は 最近[さいきん]、 忘れ[わす]れっぽくなってしまいました。',
        romaji: 'Sofu wa saikin, wasureppoku natte shimaimashita.',
        translation: 'Kakek belakangan ini terlanjur menjadi sangat pelupa.'
      }
    ],
    relatedPatterns: ['n4-077'],
    tags: ['colloquial', 'suffix', 'adjectives']
  },
  {
    id: 'n4-080',
    level: 'N4',
    pattern: '〜だらけ',
    reading: 'darake',
    meaning: 'Penuh dengan... / Berlumuran... (kondisi kotor bernada menyayangkan).',
    category: 'Partikel Dasar',
    jlptFunction: 'Mengindikasikan bahwa permukaan objek dipenuhi atau berlumuran oleh benda kotor yang tidak disenangi (debu, lumpur, kesalahan).',
    structure: '[Kata Benda] + だらけ (の + Kata Benda)',
    notes: 'Selalu berkonotasi negatif. Tidak bisa dipakai untuk benda bersih atau positif.',
    examples: [
      {
        japanese: '彼の部屋はゴミだらけで、本当に汚いです。',
        furigana: '彼[かれ]の 部屋[へや]は ゴミだらけで、 本当[ほんとう]に 汚い[きたな]いです。',
        romaji: 'Kare no heya wa gomi darake de, hontou ni kitanai desu.',
        translation: 'Kamarnya penuh berserakan sampah, benar-benar dekil kotor.'
      },
      {
        japanese: 'このテストは間違いだらけですね。',
        furigana: 'この テストは 間違い[まちが]いだらけですね。',
        romaji: 'Kono tesuto wa machigai darake desu ne.',
        translation: 'Lembar ujian ini isinya penuh berlumuran kesalahan ya.'
      }
    ],
    relatedPatterns: ['n4-028'],
    tags: ['dirty', 'emphasis', 'particle']
  }
];

const allN4Grammar = [...n4BaseData, ...additionalData];

const fileContent = `import type { GrammarPattern } from '../types/grammar';

export const grammarN4Data: GrammarPattern[] = ${JSON.stringify(allN4Grammar, null, 2)};
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'grammarN4.ts'),
  fileContent,
  'utf8'
);

console.log('Successfully expanded grammarN4Data to N4 patterns!');

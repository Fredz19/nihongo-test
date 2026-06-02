import type { GrammarPattern } from '../types/grammar';

export const grammarN4Data: GrammarPattern[] = [
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
        furigana: '雨[あめ]が 降[ふ]ったら、 行[い]きません。',
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
        furigana: '歩[ある]きながらスマホを 見[み]ないでください。',
        romaji: 'Arukinagara sumaho wo minaide kudasai.',
        translation: 'Tolong jangan melihat ponsel sambil berjalan.'
      }
    ],
    relatedPatterns: [],
    tags: ['simultaneous', 'masu-stem', 'temporal']
  }
];

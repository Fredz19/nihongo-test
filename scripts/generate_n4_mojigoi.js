import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const vocabJsonPath = path.resolve(__dirname, 'data', 'n4_vocab.json');
const outputDir = path.resolve(__dirname, '..', 'src', 'data', 'mojigoiN4');

// Extra Orthography (6 items) to hit 18 total
const extraOrthography = [
  {
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "「そうだん」の正しい漢字はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["相談", "相違", "相当", "相対"],
    correct: 0,
    explanation: "「そうだん」 ditulis sebagai 「相談」 (berkonsultasi/diskusi). Pilihan lain memiliki makna dan bacaan yang berbeda.",
    source: "ai",
    topic: "Communication",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "「こうつう」の正しい漢字はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["交通", "交番", "交流", "学校"],
    correct: 0,
    explanation: "「こうつう」 ditulis sebagai 「交通」 (lalu lintas). 「交番」 adalah pos polisi (kouban), 「交流」 adalah pertukaran (kouryuu).",
    source: "ai",
    topic: "Transportation",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "「じゅんび」の正しい漢字はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["準備", "標準", "備中", "設備"],
    correct: 0,
    explanation: "「じゅんび」 ditulis sebagai 「準備」 (persiapan). 「標準」 adalah standar (hyoujun), 「設備」 adalah fasilitas (setsubi).",
    source: "ai",
    topic: "Business",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "「おくりもの」の正しい漢字はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["贈り物", "送る物", "置く物", "送物"],
    correct: 0,
    explanation: "「おくりもの」 ditulis sebagai 「贈り物」 (hadiah/kado). Pilihan lain adalah penulisan yang salah.",
    source: "ai",
    topic: "Daily Life",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "「しゅくじつ」の正しい漢字はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["祝日", "宿日", "祝二", "宿日"],
    correct: 0,
    explanation: "「しゅくじつ」 ditulis sebagai 「祝日」 (hari libur nasional). Pilihan lain adalah penulisan yang salah.",
    source: "ai",
    topic: "Daily Life",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "orthography",
    question: "「しょうせつ」の正しい漢字はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["小説", "小設", "小説", "昭説"],
    correct: 0,
    explanation: "「しょうせつ」 ditulis sebagai 「小説」 (novel). Pilihan lain adalah penulisan yang salah.",
    source: "ai",
    topic: "Education",
    difficulty_level: 2,
    is_active: true
  }
];

// Extra Usage (5 items) to hit 15 total
const extraUsage = [
  {
    level: "N4",
    section: "Vocabulary",
    type: "usage",
    question: "「準備する」を正しく使っている文はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["明日から旅行に行くので、今夜荷物を準備します。", "天気がいいので、散歩を準備します。", "日本語が上手になるために、毎日準備します。", "このお茶は準備していて美味しいです。"],
    correct: 0,
    explanation: "「準備する」 berarti mempersiapkan. Kalimat yang tepat: 'Karena besok akan pergi berwisata, malam ini saya mempersiapkan barang bawaan.' Pilihan lain menggunakan kata tersebut secara tidak tepat.",
    source: "ai",
    topic: "Travel",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "usage",
    question: "「説明する」を正しく使っている文はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["先生が新しい文法の使い方を詳しく説明してくれました。", "私は毎日犬の説明をします。", "このスープは説明していて美味しいです。", "彼は昨日、友達に説明をあげました。"],
    correct: 0,
    explanation: "「説明する」 berarti menjelaskan. Kalimat yang tepat: 'Guru menjelaskan cara penggunaan tata bahasa baru dengan rinci kepada siswa.' Pilihan lain tidak logis.",
    source: "ai",
    topic: "Education",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "usage",
    question: "「計画」を正しく使っている文はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["来年の夏休みに日本へ旅行する計画を立てています。", "昨日、友達と計画を飲みました。", "この部屋は計画で静かです。", "彼は毎日計画を走っています。"],
    correct: 0,
    explanation: "「計画」 berarti rencana. Kalimat yang tepat: 'Saya sedang menyusun rencana perjalanan ke Jepang untuk liburan musim panas tahun depan.' Pilihan lain salah menggunakan kata benda ini.",
    source: "ai",
    topic: "Travel",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "usage",
    question: "「安心する」を正しく使っている文はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["試験に無事合格したと聞いて、安心しました。", "この料理は安心な味がします。", "彼は安心そうに怒っています。", "私は昨日、安心を買いに行きました。"],
    correct: 0,
    explanation: "「安心する」 berarti merasa tenang/lega. Kalimat yang tepat: 'Saya merasa lega mendengar bahwa saya lulus ujian dengan selamat.' Pilihan lain menggunakan kata tersebut secara keliru.",
    source: "ai",
    topic: "Emotions",
    difficulty_level: 2,
    is_active: true
  },
  {
    level: "N4",
    section: "Vocabulary",
    type: "usage",
    question: "「習慣」を正しく使っている文はどれですか。",
    passage: null,
    highlight: null,
    audio_url: null,
    options: ["早起きは健康に良い習慣だと言われています。", "私は昨日、習慣を着て出かけました。", "この本は習慣が面白くて一晩で読みました。", "彼は英語の習慣を運転しています。"],
    correct: 0,
    explanation: "「習慣」 berarti kebiasaan. Kalimat yang tepat: 'Bangun pagi dikatakan sebagai kebiasaan baik untuk kesehatan.' Pilihan lain salah secara konteks.",
    source: "ai",
    topic: "Daily Life",
    difficulty_level: 2,
    is_active: true
  }
];

function run() {
  console.log('📖 Reading raw N4 Vocabulary questions...');
  const raw = fs.readFileSync(vocabJsonPath, 'utf8');
  const allQuestions = JSON.parse(raw);

  // Group by type
  const pools = {
    'kanji-read': allQuestions.filter(q => q.type === 'kanji-read'),
    'orthography': [...allQuestions.filter(q => q.type === 'orthography'), ...extraOrthography],
    'context': allQuestions.filter(q => q.type === 'context'),
    'paraphrase': allQuestions.filter(q => q.type === 'paraphrase'),
    'usage': [...allQuestions.filter(q => q.type === 'usage'), ...extraUsage]
  };

  console.log('Pool Sizes (with extras):');
  Object.entries(pools).forEach(([type, pool]) => {
    console.log(`  - ${type}: ${pool.length} items`);
  });

  const packages = [
    { name: 'mojigoiN4A', letter: 'A', file: 'mojigoiN4_A.ts' },
    { name: 'mojigoiN4B', letter: 'B', file: 'mojigoiN4_B.ts' },
    { name: 'mojigoiN4C', letter: 'C', file: 'mojigoiN4_C.ts' }
  ];

  const distribution = [
    { type: 'kanji-read', count: 9, mondai: 1 },
    { type: 'orthography', count: 6, mondai: 2 },
    { type: 'context', count: 10, mondai: 3 },
    { type: 'paraphrase', count: 5, mondai: 4 },
    { type: 'usage', count: 5, mondai: 5 }
  ];

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  packages.forEach((pkg, pkgIdx) => {
    console.log(`\n📦 Building Package ${pkg.letter}...`);
    const pkgQuestions = [];
    let absoluteNumber = 1;

    distribution.forEach(dist => {
      const pool = pools[dist.type];
      const startIdx = pkgIdx * dist.count;
      
      for (let i = 0; i < dist.count; i++) {
        const itemIdx = (startIdx + i) % pool.length;
        const q = pool[itemIdx];
        
        pkgQuestions.push({
          id: `mojigoi_n4_${pkg.letter.toLowerCase()}_m${dist.mondai}_q${String(i + 1).padStart(2, '0')}`,
          level: 'N4',
          section: 'Vocabulary',
          type: q.type,
          question: q.question,
          passage: q.passage || undefined,
          highlight: q.highlight || undefined,
          options: q.options,
          correct: q.correct,
          explanation: q.explanation || '',
          mondai: dist.mondai,
          number: absoluteNumber++
        });
      }
    });

    console.log(`   Total questions added: ${pkgQuestions.length}`);

    // Generate TS content
    let fileContent = '';
    if (pkg.letter === 'A') {
      fileContent += `export interface LegacyQuestion {
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

`;
    } else {
      fileContent += `import type { LegacyQuestion } from './mojigoiN4_A';\n\n`;
    }

    fileContent += `export const ${pkg.name}: LegacyQuestion[] = ${JSON.stringify(pkgQuestions, null, 2)};\n`;

    const outputPath = path.join(outputDir, pkg.file);
    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`✅ Saved ${outputPath}`);
  });

  console.log('\n🏁 Generation completed successfully!');
}

run();

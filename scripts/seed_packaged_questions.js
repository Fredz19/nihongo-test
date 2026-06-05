import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const __dirname = dirname(fileURLToPath(import.meta.url));

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Configuration for slicing counts
const CONFIG = {
  N5: {
    vocab: { file: 'n5_vocab.json', limit: 30, section: 'Vocabulary' },
    grammar: { file: 'n5_grammar.json', limit: 23, section: 'Grammar' },
    reading: { file: 'n5_reading.json', limit: 6, section: 'Reading' },
    listening: { file: 'n5_listening.json', limit: 24, section: 'Listening' },
    total: 83
  },
  N4: {
    vocab: { file: 'n4_vocab.json', limit: 35, section: 'Vocabulary' },
    grammar: { file: 'n4_grammar.json', limit: 25, section: 'Grammar' },
    reading: { file: 'n4_reading.json', limit: 7, section: 'Reading' },
    listening: { file: 'n4_listening.json', limit: 28, section: 'Listening' },
    total: 95
  }
};

const BATCH_SIZE = 50;

function loadQuestions(fileName) {
  const filePath = resolve(__dirname, 'data', fileName);
  try {
    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`❌ Error reading ${fileName}:`, err.message);
    process.exit(1);
  }
}

function getQuestionsForSection(sourceList, limit, packageIndex) {
  const result = [];
  const startIdx = packageIndex * limit;
  const total = sourceList.length;

  for (let i = 0; i < limit; i++) {
    const sourceIdx = (startIdx + i) % total;
    result.push({ ...sourceList[sourceIdx] });
  }
  return result;
}

// Extra N4 Orthography & Usage questions to balance pools
const extraOrthographyN4 = [
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

const extraUsageN4 = [
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

function getBalancedN4Vocab(vocabList, pkgIdx) {
  const pools = {
    'kanji-read': vocabList.filter(q => q.type === 'kanji-read'),
    'orthography': [...vocabList.filter(q => q.type === 'orthography'), ...extraOrthographyN4],
    'context': vocabList.filter(q => q.type === 'context'),
    'paraphrase': vocabList.filter(q => q.type === 'paraphrase'),
    'usage': [...vocabList.filter(q => q.type === 'usage'), ...extraUsageN4]
  };

  const distribution = [
    { type: 'kanji-read', count: 9 },
    { type: 'orthography', count: 6 },
    { type: 'context', count: 10 },
    { type: 'paraphrase', count: 5 },
    { type: 'usage', count: 5 }
  ];

  const result = [];
  distribution.forEach(dist => {
    const pool = pools[dist.type];
    const startIdx = pkgIdx * dist.count;
    for (let i = 0; i < dist.count; i++) {
      const itemIdx = (startIdx + i) % pool.length;
      result.push({ ...pool[itemIdx] });
    }
  });
  return result;
}

function mapQuestion(q, level, section, packageLetter, questionNumber) {
  let audio_url = q.audio_url || null;
  let image_url = q.image_url || null;

  if (section === 'Listening' || q.type === 'audio-listening') {
    if (q.track) {
      audio_url = `https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/${level}-Moshi/${level.toLowerCase()}_m1_track_${String(q.track).padStart(2, '0')}.mp3`;
    }
    if (q.imageKey) {
      image_url = `https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/${level}-Moshi/images/${q.imageKey}.png`;
    }
  }

  return {
    level,
    section,
    type: q.type,
    question: q.question,
    passage: q.passage || null,
    highlight: q.highlight || null,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation || null,
    audio_url,
    image_url,
    source: q.source || 'imported',
    topic: q.topic || null,
    difficulty_level: q.difficulty_level || 2,
    is_active: q.is_active !== undefined ? q.is_active : true,
    package: packageLetter,
    question_number: questionNumber
  };
}

async function run() {
  console.log('\n🚀 Starting Unified Packaged Questions Seeder...');
  console.log('==================================================');

  // 1. Delete all existing N4 and N5 questions in public.questions
  console.log('🗑️  Deleting existing N4 and N5 questions from database...');
  const { error: delErr } = await supabase
    .from('questions')
    .delete()
    .in('level', ['N4', 'N5']);

  if (delErr) {
    console.error('❌ Error clearing existing questions:', delErr.message);
    process.exit(1);
  }
  console.log('✅ Existing questions deleted successfully.');

  const allPayloads = [];

  // 2. Process levels
  for (const level of ['N5', 'N4']) {
    console.log(`\n📦 Processing Level ${level}...`);
    const cfg = CONFIG[level];

    // Load source files
    const vocabList = loadQuestions(cfg.vocab.file);
    const grammarList = loadQuestions(cfg.grammar.file);
    const readingList = loadQuestions(cfg.reading.file);
    const listeningList = loadQuestions(cfg.listening.file);

    console.log(`   Source question counts:`);
    console.log(`     - Vocab: ${vocabList.length}`);
    console.log(`     - Grammar: ${grammarList.length}`);
    console.log(`     - Reading: ${readingList.length}`);
    console.log(`     - Listening: ${listeningList.length}`);

    const packages = [
      { letter: 'A', index: 0 },
      { letter: 'B', index: 1 },
      { letter: 'C', index: 2 }
    ];

    for (const pkg of packages) {
      console.log(`   Preparing Package ${pkg.letter} (Try Out ${pkg.index + 1})...`);
      
      const vocabQs = level === 'N4'
        ? getBalancedN4Vocab(vocabList, pkg.index)
        : getQuestionsForSection(vocabList, cfg.vocab.limit, pkg.index);
      const grammarQs = getQuestionsForSection(grammarList, cfg.grammar.limit, pkg.index);
      const readingQs = getQuestionsForSection(readingList, cfg.reading.limit, pkg.index);
      const listeningQs = getQuestionsForSection(listeningList, cfg.listening.limit, pkg.index);

      let questionNumber = 1;

      // Map Vocab (Q1 - Q30/35)
      vocabQs.forEach(q => {
        allPayloads.push(mapQuestion(q, level, cfg.vocab.section, pkg.letter, questionNumber++));
      });

      // Map Grammar (Q31/36 - Q53/60)
      grammarQs.forEach(q => {
        allPayloads.push(mapQuestion(q, level, cfg.grammar.section, pkg.letter, questionNumber++));
      });

      // Map Reading (Q54/61 - Q59/67)
      readingQs.forEach(q => {
        allPayloads.push(mapQuestion(q, level, cfg.reading.section, pkg.letter, questionNumber++));
      });

      // Map Listening (Q60/68 - Q83/95)
      listeningQs.forEach(q => {
        allPayloads.push(mapQuestion(q, level, cfg.listening.section, pkg.letter, questionNumber++));
      });

      console.log(`     -> Total questions added for Package ${pkg.letter}: ${questionNumber - 1}`);
    }
  }

  // 3. Batch insert questions
  console.log(`\n☁️  Uploading ${allPayloads.length} packaged questions in batches of ${BATCH_SIZE}...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < allPayloads.length; i += BATCH_SIZE) {
    const batch = allPayloads.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(allPayloads.length / BATCH_SIZE);

    process.stdout.write(`   Batch ${batchNum}/${totalBatches} (${batch.length} questions)... `);

    const { error } = await supabase.from('questions').insert(batch);

    if (error) {
      console.log(`❌ ${error.message}`);
      failCount += batch.length;
    } else {
      console.log('✅');
      successCount += batch.length;
    }
  }

  console.log(`\n📊 Upload Summary:`);
  console.log(`   - Successfully inserted: ${successCount}`);
  console.log(`   - Failed:                ${failCount}`);

  if (failCount > 0) {
    console.error('❌ Seeding finished with errors.');
    process.exit(1);
  }

  // 4. Seed / update exam_templates
  console.log('\n⚙️  Seeding and updating exam_templates table...');

  // Delete existing templates to prevent unique violations or duplicates
  const { error: delTempErr } = await supabase
    .from('exam_templates')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

  if (delTempErr) {
    console.warn('⚠️  Could not clear exam templates:', delTempErr.message);
  }

  const templates = [
    // Standard Tests (Retain original tests)
    {
      level: 'N5',
      name: 'N5 Quick Test',
      slug: 'n5-quick',
      vocab_count: 15,
      grammar_count: 15,
      reading_count: 10,
      listening_count: 0,
      time_limit_sec: 40 * 60,
      is_active: true
    },
    {
      level: 'N5',
      name: 'N5 Full Test',
      slug: 'n5-full',
      vocab_count: 35,
      grammar_count: 35,
      reading_count: 30,
      listening_count: 0,
      time_limit_sec: 90 * 60,
      is_active: true
    },
    {
      level: 'N4',
      name: 'N4 Quick Test',
      slug: 'n4-quick',
      vocab_count: 15,
      grammar_count: 15,
      reading_count: 10,
      listening_count: 0,
      time_limit_sec: 50 * 60,
      is_active: true
    },
    {
      level: 'N4',
      name: 'N4 Full Test',
      slug: 'n4-full',
      vocab_count: 40,
      grammar_count: 40,
      reading_count: 35,
      listening_count: 0,
      time_limit_sec: 105 * 60,
      is_active: true
    },
    
    // N5 Try Out Packages (Try Out 1, 2, 3)
    {
      level: 'N5',
      name: 'N5 Try Out 1 (Paket A)',
      slug: 'n5-tryout-1',
      vocab_count: CONFIG.N5.vocab.limit,
      grammar_count: CONFIG.N5.grammar.limit,
      reading_count: CONFIG.N5.reading.limit,
      listening_count: CONFIG.N5.listening.limit,
      time_limit_sec: 105 * 60,
      is_active: true
    },
    {
      level: 'N5',
      name: 'N5 Try Out 2 (Paket B)',
      slug: 'n5-tryout-2',
      vocab_count: CONFIG.N5.vocab.limit,
      grammar_count: CONFIG.N5.grammar.limit,
      reading_count: CONFIG.N5.reading.limit,
      listening_count: CONFIG.N5.listening.limit,
      time_limit_sec: 105 * 60,
      is_active: true
    },
    {
      level: 'N5',
      name: 'N5 Try Out 3 (Paket C)',
      slug: 'n5-tryout-3',
      vocab_count: CONFIG.N5.vocab.limit,
      grammar_count: CONFIG.N5.grammar.limit,
      reading_count: CONFIG.N5.reading.limit,
      listening_count: CONFIG.N5.listening.limit,
      time_limit_sec: 105 * 60,
      is_active: true
    },

    // N4 Try Out Packages (Try Out 1, 2, 3)
    {
      level: 'N4',
      name: 'N4 Try Out 1 (Paket A)',
      slug: 'n4-tryout-1',
      vocab_count: CONFIG.N4.vocab.limit,
      grammar_count: CONFIG.N4.grammar.limit,
      reading_count: CONFIG.N4.reading.limit,
      listening_count: CONFIG.N4.listening.limit,
      time_limit_sec: 125 * 60,
      is_active: true
    },
    {
      level: 'N4',
      name: 'N4 Try Out 2 (Paket B)',
      slug: 'n4-tryout-2',
      vocab_count: CONFIG.N4.vocab.limit,
      grammar_count: CONFIG.N4.grammar.limit,
      reading_count: CONFIG.N4.reading.limit,
      listening_count: CONFIG.N4.listening.limit,
      time_limit_sec: 125 * 60,
      is_active: true
    },
    {
      level: 'N4',
      name: 'N4 Try Out 3 (Paket C)',
      slug: 'n4-tryout-3',
      vocab_count: CONFIG.N4.vocab.limit,
      grammar_count: CONFIG.N4.grammar.limit,
      reading_count: CONFIG.N4.reading.limit,
      listening_count: CONFIG.N4.listening.limit,
      time_limit_sec: 125 * 60,
      is_active: true
    }
  ];

  const { data: insertedTemplates, error: insTempErr } = await supabase
    .from('exam_templates')
    .insert(templates)
    .select();

  if (insTempErr) {
    console.error('❌ Error seeding exam templates:', insTempErr.message);
    process.exit(1);
  }

  console.log(`✅ Exam templates seeded successfully. Inserted ${insertedTemplates.length} entries.`);
  console.log('🏁 Unified Seeding Completed Successfully!\n');
}

run();

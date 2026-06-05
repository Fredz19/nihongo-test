import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { getBalancedN4Vocab } from './n4_mojigoi_helper.js';
import { getBalancedN4Bunpou } from './n4_bunpou_dokkai_helper.js';

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

    // Load N4 Bunpou/Dokkai audio mapping if level is N4
    let n4AudioMapping = {};
    if (level === 'N4') {
      try {
        const mappingPath = resolve(__dirname, 'data', 'n4_bunpou_dokkai_audio.json');
        n4AudioMapping = JSON.parse(readFileSync(mappingPath, 'utf-8'));
        console.log(`   Loaded N4 Bunpou/Dokkai audio mappings.`);
      } catch (err) {
        console.warn('   ⚠️ Could not load N4 Bunpou/Dokkai audio mapping:', err.message);
      }
    }

    for (const pkg of packages) {
      console.log(`   Preparing Package ${pkg.letter} (Try Out ${pkg.index + 1})...`);
      
      const vocabQs = level === 'N4'
        ? getBalancedN4Vocab(vocabList, pkg.index)
        : getQuestionsForSection(vocabList, cfg.vocab.limit, pkg.index);
      
      let grammarQs, readingQs;
      if (level === 'N4') {
        const allBunpouDokkai = getBalancedN4Bunpou(grammarList, readingList, pkg.index);
        grammarQs = allBunpouDokkai.filter(q => q.section === 'Grammar').map(q => ({
          ...q,
          audio_url: n4AudioMapping[q.id] || q.audio_url || null
        }));
        readingQs = allBunpouDokkai.filter(q => q.section === 'Reading').map(q => ({
          ...q,
          audio_url: n4AudioMapping[q.id] || q.audio_url || null
        }));
      } else {
        grammarQs = getQuestionsForSection(grammarList, cfg.grammar.limit, pkg.index);
        readingQs = getQuestionsForSection(readingList, cfg.reading.limit, pkg.index);
      }
      
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

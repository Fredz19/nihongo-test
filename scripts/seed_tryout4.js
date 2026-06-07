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

async function run() {
  console.log('\n🚀 Starting Try Out 4 N4 Seeding...');
  console.log('==================================================');

  // 1. Load questions from JSON
  const questionsPath = resolve(__dirname, 'data', 'tryout4_questions.json');
  let rawQuestions = [];
  try {
    rawQuestions = JSON.parse(readFileSync(questionsPath, 'utf-8'));
    console.log(`✅ Loaded ${rawQuestions.length} questions from JSON.`);
  } catch (err) {
    console.error('❌ Error reading tryout4_questions.json:', err.message);
    process.exit(1);
  }

  // 2. Delete existing Package D N4 questions (Idempotency)
  console.log('🗑️  Deleting existing N4 Package D questions from Supabase...');
  const { error: delErr } = await supabase
    .from('questions')
    .delete()
    .eq('level', 'N4')
    .eq('package', 'D');

  if (delErr) {
    console.error('❌ Error deleting existing questions:', delErr.message);
    process.exit(1);
  }
  console.log('✅ Deleted existing questions.');

  // 3. Delete existing exam template n4-tryout-4
  console.log('🗑️  Deleting existing exam template "n4-tryout-4"...');
  const { error: delTempErr } = await supabase
    .from('exam_templates')
    .delete()
    .eq('slug', 'n4-tryout-4');

  if (delTempErr) {
    console.warn('⚠️  Could not delete exam template:', delTempErr.message);
  }
  console.log('✅ Deleted existing template.');

  // 4. Map questions with levels, package letter, and correct question numbers
  let vocabNum = 1;
  let grammarNum = 36;
  let readingNum = 61;

  const payloads = rawQuestions.map(q => {
    let question_number = 0;
    if (q.section === 'Vocabulary') {
      question_number = vocabNum++;
    } else if (q.section === 'Grammar') {
      question_number = grammarNum++;
    } else if (q.section === 'Reading') {
      question_number = readingNum++;
    }

    return {
      level: 'N4',
      section: q.section,
      type: q.type,
      question: q.question,
      passage: q.passage || null,
      highlight: q.highlight || null,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation || null,
      audio_url: null,
      image_url: null,
      source: 'imported',
      topic: null,
      difficulty_level: 2,
      is_active: true,
      package: 'D',
      question_number
    };
  });

  // 5. Batch insert questions
  const BATCH_SIZE = 50;
  console.log(`☁️  Uploading ${payloads.length} questions in batches...`);
  
  for (let i = 0; i < payloads.length; i += BATCH_SIZE) {
    const batch = payloads.slice(i, i + BATCH_SIZE);
    const { error: insErr } = await supabase.from('questions').insert(batch);
    if (insErr) {
      console.error(`❌ Failed to insert batch starting at index ${i}:`, insErr.message);
      process.exit(1);
    }
  }
  console.log('✅ All questions inserted successfully.');

  // 6. Insert new exam template n4-tryout-4
  console.log('⚙️  Creating new exam template "n4-tryout-4"...');
  const template = {
    level: 'N4',
    name: 'N4 Try Out 4 (Paket D)',
    slug: 'n4-tryout-4',
    vocab_count: 35,
    grammar_count: 25,
    reading_count: 10,
    listening_count: 0,
    time_limit_sec: 80 * 60, // 80 minutes
    is_active: true
  };

  const { error: insTempErr } = await supabase
    .from('exam_templates')
    .insert(template);

  if (insTempErr) {
    console.error('❌ Error creating exam template:', insTempErr.message);
    process.exit(1);
  }

  console.log('✅ Exam template "n4-tryout-4" created successfully.');
  console.log('🏁 Try Out 4 N4 Seeding completed successfully!\n');
}

run();

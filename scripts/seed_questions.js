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

const BATCH_SIZE = 50;

// Which level to seed: pass 'n5' or 'n4' as CLI arg, or 'all'
const targetLevel = (process.argv[2] || 'all').toLowerCase();

const FILE_MAP = {
  n5: [
    { file: 'n5_vocab.json',   label: 'N5 Vocabulary' },
    { file: 'n5_grammar.json', label: 'N5 Grammar' },
    { file: 'n5_reading.json', label: 'N5 Reading' },
  ],
  n4: [
    { file: 'n4_vocab.json',   label: 'N4 Vocabulary' },
    { file: 'n4_grammar.json', label: 'N4 Grammar' },
    { file: 'n4_reading.json', label: 'N4 Reading' },
  ],
};

function getFiles() {
  if (targetLevel === 'all') return [...FILE_MAP.n5, ...FILE_MAP.n4];
  if (FILE_MAP[targetLevel]) return FILE_MAP[targetLevel];
  console.error(`❌ Unknown level: "${targetLevel}". Use n5, n4, or all.`);
  process.exit(1);
}

async function seedFile({ file, label }) {
  const filePath = resolve(__dirname, 'data', file);
  console.log(`\n📂 Loading ${label} from ${file}...`);

  let questions;
  try {
    const raw = readFileSync(filePath, 'utf-8');
    questions = JSON.parse(raw);
  } catch (err) {
    console.error(`  ❌ Cannot read ${file}: ${err.message}`);
    return { success: 0, failed: 0, total: 0 };
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    console.warn(`  ⚠️  No questions found in ${file}`);
    return { success: 0, failed: 0, total: 0 };
  }

  // Determine level+section from first item for targeted delete
  const { level, section } = questions[0];
  if (level && section) {
    const { error: delErr } = await supabase
      .from('questions')
      .delete()
      .eq('level', level)
      .eq('section', section);
    if (delErr) {
      console.warn(`  ⚠️  Could not clear old ${label} questions: ${delErr.message}`);
    } else {
      console.log(`  🗑️  Cleared existing ${label} questions.`);
    }
  }

  let successCount = 0;
  let failCount = 0;
  const total = questions.length;

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = questions.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(total / BATCH_SIZE);

    process.stdout.write(
      `  Batch ${batchNum}/${totalBatches} (${batch.length} soal)... `
    );

    const { error } = await supabase.from('questions').insert(batch);

    if (error) {
      console.log(`❌ ${error.message}`);
      failCount += batch.length;
    } else {
      console.log(`✅`);
      successCount += batch.length;
    }
  }

  console.log(`  📊 ${label}: ${successCount}/${total} berhasil, ${failCount} gagal.`);
  return { success: successCount, failed: failCount, total };
}

async function run() {
  console.log('\n🚀 JLPT Question Seeder');
  console.log(`   Target: ${targetLevel.toUpperCase()}`);
  console.log('='.repeat(50));

  const files = getFiles();
  let totalSuccess = 0;
  let totalFailed = 0;
  let totalQuestions = 0;

  for (const fileConfig of files) {
    const { success, failed, total } = await seedFile(fileConfig);
    totalSuccess += success;
    totalFailed += failed;
    totalQuestions += total;
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Total soal: ${totalQuestions}`);
  console.log(`   Berhasil:   ${totalSuccess}`);
  console.log(`   Gagal:      ${totalFailed}`);
  console.log('='.repeat(50));

  if (totalFailed === 0) {
    console.log('\n🎉 Seeding selesai tanpa error!\n');
  } else {
    console.log('\n⚠️  Seeding selesai dengan beberapa error. Cek log di atas.\n');
  }
}

run();

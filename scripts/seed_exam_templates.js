import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

const TEMPLATES = [
  {
    level: 'N5',
    name: 'N5 Quick Test',
    slug: 'n5-quick',
    vocab_count: 15,
    grammar_count: 15,
    reading_count: 10,
    listening_count: 0,
    time_limit_sec: 40 * 60,
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
  },
];

async function run() {
  console.log('\n🚀 Seeding exam_templates...\n');

  // Delete existing
  const { error: delErr } = await supabase
    .from('exam_templates')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // delete all

  if (delErr) {
    console.warn('⚠️  Could not clear existing templates:', delErr.message);
  }

  // Insert
  const { data, error } = await supabase
    .from('exam_templates')
    .insert(TEMPLATES)
    .select();

  if (error) {
    console.error('❌ Error inserting templates:', error.message);
    process.exit(1);
  }

  console.log(`✅ Berhasil memasukkan ${data.length} exam templates:\n`);
  data.forEach(t => {
    console.log(
      `  [${t.level}] ${t.name} (${t.slug}) — ` +
      `V:${t.vocab_count} G:${t.grammar_count} R:${t.reading_count} L:${t.listening_count} ` +
      `| ${t.time_limit_sec / 60} menit`
    );
  });
  console.log('\n✅ Selesai!\n');
}

run();

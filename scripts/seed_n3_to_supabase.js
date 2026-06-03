import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const SUPABASE_DIR = path.resolve(__dirname, '..', 'supabase');

function parseSqlInserts(sqlContent) {
  // Extract all VALUES rows from the INSERT statement
  const rows = [];
  // Match each (...) value tuple
  const regex = /\(([^()]+)\)/g;
  let match;
  // Skip the INSERT INTO line — start matching value tuples
  // We'll split on the VALUES keyword first
  const afterValues = sqlContent.split(/VALUES\s*/i)[1];
  if (!afterValues) return rows;

  const rowRegex = /\('([^']*(?:''[^']*)*)'(?:\s*,\s*(?:'([^']*(?:''[^']*)*)'|NULL))+\)/g;
  let m;
  while ((m = rowRegex.exec(afterValues)) !== null) {
    rows.push(m[0]);
  }
  return rows;
}

function unescapeSql(str) {
  if (!str || str === 'NULL') return null;
  // Remove surrounding quotes and unescape ''
  return str.replace(/^'|'$/g, '').replace(/''/g, "'");
}

function parseVocabRow(rowStr) {
  // Parse: ('id', 'level', kanji_or_NULL, 'kana', 'romaji', 'meaning', 'type')
  // Use a proper parser for SQL values
  const inner = rowStr.slice(1, -1); // remove ( and )
  const values = [];
  let i = 0;
  while (i < inner.length) {
    if (inner[i] === ' ' || inner[i] === ',') { i++; continue; }
    if (inner[i] === "'") {
      // Quoted string
      let j = i + 1;
      let str = '';
      while (j < inner.length) {
        if (inner[j] === "'" && inner[j+1] === "'") { str += "'"; j += 2; }
        else if (inner[j] === "'") { j++; break; }
        else { str += inner[j]; j++; }
      }
      values.push(str);
      i = j;
    } else if (inner.slice(i, i + 4) === 'NULL') {
      values.push(null);
      i += 4;
    } else {
      i++;
    }
  }
  return values;
}

async function importVocabularies() {
  const sqlPath = path.join(SUPABASE_DIR, 'seed_n3_vocabularies.sql');
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');

  console.log('📥 Parsing vocabulary SQL...');

  // Split into individual value rows
  const afterValues = sqlContent.split(/VALUES\n/i)[1];
  if (!afterValues) { console.error('No VALUES found'); return 0; }

  // Each row is on its own line: ('...', 'N3', ...)
  const lines = afterValues.split('\n').map(l => l.trim()).filter(l => l.startsWith('('));
  
  console.log(`   Found ${lines.length} vocabulary rows to import`);
  
  const BATCH = 100;
  let total = 0;
  let failed = 0;

  for (let i = 0; i < lines.length; i += BATCH) {
    const batch = lines.slice(i, i + BATCH);
    const records = batch.map(row => {
      // Remove trailing comma if present
      const clean = row.endsWith(',') ? row.slice(0, -1) : row;
      const values = parseVocabRow(clean);
      if (values.length < 7) return null;
      return {
        id: values[0],
        level: values[1],
        kanji: values[2],
        kana: values[3],
        romaji: values[4],
        meaning: values[5],
        type: values[6],
      };
    }).filter(Boolean);

    const { error } = await supabase
      .from('vocabularies')
      .upsert(records, { onConflict: 'id' });

    if (error) {
      console.error(`   ❌ Batch ${Math.floor(i/BATCH)+1} error:`, error.message);
      failed += batch.length;
    } else {
      total += records.length;
      process.stdout.write(`\r   ✅ Imported: ${total} / ${lines.length}`);
    }
  }
  console.log(`\n   Done: ${total} vocabularies imported, ${failed} failed`);
  return total;
}

async function importExamples() {
  const sqlPath = path.join(SUPABASE_DIR, 'seed_n3_examples.sql');
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');

  console.log('\n📥 Parsing examples SQL...');

  const afterValues = sqlContent.split(/VALUES\n/i)[1];
  if (!afterValues) { console.error('No VALUES found'); return 0; }

  const lines = afterValues.split('\n').map(l => l.trim()).filter(l => l.startsWith('('));
  
  console.log(`   Found ${lines.length} example rows to import`);

  const BATCH = 100;
  let total = 0;
  let failed = 0;

  for (let i = 0; i < lines.length; i += BATCH) {
    const batch = lines.slice(i, i + BATCH);
    const records = batch.map(row => {
      const clean = row.endsWith(',') ? row.slice(0, -1) : row;
      const values = parseVocabRow(clean);
      if (values.length < 5) return null;
      return {
        id: values[0],
        vocab_id: values[1],
        japanese: values[2],
        reading: values[3],
        translation: values[4],
      };
    }).filter(Boolean);

    const { error } = await supabase
      .from('vocabulary_examples')
      .upsert(records, { onConflict: 'id' });

    if (error) {
      console.error(`   ❌ Batch ${Math.floor(i/BATCH)+1} error:`, error.message);
      failed += batch.length;
    } else {
      total += records.length;
      process.stdout.write(`\r   ✅ Imported: ${total} / ${lines.length}`);
    }
  }
  console.log(`\n   Done: ${total} examples imported, ${failed} failed`);
  return total;
}

async function verifyImport() {
  const { count, error } = await supabase
    .from('vocabularies')
    .select('*', { count: 'exact', head: true })
    .eq('level', 'N3');

  if (error) { console.error('Verification error:', error.message); return; }
  console.log(`\n🔍 Verifikasi Supabase: total N3 vocabularies = ${count}`);
}

async function run() {
  console.log('\n══════════════════════════════════════════════════');
  console.log('  📤  N3 Vocabulary Supabase Importer');
  console.log('══════════════════════════════════════════════════\n');

  await importVocabularies();
  await importExamples();
  await verifyImport();

  console.log('\n══════════════════════════════════════════════════');
  console.log('  ✅  Import Selesai!');
  console.log('  📌  Langkah selanjutnya: node scripts/generate_n3_tts.js');
  console.log('══════════════════════════════════════════════════\n');
}

run();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─────────────────────────────────────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────────────────────────────────────
const DATA_DIR = path.join(__dirname, 'data');
const SUPABASE_DIR = path.resolve(__dirname, '..', 'supabase');

const RAW_FILES = [
  'n3_verbs_raw.txt',
  'n3_nouns1_raw.txt',
  'n3_nouns2_raw.txt',
  'n3_adjectives_raw.txt',
  'n3_adverbs_raw.txt',
  'n3_extra_raw.txt',
];

// ─────────────────────────────────────────────────────────────────────────────
// Parser
// ─────────────────────────────────────────────────────────────────────────────
function parseRawFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const entries = [];

  for (const line of lines) {
    const parts = line.split('|');
    if (parts.length < 8) {
      console.warn(`  ⚠️  Baris tidak lengkap (${parts.length} kolom), dilewati: "${line.substring(0, 60)}..."`);
      continue;
    }
    let [kanji, kana, romaji, meaning, type, exampleJap, exampleRead, exampleTrans] = parts;
    // Auto-fix: katakana words often have kana left empty by generators
    // If kanji is all katakana/hiragana and kana is empty, copy kanji to kana
    if ((!kana || kana.trim() === '') && kanji && kanji.trim() !== '') {
      kana = kanji.trim();
    }
    if (!kana || !romaji || !meaning || !type) {
      console.warn(`  ⚠️  Data wajib kosong, dilewati: "${line.substring(0, 60)}..."`);
      continue;
    }
    entries.push({
      kanji: kanji.trim() || null,
      kana: kana.trim(),
      romaji: romaji.trim(),
      meaning: meaning.trim(),
      type: type.trim(),
      example: {
        japanese: exampleJap ? exampleJap.trim() : '',
        reading: exampleRead ? exampleRead.trim() : '',
        translation: exampleTrans ? exampleTrans.trim() : '',
      },
    });
  }
  return entries;
}

// ─────────────────────────────────────────────────────────────────────────────
// Deduplication
// ─────────────────────────────────────────────────────────────────────────────
function deduplicateEntries(entries) {
  const seen = new Set();
  const unique = [];
  let dupCount = 0;

  for (const entry of entries) {
    // Use kana as dedup key (most reliable)
    const key = entry.kana.toLowerCase();
    if (seen.has(key)) {
      dupCount++;
      continue;
    }
    seen.add(key);
    unique.push(entry);
  }

  if (dupCount > 0) {
    console.log(`  🔁 Duplikasi dihapus: ${dupCount} entri`);
  }
  return unique;
}

// ─────────────────────────────────────────────────────────────────────────────
// SQL Helpers
// ─────────────────────────────────────────────────────────────────────────────
function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  // Escape single quotes
  return `'${String(str).replace(/'/g, "''")}'`;
}

// ─────────────────────────────────────────────────────────────────────────────
// SQL Generators
// ─────────────────────────────────────────────────────────────────────────────
function generateVocabSql(vocabList) {
  let sql = `-- ============================================================\n`;
  sql += `-- Seed data for N3 Vocabularies\n`;
  sql += `-- Total: ${vocabList.length} entries\n`;
  sql += `-- Generated: ${new Date().toISOString()}\n`;
  sql += `-- ============================================================\n\n`;

  sql += `INSERT INTO public.vocabularies (id, level, kanji, kana, romaji, meaning, type) VALUES\n`;

  const valueLines = vocabList.map((vocab, index) => {
    const id = `v_n3_auto_${index + 1}`;
    const kanjiVal = vocab.kanji ? escapeSql(vocab.kanji) : 'NULL';
    const kanaVal = escapeSql(vocab.kana);
    const romajiVal = escapeSql(vocab.romaji);
    const meaningVal = escapeSql(vocab.meaning);
    const typeVal = escapeSql(vocab.type);
    return `('${id}', 'N3', ${kanjiVal}, ${kanaVal}, ${romajiVal}, ${meaningVal}, ${typeVal})`;
  });

  sql += valueLines.join(',\n') + '\nON CONFLICT (id) DO NOTHING;\n';
  return sql;
}

function generateExamplesSql(vocabList) {
  let sql = `-- ============================================================\n`;
  sql += `-- Seed data for N3 Vocabulary Examples\n`;
  sql += `-- Total: ${vocabList.length} entries\n`;
  sql += `-- Generated: ${new Date().toISOString()}\n`;
  sql += `-- ============================================================\n\n`;

  sql += `INSERT INTO public.vocabulary_examples (id, vocab_id, japanese, reading, translation) VALUES\n`;

  const valueLines = vocabList.map((vocab, index) => {
    const exId = `ex_n3_auto_${index + 1}`;
    const vocabId = `v_n3_auto_${index + 1}`;
    const japVal = escapeSql(vocab.example.japanese);
    const readVal = escapeSql(vocab.example.reading);
    const transVal = escapeSql(vocab.example.translation);
    return `('${exId}', '${vocabId}', ${japVal}, ${readVal}, ${transVal})`;
  });

  sql += valueLines.join(',\n') + '\nON CONFLICT (id) DO NOTHING;\n';
  return sql;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────
function run() {
  console.log('\n══════════════════════════════════════════════════');
  console.log('  📚  N3 Vocabulary SQL Generator');
  console.log('══════════════════════════════════════════════════\n');

  // 1. Read & parse all raw files
  let allEntries = [];
  for (const fileName of RAW_FILES) {
    const filePath = path.join(DATA_DIR, fileName);
    if (!fs.existsSync(filePath)) {
      console.warn(`  ⚠️  File tidak ditemukan: ${filePath}`);
      continue;
    }
    const entries = parseRawFile(filePath);
    console.log(`  📄 ${fileName}: ${entries.length} entri`);
    allEntries = allEntries.concat(entries);
  }

  console.log(`\n  📊 Total sebelum dedup: ${allEntries.length} entri`);

  // 2. Deduplicate
  const vocabList = deduplicateEntries(allEntries);
  console.log(`  ✅ Total setelah dedup: ${vocabList.length} entri\n`);

  // 3. Generate SQL
  const vocabSql = generateVocabSql(vocabList);
  const examplesSql = generateExamplesSql(vocabList);

  // 4. Write files
  if (!fs.existsSync(SUPABASE_DIR)) {
    fs.mkdirSync(SUPABASE_DIR, { recursive: true });
  }

  const vocabPath = path.join(SUPABASE_DIR, 'seed_n3_vocabularies.sql');
  const examplesPath = path.join(SUPABASE_DIR, 'seed_n3_examples.sql');

  fs.writeFileSync(vocabPath, vocabSql, 'utf-8');
  fs.writeFileSync(examplesPath, examplesSql, 'utf-8');

  console.log('══════════════════════════════════════════════════');
  console.log('  ✅  SQL Seed Files Berhasil Dibuat!');
  console.log('══════════════════════════════════════════════════');
  console.log(`  📁 ${path.basename(vocabPath)}   → ${vocabList.length} vocabularies`);
  console.log(`  📁 ${path.basename(examplesPath)} → ${vocabList.length} examples`);
  console.log(`\n  💾 Lokasi: ${SUPABASE_DIR}`);
  console.log('══════════════════════════════════════════════════\n');
  console.log('  📌 Langkah selanjutnya:');
  console.log('     1. Import seed_n3_vocabularies.sql ke Supabase');
  console.log('     2. Import seed_n3_examples.sql ke Supabase');
  console.log('     3. Jalankan: node scripts/generate_n3_tts.js');
  console.log('══════════════════════════════════════════════════\n');
}

run();

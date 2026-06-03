import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPABASE_DIR = path.resolve(__dirname, '..', 'supabase');
const vocabPath = path.join(SUPABASE_DIR, 'seed_n3_vocabularies.sql');
const examplesPath = path.join(SUPABASE_DIR, 'seed_n3_examples.sql');

const extraVocabPath = path.join(SUPABASE_DIR, 'seed_n3_extra_vocabularies.sql');
const extraExamplesPath = path.join(SUPABASE_DIR, 'seed_n3_extra_examples.sql');

function extractExtraSql(inputPath, outputPath, idPrefix, startIdNum) {
  const content = fs.readFileSync(inputPath, 'utf-8');
  // Find lines matching ('v_n3_auto_X' ... or ('ex_n3_auto_X' ...
  // We want IDs from startIdNum onwards.
  const lines = content.split('\n');
  const values = [];
  
  let header = '';
  let inInsert = false;
  
  for (const line of lines) {
    if (line.startsWith('INSERT INTO')) {
      header = line;
      inInsert = true;
      continue;
    }
    if (inInsert) {
      if (line.trim().startsWith('(')) {
        // Extract ID number
        const match = line.match(/'v_n3_auto_(\d+)'|'ex_n3_auto_(\d+)'/);
        if (match) {
          const idNum = parseInt(match[1] || match[2], 10);
          if (idNum >= startIdNum) {
            // Clean up trailing comma if it's there
            let cleanLine = line.trim();
            if (cleanLine.endsWith(',')) {
              cleanLine = cleanLine.slice(0, -1);
            }
            if (cleanLine.endsWith(')')) {
              // Standard line
            }
            values.push(cleanLine);
          }
        }
      }
    }
  }
  
  if (values.length > 0) {
    let sql = `-- ============================================================\n`;
    sql += `-- Extra N3 seed data (IDs >= ${startIdNum})\n`;
    sql += `-- Total: ${values.length} entries\n`;
    sql += `-- ============================================================\n\n`;
    sql += header + '\n';
    sql += values.join(',\n') + '\nON CONFLICT (id) DO NOTHING;\n';
    fs.writeFileSync(outputPath, sql, 'utf-8');
    console.log(`✅ Saved ${values.length} rows to ${path.basename(outputPath)}`);
  } else {
    console.log(`⚠️ No rows found matching criteria in ${path.basename(inputPath)}`);
  }
}

console.log('Generating extra SQL files...');
extractExtraSql(vocabPath, extraVocabPath, 'v_n3_auto_', 1726);
extractExtraSql(examplesPath, extraExamplesPath, 'ex_n3_auto_', 1726);

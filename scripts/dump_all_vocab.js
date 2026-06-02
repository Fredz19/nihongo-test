import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function fetchAllVocab() {
  console.log('Fetching vocabularies from Supabase...');
  
  // Fetch N5
  let n5Vocabs = [];
  let from = 0;
  let step = 200;
  let hasMore = true;
  
  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('*')
      .eq('level', 'N5')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
      
    if (error) {
      console.error('Error fetching N5:', error);
      break;
    }
    
    if (data.length === 0) {
      hasMore = false;
    } else {
      n5Vocabs = n5Vocabs.concat(data);
      from += step;
      if (data.length < step) {
        hasMore = false;
      }
    }
  }
  
  // Fetch N4
  let n4Vocabs = [];
  from = 0;
  hasMore = true;
  
  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('*')
      .eq('level', 'N4')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
      
    if (error) {
      console.error('Error fetching N4:', error);
      break;
    }
    
    if (data.length === 0) {
      hasMore = false;
    } else {
      n4Vocabs = n4Vocabs.concat(data);
      from += step;
      if (data.length < step) {
        hasMore = false;
      }
    }
  }
  
  console.log(`Successfully fetched N5: ${n5Vocabs.length} words.`);
  console.log(`Successfully fetched N4: ${n4Vocabs.length} words.`);
  
  return { n5: n5Vocabs, n4: n4Vocabs };
}

async function run() {
  try {
    const { n5, n4 } = await fetchAllVocab();
    
    // 1. Generate text lists optimized for ElevenLabs copy-paste (Japanese characters only, or with hiragana)
    // ElevenLabs reads text aloud. Typically, it reads Japanese best when given Kanji (if pronunciation is clear)
    // or Hiragana/Katakana. Let's provide a list of kanji/kana.
    // We'll generate:
    // - N5_kanji_kana.txt: "Kanji / Kana" format
    // - N5_only_japanese.txt: "Kanji" if exists, else "Kana" (best for ElevenLabs to speak)
    // - N5_kana_only.txt: "Kana" only
    // - And same for N4
    
    const outputDir = path.join(__dirname, '..', 'extracted_vocab');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Process N5
    const n5List = n5.map(v => {
      const displayWord = v.kanji || v.kana;
      return `${displayWord} (${v.kana}) - ${v.meaning}`;
    }).join('\n');
    
    const n5ForElevenLabs = n5.map(v => {
      // If there is kanji, we might want to feed the kanji to ElevenLabs, but sometimes kanji has multiple readings.
      // Providing hiragana is the most deterministic way to get ElevenLabs to pronounce it correctly!
      // Let's provide the exact hiragana/katakana representation for ElevenLabs.
      return v.kana;
    }).join('\n');

    const n5KanjiForElevenLabs = n5.map(v => {
      return v.kanji || v.kana;
    }).join('\n');

    // Process N4
    const n4List = n4.map(v => {
      const displayWord = v.kanji || v.kana;
      return `${displayWord} (${v.kana}) - ${v.meaning}`;
    }).join('\n');
    
    const n4ForElevenLabs = n4.map(v => {
      return v.kana;
    }).join('\n');

    const n4KanjiForElevenLabs = n4.map(v => {
      return v.kanji || v.kana;
    }).join('\n');
    
    // Write files
    fs.writeFileSync(path.join(outputDir, 'N5_vocabulary_all.txt'), n5List, 'utf-8');
    fs.writeFileSync(path.join(outputDir, 'N5_kana_only.txt'), n5ForElevenLabs, 'utf-8');
    fs.writeFileSync(path.join(outputDir, 'N5_kanji_or_kana.txt'), n5KanjiForElevenLabs, 'utf-8');
    
    fs.writeFileSync(path.join(outputDir, 'N4_vocabulary_all.txt'), n4List, 'utf-8');
    fs.writeFileSync(path.join(outputDir, 'N4_kana_only.txt'), n4ForElevenLabs, 'utf-8');
    fs.writeFileSync(path.join(outputDir, 'N4_kanji_or_kana.txt'), n4KanjiForElevenLabs, 'utf-8');
    
    // Also let's create a beautiful HTML/Markdown index for the user to view in the workspace
    let mdContent = `# JLPT Vocabulary Dashboard Dump\n\n`;
    mdContent += `Dokumen ini berisi daftar lengkap kosakata dari database dashboard.\n`;
    mdContent += `Telah diekstrak file teks khusus di folder \`extracted_vocab\` untuk memudahkan copy-paste ke ElevenLabs:\n`;
    mdContent += `- **[extracted_vocab/N5_kana_only.txt](file:///${path.join(outputDir, 'N5_kana_only.txt').replace(/\\/g, '/')})** (Hiragana/Katakana saja - paling akurat untuk ElevenLabs agar tidak salah baca kanji)\n`;
    mdContent += `- **[extracted_vocab/N5_kanji_or_kana.txt](file:///${path.join(outputDir, 'N5_kanji_or_kana.txt').replace(/\\/g, '/')})** (Kanji jika ada, atau Kana jika tidak ada)\n`;
    mdContent += `- **[extracted_vocab/N5_vocabulary_all.txt](file:///${path.join(outputDir, 'N5_vocabulary_all.txt').replace(/\\/g, '/')})** (Daftar lengkap: Kanji/Kana + Arti)\n\n`;
    mdContent += `- **[extracted_vocab/N4_kana_only.txt](file:///${path.join(outputDir, 'N4_kana_only.txt').replace(/\\/g, '/')})** (Hiragana/Katakana saja)\n`;
    mdContent += `- **[extracted_vocab/N4_kanji_or_kana.txt](file:///${path.join(outputDir, 'N4_kanji_or_kana.txt').replace(/\\/g, '/')})** (Kanji jika ada, atau Kana jika tidak ada)\n`;
    mdContent += `- **[extracted_vocab/N4_vocabulary_all.txt](file:///${path.join(outputDir, 'N4_vocabulary_all.txt').replace(/\\/g, '/')})** (Daftar lengkap: Kanji/Kana + Arti)\n\n`;
    
    mdContent += `## Daftar Kosakata N5 (${n5.length} kata)\n\n`;
    mdContent += `| No | Kanji | Kana | Romaji | Jenis | Arti |\n`;
    mdContent += `|---|---|---|---|---|---|\n`;
    n5.forEach((v, index) => {
      mdContent += `| ${index + 1} | ${v.kanji || '-'} | ${v.kana} | ${v.romaji} | ${v.type} | ${v.meaning} |\n`;
    });
    
    mdContent += `\n## Daftar Kosakata N4 (${n4.length} kata)\n\n`;
    mdContent += `| No | Kanji | Kana | Romaji | Jenis | Arti |\n`;
    mdContent += `|---|---|---|---|---|---|\n`;
    n4.forEach((v, index) => {
      mdContent += `| ${index + 1} | ${v.kanji || '-'} | ${v.kana} | ${v.romaji} | ${v.type} | ${v.meaning} |\n`;
    });
    
    fs.writeFileSync(path.join(__dirname, '..', 'daftar_kosakata_lengkap.md'), mdContent, 'utf-8');
    
    console.log('Done generating text files!');
  } catch (error) {
    console.error('Run failed:', error);
  }
}

run();

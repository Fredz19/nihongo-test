import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getBalancedN4Vocab } from './n4_mojigoi_helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const vocabJsonPath = path.resolve(__dirname, 'data', 'n4_vocab.json');
const outputDir = path.resolve(__dirname, '..', 'src', 'data', 'mojigoiN4');

function run() {
  console.log('📖 Reading raw N4 Vocabulary questions...');
  const raw = fs.readFileSync(vocabJsonPath, 'utf8');
  const allQuestions = JSON.parse(raw);

  const packages = [
    { name: 'mojigoiN4A', letter: 'A', file: 'mojigoiN4_A.ts' },
    { name: 'mojigoiN4B', letter: 'B', file: 'mojigoiN4_B.ts' },
    { name: 'mojigoiN4C', letter: 'C', file: 'mojigoiN4_C.ts' }
  ];

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  packages.forEach((pkg, pkgIdx) => {
    console.log(`\n📦 Building Package ${pkg.letter}...`);
    
    // Use the balanced question compiler from the helper
    const rawQuestions = getBalancedN4Vocab(allQuestions, pkgIdx);
    const pkgQuestions = rawQuestions.map(q => {
      const cleanQ = {
        id: q.id,
        level: q.level,
        section: q.section,
        type: q.type,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation || '',
        mondai: q.mondai,
        number: q.number
      };
      if (q.passage) cleanQ.passage = q.passage;
      if (q.highlight) cleanQ.highlight = q.highlight;
      if (q.audio_url || q.audioUrl) cleanQ.audioUrl = q.audio_url || q.audioUrl;
      if (q.image_url || q.imageUrl) cleanQ.imageUrl = q.image_url || q.imageUrl;
      return cleanQ;
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

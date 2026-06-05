import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getBalancedN4Bunpou } from './n4_bunpou_dokkai_helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data', 'bunpouDokkaiN4');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function loadQuestions(fileName) {
  const filePath = path.resolve(__dirname, 'data', fileName);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

function generateTSContent(variableName, questions) {
  return `export interface LegacyQuestion {
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

export const ${variableName}: LegacyQuestion[] = ${JSON.stringify(questions, null, 2)};
`;
}

function run() {
  console.log('📝 Compiling N4 Bunpou & Dokkai TypeScript Files...');
  console.log('==================================================');

  // Load database source files
  const grammarList = loadQuestions('n4_grammar.json');
  const readingList = loadQuestions('n4_reading.json');

  // Load TTS audio mapping
  const audioMappingPath = path.join(DATA_DIR, 'n4_bunpou_dokkai_audio.json');
  let audioMapping = {};
  if (fs.existsSync(audioMappingPath)) {
    try {
      audioMapping = JSON.parse(fs.readFileSync(audioMappingPath, 'utf-8'));
      console.log(`✅ Loaded ${Object.keys(audioMapping).length} TTS audio mappings.`);
    } catch (err) {
      console.warn('⚠️ Could not parse audio mapping file:', err.message);
    }
  } else {
    console.warn('⚠️ Audio mapping file not found. Questions will have no audioUrl.');
  }

  const packages = [
    { letter: 'A', varName: 'bunpouDokkaiN4A', index: 0 },
    { letter: 'B', varName: 'bunpouDokkaiN4B', index: 1 },
    { letter: 'C', varName: 'bunpouDokkaiN4C', index: 2 }
  ];

  packages.forEach(pkg => {
    console.log(`   Compiling Package ${pkg.letter}...`);
    const questions = getBalancedN4Bunpou(grammarList, readingList, pkg.index);

    // Map audioUrl and clean database-specific keys
    const mappedQuestions = questions.map(q => {
      const audioUrl = audioMapping[q.id] || undefined;
      return {
        id: q.id,
        level: q.level,
        section: q.section,
        type: q.type,
        question: q.question,
        passage: q.passage || undefined,
        highlight: q.highlight || undefined,
        audioUrl: audioUrl || undefined,
        imageUrl: q.imageUrl || q.image_url || undefined,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation,
        mondai: q.mondai,
        number: q.number
      };
    });

    const fileContent = generateTSContent(pkg.varName, mappedQuestions);
    const outputPath = path.join(OUTPUT_DIR, `bunpouDokkaiN4_${pkg.letter}.ts`);
    
    fs.writeFileSync(outputPath, fileContent, 'utf-8');
    console.log(`     Saved to ${outputPath} (${mappedQuestions.length} questions).`);
  });

  console.log('\n🎉 All N4 Bunpou & Dokkai TS files compiled successfully.');
}

run();

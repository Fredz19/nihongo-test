import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'bunpouDokkai');
const files = ['bunpouDokkaiN5_A.ts', 'bunpouDokkaiN5_B.ts', 'bunpouDokkaiN5_C.ts'];

const newInterface = `export interface LegacyQuestion {
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
}`;

files.forEach(fileName => {
  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  // Match the interface LegacyQuestion definition up to its closing brace }
  const regex = /export interface LegacyQuestion \{[\s\S]*?\n\}/;
  if (regex.test(content)) {
    content = content.replace(regex, newInterface);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Successfully updated LegacyQuestion interface in ${fileName}`);
  } else {
    console.warn(`⚠️ Could not find LegacyQuestion interface in ${fileName}`);
  }
});

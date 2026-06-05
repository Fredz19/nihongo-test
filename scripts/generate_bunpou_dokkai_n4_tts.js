import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { getBalancedN4Bunpou } from './n4_bunpou_dokkai_helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

// Use the explicit ElevenLabs key provided by the user
const ELEVENLABS_API_KEY = "sk_a45705444b26c34dd0319996033ec6b8533e07b9baada182";
const VOICE_ID = 'RBnMinrYKeccY3vaUxlZ'; // Sakura (Happy)
const MODEL_ID = 'eleven_v3';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Missing Supabase credentials in .env.local!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const BUCKET_NAME = 'jlpt-audio';
const CACHE_DIR = path.join(__dirname, '..', 'audio_cache_files', 'bunpou_dokkai_n4');
const DATA_DIR = path.join(__dirname, 'data');

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function cleanJapaneseText(text) {
  if (!text) return '';
  // 1. Remove <rt>...</rt> tags and their contents (furigana readings) so ElevenLabs only reads the kanji
  let cleaned = text.replace(/<rt>[^<]*<\/rt>/g, '');
  // 2. Remove all other HTML tags
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  // 3. Replace blanks like ( 21 ) or （ 21 ） with a small pause (comma)
  cleaned = cleaned.replace(/（\s*\d+\s*）/g, '、');
  cleaned = cleaned.replace(/\(\s*\d+\s*\)/g, '、');
  cleaned = cleaned.replace(/_\s*★\s*_/g, '、');
  cleaned = cleaned.replace(/___+/g, '、');
  // 4. Clean extra spaces
  cleaned = cleaned.trim();
  return cleaned;
}

async function generateTTS(text, outputFilename) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
  const cleanedText = cleanJapaneseText(text);
  
  console.log(`     Synthesizing clean text: "${cleanedText.substring(0, 60)}..."`);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text: cleanedText,
      model_id: MODEL_ID,
      voice_settings: {
        stability: 0.45,
        similarity_boost: 0.85,
        style: 0.35,
        use_speaker_boost: true
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`ElevenLabs API Error: ${response.status} - ${errText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(outputFilename, buffer);
  return buffer;
}

async function uploadToSupabase(fileName, fileBuffer) {
  const uploadPath = `N4-Bunpou-Dokkai/${fileName}`;
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(uploadPath, fileBuffer, {
      contentType: 'audio/mpeg',
      upsert: true
    });

  if (error) {
    throw new Error(`Supabase Upload Error: ${error.message}`);
  }

  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(uploadPath);
  return data.publicUrl;
}

function loadQuestions(fileName) {
  const filePath = path.resolve(__dirname, 'data', fileName);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  console.log('🎙️  Starting N4 Bunpou & Dokkai TTS Generator...');
  console.log('==============================================');

  // Load database files
  const grammarList = loadQuestions('n4_grammar.json');
  const readingList = loadQuestions('n4_reading.json');

  const packages = ['A', 'B', 'C'];
  const audioMapping = {};

  for (let pkgIdx = 0; pkgIdx < packages.length; pkgIdx++) {
    const letter = packages[pkgIdx];
    console.log(`\n📦 Processing Package ${letter}...`);
    
    const questions = getBalancedN4Bunpou(grammarList, readingList, pkgIdx);
    
    // 1. Mondai 3 Cloze Passages (grouped by passage or question similarity)
    const m3Qs = questions.filter(q => q.mondai === 3);
    const m3Groups = [];
    m3Qs.forEach(q => {
      if (q.passage) {
        let grp = m3Groups.find(g => g.passage === q.passage);
        if (!grp) {
          grp = { passage: q.passage, text: q.passage, questions: [] };
          m3Groups.push(grp);
        }
        grp.questions.push(q);
      } else {
        const baseText = q.question.split('空欄に入る')[0].trim();
        let grp = m3Groups.find(g => g.baseText && g.baseText.substring(0, 25) === baseText.substring(0, 25));
        if (!grp) {
          grp = { baseText, text: baseText, questions: [] };
          m3Groups.push(grp);
        }
        grp.questions.push(q);
        if (baseText.length > grp.text.length) {
          grp.text = baseText;
          grp.baseText = baseText;
        }
      }
    });
    
    // 2. Mondai 4 Short Reading Passages
    const m4Qs = questions.filter(q => q.mondai === 4);
    
    // 3. Mondai 5 Medium Reading Passage
    const m5Qs = questions.filter(q => q.mondai === 5);
    const m5Passage = m5Qs[0]?.passage;

    const tasks = [];

    // Push Mondai 3 groups
    m3Groups.forEach((grp, grpIdx) => {
      const fileName = m3Groups.length === 1 
        ? `n4_bunpou_dokkai_${letter.toLowerCase()}_m3.mp3`
        : `n4_bunpou_dokkai_${letter.toLowerCase()}_m3_g${grpIdx + 1}.mp3`;
      tasks.push({
        key: `m3_g${grpIdx + 1}`,
        text: grp.text,
        fileName,
        qIds: grp.questions.map(q => q.id)
      });
    });

    // Push Mondai 4
    m4Qs.forEach((q, idx) => {
      if (q.passage) {
        tasks.push({
          key: `m4_q${idx + 1}`,
          text: q.passage,
          fileName: `n4_bunpou_dokkai_${letter.toLowerCase()}_m4_q${idx + 1}.mp3`,
          qIds: [q.id]
        });
      }
    });

    // Push Mondai 5
    if (m5Passage) {
      tasks.push({
        key: `m5`,
        text: m5Passage,
        fileName: `n4_bunpou_dokkai_${letter.toLowerCase()}_m5.mp3`,
        qIds: m5Qs.map(q => q.id)
      });
    }

    console.log(`   Found ${tasks.length} passages to synthesize.`);

    for (const t of tasks) {
      const cachePath = path.join(CACHE_DIR, t.fileName);
      let buffer;

      console.log(`   👉 Processing "${t.fileName}"...`);

      // Check cache first
      if (fs.existsSync(cachePath)) {
        console.log(`     ℹ️ Found cached audio file.`);
        buffer = fs.readFileSync(cachePath);
      } else {
        try {
          buffer = await generateTTS(t.text, cachePath);
          console.log(`     ✅ Successfully generated.`);
          await delay(1000); // 1s delay between ElevenLabs API requests
        } catch (err) {
          console.error(`     ❌ Error generating TTS:`, err.message);
          continue;
        }
      }

      // Upload to Supabase
      try {
        const publicUrl = await uploadToSupabase(t.fileName, buffer);
        console.log(`     ☁️ Uploaded successfully. URL: ${publicUrl}`);
        
        // Save URL for all matching questions in the package
        t.qIds.forEach(qId => {
          audioMapping[qId] = publicUrl;
        });
      } catch (err) {
        console.error(`     ❌ Error uploading to Supabase:`, err.message);
      }
    }
  }

  // Save the mapping JSON
  const mappingPath = path.join(DATA_DIR, 'n4_bunpou_dokkai_audio.json');
  fs.writeFileSync(mappingPath, JSON.stringify(audioMapping, null, 2), 'utf-8');
  console.log(`\n🎉 TTS Generation Finished! Mappings written to ${mappingPath}`);
}

run();

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || "";
const VOICE_ID = process.env.VITE_ELEVENLABS_VOICE_ID || "pNInz6obpgDQGcFmaJgB"; // Default voice ID
const BUCKET_NAME = "jlpt-audio";

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required in .env.local");
  process.exit(1);
}

if (!ELEVENLABS_API_KEY) {
  console.error("❌ Error: VITE_ELEVENLABS_API_KEY is required in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Helper to delay between requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchAllVocab() {
  console.log('Fetching all vocabularies from Supabase...');
  let vocabs = [];
  
  // Fetch N5
  let from = 0;
  let step = 200;
  let hasMore = true;
  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana, meaning')
      .eq('level', 'N5')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
    if (error) {
      console.error('Error N5:', error);
      break;
    }
    if (data.length === 0) hasMore = false;
    else {
      vocabs = vocabs.concat(data);
      from += step;
      if (data.length < step) hasMore = false;
    }
  }

  // Fetch N4
  from = 0;
  hasMore = true;
  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('id, level, kanji, kana, meaning')
      .eq('level', 'N4')
      .order('id', { ascending: true })
      .range(from, from + step - 1);
    if (error) {
      console.error('Error N4:', error);
      break;
    }
    if (data.length === 0) hasMore = false;
    else {
      vocabs = vocabs.concat(data);
      from += step;
      if (data.length < step) hasMore = false;
    }
  }
  
  console.log(`Found ${vocabs.length} total vocabulary words (N5: ${vocabs.filter(v => v.level === 'N5').length}, N4: ${vocabs.filter(v => v.level === 'N4').length}).`);
  return vocabs;
}

async function listExistingAudioFiles() {
  console.log('Fetching existing files from audio_cache bucket...');
  let existingFiles = new Set();
  
  // Storage listing has a limit of 1000 items per request, so let's handle pagination if needed
  let offset = 0;
  let limit = 1000;
  let hasMore = true;
  
  while (hasMore) {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list('', { limit, offset, sortBy: { column: 'name', order: 'asc' } });
      
    if (error) {
      console.error('Error listing bucket files:', error);
      break;
    }
    
    if (!data || data.length === 0) {
      hasMore = false;
    } else {
      data.forEach(file => {
        existingFiles.add(file.name);
      });
      offset += data.length;
      if (data.length < limit) {
        hasMore = false;
      }
    }
  }
  
  console.log(`Found ${existingFiles.size} existing audio files in the bucket.`);
  return existingFiles;
}

async function generateTTSBuffer(text) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`ElevenLabs API Error: ${response.status} - ${errText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function run() {
  try {
    const vocabs = await fetchAllVocab();
    const existingAudio = await listExistingAudioFiles();
    
    let toProcess = vocabs.filter(v => !existingAudio.has(`${v.id}.mp3`));
    
    // Parse CLI arguments for limit
    const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
    if (limitArg) {
      const limitVal = parseInt(limitArg.split('=')[1], 10);
      if (!isNaN(limitVal)) {
        console.log(`Applying limit of ${limitVal} words from CLI.`);
        toProcess = toProcess.slice(0, limitVal);
      }
    }
    
    console.log(`Need to generate TTS for ${toProcess.length} vocabulary words.`);
    
    if (toProcess.length === 0) {
      console.log('✅ All vocabulary items already have audio files in the bucket!');
      return;
    }
    
    let successCount = 0;
    let failCount = 0;
    
    // We will process them one by one
    for (let i = 0; i < toProcess.length; i++) {
      const vocab = toProcess[i];
      const fileName = `${vocab.id}.mp3`;
      const textToSpeak = vocab.kana; // Hiragana/Katakana for standard reliable pronunciation
      
      console.log(`[${i + 1}/${toProcess.length}] [${vocab.level}] Processing "${vocab.kanji || vocab.kana}" (${textToSpeak})...`);
      
      try {
        // 1. Generate TTS from ElevenLabs
        const audioBuffer = await generateTTSBuffer(textToSpeak);
        
        // 2. Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, audioBuffer, {
            contentType: 'audio/mpeg',
            upsert: true
          });
          
        if (uploadError) {
          throw new Error(`Supabase Upload Error: ${uploadError.message}`);
        }
        
        console.log(`   ✅ Success! Generated and uploaded ${fileName}`);
        successCount++;
        
        // Short pause to be gentle on the ElevenLabs API rate limits
        await delay(300);
      } catch (err) {
        console.error(`   ❌ Failed for "${vocab.kanji || vocab.kana}":`, err.message);
        failCount++;
        
        // Pause longer on failure before retrying next item
        await delay(2000);
      }
    }
    
    console.log('\n==============================================');
    console.log('🎉 TTS Generation and Upload Completed!');
    console.log('==============================================');
    console.log(`Total processed: ${toProcess.length}`);
    console.log(`Success: ${successCount}`);
    console.log(`Failed: ${failCount}`);
    console.log('==============================================\n');
    
  } catch (err) {
    console.error('❌ Primary execution error:', err.message);
  }
}

run();

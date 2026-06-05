import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'src', 'data', 'bunpouDokkai');

const patchMapping = {
  'bunpouDokkaiN5_A.ts': {
    m3: {
      ids: ['n5_bunpou_a_m3_q01', 'n5_bunpou_a_m3_q02', 'n5_bunpou_a_m3_q03', 'n5_bunpou_a_m3_q04', 'n5_bunpou_a_m3_q05'],
      url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/a_m3.mp3'
    },
    m4: [
      { id: 'n5_bunpou_a_m4_q01', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/a_m4_q21.mp3' },
      { id: 'n5_bunpou_a_m4_q02', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/a_m4_q22.mp3' },
      { id: 'n5_bunpou_a_m4_q03', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/a_m4_q23.mp3' }
    ],
    m5: {
      ids: ['n5_bunpou_a_m5_q01', 'n5_bunpou_a_m5_q02'],
      url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/a_m5.mp3'
    }
  },
  'bunpouDokkaiN5_B.ts': {
    m3: {
      ids: ['n5_bunpou_b_m3_q01', 'n5_bunpou_b_m3_q02', 'n5_bunpou_b_m3_q03', 'n5_bunpou_b_m3_q04', 'n5_bunpou_b_m3_q05'],
      url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/b_m3.mp3'
    },
    m4: [
      { id: 'n5_bunpou_b_m4_q01', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/b_m4_q21.mp3' },
      { id: 'n5_bunpou_b_m4_q02', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/b_m4_q22.mp3' },
      { id: 'n5_bunpou_b_m4_q03', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/b_m4_q23.mp3' }
    ],
    m5: {
      ids: ['n5_bunpou_b_m5_q01', 'n5_bunpou_b_m5_q02'],
      url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/b_m5.mp3'
    }
  },
  'bunpouDokkaiN5_C.ts': {
    m3: {
      ids: ['n5_bunpou_c_m3_q01', 'n5_bunpou_c_m3_q02', 'n5_bunpou_c_m3_q03', 'n5_bunpou_c_m3_q04', 'n5_bunpou_c_m3_q05'],
      url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/c_m3.mp3'
    },
    m4: [
      { id: 'n5_bunpou_c_m4_q01', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/c_m4_q21.mp3' },
      { id: 'n5_bunpou_c_m4_q02', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/c_m4_q22.mp3' },
      { id: 'n5_bunpou_c_m4_q03', url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/c_m4_q23.mp3' }
    ],
    m5: {
      ids: ['n5_bunpou_c_m5_q01', 'n5_bunpou_c_m5_q02'],
      url: 'https://ozdsyadckqfwdhznjkmf.supabase.co/storage/v1/object/public/jlpt-audio/N5-Bunpou-Dokkai/c_m5.mp3'
    }
  }
};

function patchFile(fileName, patches) {
  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Build target list of (id, url)
  const targets = [];
  
  // Mondai 3
  patches.m3.ids.forEach(id => {
    targets.push({ id, url: patches.m3.url });
  });

  // Mondai 4
  patches.m4.forEach(item => {
    targets.push(item);
  });

  // Mondai 5
  patches.m5.ids.forEach(id => {
    targets.push({ id, url: patches.m5.url });
  });

  console.log(`\nPatching ${fileName}:`);
  
  targets.forEach(({ id, url }) => {
    // We want to find: id: "n5_bunpou_a_m3_q01", (or with single quotes)
    // and insert audioUrl: "url", after it.
    // Check if audioUrl is already present first to prevent double injection
    const pattern = new RegExp(`id:\\s*["']${id}["']`);
    if (!pattern.test(content)) {
      console.warn(`  ⚠️ Could not find id: "${id}"`);
      return;
    }

    const checkAudioPattern = new RegExp(`id:\\s*["']${id}["'][\\s\\S]*?audioUrl:\\s*["']`);
    // Check if this specific object already has audioUrl (we can look ahead up to mondai: or number: )
    const idIndex = content.search(pattern);
    const slice = content.slice(idIndex, idIndex + 300);
    if (slice.includes('audioUrl:')) {
      console.log(`  ⏭️ ${id} already has audioUrl`);
      return;
    }

    // Insert audioUrl
    const match = content.match(pattern)[0];
    const replacement = `${match},\n    audioUrl: "${url}"`;
    content = content.replace(pattern, replacement);
    console.log(`  ✅ Patched ${id} with audioUrl`);
  });

  fs.writeFileSync(filePath, content, 'utf-8');
}

for (const [fileName, patches] of Object.entries(patchMapping)) {
  patchFile(fileName, patches);
}
console.log('\n🎉 Finished patching all files.');

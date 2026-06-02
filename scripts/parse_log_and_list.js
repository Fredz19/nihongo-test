import fs from 'fs';
import path from 'path';

const logFilePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\fcefaeab-28e9-410a-9467-3384664a3d83\\.system_generated\\tasks\\task-70.log';
const outputFilePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\fcefaeab-28e9-410a-9467-3384664a3d83\\hanako_vocab_list.md';

function run() {
  if (!fs.existsSync(logFilePath)) {
    console.error(`❌ Log file not found at: ${logFilePath}`);
    process.exit(1);
  }

  const logContent = fs.readFileSync(logFilePath, 'utf-8');
  const lines = logContent.split('\n');

  const successes = [];
  let currentItem = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Match line: [1/415] [v_n5_1] Generating for: "私" (わたし)...
    const matchGen = line.match(/^\[\d+\/\d+\]\s+\[([^\]]+)\]\s+Generating for:\s+"([^"]+)"\s+\(([^)]+)\)\.\.\./);
    if (matchGen) {
      currentItem = {
        id: matchGen[1],
        word: matchGen[2],
        kana: matchGen[3],
        success: false
      };
    }

    // Match line: ✅ Success! Uploaded v_n5_1.mp3
    if (line.includes('✅ Success!') && currentItem) {
      currentItem.success = true;
      successes.push(currentItem);
      currentItem = null;
    }

    // Reset if it failed
    if (line.includes('❌ Failed') && currentItem) {
      currentItem = null;
    }
  }

  console.log(`Parsed ${successes.length} successful items.`);

  // Generate markdown content
  let mdContent = `# Daftar Kosakata N5 dengan Suara Hanako (v3)\n\n`;
  mdContent += `Berikut adalah daftar **${successes.length} kosakata N5** yang berhasil diregenerasi menggunakan model **ElevenLabs v3**, suara **Hanako (` + `IIUvcn96WSMnC5WxNypI` + `)**, dan gaya **` + `[thoughtful]` + `**.\n\n`;
  mdContent += `| No | ID Kosakata | Kanji / Word | Kana | Audio File |\n`;
  mdContent += `|---|---|---|---|---|\n`;

  successes.forEach((item, index) => {
    mdContent += `| ${index + 1} | \`${item.id}\` | **${item.word}** | \`${item.kana}\` | \`${item.id}.mp3\` |\n`;
  });

  fs.writeFileSync(outputFilePath, mdContent, 'utf-8');
  console.log(`✅ Success! Written list to ${outputFilePath}`);
}

run();

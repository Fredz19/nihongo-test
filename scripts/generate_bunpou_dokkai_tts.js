import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;
const VOICE_ID = 'RBnMinrYKeccY3vaUxlZ'; // Sakura (Happy)
const MODEL_ID = 'eleven_v3';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!ELEVENLABS_API_KEY || !supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Missing credentials in .env.local!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const BUCKET_NAME = 'jlpt-audio';
const CACHE_DIR = path.join(__dirname, '..', 'audio_cache_files', 'bunpou_dokkai');

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function cleanJapaneseText(text) {
  if (!text) return '';
  // 1. Remove <rt>...</rt> tags and their contents (furigana readings) so ElevenLabs only reads the kanji
  let cleaned = text.replace(/<rt>[^<]*<\/rt>/g, '');
  // 2. Remove all other HTML tags
  cleaned = cleaned.replace(/<[^>]*>/g, '');
  // 3. Replace blanks like ( 16 ) with a small pause (comma)
  cleaned = cleaned.replace(/（\s*\d+\s*）/g, '、');
  cleaned = cleaned.replace(/\(\s*\d+\s*\)/g, '、');
  cleaned = cleaned.replace(/_\s*★\s*_/g, '、');
  // 4. Clean extra spaces
  cleaned = cleaned.trim();
  return cleaned;
}

async function generateTTS(text, outputFilename) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
  const cleanedText = cleanJapaneseText(text);
  
  console.log(`     Synthesizing clean text: "${cleanedText.substring(0, 50)}..."`);
  
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
  const uploadPath = `N5-Bunpou-Dokkai/${fileName}`;
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

// Passages list self-contained
const passagesData = {
  A: [
    {
      name: 'a_m3.mp3',
      text: `<strong>「<ruby>日記<rt>にっき</rt></ruby>」</strong><br/>わたしは　きのう　ともだちの　キムさんと　デパートへ　行きました。デパートには　いろいろな　店が　ありました。わたしは　シャツを　１まい　買いました。キムさんは　くつを　買いたがって　いましたが、いいものが　<u>（ 16 ）</u>でした。<br/>それから、わたしたちは　レストランで　しょくじを　しました。キムさんは　カレーライスを　食べました。わたしは　スパゲッティを　食べました。とても　<u>（ 17 ）</u>です。<br/>しょくじの　あとで、デパートの　<u>（ 18 ）</u>にある　こうえんを　さんぽしました。こうえんには　きれいな　はなが　たくさん　さいて　いました。<br/>キムさんは　カメラで　しゃしんを　<u>（ 19 ）</u>とりました。<br/>夕方、わたしたちは　駅で　「また　<u>（ 20 ）</u>遊びましょう」と言って　わかれました。とても　たのしい　一日でした。`
    },
    {
      name: 'a_m4_q21.mp3',
      text: `<ruby>今日<rt>きょう</rt></ruby>は<ruby>日曜日<rt>にちようび</rt></ruby>です。わたしはどこへも行きません。うちでゆっくり<ruby>本<rt>ほん</rt></ruby>を読んだり、テレビを見たりします。<ruby>夜<rt>よる</rt></ruby>はともだちがうちに来て、いっしょに<ruby>晩<rt>ばん</rt></ruby>ご飯を食べます。`
    },
    {
      name: 'a_m4_q22.mp3',
      text: `<ruby>木村<rt>きむら</rt></ruby>さん、あしたの<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>９<ruby>時<rt>じ</rt></ruby>からではなく、１０<ruby>時半<rt>じはん</rt></ruby>からになりました。<ruby>教室<rt>きょうしつ</rt></ruby>は３０２<ruby>号室<rt>ごうしつ</rt></ruby>です。<ruby>遅<rt>おく</rt></ruby>れないように来てください。よろしくお願いします。――<ruby>山田<rt>やまだ</rt></ruby>より`
    },
    {
      name: 'a_m4_q23.mp3',
      text: `わたしは<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きです。<ruby>漢字<rt>かんじ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>しています。ひらがなとカタカナはもう<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>書<rt>か</rt></ruby>くことができます。<ruby>来月<rt>らいげつ</rt></ruby>、日本語のテストがありますから、今<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby>勉強しています。`
    },
    {
      name: 'a_m5.mp3',
      text: `<ruby>私<rt>わたし</rt></ruby>の<ruby>国<rt>くに</rt></ruby>はベトナムです。ベトナムの<ruby>果物<rt>くだもの</rt></ruby>はとてもおいしくて安いです。私は日本に来てから、果物をあまり食べなくなりました。日本の果物はとてもきれいで美味しいですが、少し高いからです。でも、昨日は私の<ruby>誕生日<rt>たんじょうび</rt></ruby>でしたから、スーパーでリンゴとイチゴを買いました。日本のリンゴは大きくて甘くて、とても美味しかったです。ベトナムの家族にも日本の美味しいリンゴを食べさせたいですが、果物を国に送ることはできません。ですから、来年家族が日本に来るときに、一緒にたくさん食べようと思っています。`
    }
  ],
  B: [
    {
      name: 'b_m3.mp3',
      text: `<strong>「<ruby>手紙<rt>てがみ</rt></ruby>」</strong><br/>さくらさん、お元気ですか。わたしは　いま　京都に　<u>（ 16 ）</u>。京都は　とても　きれいな　町ですね。<br/>昨日は　ひとりで　有名なお寺へ　行きました。お寺の　庭には　古い　木が　<u>（ 17 ）</u>ありました。とても　静かでした。<br/>それから、お寺の　近くで　お茶を　飲みました。その店のお茶は　すこし　苦かったですが、とても　<u>（ 18 ）</u>です。<br/>来週、京都の　お祭りが　あります。さくらさんも　<u>（ 19 ）</u>行きませんか。お祭りは　とても　にぎやかだそうです。<br/>もし　来るなら、メールを　ください。駅まで　むかえに　<u>（ 20 ）</u>。では、また。――リーより`
    },
    {
      name: 'b_m4_q21.mp3',
      text: `<ruby>昨日<rt>きのう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>でしたから、わたしは一日中うちにいました。テレビでサッカーの<ruby>試合<rt>しあい</rt></ruby>を見たり、日本の歌のCDを聞いたりしました。<ruby>晩<rt>ばん</rt></ruby>ご飯は冷蔵庫にある野菜と肉でカレーを作りました。とても美味しかったです。`
    },
    {
      name: 'b_m4_q22.mp3',
      text: `<ruby>田中<rt>たなか</rt></ruby>さん、<ruby>今日<rt>きょう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>の<ruby>約束<rt>やくそく</rt></ruby>ですが、６時に駅の改札口（かいさつぐち）で待っています。もし遅れるときは、５時半までに私の携帯電話（けいたいでんわ）に連絡をしてください。よろしくお願いします。――鈴木より`
    },
    {
      name: 'b_m4_q23.mp3',
      text: `わたしの<ruby>部屋<rt>へや</rt></ruby>は少し<ruby>狭<rt>せま</rt></ruby>いですが、<ruby>窓<rt>まど</rt></ruby>が大きくて明るいです。窓からは天気がいい日に<ruby>富士山<rt>ふじさん</rt></ruby>が見えます。机とベッドと本棚しかありませんが、静かでとても気に入っています。`
    },
    {
      name: 'b_m5.mp3',
      text: `わたしは<ruby>毎週<rt>まいしゅう</rt></ruby><ruby>土曜日<rt>どようび</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>、近く of 公園でジョギングをしています。ジョギングのあとで、公園 of となりにある喫茶店（きっさてん）でコーヒーを飲みます。この喫茶店はとても古くて小さいですが、コーヒーが美味しくて静かですから、たくさんの人が来ます。昨日の土曜日もジョギングを終えてからその店に行きました。いつも窓側の席に座りますが、昨日は席が全部空いていませんでした。少し残念でしたが、カウンターの席でマスターと話をしながらコーヒーを飲みました。マスターは昔の日本の話をたくさんしてくれました。とても面白かったです。これからはカウンターの席もいいなと思いました。`
    }
  ],
  C: [
    {
      name: 'c_m3.mp3',
      text: `<strong>「<ruby>夏休み<rt>なつやすみ</rt></ruby>」</strong><br/>わたしは　今年の　夏休みに　北海道へ　<u>（ 16 ）</u>行きました。北海道は　涼しくて　とても　気持ちよかったです。<br/>旅行中、美味しい　魚の料理を　<u>（ 17 ）</u>食べました。北海道の魚は　新鮮で、東京より　ずっと　安かったです。<br/>ある日、きれいで　大きい湖へ　行きました。湖の　近くには　山も　<u>（ 18 ）</u>見えました。すばらしい　景色でした。<br/>そこでは、自転車を　借りて、湖の　まわりを　<u>（ 19 ）</u>。風が　とても　冷たくて　楽しかったです。<br/>また　来年の　夏休みにも　北海道へ　<u>（ 20 ）</u>行きたいです。`
    },
    {
      name: 'c_m4_q21.mp3',
      text: `<ruby>今日<rt>きょう</rt></ruby>はいい<ruby>天気<rt>てんき</rt></ruby>ですから、<ruby>洗濯<rt>せんたく</rt></ruby>をします。それから、自転車でスーパーへ行って、野菜と果物を買います。午後からは<ruby>図書館<rt>としょかん</rt></ruby>へ行って、来週 of 日本語のテストの勉強をします。夜はゆっくりお風呂に入って早く寝ます。`
    },
    {
      name: 'c_m4_q22.mp3',
      text: `<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>木村<rt>きむら</rt></ruby>です。あさってのジョギングですが、朝７時に公園の入り口で会いましょう。もし雨が降ったときは、ジョギングは中止（ちゅうし）にして、１０時半に駅の近くの喫茶店で朝ご飯を食べましょう。よろしくお願いします。`
    },
    {
      name: 'c_m4_q23.mp3',
      text: `わたしの家は新しくてとてもきれいです。駅から歩いて５分ですから、<ruby>通勤<rt>つうきん</rt></ruby>にとても便利です。近くに大きくてにぎやかなスーパーや病院もありますから、毎日楽しく暮らしています。`
    },
    {
      name: 'c_m5.mp3',
      text: `わたしは<ruby>留学生<rt>りゅうがくせい</rt></ruby>のアリです。去年の１０月に日本に来ました。日本に来たばかりのときは、日本語が全然話せませんでしたから、買い物や電車に乗ることがとても大変でした。でも、ボランティアの日本語教室で親切な先生方に週に２回教えてもらいました。先生方は日本語だけでなく、日本の生活のルールや美味しいお店のことも教えてくれました。今ではひとりで買い物や旅行ができるようになり、毎日がとても楽しいです。先週はひとりで新幹線（しんかんせん）に乗って京都へ行ってきました。お寺やきれいな景色を見て、たくさん写真を撮りました。日本の先生方に本当に感謝（かんしゃ）しています。`
    }
  ]
};

async function run() {
  console.log(`==============================================`);
  console.log(`🎙️  ElevenLabs Bunpou & Dokkai TTS Generator`);
  console.log(`   Voice: Sakura (${VOICE_ID})`);
  console.log(`   Model: ${MODEL_ID}`);
  console.log(`==============================================`);

  const results = {};

  for (const [pkgName, list] of Object.entries(passagesData)) {
    console.log(`\n📦 Processing Package ${pkgName}...`);
    results[pkgName] = [];
    
    for (const item of list) {
      const localPath = path.join(CACHE_DIR, item.name);
      console.log(`   Processing: ${item.name}`);
      
      let buffer;
      try {
        if (fs.existsSync(localPath)) {
          console.log(`     ⏭️  Using local cache`);
          buffer = fs.readFileSync(localPath);
        } else {
          console.log(`     ⏳ Generating TTS from ElevenLabs...`);
          buffer = await generateTTS(item.text, localPath);
          await delay(1000); // respects rate limits
        }

        console.log(`     ⏳ Uploading to Supabase...`);
        const publicUrl = await uploadToSupabase(item.name, buffer);
        console.log(`     ✅ Success! URL: ${publicUrl}`);
        
        results[pkgName].push({
          name: item.name,
          url: publicUrl
        });
      } catch (err) {
        console.error(`     ❌ Error: ${err.message}`);
        await delay(2000);
      }
    }
  }

  console.log(`\n==============================================`);
  console.log(`🎉 Audio generation completed!`);
  console.log(`==============================================\n`);
  console.log(JSON.stringify(results, null, 2));
}

run();

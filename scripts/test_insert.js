import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function test() {
  const { data, error } = await supabase
    .from('vocabularies')
    .insert([
      {
        id: 'v_n4_test_1',
        level: 'N4',
        kanji: '試験',
        kana: 'しけん',
        romaji: 'shiken',
        meaning: 'Ujian',
        type: 'Noun'
      }
    ])
    .select();

  console.log('Insert result:', data, 'error:', error);

  if (!error) {
    // clean up
    const { error: delErr } = await supabase
      .from('vocabularies')
      .delete()
      .eq('id', 'v_n4_test_1');
    console.log('Cleanup error:', delErr);
  }
}

test();

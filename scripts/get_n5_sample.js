import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function check() {
  const { data, error } = await supabase
    .from('vocabularies')
    .select('*')
    .eq('level', 'N5')
    .limit(10);

  console.log(JSON.stringify(data, null, 2));
}

check();

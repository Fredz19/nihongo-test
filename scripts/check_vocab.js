import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

async function check() {
  const { count: n5Count, error: n5Err } = await supabase
    .from('vocabularies')
    .select('*', { count: 'exact', head: true })
    .eq('level', 'N5');

  const { count: n4Count, error: n4Err } = await supabase
    .from('vocabularies')
    .select('*', { count: 'exact', head: true })
    .eq('level', 'N4');

  const { count: n3Count, error: n3Err } = await supabase
    .from('vocabularies')
    .select('*', { count: 'exact', head: true })
    .eq('level', 'N3');

  console.log('N5 count:', n5Count, 'error:', n5Err);
  console.log('N4 count:', n4Count, 'error:', n4Err);
  console.log('N3 count:', n3Count, 'error:', n3Err);
}

check();

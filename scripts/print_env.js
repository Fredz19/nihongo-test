import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('Keys in process.env:');
Object.keys(process.env).forEach(key => {
  if (key.includes('SUPABASE') || key.includes('KEY') || key.includes('URL') || key.includes('DB') || key.includes('POSTGRES')) {
    console.log(`  ${key}: ${process.env[key] ? 'exists (length ' + process.env[key].length + ')' : 'empty'}`);
  }
});

import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'dist') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

const allFiles = walk('.');
allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('service_role') || content.includes('SUPABASE_SERVICE_ROLE') || content.includes('postgresql://') || content.includes('postgres://')) {
      console.log(`Found secret in: ${file}`);
    }
  } catch (err) {}
});

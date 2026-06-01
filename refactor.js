const fs = require('fs');

function refactorFile(path) {
  let content = fs.readFileSync(path, 'utf8');

  // Add useNavigate import if not present
  if (!content.includes("import { useNavigate }")) {
    content = content.replace("import { useState", "import { useNavigate } from 'react-router-dom';\nimport { useState");
    // if useState is not there, just prepend it
    if (!content.includes("import { useNavigate }")) {
       content = "import { useNavigate } from 'react-router-dom';\n" + content;
    }
  }

  // Replace onNavigate calls
  content = content.replace(/onNavigate\('landing'\)/g, "navigate('/')");
  content = content.replace(/onNavigate\('dashboard'\)/g, "navigate('/dashboard')");
  content = content.replace(/onNavigate\('mocktest'\)/g, "navigate('/mocktest/N5')"); // default
  content = content.replace(/onNavigate\('results'\)/g, "navigate('/results')");
  content = content.replace(/onNavigate\('review'\)/g, "navigate('/review')");
  content = content.replace(/onNavigate\('pricing'\)/g, "navigate('/pricing')");
  
  // Remove Props interface entirely if it only has onNavigate (common)
  content = content.replace(/interface Props \{\n\s*onNavigate:[\s\S]*?\}\n/, "");
  
  // Replace `{ onNavigate }: Props` or `{ onNavigate }: { onNavigate: Props['onNavigate'] }` etc.
  content = content.replace(/\{ onNavigate \}: Props/g, "()");
  content = content.replace(/\{ onNavigate \}: \{ onNavigate: Props\['onNavigate'\] \}/g, "()");
  content = content.replace(/\{ onNavigate, transparent \}: \{ onNavigate: Props\['onNavigate'\]; transparent: boolean \}/g, "({ transparent }: { transparent: boolean })");
  content = content.replace(/onNavigate=\{onNavigate\}/g, "");
  
  // For LandingPage, Dashboard, MockTest, Results, ReviewMode, PricingPage
  // Add const navigate = useNavigate(); inside the components
  const componentNames = ['PricingSection', 'Navbar', 'Footer', 'LandingPage', 'Sidebar', 'Dashboard', 'MockTest', 'Results', 'ReviewMode', 'PricingPage'];
  
  for (const name of componentNames) {
    const regex1 = new RegExp(`function ${name}\\(\\) \\{`);
    content = content.replace(regex1, `function ${name}() {\n  const navigate = useNavigate();`);
    
    const regex2 = new RegExp(`function ${name}\\(\\{([^}]*)\\}\\s*(?::\\s*[^)]+)?\\) \\{`);
    content = content.replace(regex2, (match, p1) => {
      // p1 is the props destructuring
      return `${match}\n  const navigate = useNavigate();`;
    });
    
    const regex3 = new RegExp(`export default function ${name}\\(\\) \\{`);
    content = content.replace(regex3, `export default function ${name}() {\n  const navigate = useNavigate();`);
    
    const regex4 = new RegExp(`export default function ${name}\\(\\{([^}]*)\\}\\s*(?::\\s*[^)]+)?\\) \\{`);
    content = content.replace(regex4, (match, p1) => {
      return `${match}\n  const navigate = useNavigate();`;
    });
    
    const regex5 = new RegExp(`export default function ${name}\\(props: Props\\) \\{`);
    content = content.replace(regex5, `export default function ${name}() {\n  const navigate = useNavigate();`);
    
    const regex6 = new RegExp(`export default function ${name}\\(props\\) \\{`);
    content = content.replace(regex6, `export default function ${name}() {\n  const navigate = useNavigate();`);
    
    // specifically for export default function LandingPage({ onNavigate }: Props)
    const regex7 = new RegExp(`export default function ${name}\\(\\) \\{\n  const navigate = useNavigate\\(\\);`); // avoid double
  }

  // Quick fix for empty destructured objects `{  }`
  content = content.replace(/function ([a-zA-Z0-9_]+)\(\{\s*\}\) \{/g, "function $1() {");
  content = content.replace(/export default function ([a-zA-Z0-9_]+)\(\{\s*\}\) \{/g, "export default function $1() {");

  fs.writeFileSync(path, content, 'utf8');
}

const files = [
  'src/sections/LandingPage.tsx',
  'src/sections/Dashboard.tsx',
  'src/sections/MockTest.tsx'
];

for (const file of files) {
  try {
    refactorFile(file);
    console.log(`Refactored ${file}`);
  } catch (e) {
    console.error(`Error on ${file}:`, e);
  }
}

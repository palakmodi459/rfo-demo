const fs = require('fs');
const path = require('path');

const files = [
  '../app/page.tsx',
  '../app/optimizer/page.tsx',
  '../app/loss-analysis/page.tsx',
  '../app/portfolio/page.tsx',
  '../app/captive-feasibility/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/href="\/">\s*<span className="material-symbols-outlined">query_stats/g, 'href="/optimizer">\n<span className="material-symbols-outlined">query_stats');
    content = content.replace(/href="\/">\s*<span className="material-symbols-outlined">analytics/g, 'href="/loss-analysis">\n<span className="material-symbols-outlined">analytics');
    content = content.replace(/href="\/">\s*<span className="material-symbols-outlined">shield/g, 'href="/captive-feasibility">\n<span className="material-symbols-outlined">shield');
    content = content.replace(/href="\/">\s*<span className="material-symbols-outlined">insights/g, 'href="/portfolio">\n<span className="material-symbols-outlined">insights');

    // Also Next.js `<Link>` component integration
    content = content.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');
    
    if (!content.includes('import Link from')) {
        content = `import Link from "next/link";\n` + content;
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});

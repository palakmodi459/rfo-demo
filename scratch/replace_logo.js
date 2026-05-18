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
    
    // Replace the placeholder image URL with the local logo path
    const updatedContent = content.replace(/\{\{DATA:IMAGE:IMAGE_9\}\}/g, '/logo.svg');
    
    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated logo in ${file}`);
    } else {
        console.log(`No placeholder found in ${file}`);
    }
  }
});

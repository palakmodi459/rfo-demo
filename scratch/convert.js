const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(htmlContent) {
  // Extract body content
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : htmlContent;

  // Basic JSX conversions
  content = content
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    // Self-close tags
    .replace(/<img([^>]*[^/])>/gi, '<img$1 />')
    .replace(/<input([^>]*[^/])>/gi, '<input$1 />')
    .replace(/<br([^>]*[^/])>/gi, '<br$1 />')
    .replace(/<hr([^>]*[^/])>/gi, '<hr$1 />')
    // Fix inline styles
    .replace(/style="([^"]+)"/g, (match, styleString) => {
      // Basic parser for simple styles like "font-size: 24px;"
      const styleObj = styleString.split(';').filter(Boolean).map(s => {
        const parts = s.split(':');
        if (parts.length < 2) return '';
        const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        const val = parts.slice(1).join(':').trim(); // Ensure we don't drop parts if value has colons
        return `${key}: "${val.replace(/"/g, '\\"')}"`;
      }).filter(Boolean).join(', ');
      return `style={{ ${styleObj} }}`;
    })
    // Fix common SVG attributes
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/viewbox=/gi, 'viewBox=')
    .replace(/xmlns:xlink=/g, 'xmlnsXlink=');

  // Since React requires a single root element
  return `export default function Page() {\n  return (\n    <>\n${content}\n    </>\n  );\n}\n`;
}

const pages = [
  { source: 'dashboard.html', target: '../app/page.tsx', links: [ { name: 'Risk Strategy', path: '/' }, { name: 'Program Optimizer', path: '/optimizer' }, { name: 'Loss Analysis', path: '/loss-analysis' }, { name: 'Captive Feasibility', path: '/captive-feasibility' }, { name: 'Portfolio Insights', path: '/portfolio' } ] },
  { source: 'optimizer.html', target: '../app/optimizer/page.tsx', folder: '../app/optimizer' },
  { source: 'loss.html', target: '../app/loss-analysis/page.tsx', folder: '../app/loss-analysis' },
  { source: 'portfolio.html', target: '../app/portfolio/page.tsx', folder: '../app/portfolio' },
  { source: 'captive.html', target: '../app/captive-feasibility/page.tsx', folder: '../app/captive-feasibility' }
];

pages.forEach(page => {
  const sourcePath = path.join(__dirname, page.source);
  if (fs.existsSync(sourcePath)) {
    let html = fs.readFileSync(sourcePath, 'utf8');
    let jsx = convertHtmlToJsx(html);
    
    // Quick link replacements
    jsx = jsx.replace(/href="#"/g, 'href="/"');
    
    if (page.folder && !fs.existsSync(path.join(__dirname, page.folder))) {
      fs.mkdirSync(path.join(__dirname, page.folder), { recursive: true });
    }
    
    fs.writeFileSync(path.join(__dirname, page.target), jsx);
    console.log(`Converted ${page.source} to ${page.target}`);
  } else {
    console.log(`Source not found: ${sourcePath}`);
  }
});

const fs = require('fs');
const path = require('path');

const cssPath = 'c:/Users/Maria Lomeli/Documents/Botomatico/Calendando/styles.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Update Colors
css = css.replace(/#7C3AED/gi, '#2563EB');
css = css.replace(/124,58,237/g, '37,99,235'); // rgba
css = css.replace(/#0EA5A5/gi, '#00C2A8');
css = css.replace(/14,165,165/g, '0,194,168'); // rgba
css = css.replace(/#A78BFA/gi, '#60A5FA');
css = css.replace(/#5B21B6/gi, '#1D4ED8');

fs.writeFileSync(cssPath, css);

const htmlPath = 'c:/Users/Maria Lomeli/Documents/Botomatico/Calendando/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Update colors in HTML (inline styles or defs if any)
html = html.replace(/#7C3AED/gi, '#2563EB');
html = html.replace(/124,58,237/g, '37,99,235');
html = html.replace(/#0EA5A5/gi, '#00C2A8');
html = html.replace(/14,165,165/g, '0,194,168');

const newSvgContent = `
    <defs>
        <linearGradient id="REPLACE_GRAD" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563EB"/>
            <stop offset="100%" stop-color="#00C2A8"/>
        </linearGradient>
    </defs>
    <!-- Outer circle (broken at top right) -->
    <path d="M 60 18 A 36 36 0 1 0 81 50" fill="none" stroke="url(#REPLACE_GRAD)" stroke-width="12" stroke-linecap="round" />
    <!-- Checkmark -->
    <path d="M 28 52 L 44 68 L 76 32" fill="none" stroke="url(#REPLACE_GRAD)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Dashes -->
    <line x1="68" y1="16" x2="76" y2="6" stroke="url(#REPLACE_GRAD)" stroke-width="9" stroke-linecap="round" />
    <line x1="82" y1="24" x2="90" y2="14" stroke="url(#REPLACE_GRAD)" stroke-width="9" stroke-linecap="round" />
    <line x1="90" y1="36" x2="98" y2="26" stroke="url(#REPLACE_GRAD)" stroke-width="9" stroke-linecap="round" />
`;

const navLogoNew = `<svg width="28" height="28" viewBox="0 0 100 100" fill="none">${newSvgContent.replace(/REPLACE_GRAD/g, 'logoGrad')}</svg>`;
const footerLogoNew = `<svg width="24" height="24" viewBox="0 0 100 100" fill="none">${newSvgContent.replace(/REPLACE_GRAD/g, 'footerLogoGrad')}</svg>`;

const navRegex = /<svg width="28" height="28" viewBox="0 0 28 28" fill="none">[\s\S]*?<\/svg>/;
const footerRegex = /<svg width="24" height="24" viewBox="0 0 28 28" fill="none">[\s\S]*?<\/svg>/;

html = html.replace(navRegex, navLogoNew);
html = html.replace(footerRegex, footerLogoNew);

fs.writeFileSync(htmlPath, html);

console.log('Update complete!');

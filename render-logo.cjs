const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const svgPath = path.join(__dirname, 'public', 'assets', 'sakura-coffee-logo.svg');
const pngPath = path.join(__dirname, 'public', 'assets', 'sakura-coffee-logo.png');
const faviconPath = path.join(__dirname, 'public', 'favicon.png');

const svg = fs.readFileSync(svgPath, 'utf8');

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 800,
  },
  font: {
    fontFiles: [
      '/tmp/fonts/PlayfairDisplay.ttf',
      '/tmp/fonts/Caveat.ttf',
      '/tmp/fonts/NotoSerifJP.ttf',
    ],
    loadSystemFonts: true,
    defaultFontFamily: 'Playfair Display',
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

fs.writeFileSync(pngPath, pngBuffer);
fs.writeFileSync(faviconPath, pngBuffer);
console.log('Successfully rendered high-precision sakura-coffee-logo.png, size:', pngBuffer.length);

const fs = require('fs');
const files = [
  'PunjabiPage.js', 'GujaratiPage.js', 'SouthPage.js', 'KashmiriPage.js',
  'MaharashtrianPage.js', 'BihariPage.js', 'NorthPage.js', 'BengaliPage.js', 'RajasthaniPage.js'
];
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf-8');
  let startIdx = text.lastIndexOf('BOTTOM CTA');
  if (startIdx !== -1) {
    let before = text.slice(0, startIdx);
    let after = text.slice(startIdx);
    after = after.replace("onClick={() => handleTryNow(dish)}", 'component={Link}\n          to="/login"');
    fs.writeFileSync(f, before + after);
    console.log('Fixed ' + f);
  }
});

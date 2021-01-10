const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/elements/runtime.js',
'./dist/elements/polyfills.js', 
'./dist/elements/main.js',
]
// await fs.ensureDir('custom-elements')
await concat(files, '../custom-elements/custom-elements.js');
await fs.copyFile('./dist/elements/styles.css', '../custom-elements/styles.css')
// await fs.copy('./dist/elements/assets/', 'elements/assets/' )
})()
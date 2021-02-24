const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

let X = parseInt(lines.shift())
let Y = parseFloat(lines.shift())

console.log(`${(X/Y).toFixed(3)} km/l`)
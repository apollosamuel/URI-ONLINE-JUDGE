const input = require('fs').readFileSync('./URI-ONLINE-JUDGE/text.txt', 'utf8');
const lines = input.split('\n');


const n = 3.14159

let R = parseFloat(lines.shift())
let A = (n*(Math.pow(R,2))).toFixed(4)


console.log('A='+A)
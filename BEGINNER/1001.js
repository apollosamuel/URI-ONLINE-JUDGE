const input = require('fs').readFileSync('./URI-ONLINE-JUDGE/text.txt', 'utf8');
const lines = input.split('\n');


let A = parseInt(lines.shift())
let B = parseInt(lines.shift())

let X = A + B

console.log('X = ' + X)
const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

let pesoA = 2
let pesoB = 3
let pesoC = 5

let pesoTotal = pesoA + pesoB + pesoC

let media = (((A*pesoA)+(B*pesoB)+(C*pesoC))/pesoTotal).toFixed(1)

console.log(`MEDIA = ${media}`)
const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

let name = lines.shift()
let salary = parseFloat(lines.shift())
let bonus = parseFloat(lines.shift())

let total = salary+(bonus*0.15)

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
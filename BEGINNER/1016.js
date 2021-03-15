const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

let km = parseInt(lines.shift())

const result = km * 2

console.log(`${result} minutos`)
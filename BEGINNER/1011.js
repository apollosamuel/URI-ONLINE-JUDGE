const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

let R = parseInt(lines.shift())
const pi = 3.14159

volume = (4/3)*pi*Math.pow(R,3)

console.log(`VOLUME = ${volume.toFixed(3)}`)
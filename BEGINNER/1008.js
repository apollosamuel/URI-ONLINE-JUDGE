const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');


let number = parseInt(lines.shift())
let hours = parseInt(lines.shift())
let workedHour = parseFloat(lines.shift())

let salary = workedHour * hours

console.log(`NUMBER = ${number}\nSALARY = U$ ${salary.toFixed(2)}`)
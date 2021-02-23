const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

let valueOne = lines.shift()
let valueTwo = lines.shift()

let valueArrayOne = valueOne.split(' ')
let valueArrayTwo = valueTwo.split(' ')


let total = parseFloat(valueArrayOne[2])*parseInt(valueArrayOne[1]) + parseFloat(valueArrayTwo[2])*parseInt(valueArrayTwo[1])

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
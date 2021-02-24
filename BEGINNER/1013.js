const input = require('fs').readFileSync('./text.txt', 'utf8');

const [A, B, C ] = input.split(" ").map(item => parseInt(item))

let maiorAB = (A + B + Math.abs(A - B)) / 2
let maiorXC = (maiorAB + C + Math.abs(maiorAB - C)) / 2

console.log(`${maiorXC} eh o maior`)
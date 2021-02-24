const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split(' ');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())


let triangulo = A*C/2
let circulo = 3.14159*(Math.pow(C,2))
let trapezio = ((A+B)*C)/2
let quadrado = B*B
let retangulo = A*B


console.log(`TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(3)}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(3)}\nRETANGULO: ${retangulo.toFixed(3)}`)

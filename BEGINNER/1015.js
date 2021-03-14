const input = require('fs').readFileSync('./text.txt', 'utf8');
const lines = input.split('\n');

const oneData = lines.shift()
const twoData = lines.shift()

const oneDataSplit = oneData.split(' ')
const twoDataSplit = twoData.split(' ')

const x1 = parseFloat(oneDataSplit.shift())
const y1 = parseFloat(oneDataSplit.shift())
const x2 = parseFloat(twoDataSplit.shift())
const y2 = parseFloat(twoDataSplit.shift())

const distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)))


console.log(distance.toFixed(4))
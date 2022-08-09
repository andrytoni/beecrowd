const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let p1 = lines.shift().split(' ');
let p2 = lines.shift().split(' ');

let x1 = parseFloat(p1.shift());
let y1 = parseFloat(p1.shift());
let x2 = parseFloat(p2.shift());
let y2 = parseFloat(p2.shift());

let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(`${d.toFixed(4)}`);

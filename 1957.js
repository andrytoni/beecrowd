const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

console.log(lines.shift().toString(16).toUpperCase());

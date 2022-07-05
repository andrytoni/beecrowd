const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

function main() {
    const valores = lines.shift().split(' ');
    valores.map(num => parseFloat(num));
    const [num1, num2, num3] = valores;

}
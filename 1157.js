const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));
const number = lines.shift();

for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}

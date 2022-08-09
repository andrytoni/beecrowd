const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const sumOdd = (num1, num2) => {
  let sum = 0;
  for (let j = num1 + 1; j < num2; j++) {
    if (j % 2 != 0) {
      sum += j;
    }
  }
  return sum;
};

const main = () => {
  const cases = parseInt(lines.shift());
  let numbers = [];
  let x = [];
  let y = [];
  for (let i = 0; i < cases; i++) {
    numbers.push(lines[i].split(' '));
    x = parseInt(numbers[i].shift());
    y = parseInt(numbers[i].shift());
    if (x < y) {
      console.log(sumOdd(x, y));
    } else {
      console.log(sumOdd(y, x));
    }
  }
};

main();

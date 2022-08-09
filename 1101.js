const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');
if (lines[lines.length - 1] == '') {
  lines.pop();
}

const sum = (num1, num2) => {
  let sum = 0;
  let sequence = [];
  for (let j = num2; j <= num1; j++) {
    sum += j;
    sequence.push(j);
  }

  console.log(...sequence, `Sum=${sum}`);
};

const main = () => {
  let numbers = 0;
  let x = [];
  let y = [];
  for (let i = 0; i < lines.length; i++) {
    numbers = lines[i].split(' ');

    x = parseInt(numbers.shift());
    y = parseInt(numbers.shift());
    if (x > 0 && y > 0) {
      if (x > y) {
        sum(x, y);
      } else {
        sum(y, x);
      }
    }
  }
};

main();

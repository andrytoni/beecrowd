const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const numbers = lines
    .shift()
    .split(' ')
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  let isTriangle = 'N';

  for (let i = 0; i < 2; i++) {
    for (let j = i + 2; j < 4; j++) {
      if (numbers[i] + numbers[i + 1] > numbers[j]) isTriangle = 'S';
    }
  }
  console.log(isTriangle);
};

main();

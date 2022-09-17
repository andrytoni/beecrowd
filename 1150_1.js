const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const x = lines.shift();
  const z = findZ(x, lines);
  const count = counter(x, z);
  console.log(count);
};

const findZ = (x, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > x) {
      return array[i];
    }
  }
};

const counter = (x, z) => {
  let count = 1;
  let sum = x;
  for (let i = 1; i < z; i++) {
    count++;
    sum += x + i;

    if (sum > z) {
      return count;
    }
  }
};

main();

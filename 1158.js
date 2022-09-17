const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const cases = lines.shift();
  for (let i = 0; i < cases; i++) {
    let sum = 0;
    let [x, y] = lines[i].split(' ').map((item) => Number(item));

    for (let j = x; j < y * 2 + x; j++) {
      if (j % 2 != 0) {
        sum += j;
      }
    }
    console.log(sum);
  }
};

main();

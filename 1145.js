const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split(' ').map((item) => Number(item));

const main = () => {
  const quant = Math.min(...lines);
  const limit = Math.max(...lines);
  let output = [];

  for (let i = 0; i < limit; i += quant) {
    for (let j = i + 1; j <= i + quant; j++) {
      output.push(j);
      if (j == limit) {
        break;
      }
    }
    console.log(...output);
    output = [];
  }
};

main();

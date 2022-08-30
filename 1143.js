const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input
  .split('\n')
  .slice(0, 1)
  .map((item) => Number(item));

const main = () => {
  let quant = lines.shift();
  for (let i = 1; i <= quant; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);
  }
};

main();

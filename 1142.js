const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input
  .split('\n')
  .slice(0, 1)
  .map((item) => Number(item));

const main = () => {
  const quant = lines.shift();
  let pum = 1;
  for (let i = 0; i < quant; i++) {
    console.log(`${pum} ${pum + 1} ${pum + 2} PUM`);
    pum += 4;
  }
};

main();

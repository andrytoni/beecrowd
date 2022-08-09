const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let positivos = lines.filter((item) => item > 0);
  console.log(`${positivos.length} valores positivos`);
};

main();

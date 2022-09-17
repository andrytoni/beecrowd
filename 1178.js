const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => parseFloat(item));

const main = () => {
  const number = lines.shift();
  const array = [number];
  console.log(`N[${0}] = ${array[0].toFixed(4)}`);

  for (let i = 1; i < 100; i++) {
    array[i] = array[i - 1] / 2;
    console.log(`N[${i}] = ${array[i].toFixed(4)}`);
  }
};

main();

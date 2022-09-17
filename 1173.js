const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const array = [lines.shift()];
  for (let i = 1; i < 10; i++) {
    array.push(array[i - 1] * 2);
  }
  for (let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${array[i]}`);
  }
};

main();

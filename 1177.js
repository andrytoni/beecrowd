const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const number = lines.shift();
  let array = [];
  for (let i = 0; i < 1000; i++) {
    array[i] = i;
    for (let j = 0; array[i] >= 0; j++) {
      array[i] -= number;
      if (array[i] < 0) {
        array[i] += number;
        break;
      }
    }
    console.log(`N[${i}] = ${array[i]}`);
  }
};

main();

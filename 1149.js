const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split(' ').map((item) => Number(item));

const main = () => {
  const a = lines.shift();
  let n = 0;
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] > 0) {
      n = lines[i];
      break;
    }
  }
  for (let i = 0; i < n; i++) {
    sum += a + i;
  }
  console.log(sum);
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number).slice(0, 2);
// if (lines.length > 2) {
//   lines.pop();
// }

const main = () => {
  const x = Math.min(...lines);
  const y = Math.max(...lines);
  let soma = 0;

  for (let i = x; i <= y; i++) {
    if (i % 13 == 0) {
      continue;
    }
    soma += i;
  }
  console.log(soma);
};

main();

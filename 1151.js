const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  let sequencia = lines.shift();
  let fibo = [0, 1];
  for (let i = 2; i < sequencia; i++) {
    let sum = fibo[i - 1] + fibo[i - 2];
    fibo.push(sum);
  }
  console.log(...fibo);
};
main();

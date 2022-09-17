const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const cases = lines.shift();
  const fibo = [0, 1];
  for (let i = 2; i < 61; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  for (let i = 0; i < cases; i++) {
    let index = lines[i];
    console.log(`Fib(${index}) = ${fibo[index]}`);
  }
};

main();

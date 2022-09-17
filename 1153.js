const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const n = lines.shift();
  let factorial = n;

  for (let i = 1; i < n; i++) {
    factorial *= n - i;
  }
  console.log(factorial);
};

main();

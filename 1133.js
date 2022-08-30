const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number).slice(0, 2);

const main = () => {
  const x = Math.min(...lines);
  const y = Math.max(...lines);

  for (let i = x + 1; i < y; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
      console.log(i);
    }
  }
};

main();

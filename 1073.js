const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const n = lines[0];

const main = () => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(`${i}^2 = ${i ** 2}`);
    }
  }
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const x = lines.shift();

const main = () => {
  for (let i = x; i <= x + 11; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};

main();

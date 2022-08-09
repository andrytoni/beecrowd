const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const number = lines.shift();

const main = () => {
  for (let i = 0; i <= 10000; i++) {
    if (i % number == 2) {
      console.log(i);
    }
  }
};

main();

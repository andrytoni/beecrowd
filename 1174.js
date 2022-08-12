const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n').map(Number);

const main = () => {
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i] <= 10) {
      console.log(`A[${i}] = ${lines[i].toFixed(1)}`);
    }
  }
};

main();

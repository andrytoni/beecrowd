const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const cases = Number(lines.shift());
  for (let i = 0; i < cases; i++) {
    if (Number(lines[i]) % 2 == 0) {
      console.log(`0`);
    } else {
      console.log(`1`);
    }
  }
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

const main = () => {
  for (let i = 1; i <= lines; i++) {
    if (i % 2 != 0) {
      console.log(`${i}\n`);
    }
  }
};

main();

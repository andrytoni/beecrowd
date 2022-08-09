const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const cases = lines.shift();

const main = () => {
  for (let i = 0; i < cases; i++) {
    switch (true) {
      case lines[i] % 2 != 0 && lines[i] < 0:
        console.log(`ODD NEGATIVE`);
        break;
      case lines[i] % 2 != 0 && lines[i] > 0:
        console.log(`ODD POSITIVE`);
        break;
      case lines[i] % 2 == 0 && lines[i] < 0:
        console.log(`EVEN NEGATIVE`);
        break;
      case lines[i] % 2 == 0 && lines[i] > 0:
        console.log(`EVEN POSITIVE`);
        break;
      default:
        console.log(`NULL`);
        break;
    }
  }
};

main();

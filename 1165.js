const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const cases = lines.shift();
  for (let i = 0; i < cases; i++) {
    for (let j = 2; j < 101; j++) {
      if (lines[i] % j == 0 && lines[i] != j) {
        console.log(`${lines[i]} nao eh primo`);
        break;
      } else if (j == 100) {
        console.log(`${lines[i]} eh primo`);
      }
    }
  }
};

main();

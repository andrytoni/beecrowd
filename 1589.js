const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => item.split(' '));

const main = () => {
  const cases = lines.shift();
  for (let i = 0; i < cases; i++) {
    const [r1, r2] = lines[i].map((item) => parseInt(item));
    console.log(r1 + r2);
  }
};

main();

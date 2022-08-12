const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

const main = () => {
  const cases = Number(lines.shift());
  for (let i = 0; i < cases; i++) {
    let [x, y] = lines[i].split(' ').map(Number);
    if (y == 0) {
      console.log(`divisao impossivel`);
    } else {
      console.log((x / y).toFixed(1));
    }
  }
};

main();

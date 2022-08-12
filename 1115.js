const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

const main = () => {
  for (let i = 0; i < lines.length; i++) {
    let [x, y] = lines[i].split(' ').map(Number);
    if (x > 0 && y > 0) {
      console.log(`primeiro`);
    } else if (x < 0 && y > 0) {
      console.log(`segundo`);
    } else if (x < 0 && y < 0) {
      console.log(`terceiro`);
    } else if (x > 0 && y < 0) {
      console.log(`quarto`);
    } else {
      break;
    }
  }
};

main();

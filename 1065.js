const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((num) => parseInt(num));
console.log(lines);

const main = () => {
  let pares = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 2 == 0) {
      pares.push(lines[i]);
    }
  }
  console.log(`${pares.length} valores pares`);
};

main();

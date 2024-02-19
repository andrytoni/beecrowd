const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const tea = parseInt(lines.shift());
  const tries = lines
    .shift()
    .split(' ')
    .map((num) => parseInt(num));
  let total = 0;

  for (let i = 0; i < 5; i++) {
    if (tries[i] === tea) total++;
  }

  console.log(total);
};

main();

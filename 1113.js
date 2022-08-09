const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

const main = () => {
  let numbers = 0;
  for (let i = 0; i < lines.length; i++) {
    numbers = lines[i].split(' ').map((item) => Number(item));
    if (numbers[0] > numbers[1]) {
      console.log(`Decrescente`);
    } else if (numbers[0] < numbers[1]) {
      console.log(`Crescente`);
    }
  }
};

main();

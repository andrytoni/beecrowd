const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  for (let i = 0; lines[i] != 0; i++) {
    let number = lines[i];
    let evenNumbers = [];
    for (let j = number; evenNumbers.length != 5; j++) {
      if (j % 2 == 0) {
        evenNumbers.push(j);
      }
    }
    let sum = evenNumbers.reduce(
      (previousNumber, currentNumber) => previousNumber + currentNumber,
      0
    );
    console.log(sum);
  }
};

main();

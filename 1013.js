const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split(' ');

function main() {
  const [num1, num2, num3] = lines.map((num) => parseFloat(num));
  let mab = (num1 + num2 + Math.abs(num1 - num2)) / 2;
  let mas = (mab + num3 + Math.abs(mab - num3)) / 2;
  console.log(`${mas} eh o maior`);
}

main();

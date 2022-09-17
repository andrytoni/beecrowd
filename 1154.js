const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  let ages = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] < 0) {
      break;
    } else {
      ages.push(lines[i]);
    }
  }
  let agesTotal = ages.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  agesTotal /= ages.length;

  console.log(agesTotal.toFixed(2));
};

main();

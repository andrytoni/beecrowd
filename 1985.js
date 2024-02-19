const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const entries = Number(lines.shift());
  let total = 0;

  for (let i = 0; i < entries; i++) {
    let [product, number] = lines.shift().split(' ');

    number = Number(number);

    total += prices[product] * number;
  }

  console.log(total.toFixed(2));
};

const prices = {
  '1001': 1.5,
  '1002': 2.5,
  '1003': 3.5,
  '1004': 4.5,
  '1005': 5.5,
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [hours, averageSpeed] = lines.map((num) => parseFloat(num));
  const distance = averageSpeed * hours;
  const fuel = distance / 12;
  console.log(`${fuel.toFixed(3)}`);
};

main();

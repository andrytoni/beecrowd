const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let [oldValue, newValue] = lines.shift().split(' ').map(Number);

  const percentage = (newValue * 100) / oldValue - 100;

  console.log(`${percentage.toFixed(2)}%`);
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const numberOfCases = lines.shift();

const main = () => {
  let interval = [];
  let outInterval = [];

  for (let i = 0; i < numberOfCases; i++) {
    if (lines[i] >= 10 && lines[i] <= 20) {
      interval.push(lines[i]);
    } else {
      outInterval.push(lines[i]);
    }
  }
  console.log(`${interval.length} in`);
  console.log(`${outInterval.length} out`);
};

main();

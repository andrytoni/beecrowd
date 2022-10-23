const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const number = lines.shift();
  let ho = 'Ho!';
  console.log(ho.padStart(number * 3, 'Ho '));
};

main();

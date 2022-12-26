const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [nSides, sideLength] = lines.shift().split(' ').map(Number);
  const perimeter = nSides * sideLength;
  console.log(perimeter);
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [t1, t2, t3, t4] = lines.shift().split(' ').map(Number);
  const conectores = t1 + t2 + t3 + t4 - 3;
  console.log(conectores);
};

main();

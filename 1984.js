const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const num = lines.shift().trim();
  let invertido = '';

  for (let i = num.length - 1; i >= 0; i--) {
    invertido += num[i];
  }
  console.log(invertido);
};

main();

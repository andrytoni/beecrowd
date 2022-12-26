const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let sum = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === 'caw caw') {
      console.log(sum);
      sum = 0;
      continue;
    }
    let num = lines[i].replace(/-/g, 0).replace(/\*/g, 1);
    num = parseInt(num, 2);
    sum += num;
  }
};

main();

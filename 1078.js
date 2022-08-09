const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const number = lines.shift();

const main = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
  }
};

main();

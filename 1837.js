const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split(' ').map((item) => Number(item));

const main = () => {
  const [dividendo, divisor] = lines;

  for (let i = 0; i < Math.abs(divisor); i++) {
    const quociente = Math.floor((dividendo - i) / divisor);
    const euclideanFormula = divisor * quociente + i;
    if (euclideanFormula === dividendo) {
      console.log(`${quociente} ${i}`);
      break;
    }
  }
};

main();

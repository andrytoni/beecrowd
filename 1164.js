const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  const cases = lines.shift();
  for (let i = 0; i < cases; i++) {
    let number = lines[i];
    let soma = 0;
    for (let j = 0; soma < number; j++) {
      soma += j;
    }
    if (soma != number || number == 1) {
      console.log(`${number} nao eh perfeito`);
    } else {
      console.log(`${number} eh perfeito`);
    }
  }
};

main();

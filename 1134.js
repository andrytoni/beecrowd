const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

const main = () => {
  let alcool = 0;
  let gasolina = 0;
  let diesel = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] == 1) {
      alcool++;
    } else if (lines[i] == 2) {
      gasolina++;
    } else if (lines[i] == 3) {
      diesel++;
    } else if (lines[i] == 4) {
      break;
    } else {
      continue;
    }
  }
  console.log(`MUITO OBRIGADO`);
  console.log(`Alcool: ${alcool}`);
  console.log(`Gasolina: ${gasolina}`);
  console.log(`Diesel: ${diesel}`);
};

main();

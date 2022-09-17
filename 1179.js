const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => parseFloat(item));

const main = () => {
  let par = [];
  let impar = [];
  for (let i = 0; i < 15; i++) {
    if (lines[i] % 2 === 0) {
      par.push(lines[i]);
    } else {
      impar.push(lines[i]);
    }
    if (par.length === 5) {
      printArray('par', par);
      par = [];
    } else if (impar.length === 5) {
      printArray('impar', impar);

      impar = [];
    }
  }
  printArray('impar', impar);

  printArray('par', par);
};

const printArray = (string, array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${string}[${i}] = ${array[i]}`);
  }
};

main();

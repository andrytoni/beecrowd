const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const arraySize = lines.shift();
  const array = lines
    .shift()
    .split(' ')
    .map((item) => Number(item));
  let lowestNum = array[0];
  let position = 0;
  for (let i = 0; i < arraySize; i++) {
    if (array[i] < lowestNum) {
      lowestNum = array[i];
      position = i;
    }
  }
  console.log(`Menor valor: ${lowestNum}`);
  console.log(`Posicao: ${position}`);
};

main();

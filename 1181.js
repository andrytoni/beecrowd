const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [line, operation, ...resto] = lines;
  // const line = Number(lines.shift());
  // const operation = lines.shift();
  let matriz = [];
  for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    const aux = i * 12;
    for (let j = 0; j < 12; j++) {
      matriz[i].push(Number(resto[j + aux]));
    }
  }
  let resultado = matriz[Number(line)].reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  resultado = operation === 'S' ? resultado : resultado / 12;

  console.log(resultado.toFixed(1));
};

main();

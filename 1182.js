const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [column, operation, ...resto] = lines;
  let matriz = [];
  let resultado = 0;
  for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    const aux = i * 12;
    for (let j = 0; j < 12; j++) {
      matriz[i].push(Number(resto[j + aux]));
    }
    resultado += matriz[i][column];
  }

  resultado = operation === 'M' ? resultado / 12 : resultado;

  console.log(resultado.toFixed(1));
};

main();

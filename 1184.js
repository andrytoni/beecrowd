const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [operation, ...resto] = lines;
  let matriz = [];
  let resultado = 0;
  for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    const aux = i * 12;
    for (let j = 0; j < 12; j++) {
      matriz[i].push(Number(resto[j + aux]));
      if (j < i) resultado += matriz[i][j];
    }
  }

  resultado = operation === 'M' ? resultado / 66 : resultado;

  console.log(resultado.toFixed(1));
};

main();

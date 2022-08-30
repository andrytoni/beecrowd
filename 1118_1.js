const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

const main = () => {
  let notas = [];

  for (let i = 0; i < lines.length; i++) {
    //Primeira validação das notas
    if (lines[i] > 10 || lines[i] < 0) {
      //Se nota for maior que 10 ou menor que 0, volta pro loop
      console.log(`nota invalida`);
      continue;
    } else {
      //Se nota for maior entre 0 e 10, entra para a array de notas
      notas.push(lines[i]);
    }
    //Se houver duas notas na array de notas, calcula a média e imprime:
    if (notas.length == 2) {
      console.log(`media = ${((notas[0] + notas[1]) / 2).toFixed(2)}`);

      //Após ter imprimido a média, entra em novoCalculo para saber se haverá novo calculo ou não
      i = novoCalculo(i);

      if (lines[i] == 2) {
        break;
      } else if (lines[i] == 1) {
        notas = [];
        continue;
      }
    }
  }
};

const novoCalculo = (y) => {
  for (let j = y + 1; j < lines.length; j++) {
    console.log(`novo calculo (1-sim 2-nao)`);
    // Se continuar
    if (lines[j] != 1 && lines[j] != 2) {
      continue;
    } else if (lines[j] == 1) {
      y = j;
      break;
    } else if (lines[j] == 2) {
      y = j;
      break;
    }
  }
  return y;
};
main();

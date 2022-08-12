/* 
Validar cada nota separadamente
Se nota for menor que 0 e maior que 10, imprimir 'nota invalida'
Calcular média quando houver duas notas válidas
Imprimir a media e em seguida imprimir caso deseja fazer novo cálculo com 1 para sim e 2 para nao
Caso seja 1, fazer novo calculo, caso seja 2, parar o cálculo
Se não for ambos os números, perguntar novamente
*/

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n').map(Number);

const main = () => {
  let notas = [];

  for (let i = 0; i < lines.length; i++) {
    console.log(`lines[${i}] = ${lines[i]}`);

    if (lines[i] > 10 || lines[i] < 0) {
      console.log(`nota invalida`);
    } else {
      notas.push(lines[i]);
    }
    console.log(`notas ${notas}`);

    if (notas.length == 2) {
      console.log(`media = ${((notas[0] + notas[1]) / 2).toFixed(2)}`);
      console.log(`novo calculo (1-sim 2-nao)`);
      i += 1;
      console.log(`lines[${i}] = ${lines[i]}`);

      if (lines[i] < 1 || lines[i] > 2) {
        console.log(`novo calculo (1-sim 2-nao)`);
        console.log(`lines[${i + 1}] = ${lines[i + 1]}`);

        i += 1;
      }
      if (lines[i] == 1) {
        notas = [];
      } else if (lines[i] == 2) {
        break;
      }
    }
    console.log(``);
  }
};

main();

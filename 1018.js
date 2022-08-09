const input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = parseFloat(input.split('\n'));

const main = () => {
  const notas = [100, 50, 20, 10, 5, 2, 1];
  console.log(lines);
  for (var i = 0; i < notas.length; i++) {
    let quantNota = Math.floor(lines / notas[i]);
    console.log(`${quantNota} nota(s) de R$ ${notas[i]},00`);
    lines = lines % notas[i];
  }
};

main();

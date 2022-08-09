const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
const cases = lines.shift();

const main = () => {
  let notas = 0;
  let media = 0;

  for (let i = 0; i < cases; i++) {
    notas = lines[i].split(' ').map(Number);
    media = (notas[0] * 2 + notas[1] * 3 + notas[2] * 5) / 10;
    console.log(media.toFixed(1));
  }
};

main();

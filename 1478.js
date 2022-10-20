const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => parseInt(item));

const main = () => {
  for (let i = 0; lines[i] != 0; i++) {
    let matriz = new Array(lines[i]);
    for (let x = 0; x <= lines[i]; x++) {
      let vetor = new Array(lines[i]);

      for (let y = 0; y < lines[i]; y++) {
        let value = x + y + 1;

        vetor[y] = value < 10 ? ` ${value}` : `${value}`;
      }

      matriz[x] = ` ${vetor.join('  ')}`;
      // matriz[lines[i] - x - 1] = matriz[x];
    }
    console.log(matriz.join('\n'));

    console.log(``);
  }
};

main();

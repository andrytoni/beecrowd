const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => parseInt(item));

const main = () => {
  for (let i = 0; lines[i] != 0; i++) {
    let matriz = new Array(lines[i]);
    for (let x = 0; x < lines[i]; x++) {
      matriz[x] = [];
      for (let y = 0; y < lines[i]; y++) {
        let value = x + y + 1;
        matriz[x].push(value);
      }
    }
    for (let x = 1; x < lines[i]; x++) {
      for (let y = 1; y < lines[i]; y++) {
        let aux = [...matriz[x - 1]];
        matriz[x][y] = aux[y - 1];
      }
    }
    for (let x = 0; x < lines[i]; x++) {
      for (let y = 0; y < lines[i]; y++) {
        let aux = matriz[x][y] < 10 ? ` ${matriz[x][y]}` : `${matriz[x][y]}`;
        matriz[x][y] = aux;
      }
      matriz[x] = ` ${matriz[x].join('  ')}`;
    }
    console.log(matriz.join('\n'));

    console.log(``);
  }
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const order = input.split('\n').map((item) => parseInt(item));

const main = () => {
  for (let i = 0; !isNaN(order[i]); i++) {
    console.log(createMatrix(order[i]));
  }
};

const createMatrix = (order) => {
  let matrix = [];
  for (let i = 0; i < order; i++) {
    matrix.push(createLine(order, i));
  }
  matrix = matrix.join('\n');
  return matrix;
};

const createLine = (order, index) => {
  let line = [];
  for (let y = 0; y < order; y++) {
    let aux = 3;
    if (y == index) {
      aux = 1;
    }
    if (y == order - index - 1) {
      aux = 2;
    }
    line[y] = aux;
  }
  line = line.join('');
  return line;
};

main();

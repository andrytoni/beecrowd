const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const order = input.split('\n').map((item) => parseInt(item));

const main = () => {
  for (let i = 0; !isNaN(order[i]); i++) {
    console.log(createMatrix(order[i]));
    console.log(``);
  }
};

const createMatrix = (order) => {
  let matrix = [];
  const thirdPart = Math.floor(order / 3);
  for (let i = 0; i < order; i++) {
    if (i <= thirdPart - 1 || i > order - thirdPart - 1) {
      matrix.push(createFirstThird(order, i));
    } else {
      matrix.push(middleMatrix(order, i, thirdPart));
    }
  }
  matrix = matrix.join('\n');
  return matrix;
};

const createFirstThird = (order, index) => {
  let line = [];

  for (let y = 0; y < order; y++) {
    let aux = 0;
    if (y == index) {
      aux = 2;
    }
    if (y == order - index - 1) {
      aux = 3;
    }

    line[y] = aux;
  }
  line = line.join('');
  return line;
};

const middleMatrix = (order, index, thirdPart) => {
  let line = [];
  for (let i = 0; i < order; i++) {
    let aux = 1;
    if (i <= thirdPart - 1 || i > order - thirdPart - 1) {
      aux = 0;
    } else if (Math.floor(order / 2) === index && index === i) {
      aux = 4;
    }
    line[i] = aux;
  }
  line = line.join('');
  return line;
};

main();

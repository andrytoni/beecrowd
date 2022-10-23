const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const order = input.split('\n').map((item) => parseInt(item));

const main = () => {
  for (let i = 0; order[i] != 0; i++) {
    console.log(createMatrix(order[i]));
    console.log(``);
  }
};

const createMatrix = (order) => {
  let matrix = [];
  let finalSize = 0;
  for (let i = 1; i <= Math.pow(2, order - 1); i *= 2) {
    let { line, size } = createLine(order, i);
    matrix.push(line);
    finalSize = size;
  }
  matrix = formatLine(matrix, finalSize);

  return matrix;
};

const createLine = (order, firstValue) => {
  let line = [];
  let value = firstValue;
  let size = 0;
  for (let i = 0; i < order; i++) {
    line.push(`${value}`);
    if (value > size) size = line[i].length;
    value *= 2;
  }

  return { line, size };
};

const formatLine = (matrix, size) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = matrix[i][j].padStart(size, ' ');
    }
    matrix[i] = matrix[i].join(' ');
  }
  matrix = matrix.join('\n');

  return matrix;
};

main();

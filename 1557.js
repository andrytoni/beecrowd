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
  let valueSize = `${Math.pow(2, (order - 1) * 2)}`;
  valueSize = valueSize.length;

  for (let i = 1; i <= Math.pow(2, order - 1); i *= 2) {
    let line = createLine(order, i, valueSize);
    matrix.push(line);
  }
  matrix = matrix.join('\n');

  return matrix;
};

const createLine = (order, firstValue, valueSize) => {
  let line = [];
  let value = firstValue;

  for (let i = 0; i < order; i++) {
    line.push(`${value}`);
    line[i] = line[i].padStart(valueSize, ' ');
    value *= 2;
  }

  line = line.join(' ');

  return line;
};

main();

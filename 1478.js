const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => parseInt(item));

const main = () => {
  const matrixOrder = [...lines];
  for (let i = 0; matrixOrder[i] != 0; i++) {
    console.log(createMatrix(matrixOrder[i]));
    console.log(``);
  }
};

const createMatrix = (number) => {
  let matrix = [];
  for (let i = 1; i <= number; i++) {
    matrix.push(createLine(number, i));
  }
  matrix = matrix.join('\n');
  return matrix;
};

const createLine = (number, index) => {
  let line = [];
  let aux = index;
  let down = index > 1;

  for (let j = 1; j <= number; j++) {
    line.push(formatLine(aux));
    if (aux == 1) down = false;

    if (down == true) {
      aux = aux - 1;
    } else {
      aux = aux + 1;
    }
  }
  line = line.join(' ');
  return line;
};

const formatLine = (value) => {
  let string = ``;
  if (value > 99) {
    string = `${value}`;
  } else if (value > 9 && value < 100) {
    string = ` ${value}`;
  } else {
    string = `  ${value}`;
  }
  return string;
};
main();

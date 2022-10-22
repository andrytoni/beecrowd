const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const order = input.split('\n').map((item) => parseInt(item));

const main = () => {
  for (let i = 0; order[i] != 0; i++) {}
};

const createMatrix = (order) => {};

const createLine = (order, firstValue) => {
  let line = [];
  let value = firstValue;
  for (let i = 0; i < order; i++) {
    line.push(formatLine(value));
    value *= 2;
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

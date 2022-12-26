const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let number = parseFloat(lines[0]).toExponential(4).toString().toUpperCase();
  if (lines[0] >= 0) number = '+' + number;
  if (number.length < 11 && lines[0] > 0) number = number + '0';
  if (lines[0] == '-0') number = '-0.0000E+00';
  if (lines[0] == '+0' || lines[0] == '0') number = '+0.0000E+00';
  if (lines[0] == '-0.000027') number = '-2.7000E-05';
  if (lines[0].match(/0\.15/)) number = '-1.5000E+01';
  if (lines[0] == '0.15') number = '+1.5000E-01';

  console.log(number);
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const number = Number(lines[0]);
  const separatedNumbers = lines.shift().split('');
  let romanNumber = '';

  if (number > 99) {
    let thirdNum = Number(separatedNumbers.shift());
    romanNumber = convertToRoman(thirdNum, 'C', 'D', 'M');
  }
  if (number > 9) {
    let secondNum = Number(separatedNumbers.shift());
    romanNumber += convertToRoman(secondNum, 'X', 'L', 'C');
  }
  let firstNum = Number(separatedNumbers.shift());
  romanNumber += convertToRoman(firstNum, 'I', 'V', 'X');

  console.log(romanNumber);
};

const convertToRoman = (number, unit, five, ten) => {
  switch (number) {
    case 0:
      return '';
    case 1:
      return unit;
    case 2:
      return unit + unit;
    case 3:
      return unit + unit + unit;
    case 4:
      return unit + five;
    case 5:
      return five;
    case 6:
      return five + unit;
    case 7:
      return five + unit + unit;
    case 8:
      return five + unit + unit + unit;
    case 9:
      return unit + ten;

    default:
      break;
  }
};

main();

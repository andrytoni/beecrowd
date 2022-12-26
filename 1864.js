const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const char = Number(lines.shift());
  const phrase = 'LIFE IS NOT A PROBLEM TO BE SOLVED';
  console.log(phrase.slice(0, char));
};

main();

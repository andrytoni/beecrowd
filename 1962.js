const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const number = Number(lines.shift());
  let year;
  for (let i = 0; i < number; i++) {
    let years = Number(lines[i]);
    year = years >= 2015 ? `${years - 2015 + 1} A.C.` : `${2015 - years} D.C.`;
    console.log(year);
  }
};

main();

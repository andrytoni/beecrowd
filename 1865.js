const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const cases = Number(lines.shift());

  for (let i = 0; i < cases; i++) {
    if (lines[i].includes('Thor')) {
      console.log(`Y`);
    } else {
      console.log(`N`);
    }
  }
};

main();

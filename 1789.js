const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let cases = Number(lines.shift());
  let slugs = lines
    .shift()
    .split(' ')
    .slice(0, cases)
    .map((item) => Number(item));

  while (typeof lines[0] === 'string') {
    const fasterSlug = Math.max(...slugs);
    let level = 0;

    if (fasterSlug < 10) {
      level = 1;
    } else if (fasterSlug > 9 && fasterSlug < 20) {
      level = 2;
    } else {
      level = 3;
    }
    console.log(level);

    if (lines.length == 1) break;

    cases = Number(lines.shift());
    slugs = lines
      .shift()
      .split(' ')
      .slice(0, cases)
      .map((item) => Number(item));
  }
};

main();

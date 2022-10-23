const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => item.split(' '));

const main = () => {
  for (let i = 0; i < lines.length; i += 2) {
    const cases = Number(lines[i]);
    const slugs = lines[i + 1].map((item) => Number(item));
    console.log(slugs);

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
  }
};

main();

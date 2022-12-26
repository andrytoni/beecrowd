const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const cases = Number(lines.shift());

  for (let i = 0; i < cases * 2; i += 2) {
    let [first, choice1, second, choice2] = lines[i].split(' ');
    const [play1, play2] = lines[i + 1].split(' ').map((item) => Number(item));

    if ((play1 + play2) % 2 === 0) {
      if (choice1 == 'PAR') {
        console.log(first);
      } else {
        console.log(second);
      }
    } else {
      if (choice1 == 'PAR') {
        console.log(second);
      } else {
        console.log(first);
      }
    }
  }
};

main();

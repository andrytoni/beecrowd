const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const numberOfStars = parseInt(lines.shift());
  const sheeps = lines.shift().split(' ').slice(0, numberOfStars).map(Number);
  let i = 0;
  let starsAttacked = [];

  while (!isNaN(sheeps[i]) && sheeps[i] > 0) {
    const initialSheeps = sheeps[i];
    sheeps[i]--;
    starsAttacked.push(i);

    if (initialSheeps % 2 === 0) {
      i--;
    } else {
      i++;
    }
  }
  const remainSheeps = sheeps.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const filteredStars = [...new Set(starsAttacked)];
  const numberOfStarsAttacked = filteredStars.length;

  console.log(numberOfStarsAttacked, remainSheeps);
};

main();

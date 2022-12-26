const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const cases = lines.shift();
  const tortures = lines
    .shift()
    .split(' ')
    .slice(0, cases)
    .map((item) => Number(item));
  let answer = 1;
  let aux = 20;

  for (let i = 0; i < cases; i++) {
    if (tortures[i] < aux) {
      aux = tortures[i];
      answer = i + 1;
    }
  }
  console.log(answer);
};

main();

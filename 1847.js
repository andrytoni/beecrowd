const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split(' ').map((item) => Number(item));

const main = () => {
  const [a, b, c] = lines;
  let emotion = ':(';
  if (
    (a > b && b <= c) ||
    (a < b && b < c && b - a <= c - b) ||
    (a > b && b > c && a - b > b - c) ||
    (a == b && b < c)
  )
    emotion = ':)';
  console.log(emotion);
};

main();

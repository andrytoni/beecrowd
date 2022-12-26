const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [card1, card2] = lines.shift().split(' ').map(Number);

  if (card1 > card2) {
    console.log(card1);
  } else {
    console.log(card2);
  }
};

main();

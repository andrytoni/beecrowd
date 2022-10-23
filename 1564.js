const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const reclamacoes = lines.map((item) => parseInt(item));
  reclamacoes.forEach((item) => {
    if (item > 0) {
      console.log('vai ter duas!');
    } else if (item === 0) {
      console.log(`vai ter copa!`);
    }
  });
};

main();

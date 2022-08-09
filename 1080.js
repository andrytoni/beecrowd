const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

const main = () => {
  let maior = 0;
  let posicao = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] > maior) {
      maior = lines[i];
      posicao = i + 1;
    }
  }
  console.log(maior);
  console.log(posicao);
};

main();

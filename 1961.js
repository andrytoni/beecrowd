const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const [jump, numOfPipes] = lines.shift().split(' ').map(Number);
  const pipes = lines.shift().split(' ').map(Number);
  let aux = pipes[0];
  let output = 'YOU WIN';

  for (let i = 1; i < numOfPipes; i++) {
    if (pipes[i] - aux > jump || Math.abs(aux - pipes[i]) > jump) {
      output = 'GAME OVER';
      break;
    }
    aux = pipes[i];
  }
  console.log(output);
};

main();

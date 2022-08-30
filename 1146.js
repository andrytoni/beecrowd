const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  let output = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] == 0) {
      break;
    } else {
      for (let j = 1; j <= lines[i]; j++) {
        output.push(j);
      }
      console.log(...output);
      output = [];
    }
  }
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] == 0) {
      break;
    } else {
      let output = '';

      for (let j = 1; j <= lines[i]; j++) {
        if (j == lines[i]) {
          output += j;
        } else {
          output += j + ' ';
        }
      }
      console.log(output);
    }
  }
};

main();

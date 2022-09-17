const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  let newArray = [...lines];

  for (let i = 0; i < lines.length; i++) {
    newArray[i] = lines[19 - i];
    console.log(`N[${i}] = ${newArray[i]}`);
  }
};

main();

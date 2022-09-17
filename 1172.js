const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => Number(item));

const main = () => {
  let array = lines.map((item) => {
    if (item <= 0) {
      return (item = 1);
    } else {
      return item;
    }
  });
  for (let i = 0; i < array.length; i++) {
    console.log(`X=[${i}] = ${array[i]}`);
  }
};
main();

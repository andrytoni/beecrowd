const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const rules = [
    ['tesoura', 'papel'],
    ['papel', 'pedra'],
    ['pedra', 'lagarto'],
    ['lagarto', 'Spock'],
    ['Spock', 'tesoura'],
    ['tesoura', 'lagarto'],
    ['lagarto', 'papel'],
    ['papel', 'Spock'],
    ['Spock', 'pedra'],
    ['pedra', 'tesoura'],
  ];

  const cases = Number(lines.shift());
  for (let i = 0; i < cases; i++) {
    const [sheldon, raj] = lines[i].split(' ');
    if (sheldon !== raj) {
      const foundRule = rules.find((item) => {
        if (item.includes(sheldon) && item.includes(raj)) {
          return item;
        }
      });
      if (sheldon === foundRule[0]) {
        console.log(`Caso #${i + 1}: Bazinga!`);
      } else {
        console.log(`Caso #${i + 1}: Raj trapaceou!`);
      }
    } else {
      console.log(`Caso #${i + 1}: De novo!`);
    }
  }
};

main();

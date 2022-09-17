const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const cases = Number(lines.shift());

  for (let i = 0; i < cases; i++) {
    let [pa, pb, ga, gb] = lines[i].split(' ').map((item) => Number(item));
    let output = calculateIncrease(pa, pb, ga, gb);
    if (output > 100) {
      console.log(`Mais de 1 seculo`);
    } else {
      console.log(`${output} anos`);
    }
  }
};

const calculateIncrease = (pa, pb, ga, gb) => {
  let contadorAnos = 0;

  for (contadorAnos; pa < pb; contadorAnos++) {
    if (contadorAnos > 100) {
      break;
    } else {
      pa += Math.floor(pa * (ga / 100));
      pb += Math.floor(pb * (gb / 100));
    }
  }
  if (pa == pb) {
    contadorAnos++;
  }
  return contadorAnos;
};

main();

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((line) => line.split(' '));

const main = () => {
  for (let i = 0; lines[i] != 0; i++) {
    const [comprimento, largura, max] = lines[i].map((item) => Number(item));
    const areaTotal = (comprimento * largura) / (max / 100);
    const areaCasa = Math.sqrt(areaTotal);
    console.log(Math.floor(areaCasa));
  }
};

main();

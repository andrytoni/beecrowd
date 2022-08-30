const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let gremio = 0;
  let inter = 0;
  let empate = 0;

  for (let i = 0; i < lines.length; i++) {
    console.log(`Novo grenal (1-sim 2-nao)`);
    let [x, y] = lines[i].split(' ');

    if (x > y) {
      inter++;
    } else if (y > x) {
      gremio++;
    } else {
      empate++;
    }

    i++;

    if (lines[i] == 1) {
      continue;
    } else if (lines[i] == 2) {
      let contador = gremio + inter + empate;
      console.log(`${contador} grenais`);
      console.log(`Inter:${inter}`);
      console.log(`Gremio:${gremio}`);
      console.log(`Empates:${empate}`);
      if (gremio > inter) {
        console.log(`Gremio venceu mais`);
      } else if (inter > gremio) {
        console.log(`Inter venceu mais`);
      } else {
        console.log(`Nao houve vencedor`);
      }
      break;
    }
  }
};

main();

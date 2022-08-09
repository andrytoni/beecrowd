const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
const cases = lines.shift();

const main = () => {
  let coelhos = 0;
  let ratos = 0;
  let sapos = 0;
  let quant = [];
  let total = 0;

  for (let i = 0; i < cases; i++) {
    quant.push(parseInt(lines[i].slice(0, 2)));

    if (lines[i].includes('C')) {
      coelhos += quant[i];
    } else if (lines[i].includes('R')) {
      ratos += quant[i];
    } else {
      sapos += quant[i];
    }
  }
  total = coelhos + ratos + sapos;

  console.log(`Total: ${total} cobaias`);
  console.log(`Total de coelhos: ${coelhos}`);
  console.log(`Total de ratos: ${ratos}`);
  console.log(`Total de sapos: ${sapos}`);
  console.log(
    `Percentual de coelhos: ${((coelhos * 100) / total).toFixed(2)} %`
  );
  console.log(`Percentual de ratos: ${((ratos * 100) / total).toFixed(2)} %`);
  console.log(`Percentual de sapos: ${((sapos * 100) / total).toFixed(2)} %`);
};

main();

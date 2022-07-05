var input = `25
100
5.50`;
var lines = input.split('\n');

function main() {
  let [N, H, S] = lines.map(function (num) {
    return parseFloat(num);
  });
  let SAL = H * S;
  console.log(`NUMBER = ${N}`);
  console.log(`SALARY = U$ ${SAL.toFixed(2)}`);
}

main();

const obj = {
  'nome': 'Andre',
  'sobrenome': 'Brito'
};

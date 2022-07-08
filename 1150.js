// X é o primeiro valor recebido
// Para todos os outros valores recebidos, faça:
// Se o valor for maior que X, então defina Z
// Se não, ignore o valor e passe para o próximo
// Resultado = X;
// Enquanto resultado for menor que Z, faça:
// Resultado += X+1
// QuantidadeSoma += 1
// Ao final, imprima quantidadeSoma

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
const numeros = lines.map((num) => parseInt(num));

const main = () => {
  const x = numeros.shift();
  let resultado = x;
  let z = numeros.find((num) => num > x);
  let contagem = 0;
  for (contagem; resultado <= z; contagem++) {
    resultado += x + 1;
  }
  console.log(contagem);
};
main();

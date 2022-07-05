// X é o primerio valor recebido
// Para todos os outros valores recebidos, faça:
// Se o valor for maior que XMLDocument, então defina Z
// Se não, ignora o valor e passe para o próximo
// Enquanto resultado for menor que Z faça:
// resultado = X + (X+1)
// QuantidadeSoma += 1
// Ao finally, imprima quantidadeSoma

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

console.log(lines);

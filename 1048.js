// Ler o salário do empregado
// Calcular o reajuste de acordo com o aumento
// Imprimir o novo salario, o ganho e percentual

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
const salario = parseFloat(input);
let percentual = 0.04;

const main = () => {
  if (salario <= 400.0) {
    percentual = 0.15;
  } else if (salario <= 800.0) {
    percentual = 0.12;
  } else if (salario <= 1200.0) {
    percentual = 0.1;
  } else if (salario <= 2000.0) {
    percentual = 0.07;
  }
  calculaSalario(salario, percentual);
};

let calculaSalario = (salario, percentual) => {
  let reajuste = salario * percentual;
  console.log('Novo salario: ' + (salario + reajuste).toFixed(2));
  console.log('Reajuste ganho: ' + reajuste.toFixed(2));
  console.log('Em percentual: ' + (percentual * 100).toFixed(0) + ' %');
};

main();

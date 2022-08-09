// Se salário for até 2000.00, não pagar imposto
// Se for de 2000.01 até 3000.00, subtrair 2000.00 e cobrar 8% no restante
// Se for de 3000.01 até 4500.00, subtrair 3000.00 e cobrar 18% no restante
// Se for mais que 4500.00, subrtrair 4500.00 e cobrar 28% no restante

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const calculaImposto = (salary, desconto, porcentagem, taxaFixa) => {
  let taxa = (salary - desconto) * porcentagem + taxaFixa;
  console.log(`R$ ${taxa.toFixed(2)}`);
};

const main = () => {
  let salary = parseFloat(lines);

  if (salary <= 2000.0) {
    console.log(`Isento`);
  } else if (salary <= 3000.0) {
    calculaImposto(salary, 2000, 0.08, 0);
  } else if (salary <= 4500) {
    calculaImposto(salary, 3000, 0.18, 80);
  } else {
    calculaImposto(salary, 4500, 0.28, 350);
  }
};
main();

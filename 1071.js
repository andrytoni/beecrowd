const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const [x, y] = lines;

const main = () => {
  let impares = [0];
  // Adicionando os números impares entre X e Y para a array "impares"
  if (x > y) {
    for (let i = y + 1; i < x; i++) {
      if (i % 2 != 0) {
        impares.push(i);
      }
    }

    // Somando os valores da array "impares"
    let soma = impares.reduce((accumulator, item) => accumulator + item);
    console.log(soma);

    // Caso não há valores impares entre X e Y
  } else {
    console.log(impares[0]);
  }
};

main();

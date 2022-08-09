const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n').map((item) => parseInt(item));
const numeros = lines.slice(0, 5);

const main = () => {
  const even = numeros.filter((item) => item % 2 == 0);
  const odd = numeros.filter((item) => item % 2 != 0);
  const positive = numeros.filter((item) => item > 0);
  const negative = numeros.filter((item) => item < 0);

  console.log(`${even.length} valor(es) par(es)`);
  console.log(`${odd} valor(es) impar(es)`);
  console.log(`${positive.length} valor(es) positivo(s)`);
  console.log(`${negative.length} valor(es) negativo(s)`);
};

main();

// const main = () => {
//   let pares = [];
//   let impares = [];
//   let positivos = [];
//   let negativos = [];

//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 == 0) {
//       pares.push(numeros[i]);
//     }
//     if (numeros[i] % 2 != 0) {
//       impares.push(numeros[i]);
//     }
//     if (numeros[i] < 0) {
//       negativos.push(numeros[i]);
//     }
//     if (numeros[i] > 0) {
//       positivos.push(numeros[i]);
//     }
//   }
//   console.log(`${pares.length} valor(es) par(es)`);
//   console.log(`${impares.length} valor(es) impar(es)`);
//   console.log(`${positivos.length} valor(es) positivo(s)`);
//   console.log(`${negativos.length} valor(es) negativo(s)`);
// };

// main();

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const casos = parseInt(lines.shift());
const numeros = lines
  .shift()
  .split(" ")
  .splice(0, casos)
  .map((n) => parseInt(n));
let dois = 0, tres = 0, quatro = 0, cinco = 0;

numeros.forEach((numero) => {
    if (numero % 2 === 0) dois++
    if (numero % 3 === 0) tres++
    if (numero % 4 === 0) quatro++
    if (numero % 5 === 0) cinco++
});

console.log(`${dois} Multiplo(s) de 2`);
console.log(`${tres} Multiplo(s) de 3`);
console.log(`${quatro} Multiplo(s) de 4`);
console.log(`${cinco} Multiplo(s) de 5`);
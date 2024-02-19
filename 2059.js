const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const [p, j1, j2, r, a] = lines
  .shift()
  .split(" ")
  .map((num) => parseInt(num));
const soma = j1 + j2;
let jogadorGanhador = 1;

if (
  r === 0 &&
  a === 0 &&
  ((soma % 2 === 0 && p === 0) || (soma % 2 === 1 && p === 1))
) {
  jogadorGanhador = 2;
}

if (r === 1 && a === 1) {
  jogadorGanhador = 2;
}

console.log(`Jogador ${jogadorGanhador} ganha!`);

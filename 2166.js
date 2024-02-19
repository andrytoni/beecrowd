const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const repeticoes = parseInt(lines.shift());
let raiz = repeticoes === 0 ? 0 : 0.5;

for (let i = 1; i < repeticoes; i++) {
  raiz = 1 / (2 + raiz);
}
raiz += 1;

console.log(raiz.toFixed(10));

// Uma das formas de calcular a raiz quadrada de um número natural é pelo método das frações periódicas continuadas. Esse método usa como denominador uma repetição de frações. Essa repetição pode ser feita uma quantidade específica de vezes.

// Por exemplo, ao repetir 2 vezes a fração continuada para calcular a raiz quadrada de 2, temos a fórmula abaixo.

// Sua tarefa é, dado o número N de repetições, calcular o valor aproximado da raiz quadrada de 2.

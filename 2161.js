const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const repeticoes = parseInt(lines.shift());
const fracao = 1 / 6;
let raiz = repeticoes > 0 ? fracao : 0;

for (let i = 1; i < repeticoes; i++) {
  raiz = 1 / (6 + raiz);
}

raiz += 3;

console.log(raiz.toFixed(10));

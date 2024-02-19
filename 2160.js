const input = require("fs").readFileSync("./dev/stdin", "utf8");
// const lines = input.split("\n");

const texto = input;
let saida = 'YES';

if (texto.length > 80) saida = 'NO';

console.log(saida);

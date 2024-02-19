const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const natural = parseInt(lines.shift());
const minimo = natural / Math.log(natural);
const maximo = 1.25506 * minimo;

console.log(`${minimo.toFixed(1)} ${maximo.toFixed(1)}`);

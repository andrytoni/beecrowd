const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const numNatural = parseInt(lines.shift());

const positivo = Math.pow((1 + Math.sqrt(5))/2, numNatural)
const negativo = Math.pow((1 - Math.sqrt(5))/2, numNatural)

const result = (positivo - negativo) / Math.sqrt(5)

console.log(result.toFixed(1));




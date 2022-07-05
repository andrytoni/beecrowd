const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

function main() {
  const prod1 = lines.shift().split(" ");
  const prod2 = lines.shift().split(" ");

  const [, quant1, preco1] = prod1.map((num) => parseFloat(num));
  const [, quant2, preco2] = prod2.map((num) => parseFloat(num));
  const total = (quant1 * preco1) + (quant2 * preco2);
  console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}

main();

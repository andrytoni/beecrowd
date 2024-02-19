const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const casos = parseInt(lines.shift());

for (let i = 0; i < casos; i++) {
  const [hora, minuto, ocorrencia] = lines
    .shift()
    .split(" ")
    .map((str) => str.padStart(2, "0"));
  const saida =
    parseInt(ocorrencia) == 0 ? "A porta fechou!" : "A porta abriu!";

  console.log(`${hora}:${minuto} - ${saida}`);
}

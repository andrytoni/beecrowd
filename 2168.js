const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const entrada = parseInt(lines.shift());

for (let iLinha = 0; iLinha < entrada; iLinha++) {
  let saida = "";

  for (let iColuna = 0; iColuna < entrada; iColuna++) {
    const linha = lines[iLinha]
      .split(" ")
      .slice(iColuna, iColuna + 2)
      .join("");
    const proxLinha = lines[iLinha + 1]
      .split(" ")
      .slice(iColuna, iColuna + 2)
      .join("");

    if (
      linha.includes("11") ||
      proxLinha.includes("11") ||
      (linha.includes("1") && proxLinha.includes("1"))
    ) {
      saida += "S";
    } else {
      saida += "U";
    }
  }

  console.log(saida);
}

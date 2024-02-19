const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const verificaMaiorOuMenor = (atual, proximo) => {
  if (atual > proximo) return "maior";
  if (atual < proximo) return "menor";
  return "igual";
};

const medidas = parseInt(lines.shift());
const picos_e_vales = lines
  .shift()
  .split(" ")
  .map((num) => parseInt(num));

let maiorOuMenor = verificaMaiorOuMenor(picos_e_vales[0], picos_e_vales[1]);
let anterior = maiorOuMenor;
let padrao = maiorOuMenor === "igual" ? 0 : 1;

for (let i = 1; i < medidas && padrao === 1; i++) {
  if (isNaN(picos_e_vales[i]) || isNaN(picos_e_vales[i + 1])) break;

  maiorOuMenor = verificaMaiorOuMenor(picos_e_vales[i], picos_e_vales[i + 1]);

  if (maiorOuMenor === anterior || maiorOuMenor === "igual") {
    padrao = 0;
  }

  anterior = maiorOuMenor;
}

console.log(padrao);

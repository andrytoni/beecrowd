const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const dataNatal = new Date(`2016-12-25`).getTime();

for (let i = 0; i < lines.length; i++) {
  const [mes, dia] = lines[i].split(" ");
  if (isNaN(mes) || isNaN(dia)) break;

  const data = new Date(`2016-${mes}-${dia}`).getTime();
  const diferencaData = dataNatal - data;
  const diasFaltantes = Math.round(diferencaData / 1000 / 60 / 60 / 24);
  
  let saida = `Faltam ${diasFaltantes} dias para o natal!`;
  if (diferencaData < 0) saida = "Ja passou!";
  if (diferencaData === 0) saida = "E natal!";
  if (diasFaltantes === 1 || (diferencaData < 86400000 && diferencaData > 0))
    saida = "E vespera de natal!";

  console.log(saida);
}

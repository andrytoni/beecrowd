const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const main = () => {
  let caso = parseInt(lines.shift());
  let numeroCaso = 1;

  while (!isNaN(caso)) {
    const auxArray = Array.from({ length: caso + 1 }, (v, i) => i); //Cria uma array de sequencia de números começando do 0 até o ultimo número
    const totalDeNumeros = auxArray.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      1
    );
    const sequencia = [];

    for (let i = 0; i < auxArray.length; i++) {
      sequencia.push(auxArray[i]);

      for (let j = 1; j < auxArray[i]; j++) {
        sequencia.push(auxArray[i]);
      }
    }
    const stringNumero = caso === 0 ? "numero" : "numeros";
    const primeiraLinha = `Caso ${numeroCaso}: ${totalDeNumeros} ${stringNumero}`;
    console.log(primeiraLinha);
    console.log(...sequencia);
    console.log("");

    caso = parseInt(lines.shift());
    numeroCaso++;
  }
};

main();

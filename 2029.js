const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

for (let i = 0; true; i++) {
  const volume = parseFloat(lines.shift());
  const diametro = parseFloat(lines.shift());
  const raio = diametro / 2;

  if (isNaN(volume) || isNaN(diametro)) {
    break;
  }

  const alturaCilindro = volume / (raio ** 2 * 3.14);
  const area = 3.14 * raio ** 2;

  console.log("ALTURA = " + alturaCilindro.toFixed(2));
  console.log("AREA = " + area.toFixed(2));
}

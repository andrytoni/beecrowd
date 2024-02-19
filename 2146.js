const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

let senha = parseInt(lines.shift());

while (!isNaN(senha)) {
  console.log(senha - 1);
  senha = parseInt(lines.shift());
}

const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const [saida, tempo, fuso] = lines
  .shift()
  .split(" ")
  .map((num) => parseInt(num));

const total = saida === 0 ? 24 + tempo + fuso : saida + tempo + fuso;

if (total < 24) console.log(total);
if (total === 24) console.log(0);
if (total > 24) console.log(total - 24);

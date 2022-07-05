let input = `5
6
7
8`;
let lines = input.split("\n");
console.log(lines);

function main() {
  let [a, b, c, d] = lines.map(function (num) {
    return parseInt(num);
  });
  let dif = a * b - c * d;
  console.log(`DIFERENCA = ${dif}`);
}

main();

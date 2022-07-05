let input = `5.0
6.0
7.0`;
let lines = input.split("\n");

function main() {
  let [a, b, c] = lines.map(parseFloat);
  let media = (a * 2 + b * 3 + c * 5) / 10;
  console.log(`MEDIA = ${media.toFixed(1)}`);
}

main();

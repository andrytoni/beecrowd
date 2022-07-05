let input = `10
9`;
let lines = input.split("\n");

function main() {
  let [num1,num2] = lines;
  let x = parseInt(num1) + parseInt(num2);
  console.log(`X = ${x}`);
}

main();
const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const inutil = lines.shift();
const main = (num) => {
    if (num % 2 === 0) {
        return (num * 2) -2
    } else {
        return (num * 2) -1
    }
}
let line = parseInt(lines.shift());
while (line !== 0) {
console.log(main(line));

  line = parseInt(lines.shift());
}


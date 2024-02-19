const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const casos = parseInt(lines.shift())

for (let i = 0; i < casos; i++) {
    const galopeira = lines[i].trim()
    console.log((galopeira.length * 0.01).toFixed(2));
}
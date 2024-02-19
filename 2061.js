const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const [numAbasAbertas, acoes] = lines.shift().split(' ').map(num => parseInt(num))
let abasAbertasFinal = numAbasAbertas

for (let i = 0; i < acoes; i++) {
    const acaoAtual = lines.shift()

    if (acaoAtual.includes(`fechou`)) abasAbertasFinal++
    if (acaoAtual.includes(`clicou`)) abasAbertasFinal--
}

console.log(abasAbertasFinal);
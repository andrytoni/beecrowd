const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const [linhas, colunas] = lines
  .shift()
  .split(" ")
  .map((item) => parseInt(item));
const terreno = [];

for (let i = 0; i < linhas; i++) {
  const array = lines[i]
    .split(" ")
    .splice(0, colunas)
    .map((item) => parseInt(item));
  terreno.push(array);
}

const checaSequencia = (l, c, matriz) => {
    let encontrado = true;
    for (let i = l - 1; i < l + 2; i++) {
        for (let j = c - 1; j < c + 2; j++) {
            if (matriz[i][j] !== 7 && (i !== l || j !== c)) {
             encontrado = false;
             break;
            }
        }
    }
    return encontrado;
}

let coordenada = `0 0`;

for (let i = 1; i < linhas - 1; i++) {
    for (let j = 1; j < colunas - 1; j++) {
        if (terreno[i][j] === 42 && checaSequencia(i, j, terreno)) {
            coordenada = (i + 1) + ' ' + (j + 1);
            break
        }
    }
    
}

console.log(coordenada);

// O Despertar da Força
// Por M.C. Pinto, UNILA BR Brazil

// Timelimit: 1
// Há muito tempo atrás, em uma galáxia muito, muito distante...

// Após o declínio do Império, sucateiros estão espalhados por todo o universo procurando por um sabre de luz perdido. Todos sabem que um sabre de luz emite um padrão de ondas específico: 42 cercado por 7 em toda a volta. Você tem um sensor de ondas que varre um terreno com N x M células. Veja o exemplo abaixo para um terreno 4 x 7 com um sabre de luz nele (na posição (2, 4)).



// Você deve escrever um programa que, dado um terreno N x M, procura pelo padrão do sabre de luz nele. Nenhuma varredura tem mais do que um padrão de sabre de luz.


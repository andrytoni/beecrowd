const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

let num1 = lines.shift().trim();
let num2 = lines.shift().trim();

for (let i = 1; !isNaN(parseInt(num1)) && !isNaN(parseInt(num2)); i++) {
    let count = 0;
    let position = num2.indexOf(num1)
    const lastPosition = num2.lastIndexOf(num1)

    while (position !== -1) {
        count++
        position = num2.indexOf(num1, position + 1)
    }
    console.log(`Caso #${i}:`);

    if (lastPosition === -1) {
        console.log(`Nao existe subsequencia`);
    } else {
        console.log(`Qtd.Subsequencias: ${count}`);
        console.log(`Pos: ${lastPosition + 1}`);        
    }
    console.log('');
    
    num1 = lines.length ? lines.shift().trim() : undefined
    num2 = lines.length ? lines.shift().trim() : undefined
}

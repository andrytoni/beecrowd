var input = `JOAO
500.00
1230.30`;
var lines = input.split("\n");

 function main(){
    let nome = lines.shift();
    let [salarioFixo, vendas] = lines.map(num => parseFloat(num));
    let total = salarioFixo + (vendas*0.15);
    console.log(`TOTAL = R$ ${total.toFixed(2)}`);
}

main();
let input = `3
9`;
let lines = input.split("\n");

function main(){
    let [a,b] = lines;
    let prod = parseInt(a) * parseInt(b);
    console.log(`PROD = ${prod}`);
    
}

main();

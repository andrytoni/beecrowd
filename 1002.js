let input = `2.00`;

function main(){
    let r = parseFloat(input);
    let area = 3.14159 * (r**2);
    console.log(`A=${area.toFixed(4)}`);    
}
main()

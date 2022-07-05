const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

function main() {
    const valores = lines.shift().split(' ');
    const [a, b, c] = valores.map(num => parseFloat(num));
    const tri = (a * c) / 2;
    const cir = 3.14159 * (c ** 2);
    const tra = ((a + b) * c) / 2;
    const sqa = b ** 2;
    const rec = a * b;

    console.log(`TRIANGULO: ${tri.toFixed(3)}`);
    console.log(`CIRCULO: ${cir.toFixed(3)}`);
    console.log(`TRAPEZIO: ${tra.toFixed(3)}`);
    console.log(`QUADRADO: ${sqa.toFixed(3)}`);
    console.log(`RETANGULO: ${rec.toFixed(3)}`);

}

main();
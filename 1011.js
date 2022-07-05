const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = parseFloat(input.split('\n'));

function main() {
    const volume = (4 / 3.0) * 3.14159 * (lines ** 3);
    console.log(`VOLUME = ${volume.toFixed(3)}`);
}

main();
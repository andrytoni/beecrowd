const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  for (let i = 0; i < lines.length; i++) {
    const [hour, minute] = lines[i].split(':').map((e) => parseInt(e));

    if (!isNaN(hour)) {
      let atraso = minute;

      if (hour < 7) atraso = 0;
      if (hour >= 8) atraso += 60;
      if (hour == 9) atraso = 120;
      console.log(`Atraso maximo: ${atraso}`);
    }
  }
};

main();

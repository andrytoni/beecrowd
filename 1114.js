const input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n').map((item) => Number(item));

const main = () => {
  let getOut = false;
  while (!getOut) {
    if (lines[0] != 2002) {
      console.log(`Senha Invalida`);
      lines.shift();
    } else {
      console.log(`Acesso Permitido`);
      getOut = true;
    }
  }
};

main();

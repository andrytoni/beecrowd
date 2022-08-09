const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  const ddd = lines.shift();
  const DDDs = {
    '61': 'Brasilia',
    '71': 'Salvador',
    '11': 'Sao Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas',
    '27': 'Vitoria',
    '31': 'Belo Horizonte'
  };
  if (DDDs[ddd] == undefined) {
    console.log(`DDD nao cadastrado`);
  } else {
    console.log(DDDs[ddd]);
  }
};

main();

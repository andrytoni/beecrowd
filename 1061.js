const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let diaIni = parseInt(lines[0].slice(4));
  let diaFim = parseInt(lines[2].slice(4));
  console.log(`dia inicial ${diaIni}, dia final ${diaFim}`);

  let horarioIni = lines[1].split(' : ').map((item) => parseInt(item));
  let horarioFim = lines[3].split(' : ').map((item) => parseInt(item));
  let segundosInicio =
    horarioIni[0] * 3600 + horarioIni[1] * 60 + horarioIni[2];
  let segundosFinal = horarioFim[0] * 3600 + horarioFim[1] * 60 + horarioFim[2];
  if (diaFim - diaIni >= 1) {
    if (segundosFinal < segundosInicio && diaFim - diaIni > 1) {
      segundosInicio += 86400;
    }
    diaIni *= 86400;
    diaFim *= 86400;
  }
  segundosInicio += diaIni;
  segundosFinal += diaFim;
  let horarioTotal = segundosFinal - segundosInicio;
  console.log(`Horario total ${horarioTotal}`);

  let contador = Math.floor(horarioTotal / 86400);
  horarioTotal = Math.floor(horarioTotal % 86400);
  console.log(contador, horarioTotal);

  console.log(`${contador.toFixed(0)} dia(s)`);
  contador = Math.floor(horarioTotal / 3600);
  horarioTotal = Math.floor(horarioTotal % 3600);

  console.log(`${contador.toFixed(0)} hora(s)`);
  contador = Math.floor(horarioTotal / 60);
  horarioTotal = horarioTotal % 60;

  console.log(`${contador.toFixed(0)} minuto(s)`);
  console.log(`${horarioTotal.toFixed(0)} segundo(s)`);
};

main();

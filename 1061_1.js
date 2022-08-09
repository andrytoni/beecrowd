const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const main = () => {
  let [diaInicio, horarioInicio, diaFinal, horarioFinal] = lines;
  diaInicio = parseInt(diaInicio.slice(4));
  diaFinal = parseInt(diaFinal.slice(4));
  const difDias = (diaFinal - diaInicio) * 24 * 3600;

  const [horasFinal, minutosFinal, segundosFinal] = horarioFinal
    .split(' : ')
    .map((item) => parseInt(item));
  const [horasIni, minutosIni, segundosIni] = horarioInicio
    .split(' : ')
    .map((item) => parseInt(item));
  const horarioTotalIni = horasIni * 3600 + minutosIni * 60 + segundosIni;
  const horarioTotalFinal =
    horasFinal * 3600 + minutosFinal * 60 + segundosFinal;

  const duracaoEmSegundos = horarioTotalFinal - horarioTotalIni + difDias;

  const dias = Math.floor(duracaoEmSegundos / (24 * 3600));
  const horas = Math.floor((duracaoEmSegundos % (24 * 3600)) / 3600);
  const minutos = Math.floor(((duracaoEmSegundos % (24 * 3600)) % 3600) / 60);
  const segundos = Math.floor(((duracaoEmSegundos % (24 * 3600)) % 3600) % 60);

  console.log(`${dias} dia(s)`);
  console.log(`${horas} hora(s)`);
  console.log(`${minutos} minuto(s)`);
  console.log(`${segundos} segundo(s)`);
};

main();

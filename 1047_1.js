// Ler o tempo de começo e de fim do jogo
// (Hora inicial, minuto inicial, hora final, minuto final)
// Jogo pode durar no mínimo 1 minuto e no máximo 24 horas
// Imprimir a duração do jogo

const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split(' ');

const main = () => {
  let [horaIni, minutoIni, horaFim, minutoFim] = lines.map((num) =>
    parseInt(num)
  );
  let totalHoras = 0;
  let totalInicio = horaIni * 60 + minutoIni;
  let totalFim = horaFim * 60 + minutoFim;

  totalHoras = totalFim - totalInicio;

  if (horaFim <= horaIni) {
    totalHoras += 24 * 60;
    if (minutoFim > minutoIni) {
      totalHoras -= 24 * 60;
    }
  }

  let totalMinutos = totalHoras % 60;
  totalHoras = (totalHoras / 60) | 0;

  console.log(`O JOGO DUROU ${totalHoras} HORA(S) E ${totalMinutos} MINUTO(S)`);
};

main();

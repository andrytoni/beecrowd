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
  let horas = 0;
  let minutos = 0;
  if (horaIni < horaFim) {
    horas = horaFim - horaIni;
    if (minutoIni < minutoFim) {
      minutos = minutoFim - minutoIni;
    } else if (minutoIni > minutoFim) {
      horas -= 1;
      minutos = 60 - minutoIni + minutoFim;
    }
  }
  if (horaIni > horaFim) {
    horas = 24 - horaIni + horaFim;
    if (minutoIni < minutoFim) {
      minutos = minutoFim - minutoIni;
    } else if (minutoIni > minutoFim) {
      horas -= 1;
      minutos = 60 - minutoIni + minutoFim;
    }
  }
  if (horaIni == horaFim) {
    if (minutoIni < minutoFim) {
      minutos = minutoFim - minutoIni;
    } else if (minutoIni > minutoFim) {
      horas = 23;
      minutos = 60 - minutoIni + minutoFim;
    } else if (minutoIni == minutoFim) {
      horas = 24;
    }
  }
  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
};

main();

// const calculateIncrease = (pa, pb, ga, gb) => {
//   let contadorAnos = 0;

//   ga = ;
//   gb = gb / 100;
//   for (contadorAnos; pa < pb; contadorAnos++) {
//     if(contadorAnos > 100){
//       break;
//     }else {
//     pa += Math.floor(pa * (ga / 100));
//     pb += Math.floor(pb * (gb / 100));
//     console.log(pa, pb, contadorAnos);
//     }
//   }
//   if (pa == pb) {
//     contadorAnos++;
//   }
//   console.log(contadorAnos);
// };

// calculateIncrease(100, 200, 0.2, 0.1);

// const cont = 4;
// let vetor = [];
// vetor = new Array(cont);
// vetor[1] = 2;
// console.log(vetor);
// let matriz = [1, 2, 3, 4];
// let aux = [...matriz];
// console.log(aux);

// let number = (3 / 2).toFixed(0);
// console.log(number);

const createLine = (order, firstValue) => {
  let line = [];
  let value = firstValue;
  for (let i = 0; i < order; i++) {
    line.push(value);

    value *= 2;
  }
  line = line.join(' ');

  return line;
};
console.log(createLine(3, 2));

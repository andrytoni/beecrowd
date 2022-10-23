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

const fun = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      matriz[i][j] += 1;
    }
  }
  return matriz;
};

// const { one, two } = fun();

// const str = '5';
// console.log(str.padStart(4, ' '));

let matriz = [
  [1, 2],
  [3, 4],
];

matriz = fun(matriz);

console.log(matriz);

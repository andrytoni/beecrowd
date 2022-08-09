const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

// const main = () => {
//   const vertebra = lines.shift();
//   const familia = lines.shift();
//   const alimentacao = lines.shift();
//   console.log(vertebra, familia, alimentacao);

//   if (alimentacao == 'hematofago') {
//     if (familia == 'anelideo') {
//       console.log(`sanguessuga`);
//     } else {
//       console.log(`pulga`);
//     }
//   } else if (alimentacao == 'herbivoro') {
//     if (vertebra == 'invertebrado') {
//       console.log(`lagarta`);
//     } else {
//       console.log(`vaca`);
//     }
//   } else if (alimentacao == 'onivoro') {
//     if (familia == 'ave') {
//       console.log(`pomba`);
//     } else if (familia == 'mamifero') {
//       console.log(`homem`);
//     } else {
//       console.log(`minhoca`);
//     }
//   } else {
//     console.log(`aguia`);
//   }
// };

// main();

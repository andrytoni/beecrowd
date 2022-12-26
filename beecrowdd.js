const fs = require('fs-extra');

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

// let number = parseInt(-7 / 3);
// let rest = -7 % 3;
// console.log(number, rest);

// const str = '';

// console.log(parseInt(''));
// let string = 'Jogomuito4532@';

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const salting = (string) => {
//   let saltedString = '';
//   for (let i = 0; i < 6; i++) {
//     let randomAsciiNumber = Math.floor(Math.random() * (127 - 33) + 33);
//     saltedString += String.fromCharCode(randomAsciiNumber);
//   }
//   return saltedString;
// };

// const moveCharacters = (string) => {
//   let newString = '';

//   for (let i = 0; i < string.length; i++) {
//     const code = string.charCodeAt(i);
//     if (code < 97) {
//       newString += String.fromCharCode(code + 10);
//     } else if (code > 96 && code < 127) {
//       newString += String.fromCharCode(code - 10);
//     } else if (code > 191 && code < 227) {
//       newString += String.fromCharCode(code - 100);
//     } else {
//       newString += String.fromCharCode(code - 130);
//     }
//   }
//   console.log(newString);

//   return newString;
// };

// const reverseString = (string) => {
//   let reversedString = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }
//   console.log(reversedString);
//   return reversedString;
// };
// string += salting(string);
// string = moveCharacters(string);
// string = reverseString(string);
// console.log(string);

// // string = moveCharacters(string);
// let tokens = [
//   // { id: '12', date: 12 },
//   // { id: '14', date: 12 },
//   '12',
//   '13',
//   '14',
//   '15',
// ];
// let token = tokens.find((item) => item == '14');
// let tokenIndex = tokens.findIndex((item) => item == token);
// tokens.splice(tokenIndex, 1);
// console.log(tokens);

// const validatePermission = (req, res, next) => {
//   if (req.baseUrl == '/products') {
//   }
// };

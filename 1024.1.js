let lines = ['4', 'Texto #3', 'abcABC1', 'vxpdylY .ph', 'vv.xwfxo.fd'];

//variavel quantidade de testes
let quant = lines.shift();

//criando variavel para receber o input
for (let i = 0; i < quant; i++) {
  let strFinal = lines[i];

  for (let x = 1; x <= 3; x++) {
    if (x == 1) {
      strFinal = deslocaTresPosicoes(strFinal);
    }
    if (x == 2) {
      strFinal = inverteString(strFinal);
    }
    if (x == 3) {
      strFinal = deslocaMetadeEsquerda(strFinal);
    }
  }
  console.log(strFinal);
}
//1a passada - colocar letras minusculas e maisculas 3 posiçoes a direita de acordo com a tabela ASCII
//transformar cada item em uma array, para deslocar as letras

function deslocaTresPosicoes(str) {
  let newStr = '';
  for (let x = 0; x < str.length; x++) {
    const char = str[x];
    const code = str.charCodeAt(x); // T

    // Se for uma letra minuscula ou maiuscula
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      newStr += String.fromCharCode(code + 3);
    } else {
      newStr += char;
    }
  }
  return newStr;
}
//2a passada - inverter a linha
function inverteString(str) {
  let strInvertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  return strInvertida;
}

//3a passada - a partir da metade da string, deslocar cada caracter para a esquerda
function deslocaMetadeEsquerda(str) {
  let codAscii;
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    codAscii = str.charCodeAt(i);
    if (i >= Math.floor(str.length / 2)) {
      newStr += String.fromCharCode(codAscii - 1);
    } else {
      newStr += String.fromCharCode(codAscii);
    }
  }
  return newStr;
}

let lines = ['4', 'Texto #3', 'abcABC1', 'vxpdylY .ph', 'vv.xwfxo.fd'];
let cod_ascii = 0;
let q = lines.shift();
for (let i = 0; i < q; i++) {
  lines[i] = lines[i].split('');

  for (let j = 0; j < lines[i].length; j++) {
    cod_ascii = lines[i][j].charCodeAt(0);
    // console.log(lines[i][j],cod_ascii);

    if (cod_ascii >= 65 && cod_ascii <= 90) {
      cod_ascii = cod_ascii + 3;
      let newCode = String.fromCharCode(cod_ascii);
      // console.log(newCode);
      lines[i][j] = newCode;
      // console.log(lines[i][j]);
    } else if (cod_ascii >= 97 && cod_ascii <= 122) {
      cod_ascii = cod_ascii + 3;
      let newCode = String.fromCharCode(cod_ascii);
      lines[i][j] = newCode;
      // console.log(lines[i][j]);
    }
  }
  lines[i] = lines[i].reverse();
  // console.log(lines[i]);

  for (let j = parseInt(lines[i].length / 2); j < lines[i].length; j++) {
    cod_ascii = lines[i][j].charCodeAt(0);
    cod_ascii = cod_ascii - 1;
    let newCode = String.fromCharCode(cod_ascii);
    lines[i][j] = newCode;
  }
  lines[i] = lines[i].join('');
  console.log(lines[i]);
}

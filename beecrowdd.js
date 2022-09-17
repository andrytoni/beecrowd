const calculateIncrease = (pa, pb, ga, gb) => {
  let contadorAnos = 0;

  ga = ;
  gb = gb / 100;
  for (contadorAnos; pa < pb; contadorAnos++) {
    if(contadorAnos > 100){
      break;
    }else {
    pa += Math.floor(pa * (ga / 100));
    pb += Math.floor(pb * (gb / 100));
    console.log(pa, pb, contadorAnos);
    }
  }
  if (pa == pb) {
    contadorAnos++;
  }
  console.log(contadorAnos);
};

calculateIncrease(100, 200, 0.2, 0.1);

let j = 7;
for (let i = 1; i <= 9; i += 2) {
  let aux = j;

  for (j; j > aux - 3; j--) {
    console.log(`I=${i} J=${j}`);
  }
  j += 5;
}

let s = 1;
let dividendo = 3;
for (let i = 2; dividendo <= 39; i *= 2) {
  s += dividendo / i;
  dividendo += 2;
}

console.log(s.toFixed(2));

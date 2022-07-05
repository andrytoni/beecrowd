let lines = ["1 1"];
let i = lines.shift().split(' ').map(function(x){
    return parseInt(x);
});
let x = 24;
let [a,b] = i;
if(a>b){
     x = 24 - a + b;
} else if(b>a){
     x = b-a;
}
console.log(`O JOGO DUROU ${x} HORA(S)`);


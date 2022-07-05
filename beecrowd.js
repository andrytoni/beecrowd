let lines = ["9 9 9"];
let i = lines.shift().split(' ').map((x) => parseFloat(x));

 i.sort((a,b) => b-a);
 let [a, b, c] = i;

if(a>=(b+c)){
    console.log(`NAO FORMA TRIANGULO`);
} else{
     if(a**2==(b**2+c**2)){
    console.log(`TRIANGULO RETANGULO`);    
}    else if(a**2>(b**2+c**2)){
    console.log(`TRIANGULO OBTUSANGULO`);    
}   if(a**2<(b**2+c**2)){
    console.log(`TRIANGULO ACUTANGULO`);    
}   if(a==b && a==c){
    console.log(`TRIANGULO EQUILATERO`);    
}   if ((a==b && a!=c) || (b==c && b!=a) || (a==c && b!=a)){
    console.log(`TRIANGULO ISOSCELES`);
}
}
let lines = ["6 10 8 9"];
let i = lines.shift().split(' ').map(function(x){
    return parseInt(x);
});
let h = 24;
let m = 60;
let [hi,mi,hf,mf] = i;
m = m-mi+mf;
console.log(`m=${m}`);

if(hf>hi){
    h=(hf-hi)*60;
    console.log(`h=${h}`);    
} else if(hi>hf){
    h=(h-hi+hf)*60;
    console.log(`h=${h}`);    
}else if(hi==hf && mi==mf){
    m=0;
    console.log(`O JOGO DUROU ${h} HORA(S) E ${m} MINUTO(S)`);
}

let x=(m+h);
console.log(`x=${x}`);
console.log(x/60);

let r=0;
if(x/60>24){
    r=x%60;
    console.log(`r=${r}`);
    h=(h/60);
}else if(x/60<24){
    r=x%60;
    console.log(`r=${r}`);
    h=(h/60);
}else if(x%60==0){
    h = 24;
    m=0;
}
console.log(`O JOGO DUROU ${h} HORA(S) E ${r} MINUTO(S)`);



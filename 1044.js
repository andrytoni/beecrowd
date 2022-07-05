let lines = ["24 6"];
let i = lines.shift().split(' ').map(function(x){
    return parseInt(x);
});

if(i[1]%i[0] == 0 || i[0]%i[1] == 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}
const array = [15, 7, 24, 39, 120, 155];

console.log(array);

//Retorna os valores "filtrados" para uma nova array
const arrayFiltrado = array.filter((item) => {
  //console.log(item > 10);
  return item > 10;
});

console.log(arrayFiltrado);

//Retorna os valores "procurados" para uma nova array
const itemEncontrado = array.find((item) => {
  return item > 100;
});

console.log(itemEncontrado);

const listaVip = ['Giovanni', 'André', 'Gustavo'];
//Retorna um valor booleano para o item que for procurado True/False

const estaNaLista = listaVip.includes('Giovanni'); // True
const estaNaLista2 = listaVip.includes('Thiago'); // False

console.log(estaNaLista);
console.log(estaNaLista2);

const texto = 'O André é meu amigo';

console.log(texto.includes('amigot')); //False

const idades = ['15', '17', '24'];

console.log(idades);

for (let x = 0; x < idades.length; x++) {
  console.log(idades[x]);
}

let soma = 0;

//Retorna algo para cada valor da array
idades.forEach((item) => {
  console.log(item);
  soma += parseInt(item);
});

console.log(soma);

//Retorna a soma de toda array
const somaIdades = idades.reduce((accumulator, item) => {
  return parseInt(accumulator) + parseInt(item);
});

console.log(somaIdades);

//Retorna algo de toda uma array para uma nova array
const idadesInt = idades.map((item) => {
  return parseInt(item) + 1;
});

//Retorna a array ordenada para a própria array
const newArray = [...idadesInt].sort((a, b) => b - a);
console.log(idadesInt);
console.log(newArray);

const listaVip1 = ['Giovanni', 'André', 'Gustavo'];
const listaVip2 = ['Thiago', 'Bode'];
//...Pega todos os itens da array
const listaVipT = [...listaVip1, ...listaVip2];
//const listaVipT = [].concat(listaVip1).concat(listaVip2);

console.log(listaVip1);
console.log(listaVip2);
console.log(listaVipT);

//Retira o primeiro item da array
console.log(listaVipT.shift());
console.log(listaVipT);

//Retira o último item da array
console.log(listaVipT.pop());
console.log(listaVipT);

//Coloca um novo item para o fim da array
listaVipT.push('Belucci');

console.log(listaVipT);

//Coloca um novo item para o começo da array
listaVipT.unshift('Montes');

console.log(listaVipT);

//Coloca a array ao contrário
console.log(listaVipT.reverse());

//"Corta um pedaço da array para uma nova"
const listaVip3 = listaVipT.slice(2);

console.log(listaVip3);

const date = '2022-07-04';

//Separa uma array usando um parametro
const DDMMYYYY = date.split('-');
const [year, month, day] = DDMMYYYY;

console.log(DDMMYYYY);

//Junta uma array através de um parametro
const dateBrazil = DDMMYYYY.reverse().join('/');

console.log(`${day}/${month}/${year}`);

console.log(dateBrazil);

const listaTeste = ['Giovanni', 'André', 'Gustavo'];

const teste = listaTeste.values();

for (const value of teste) {
  console.log(value);
}

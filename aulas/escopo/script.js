/*
'use strict'
var carro = 'fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro();
console.log(carro);
*/

if(false) {
  var carro = 'fusca';
  console.log(carro);
}

console.log(carro) // undefined

if(true) {
  const carro = 'fusca';
  console.log(carro);
}

console.log(carro) // undefined

{
var carro2 = 'Fusca';
const ano = 2026;
}
console.log(carro2);
// console.log(ano);

const mes = 'Dezembro';
// mes = 'Janeiro'; erro, tentou modificar o valor
// const semana; erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
// data = 'Janeiro'; erro

// let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável

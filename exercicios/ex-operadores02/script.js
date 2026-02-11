// Qual o resultado da seguinte expressão?
// 5 * 2 = 10 / 2 = 5 + 10 + 20 = 35
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

// Crie duas expressões que retornem NaN
var exp1 = 'micael' / 2;
var exp2 = 'ana' - 3;
console.log(exp1, exp2)

// Somar a string '200' com o número 50 e retornar 250
var duzentos = '200';
var n50 = 50;
console.log(+duzentos + n50)

// Incremente o número 5 e retorne o seu valor incrementado
var n5 = 5;
console.log(++n5)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2 + unidade;
console.log(pesoPorDois)

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 18;
var idadeParente = 19;
if (minhaIdade > idadeParente) {
  console.log('Sua idade é maior')
} else if (minhaIdade === idadeParente) {
  console.log('Suas idades são iguais')
} else {
  console.log('Sua idade é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 3 >3<
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo;  // Falsy
var dinheiroNaConta = 0; // Falsy

/* 
if (nome) {
  console.log('O')
} else {
  console.log('X')
}
*/

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil é maior que a China')
} else {
  console.log('Brasil não é maior que a China')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // >Falso<

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor) {
  return !!valor
}

console.log(verificarValor(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4
}

console.log(perimetro(10))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Micael', 'Araújo'))

// Crie uma função que verifica se um número é par
function parImpar(numero) {
  var total = numero % 2;
  if (total === 0) {
    return 'Par';
  } else {
    return 'Impar';
  }
}

console.log(parImpar(10))
console.log(parImpar(5))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado
}

console.log(tipoDado({}))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Micael Araújo')
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// Desafio Extra
function maiorNumero(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1
  } else if (n2 > n1 && n2 > n3) {
    return n2
  } else {
    return n3
  }
}

console.log(maiorNumero(100, 200, 300))
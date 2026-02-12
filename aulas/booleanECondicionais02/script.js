// true && true; -> true                 true || true;  true
// true && false; -> false               true || false;  true
// false && true; -> false               false || true;  true
// 'Gato' && 'Cão'; -> 'Cão'            'Gato' || 'Cão';  'Gato'
// (5 - 5) && (5 + 5); -> 0             (5 - 5) || (5 + 5);  10
//'Gato' && false; -> false             'Gato' || false;  Gato
// (5 >= 5) && (3 < 6); -> true         (5 >= 5) || (3 < 6);  true

// Comparação &&
// Procura retornar o último valor verdadeiro ou o primeiro valor falso encontrado
var condicional = (5 + 5) && (5 + 5);

if (condicional) {
  console.log('Verdadeiro', condicional)
} else {
  console.log('Falso')
}

// || sempre procura retornar o primeiro valor verdadeiro
var condicional2 = (5 + 5) && (5 - 5) || (10 - 2);
console.log(condicional2)

// Switch
var corFavorita = 'Vermelho';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu')
    break;
  case 'Amarelo':
    console.log('Olhe para o Sol')
    break
  case 'Verde':
    console.log('Olha para a floresta')
    break
  default:
    console.log('Feche os olhos')
}
var numero = 20;
console.log(numero);

numero += 10;
console.log(numero); // numero = numero + 10;

var idade = 18;
var naoPossuiDiabetes = true;
var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

var possuiFaculdade = true;

if (possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui');
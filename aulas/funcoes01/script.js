function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(60, 1.70))

function mostraConsole() {
  console.log('Click')
}

addEventListener('click', mostraConsole);

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
} // Ideal retornar um tipo de dado, não vários como esta função

console.log(terceiraIdade(60))

function paisesVisitados(faltamVisitar) {
  var totalPaises = 193;
  console.log(`Faltam visitar ${totalPaises - faltamVisitar} países.`)
}

paisesVisitados(20)

var profissao = 'Aprendiz';

function dados() {
  var nome = 'Micael';
  var idade = 18;
  function outrosDados() {
    var endereco = 'Santa Catarina';
    var idade = 19;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}

console.log(dados());
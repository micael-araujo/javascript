function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.80))
console.log(imc(60, 1.71))

function mostraConsole() {
  console.log('Click')
}

addEventListener('click', mostraConsole);
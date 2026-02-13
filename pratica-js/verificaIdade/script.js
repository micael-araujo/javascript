// Função para verificar a entrada de convidados
function verificarEntrada(nome, idade) {
  var listaConvidados = ["Micael", "Ana", "Chloe"];

  // Verifica se é um número válido
  if (typeof idade !== "number" || idade < 0) {
    return "Idade inválida.";
  }

  // Verifica se a idade e o nome estão de acordo com as exigências
  if (idade >= 18 && listaConvidados.includes(nome)) {
    return "Entrada permitida.";
  } else {
    return "Acesso negado.";
  }

}

console.log(verificarEntrada("Chloe", 0))
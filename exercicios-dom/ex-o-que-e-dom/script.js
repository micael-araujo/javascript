// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo.innerText)

// Retorne a linguagem do navegador
const linguagemPagina = window.navigator.language;
console.log(linguagemPagina);


// Retorne a largura da janela 
console.log(window.outerWidth);
console.log(window)

// window.alert('Olá Mundo!')

const titulo = document.querySelector('h1');
console.log(titulo)

function callbackH1() {
  console.log('Clicou em ', titulo.innerText);
}

titulo.addEventListener('click', callbackH1);
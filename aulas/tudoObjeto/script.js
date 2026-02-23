var nome = 'Micael';
var nomeMinusculo = nome.toLowerCase();
var altura = 1.5;

var btn = document.querySelector('.btn');

btn.classList.add('ativo');
btn.innerText; // 'Clique'
btn.addEventListener('click', function(){
  console.log('Clicou');
})
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Abacaxi', 'Maçã', 'Uva', 'Laranja'];

frutas.forEach(function(item, index, array){
  console.log(item, index, array);
})

var numero = 0;
var maximo = 50;

for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
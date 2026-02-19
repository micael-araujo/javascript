var pessoa = {
  nome: 'Micael',
  idade: 18,
  profissao: 'Aprendiz',
  possuiFaculdade: true
}

var quadrado = {
  lado: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    console.log(this.lado)
    return lado * 4; 
  }
}

console.log(quadrado.area(10))
console.log(quadrado.perimetro(4))

console.log(Math.random())
console.log(Math.PI)
// Falsy                          Truthy
// if(false)                      if(true)
// if(0) ou -0                    if(1)
// if(NaN)                        if(' ')
// if(null)                       if('micael')
// if(undefined)                  if(-5)
// if('') ou "" ou ``             if({}) --> objeto

// Usar ! -> valor contrário (true =  false, false = true) + converte para boolean
// Usar !! -> valor contrário do contrário (true -> false = true) 

var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('Você possui uma graduação!') 
} else if (possuiDoutorado) {
  console.log('Você não possui uma graduação, mas possui um doutorado!')
} else {
  console.log('Não há nada.')
}

var nome = {};

if (nome) {
  console.log(nome)
} else {
  console.log('Sem nome')
}

var n1 = 10;
if(n1 > 1) {
  console.log('O valor é maior')
} else {
  console.log('Não é um valor maior')
}

var n10 = +'10';
console.log(n10 === 10)

var animal = 'Gatos';
console.log(animal !== 'Gatos')
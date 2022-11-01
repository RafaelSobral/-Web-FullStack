
// SELETOR POR "ID"
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'

// SELETOR POR TAG
document.querySelector('a').innerText = 'teste ancora'

// SELECIONANDO MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

// FUNÇÃO ANONIMA / CALLBACK
ancoras.forEach(function(elemento){
  elemento.innerHTML = 'teste'
})

// SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
  box.innerHTML = 'box ' + (index + 1)
})

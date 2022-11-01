
let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


let aberto = false // FLAG

function abrirOuFecharMenu() {
  if (aberto === true){
    aberto = false
    menuMobile.classList.remove('aberto')
    botaoMenu.innerText = 'Abrir Menu'   
  } else {
    aberto = true
    menuMobile.classList.add('aberto')
    botaoMenu.innerText = 'Fechar Menu'
  }
}
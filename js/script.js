const button = document.getElementById('burger-button')
const menu = document.getElementById('ul-header-menu')

button.addEventListener('click', () =>{
    menu.classList.toggle('header-ul-mobile')
})
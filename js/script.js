const button = document.getElementById('burger-button')
const menu = document.getElementById('ul-header-menu')

button.addEventListener('click', () =>{
    menu.classList.toggle('header-ul-mobile')
})


const links = document.querySelectorAll('.header-link')

links.forEach( (elem) =>{
        elem.addEventListener('click', () =>{
            menu.classList.remove('header-ul-mobile')
        })
    }
)
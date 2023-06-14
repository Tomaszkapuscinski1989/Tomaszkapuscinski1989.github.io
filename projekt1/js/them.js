const sun = document.getElementsByClassName('sun')
const moon = document.getElementsByClassName('moon')
const body = document.getElementById('body')
const nav = document.getElementById('nav')
const menu = document.getElementsByClassName('menu')

let szata = localStorage.getItem('szata')
if (szata === 'noc') {
    moon[0].classList.add('hide')
    body.classList.add('dark')
} else {
    sun[0].classList.add('hide')
}

moon[0].addEventListener('click', () => {
    moon[0].classList.add('hide')
    sun[0].classList.remove('hide')
    localStorage.setItem('szata', 'noc')
    body.classList.add('dark')
})

sun[0].addEventListener('click', () => {
    sun[0].classList.add('hide')
    moon[0].classList.remove('hide')
    localStorage.setItem('szata', 'dzien')
    body.classList.remove('dark')
})

menu[0].addEventListener('click', () => {
    nav.classList.toggle('show')
})
const sun = document.getElementsByClassName('sun')
const moon = document.getElementsByClassName('moon')
const body = document.getElementById('body')

let s = localStorage.getItem('s')
if (s === 'n') {
    moon[0].classList.add('hiden')
    body.classList.add('dark')
} else {
    sun[0].classList.add('hiden')
}

moon[0].addEventListener('click', () => {
    moon[0].classList.add('hiden')
    sun[0].classList.remove('hiden')
    localStorage.setItem('s', 'n')
    body.classList.add('dark')
})

sun[0].addEventListener('click', () => {
    sun[0].classList.add('hiden')
    moon[0].classList.remove('hiden')
    localStorage.setItem('s', 'd')
    body.classList.remove('dark')
})

////////////////////////////////////////////
const navHeader = document.querySelector('nav ul li a')
const nav1 = document.getElementById('nav')


navHeader.addEventListener('click', () => {
    nav1.classList.toggle('hiden')
})

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
const navHeader = document.querySelectorAll('nav ul li a')
const nav1 = document.getElementById('nav')



if (screen.width < 800){
for (var i = 0; i <= navHeader.length - 1; i++) {

    navHeader[i].addEventListener('click', () => {
    nav1.classList.toggle('hiden')
        header.classList.toggle('header-color')
})
}
}

const header1 = document.querySelector('.header').offsetHeight



document.documentElement.style.setProperty('--scrollPadding', header1 + 'px')


const resizeObserver = new ResizeObserver(() => {

  if (screen.width < 800){

for (var i = 0; i <= navHeader.length - 1; i++) {

    navHeader[i].addEventListener('click', () => {
    nav1.classList.add('hiden')
        header.classList.toggle('header-color')
    })
}
}
else {

    for (var i = 0; i <= navHeader.length - 1; i++) {

    navHeader[i].removeEventListener('click', () => {
    nav1.classList.add('hiden')
        header.classList.toggle('header-color')
})
}
}

});

const n = document.querySelector('html')
resizeObserver.observe(n);



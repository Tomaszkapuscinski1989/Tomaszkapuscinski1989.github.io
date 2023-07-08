////////////////////////////////////////////////////////
const nav = document.getElementById('nav')
const menu = document.getElementsByClassName('menu')

menu[0].addEventListener('click', () => {
    nav.classList.toggle('hiden')
})

/*-----------------------------------------------------*/

const primaryHeader = document.querySelector(".header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("scroll", !entries[0].isIntersecting);
  },
  { rootMargin: "70px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);

/* ------------------------------------------------*/

const fadeIn = document.querySelectorAll('.fadeIn');

const ops = {
    root: null,
    threshold: 1,
    rootMargin: '-100px'
};

const obs = new IntersectionObserver(function (entrys, obs) {
    entrys.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('fadeIn2')
        obs.unobserve(entry.target)
    })
}, ops);

fadeIn.forEach(f => {
    obs.observe(f)
})

/* ------------------------------------------------*/


const slideIn = document.querySelectorAll('.Slide');

const ops2 = {
    root: null,
    threshold: 0,
    rootMargin: '-100px 0px -100px 0px'
};

const obs2 = new IntersectionObserver(function (entrys, obs2) {
    entrys.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('slideIn2')
        obs2.unobserve(entry.target)
    })
}, ops2);

slideIn.forEach(f => {
    obs2.observe(f)
})
//////////////////////////////////////////////////

const swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,
    centeredSlides: true,

 autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


});

///////////////////////////////////////////////

const slideD = document.querySelectorAll('.slideD');

const ops3 = {
    root: null,
    threshold: 0,
    rootMargin: '-100px 0px -100px 0px'
};

const obs3 = new IntersectionObserver(function (entrys, obs3) {
    entrys.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('slideD2')
        obs3.unobserve(entry.target)
    })
}, ops3);

slideD.forEach(f => {
    obs3.observe(f)
})


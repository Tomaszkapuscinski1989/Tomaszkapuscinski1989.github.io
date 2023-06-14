////////////////////////////////////////////////////////
const nav = document.getElementById('nav')
const menu = document.getElementsByClassName('menu')

menu[0].addEventListener('click', () => {
    nav.classList.toggle('hiden')
    console.log("dajsgdjsa")
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
  { rootMargin: "200px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);

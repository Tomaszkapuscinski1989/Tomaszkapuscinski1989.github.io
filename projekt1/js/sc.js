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
//////////////////////////////////////////

const slideIn = document.querySelectorAll('table');

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


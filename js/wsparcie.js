const home_p = document.querySelector('.s2r p');
const home_img = document.querySelector('.s2r img');
const home_p2 = document.querySelector('.s4r p');

// -------------------------------------------------------------
const opt = {
  root: null,
  threshold: 1,
  rootMargin: '50px 3000px',
};

const obs = new IntersectionObserver(function (entries, obs) {
  entries.forEach((en) => {
    if (!en.isIntersecting) {
      return;
    }
    en.target.classList.remove('r1');
    en.target.classList.add('r2');
    obs.unobserve(en.target);
  });
}, opt);

obs.observe(home_p);

// -------------------------------------------------------------

const opt2 = {
  root: null,
  threshold: 1,
  rootMargin: '0px 3000px',
};

const obs2 = new IntersectionObserver(function (entries, obs) {
  entries.forEach((en) => {
    if (!en.isIntersecting) {
      return;
    }
    en.target.classList.remove('l1');
    en.target.classList.add('l2');
    obs.unobserve(en.target);
  });
}, opt2);

obs2.observe(home_img);

// -------------------------------------------------------------
const opt3 = {
  root: null,
  threshold: 1,
  rootMargin: '50px 3000px',
};

const obs3 = new IntersectionObserver(function (entries, obs) {
  entries.forEach((en) => {
    if (!en.isIntersecting) {
      return;
    }
    console.log(en.target);
    en.target.classList.remove('l1');
    en.target.classList.add('l2');
    obs3.unobserve(en.target);
  });
}, opt3);

obs3.observe(home_p2);

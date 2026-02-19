const p = document.querySelectorAll('.test');

const opt = {
  root: null,
  threshold: 1,
  rootMargin: '150px 300px',
};
const obs = new IntersectionObserver(function (entries, obs) {
  entries.forEach((en) => {
    if (!en.isIntersecting) {
      return;
    }
    console.log(en.target);
    en.target.classList.add('test');
    en.target.classList.add('test2');
    obs.unobserve(en.target);
  });
}, opt);
p.forEach((z) => {
  obs.observe(z);
});

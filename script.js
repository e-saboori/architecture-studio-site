const page = document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === page) link.setAttribute('aria-current', 'page');
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
    document.querySelector('.site-header')?.classList.toggle('is-menu-open', !isOpen);
  });
}

const carousel = document.querySelector('[data-carousel]');

if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const next = carousel.querySelector('[data-carousel-next]');
  const prev = carousel.querySelector('[data-carousel-prev]');
  let index = 0;
  let timer;

  const showSlide = (nextIndex) => {
    slides[index].classList.remove('is-active');
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add('is-active');
  };

  const start = () => {
    timer = window.setInterval(() => showSlide(index + 1), 4200);
  };

  const restart = () => {
    window.clearInterval(timer);
    start();
  };

  next?.addEventListener('click', () => {
    showSlide(index + 1);
    restart();
  });

  prev?.addEventListener('click', () => {
    showSlide(index - 1);
    restart();
  });

  start();
}

import lozad from 'lozad';
import './styles/index.scss';

const about = document.querySelector('.about');

function animateHero() {
  const title = document.querySelector('.hero-body h1');
  const subtitle = document.querySelector('.hero-body p');
  const scroll = document.querySelector('.hero-scroll');
  title.style.opacity = 1;
  title.style.transform = 'translateX(0)';
  subtitle.style.opacity = 1;
  subtitle.style.transform = 'translateX(0)';
  scroll.style.opacity = 1;
}

function scrollToAbout() {
  about.scrollIntoView({ behavior: 'smooth' });
}

function initEvent() {
  document.querySelector('.hero-scroll').onclick = scrollToAbout;
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = lozad();
  observer.observe();
  initEvent();
  animateHero();
});

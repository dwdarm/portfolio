import lozad from 'lozad';
import './styles/index.scss';

const about = document.querySelector('.about');

function animateHero() {
  const title = document.querySelector('.hero-body-title');
  const subtitle = document.querySelector('.hero-body-subtitle');
  const action = document.querySelector('.hero-body-action');
  const scroll = document.querySelector('.hero-footer');
  title.style.opacity = 1;
  title.style.transform = 'translateX(0)';
  subtitle.style.opacity = 1;
  subtitle.style.transform = 'translateX(0)';
  action.style.opacity = 1;
  action.style.transform = 'translateX(0)';
  scroll.style.opacity = 1;
}

function scrollToAbout(event) {
  event.preventDefault();
  about.scrollIntoView({ behavior: 'smooth' });
}

function initEvent() {
  document.querySelector('.hero-body-action').onclick = scrollToAbout;
  document.querySelector('.scroll-down-icon').onclick = scrollToAbout;
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = lozad();
  observer.observe();
  initEvent();
  animateHero();
});

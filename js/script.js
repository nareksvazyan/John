const menuToggle = document.querySelector('.header-mob__btn');
const showcase = document.querySelector('.header__nav');
const bars = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');

menuToggle.addEventListener('click', () => {
  showcase.classList.toggle('active');
  bars.classList.toggle('active');
  times.classList.toggle('active');
})



const headerContainer =  document.querySelector('.header-container');
window.addEventListener('scroll', () => {
  headerContainer.classList.toggle("sticky", window.scrollY > 0)
})
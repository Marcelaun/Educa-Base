const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('responsive');
    header.classList.add('responsive');
    navLinks.classList.add('responsive');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('responsive');
    header.classList.remove('responsive');
    navLinks.classList.remove('responsive');
    menuOpen = false;
  }
});
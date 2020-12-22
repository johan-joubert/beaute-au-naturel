// white menu when window scroll 500px

const nav = document.querySelector('nav');
const whiteLogo = document.querySelector('.whiteLogo');
const white1 = document.querySelector('.white1');
const white2 = document.querySelector('.white2');
const white3 = document.querySelector('.white3');
const white4 = document.querySelector('.white4');

window.addEventListener('scroll', () => {
  if(window.scrollY > 450) {
    nav.classList.add('scroll');
    whiteLogo.classList.add('scroll');
    white1.classList.add('scroll');
    white2.classList.add('scroll');
    white3.classList.add('scroll');
    white4.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
    whiteLogo.classList.remove('scroll');
    white1.classList.remove('scroll');
    white2.classList.remove('scroll');
    white3.classList.remove('scroll');
    white4.classList.remove('scroll');
  }
})


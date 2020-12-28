// white menu when window scroll 500px

const nav = document.querySelector('nav');
const whiteLogo = document.querySelector('.whiteLogo');
const white1 = document.querySelector('.white1');
const white2 = document.querySelector('.white2');
const white3 = document.querySelector('.white3');
const white4 = document.querySelector('.white4');
const white5 = document.querySelector('.white5');
const white6 = document.querySelector('.white6');
const white7 = document.querySelector('.white7');
const white8 = document.querySelector('.white8');
const white9 = document.querySelector('.white9');
const white10 = document.querySelector('.white10');
const white11 = document.querySelector('.white11');
const white12 = document.querySelector('.white12');
const dropDown = document.querySelector('.dropdown-menu');

window.addEventListener('scroll', () => {
  if(window.scrollY > 600) {
    nav.classList.add('scroll');
    whiteLogo.classList.add('scroll');
    white1.classList.add('scroll');
    white2.classList.add('scroll');
    white3.classList.add('scroll');
    white4.classList.add('scroll');
    white5.classList.add('scroll');
    white6.classList.add('scroll');
    white7.classList.add('scroll');
    white8.classList.add('scroll');
    white9.classList.add('scroll');
    white10.classList.add('scroll');
    white11.classList.add('scroll');
    white12.classList.add('scroll');
    dropDown.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
    whiteLogo.classList.remove('scroll');
    white1.classList.remove('scroll');
    white2.classList.remove('scroll');
    white3.classList.remove('scroll');
    white4.classList.remove('scroll');
    white5.classList.remove('scroll');
    white6.classList.remove('scroll');
    white7.classList.remove('scroll');
    white8.classList.remove('scroll');
    white9.classList.remove('scroll');
    white10.classList.remove('scroll');
    white11.classList.remove('scroll');
    white12.classList.remove('scroll');
    dropDown.classList.remove('scroll');
  }
});

window.addEventListener('drop', () => {
  if(window.scrollY > 450) {
    dropDown.classList.add('drop');
  }
  else {
    dropDown.classList.remove('drop');
  }
})


 
 $(document).ready(function() { 

 $('.dropdown-toggle').dropdown(); 

 }); 


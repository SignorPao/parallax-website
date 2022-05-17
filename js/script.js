'use strict';
// pc or touchscreen
const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (
        isMobile.Android() || 
        isMobile.BlackBerry() || 
        isMobile.iOS() || 
        isMobile.Opera() || 
        isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('touch');
} else {
  document.body.classList.add('pc');
}



// navigation blur
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0.1) {
    nav.classList.add('blur');
  } else {
    nav.classList.remove('blur');
  }
});



// parallax
let nav = document.getElementById('nav'),
    text = document.getElementById('text'),
    btn = document.getElementById('btn'),
    sea = document.getElementById('sea'),
    sky = document.getElementById('sky'),
    rocks = document.getElementById('rocks'),
    clouds = document.getElementById('clouds'),
    moon = document.getElementById('moon'),
    planet = document.getElementById('planet'),
    stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  stars.style.top = value * 0.7 + 'px';
  stars.style.left = value * 0.01 + 'px';
  planet.style.top = value * -0.01 + 'px';
  planet.style.left = value * -0.1 + 'px';
  moon.style.top = value * 0.5 + 'px';
  clouds.style.left = value * 0.5 + 'px';
  clouds.style.top = value * 0.2 + 'px';
  rocks.style.top = value * 0.3 + 'px';
  text.style.marginRight = value * 5 + 'px';
  text.style.marginTop = value * 0.5 + 'px';
});



// smooth scrolling
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const goToBlock = document.querySelector(menuLink.dataset.goto);
      const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('nav').offsetHeight;

      if (burgerIcon.classList.contains('active')) {
        document.body.classList.remove('lock');
        burgerIcon.classList.remove('active');
        menuBody.classList.remove('active');
        burger.classList.remove('fa-xmark');
      }

      window.scrollTo({
        top: goToBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}



// hamburger
const burgerIcon = document.querySelector('.burger-icon');
const burger = burgerIcon.querySelector('i');
const menuBody = document.querySelector('.menu-body');
if (burgerIcon) {
  burgerIcon.addEventListener('click', (e) => {
    document.body.classList.toggle('lock');
    burgerIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
    burger.classList.toggle('fa-xmark');
  });
}



// parallax one
const layers = document.querySelectorAll(".layer");
const parallaxOne = document.querySelector(".content-2");
parallaxOne.addEventListener("mousemove", parallaxText);
function parallaxText(e) {
	layers.forEach((l) => {
		const x = (window.innerWidth - e.pageX * 2) / 2;
		l.style.transform = `translateX(${x}px)`;
	});
}



// parallax two
const wrapper = document.querySelector('.wrapper');
const childs = document.querySelectorAll('.child');
function removeAddClass(element, index){
  element.addEventListener('mouseout',()=>{
    wrapper.classList.remove(`child-${index+1}`)
  })
  element.addEventListener('mousemove',() =>{
    wrapper.classList.add(`child-${index+1}`)
  })
}
childs.forEach((item, index)=>{
  removeAddClass(item, index)
});

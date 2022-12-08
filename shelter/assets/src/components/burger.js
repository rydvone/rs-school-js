'use strict'

const wrapperBurger = document.querySelector('.wrapper-burger');

const menuNav = document.querySelector('.menu__nav');
const menuLink = [...document.querySelectorAll('.menu__link')];

// add for shelter
const headerLogo = document.querySelector('.wrapper-header__logo')
const headerWrapper = document.querySelector('.header-wrapper');
const body = document.querySelector('.body');

const menuSwitch = () => {
  wrapperBurger.classList.toggle('open');
  menuNav.classList.toggle('open');


  headerLogo.classList.toggle('open');
  headerWrapper.classList.toggle('open');
  body.classList.toggle('active');
}

const menuClose = () => {
  wrapperBurger.classList.remove('open');
  menuNav.classList.remove('open');

  headerLogo.classList.remove('open');
  headerWrapper.classList.remove('open');
  body.classList.remove('active');
}

const outsideMenu = (e) => {
  if (!(menuNav.contains(e.target) || wrapperBurger.contains(e.target)) && wrapperBurger.classList.contains('open')) {
    menuSwitch();
  }
}


const burgerSubscribe = () => {
  wrapperBurger.addEventListener('click', menuSwitch);
  menuLink.forEach((el) => el.addEventListener('click', menuClose));
  document.addEventListener('click', outsideMenu);
}

export default burgerSubscribe;
'use strict'
// const slide = [...document.querySelectorAll('.slide')];
// const slide = document.querySelectorAll('.slide');
const buttonClose = document.querySelector('.popup__button-close');
const body = document.querySelector('.body');
const popupBlock = document.querySelector('.popup-block');
const popupCard = document.querySelector('.popup__card'); 
const imgAbout = document.querySelector('.img__about'); 


const popupSwitch = () => {
  console.log('hellooooooooo');
  popupBlock.classList.toggle('open');
  body.classList.toggle('active');
}


const outsidePopup = (e) => {
  if(!(popupCard.contains(e.target))) {
    console.log('block shadow');
    popupSwitch();
   }
}
const slide = [...document.querySelectorAll('.slide')];
const popupSubscribe = () => {
  slide.forEach((el) => el.addEventListener('click', (e) => {
    console.log(e.currentTarget);
  }));

  // buttonClose.addEventListener('click', popupSwitch);
  // popupCard.addEventListener('click', popupSwitch);
  // document.addEventListener('click', outsidePopup);
}


export default popupSubscribe;
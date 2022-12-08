'use strict'

/* -------------------carousel------------------ */

function sliderSubscribe(dataJSON) {
  const sliderBtnLeft = document.querySelector(".slide__button_prev");
  const sliderBtnRight = document.querySelector(".slide__button_next");
  const slides = document.querySelector(".slides");
  const wrapperSlideLeft = document.querySelector("#slide-left");
  const wrapperSlideRight = document.querySelector("#slide-right");
  const wrapperSlideActive = document.querySelector("#slide-active");
  const windowInnerWidth = window.innerWidth;

  let numSlide = 3;
  if (windowInnerWidth < 1280 && windowInnerWidth >= 768) {
    numSlide = 2;
  }
  if (windowInnerWidth < 768) {
    numSlide = 1;
  }

  let arrNumPetsActive = [];

  createSlide(wrapperSlideActive, true);
  createSlide(wrapperSlideLeft, false);
  document.querySelector("#slide-right").innerHTML =
    document.querySelector("#slide-left").innerHTML;

  function moveLeft() {
    slides.classList.add("move-to-left");
    // disable for the duration of the animation
    sliderBtnLeft.removeEventListener("click", moveLeft);
    sliderBtnRight.removeEventListener("click", moveRight);
  }
  function moveRight() {
    slides.classList.add("move-to-right");
    // disable btn for the duration of the animation
    sliderBtnLeft.removeEventListener("click", moveLeft);
    sliderBtnRight.removeEventListener("click", moveRight);
  }

  sliderBtnLeft.addEventListener("click", moveLeft);
  sliderBtnRight.addEventListener("click", moveRight);

  slides.addEventListener("animationend", (ev) => {
    // enable listener after end animation
    sliderBtnLeft.addEventListener("click", moveLeft);
    sliderBtnRight.addEventListener("click", moveRight);

    if (ev.animationName === "move-left") {
      slides.classList.remove("move-to-left");
      const wrapperSlideLeftHTML = wrapperSlideLeft.innerHTML;
      wrapperSlideActive.innerHTML = wrapperSlideLeftHTML;

      createSlide(wrapperSlideLeft, false);
      document.querySelector("#slide-right").innerHTML =
        document.querySelector("#slide-left").innerHTML;
    }

    if (ev.animationName === "move-right") {
      slides.classList.remove("move-to-right");
      const wrapperSlideRightHTML = wrapperSlideRight.innerHTML;
      wrapperSlideActive.innerHTML = wrapperSlideRightHTML;

      createSlide(wrapperSlideRight, false);
      document.querySelector("#slide-left").innerHTML =
        document.querySelector("#slide-right").innerHTML;
    }
  });

  // random
  function findRandom(checkActive) {
    let arrRandomInner = [];
    let rndNum;
    if (checkActive == false) {
      rndNum = Math.floor(Math.random() * 8);
      while (arrNumPetsActive.indexOf(rndNum) !== -1) {
        rndNum = Math.floor(Math.random() * 8);
      }
      arrRandomInner.push(rndNum);
    }
    if (checkActive == true) {
      rndNum = Math.floor(Math.random() * 8);
      arrRandomInner.push(rndNum);
    }

    for (let i = 0; i < numSlide - 1; i++) {
      rndNum = Math.floor(Math.random() * 8);
      while (
        arrRandomInner.indexOf(rndNum) !== -1 ||
        arrNumPetsActive.indexOf(rndNum) !== -1
      ) {
        rndNum = Math.floor(Math.random() * 8);
      }
      arrRandomInner.push(rndNum);
    }
    arrNumPetsActive = [...arrRandomInner];
    return arrRandomInner;
  }

  function createSlide(nameSlide, ckeckEmptyArr) {
    nameSlide.innerHTML = "";
    let arrRandom = findRandom(ckeckEmptyArr);

    for (let i = 0; i < numSlide; i++) {
      let namePets = dataJSON[arrRandom[i]].name;

      const tagDivSlide1 = document.createElement("div");
      tagDivSlide1.classList.add("slide");

      const tagImgSlide1 = document.createElement("img");
      tagImgSlide1.classList.add("img__slide");
      tagImgSlide1.src = "./../../assets/images/pets/" + namePets.toLowerCase() + ".png";
      tagImgSlide1.alt = "your best friends";

      const tagDivSubtitleSlide1 = document.createElement("div");
      tagDivSubtitleSlide1.classList.add("slide__subtitle");
      tagDivSubtitleSlide1.textContent = namePets;

      const tagButtonSlide1 = document.createElement("button");
      tagButtonSlide1.classList.add("button_transparent");
      tagButtonSlide1.classList.add("slide__button");
      tagButtonSlide1.textContent = "Learn more";

      nameSlide.append(tagDivSlide1);
      tagDivSlide1.append(tagImgSlide1);
      tagDivSlide1.append(tagDivSubtitleSlide1);
      tagDivSlide1.append(tagButtonSlide1);
    }
  }
}

export default sliderSubscribe;
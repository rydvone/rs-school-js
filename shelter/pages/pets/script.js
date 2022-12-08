'use strict'
/* -------------------pets-script--------------- */
import burgerSubscribe from '../../assets/src/components/burger.js';
import dataJSONfile from "../../assets/src/components/data.js";
import paginationSubscribe from "./../../assets/src/components/pagination.js";

// wait why all pages html + css will be load
window.onload = () => {
  console.log("");
  console.log("Hello, friend!");
  console.log("");

  const dataJSON = dataJSONfile;
  burgerSubscribe();
  paginationSubscribe(dataJSON);



  // popup
  const slide = [...document.querySelectorAll('.slide')];
  const buttonClose = document.querySelector('.popup__button-close');
  const body = document.querySelector('.body');
  const popupBlock = document.querySelector('.popup-block');
  const popupCard = document.querySelector('.popup__card');
  let namePets = '';

  const popupSwitch = (e) => {
    popupBlock.classList.toggle('open');
    body.classList.toggle('active');
  }
  const popupClose = (e) => {
    popupBlock.classList.remove('open');
    body.classList.remove('active');
  }


  buttonClose.addEventListener('click', popupClose);
  // slide.forEach((el) => el.addEventListener('click', popupSwitch));

  document.addEventListener('click', (e) => {
    if (e.target.closest('.slide') != null) {
      let some = e.target.closest('.slide');
      let lengthNamePets = some.textContent.length;
      namePets = some.textContent.slice(0, (lengthNamePets - 10));
      console.log(namePets);

      createPopupWindow(); 
      popupSwitch(e);
    }
    if (e.target.closest('.popup__button-close') != null) {
      popupClose();
    }
    if (popupBlock.contains(e.target) && !(e.target.closest('.popup__card'))) {
      popupClose();
    }
  })


  function createPopupWindow() {
    popupCard.innerHTML = "";
    let numPetsCard = 0;
    for (let i = 0; i < dataJSON.length; i++) {
      if (dataJSON[i].name == namePets) {
        numPetsCard = i;
      }
    }

    const tagImgCard = document.createElement("img");
    tagImgCard.classList.add("img__popup");
    tagImgCard.src = "./../../assets/images/pets/" + namePets.toLowerCase() + ".png";
    tagImgCard.alt = "your best friends";

    const tagDivPopupContent = document.createElement("div");
    tagDivPopupContent.classList.add("popup__content");

    const tagDivPopupName = document.createElement("div");
    tagDivPopupName.classList.add("popup__name");
    tagDivPopupName.textContent = namePets;

    const tagDivPopupType = document.createElement("div");
    tagDivPopupType.classList.add("popup__type");
    tagDivPopupType.textContent = dataJSON[numPetsCard].type + ' - ' + dataJSON[numPetsCard].breed;

    const tagDivPopupDescription = document.createElement("div");
    tagDivPopupDescription.classList.add("popup__description");
    tagDivPopupDescription.textContent = dataJSON[numPetsCard].description;

    const tagDivPopupListWrraper = document.createElement("div");
    tagDivPopupListWrraper.classList.add("popup__list-wrapper");

    const tagDivPopupList = document.createElement("ul");
    tagDivPopupList.classList.add("popup__list");

    const tagDivPopupItem1 = document.createElement("li");
    tagDivPopupItem1.classList.add("popup__item");

    const tagDivPopupItem1Span1 = document.createElement("span");
    tagDivPopupItem1Span1.classList.add("popup__item_bold");
    tagDivPopupItem1Span1.textContent = 'Age: ';

    const tagDivPopupItem1Span2 = document.createElement("span");
    tagDivPopupItem1Span2.classList.add("popup__item_text");
    tagDivPopupItem1Span2.textContent = dataJSON[numPetsCard].age;

    const tagDivPopupItem2 = document.createElement("li");
    tagDivPopupItem2.classList.add("popup__item");

    const tagDivPopupItem2Span1 = document.createElement("span");
    tagDivPopupItem2Span1.classList.add("popup__item_bold");
    tagDivPopupItem2Span1.textContent = 'Inoculations: ';

    const tagDivPopupItem2Span2 = document.createElement("span");
    tagDivPopupItem2Span2.classList.add("popup__item_text");
    tagDivPopupItem2Span2.textContent = dataJSON[numPetsCard].inoculations;

    const tagDivPopupItem3 = document.createElement("li");
    tagDivPopupItem3.classList.add("popup__item");

    const tagDivPopupItem3Span1 = document.createElement("span");
    tagDivPopupItem3Span1.classList.add("popup__item_bold");
    tagDivPopupItem3Span1.textContent = 'Diseases: ';

    const tagDivPopupItem3Span2 = document.createElement("span");
    tagDivPopupItem3Span2.classList.add("popup__item_text");
    tagDivPopupItem3Span2.textContent = dataJSON[numPetsCard].diseases;

    const tagDivPopupItem4 = document.createElement("li");
    tagDivPopupItem4.classList.add("popup__item");

    const tagDivPopupItem4Span1 = document.createElement("span");
    tagDivPopupItem4Span1.classList.add("popup__item_bold");
    tagDivPopupItem4Span1.textContent = 'Parasites: ';

    const tagDivPopupItem4Span2 = document.createElement("span");
    tagDivPopupItem4Span2.classList.add("popup__item_text");
    tagDivPopupItem4Span2.textContent = dataJSON[numPetsCard].parasites;

    const tagDivPopupButtonClose = document.createElement("div");
    tagDivPopupButtonClose.classList.add("popup__button-close");
    tagDivPopupButtonClose.innerHTML = '&#10006;';


    popupCard.append(tagImgCard);
    popupCard.append(tagDivPopupContent);
    popupCard.append(tagDivPopupButtonClose);

    tagDivPopupContent.append(tagDivPopupName);
    tagDivPopupContent.append(tagDivPopupType);
    tagDivPopupContent.append(tagDivPopupDescription);
    tagDivPopupContent.append(tagDivPopupListWrraper);

    tagDivPopupListWrraper.append(tagDivPopupList);

    tagDivPopupList.append(tagDivPopupItem1);
    tagDivPopupList.append(tagDivPopupItem2);
    tagDivPopupList.append(tagDivPopupItem3);
    tagDivPopupList.append(tagDivPopupItem4);

    tagDivPopupItem1.append(tagDivPopupItem1Span1);
    tagDivPopupItem1.append(tagDivPopupItem1Span2);

    tagDivPopupItem2.append(tagDivPopupItem2Span1);
    tagDivPopupItem2.append(tagDivPopupItem2Span2);

    tagDivPopupItem3.append(tagDivPopupItem3Span1);
    tagDivPopupItem3.append(tagDivPopupItem3Span2);

    tagDivPopupItem4.append(tagDivPopupItem4Span1);
    tagDivPopupItem4.append(tagDivPopupItem4Span2);
  }


}
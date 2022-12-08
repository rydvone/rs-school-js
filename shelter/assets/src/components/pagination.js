"use strict";

function paginationSubscribe(dataJSON) {
  const slider = document.querySelector(".slider");
  const buttonDoubleLess = document.querySelector(".double-less");
  const buttonLess = document.querySelector(".less");
  const buttonDoubleMore = document.querySelector(".double-more");
  const buttonMore = document.querySelector(".more");
  const page = document.querySelector(".page");

  const windowInnerWidth = window.innerWidth;
  let numCurrentPage = 1;
  let numMaxPage = 6;
  let numSlide = 8;
  let arrData = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 0, 1, 2, 3],
    [4, 5, 6, 7, 0, 1],
    [2, 3, 4, 5, 6, 7],
  ];

  if (windowInnerWidth < 1280 && windowInnerWidth >= 768) {
    numSlide = 6;
    numMaxPage = 8;
  }
  if (windowInnerWidth < 768) {
    numSlide = 3;
    numMaxPage = 16;
  }
  let arrPetsSlideAll = [];
  let arrPetsPage = [];

  function loadPage() {

    page.textContent = numCurrentPage;
    numCurrentPageIsStart();
    if (numSlide === 8) {
      for (let el of arrPetsSlideAll) {
        arrPetsPage.push(el);
      }
    }
    // if (numSlide !== 8) {
    //   let arrTemp = createArrayPets6(numSlide, numMaxPage);
    //   for (let el of arrTemp) {
    //     arrPetsPage.push(el);
    //   }
    // }
    if (numSlide === 6) {
      let arrTemp = getShuffle(arrData);
      for (let el of arrTemp) {
        arrPetsPage.push(el);
      }
    }
    if (numSlide === 3) {
      const arr6 = getShuffle(arrData);
      let arrTemp = sliceFrom6To3(arr6);
      for (let el of arrTemp) {
        arrPetsPage.push(el);
      }
    }
  }


  // after deadline
  function getRandomStart(num) {
    let arrInner = [];
    let randomNum;  
    randomNum = Math.floor(Math.random() * num);
    arrInner.push(randomNum);  
    for (let i = 0; i < num - 1; i++) {
      randomNum = Math.floor(Math.random() * num);
      while (arrInner.indexOf(randomNum) !== -1) {
        randomNum = Math.floor(Math.random() * num);
      }
      arrInner.push(randomNum);
    }
    return arrInner;
  }

  function getShuffle(arr) {
    let arrInner = [];

    for(let j = 0; j < 2; j++) {
      let arrForArr = getRandomStart(4);
      for (let i = 0; i < arrForArr.length; i++) {
        let arrTemp = [...arr[arrForArr[i]]];
        let arrTempShuffle = arrTemp.sort(function () {
          return Math.random() - 0.5;
        });
        arrInner.push(arrTempShuffle);
      }
    } 
    console.log('random 6:');
    console.log(arrInner);
    return arrInner;
  }
  
  function sliceFrom6To3(arr) {
    let arrInner = [];
    for (const el of arr) {
      let arrTemp = [];
      const size = 3;
      for (let i = 0; i <el.length; i += size) {
        arrInner.push(el.slice(i, i + size));
      }    
    }
    console.log('random 3:');
    console.log(arrInner);
    return arrInner;
  }




  // create common array for all pages
  function createArrayPetsCommon() {
    for (let i = 0; i < 6; i++) {
      arrPetsSlideAll.push(createRandomPage(8));
    }
  }

  function createArrayPets6(countSlide, countPage) {
    let arrRandomInner = [];
    let rndNum;

    for (let j = 0; j < countPage; j++) {
      let arrRandomInnerTemp = [];
      rndNum = Math.floor(Math.random() * 8);
      arrRandomInnerTemp.push(rndNum);
      for (let i = 0; i < (countSlide - 1); i++) {
        rndNum = Math.floor(Math.random() * 8);
        while (
          arrRandomInnerTemp.indexOf(rndNum) !== -1) {
          rndNum = Math.floor(Math.random() * 8);
        }
        arrRandomInnerTemp.push(rndNum);
      }
      arrRandomInner.push(arrRandomInnerTemp);
    }
    return arrRandomInner;
  }

  // random
  function createRandomPage(numPetsCard) {
    let rndNum;
    let arrRandomInner = [];
    rndNum = Math.floor(Math.random() * 8);
    arrRandomInner.push(rndNum);
    for (let i = 0; i < numPetsCard - 1; i++) {
      rndNum = Math.floor(Math.random() * 8);
      while (arrRandomInner.indexOf(rndNum) !== -1) {
        rndNum = Math.floor(Math.random() * 8);
      }
      arrRandomInner.push(rndNum);
    }
    return arrRandomInner;
  }

  // createRandomPage(numSlide);
  createArrayPetsCommon();
  console.log('initial array:');
  console.log(arrPetsSlideAll);
  loadPage();

  createSlide(slider, numCurrentPage);

  function numCurrentPageIsStart() {
    buttonDoubleLess.disabled = true;
    buttonDoubleLess.classList.add("disable");
    buttonDoubleLess.removeEventListener("click", moveDoubleLess);

    buttonLess.disabled = true;
    buttonLess.classList.add("disable");
    buttonLess.removeEventListener("click", moveLess);

    buttonMore.disabled = false;
    buttonMore.classList.remove("disable");
    buttonMore.addEventListener("click", moveMore);

    buttonDoubleMore.disabled = false;
    buttonDoubleMore.classList.remove("disable");
    buttonDoubleMore.addEventListener("click", moveDoubleMore);
  }

  function numCurrentPageIsEnd() {
    buttonDoubleLess.disabled = false;
    buttonDoubleLess.classList.remove("disable");
    buttonDoubleLess.addEventListener("click", moveDoubleLess);

    buttonLess.disabled = false;
    buttonLess.classList.remove("disable");
    buttonLess.addEventListener("click", moveLess);

    buttonMore.disabled = true;
    buttonMore.classList.add("disable");
    buttonMore.removeEventListener("click", moveMore);

    buttonDoubleMore.disabled = true;
    buttonDoubleMore.classList.add("disable");
    buttonDoubleMore.removeEventListener("click", moveDoubleMore);
  }

  function numCurrentPageIsMiddle() {
    buttonDoubleLess.disabled = false;
    buttonDoubleLess.classList.remove("disable");
    buttonDoubleLess.addEventListener("click", moveDoubleLess);

    buttonLess.disabled = false;
    buttonLess.classList.remove("disable");
    buttonLess.addEventListener("click", moveLess);

    buttonMore.disabled = false;
    buttonMore.classList.remove("disable");
    buttonMore.addEventListener("click", moveMore);

    buttonDoubleMore.disabled = false;
    buttonDoubleMore.classList.remove("disable");
    buttonDoubleMore.addEventListener("click", moveDoubleMore);
  }

  function moveDoubleLess() {
    numCurrentPage = 1;
    createSlide(slider, numCurrentPage);
    numCurrentPageIsStart();
    page.textContent = numCurrentPage;
  }

  function moveLess() {
    numCurrentPage--;
    createSlide(slider, numCurrentPage);
    if (numCurrentPage != numMaxPage) {
      numCurrentPageIsMiddle();
    }
    if (numCurrentPage == 1) {
      numCurrentPageIsStart();
    }
    page.textContent = numCurrentPage;
  }

  function moveMore() {
    numCurrentPage++;
    createSlide(slider, numCurrentPage);
    if (numCurrentPage != 1) {
      numCurrentPageIsMiddle();
    }
    if (numCurrentPage == numMaxPage) {
      numCurrentPageIsEnd();
    }
    page.textContent = numCurrentPage;
  }

  function moveDoubleMore() {
    numCurrentPage = numMaxPage;
    createSlide(slider, numCurrentPage);
    numCurrentPageIsEnd();
    page.textContent = numCurrentPage;
  }

  buttonDoubleLess.addEventListener("click", moveDoubleLess);
  buttonLess.addEventListener("click", moveLess);
  buttonMore.addEventListener("click", moveMore);
  buttonDoubleMore.addEventListener("click", moveDoubleMore);


  function createSlide(nameSlide, numPageArg) {
    nameSlide.innerHTML = "";
    // console.log('numSlide = ' + numSlide + '   numMaxPage = ' + numMaxPage);
    for (let i = 0; i < numSlide; i++) {
      let namePets = dataJSON[arrPetsPage[numPageArg - 1][i]].name;

      const tagDivSlide1 = document.createElement("div");
      tagDivSlide1.classList.add("slide");

      const tagImgSlide1 = document.createElement("img");
      tagImgSlide1.classList.add("img__slide");
      tagImgSlide1.src =
        "./../../assets/images/pets/" + namePets.toLowerCase() + ".png";
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

export default paginationSubscribe;

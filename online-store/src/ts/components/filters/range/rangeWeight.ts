import './range.css';

function initRangeWeight(
  inputFrom: string,
  inputTo: string,
  valueStart: string,
  valueEnd: string
): void {
  function controlFromRange(
    fromSlider: HTMLInputElement,
    toSlider: HTMLInputElement,
    fromInput: HTMLInputElement
  ) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#fff395', toSlider);
    if (from > to) {
      fromSlider.value = `${to}`;
      fromInput.textContent = `${to}`;
    } else {
      fromInput.textContent = `${from}`;
    }
  }

  // function controlToSlider(
  //   fromSlider: HTMLInputElement,
  //   toSlider: HTMLInputElement,
  //   toInput: HTMLInputElement
  // ) {
  //   const [from, to] = getParsed(fromSlider, toSlider);
  //   fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  //   setToggleAccessible(toSlider);
  //   if (from <= to) {
  //     toSlider.value = `${to}`;
  //     toInput.value = `${to}`;
  //   } else {
  //     toInput.value = `${from}`;
  //     toSlider.value = `${from}`;
  //   }
  // }

  function controlToRange(
    fromSlider: HTMLInputElement,
    toSlider: HTMLInputElement,
    toInput: HTMLInputElement
  ) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#fff395', toSlider);
    // setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = `${to}`;
      toInput.textContent = `${to}`;
    } else {
      toInput.textContent = `${from}`;
      toSlider.value = `${from}`;
    }
  }

  function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(
    from: HTMLInputElement,
    to: HTMLInputElement,
    sliderColor: string,
    rangeColor: string,
    controlSlider: HTMLInputElement
  ) {
    const rangeDistance = Number(to.max) - Number(to.min);
    const fromPosition = Number(from.value) - Number(to.min);
    const toPosition = Number(to.value) - Number(to.min);
    controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
    ${sliderColor} 100%)`;
  }

  // function setToggleAccessible(currentTarget: HTMLInputElement) {
  //   const toSlider = document.querySelector('#toSlider') as HTMLInputElement;
  //   if (Number(currentTarget.value) <= 0) {
  //     toSlider.style.zIndex = `${2}`;
  //   } else {
  //     toSlider.style.zIndex = `${0}`;
  //   }
  // }

  // const fromSlider = document.querySelector('#fromSlider') as HTMLInputElement;
  // console.log(fromSlider);
  // const toSlider = document.querySelector('#toSlider') as HTMLInputElement;
  // const fromInput = document.querySelector('#fromInput') as HTMLInputElement;
  // const toInput = document.querySelector('#toInput') as HTMLInputElement;
  // fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  // setToggleAccessible(toSlider);

  const rangeCountFrom = document.querySelector(inputFrom) as HTMLInputElement;
  const rangeCountTo = document.querySelector(inputTo) as HTMLInputElement;
  const rangeCountStart = document.querySelector(valueStart) as HTMLInputElement;
  const rangeCountEnd = document.querySelector(valueEnd) as HTMLInputElement;
  fillSlider(rangeCountFrom, rangeCountTo, '#C6C6C6', '#fff395', rangeCountTo);
  // setToggleAccessible(rangeCountTo);

  // fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  // toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  // fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  // toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

  rangeCountFrom.oninput = () => controlFromRange(rangeCountFrom, rangeCountTo, rangeCountStart);
  rangeCountTo.oninput = () => controlToRange(rangeCountFrom, rangeCountTo, rangeCountEnd);
}

export default initRangeWeight;

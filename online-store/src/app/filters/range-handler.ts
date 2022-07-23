// import { filterData } from '../services/app-state';

export class FilterRangeHandler {
  private _inputFrom: HTMLInputElement;
  private _inputTo: HTMLInputElement;
  constructor(inputFrom: HTMLInputElement, inputTo: HTMLInputElement) {
    this._inputFrom = inputFrom;
    this._inputTo = inputTo;
    this.fillSlider(this._inputFrom, this._inputTo, this._inputTo);
  }

  public controlFromRange(
    sliderFrom: HTMLInputElement,
    sliderTo: HTMLInputElement,
    fromInput: HTMLElement
  ) {
    const [from, to] = this.getParsed(sliderFrom, sliderTo);
    this.fillSlider(sliderFrom, sliderTo, sliderTo);
    if (from > to) {
      sliderFrom.value = `${to}`;
      fromInput.textContent = `${to}`;
    } else {
      fromInput.textContent = `${from}`;
    }
    // if (this._inputFrom === '#range-count-from') {
    //   filterData.rangeQuantity(from, to);
    // }
    // if (inputFrom === '#range-weight-from') {
    //   filterData.rangeWeight(from, to);
    // }
  }

  public controlToRange(
    sliderFrom: HTMLInputElement,
    sliderTo: HTMLInputElement,
    toInput: HTMLElement
  ) {
    const [from, to] = this.getParsed(sliderFrom, sliderTo);
    this.fillSlider(sliderFrom, sliderTo, sliderTo);
    if (from < parseInt(sliderTo.min) + 10) {
      sliderTo.style.zIndex = '2';
    }
    if (from > parseInt(sliderTo.min) + 10) {
      sliderTo.style.zIndex = '0';
    }
    if (from <= to) {
      sliderTo.value = `${to}`;
      toInput.textContent = `${to}`;
    } else {
      toInput.textContent = `${from}`;
      sliderTo.value = `${from}`;
    }
    // if (inputFrom === '#range-count-from') {
    //   filterData.rangeQuantity(from, to);
    // }
    // if (inputFrom === '#range-weight-from') {
    //   filterData.rangeWeight(from, to);
    // }
  }

  public getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  public fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderToStyle: HTMLInputElement) {
    // '#c6c6c6', '#fff395'
    const SLIDERCOLOR = '#c7c7c7';
    const RANGECOLOR = '#fff395';
    const rangeDistance = Number(to.max) - Number(to.min);
    const fromPosition = Number(from.value) - Number(to.min);
    const toPosition = Number(to.value) - Number(to.min);
    sliderToStyle.style.background = `linear-gradient(
    to right,
    ${SLIDERCOLOR} 0%,
    ${SLIDERCOLOR} ${(fromPosition / rangeDistance) * 100}%,
    ${RANGECOLOR} ${(fromPosition / rangeDistance) * 100}%,
    ${RANGECOLOR} ${(toPosition / rangeDistance) * 100}%,
    ${SLIDERCOLOR} ${(toPosition / rangeDistance) * 100}%,
    ${SLIDERCOLOR} 100%)`;
  }
}

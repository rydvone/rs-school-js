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
    valueFrom: HTMLElement
  ) {
    const [from, to] = this.getParsed(sliderFrom, sliderTo);
    this.fillSlider(sliderFrom, sliderTo, sliderTo);
    if (from > to) {
      sliderFrom.value = `${to}`;
      valueFrom.textContent = `${to}`;
    } else {
      valueFrom.textContent = `${from}`;
    }
  }

  public controlToRange(
    sliderFrom: HTMLInputElement,
    sliderTo: HTMLInputElement,
    valueTo: HTMLElement
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
      valueTo.textContent = `${to}`;
    } else {
      valueTo.textContent = `${from}`;
      sliderTo.value = `${from}`;
    }
  }

  public getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  public fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderToStyle: HTMLInputElement) {
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

export class filterRange {
  protected _node: HTMLElement | null;
  constructor() {
    this._node = null;
  }

  private _getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  controlFromRange(
    fromRange: HTMLInputElement,
    toRange: HTMLInputElement,
    fromOutput: HTMLElement
  ) {
    const [from, to] = this._getParsed(fromRange, toRange);
    this.fillRange(fromRange, toRange, '#c7c7c7', '#25da76', toRange);
    if (from > to) {
      fromRange.value = `${to}`;
      fromOutput.textContent = `${to}`;
    } else {
      fromOutput.textContent = `${from}`;
    }
    return `${fromOutput.textContent}`;
  }

  controlToRange(fromRange: HTMLInputElement, toRange: HTMLInputElement, toOutput: HTMLElement) {
    const [from, to] = this._getParsed(fromRange, toRange);
    this.fillRange(fromRange, toRange, '#c7c7c7', '#25da76', toRange);
    this.toggleZIndex(from, toRange);
    if (from <= to) {
      toRange.value = `${to}`;
      toOutput.textContent = `${to}`;
    } else {
      toOutput.textContent = `${from}`;
      toRange.value = `${from}`;
    }
    return `${toOutput.textContent}`;
  }
  
  toggleZIndex(val: number, toRange: HTMLInputElement) {
    if (val < parseInt(toRange.min) + 10) {
      toRange.style.zIndex = '2';
    }
    if (val > parseInt(toRange.min) + 10) {
      toRange.style.zIndex = '0';
    }
  }

  fillRange(
    from: HTMLInputElement,
    to: HTMLInputElement,
    rangeColorFrom: string,
    rangeColorTo: string,
    controlRange: HTMLInputElement
  ) {
    const rangeDistance = Number(to.max) - Number(to.min);
    const fromPosition = Number(from.value) - Number(to.min);
    const toPosition = Number(to.value) - Number(to.min);
    controlRange.style.background = `linear-gradient(
      to right,
      ${rangeColorFrom} 0%,
      ${rangeColorFrom} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColorTo} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColorTo} ${(toPosition / rangeDistance) * 100}%,
      ${rangeColorFrom} ${(toPosition / rangeDistance) * 100}%,
      ${rangeColorFrom} 100%)`;
  }

}

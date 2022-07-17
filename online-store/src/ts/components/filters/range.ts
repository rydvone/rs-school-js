export class FilterRange {
  protected _node: HTMLElement | null;
  constructor() {
    this._node = null;
  }

  private getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  controlFromRange(
    fromRange: HTMLInputElement,
    toRange: HTMLInputElement,
    fromOutput: HTMLElement
  ) {
    const [from, to] = this.getParsed(fromRange, toRange);
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
    const [from, to] = this.getParsed(fromRange, toRange);
    this.fillRange(fromRange, toRange, '#c7c7c7', '#25da76', toRange);
    if (from <= to) {
      toRange.value = `${to}`;
      toOutput.textContent = `${to}`;
    } else {
      toOutput.textContent = `${from}`;
      toRange.value = `${from}`;
    }
    return `${toOutput.textContent}`;
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

const rangeCountFrom = document.querySelector('#range-count--range-from') as HTMLInputElement;
const rangeCountTo = document.querySelector('#range-count--range-to') as HTMLInputElement;
const rangeCountStart = document.querySelector('.range-count__start') as HTMLInputElement;
const rangeCountEnd = document.querySelector('.range-count__end') as HTMLInputElement;
fillRange(rangeCountFrom, rangeCountTo, '#C6C6C6', '#fff395', rangeCountTo);

  rangeCountFrom.oninput = () => controlFromRange(rangeCountFrom, rangeCountTo, rangeCountStart);
  rangeCountTo.oninput = () => controlToRange(rangeCountFrom, rangeCountTo, rangeCountEnd);
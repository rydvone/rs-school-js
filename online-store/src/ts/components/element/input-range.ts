import { Input } from './input';

const ELEMENT_TYPE = 'range';

export class InputRange extends Input {
  private _value: number;
  constructor() {
    super();
    super.setType(ELEMENT_TYPE);
    this._value = 0;
  }

  get value() {
    return parseInt(super.inputElement.value);
  }

  set value(val: number) {
    super.inputElement.value = `${val}`;
  }

  get min() {
    return parseInt(super.inputElement.min);
  }

  set min(min: number) {
    super.inputElement.min = `${min}`;
  }

  get max() {
    return parseInt(super.inputElement.max);
  }

  set max(max: number) {
    super.inputElement.min = `${max}`;
  }
}

import { Input } from './input';

const ELEMENT_TYPE = 'range';

export class InputRange2 extends Input {
  private _value: number;
  constructor() {
    super();
    super.setType(ELEMENT_TYPE);
    this._value = 0;
  }

  get value() {
    return parseInt(this._inputElement.value);
  }

  set value(val: number) {
    this._inputElement.value = `${val}`;
  }

  get min() {
    return parseInt(this._inputElement.min);
  }

  set min(min: number) {
    this._inputElement.min = `${min}`;
  }

  get max() {
    return parseInt(this._inputElement.max);
  }

  set max(max: number) {
    this._inputElement.min = `${max}`;
  }
}

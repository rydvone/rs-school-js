import { Input } from './input';

export class InputRange extends Input {
  protected _type: string;
  private _value: number;
  constructor(type: string) {
    super(type);
    this._type = type;
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

import { Popup } from '../element/popup';

export class StorageCart {
  private _value: number;
  constructor() {
    this._value = 0;
  }

  set value(val: number) {
    this._value = val;
  }

  get value() {
    return this._value;
  }

  checkFull() {
    if (this._value >= 10) {
      console.log('Shopping cart is Full!');
      const popup = new Popup();
      popup.addClass();
    }
  }
}

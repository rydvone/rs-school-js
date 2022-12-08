import { AppState } from '../../services/app-state';
import { ElementTemplate } from './element-template';
import { Popup } from './popup';

const ELEMENT_NAME_CLASS = 'cart-counter';
const COUNT_MAX = 10;

export class Cart extends ElementTemplate {
  protected _cartElement: HTMLElement;
  private _value: number;
  private popup: Popup;
  constructor() {
    super();
    this._cartElement = this.createDiv(ELEMENT_NAME_CLASS);
    this._value = 0;
    this.update();
    this.popup = new Popup();
  }

  update() {
    AppState.checkLocalStorage();
    this.value = AppState.productSelected.length;
    this._value = AppState.productSelected.length;
    this.checkFull();
  }

  get getPopup() {
    return this.popup.element;
  }

  get element() {
    return this._cartElement;
  }

  get value() {
    return Number(this._cartElement.textContent);
  }

  set value(val: number) {
    this._cartElement.textContent = `${val}`;
  }

  incr() {
    this._value += 1;
    this.value = this.checkFull();
  }

  decr() {
    this._value -= 1;
    if (this._value < 0) {
      this._value = 0;
    }
    this.value = this.checkFull();
  }

  checkFull() {
    if (this._value >= COUNT_MAX) {
      console.log('Shopping cart is Full!');
      this.popup.addClass();
      return COUNT_MAX;
    }
    return this._value;
  }

  clearCount() {
    this._value = 0;
    this.value = 0;
  }
}

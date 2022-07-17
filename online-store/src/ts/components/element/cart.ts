import { ElementTemplate } from './element-template';

const ELEMENT_NAME_CLASS = 'cart-counter';

export class Cart extends ElementTemplate {
  protected _cartElement: HTMLElement;
  private _value: number;
  constructor() {
    super();
    this._value = 0;
    this._cartElement = this.createDiv(ELEMENT_NAME_CLASS);
    this.value = this._value;
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
}

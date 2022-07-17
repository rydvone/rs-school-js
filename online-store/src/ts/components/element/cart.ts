import { ElementTemplate } from './element-template';

const ELEMENT_NAME_CLASS = 'cart-counter';

export class Cart extends ElementTemplate {
  protected cartElement: HTMLElement;
  private _value: number;
  constructor() {
    super();
    this._value = 0;
    this.cartElement = this.createDiv(ELEMENT_NAME_CLASS);
    this.value = this._value;
  }

  get value() {
    return Number(this.cartElement.textContent);
  }

  set value(val: number) {
    this.cartElement.textContent = `${val}`;
  }
}

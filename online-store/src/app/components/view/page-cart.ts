import { Cart } from '../element/cart';
import { ElementTemplate } from '../element/element-template';

export const cartCounter = new Cart();

const ELEMENT_NAME = 'section';
const ELEMENT_NAME_CLASS = 'cart';
const ELEMENT_H3 = 'h3';
const TITLE = 'Shopping cart';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'shopping-cart';
const ELEMENT_IMG = 'img';
const ELEMENT_IMG_CLASS = 'icons-cart';

export class PageCart extends ElementTemplate {
  protected _cart: HTMLElement;
  constructor() {
    super();
    this._cart = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this.appendTo();
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const h3 = this.createHTMLElement(ELEMENT_H3, ELEMENT_H3);
    h3.textContent = TITLE;
    fragment.append(h3);
    const div = this.createDiv(ELEMENT_NAME_CLASS_ADDITIONAL);
    const img = this.createHTMLElement(ELEMENT_IMG, ELEMENT_IMG_CLASS) as HTMLImageElement;
    img.src = `./assets/image/svg/shopping-cart-10.svg`;
    img.alt = `Shopping cart`;
    div.append(img);
    div.append(cartCounter.element);
    fragment.append(div);
    this._cart.append(fragment);
  }

  innerTo(data: string) {
    this.element.innerHTML = data;
  }

  getInnerBlock() {
    return this.element.innerHTML;
  }

  get element() {
    return this._cart;
  }
}

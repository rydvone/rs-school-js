import { ElementTemplate } from './element-template';

const ELEMENT_NAME_CLASS = 'wrapper__overlay';
const ELEMENT_OVERLAY_CLASS = 'overlay';
const ELEMENT_NAME_CLASS_ADD = 'cart-description';
const ELEMENT_BUTTON_CLASS = 'button-close';
const ELEMENT_TEXT_CLASS = 'cart-text';
const CLASS_ADD = 'active';
// const INNER_HTML = `
// <div class="wrapper__overlay">
//   <div class="overlay"></div>
//   <div class="cart-description">
//     <div class="cart-text"></div>
//     <div class="button-close">close</div>
// </div>
// </div>`;

export class Popup extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_NAME_CLASS);
    this.appendTo();
  }

  appendTo() {
    const overlay = this.createDiv(ELEMENT_OVERLAY_CLASS);
    this._item.append(overlay);
    const description = this.createDiv(ELEMENT_NAME_CLASS_ADD);
    const text = this.createDiv(ELEMENT_TEXT_CLASS);
    description.append(text);
    const button = this.createDiv(ELEMENT_BUTTON_CLASS);
    button.onclick = () => {
      this._item.classList.remove('active');
    };
    description.append(text);
    this._item.append(description);
  }

  innerTo(data: string) {
    this._item.innerHTML = data;
  }

  addClass() {
    this._item.classList.add(CLASS_ADD);
  }

  removeClass() {
    this._item.classList.remove(CLASS_ADD);
  }

  toggleClass() {
    this._item.classList.toggle(CLASS_ADD);
  }

  get element() {
    return this._item;
  }
}

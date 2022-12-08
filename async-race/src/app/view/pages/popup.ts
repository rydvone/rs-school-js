import { ElementTemplate } from '../elements/element-template';

const ELEMENT_NAME_CLASS = 'wrapper__overlay';
const ELEMENT_OVERLAY_CLASS = 'overlay';
const ELEMENT_NAME_CLASS_ADD = 'overlay-description';
const ELEMENT_BUTTON_CLASS = 'button-close';
const ELEMENT_TEXT_CLASS = 'overlay-text';
const CLASS_ADD = 'active';

export class Popup extends ElementTemplate {
  private _item: HTMLElement;
  private _text: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_NAME_CLASS);
    this._text = this.createDiv(ELEMENT_TEXT_CLASS);
    this.appendTo();
  }

  appendTo() {
    const overlay = this.createDiv(ELEMENT_OVERLAY_CLASS);
    this._item.append(overlay);
    const description = this.createDiv(ELEMENT_NAME_CLASS_ADD);
    this._text.textContent = 'winner';
    description.append(this._text);
    const button = this.createDiv(ELEMENT_BUTTON_CLASS);
    button.textContent = 'close';
    button.onclick = () => {
      this._item.classList.remove(CLASS_ADD);
    };
    description.append(button);
    this._item.append(description);
  }

  innerText(data: string) {
    this._text.innerHTML = data;
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

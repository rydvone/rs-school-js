import { ElementTemplate } from './element-template';
// import { TFuncMouse } from '../../types/func';

const ELEMENT_NAME = 'button';
const ELEMENT_CLASS = 'button';
const ELEMENT_CLASS_ADD = 'selected';

export class Button extends ElementTemplate {
  private _button: HTMLButtonElement;
  constructor() {
    super();
    this._button = document.createElement(ELEMENT_NAME);
    this._button.className = ELEMENT_CLASS;
  }

  addContent(title: string) {
    this._button.textContent = title;
  }

  // click(fn: TFuncMouse) {
  //   this._button.addEventListener('click', fn);
  // }

  // unclick(fn: TFuncMouse) {
  //   this._button.removeEventListener('click', fn);
  // }

  containsClass() {
    return this._button.classList.contains(ELEMENT_CLASS_ADD);
  }

  addClass() {
    this._button.classList.add(ELEMENT_CLASS_ADD);
  }

  removeClassSelected() {
    this._button.classList.remove(ELEMENT_CLASS_ADD);
  }

  toggleClass() {
    this._button.classList.toggle(ELEMENT_CLASS_ADD);
  }

  get element() {
    return this._button;
  }
}

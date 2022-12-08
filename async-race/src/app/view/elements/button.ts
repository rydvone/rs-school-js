import { ElementTemplate } from './element-template';
import { TFuncMouse } from '../../types/func-types';
import { IButtonsStore } from '../../types/buttons-store-types';

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

  click(fn: TFuncMouse) {
    this._button.addEventListener('click', fn);
  }

  unclick(fn: TFuncMouse) {
    this._button.removeEventListener('click', fn);
  }

  containsClass() {
    return this._button.classList.contains(ELEMENT_CLASS_ADD);
  }

  addClassSelected() {
    this._button.classList.add(ELEMENT_CLASS_ADD);
  }

  removeClassSelected() {
    this._button.classList.remove(ELEMENT_CLASS_ADD);
  }

  toggleClass() {
    this._button.classList.toggle(ELEMENT_CLASS_ADD);
  }

  stateSelected(key: string) {
    console.log('stateButton', key);
  }

  selected(key: string, store: IButtonsStore) {
    Object.keys(store).forEach((el) => {
      store[el].removeClassSelected();
      if (key === el) {
        store[el].addClassSelected();
      }
    });
  }

  get element() {
    return this._button;
  }
}

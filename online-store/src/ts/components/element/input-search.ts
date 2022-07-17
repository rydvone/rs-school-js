import { Input } from './input';

type Func = (this: void, event: KeyboardEvent) => void;

const ELEMENT_CLASS = 'search';
const ELEMENT_TYPE = 'search';
const ELEMENT_ID = 'search';

export class InputSearch extends Input {
  constructor() {
    super();
    this.setType(ELEMENT_TYPE);
    this.setIdName(ELEMENT_ID);
    this._setSearchAttr();
    this.setClassName(this._inputElement, ELEMENT_CLASS);
    this.keydown();
  }

  get value() {
    return this._inputElement.value;
  }

  set value(val: string) {
    this._inputElement.value = `${val}`;
  }

  keydown() {
    this._inputElement.addEventListener('keydown', (ev) => {
      console.log('ev.code', ev.code);
      console.log('val', this.element.value);
      if (ev.code === `13` && this.element.value != '') {
        ev.preventDefault();
        console.log('ev.code', ev.code);
      }
    });
  }

  unKeydown(func: Func) {
    this._inputElement.removeEventListener('keydown', func);
  }

  private _setSearchAttr() {
    this._inputElement.placeholder = 'search';
    this._inputElement.autocomplete = 'off';
    this._inputElement.focus();
  }

  get element() {
    return this._inputElement;
  }
}

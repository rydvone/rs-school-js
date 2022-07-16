import { Input } from './input';

type Func = (this: void, event: KeyboardEvent) => void;

const ELEMENT_TYPE = 'search';
const ELEMENT_ID = 'search';

export class InputSearch extends Input {
  constructor() {
    super();
    super.setType(ELEMENT_TYPE);
    super.setIdName(ELEMENT_ID);
    this._setSearchAttr();
  }

  get value() {
    return super.inputElement.value;
  }

  set value(val: string) {
    super.inputElement.value = `${val}`;
  }

  keydown(func: Func) {
    super.inputElement.addEventListener('keydown', func);
  }

  unKeydown(func: Func) {
    super.inputElement.removeEventListener('keydown', func);
  }

  private _setSearchAttr() {
    super.inputElement.placeholder = 'search';
    super.inputElement.autocomplete = 'off';
    super.inputElement.focus();
  }
}

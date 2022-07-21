import { Input } from './input';
import { filterData } from '../../services/app-state';

type FuncK = (this: void, event: KeyboardEvent) => void;
type Func = (this: void, event: Event) => void;

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
    this.keydown(this._keydownCallback.bind(this));
    this.change(this._clickCallback.bind(this));
    this.search(this._inputElement.value);
  }

  get value() {
    return this._inputElement.value;
  }

  set value(val: string) {
    this._inputElement.value = `${val}`;
  }

  private _setSearchAttr() {
    this._inputElement.placeholder = 'search';
    this._inputElement.autocomplete = 'off';
    this._inputElement.focus();
  }

  search(val: string) {
    filterData.search(val);
  }

  private _clickCallback() {
    // const onClear = () => {
    //   this.value = '0';
    //   console.log('ooooooooooo');
    // };

    // this._inputElement.addEventListener('search', onClear.bind(this));
    this.search('0');
    // setTimeout(() => this._inputElement.removeEventListener('search', onClear.bind(this)));
  }

  private _keydownCallback(_ev: KeyboardEvent) {
    if (_ev.key === 'Enter') {
      _ev.preventDefault();
    }
    this.search(this._inputElement.value);
  }

  keydown(fn: FuncK) {
    this._inputElement.addEventListener('keydown', fn);
  }

  unkeydown(fn: FuncK) {
    this._inputElement.removeEventListener('keydown', fn);
  }

  change(fn: Func) {
    this._inputElement.addEventListener('search', fn);
  }

  unchange(fn: Func) {
    this._inputElement.removeEventListener('change', fn);
  }

  get element() {
    return this._inputElement;
  }
}

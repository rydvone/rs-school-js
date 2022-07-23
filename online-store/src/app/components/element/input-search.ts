import { Input } from './input';
import { AppState, filterData } from '../../services/app-state';

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
    this.keyup(this._keyupCallback.bind(this));
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
  }

  search(val: string) {
    AppState.searchSelected = val;
    console.log(AppState.searchSelected);
    filterData.callFilter();
  }

  private _clickCallback() {
    const onClear = () => {
      this.search('');
    };

    this._inputElement.addEventListener('search', onClear.bind(this));
    setTimeout(() => this._inputElement.removeEventListener('search', onClear.bind(this)));
  }

  private _keydownCallback(_ev: KeyboardEvent) {
    if (_ev.key === 'Enter') {
      _ev.preventDefault();
    }
  }

  private _keyupCallback() {
    this.search(this._inputElement.value);
  }

  keydown(fn: FuncK) {
    this._inputElement.addEventListener('keydown', fn);
  }

  unkeydown(fn: FuncK) {
    this._inputElement.removeEventListener('keydown', fn);
  }

  keyup(fn: FuncK) {
    this._inputElement.addEventListener('keyup', fn);
  }

  unkeyup(fn: FuncK) {
    this._inputElement.removeEventListener('keyup', fn);
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

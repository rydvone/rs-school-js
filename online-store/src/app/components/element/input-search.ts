// import { Input } from './input';
import { AppState, filterData } from '../../services/app-state';
import { ElementTemplate } from './element-template';

type FuncK = (this: void, event: KeyboardEvent) => void;
type Func = (this: void, event: Event) => void;

const ELEMENT_NAME = 'input';
const ELEMENT_ALL = 'search';
const ELEMENT_AUTOCOMPLETE = 'search';
const ELEMENT_FORM = 'form';
const ELEMENT_FORM_CLASS = 'filters__form';

export class InputSearch extends ElementTemplate {
  protected _inputElement: HTMLInputElement;
  protected _form: HTMLElement;
  constructor() {
    super();
    this._form = this.createHTMLElement(ELEMENT_FORM, ELEMENT_FORM_CLASS);
    this._inputElement = this.createInput();
    this.keydown(this._keydownCallback.bind(this));
    this.keyup(this._keyupCallback.bind(this));
    this.change(this._clickCallback.bind(this));
    // this.search(this._inputElement.value);
  }

  createInput() {
    this.clearNode(this._form);
    const item = document.createElement(ELEMENT_NAME);
    this._init(item);
    this._form.append(item);
    return item;
  }

  private _init(item: HTMLInputElement) {
    item.id = ELEMENT_ALL;
    item.setAttribute('type', ELEMENT_ALL);
    item.placeholder = ELEMENT_ALL;
    item.autocomplete = ELEMENT_AUTOCOMPLETE;
    this.setClassName(item, ELEMENT_ALL);
    item.value = AppState.searchSelected;
  }

  // private _setIdName(idName: string) {
  //   this._inputElement.id = idName;
  // }

  // private _setType(inputType: string) {
  //   this._inputElement.setAttribute('type', inputType);
  // }

  // private _setSearchAttr() {
  //   this._inputElement.placeholder = ELEMENT_ALL;
  //   this._inputElement.autocomplete = ELEMENT_AUTOCOMPLETE;
  // }

  get value() {
    return this._inputElement.value;
  }

  set value(val: string) {
    this._inputElement.value = `${val}`;
  }

  search(val: string) {
    AppState.searchSelected = val;
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
    this._inputElement.removeEventListener('search', fn);
  }

  get element() {
    return this._inputElement;
  }

  get elementForm() {
    return this._form;
  }
}

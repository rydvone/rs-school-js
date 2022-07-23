import { ElementTemplate } from './element-template';

type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'input';
const ELEMENT_CLASS = '';
const ELEMENT_FORM = 'form';
const ELEMENT_FORM_CLASS = 'filters__form';

export class Input extends ElementTemplate {
  protected _type: string;
  protected _inputElement: HTMLInputElement;
  constructor() {
    super();
    this._type = 'text';
    this._inputElement = document.createElement(ELEMENT_NAME);
    this.setClassName(this._inputElement, ELEMENT_CLASS);
  }

  appendTo() {
    const form = this.createHTMLElement(ELEMENT_FORM, ELEMENT_FORM_CLASS);
    form.append(this._inputElement);
    return form;
  }

  getIdName() {
    return this._inputElement.id;
  }

  setIdName(idName: string) {
    this._inputElement.id = idName;
  }

  setType(inputType: string) {
    this._inputElement.setAttribute('type', inputType);
  }

  click(fn: Func) {
    this._inputElement.addEventListener('click', fn);
  }

  unClick(fn: Func) {
    this._inputElement.removeEventListener('click', fn);
  }

  get element() {
    return this._inputElement;
  }

  setValueMinMax(val: string, min: string, max: string) {
    this._inputElement.value = `${val}`;
    this._inputElement.min = `${min}`;
    this._inputElement.max = `${max}`;
  }
}

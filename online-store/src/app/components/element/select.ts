import { ElementTemplate } from './element-template';
import { DataOption } from '../../types/data-sort';
import data from '../../../assets/data/data-sort.json';

type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'select';
const ELEMENT_NAME_CLASS = 'select';
const ELEMENT_NAME_ID = 'select';
const ELEMENT_NAME_ADDITIONAL = 'option';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'select__option';
const ELEMENT_FORM = 'form';
const ELEMENT_FORM_CLASS = 'filters__form';

export class Select extends ElementTemplate {
  protected _selectElement: HTMLInputElement;
  private _data: DataOption;
  constructor() {
    super();
    this._data = data;
    this._selectElement = this.createHTMLElement(
      ELEMENT_NAME,
      ELEMENT_NAME_CLASS
    ) as HTMLInputElement;
    this._setIdName(ELEMENT_NAME_ID);
    this._addList();
    this.click();
  }

  getIdName() {
    return this._selectElement.id;
  }

  private _setIdName(idName: string) {
    this._selectElement.id = idName;
  }

  get value() {
    return this._selectElement.value;
  }

  // set value(val: string) {
  //   this._selectElement.value = `${val}`;
  // }

  click() {
    this._selectElement.addEventListener('click', (e) => {
      console.log('val = ', this._selectElement.value);
      console.log('e = ', e);
    });
  }

  unClick(func: Func) {
    this._selectElement.removeEventListener('click', func);
  }

  private _addList() {
    const fragment: DocumentFragment = document.createDocumentFragment();
    Object.entries(this._data).forEach(([key, value]) => {
      const option = this.createHTMLElement(
        ELEMENT_NAME_ADDITIONAL,
        ELEMENT_NAME_CLASS_ADDITIONAL
      ) as HTMLInputElement;
      option.value = key;
      option.textContent = value;
      fragment.appendChild(option);
    });
    this._selectElement.appendChild(fragment);
  }

  appendTo() {
    const form = this.createHTMLElement(ELEMENT_FORM, ELEMENT_FORM_CLASS);
    form.append(this._selectElement);
    return form;
  }

  get element() {
    return this._selectElement;
  }
}

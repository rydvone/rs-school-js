import { ElementTemplate } from './element-template';
import { DataOption } from '../../types/data-sort';
import { filterData } from '../../services/app-state';

type Func = (this: void, event: Event) => void;

export const OBJ_SORT_VALUE = {
  'name-up': 'Name to Up',
  'name-down': 'Name to Down',
  'price-up': 'Price to Up',
  'price-down': 'Price to Down',
  'count-up': 'Count to Up',
  'count-down': 'Count to Down',
};

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
    this._data = OBJ_SORT_VALUE;
    this._selectElement = this.createHTMLElement(
      ELEMENT_NAME,
      ELEMENT_NAME_CLASS
    ) as HTMLInputElement;
    this._setIdName(ELEMENT_NAME_ID);
    this._addList();
    this.click(this._clickCallback.bind(this));
    this.sort(this.value);
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

  set value(val: string) {
    this._selectElement.value = `${val}`;
  }

  sort(val: string) {
    filterData.sort(val);
  }

  private _clickCallback() {
    this.sort(this._selectElement.value);
  }

  click(fn: Func) {
    this._selectElement.addEventListener('change', fn);
  }

  unclick(fn: Func) {
    this._selectElement.removeEventListener('change', fn);
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

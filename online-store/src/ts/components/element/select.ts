import { ElementTemplate } from './element-template';
import { DataOption } from '../../types/data-sort';

type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'select';
const ELEMENT_NAME_CLASS = 'select';
const ELEMENT_NAME_ID = 'select';
const ELEMENT_NAME_ADDITIONAL = 'option';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'select__option';

export class Select extends ElementTemplate {
  protected selectElement: HTMLInputElement;
  private _data: DataOption;
  constructor(data: DataOption) {
    super();
    this._data = data;
    this.selectElement = this.createHTMLElement(
      ELEMENT_NAME,
      ELEMENT_NAME_CLASS
    ) as HTMLInputElement;
    this._setIdName(ELEMENT_NAME_ID);
    this._addList();
  }

  getIdName() {
    return this.selectElement.id;
  }

  private _setIdName(idName: string) {
    this.selectElement.id = idName;
  }

  get value() {
    return this.selectElement.value;
  }

  // set value(val: string) {
  //   this.selectElement.value = `${val}`;
  // }

  click(func: Func) {
    this.selectElement.addEventListener('click', func);
  }

  unClick(func: Func) {
    this.selectElement.removeEventListener('click', func);
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
    this.selectElement.appendChild(fragment);
  }
}

import { ElementTemplate } from './element-template';

type IFunc = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'input';
const ELEMENT_NAME_CLASS = '';
const ELEMENT_FORM = 'form';
const ELEMENT_FORM_CLASS = 'filters__form';

export class Input extends ElementTemplate {
  protected _type: string;
  protected _inputElement: HTMLInputElement;
  constructor() {
    super();
    this._type = 'text';
    this._inputElement = this.createHTMLElement(
      ELEMENT_NAME,
      ELEMENT_NAME_CLASS
    ) as HTMLInputElement;
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

  click(func: IFunc) {
    this._inputElement.addEventListener('click', func);
  }

  unClick(func: IFunc) {
    this._inputElement.removeEventListener('click', func);
  }

  get element() {
    return this._inputElement;
  }
}

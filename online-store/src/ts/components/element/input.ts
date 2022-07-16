import { ElementTemplate } from './element-template';

type IFunc = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'input';
const ELEMENT_NAME_CLASS = '';

export class Input extends ElementTemplate {
  protected _type: string;
  protected inputElement: HTMLInputElement;
  constructor() {
    super();
    this._type = 'text';
    this.inputElement = this.createHTMLElement(
      ELEMENT_NAME,
      ELEMENT_NAME_CLASS
    ) as HTMLInputElement;
  }

  getIdName() {
    return this.inputElement.id;
  }

  setIdName(idName: string) {
    this.inputElement.id = idName;
  }

  setType(inputType: string) {
    this.inputElement.setAttribute('type', inputType);
  }

  click(func: IFunc) {
    this.inputElement.addEventListener('click', func);
  }

  unClick(func: IFunc) {
    this.inputElement.removeEventListener('click', func);
  }
}

import { ElementTemplate } from './element-template';

const ELEMENT_NAME = 'input';
const ELEMENT_NAME_CLASS = '';

export class Input extends ElementTemplate {
  protected _type: string;
  protected inputElement: HTMLInputElement;
  constructor(type: string) {
    super();
    this._type = type;
    this.inputElement = this.createHTMLElement(
      ELEMENT_NAME,
      ELEMENT_NAME_CLASS
    ) as HTMLInputElement;
    this.setType();
  }

  getIdName() {
    return this.inputElement.id;
  }

  setIdName(idName: string) {
    this.inputElement.id = idName;
  }

  setType() {
    this.inputElement.setAttribute('type', this._type);
  }
}

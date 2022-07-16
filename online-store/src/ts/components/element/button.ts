import { ElementTemplate } from './element-template';

const ELEMENT_NAME = 'button';
const ELEMENT_NAME_CLASS = 'button';

export class Button extends ElementTemplate {
  protected _title: string;
  public buttonElement: HTMLElement;
  constructor(title: string) {
    super();
    this._title = title;
    this.buttonElement = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this.addText();
  }

  addText() {
    this.buttonElement.textContent = this._title;
  }
}

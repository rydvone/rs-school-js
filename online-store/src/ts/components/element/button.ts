import { ElementTemplate } from './element-template';

type IFunc = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'button';
const ELEMENT_NAME_CLASS = 'button';

export class Button extends ElementTemplate {
  private _title: string;
  private _button: HTMLElement;
  constructor(title: string) {
    super();
    this._title = title;
    this._button = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this.addText(this._title);
  }

  addText(title: string) {
    this._button.textContent = title;
  }


  click(func: IFunc) {
    this._button.addEventListener('click', func);
  }

  addClass() {
    this._button.classList.add('selected');
  }

  removeClass() {
    this._button.classList.remove('selected');
  }

  toggleClass() {
    this._button.classList.toggle('selected');
  }

  get element() {
    return this._button;
  }
}

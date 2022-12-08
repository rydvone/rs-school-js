import { ElementTemplate } from './element-template';

type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME = 'button';
const ELEMENT_NAME_CLASS = 'button';
const ELEMENT_NAME_CLASS_ADD = 'button_reset';

export class Button extends ElementTemplate {
  private _title: string;
  private _button: HTMLElement;
  constructor(title: string) {
    super();
    this._title = title;
    this._button = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this.addText(this._title);
    this.addClassReset();
  }

  addClassReset() {
    if (this._title === 'Filters reset' || this._title === 'Common reset') {
      this.addClassName(this._button, ELEMENT_NAME_CLASS_ADD);
    }
  }

  addText(title: string) {
    this._button.textContent = title;
  }

  click(fn: Func) {
    this._button.addEventListener('click', fn);
  }

  unclick(fn: Func) {
    this._button.removeEventListener('click', fn);
  }

  containsClass() {
    return this._button.classList.contains('selected');
  }

  addClass() {
    this._button.classList.add('selected');
  }

  removeClassSelected() {
    this._button.classList.remove('selected');
  }

  toggleClass() {
    this._button.classList.toggle('selected');
  }

  get element() {
    return this._button;
  }
}

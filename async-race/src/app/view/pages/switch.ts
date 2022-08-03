import { ElementTemplate } from '../elements/element-template';
import { SwitchButtons } from '../elements/switch-buttons';

export const swButtons = new SwitchButtons();

const ELEMENT_CLASS = 'switch';
const TEMP = ['to Garage', 'to Winner'];

export class Switch extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    // this.appendTo();
  }

  createSwitch() {
    const el = TEMP.map((el) => swButtons.createButton(el));
    return el;
  }

  appendTo() {
    const element = this.createSwitch();
    element.forEach((el) => {
      el.click(() => {
        // console.log(`change state to ${el.element.innerHTML}`);
        this.createSwitch();
      });
      this._item.append(el.element);
    });
  }

  get element() {
    return this._item;
  }
}

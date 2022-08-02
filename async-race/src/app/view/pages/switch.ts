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
    this.appendTo();
  }

  createSwitch() {
    const el = TEMP.map((el) => swButtons.createButton(el));
    return el;
  }

  appendTo() {
    const element = this.createSwitch();
    element.forEach((el) => {
      console.log('el.forEach', el);
      el.click(() => {
        console.log(`change state to ${el.element.innerHTML}`);
        this.createSwitch();
      });
      this._item.append(el.element);
    });
  }

  // renderItem() {
  //   return `
  //   <div class="item">
  //     <div class="item__edit"></div>
  //     <div class="item__wrapper">
  //       <div class="item__title"></div>
  //       <div class="item__control"></div>
  //       <div class="item__track">
  //         <div class="item__car"></div>
  //         <div class="item__finish-flag">${ELEMENT_CLASS}</div>
  //       </div>
  //     </div>
  //   </div>
  //   `;
  // }

  get element() {
    return this._item;
  }
}

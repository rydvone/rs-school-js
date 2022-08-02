import { ButtonsItemControl } from '../elements/buttons-item-control';
import { ElementTemplate } from '../elements/element-template';

export const icButtons = new ButtonsItemControl();

const ELEMENT_CLASS = 'switch';
const WRAPPER_CLASS = 'item__wrapper';
const EDIT_CLASS = 'item__edit';
const TITLE_CLASS = 'item__title';
const BUTTTONS_NAME = ['A', 'B'];
const EDIT_NAME = ['select', 'remove'];
const BUTTON_START = 'A';
// const BUTTON_STOP = 'B';

export class ItemControl extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this.appendTo();
  }

  createButtons(ARRAY: string[]) {
    const el = ARRAY.map((el) => icButtons.createButton(el));
    return el;
  }

  appendTo() {
    const element = this.createButtons(BUTTTONS_NAME);
    element.forEach((el) => {
      el.click(() => {
        console.log(`change state to ${el.element.innerHTML}`);
        if (el.element.innerHTML === BUTTON_START) {
          console.log('to Start function');
        } else {
          console.log('to Stop and go back function');
        }
      });
      this._item.append(el.element);
    });
  }

  createWrapper() {
    const el = this.createDiv(WRAPPER_CLASS);
    return el;
  }

  createEdit() {
    const elDiv = this.createDiv(EDIT_CLASS);
    const button = this.createButtons(EDIT_NAME);
    button.forEach((el) => {
      el.click(() => {
        console.log(`change state to ${el.element.innerHTML}`);
        if (el.element.innerHTML === BUTTON_START) {
          console.log('to Start function');
        } else {
          console.log('to Stop and go back function');
        }
      });
      elDiv.append(el.element);
    });
    return elDiv;
  }

  buildItem() {
    let wrapper = this.createWrapper();
    this._item.append(wrapper);
    const edit = this.createEdit;
    const title = this.createDiv(TITLE_CLASS);

  }

  // renderItem() {
  //   return `
  //   <div class="item">
  //     <div class="item__edit"></div>
  //       <div class="item__title"></div>
  //     <div class="item__wrapper">
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

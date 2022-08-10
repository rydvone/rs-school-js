import { IStorageItem } from '../../types/storage-types';
import { Button } from '../elements/button';
import { ElementTemplate } from '../elements/element-template';

export const itemControlButtons: { [key: string]: Button } = {};

const ELEMENT_CLASS = 'item__control';
const EDIT_NAME = ['start', 'stop'];
const DISABLED_ELEMENT = 'stop';

export class ItemControl extends ElementTemplate {
  private _item: HTMLElement;
  private _data: IStorageItem;
  constructor(data: IStorageItem) {
    super();
    this._data = data;
    this._item = this.createDiv(ELEMENT_CLASS);
    this.createButtons(EDIT_NAME);
    this.appendTo();
    // this.handler();
  }

  createButtons(ARRAY: string[]) {
    ARRAY.forEach((el) => {
      const item = new Button();
      item.addContent(el);
      if (el === DISABLED_ELEMENT) {
        item.element.disabled = true;
      }
      item.element.id = `${el}-single-${this._data.id}`;
      itemControlButtons[el] = item;
    });
  }

  appendTo() {
    this._item.append(itemControlButtons[EDIT_NAME[0]].element);
    this._item.append(itemControlButtons[EDIT_NAME[1]].element);
  }

  // handlerStart() {
  //   console.log('sstarttt');
  // }

  // handler() {
  //   itemControlButtons[EDIT_NAME[0]].click(this.handlerStart.bind(this));
  //   itemControlButtons[EDIT_NAME[1]].click(() => {
  //     console.log('stooop');
  //   });
  // }

  get element() {
    return this._item;
  }

  get elementButton() {
    return itemControlButtons;
  }
}

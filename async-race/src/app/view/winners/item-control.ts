import { Button } from '../elements/button';
import { ButtonNoState } from '../elements/button-no-state';
import { ElementTemplate } from '../elements/element-template';

export const itemControlButtons: { [key: string]: Button } = {};

const ELEMENT_CLASS = 'item__control';

const EDIT_NAME = ['start', 'stop'];

export class ItemControl extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this.createButtons(EDIT_NAME);
    this.appendTo();
    this.handler();
  }

  createButtons(ARRAY: string[]) {
    ARRAY.forEach((el) => {
      const item = new ButtonNoState();
      item.addContent(el);
      itemControlButtons[el] = item;
    });
  }

  appendTo() {
    this._item.append(itemControlButtons[EDIT_NAME[0]].element);
    this._item.append(itemControlButtons[EDIT_NAME[1]].element);
  }

  handlerSelect() {
    console.log('sstarttt');
  }

  handler() {
    itemControlButtons[EDIT_NAME[0]].click(this.handlerSelect.bind(this));
    itemControlButtons[EDIT_NAME[1]].click(() => {
      console.log('stooop');
    });
  }

  get element() {
    return this._item;
  }
}

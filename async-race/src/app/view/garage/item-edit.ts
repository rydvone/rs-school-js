import { Button } from '../elements/button';
import { ButtonNoState } from '../elements/button-no-state';
import { ElementTemplate } from '../elements/element-template';

export const itemEditButtons: { [key: string]: Button } = {};

const ELEMENT_CLASS = 'item__edit';
const TITLE_CLASS = 'item__title';
const EDIT_NAME = ['select', 'remove'];

export class ItemEdit extends ElementTemplate {
  private _item: HTMLElement;
  private _itemTitle: HTMLElement;
  private _title: string;
  constructor(title: string) {
    super();
    this._title = title;
    this._item = this.createDiv(ELEMENT_CLASS);
    this._itemTitle = this.createTitle(title);
    this.createButtons(EDIT_NAME);
    this.appendTo();
    this.handlerEdit();
  }

  createButtons(ARRAY: string[]) {
    ARRAY.forEach((el) => {
      const item = new ButtonNoState();
      item.addContent(el);
      itemEditButtons[el] = item;
    });
  }

  createTitle(content: string) {
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = content;
    return title;
  }

  appendTo() {
    this._item.append(itemEditButtons[EDIT_NAME[0]].element);
    this._item.append(itemEditButtons[EDIT_NAME[1]].element);
    this._item.append(this._itemTitle);
  }

  handlerSelect() {
    console.log('slect');
  }

  handlerEdit() {
    itemEditButtons[EDIT_NAME[0]].click(this.handlerSelect.bind(this));
    itemEditButtons[EDIT_NAME[1]].click(() => {
      console.log('remove');
    });
  }

  get element() {
    return this._item;
  }

  set itemTitle(content: string) {
    this._itemTitle.textContent = content;
  }

  get itemTitle() {
    return this._itemTitle.innerHTML;
  }
}

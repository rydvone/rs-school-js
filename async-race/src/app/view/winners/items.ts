import { IStorageItem, StorageItems } from '../../storage/storage-item';
import { ElementTemplate } from '../elements/element-template';
import { Item } from './item';

const ELEMENT_CLASS = 'items';
const WRONG_CLASS = 'items__wrong';
const CAPTION_WRONG = 'Wrong response from server';
export class Items extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this.drawItems(StorageItems);
  }

  drawItems(data: IStorageItem[]) {
    if (!ELEMENT_CLASS) {
      this.appendToWrong();
    } else {
      this.clearNode(this._item);
      const fragment: DocumentFragment = document.createDocumentFragment();
      data.forEach((el) => {
        const item = new Item();
        item.drawItem(el.name, el.color, el.id);
        fragment.append(item.element);
      });
      this._item.append(fragment);
    }
  }

  appendToWrong() {
    this.clearNode(this._item);
    const wrong = this.createDiv(WRONG_CLASS);
    wrong.textContent = CAPTION_WRONG;
    this._item.append(wrong);
  }

  appendToOne(item: HTMLElement) {
    this._item.append(item);
  }

  get element() {
    return this._item;
  }
}

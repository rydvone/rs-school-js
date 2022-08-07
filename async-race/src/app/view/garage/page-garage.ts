// import { Item } from '../garage/item';
import { ElementTemplate } from '../elements/element-template';
import { Edit } from './edit';
import { ButtonsEditEdit } from '../elements/buttons-edit-edit';
import { Items } from './items';
import { StorageItems } from '../../storage/storage';

export const editComponent = new Edit();
export const itemsComponent = new Items();
export const buttonEditEdit = new ButtonsEditEdit();

const ELEMENT_CLASS = 'garage';
const ELEMENT_CLASS_VISUAL = 'none';

export class PageGarage extends ElementTemplate {
  private _item: HTMLElement;
  private _fragment: DocumentFragment;
  // private _data: IGetCars;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this._fragment = document.createDocumentFragment();
    // this._data = handlerApi.handler();
  }

  addClassNone() {
    this._item.classList.add(ELEMENT_CLASS_VISUAL);
  }

  removeClassNone() {
    this._item.classList.remove(ELEMENT_CLASS_VISUAL);
  }

  checkPage(key: string) {
    if (key === ELEMENT_CLASS) {
      this._item.classList.remove(ELEMENT_CLASS_VISUAL);
    } else {
      this._item.classList.add(ELEMENT_CLASS_VISUAL);
    }
  }

  buildPage() {
    editComponent.appendTo();
    const items = itemsComponent;
    items.drawItems(StorageItems);

    this._item.append(editComponent.element);
    this._item.append(items.element);
    return this._item;
  }

  get elementn() {
    return this._item;
  }
}

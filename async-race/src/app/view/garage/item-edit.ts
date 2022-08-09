import { apiGarage } from '../../services/services';
import { StorageItemUpdate } from '../../storage/storage';
import { IButtonsNoStateStore } from '../../types/buttons-store-types';
import { IStorageItem } from '../../types/storage-types';
import { ButtonNoState } from '../elements/button-no-state';
import { ElementTemplate } from '../elements/element-template';
import { editComponent } from './page-garage';

export const itemEditButtons: IButtonsNoStateStore = {};

const ELEMENT_CLASS = 'item__edit';
const TITLE_CLASS = 'item__title';
const EDIT_NAME = ['select', 'remove'];

export class ItemEdit extends ElementTemplate {
  private _item: HTMLElement;
  private _itemTitle: HTMLElement;
  private _data: IStorageItem;
  constructor(data: IStorageItem) {
    super();
    this._data = data;
    this._item = this.createDiv(ELEMENT_CLASS);
    this._itemTitle = this.createTitle(data.name);
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
    StorageItemUpdate.name = this._data.name;
    StorageItemUpdate.color = this._data.color;
    StorageItemUpdate.id = this._data.id;
    editComponent.createEditUpdate(this._data.name, this._data.color, this._data.id);
  }

  handlerRemove() {
    const crCar = async () => await apiGarage.deleteCar(this._data.id);
    crCar().catch((err) => console.log(err));
    const gCars = async () => await apiGarage.getCars(1);
    gCars().catch((err) => console.log(err));
  }

  handlerEdit() {
    itemEditButtons[EDIT_NAME[0]].click(this.handlerSelect.bind(this));
    itemEditButtons[EDIT_NAME[1]].click(this.handlerRemove.bind(this));
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

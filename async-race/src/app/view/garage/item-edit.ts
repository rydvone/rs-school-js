import { ItemEditConst } from '../../const/button-const';
import { apiGarage, apiWinners } from '../../services/services';
import { storage, StorageItemUpdate } from '../../storage/storage';
import { IButtonsNoStateStore } from '../../types/buttons-store-types';
import { IStorageItem } from '../../types/storage-types';
import { ButtonNoState } from '../elements/button-no-state';
import { ElementTemplate } from '../elements/element-template';
import { editComponent } from './page-garage';

export const itemEditButtons: IButtonsNoStateStore = {};

const ELEMENT_CLASS = 'item__edit';
const TITLE_CLASS = 'item__title';
// const EDIT_NAME = ['select', 'remove'];

export class ItemEdit extends ElementTemplate {
  private _item: HTMLElement;
  private _itemTitle: HTMLElement;
  private _data: IStorageItem;
  constructor(data: IStorageItem) {
    super();
    this._data = data;
    this._item = this.createDiv(ELEMENT_CLASS);
    this._itemTitle = this.createTitle(data.name);
    this.createButtons(ItemEditConst);
    this.appendTo();
    this.handlerEdit();
  }

  createButtons(ItemEditConst: { [k: string]: string }) {
    const arrKey = Object.keys(ItemEditConst);
    arrKey.forEach((el) => {
      const item = new ButtonNoState();
      item.addContent(ItemEditConst[el]);
      itemEditButtons[el] = item;
    });
    // ARRAY.forEach((el) => {
    //   const item = new ButtonNoState();
    //   item.addContent(el);
    //   itemEditButtons[el] = item;
    // });
  }

  createTitle(content: string) {
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = content;
    return title;
  }

  appendTo() {
    this._item.append(itemEditButtons.select.element);
    this._item.append(itemEditButtons.remove.element);
    this._item.append(this._itemTitle);
  }

  handlerSelect() {
    StorageItemUpdate.name = this._data.name;
    StorageItemUpdate.color = this._data.color;
    StorageItemUpdate.id = this._data.id;
    editComponent.createEditUpdate(this._data.name, this._data.color, this._data.id);
  }

  handlerRemove() {
    apiGarage.deleteCar(this._data.id).catch((err) => console.log(err));
    apiGarage.getCars(storage.carsPage).catch((err) => console.log(err));
    if (storage.winners.find(({ id }) => id === this._data.id)) {
      apiWinners.deleteWinner(this._data.id).catch((err) => console.log(err));
      apiWinners.updateStateWinners().catch((err) => console.log(err));
    }
  }

  handlerEdit() {
    itemEditButtons[ItemEditConst.select].click(this.handlerSelect.bind(this));
    itemEditButtons[ItemEditConst.remove].click(this.handlerRemove.bind(this));
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

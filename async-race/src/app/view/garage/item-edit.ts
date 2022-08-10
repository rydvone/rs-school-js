import { ItemEditConst } from '../../const/button-const';
import { apiGarage, apiWinners } from '../../services/services';
import { storage, StorageItemUpdate } from '../../storage/storage';
import { IButtonsStore } from '../../types/buttons-store-types';
import { IStorageItem } from '../../types/storage-types';
import { Button } from '../elements/button';
import { ElementTemplate } from '../elements/element-template';
import { editComponent } from './page-garage';

export const itemEditButtons: IButtonsStore = {};

const ELEMENT_CLASS = 'item__edit';
const BUTTON_CLASS = 'item__edit-buttons';
const TITLE_CLASS = 'item__title';

export class ItemEdit extends ElementTemplate {
  private _item: HTMLElement;
  private _itemTitle: HTMLElement;
  private _itemEditButtons: HTMLElement;
  private _data: IStorageItem;
  constructor(data: IStorageItem) {
    super();
    this._data = data;
    this._item = this.createDiv(ELEMENT_CLASS);
    this._itemTitle = this.createTitle(data.name);
    this._itemEditButtons = this.createDiv(BUTTON_CLASS);
    this.createButtons(ItemEditConst);
    this.appendTo();
    this.handlerEdit();
  }

  createButtons(ItemEditConst: { [k: string]: string }) {
    const arrKey = Object.keys(ItemEditConst);
    arrKey.forEach((el) => {
      const item = new Button();
      item.addContent(ItemEditConst[el]);
      itemEditButtons[el] = item;
    });
  }

  createTitle(content: string) {
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = content;
    return title;
  }

  appendTo() {
    this._itemEditButtons.append(itemEditButtons.select.element);
    this._itemEditButtons.append(itemEditButtons.remove.element);
    this._item.append(this._itemEditButtons);
    this._item.append(this._itemTitle);
  }

  handlerSelect() {
    StorageItemUpdate.name = this._data.name;
    StorageItemUpdate.color = this._data.color;
    StorageItemUpdate.id = this._data.id;
    editComponent.createEditUpdate(this._data.name, this._data.color, this._data.id);
  }

  async handlerRemove() {
    try {
      await apiGarage.deleteCar(this._data.id);
      await apiGarage.getCars(storage.carsPage);
      if (storage.winners.find(({ id }) => id === this._data.id)) {
        await apiWinners.deleteWinner(this._data.id);
        await apiWinners.updateStateWinners();
      }
    } catch (err) {
      console.log(err);
    }
  }

  handlerEdit() {
    itemEditButtons[ItemEditConst.select].click(this.handlerSelect.bind(this));
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
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

  get itemEditButtons() {
    return this._itemEditButtons;
  }
}

import { IStorageItem, StorageItem } from '../../storage/storage-item';
import { CarElement } from '../elements/car';
import { ElementTemplate } from '../elements/element-template';
import { FlagElement } from '../elements/flag';
import { ItemControl } from './item-control';
import { ItemEdit } from './item-edit';

const ELEMENT_CLASS = 'item';
const WRAPPER_CLASS = 'item__wrapper';

export class Item extends ElementTemplate {
  private _item: HTMLElement;
  private _itemEdit: ItemEdit;
  private _data: IStorageItem;
  constructor() {
    super();
    this._data = { ...StorageItem };
    this._item = this.createDiv(ELEMENT_CLASS);
    this._itemEdit = this.createEdit();
  }

  createEdit(title = 'opel') {
    const item = new ItemEdit(title);
    return item;
  }

  createControl() {
    const item = new ItemControl();
    return item;
  }

  createCar() {
    return new CarElement();
  }

  createFlag() {
    return new FlagElement();
  }

  renderTrack(color: string, id: number) {
    const car = this.createCar();

    const flag = this.createFlag();

    return `
      <div class="item__wrapper">
        <div class="item__control"></div>
        <div class="item__track">
          <div class="item__car" id="item__car-${id}">${car.getOuter(car.getItem(color))}</div>
          <div class="item__finish-flag">${flag.getOuter(flag.getItem())}</div>
        </div>    
      </div>      
    `;
  }

  drawItem(content: string, color: string, id: number) {
    this._data.name = content;
    this._data.color = color;
    this._data.id = id;

    this._item.append(this.createEdit(content).element);
    const wrapper = this.createDiv(WRAPPER_CLASS);
    wrapper.append(this.createControl().element);
    wrapper.insertAdjacentHTML('beforeend', `${this.renderTrack(color, id)}`);
    this._item.append(wrapper);
    return this._item;
  }

  get element() {
    return this._item;
  }

  get data() {
    return this._data;
  }
}

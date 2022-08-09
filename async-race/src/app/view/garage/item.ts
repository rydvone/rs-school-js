import { StorageItem } from '../../storage/storage';
import { IStorageItem } from '../../types/storage-types';
import { CarElement } from '../elements/car';
import { ElementTemplate } from '../elements/element-template';
import { FlagElement } from '../elements/flag';
import { ItemControl } from './item-control';
import { ItemEdit } from './item-edit';

const ELEMENT_CLASS = 'item';
const WRAPPER_CLASS = 'item__wrapper';

export class Item extends ElementTemplate {
  private _item: HTMLElement;
  private _data: IStorageItem;
  constructor() {
    super();
    this._data = { ...StorageItem };
    this._item = this.createDiv(ELEMENT_CLASS);
  }

  createEdit(data: IStorageItem) {
    const item = new ItemEdit(data);
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

  drawItem(data: IStorageItem) {
    this._data.name = data.name;
    this._data.color = data.color;
    this._data.id = data.id;

    this._item.append(this.createEdit(data).element);
    const wrapper = this.createDiv(WRAPPER_CLASS);
    wrapper.append(this.createControl().element);
    wrapper.insertAdjacentHTML('beforeend', `${this.renderTrack(this._data.color, this._data.id)}`);
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

import { raceCars } from '../../services/services';
import { IStorageItem } from '../../types/storage-types';
import { CarElement } from '../elements/car';
import { ElementTemplate } from '../elements/element-template';
import { FlagElement } from '../elements/flag';
import { ItemControl } from './item-control';
import { ItemEdit } from './item-edit';

const ELEMENT_CLASS = 'item';
const WRAPPER_CLASS = 'item__wrapper';
const INACTIVE = 'inactive';
const EDIT_CONTROL = ['start', 'stop'];

export class Item extends ElementTemplate {
  private _item: HTMLElement;
  private _itemControl: ItemControl;
  private _itemEdit: ItemEdit;
  private _data: IStorageItem;
  constructor(data: IStorageItem) {
    super();
    this._data = { ...data };
    this._item = this.createDiv(ELEMENT_CLASS);
    this._itemControl = new ItemControl(this._data);
    this._itemEdit = new ItemEdit(this._data);
    this.handler();
  }

  createEdit(data: IStorageItem) {
    const item = new ItemEdit(data);
    return item;
  }

  createControl() {
    const item = new ItemControl(this._data);
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
        <div class="item__track" id="track-${id}">
          <div class="item__car" id="item__car-${id}">${car.getOuter(car.getItem(color))}</div>
          <div class="item__flag-${id}">${flag.getOuter(flag.getItem())}</div>
        </div>    
      </div>      
    `;
  }

  drawItem() {
    this._item.append(this._itemEdit.element);
    const wrapper = this.createDiv(WRAPPER_CLASS);
    wrapper.append(this._itemControl.element);
    wrapper.insertAdjacentHTML('beforeend', `${this.renderTrack(this._data.color, this._data.id)}`);
    this._item.append(wrapper);
    return this._item;
  }

  handlerStart() {
    raceCars.startDrive(this._data.id).catch((err) => console.log(err));
  }

  handlerStop() {
    this._itemEdit.element.classList.add(INACTIVE);

    raceCars.stopDrive(this._data.id).catch((err) => console.log(err));
    setTimeout(() => this._itemEdit.element.classList.remove(INACTIVE), 0);
  }

  handler() {
    this._itemControl.elementButton[EDIT_CONTROL[0]].click(this.handlerStart.bind(this));
    this._itemControl.elementButton[EDIT_CONTROL[1]].click(this.handlerStop.bind(this));
  }

  get data() {
    return this._data;
  }

  get itemControl() {
    return this._itemControl;
  }

  get itemEdit() {
    return this._itemEdit;
  }

  get element() {
    return this._item;
  }
}
// this._itemControl.elementButton[EDIT_CONTROL[0]].element.classList.add(INACTIVE);
// setTimeout(() => this._itemEdit.element.classList.remove(INACTIVE), 3000);

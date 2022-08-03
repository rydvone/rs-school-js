import { CarElement } from '../elements/car';
import { ElementTemplate } from '../elements/element-template';
import { FlagElement } from '../elements/flag';
// import { TFuncMouse } from '../../types/func';

const ELEMENT_CLASS = 'item';

export class Item extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
  }

  createCar() {
    return new CarElement();
  }

  createFlag() {
    return new FlagElement();
  }

  renderItem() {
    const car = this.createCar();

    const flag = this.createFlag();

    return `
      <div class="item__edit"></div>
      <div class="item__wrapper">
        <div class="item__title"></div>
        <div class="item__control"></div>
        <div class="item__track">
          <div class="item__car" id="item__car-1">${car.getOuter(car.getItemRandom())}</div>
          <div class="item__finish-flag">${flag.getOuter(flag.getItem())}</div>
        </div>    
      </div>      
    `;
  }

  addRender() {
    this._item.innerHTML = this.renderItem();
    return this._item;
  }
  // const windowInnerWidth = window.innerWidth

  get element() {
    return this._item;
  }
}

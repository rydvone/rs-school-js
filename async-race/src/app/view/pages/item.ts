import { CarElement } from '../elements/car';
import { ElementTemplate } from '../elements/element-template';
import { FlagElement } from '../elements/flag';
// import { TFuncMouse } from '../../types/func';

// const ELEMENT_NAME = '';
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
    ${car.getOuter(car.elementSVG)}
    ${flag.getOuter(car.elementSVG)}
    <div class="item">
      <div class="item__control"></div>
      <div class="item__track">
        <div class="item__car">${car.getOuter(car.getItem('red'))}</div>
        <div class="item__finish-flag">${flag.getOuter(flag.getItem())}</div>
      </div>
    </div>
    `;
  }

  // const windowInnerWidth = window.innerWidth

  get element() {
    return this._item;
  }
}

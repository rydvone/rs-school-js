import { randomizer } from '../../services/services';
import { ElementTemplate } from './element-template';
// import { ARR_COLORS } from '../../const/colors';

const ELEMENT = 'svg';
const ITEM_CLASS = 'icons_cars';
const ITEM_ATTRIBUTE = 'fill';
const ITEM_INNER = `<use xlink:href="#car-1"></use>`;

export class CarElement extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createNode(ELEMENT, ITEM_CLASS);
    this._init();
  }

  private _init() {
    this._item.innerHTML = ITEM_INNER;
  }

  getItem(color: string) {
    this._item.setAttribute(ITEM_ATTRIBUTE, `${color}`);
    return this._item;
  }

  getItemRandom() {
    const randomColor = randomizer.randomColor();
    // const randomTitleCar = randomizer.randomTitleCar();
    return this.getItem(randomColor);
  }

  get element() {
    return this._item;
  }
}

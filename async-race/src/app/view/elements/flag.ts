import { ElementTemplate } from './element-template';

const ELEMENT = 'svg';
const ITEM_CLASS = 'icons_cars';
const ITEM_ATTRIBUTE = 'fill';
const ITEM_COLOR = 'darkred';
const ITEM_INNER = `<use xlink:href="#finish-1"></use>`;

export class FlagElement extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createNode(ELEMENT, ITEM_CLASS);
    this._init();
  }

  private _init() {
    this._item.setAttribute(ITEM_ATTRIBUTE, ITEM_COLOR);
    this._item.innerHTML = ITEM_INNER;
  }

  getItem() {
    return this._item;
  }
}

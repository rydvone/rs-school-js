import { ElementTemplate } from './element-template';
import { convertFilterRange } from '../../constants/filter-by-range-constant';
import { FuncEvent } from '../../types/func';
import { KeyConvertFilterRange, KeyCount, KeyWeight } from '../../types/input';
import { AppState } from '../../services/app-state';

const ELEMENT_NAME = 'input';
const ELEMENT_TYPE = 'range';
const ELEMENT_CLASS = '';
const ITEM_FROM = 'from';
const ITEM_TO = 'to';

export class InputRange extends ElementTemplate {
  private _itemType: KeyConvertFilterRange;
  private _itemFrom: HTMLInputElement;
  private _itemTo: HTMLInputElement;
  constructor(itemType: KeyConvertFilterRange) {
    super();
    this._itemType = itemType;
    this._itemFrom = this.createInputRangeElement(ITEM_FROM);
    this._itemTo = this.createInputRangeElement(ITEM_TO);
    this.init();
  }

  private createInputRangeElement(itemIdName: KeyCount | KeyWeight) {
    const item = document.createElement(ELEMENT_NAME);
    item.setAttribute('type', ELEMENT_TYPE);
    item.id = `${convertFilterRange[this._itemType][itemIdName]}`;
    this.setClassName(item, ELEMENT_CLASS);
    return item;
  }

  init() {
    let [from, to] = AppState.rangeSelected[this._itemType];
    if (!AppState.rangeSelected[this._itemType].length) {
      [from, to] = [convertFilterRange[this._itemType].min, convertFilterRange[this._itemType].max];
    }

    this.setValueMinMax(
      this._itemFrom,
      from,
      convertFilterRange[this._itemType].min,
      convertFilterRange[this._itemType].max,
      convertFilterRange[this._itemType].step
    );
    this.setValueMinMax(
      this._itemTo,
      to,
      convertFilterRange[this._itemType].min,
      convertFilterRange[this._itemType].max,
      convertFilterRange[this._itemType].step
    );
  }

  setValueMinMax(item: HTMLInputElement, val: number, min: number, max: number, step?: number) {
    item.min = `${min}`;
    item.max = `${max}`;
    item.value = `${val}`;
    if (step) {
      item.step = `${step}`;
    }
  }

  setValueFromTo(valFrom: number, valTo: number) {
    this._itemFrom.value = `${valFrom}`;
    this._itemTo.value = `${valTo}`;
  }

  clickFrom(fn: FuncEvent) {
    this._itemFrom.addEventListener('input', fn);
  }

  unClickFrom(fn: FuncEvent) {
    this._itemFrom.removeEventListener('input', fn);
  }

  clickTo(fn: FuncEvent) {
    this._itemTo.addEventListener('input', fn);
  }

  unClickTo(fn: FuncEvent) {
    this._itemTo.removeEventListener('input', fn);
  }

  get elementFrom() {
    return this._itemFrom;
  }

  get elementTo() {
    return this._itemTo;
  }
}

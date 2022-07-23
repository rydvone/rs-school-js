import { ElementTemplate } from './element-template';
import { ElementIdWeight } from '../../types/input';

type Func = (this: void, event: Event) => void;

const ELEMENT_NAME = 'input';
const ELEMENT_TYPE = 'range';
const ELEMENT_ID_FROM = 'range-weight-from';
const ELEMENT_CLASS = '';
const START = '100';
const END = '1000';
const STEP = '10';

export class InputRangeWeight extends ElementTemplate {
  protected _elementId: ElementIdWeight;
  private _item: HTMLInputElement;
  constructor(elementId: ElementIdWeight) {
    super();
    this._elementId = elementId;
    this._item = document.createElement(ELEMENT_NAME);
    this.setClassName(this._item, ELEMENT_CLASS);
    this._init();
  }

  getIdName() {
    return this._item.id;
  }

  setIdName(idName: string) {
    this._item.id = idName;
  }

  setType(inputType: string) {
    this._item.setAttribute('type', inputType);
  }

  click(fn: Func) {
    this._item.addEventListener('input', fn);
  }

  unClick(fn: Func) {
    this._item.removeEventListener('input', fn);
  }

  get element() {
    return this._item;
  }

  private _init() {
    this.setType(ELEMENT_TYPE);
    this.setIdName(this._elementId);
    if (this._elementId === ELEMENT_ID_FROM) {
      this.setValueMinMax(START, START, END, STEP);
    } else {
      this.setValueMinMax(END, START, END, STEP);
    }
  }

  setValueMinMax(val: string, min: string, max: string, step?: string) {
    this._item.min = `${min}`;
    this._item.max = `${max}`;
    this._item.value = `${val}`;
    if (step) {
      this._item.step = `${step}`;
    }
  }

  get min() {
    return this._item.min;
  }

  get max() {
    return this._item.max;
  }

  get value() {
    return parseInt(this._item.value);
  }

  set value(val: number) {
    this._item.value = `${val}`;
  }
}

import { ElementTemplate } from '../element/element-template';
import { InputRangeQuantity } from '../element/input-range-quantity';
import { InputRangeWeight } from '../element/input-range-weight';
import { ElementIdQuantity, ElementIdWeight } from '../../types/input';

type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const TITLE_CONTENT = 'Quantity in stock:';
const WRAPPER_CLASS = 'filters__slider';
const ELEMENT_FORM = 'form';
const FORM_CLASS = 'filters__form';
const QUANTITY_FROM = 'range-count-from';
const QUANTITY_TO = 'range-count-to';
const QUANTITY_START = 'range-count-start';
const QUANTITY_END = 'range-count-end';
// const WEIGHT_FROM = 'range-weight-from';
// const WEIGHT_TO = 'range-weight-to';

export class PageRangeQuantity extends ElementTemplate {
  private _filterBlock: HTMLElement;
  private _quantityFrom: InputRangeQuantity;
  private _quantityTo: InputRangeQuantity;

  constructor() {
    super();
    this._filterBlock = this.createDiv(ELEMENT_CLASS);
    this._quantityFrom = this.createInputQuantity(QUANTITY_FROM);
    this._quantityTo = this.createInputQuantity(QUANTITY_TO);
    this.appendTo();
    this.click(this._quantityFrom.element, this.clickCallback.bind(this));
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = TITLE_CONTENT;
    this._filterBlock.append(title);
    const wrapper = this.createDiv(WRAPPER_CLASS);
    const form = this.createHTMLElement(ELEMENT_FORM, FORM_CLASS);
    form.append(this._quantityFrom.element);
    form.append(this._quantityTo.element);

    this.appendToDisplayValue(wrapper, this._quantityFrom.element.min, QUANTITY_START);
    wrapper.append(this._quantityTo.element);
    this.appendToDisplayValue(wrapper, this._quantityFrom.element.max, QUANTITY_END);
    this._filterBlock.append(wrapper);
  }

  createInputQuantity(idName: ElementIdQuantity) {
    return new InputRangeQuantity(idName);
  }

  createInputWeight(idName: ElementIdWeight) {
    return new InputRangeWeight(idName);
  }

  appendToDisplayValue(parent: HTMLElement, val: string, className: string) {
    const el = this.createDiv(className);
    el.textContent = val;
    parent.append(el);
  }

  clickCallback() {
    console.log(this);
  }

  getInnerBlock() {
    return this._filterBlock.innerHTML;
  }

  get element() {
    return this._filterBlock;
  }

  get quantityFrom() {
    return this._quantityFrom;
  }

  get quantityTo() {
    return this._quantityTo;
  }

  click(el: HTMLInputElement, fn: Func) {
    el.addEventListener('click', fn);
  }

  unclick(el: HTMLInputElement, fn: Func) {
    el.removeEventListener('click', fn);
  }
}

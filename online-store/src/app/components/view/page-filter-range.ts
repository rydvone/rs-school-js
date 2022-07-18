import { ElementTemplate } from '../element/element-template';
import { InputRange } from '../element/input-range';

const ELEMENT_NAME_CLASS = 'filters__description__block';
const ELEMENT_TITLE_CLASS = 'filters__title';
const ELEMENT_NAME_CLASS_ADD = 'filters__slider';
const START_QUANTITY = '0';
const END_QUANTITY = '50';
const START_WEIGHT = '100';
const END_WEIGHT = '1000';
const ARRAY_CLASS = ['range-count-from', 'range-count-to', 'range-weight-from', 'range-weight-to'];
const ELEMENT_FORM = 'form';
const ELEMENT_FORM_CLASS = 'filters__form';

export class PageFilterRange extends ElementTemplate {
  private _filterValue: HTMLElement;
  private _filterName: string;

  constructor(filterName: 'Quantity in stock' | 'Weight') {
    super();
    this._filterName = filterName;
    this._filterValue = this.createDiv(ELEMENT_NAME_CLASS);
    this.appendTo();
  }

  appendTo() {
    const title = this.createDiv(ELEMENT_TITLE_CLASS);
    const titleToVisual = this._filterName[0].toUpperCase() + this._filterName.slice(1);
    title.textContent = `${titleToVisual}:`;
    this._filterValue.append(title);
    const wrapper = this.createDiv(ELEMENT_NAME_CLASS_ADD);
    const form = this.createHTMLElement(ELEMENT_FORM, ELEMENT_FORM_CLASS);
    if (this._filterName === 'Quantity in stock') {
      this._addNumber(wrapper, START_QUANTITY, ARRAY_CLASS[0]);
      this._addRange(
        form,
        ARRAY_CLASS[0],
        ARRAY_CLASS[0],
        START_QUANTITY,
        START_QUANTITY,
        END_QUANTITY
      );
      this._addRange(
        form,
        ARRAY_CLASS[1],
        ARRAY_CLASS[1],
        END_QUANTITY,
        START_QUANTITY,
        END_QUANTITY
      );
      wrapper.append(form);
      this._addNumber(wrapper, END_QUANTITY, ARRAY_CLASS[1]);
    }
    if (this._filterName === 'Weight') {
      this._addNumber(wrapper, START_QUANTITY, ARRAY_CLASS[2]);
      this._addRange(form, ARRAY_CLASS[2], ARRAY_CLASS[2], START_WEIGHT, START_WEIGHT, END_WEIGHT);
      this._addRange(form, ARRAY_CLASS[3], ARRAY_CLASS[3], END_WEIGHT, START_WEIGHT, END_WEIGHT);
      wrapper.append(form);
      this._addNumber(wrapper, END_WEIGHT, ARRAY_CLASS[3]);
    }
    this._filterValue.append(wrapper);
  }

  private _addNumber(parent: HTMLElement, val: string, className: string) {
    const el = this.createDiv(className);
    el.textContent = val;
    parent.append(el);
  }

  private _addRange(
    parent: HTMLElement,
    idName: string,
    className: string,
    val: string,
    min: string,
    max: string
  ) {
    const filter = new InputRange();
    filter.setValueMinMax(val, min, max);
    filter.setIdName(idName);
    // filter.setClassName(filter.element, className);
    parent.append(filter.element);
  }

  getInnerBlock() {
    return this._filterValue.innerHTML;
  }

  get element() {
    return this._filterValue;
  }
}

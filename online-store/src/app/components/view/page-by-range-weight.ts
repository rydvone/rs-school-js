import { FilterRangeHandler } from '../../filters/range-handler';
import { AppState, filterData } from '../../services/app-state';
import { ElementTemplate } from '../element/element-template';
import { InputRangeWeight } from '../element/input-range-weight';

// type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const TITLE_CONTENT = 'Weight:';
const WRAPPER_CLASS = 'filters__slider';
const ELEMENT_FORM = 'form';
const FORM_CLASS = 'filters__form-range';
const RANGE_FROM = 'range-weight-from';
const RANGE_TO = 'range-weight-to';
const RANGE_START_CLASS = 'range-weight-start';
const RANGE_END_CLASS = 'range-weight-end';
const KEY = 'weight';

export class PageRangeWeight extends ElementTemplate {
  private _filterBlock: HTMLElement;
  private _rangeFrom: InputRangeWeight;
  private _rangeTo: InputRangeWeight;
  private _rangeFromValue: HTMLElement;
  private _rangeToValue: HTMLElement;
  private _rangeHandler: FilterRangeHandler;

  constructor() {
    super();
    this._filterBlock = this.createDiv(ELEMENT_CLASS);
    this._rangeFrom = new InputRangeWeight(RANGE_FROM);
    this._rangeTo = new InputRangeWeight(RANGE_TO);
    this._rangeFromValue = this.createRangeValue(this._rangeFrom.element.min, RANGE_START_CLASS);
    this._rangeToValue = this.createRangeValue(this._rangeFrom.element.max, RANGE_END_CLASS);
    this._rangeHandler = new FilterRangeHandler(this._rangeFrom.element, this._rangeTo.element);
    this._init();
    this.appendTo();
  }

  private _init() {
    // this.setInitValue(10, 20);
    this._rangeFrom.click(() => {
      this._rangeHandler.controlFromRange(
        this._rangeFrom.element,
        this._rangeTo.element,
        this._rangeFromValue
      );
      AppState.rangeSelected[KEY] = this._rangeHandler
        .getParsed(this._rangeFrom.element, this._rangeTo.element)
        .slice();
      filterData.filterByRange(KEY);
    });
    this._rangeTo.click(() => {
      this._rangeHandler.controlToRange(
        this._rangeFrom.element,
        this._rangeTo.element,
        this._rangeToValue
      );
      AppState.rangeSelected[KEY] = this._rangeHandler
        .getParsed(this._rangeFrom.element, this._rangeTo.element)
        .slice();
      filterData.filterByRange(KEY);
    });
  }

  appendTo() {
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = TITLE_CONTENT;
    this._filterBlock.append(title);
    const wrapper = this.createDiv(WRAPPER_CLASS);

    const form = this.createHTMLElement(ELEMENT_FORM, FORM_CLASS);
    form.append(this._rangeFrom.element);
    form.append(this._rangeTo.element);

    wrapper.append(this._rangeFromValue);
    wrapper.append(form);
    wrapper.append(this._rangeToValue);
    this._filterBlock.append(wrapper);
  }

  createRangeValue(val: string, className: string) {
    const item = this.createDiv(className);
    item.textContent = val;
    return item;
  }

  setInitValue(from: number, to: number) {
    this._rangeFrom.value = from;
    this._rangeTo.value = to;
    this._rangeFromValue.textContent = `${from}`;
    this._rangeToValue.textContent = `${to}`;
    this._rangeHandler.fillSlider(
      this._rangeFrom.element,
      this._rangeTo.element,
      this._rangeTo.element
    );
  }

  getInnerBlock() {
    return this._filterBlock.innerHTML;
  }

  get element() {
    return this._filterBlock;
  }

  get rangeFrom() {
    return this._rangeFrom;
  }

  get rangeTo() {
    return this._rangeTo;
  }
}

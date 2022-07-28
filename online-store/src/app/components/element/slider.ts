import { ElementTemplate } from './element-template';
// import { convertFilterRange } from '../../constants/filter-by-range-constant';
// import { FuncEvent } from '../../types/func';
import { KeyConvertFilterRange } from '../../types/input';
import { FilterRangeHandler } from '../../services/range-handler';
import { InputRange } from './input-range';
import { AppState, filterData } from '../../services/app-state';

const ELEMENT_CLASS = 'filters__slider';
const ELEMENT_FORM = 'form';
const FORM_CLASS = 'filters__form-range';
const RANGE_VALUE_CLASS = 'range-value';

export class Slider extends ElementTemplate {
  private _slider: HTMLElement;
  private _itemType: KeyConvertFilterRange;
  constructor(itemType: KeyConvertFilterRange) {
    super();
    this._itemType = itemType;
    this._slider = this.createDiv(ELEMENT_CLASS);
  }

  drawSlider() {
    this.clearNode(this._slider);
    const item = this.createInputRange(this._itemType);
    const rangeFromValue = this.createRangeValue(item.elementFrom.min, RANGE_VALUE_CLASS);
    const rangeToValue = this.createRangeValue(item.elementFrom.max, RANGE_VALUE_CLASS);
    const rangeHandler = new FilterRangeHandler(item.elementFrom, item.elementTo);

    item.clickFrom(() => {
      rangeHandler.controlFromRange(item.elementFrom, item.elementTo, rangeFromValue);
      AppState.rangeSelected[this._itemType] = rangeHandler
        .getParsed(item.elementFrom, item.elementTo)
        .slice();

      filterData.callFilter();
    });
    item.clickTo(() => {
      rangeHandler.controlToRange(item.elementFrom, item.elementTo, rangeToValue);
      AppState.rangeSelected[this._itemType] = rangeHandler
        .getParsed(item.elementFrom, item.elementTo)
        .slice();
      filterData.callFilter();
    });

    const fragment: DocumentFragment = document.createDocumentFragment();
    const form = this.createHTMLElement(ELEMENT_FORM, FORM_CLASS);
    form.append(item.elementFrom);
    form.append(item.elementTo);
    fragment.append(rangeFromValue);
    fragment.append(form);
    fragment.append(rangeToValue);
    this._slider.append(fragment);
  }

  createInputRange(content: KeyConvertFilterRange) {
    const item = new InputRange(content);
    return item;
  }

  createRangeValue(val: string, className: string) {
    const item = this.createDiv(className);
    item.textContent = val;
    return item;
  }

  get element() {
    return this._slider;
  }
}

import { ElementTemplate } from '../element/element-template';
// import data from '../../../assets/data/data.json';
import dataValue from '../../../assets/data/data-filter-value.json';
import { Data } from '../../types/data';
import { Product } from './product';
import { FilterValueBase } from './page-value-base';

const ELEMENT_NAME_CLASS = 'filter-container';
const ELEMENT_H3 = 'h3';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'filters__description';

export class FilterValue extends ElementTemplate {
  private _value: HTMLElement;
  private _dataValue: { [key: string]: string[] };
  private _filterName: string;
  constructor(filterName: string) {
    super();
    this._filterName = filterName;
    this._dataValue = dataValue;
    this._value = this.createDiv(ELEMENT_NAME_CLASS);
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const h3 = this.createHTMLElement(ELEMENT_H3, ELEMENT_H3);
    h3.textContent = `${this._filterName}`;
    fragment.append(h3);
    const div = this.createDiv(ELEMENT_NAME_CLASS_ADDITIONAL);
    if (this._filterName === 'Filters by value') {
      this._appendToValue(div);
    }
    fragment.append(div);
    this._value.append(fragment);
  }

  private _appendToValue(el: HTMLElement) {
    const filterBrand = new FilterValueBase('brand');
    el.append(filterBrand.element);
    const filterProduct = new FilterValueBase('product');
    el.append(filterProduct.element);
    const filterCountry = new FilterValueBase('country');
    el.append(filterCountry.element);
    const filterType = new FilterValueBase('type');
    el.append(filterType.element);
  }

  get element() {
    return this._value;
  }
}

import { ElementTemplate } from '../element/element-template';
// import data from '../../../assets/data/data.json';
// import dataValue from '../../../assets/data/data-filter-value.json';
// import { Data } from '../../types/data';
// import { Product } from './product';
import { PageFilterButton } from './page-filter-button';
import { PageFilterForm } from './page-filter-form';

const ELEMENT_NAME_CLASS = 'filter-container';
const ELEMENT_H3 = 'h3';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'filters__description';
const ARRAY_BUTTON_TYPE: string[] = ['brand', 'product', 'country', 'type'];

export class PageFilter extends ElementTemplate {
  private _value: HTMLElement;
  private _filterName: string;
  constructor(filterName: string) {
    super();
    this._filterName = filterName;
    this._value = this.createDiv(ELEMENT_NAME_CLASS);
    this.appendTo();
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
    if (this._filterName === 'Search and Sorting') {
      this._appendToSearch(div);
    }
    fragment.append(div);
    this._value.append(fragment);
  }

  private _appendToValue(parent: HTMLElement) {
    ARRAY_BUTTON_TYPE.forEach((el) => {
      const filter = new PageFilterButton(el);
      parent.append(filter.element);
    });
  }

  private _appendToSearch(parent: HTMLElement) {
    const search = new PageFilterForm('Search');
    parent.append(search.element);
    const sort = new PageFilterForm('Sort by');
    parent.append(sort.element);
    const button = new PageFilterButton('reset');
    parent.append(button.element);
  }

  get element() {
    return this._value;
  }
}

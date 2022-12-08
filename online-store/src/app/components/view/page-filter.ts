import { ElementTemplate } from '../element/element-template';
import { PageByValue } from './page-by-value';
import { PageFilterForm } from './page-filter-form';
import { convertFilterValue } from '../../constants/filter-by-value-constant';
import { PageReset } from './page-reset';
import { PageByRange } from './page-by-range';
import { ETitles } from '../../types/titles';

export const elementsByRange = new PageByRange();

const ELEMENT_NAME_CLASS = 'filter-container';
const ELEMENT_H3 = 'h3';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'filters__description';

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
    if (this._filterName === ETitles.titleByValue) {
      this._appendToValue(div);
    }
    if (this._filterName === ETitles.titleByRange) {
      this._appendToRange(div);
    }
    if (this._filterName === ETitles.titleBySearchSort) {
      this._appendToSearch(div);
    }
    fragment.append(div);
    this._value.append(fragment);
  }

  private _appendToValue(parent: HTMLElement) {
    Object.keys(convertFilterValue).forEach((key) => {
      const filter = new PageByValue(key);
      parent.append(filter.element);
    });
  }

  private _appendToRange(parent: HTMLElement) {
    const filter = elementsByRange.element;
    elementsByRange.appendTo();

    parent.append(filter);
  }

  private _appendToSearch(parent: HTMLElement) {
    const search = new PageFilterForm('Search');
    parent.append(search.element);
    const sort = new PageFilterForm('Sort by');
    parent.append(sort.element);
    const button = new PageReset();
    parent.append(button.element);
  }

  get element() {
    return this._value;
  }
}

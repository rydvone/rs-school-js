import { ElementTemplate } from '../element/element-template';
import { PageFilter } from './page-filter';

const ELEMENT_NAME = 'section';
const ELEMENT_NAME_CLASS = 'filters';
const ARRAY_FILTER_TYPE = ['Filters by value', 'Filters by range', 'Search and Sorting'];

export class PageFilters extends ElementTemplate {
  private _filters: HTMLElement;
  constructor() {
    super();
    this._filters = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this._init(ARRAY_FILTER_TYPE);
  }

  private _init(data: string[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    data.forEach((el) => {
      const filters = new PageFilter(el);
      fragment.append(filters.element);
    });
    this._filters.append(fragment);
  }

  get element() {
    return this._filters;
  }
}

import { ETitles } from '../../types/titles';
import { ElementTemplate } from '../element/element-template';
import { InputSearch } from '../element/input-search';
import { Select } from '../element/select';

export const inputBySearch = new InputSearch();
export const inputBySelect = new Select();

const ELEMENT_NAME_CLASS = 'filters__description__block';
const ELEMENT_TITLE_CLASS = 'filters__title';

export class PageFilterForm extends ElementTemplate {
  private _filterValue: HTMLElement;
  private _filterName: string;

  constructor(filterName: 'Search' | 'Sort by') {
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
    if (this._filterName === ETitles.titleBySearch) {
      const filter = inputBySearch;
      this._filterValue.append(filter.elementForm);
      filter.element.focus();
    }
    if (this._filterName === ETitles.titleBySort) {
      const filter = inputBySelect;
      this._filterValue.append(filter.appendTo());
    }
  }

  get element() {
    return this._filterValue;
  }
}

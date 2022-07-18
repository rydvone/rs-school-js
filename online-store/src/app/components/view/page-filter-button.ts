import { ElementTemplate } from '../element/element-template';
import { ListButton } from '../element/list-button';

// const ELEMENT_NAME = 'filters__description__block';
const ELEMENT_NAME_CLASS = 'filters__description__block';
const ELEMENT_TITLE_CLASS = 'filters__title';

export class PageFilterButton extends ElementTemplate {
  private _filterValue: HTMLElement;
  private _filterName: string;

  constructor(filterName: string) {
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
    const list = new ListButton(this._filterName);
    this._filterValue.append(list.element);
  }

  getInnerBlock() {
    return this._filterValue.innerHTML;
  }

  get element() {
    return this._filterValue;
  }
}

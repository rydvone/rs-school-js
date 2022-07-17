import { ElementTemplate } from '../element/element-template';
import { ListButton } from '../element/list-button';

// const ELEMENT_NAME = 'filters__description__block';
const ELEMENT_NAME_CLASS = 'filters__description__block';
const ELEMENT_CLASS_TITLE = 'filters__title';

export class FilterValue extends ElementTemplate {
  private _filterValue: HTMLElement;
  private _filterName: string;

  constructor(filterName: string) {
    super();
    this._filterName = filterName;
    this._filterValue = this.createDiv(ELEMENT_NAME_CLASS);
  }

  private _draw() {
    const title = this.createDiv(ELEMENT_CLASS_TITLE);
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

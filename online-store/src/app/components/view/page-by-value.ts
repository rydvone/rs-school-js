import { ElementTemplate } from '../element/element-template';
import { convertFilterValue } from '../../constants/filter-by-value';
import { Button } from '../element/button';
import { filterData } from '../../services/app-state';

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const UL_NAME = 'ul';
const UL_CLASS = 'list-inline';
const LI_NAME = 'li';
const LI_CLASS = 'list-inline__item';

type KeyType = 'brand' | 'product' | 'country' | 'type';

export class PageByValue extends ElementTemplate {
  private _item: HTMLElement;
  private _filterName: string;
  constructor(filterName: string) {
    super();
    this._filterName = filterName;
    this._item = this.createDiv(ELEMENT_CLASS);
    this.appendTo();
  }

  appendTo() {
    const title = this.createDiv(TITLE_CLASS);
    const titleToVisual = this._filterName[0].toUpperCase() + this._filterName.slice(1);
    title.textContent = `${titleToVisual}:`;
    this._item.append(title);
    const ul = this.createHTMLElement(UL_NAME, UL_CLASS);
    ul.append(this.appendToList(convertFilterValue[this._filterName as KeyType]));
    this._item.append(ul);
  }

  appendToList(data: { [key: string]: string }) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    Object.entries(data).forEach(([el, val]) => {
      const li = this.createHTMLElement(LI_NAME, LI_CLASS);
      const button = new Button(el);
      button.click(() => {
        button.toggleClass();
        if (button.containsClass()) {
          filterData.filterByType(this._filterName, val);
        } else {
          filterData.filterByType(this._filterName, '0');
        }
      });
      li.append(button.element);
      fragment.append(li);
    });
    return fragment;
  }

  get element() {
    return this._item;
  }
}

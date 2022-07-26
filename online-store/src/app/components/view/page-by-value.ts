import { ElementTemplate } from '../element/element-template';
import { convertFilterValue } from '../../constants/filter-by-value-constant';
// import { Button } from '../element/button';
import { AppState, filterData } from '../../services/app-state';
import { Buttons } from '../element/buttons';

type KeyType = 'brand' | 'product' | 'country' | 'type';

export const buttonsByValue = new Buttons();

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const UL_NAME = 'ul';
const UL_CLASS = 'list-inline';
const LI_NAME = 'li';
const LI_CLASS = 'list-inline__item';

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
      const button = buttonsByValue.createButton(el);
      if (AppState.buttonSelected[this._filterName].includes(val)) {
        button.addClass();
      }
      button.click(() => {
        button.toggleClass();
        if (button.containsClass()) {
          AppState.buttonSelected[this._filterName].push(val);
        } else {
          AppState.buttonSelected[this._filterName] = AppState.buttonSelected[
            this._filterName
          ].filter((elIn) => elIn !== val);
        }
        filterData.callFilter();
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

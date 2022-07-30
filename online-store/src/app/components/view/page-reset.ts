import { ElementTemplate } from '../element/element-template';
import { reset } from '../../constants/reset-button';
import { Button } from '../element/button';
import { AppState, filterData } from '../../services/app-state';
import { buttonsByValue } from './page-by-value';
import { inputBySearch, inputBySelect } from './page-filter-form';
import { elementsByRange } from './page-filter';
import { cartCounter } from './page-cart';

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const UL_NAME = 'ul';
const UL_CLASS = 'list-inline';
const LI_NAME = 'li';
const LI_CLASS = 'list-inline__item';
const TITLE = 'Reset';

export class PageReset extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this.appendTo();
  }

  appendTo() {
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = `${TITLE}:`;
    this._item.append(title);
    const ul = this.createHTMLElement(UL_NAME, UL_CLASS);
    ul.append(this.appendToList(reset));
    this._item.append(ul);
  }

  appendToList(data: string[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    data.forEach((el) => {
      const li = this.createHTMLElement(LI_NAME, LI_CLASS);
      const button = new Button(el);
      button.click(() => {
        if (button.element.textContent === 'Filters reset') {
          AppState.resetFilterSelected();
          buttonsByValue.element.forEach((el) => {
            el.element;
            el.removeClassSelected();
          });
          inputBySearch.createInput();
          elementsByRange.appendTo();
          filterData.callFilter();
        } else {
          AppState.clearLocalStorage();
          buttonsByValue.element.forEach((el) => {
            el.element;
            el.removeClassSelected();
          });
          elementsByRange.appendTo();
          inputBySearch.createInput();
          inputBySelect.sort();
          cartCounter.clearCount();
          filterData.callFilter();
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

import { ElementTemplate } from '../element/element-template';
import { reset } from '../../constants/reset-button';
import { Button } from '../element/button';
import { AppState } from '../../services/app-state';
import { drawProducts } from './view';
import { cartCounter } from './page-cart';
// import { filterData } from '../../services/app-state';

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
          AppState.resetDisplayProduct();
          drawProducts.appendTo(AppState.displayProduct);
        } else {
          AppState.resetDisplayProduct();
          AppState.clearProductSelected();
          cartCounter.clearCount();
          drawProducts.appendTo(AppState.displayProduct);
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

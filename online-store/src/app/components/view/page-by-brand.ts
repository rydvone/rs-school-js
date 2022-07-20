import { ElementTemplate } from '../element/element-template';
// import { ListButtonNew } from '../element/list-button_new';
import { filterByValue } from '../../constants/filter-by-value';
import { Func } from '../../types/func';
import { Button } from '../element/button';
import { filterData } from '../../services/app-state';

// type Func = (this: void, event: Event) => void;

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const UL_NAME = 'ul';
const UL_CLASS = 'list-inline';
const LI_NAME = 'li';
const LI_CLASS = 'list-inline__item';
const CATEGORY = 'brand';

export class PageByBrand extends ElementTemplate {
  private _item: HTMLElement;
  // private _button: Button;
  // private _currentButton: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    // this._currentButton = this.createHTMLElement('button', '');
    this.appendTo();
    this.click(this.clickCallback.bind(this));
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();

    // const wrapper = this.createDiv(ELEMENT_CLASS);
    const title = this.createDiv(TITLE_CLASS);
    // title.textContent = `${CATEGORY}:`;
    const titleToVisual = CATEGORY[0].toUpperCase() + CATEGORY.slice(1);
    title.textContent = `${titleToVisual}:`;
    fragment.append(title);
    const ul = this.createHTMLElement(UL_NAME, UL_CLASS);

    // const listButton = this.appendToList(filterByValue[CATEGORY]);
    // const listButton = this.appendToList(filterByValue[CATEGORY], this.clickCallback.bind(this));
    // const list = new ListButton();
    // wrapper.append(list.element);

    ul.append(this.appendToList(filterByValue[CATEGORY]));
    fragment.append(ul);

    this._item.append(fragment);
  }

  appendToList(data: string[]) {
    // const arrData = data[this._typeName];
    const fragment: DocumentFragment = document.createDocumentFragment();
    data.forEach((el) => {
      const li = this.createHTMLElement(LI_NAME, LI_CLASS);
      const button = new Button(el);
      // this._currentButton = button.element;
      // button.click(this._callback.bind(button));
      li.append(button.element);
      fragment.append(li);
    });
    return fragment;
  }

  sort(val: string) {
    filterData.type(CATEGORY, val);
  }

  clickCallback(ev: MouseEvent) {
    // this.sort(this._selectElement.value);
    const el = ev.target as HTMLElement;
    if (filterByValue[CATEGORY].includes(el.innerHTML)) {
      console.log(el.textContent);
      console.log(el.classList.contains('selected'));
      this.sort(el.innerHTML);
    }
  }

  click(fn: Func) {
    this._item.addEventListener('click', fn);
  }

  unclick(fn: Func) {
    this._item.removeEventListener('click', fn);
  }

  get element() {
    return this._item;
  }
}

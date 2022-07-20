import { ElementTemplate } from '../element/element-template';
// import { ListButtonNew } from '../element/list-button_new';
import { filterByValue } from '../../constants/filter-by-value';
import { Func } from '../../types/func';
// import { Button } from '../element/button';

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const UL_NAME = 'ul';
const UL_CLASS = 'list-inline';
const LI_NAME = 'li';
const LI_CLASS = 'list-inline__item';
const BUTTON_NAME = 'button';
const BUTTON_CLASS = 'button';
const BUTTON_CLASS_ADD = 'selected';
const CATEGORY = 'product';

export class PageBrand extends ElementTemplate {
  private _item: HTMLElement;
  // private _button: Button;
  // private _currentButton: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    // this._button: new Button()
    // this._currentButton = this.createHTMLElement('button', '');
    this.appendTo();
    // this.click(this.clickCallback.bind(this));
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();

    const title = this.createDiv(TITLE_CLASS);
    const titleToVisual = CATEGORY[0].toUpperCase() + CATEGORY.slice(1);
    title.textContent = `${titleToVisual}:`;
    fragment.append(title);
    const ul = this.createHTMLElement(UL_NAME, UL_CLASS);
    ul.append(this.appendToList(filterByValue[CATEGORY]));
    fragment.append(ul);

    this._item.append(fragment);
  }

  appendToList(data: string[]) {
    // const arrData = data[this._typeName];
    const fragment: DocumentFragment = document.createDocumentFragment();
    data.forEach((el) => {
      const li = this.createHTMLElement(LI_NAME, LI_CLASS);
      const button = this.createButton(el);
      this.click(button, this.clickCallback.bind(button));
      // this._currentButton = button.element;
      // button.click(this._callback.bind(button));
      li.append(button);
      fragment.append(li);
    });
    return fragment;
  }

  createButton(title: string) {
    const item = this.createHTMLElement(BUTTON_NAME, BUTTON_CLASS);
    item.textContent = title;
    return item;
  }

  clickCallback(ev: MouseEvent) {
    // this.sort(this._selectElement.value);
    console.log(this);
    console.log(ev.target);
  }

  click(el: HTMLElement, fn: Func) {
    el.addEventListener('click', fn);
  }

  unclick(el: HTMLElement, fn: Func) {
    el.removeEventListener('click', fn);
  }

  addClass(el: HTMLElement) {
    el.classList.add(BUTTON_CLASS_ADD);
  }

  removeClass(el: HTMLElement) {
    el.classList.remove(BUTTON_CLASS_ADD);
  }

  toggleClass(el: HTMLElement) {
    el.classList.toggle(BUTTON_CLASS_ADD);
  }

  get element() {
    return this._item;
  }
}

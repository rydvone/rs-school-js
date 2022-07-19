import { ElementTemplate } from './element-template';
import { ListButton } from './list-button';

const ELEMENT_CLASS = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const CATEGORY = 'Brand';
// const ARRAY_BRAND_LIST = ['Movenpick', 'Dallmayr', 'Illy', 'Lavazza'];

export class PageByBrand extends ElementTemplate {
  constructor() {
    super();
    this.appendTo();
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const wrapper = this.createDiv(ELEMENT_CLASS);
    const title = this.createDiv(TITLE_CLASS);
    title.textContent = `${CATEGORY}:`;
    wrapper.append(title);
    const list = new ListButton('brand');
    wrapper.append(list.element);
    fragment.append(wrapper);
  }

  //       const title = this.createDiv(TITLE_CLASS);
  //     title.textContent = TITLE_CONTENT;
  //     this._filterBlock.append(title);
  //     const wrapper = this.createDiv(WRAPPER_CLASS);
  //     const form = this.createHTMLElement(ELEMENT_FORM, FORM_CLASS);
  //     form.append(this._rangeFrom.element);
  //     form.append(this._rangeTo.element);

  //     this.appendToDisplayValue(wrapper, this._rangeFrom.element.min, RANGE_START);
  //     wrapper.append(form);
  //     this.appendToDisplayValue(wrapper, this._rangeFrom.element.max, RANGE_END);
  //     this._filterBlock.append(wrapper);
}

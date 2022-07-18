import { ElementTemplate } from './element-template';
import { ListButton } from './list-button';

const ELEMENT_NAME_CLASS = 'filters__description__block';
const ELEMENT_TITLE_CLASS = 'filters__title';
const CATEGORY = 'Brand';
// const ARRAY_BRAND_LIST = ['Movenpick', 'Dallmayr', 'Illy', 'Lavazza'];

export class FilterByBrand extends ElementTemplate {
  constructor() {
    super();
    this.appendTo();
  }

  appendTo() {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const wrapper = this.createDiv(ELEMENT_NAME_CLASS);
    const title = this.createDiv(ELEMENT_TITLE_CLASS);
    title.textContent = `${CATEGORY}:`;
    wrapper.append(title);
    const list = new ListButton('brand');
    wrapper.append(list.element);
    fragment.append(wrapper);
  }

}

import { ElementTemplate } from './element-template';

const ELEMENT_NAME = 'ul';
const ELEMENT_NAME_CLASS = 'list-block';
const ELEMENT_NAME_ADDITIONAL = 'li';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'list-block__item';
const ELEMENT_SPAN = 'span';
const ELEMENT_SPAN_CLASS = 'list-block__title';
const ELEMENT_SPAN_CLASS_ADDITIONAL = 'list-block__description';

export class ListProduct extends ElementTemplate {
  private _list: HTMLElement;
  constructor() {
    super();
    this._list = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
  }

  appendTo(data: { [key: string]: string }) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    Object.entries(data).forEach(([key, value]) => {
      const li = this.createHTMLElement(ELEMENT_NAME_ADDITIONAL, ELEMENT_NAME_CLASS_ADDITIONAL);
      const span = this.createHTMLElement(ELEMENT_SPAN, ELEMENT_SPAN_CLASS);
      span.textContent = `${key}:`;
      li.append(span);
      const spanAdd = this.createHTMLElement(ELEMENT_SPAN, ELEMENT_SPAN_CLASS_ADDITIONAL);
      spanAdd.textContent = `${value}`;
      li.append(spanAdd);
      fragment.appendChild(li);
    });
    this._list.appendChild(fragment);
  }

  get element() {
    return this._list;
  }
}

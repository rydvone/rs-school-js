import { ElementTemplate } from '../element/element-template';
import data from '../../../assets/data/data.json';
import { Data } from '../../types/data';
import { Product } from './product';

const ELEMENT_NAME = 'section';
const ELEMENT_NAME_CLASS = 'products';
const ELEMENT_WRONG_CLASS = 'products__wrong';
const CAPTION_WRONG = 'Wrong filter parametrs';

export class Products extends ElementTemplate {
  private _products: HTMLElement;
  constructor() {
    super();
    this._products = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this.appendTo(data);
  }

  appendTo(data: Data[]) {
    this.clearNode(this._products);
    const fragment: DocumentFragment = document.createDocumentFragment();
    data.forEach((el) => {
      const product = new Product();
      product.appendTo(el);
      fragment.append(product.element);
    });
    this._products.append(fragment);
  }

  appendToWrong() {
    this.clearNode(this._products);
    const wrong = this.createDiv(ELEMENT_WRONG_CLASS);
    wrong.textContent = CAPTION_WRONG;
    this._products.append(wrong);
  }

  get element() {
    return this._products;
  }
}

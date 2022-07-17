import { ElementTemplate } from '../element/element-template';
import data from '../../../assets/data/data.json';
import { Data } from '../../types/data';
import { Product } from './product';

const ELEMENT_NAME = 'section';
const ELEMENT_NAME_CLASS = 'products';

export class Products extends ElementTemplate {
  private _products: HTMLElement;
  constructor() {
    super();
    this._products = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
    this._init(data);
  }

  private _init(data: Data[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    data.forEach((el) => {
      const product = new Product();
      product.appendTo(el);
      fragment.append(product.element);
    });
    this._products.append(fragment);
  }

  get element() {
    return this._products;
  }
}

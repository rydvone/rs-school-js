import { ElementTemplate } from '../element/element-template';
import { ListProduct } from '../element/list-product';
import { Data } from '../../types/data';

const ELEMENT_NAME_CLASS = 'product';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'product__content';
const ELEMENT_H3 = 'h3';
const ELEMENT_IMG = 'img';
const ELEMENT_IMG_CLASS = 'product__image';

export class Product extends ElementTemplate {
  private _product: HTMLElement;
  private _list: ListProduct;
  constructor() {
    super();

    this._list = new ListProduct();
    this._product = this.createDiv(ELEMENT_NAME_CLASS);
  }

  appendTo(data: Data) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const h3 = this.createHTMLElement(ELEMENT_H3, ELEMENT_H3);
    h3.textContent = `${data.name}`;
    fragment.append(h3);
    const div = this.createDiv(ELEMENT_NAME_CLASS_ADDITIONAL);

    const img = this.createHTMLElement(ELEMENT_IMG, ELEMENT_IMG_CLASS) as HTMLImageElement;
    img.src = `./assets/image/products/${data.ean}.jpg`;
    img.alt = `${data.name}`;
    div.append(img);

    const listDescription = new ListProduct();
    listDescription.appendTo(data.fields);
    div.append(listDescription.element);

    fragment.append(div);
    this._product.append(fragment);
  }

  get element() {
    return this._product;
  }
}

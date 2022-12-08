import { ElementTemplate } from '../element/element-template';
import { ListProduct } from '../element/list-product';
import { Data } from '../../types/data';
import { cartCounter } from './page-cart';
import { AppState } from '../../services/app-state';

type Func = (this: void, event: MouseEvent) => void;

const ELEMENT_NAME_CLASS = 'product';
const ELEMENT_NAME_CLASS_ADDITIONAL = 'product__content';
const ELEMENT_H3 = 'h3';
const ELEMENT_IMG = 'img';
const ELEMENT_IMG_CLASS = 'product__image';
const CLASS_ADD = 'selected';

export class ProductComponent extends ElementTemplate {
  private _product: HTMLElement;
  private _list: ListProduct;
  private _data: Data;
  constructor(data: Data) {
    super();
    this._data = data;
    this._list = new ListProduct();
    this._product = this.createDiv(ELEMENT_NAME_CLASS);
    this.click(this._clickCallback.bind(this));
  }

  appendTo() {
    this.checkSelected();
    const fragment: DocumentFragment = document.createDocumentFragment();
    const h3 = this.createHTMLElement(ELEMENT_H3, ELEMENT_H3);
    h3.textContent = `${this._data.name}`;
    fragment.append(h3);
    const div = this.createDiv(ELEMENT_NAME_CLASS_ADDITIONAL);

    const img = document.createElement(ELEMENT_IMG);
    this.setClassName(img, ELEMENT_IMG_CLASS);

    img.src = `./assets/image/products/${this._data.ean}.jpg`;
    img.alt = `${this._data.name}`;
    div.append(img);

    const listDescription = new ListProduct();
    listDescription.appendTo(this._data.fields);
    div.append(listDescription.element);

    fragment.append(div);
    this._product.append(fragment);
  }

  get element() {
    return this._product;
  }

  addClass() {
    this._product.classList.add(CLASS_ADD);
  }

  removeClass() {
    this._product.classList.remove(CLASS_ADD);
  }

  containsClass() {
    return this._product.classList.contains(CLASS_ADD);
  }

  toggleClass() {
    this._product.classList.toggle(CLASS_ADD);
  }

  checkSelected() {
    if (AppState.productSelected.includes(this._data.ean)) {
      this.addClass();
    }
  }

  selected() {
    if (this.containsClass()) {
      AppState.productSelected.push(this._data.ean);
    } else {
      AppState.productSelected = AppState.productSelected.filter((el) => el !== this._data.ean);
    }
  }

  private _clickCallback() {
    if (!this.containsClass()) {
      cartCounter.incr();
    } else {
      cartCounter.decr();
    }
    this.toggleClass();
    this.selected();
  }

  click(fn: Func) {
    this._product.addEventListener('click', fn);
  }

  unclick(fn: Func) {
    this._product.removeEventListener('click', fn);
  }
}

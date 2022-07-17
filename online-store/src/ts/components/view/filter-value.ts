import { ElementTemplate } from '../element/element-template';
import data from '../../../assets/data/data-filter-value.json';

export class FilterValue extends ElementTemplate {
  private _element: HTMLElement;
  private _elementName: string;
  private _className: string;
  private _innerBlock: string;
  constructor(elementName: string, className: string) {
    super();
    this._elementName = elementName;
    this._className = className;
    this._innerBlock = '';
    this._element = this.createHTMLElement(this._elementName, this._className);
  }

  innerTo(data: string) {
    this._element.innerHTML = data;
  }

  getInnerBlock() {
    return this._element.innerHTML;
  }

  get blockElement() {
    return this._element;
  }
}

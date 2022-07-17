import { ElementTemplate } from '../element/element-template';

export class PageBlock extends ElementTemplate {
  protected _blockElement: HTMLElement;
  private _elementName: string;
  private _className: string;
  private _innerBlock: string;
  constructor(elementName: string, className: string) {
    super();
    this._elementName = elementName;
    this._className = className;
    this._innerBlock = '';
    this._blockElement = this.createHTMLElement(this._elementName, this._className);
  }

  innerTo(data: string) {
    this._blockElement.innerHTML = data;
  }

  getInnerBlock() {
    return this._blockElement.innerHTML;
  }

  get blockElement() {
    return this._blockElement;
  }
}

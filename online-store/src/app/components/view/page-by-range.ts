import { ElementTemplate } from '../element/element-template';
import { Sliders } from '../element/sliders';
import { convertFilterRange } from '../../constants/filter-by-range-constant';
import { KeyConvertFilterRange } from '../../types/input';

export const sliders = new Sliders();

const ELEMENT_CLASS = 'filters__description';
const ELEMENT_CLASS_ADD = 'filters__description__block';
const TITLE_CLASS = 'filters__title';
const TITLE_KEY_CONTENT = 'title';

export class PageByRange extends ElementTemplate {
  private _filterBlock: HTMLElement;
  constructor() {
    super();
    this._filterBlock = this.createDiv(ELEMENT_CLASS);
  }

  appendTo() {
    this.clearNode(this._filterBlock);
    const fragment: DocumentFragment = document.createDocumentFragment();
    Object.keys(convertFilterRange).forEach((key) => {
      const block = this.createDiv(ELEMENT_CLASS_ADD);
      const title = this.createDiv(TITLE_CLASS);
      const keyInner = key as KeyConvertFilterRange;
      title.textContent = convertFilterRange[keyInner][TITLE_KEY_CONTENT];
      block.append(title);
      const item = sliders;
      const itemElement = item.createItem(keyInner);
      block.append(itemElement.element);
      fragment.append(block);
    });

    this._filterBlock.append(fragment);
  }

  get element() {
    return this._filterBlock;
  }
}

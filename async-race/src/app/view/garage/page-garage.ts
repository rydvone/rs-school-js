import { Item } from '../garage/item';
import { ElementTemplate } from '../elements/element-template';
import { Edit } from './edit';

const ELEMENT_CLASS = 'garage';
const ELEMENT_CLASS_VISUAL = 'none';

export class PageGarage extends ElementTemplate {
  private _item: HTMLElement;
  private _fragment: DocumentFragment;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this._fragment = document.createDocumentFragment();
  }

  checkPage(key: string) {
    if (key === ELEMENT_CLASS) {
      this._item.classList.add(ELEMENT_CLASS_VISUAL);
    }
  }

  buildPage() {
    const edit = new Edit();
    edit.appendTo();
    const items = new Item();

    console.log('appendBUILD');
    this._item.append(edit.element);
    this._item.append(items.addRender());
    return this._item;
  }

  get elementn() {
    return this._item;
  }
}

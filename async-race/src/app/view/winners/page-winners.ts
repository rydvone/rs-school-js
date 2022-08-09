// import { Item } from '../garage/item';
import { ElementTemplate } from '../elements/element-template';
import { paginationComponent } from '../pages/page-template';
import { Table } from './table';

const ELEMENT_CLASS = 'winners';
const ELEMENT_CLASS_VISUAL = 'none';
const H2 = 'h2';
const H3 = 'h3';

export class PageWinners extends ElementTemplate {
  private _item: HTMLElement;
  private _itemTitle: HTMLElement;
  private _itemPage: HTMLElement;
  private _itemTable: Table;
  private _fragment: DocumentFragment;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this._fragment = document.createDocumentFragment();
    this._itemTitle = this.createNode(H2, H2);
    this._itemPage = this.createNode(H3, H3);
    this._itemTable = this.createTable();

    this.buildPage();
    this.renderTitle();
    this.renderPage();
  }

  checkPage(key: string) {
    if (key === ELEMENT_CLASS) {
      this._item.classList.remove(ELEMENT_CLASS_VISUAL);
    } else {
      this._item.classList.add(ELEMENT_CLASS_VISUAL);
    }
  }

  buildPage() {
    this._item.append(this._itemTitle);
    this._item.append(this._itemPage);
    this._item.append(this._itemTable.element);
    this._item.append(paginationComponent.elementWinners);
    return this._item;
  }

  renderTitle(count = 0) {
    this._itemTitle.textContent = `Winners (${count})`;
  }

  renderPage(count = 1) {
    this._itemPage.innerHTML = `<strong>Page #${count}`;
  }

  createTable() {
    return new Table();
  }

  get element() {
    return this._item;
  }

  get elementTable() {
    return this._itemTable;
  }
}

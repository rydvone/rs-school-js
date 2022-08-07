// import { Item } from '../garage/item';
import { ElementTemplate } from '../elements/element-template';
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
    this._itemTitle = this.renderTitle();
    this._itemPage = this.renderPage();
    this._itemTable = this.renderTable();

    this.buildPage();
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
    return this._item;
  }

  renderTitle(count = 0) {
    const title = this.createNode(H2, H2);
    title.textContent = `Winners (${count})`;
    return title;
  }

  renderPage(count = 1) {
    const page = this.createNode(H3, H3);
    page.innerHTML = `<strong>Page #${count}`;
    return page;
  }

  renderTable() {
    const table = new Table();
    return table;
  }

  get elementn() {
    return this._item;
  }
}

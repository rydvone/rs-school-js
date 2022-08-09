import { TableHeaderConst } from '../../const/winners-table';
import { ElementTemplate } from '../elements/element-template';

export const buttonSort: { [key: string]: HTMLElement } = {};

const ELEMENT = 'table';
const ELEMENT_CLASS = 'table';
const TR = 'tr';
const TH = 'th';
const TR_HEAD_CLASS = 'tr-head';
const TR_BODY = 'tbody';
const TH_CONTROL = 'th_control';
const BUTTON_FOR_SORT = ['Wins', 'Best Time'];

export class Table extends ElementTemplate {
  private _item: HTMLElement;
  private _itemHeader: HTMLElement;
  private _itemBody: HTMLElement;
  private _numbers: number;

  constructor() {
    super();
    this._numbers = 0;
    this._item = this.createNode(ELEMENT, ELEMENT_CLASS);
    this._itemHeader = this.createHeader();
    this._item.append(this._itemHeader);
    this._itemBody = this.createNode(TR_BODY, TR_BODY);
    this._item.append(this._itemBody);
  }

  // renderTable(winners: { [key: string]: string }) {
  //   console.log(winners);
  //   const key = Object.keys(winners);
  //   key.reduce((acc, cur) => acc + `<td>${winners[cur]}<td>`, '');
  // }

  renderTable(winners: { [key: string]: string }[]) {
    this._itemBody.innerHTML = '';
    winners.forEach((el, ind) => {
      this._itemBody.insertAdjacentHTML('beforeend', `${this.buildRow(el, ind + 1)}`);
    });
  }

  buildRow(el: { [key: string]: string }, ind: number) {
    return `
      <tr>
        <td>${ind}</td>
        <td>${el.car}</td>
        <td>${el.names}/<td>
        <td>${el.wins}</td>
        <td>${el.time}</td>
      </tr>`;
  }

  createHeader() {
    const tr = this.createNode(TR, TR_HEAD_CLASS);
    Object.keys(TableHeaderConst).forEach((key) => {
      const th = this.createNode(TH, TH);
      const text = document.createTextNode(TableHeaderConst[key]);
      th.append(text);
      tr.append(th);

      if (BUTTON_FOR_SORT.includes(TableHeaderConst[key])) {
        buttonSort[key] = th;
        th.classList.add(TH_CONTROL);
      }
    });
    return tr;
  }

  get element() {
    return this._item;
  }
}

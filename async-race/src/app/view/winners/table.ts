import { TableHeaderConst } from '../../const/winners-table';
import { ITableWinners } from '../../types/storage-types';
import { CarElement } from '../elements/car';
import { ElementTemplate } from '../elements/element-template';

export const buttonSort: { [key: string]: HTMLElement } = {};

const ELEMENT = 'table';
const TR = 'tr';
const TH = 'th';
const TR_HEAD = 'thead';
const TR_BODY = 'tbody';
const TH_CONTROL = 'th-control';
const BUTTON_FOR_SORT = ['Wins', 'Best Time'];

export class Table extends ElementTemplate {
  private _item: HTMLElement;
  private _itemHeader: HTMLElement;
  private _itemBody: HTMLElement;
  private _numbers: number;

  constructor() {
    super();
    this._numbers = 0;
    this._item = this.createNode(ELEMENT, ELEMENT);
    this._itemHeader = this.createNode(TR_HEAD, TR_HEAD);
    this._itemHeader.append(this.createHeader());
    this._item.append(this._itemHeader);
    this._itemBody = this.createNode(TR_BODY, TR_BODY);
    // this._itemBody = this.createNode(TR, TR);
    this._item.append(this._itemBody);
  }

  // renderTable(winners: { [key: string]: string }) {
  //   console.log(winners);
  //   const key = Object.keys(winners);
  //   key.reduce((acc, cur) => acc + `<td>${winners[cur]}<td>`, '');
  // }

  renderTable(winners: ITableWinners[]) {
    this._itemBody.innerHTML = '';
    winners.forEach((el, ind) => {
      this._itemBody.insertAdjacentHTML('beforeend', `${this.buildRow(el, ind + 1)}`);
    });
  }

  buildRow(el: ITableWinners, ind: number) {
    const car = new CarElement();
    return `
      <tr>
        <td>${ind}</td>
        <td>${car.getOuter(car.getItem(el.color))}</td>
        <td>${el.name}</td>
        <td>${el.wins}</td>
        <td>${el.time}</td>
      </tr>`;
  }

  createHeader() {
    const tr = this.createNode(TR, TR);
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

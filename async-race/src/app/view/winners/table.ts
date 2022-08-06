import { TableHeaderConst } from '../../const/winners-table';
import { ElementTemplate } from '../elements/element-template';

export const buttonSort: { [key: string]: HTMLElement } = {};

const ELEMENT = 'table';
const ELEMENT_CLASS = 'table';
const TR = 'tr';
const TH = 'th';
const TR_HEAD_CLASS = 'tr-head';
const TH_CONTROL = 'th_control';

const BUTTON_FOR_SORT = ['Wins', 'Best Time'];

// const TH_HEAD_CLASS = 'tr-head';
// const CONTROL_CLASS = 'edit__control';
// const ARR_EDIT_CONTROL = ['create', 'update'];

export class Table extends ElementTemplate {
  private _item: HTMLElement;
  private _itemHeader: HTMLElement;
  private _numbers: number;
  // private _editCreate: EditEdit;
  // private _editUpdate: EditEdit;
  // private _editControl: HTMLElement;
  constructor() {
    super();
    this._numbers = 0;
    this._item = this.createNode(ELEMENT, ELEMENT_CLASS);
    this._itemHeader = this.createHeader();
    this._item.append(this._itemHeader);
    // this._editCreate = this.createEditCreate();
    // inputEditCreate.text = this._editCreate.inputText;
    // inputEditCreate.color = this._editCreate.inputColor;
    // this._editUpdate = this.createEditUpdate();
    // inputEditUpdate.text = this._editCreate.inputText;
    // inputEditUpdate.color = this._editCreate.inputColor;
    // this._editControl = this.createEditControl();
  }

  // renderTrack(color: string, id: number) {
  //   const car = this.createCar();

  //   const flag = this.createFlag();

  //   return `
  //     <div class="item__wrapper">
  //       <div class="item__control"></div>
  //       <div class="item__track">
  //         <div class="item__car" id="item__car-${id}">${car.getOuter(car.getItem(color))}</div>
  //         <div class="item__finish-flag">${flag.getOuter(flag.getItem())}</div>
  //       </div>
  //     </div>
  //   `;
  // }
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

  appendTo() {
    this._item.append(this._itemHeader);
    // this._item.append(this._editUpdate.element);
    // this._item.append(this._editControl);
  }

  get element() {
    return this._item;
  }
}

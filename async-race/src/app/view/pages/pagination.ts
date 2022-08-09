import { PageConst, PaginationConst } from '../../const/button-const';
import { IButtonsStore } from '../../types/buttons-store-types';
import { Button } from '../elements/button';
// import { Button } from '../elements/button';
import { ElementTemplate } from '../elements/element-template';

const ELEMENT_CLASS = 'pagination';
const BUTTON_CLASS_ADD = 'button_pag';
const INACTIVE_CLASS = 'inactive';

export const buttonPaginationGarage: IButtonsStore = {};
export const buttonPaginationWinners: IButtonsStore = {};

export class Pagination extends ElementTemplate {
  private _itemGarage: HTMLElement;
  private _itemWinners: HTMLElement;

  constructor() {
    super();
    this._itemGarage = this.createDiv(ELEMENT_CLASS);
    this._itemGarage.append(this.createButton(PageConst.garage));
    this._itemWinners = this.createDiv(ELEMENT_CLASS);
    this._itemWinners.append(this.createButton(PageConst.winners));
  }

  createButton(key = 'winners') {
    const fragment = document.createDocumentFragment();
    Object.keys(PaginationConst).forEach((el) => {
      const item = new Button();
      item.addContent(PaginationConst[el]);
      item.addClassName(item.element, BUTTON_CLASS_ADD);
      item.addClassName(item.element, INACTIVE_CLASS);
      if (key === PageConst.garage) {
        buttonPaginationGarage[el] = item;
      } else {
        buttonPaginationWinners[el] = item;
      }
      fragment.append(item.element);
    });
    return fragment;
  }

  get elementGarage() {
    return this._itemGarage;
  }

  get elementWinners() {
    return this._itemWinners;
  }
}

import { SwitchConst } from '../../const/button-const';
import { Button } from '../elements/button';
import { ElementTemplate } from '../elements/element-template';

export const buttonSwitch: { [key: string]: Button } = {};

const ELEMENT_CLASS = 'switch';

export class Switch extends ElementTemplate {
  private _item: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this._item.append(this.createSwitch());
  }

  createSwitch() {
    const fragment = document.createDocumentFragment();
    Object.keys(SwitchConst).forEach((key) => {
      const item = new Button();
      item.element.textContent = SwitchConst[key];
      buttonSwitch[key] = item;
      fragment.append(item.element);
    });
    return fragment;
  }

  get element() {
    return this._item;
  }
}

import { ButtonEditControlConst } from '../../const/edit-const';
import { ButtonControl } from './button-control';

export class ButtonsEditControl {
  private _buttons: { [key: string]: ButtonControl };
  constructor() {
    this._buttons = {};
  }

  createButton(content: string) {
    const item = new ButtonControl(ButtonEditControlConst[content]);
    this._buttons[content] = item;
    return item;
  }

  get element() {
    return this._buttons;
  }
}

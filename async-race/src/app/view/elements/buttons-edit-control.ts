import { ButtonEditConst } from '../../const/button-const';
import { Button } from './button';

export class ButtonsEditControl {
  private _buttons: { [key: string]: Button };
  constructor() {
    this._buttons = {};
  }

  createButton(content: string) {
    const item = new Button();
    item.addContent(ButtonEditConst[content]);
    this._buttons[content] = item;
    return item;
  }

  get element() {
    return this._buttons;
  }
}

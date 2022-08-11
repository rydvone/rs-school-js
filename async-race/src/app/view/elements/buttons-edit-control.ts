import { ButtonEditConst } from '../../const/button-const';
import { Button } from './button';

const INACTIVE = 'inactive';
const KEY_INACTIVE = 'stop';

export class ButtonsEditControl {
  private _buttons: { [key: string]: Button };
  constructor() {
    this._buttons = {};
  }

  createButton(content: string) {
    const item = new Button();
    item.addContent(ButtonEditConst[content]);
    if (content === KEY_INACTIVE) {
      item.element.classList.add(INACTIVE);
    }
    this._buttons[content] = item;

    return item;
  }

  get element() {
    return this._buttons;
  }
}

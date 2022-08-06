import { editComponent } from '../garage/page-garage';
import { Button } from './button';

export class ButtonsEditEdit {
  private _buttons: { [key: string]: Button };
  constructor() {
    this._buttons = {};
    this.addButton();
  }

  addButton() {
    let item = editComponent.editCreate.button;
    let content = item.element.innerHTML;
    this._buttons[content] = item;
    item = editComponent.editUpdate.button;
    content = item.element.innerHTML;
    this._buttons[content] = item;
    return item;
  }

  get element() {
    return this._buttons;
  }
}

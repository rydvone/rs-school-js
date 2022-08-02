import { ButtonItemControl } from './button-item-control';

export class ButtonsItemControl {
  private _buttons: ButtonItemControl[];
  constructor() {
    this._buttons = [];
  }

  createButton(content: string) {
    const item = new ButtonItemControl(content);
    this._buttons.push(item);
    return item;
  }

  get element() {
    return this._buttons;
  }
}

import { ButtonControl } from './button-control';

export class ButtonsItemControl {
  private _buttons: ButtonControl[];
  constructor() {
    this._buttons = [];
  }

  createButton(content: string) {
    const item = new ButtonControl(content);
    this._buttons.push(item);
    return item;
  }

  get element() {
    return this._buttons;
  }
}

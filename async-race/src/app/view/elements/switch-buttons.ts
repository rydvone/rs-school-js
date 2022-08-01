import { SwitchButton } from './switch-button';

export class SwitchButtons {
  private _buttons: SwitchButton[];
  constructor() {
    this._buttons = [];
  }

  createButton(content: string) {
    const item = new SwitchButton(content);
    this._buttons.push(item);
    return item;
  }

  get element() {
    return this._buttons;
  }
}

import { Button } from './button';

export class Buttons {
  private _buttons: Button[];
  constructor() {
    this._buttons = [];
  }

  createButton(content: string) {
    const item = new Button(content);
    this._buttons.push(item);
    return item;
  }

  get element() {
    return this._buttons;
  }
}

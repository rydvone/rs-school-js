import { ButtonNoState } from './button-no-state';

export class ButtonsItemEdit {
  private _buttons: ButtonNoState[];
  constructor() {
    this._buttons = [];
  }

  createButton(content: string) {
    const item = new ButtonNoState();
    item.addContent(content);
    this._buttons.push(item);
    return item;
  }

  get element() {
    return this._buttons;
  }
}

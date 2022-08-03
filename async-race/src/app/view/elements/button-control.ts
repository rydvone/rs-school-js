import { Button } from './button';

const TEMP = 'A';

export class ButtonControl extends Button {
  private _content: string;
  constructor(content: string) {
    super();
    this._content = content;
    this.element.textContent = this._content;
    this.checkSelected();
  }

  checkSelected() {
    if (TEMP === this._content) {
      // this.element.disabled = true;
    } else {
      this.addClass();
    }
  }
}

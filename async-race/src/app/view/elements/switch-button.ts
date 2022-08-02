import { Button } from './button';
// import { TFuncMouse } from '../../types/func';

const TEMP = 'to Winner';

export class SwitchButton extends Button {
  private _content: string;
  constructor(content: string) {
    super();
    this._content = content;
    this.element.textContent = this._content;
    this.checkSelected();
    // this.click(this.clickHandler.bind(this));
  }

  checkSelected() {
    if (TEMP === this._content) {
      this.element.disabled = true;
      console.log('truesss');
    } else {
      this.addClass();
    }
  }

  // clickHandler() {
  //   if (this.containsClass()) {
  //     console.log('change state to cCONTENT and rewrite page');
  //     this.element.disabled = true;
  //   }
  //   this.toggleClass();
  // }
}

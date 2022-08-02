import { Button } from './button';
// import { TFuncMouse } from '../../types/func';

const ELEMENT_CLASS_ADD = 'button_nostate';

export class ButtonNoState extends Button {
  // private _content: string;
  constructor() {
    super();
    this.element.classList.add(ELEMENT_CLASS_ADD);
  }
}

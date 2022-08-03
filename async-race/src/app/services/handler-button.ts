import { buttonEditEdit } from '../view/garage/page-garage';

export class HandlerButton {
  constructor() {
    this.handlerEditEdit();
  }
  handlerEditEdit() {
    const buttonCreate = buttonEditEdit.element.create;
    buttonCreate.click(() => {
      console.log('click create');
    });
  }
}

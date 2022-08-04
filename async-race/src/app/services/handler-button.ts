import { buttonEditEdit } from '../view/garage/page-garage';
import { inputEditCreate, inputEditUpdate } from '../view/garage/edit';

export class HandlerButton {
  constructor() {
    this.handlerEditCreate();
  }

  handlerEditCreate() {
    const inputText = inputEditCreate.text;
    // inputText.click(() => {
    //   console.log('text');
    // });
    const inputColor = inputEditCreate.color;
    inputColor.click(() => {
      console.log('color');
    });
    const buttonCreate = buttonEditEdit.element.create;
    buttonCreate.click(() => {
      console.log('click create');
      console.log('text', inputText.value, 'color', inputColor.value);
    });
  }

  handlerEditUpdate() {
    const inputText = inputEditUpdate.text;
    // inputText.click(() => {
    //   console.log(inputText.value);
    // });
    const inputColor = inputEditUpdate.color;
    // inputColor.click(() => {
    //   console.log(inputColor.value);
    // });
    const button = buttonEditEdit.element.update;
    button.click(() => {
      console.log('text', inputText.value, 'color', inputColor.value);
    });
  }
}

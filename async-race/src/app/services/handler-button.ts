import { buttonEditEdit, itemsComponent } from '../view/garage/page-garage';
import { buttonEditControl, inputEditCreate, inputEditUpdate } from '../view/garage/edit';
import { StorageItem, StorageItems } from '../storage/storage-item';
import { randomizer } from './services';

export class HandlerButton {
  constructor() {
    this.handlerEditCreate();
    this.handlerEditUpdate();
    this.handlerEditGenerator();
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
      StorageItem.name = inputText.value;
      StorageItem.color = inputColor.value;
      StorageItems.push({ ...StorageItem });
      itemsComponent.drawItems(StorageItems);
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

  handlerEditGenerator() {
    const button = buttonEditControl.element.generator;
    button.click(() => {
      console.log('generator random 100');
      const itemArr = randomizer.generatorRandom();
      console.log(itemArr);
    });
  }
}

import { IButtonsStore } from '../types/buttons-store-types';
import { buttonSwitch } from '../view/pages/switch';
import { pageRenderComponent } from '../view/view';
// import { buttonEditControl, inputEditCreate, inputEditUpdate } from '../view/garage/edit';
// import { StorageItem, StorageItems } from '../storage/storage-item';
// import { randomizer } from './services';

export class HandlerSwitch {
  constructor() {
    this.handler();
  }

  selected(key: string, store: IButtonsStore) {
    Object.keys(store).forEach((el) => {
      store[el].removeClassSelected();
      if (key === el) {
        store[el].addClassSelected();
      }
    });
  }

  handler() {
    const itemKey = Object.keys(buttonSwitch);

    const item = buttonSwitch[itemKey[0]];
    item.click(() => {
      console.log('click', itemKey[0]);
      this.selected(itemKey[0], buttonSwitch);
      pageRenderComponent.visualPage(itemKey[0]);
    });

    const itemAdd = buttonSwitch[itemKey[1]];
    itemAdd.click(() => {
      console.log('click', itemKey[0]);
      this.selected(itemKey[1], buttonSwitch);
      pageRenderComponent.visualPage(itemKey[1]);
      // console.log('text', inputText.value, 'color', inputColor.value);
      // StorageItem.name = inputText.value;
      // StorageItem.color = inputColor.value;
      // StorageItems.push({ ...StorageItem });
      // itemsComponent.drawItems(StorageItems);
    });
  }

  // handlerEditGenerator() {
  //   const button = buttonEditControl.element.generator;
  //   button.click(() => {
  //     console.log('generator random 100');
  //     const itemArr = randomizer.generatorRandom();
  //     console.log(itemArr);
  //   });
  // }
}

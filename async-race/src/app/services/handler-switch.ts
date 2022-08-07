import { IButtonsStore } from '../types/buttons-store-types';
import { buttonSwitch } from '../view/pages/switch';
import { pageRenderComponent } from '../view/view';

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
    });
  }
}

import { buttonEditEdit } from '../view/garage/page-garage';
import { buttonEditControl, inputEditCreate, inputEditUpdate } from '../view/garage/edit';
import { storage, StorageItemUpdate } from '../storage/storage';
import { apiGarage, apiWinners, randomizer } from './services';
import { IObjString } from '../types/storage-types';

export class HandlerEdit {
  constructor() {
    this.handlerEditCreate();
    this.handlerEditUpdate();
    this.handlerEditGenerator();
  }

  handlerEditCreate() {
    const inputText = inputEditCreate.text;
    const inputColor = inputEditCreate.color;
    const buttonCreate = buttonEditEdit.element.create;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    buttonCreate.click(async () => {
      const obj: IObjString = {
        name: inputText.value,
        color: inputColor.value,
      };
      await apiGarage.createCar(obj);
      await apiGarage.getCars(storage.carsPage);
    });
  }

  handlerEditUpdate() {
    const button = buttonEditEdit.element.update;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    button.click(async () => {
      const obj: IObjString = {
        name: inputEditUpdate.text.value,
        color: inputEditUpdate.color.value,
      };

      await apiGarage.updateCar(StorageItemUpdate.id, obj);
      await apiGarage.getCars(storage.carsPage);
      await apiWinners.updateStateWinners();
    });
  }

  handlerEditGenerator() {
    const button = buttonEditControl.element.generator;

    button.click(() => {
      const itemArr = randomizer.generatorRandom();
      itemArr.forEach((item) => {
        const obj: IObjString = {
          name: item[0],
          color: item[1],
        };
        apiGarage.createCar(obj).catch((err) => console.log(err));
      });
      apiGarage.getCars(storage.carsPage).catch((err) => console.log(err));
    });
  }
}

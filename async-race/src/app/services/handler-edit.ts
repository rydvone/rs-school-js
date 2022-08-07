import { buttonEditEdit } from '../view/garage/page-garage';
// import { buttonEditEdit, editComponent, itemsComponent } from '../view/garage/page-garage';
import { buttonEditControl, inputEditCreate, inputEditUpdate } from '../view/garage/edit';
import { Storage, StorageItemUpdate } from '../storage/storage';
import { api, randomizer } from './services';
// import { api, filter, randomizer } from './services';
import { IObjString } from '../types/storage-types';

export class HandlerEdit {
  private _bodyCar: IObjString;
  constructor() {
    this.handlerEditCreate();
    this.handlerEditUpdate();
    this.handlerEditGenerator();
    this._bodyCar = {
      name: '',
      color: '',
    };
  }

  handlerEditCreate() {
    const inputText = inputEditCreate.text;
    const inputColor = inputEditCreate.color;
    const buttonCreate = buttonEditEdit.element.create;

    buttonCreate.click(() => {
      const obj: IObjString = {
        name: inputText.value,
        color: inputColor.value,
      };
      const crCar = async () => await api.createCar(obj);
      crCar().catch((err) => console.log(err));
      const gCars = async () => await api.getCars(Storage.carsPage);
      gCars().catch((err) => console.log(err));
    });
  }

  handlerEditUpdate() {
    const button = buttonEditEdit.element.update;

    button.click(() => {
      const obj: IObjString = {
        name: inputEditUpdate.text.value,
        color: inputEditUpdate.color.value,
      };

      const crCar = async () => await api.updateCar(StorageItemUpdate.id, obj);
      crCar().catch((err) => console.log(err));
      const gCars = async () => await api.getCars(Storage.carsPage);
      gCars().catch((err) => console.log(err));
      // const data = filter.updateItem(StorageItemUpdate);
      // itemsComponent.drawItems(data);
    });
  }

  handlerEditGenerator() {
    const button = buttonEditControl.element.generator;

    button.click(() => {
      console.log('generator random 100');
      const itemArr = randomizer.generatorRandom();
      console.log(itemArr);
      itemArr.forEach((item) => {
        const obj: IObjString = {
          name: item[0],
          color: item[1],
        };
        const crCar = async () => await api.createCar(obj);
        crCar().catch((err) => console.log(err));
      });
      const gCars = async () => await api.getCars(Storage.carsPage);
      gCars().catch((err) => console.log(err));
    });

    // button.click(() => async (): Promise<void> => {
    //   console.log('generator random 100');
    //   try {
    //     const itemArr = randomizer.generatorRandom();
    //     console.log(itemArr);
    //     const stateGarageS = await api.getCars(1);
    //     console.log('state');
    //     console.log(stateGarageS);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
  }
}

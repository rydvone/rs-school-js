import { buttonEditEdit, itemsComponent } from '../view/garage/page-garage';
import { buttonEditControl } from '../view/garage/edit';
import { storage } from '../storage/storage';
import { apiWinners, raceCars } from './services';
import { popup } from '../view/pages/page-template';
import { IStartDrive, IStorageItem } from '../types/storage-types';

const INACTIVE = 'inactive';

export class HandlerControl {
  constructor() {
    this.handler();
  }

  inactiveComponent() {
    buttonEditEdit.element.create.element.classList.add(INACTIVE);
    buttonEditEdit.element.update.element.classList.add(INACTIVE);
    buttonEditControl.element.generator.element.classList.add(INACTIVE);
    buttonEditControl.element.start.element.classList.add(INACTIVE);

    buttonEditControl.element.stop.element.classList.remove(INACTIVE);

    itemsComponent.elements.forEach((el) => {
      el.itemControl.element.classList.add(INACTIVE);
      el.itemEdit.itemEditButtons.classList.add(INACTIVE);
    });
  }

  activeComponent() {
    buttonEditEdit.element.create.element.classList.remove(INACTIVE);
    buttonEditEdit.element.update.element.classList.remove(INACTIVE);
    buttonEditControl.element.generator.element.classList.remove(INACTIVE);

    itemsComponent.elements.forEach((el) => {
      el.itemControl.element.classList.remove(INACTIVE);
      el.itemEdit.itemEditButtons.classList.remove(INACTIVE);
    });
  }
  handler() {
    const startRace = buttonEditControl.element.start;
    const stopRace = buttonEditControl.element.stop;
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    startRace.click(async () => {
      try {
        this.inactiveComponent();

        let ids = storage.cars.map(({ id }) => id);
        const promises = storage.cars.map(({ id }) => raceCars.startDrive(id));
        let winner = await Promise.race(promises);

        let badIndex: number;
        let restPromises: Promise<IStartDrive>[] = [];

        while (!winner.success) {
          badIndex = ids.findIndex((ind) => ind === winner.id);
          restPromises = [
            ...promises.slice(0, badIndex),
            ...promises.slice(badIndex + 1, promises.length),
          ];
          ids = [...ids.slice(0, badIndex), ...ids.slice(badIndex + 1, ids.length)];
          winner = await Promise.race(restPromises);
        }

        winner.time = Number((winner.time / 1000).toFixed(2));
        const { name } = storage.cars.find((el) => el.id === winner.id) as IStorageItem;
        popup.innerText(`Winner: ${name} with ${winner.time}s`);
        popup.addClass();

        this.activeComponent();
        await apiWinners.saveWinner(winner.id, winner.time);
        await apiWinners.updateStateWinners();
      } catch (error) {
        console.log(error);
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    stopRace.click(() => {
      storage.cars.map(({ id }) => raceCars.stopDrive(id));
      // await Promise.all(promises);
      buttonEditControl.element.stop.element.classList.add(INACTIVE);
      buttonEditControl.element.start.element.classList.remove(INACTIVE);
    });
  }
}

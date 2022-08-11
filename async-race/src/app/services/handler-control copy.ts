import { buttonEditEdit, itemsComponent } from '../view/garage/page-garage';
import { buttonEditControl } from '../view/garage/edit';
import { storage } from '../storage/storage';
import { apiWinners, raceCars } from './services';
import { popup } from '../view/pages/page-template';
import { IStartDrive, IStorageItem } from '../types/storage-types';
import { TFuncRace } from '../types/func-types';

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

  async raceAll(promises: Promise<IStartDrive>[], ids: number[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { success, id, time } = await Promise.race(promises);
    if (!success) {
      const failedIndex = ids.findIndex((ind) => (ind = id));
      const restPromises = [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        ...promises.slice(0, failedIndex),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        ...promises.slice(failedIndex + 1, promises.length),
      ];
      const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return this.raceAll(restPromises, restIds);
    }

    return { ...storage.cars.find((el) => el.id === id), time: Number((time / 1000).toFixed(2)) };
  }

  handler() {
    const startRace = buttonEditControl.element.start;
    const stopRace = buttonEditControl.element.stop;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    startRace.click(async () => {
      try {
        this.inactiveComponent();

        const ids = storage.cars.map(({ id }) => id);
        const promises = storage.cars.map(({ id }) => raceCars.startDrive(id));

        const winner = (await this.raceAll(promises, ids)) as IStartDrive;

        winner.time = Number((winner.time / 1000).toFixed(2));
        const { name } = storage.cars.find((el) => el.id === winner.id) as IStorageItem;

        popup.innerText(`Winner: ${name} with ${winner.time}s`);
        popup.addClass();

        this.activeComponent();
        await apiWinners.saveWinner(winner.id, winner.time);
        await apiWinners.updateStateWinners();
      } catch (err) {
        console.log(err);
      }

      // let winner = await Promise.race(promises);

      // let badIndex: number;
      // let restPromises: Promise<IStartDrive>[] = [];

      // while (!winner.success) {
      //   badIndex = ids.findIndex((ind) => ind === winner.id);
      //   restPromises = [
      //     ...promises.slice(0, badIndex),
      //     ...promises.slice(badIndex + 1, promises.length),
      //   ];
      //   ids = [...ids.slice(0, badIndex), ...ids.slice(badIndex + 1, ids.length)];
      //   winner = await Promise.race(restPromises);
      // }
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

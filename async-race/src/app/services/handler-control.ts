import { buttonEditEdit, itemsComponent } from '../view/garage/page-garage';
import { buttonEditControl } from '../view/garage/edit';
import { storage } from '../storage/storage';
import { apiWinners, raceCars } from './services';
import { popup } from '../view/pages/page-template';
import { IStorageItem } from '../types/storage-types';

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

        const ids = storage.cars.map(({ id }) => id);
        const promises = ids.map((id) => ({ id, car: raceCars.startDrive(id) }));

        let winner = await Promise.race(promises.map(({ car }) => car));
        let racingCars = [...promises];
        for (let i = 0; i < promises.length && !winner.success; i += 1) {
          racingCars = racingCars.filter(({ id }) => id !== winner.id);
          winner = await Promise.race(racingCars.map(({ car }) => car));
        }
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
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    stopRace.click(() => {
      storage.cars.map(({ id }) => raceCars.stopDrive(id));
      buttonEditControl.element.stop.element.classList.add(INACTIVE);
      buttonEditControl.element.start.element.classList.remove(INACTIVE);
    });
  }
}

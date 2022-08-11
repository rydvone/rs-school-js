import { buttonEditEdit, itemsComponent } from '../view/garage/page-garage';
import { buttonEditControl } from '../view/garage/edit';
import { storage } from '../storage/storage';
import { apiWinners, raceCars } from './services';
import { popup } from '../view/pages/page-template';
import { IStorageItem } from '../types/storage-types';
// import { IStartDrive } from '../types/storage-types';
// import { raceCars } from './services';

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
    buttonEditControl.element.start.element.classList.remove(INACTIVE);

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
      this.inactiveComponent();

      const promises = storage.cars.map(({ id }) => raceCars.startDrive(id));
      const winner = await Promise.race(promises);
      winner.time = Number((winner.time / 1000).toFixed(2));
      console.log('winner = ', winner);
      const { name } = storage.cars.find((el) => el.id === winner.id) as IStorageItem;
      popup.innerText(`Winner: ${name} with ${winner.time}s`);
      popup.addClass();

      this.activeComponent();
      await apiWinners.saveWinner(winner.id, winner.time);
      await apiWinners.updateStateWinners();
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    stopRace.click(async () => {
      const promises = storage.cars.map(({ id }) => raceCars.stopDrive(id));
      await Promise.allSettled(promises);
      buttonEditControl.element.stop.element.classList.add(INACTIVE);
    });

    // const winner = raceCars.race(raceCars.startDrive.bind(this));
    //     for (const item of itemKey) {
    //       buttonSort[item].addEventListener('click', () => {
    //         console.log();
    //         itemKey.forEach((el) => {
    //           buttonSort[el].classList.remove('selected');
    //           buttonSort[el].textContent = `${TableHeaderConst[el]}`;
    //         });
    //         storage.sortBy = item;
    //         storage.sortOrder = storage.sortOrder === ESortOrder.up ? ESortOrder.down : ESortOrder.up;
    //         buttonSort[item].classList.add('selected');
    //         buttonSort[item].innerHTML = `${TableHeaderConst[item]} ${
    //           ESortOrderView[storage.sortOrder]
    //         }`;
    //         apiWinners.updateStateWinners().catch((err) => console.log(err));
    //       });
    //     }
  }

  // handler() {
  //   const itemKey = Object.keys(buttonSort) as ESortBy[];
  //   for (const item of itemKey) {
  //     buttonSort[item].addEventListener('click', () => {
  //       console.log();
  //       itemKey.forEach((el) => {
  //         buttonSort[el].classList.remove('selected');
  //         buttonSort[el].textContent = `${TableHeaderConst[el]}`;
  //       });

  //       storage.sortBy = item;
  //       storage.sortOrder = storage.sortOrder === ESortOrder.up ? ESortOrder.down : ESortOrder.up;

  //       buttonSort[item].classList.add('selected');
  //       buttonSort[item].innerHTML = `${TableHeaderConst[item]} ${
  //         ESortOrderView[storage.sortOrder]
  //       }`;

  //       apiWinners.updateStateWinners().catch((err) => console.log(err));
  //     });
  //   }
  // }
}

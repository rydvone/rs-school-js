import { buttonEditEdit, itemsComponent } from '../view/garage/page-garage';

import { buttonEditControl } from '../view/garage/edit';

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
    startRace.click(() => {
      this.inactiveComponent();
      setTimeout(() => {
        this.activeComponent();
      }, 2000);
    });
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

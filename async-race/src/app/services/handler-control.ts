// // import { TableHeaderConst, ESortOrderView } from '../const/winners-table';
// // import { storage } from '../storage/storage';
// // import { ESortBy, ESortOrder } from '../types/storage-types';
// // import { buttonSort } from '../view/winners/table';
// // import { apiWinners } from './services';

import { itemControlButtons } from '../view/garage/item-control';

export class HandlerControl {
  constructor() {
    this.handler();
  }

  handler() {
    const itemKey = Object.keys(itemControlButtons);
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

import { storage } from '../storage/storage';
import { buttonPaginationGarage, buttonPaginationWinners } from '../view/pages/pagination';
import { apiGarage, apiWinners } from './services';

export class HandlerPagination {
  constructor() {
    this.handler();
  }

  handler() {
    const itemKey = Object.keys(buttonPaginationGarage);
    const itemKeyAdd = Object.keys(buttonPaginationWinners);

    const item = buttonPaginationGarage[itemKey[0]];
    item.click(() => {
      storage.carsPage -= 1;
      apiGarage.getCars(storage.carsPage).catch((err) => console.log(err));
    });

    const itemAdd = buttonPaginationGarage[itemKey[1]];
    itemAdd.click(() => {
      storage.carsPage += 1;
      apiGarage.getCars(storage.carsPage).catch((err) => console.log(err));
    });

    const itemWinners = buttonPaginationWinners[itemKeyAdd[0]];
    itemWinners.click(() => {
      storage.winnersPage -= 1;
      apiWinners
        .getWinners(storage.winnersPage, storage.sortBy, storage.sortOrder)
        .catch((err) => console.log(err));
    });

    const itemWinnersAdd = buttonPaginationWinners[itemKeyAdd[1]];
    itemWinnersAdd.click(() => {
      storage.winnersPage += 1;
      apiWinners
        .getWinners(storage.winnersPage, storage.sortBy, storage.sortOrder)
        .catch((err) => console.log(err));
    });
  }
}

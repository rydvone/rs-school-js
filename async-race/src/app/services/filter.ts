import { storage } from '../storage/storage';
import { IStorageItem } from '../types/storage-types';
import { buttonPaginationGarage, buttonPaginationWinners } from '../view/pages/pagination';

const INACTIVE_CLASS = 'inactive';

export class Filter {
  updateItem(data: IStorageItem) {
    const item = storage.cars.map((el) => {
      if (el.id === data.id) {
        return data;
      }
      return el;
    });
    return item;
  }

  selectedPaginationGarage() {
    if (storage.carsPage * 7 < storage.carsCount) {
      buttonPaginationGarage.next.element.classList.remove(INACTIVE_CLASS);
    } else {
      buttonPaginationGarage.next.element.classList.add(INACTIVE_CLASS);
    }
    if (storage.carsPage > 1) {
      buttonPaginationGarage.prev.element.classList.remove(INACTIVE_CLASS);
    } else {
      buttonPaginationGarage.prev.element.classList.add(INACTIVE_CLASS);
    }
  }

  selectedPaginationWinners() {
    if (storage.winnersPage * 10 < storage.winnersCount) {
      buttonPaginationWinners.next.element.classList.remove(INACTIVE_CLASS);
    } else {
      buttonPaginationWinners.next.element.classList.add(INACTIVE_CLASS);
    }
    if (storage.winnersPage > 1) {
      buttonPaginationWinners.prev.element.classList.remove(INACTIVE_CLASS);
    } else {
      buttonPaginationWinners.prev.element.classList.add(INACTIVE_CLASS);
    }
  }
}

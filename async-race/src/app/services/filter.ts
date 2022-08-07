import { Storage } from '../storage/storage';
import { IStorageItem } from '../types/storage-types';

export class Filter {
  updateItem(data: IStorageItem) {
    const item = Storage.cars.map((el) => {
      if (el.id === data.id) {
        return data;
      }
      return el;
    });
    return item;
  }
}

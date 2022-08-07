import { ESortBy, EView, IItemWiner, IStorage } from '../types/storage-types';
import { IStorageItem } from '../types/storage-types';

export const StorageItems: IStorageItem[] = [];

export const StorageItem: IStorageItem = {
  name: '',
  color: '#c0c0c0',
  id: 9999,
};

export const StorageItemUpdate: IStorageItem = {
  name: '',
  color: '#c0c0c0',
  id: -1,
};

export const ItemCar: IItemWiner = {
  title: 'car cool',
  color: '#c0c0c0',
  winnerCount: 0,
  timeBest: 0,
  id: 9999,
};

export const ItemsCar: IItemWiner[] = [];

export const Storage: IStorage = {
  carsPage: 1,
  cars: [],
  carsCount: 0,
  winnersPage: 1,
  winners: [],
  winnersCount: 0,
  animation: [],
  view: EView.garage,
  sortBy: ESortBy.time,
  sortOrder: null,
};

import {
  ESortBy,
  ESortOrder,
  EView,
  IGetWinners,
  IItemWinner,
  IStorage,
  ITableWinners,
} from '../types/storage-types';
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

export const ItemCar: IItemWinner = {
  title: 'car cool',
  color: '#c0c0c0',
  winnerCount: 0,
  timeBest: 0,
  id: 9999,
};

export const ItemsCar: IItemWinner[] = [];

export const storage: IStorage = {
  carsPage: 1,
  cars: [],
  carsCount: 0,
  winnersPage: 1,
  winners: [],
  winnersCount: 0,
  animation: [],
  view: EView.garage,
  sortBy: ESortBy.id,
  sortOrder: ESortOrder.up,
};

export const pageGetWinners: IGetWinners = {
  page: 1,
  limit: 10,
  sort: 'id',
  order: 'ASC',
};

export const tableWinners: ITableWinners[] = [];

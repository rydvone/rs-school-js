import {
  ESortBy,
  ESortOrder,
  EView,
  IGetWinners,
  IItemWinner,
  IStorage,
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

export const tableWinners: ItableWinners = {
  number: 1,
  color: '#c0c0c0',
  title: 'Car Name',
  wins: -1,
  time: -1,
  id: -1,
};

export interface ItableWinners {
  number: number;
  color: string;
  title: string;
  wins: number;
  time: number;
  id: number;
}

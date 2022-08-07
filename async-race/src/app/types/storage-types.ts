export interface IStorage {
  carsPage: number;
  cars: IStorageItem[];
  carsCount: number;
  winnersPage: number;
  winners: IWinners[];
  winnersCount: number;
  animation: number[];
  view: EView;
  sortBy: 'time';
  sortOrder: null;
}

export interface IStorageItem {
  name: string;
  color: string;
  id: number;
}

export interface IObjString {
  [k: string]: string;
}
export interface IGetCars {
  items: IStorageItem[];
  count: string | null;
}

export enum EView {
  garage = 'garage',
  winner = 'winner',
}

export enum ESortBy {
  time = 'time',
  count = 'count win',
}

export enum ESortOrder {
  up = 'up',
  down = 'down',
}

export interface IItemWiner {
  title: string;
  color: string;
  winnerCount: number;
  timeBest: number;
  id: number;
}

interface IWinners {
  [k: string]: number;
}

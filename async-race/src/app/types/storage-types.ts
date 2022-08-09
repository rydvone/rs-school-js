export interface IStorage {
  carsPage: number;
  cars: IStorageItem[];
  carsCount: number;
  winnersPage: number;
  winners: IWinners[];
  winnersCount: number;
  animation: number[];
  view: EView;
  sortBy: ESortBy;
  sortOrder: ESortOrder;
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
  id = 'id',
  count = 'wins',
  time = 'time',
}

export enum ESortOrder {
  up = 'ASC',
  down = 'DESC',
}

export interface IItemWinner {
  title: string;
  color: string;
  winnerCount: number;
  timeBest: number;
  id: number;
}

export interface IWinners {
  [k: string]: number;
}

export interface IGetWinners {
  page: number;
  limit: number;
  sort: string;
  order: string;
}

export interface IStartDrive {
  velocity: number;
  distance: number;
}

// export interface IGetWinners {
//   page: number;
//   limit: number;
//   sort: 'id' | ' wins' | 'time';
//   order: 'ASC' | 'DESC';
// }

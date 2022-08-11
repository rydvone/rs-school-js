export interface IStorage {
  carsPage: number;
  cars: IStorageItem[];
  carsCount: number;
  winnersPage: number;
  winners: ITableWinners[];
  winnersCount: number;
  animation: { [k: string]: number }[];
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
  up = 'asc',
  down = 'desc',
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

export interface ITableWinners {
  color: string;
  name: string;
  wins: number;
  time: number;
  id: number;
}

export type KeyTableWinners = keyof ITableWinners;

export interface IStartEngine {
  velocity: number;
  distance: number;
}

// export interface IGetWinners {
//   page: number;
//   limit: number;
//   sort: 'id' | ' wins' | 'time';
//   order: 'ASC' | 'DESC';
// }

export interface IStartDrive {
  success: boolean;
  id: number;
  time: number;
}

export interface IFuncRace {
  carsR: IStorageItem;
  timeR: number;
}

export interface IStorage {
  carsPage: number;
  cars: number[];
  carsCount: number;
  winnersPage: number;
  winners: number[];
  winnersCount: number;
  animation: {};
  view: EView;
  sortBy: 'time';
  sortOrder: null;
}

export enum EView {
  garage = 'garage',
  winner = 'winner',
}

export enum ESortBy {
  time = 'time',
  count = 'count win',
}

export interface IItemCar {
  title: string,
  color: string,
  winnerCount: number,
  timeBest: number,
  id: number,
}
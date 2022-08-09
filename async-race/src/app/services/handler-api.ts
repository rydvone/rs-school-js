// import { IGetCars } from '../types/storage-types';
// import { storage } from '../storage/storage';
import { apiGarage, apiWinners } from './services';

export class HandlerApi {
  constructor() {
    this.handler();
  }

  handler() {
    apiGarage.getCars(1).catch((err) => console.log(err));
    apiWinners.updateStateWinners().catch((err) => console.log(err));
  }
}

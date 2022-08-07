// import { IGetCars } from '../types/storage-types';
import { api } from './services';

// type TPromise = () => Promise<void>;

export class HandlerApi {
  constructor() {
    this.handler();
  }

  handler() {
    const t = async () => await api.getCars(1);
    t().catch((err) => console.log(err));
  }
}

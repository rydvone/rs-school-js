// import { FilterStorage } from '../types/filter-storage';
// import data from '../../assets/data/storage.json';

interface LocalStorage {
  [key: string]: string;
  // brand: string[];
  // product: string[];
  // country: string[];
  // type: string[];
  // rangeQuantity: string[];
  // rangeWeight: string[];
  // cartCounter: string[];
  // search: string[];
  // sort: string[];
}

export const LOCAL_STORAGE: LocalStorage = {
  brand: '',
  product: '',
  country: '',
  type: '',
  rangeQuantity: '',
  rangeWeight: '',
  cartCounter: '',
  search: '',
  sort: '',
};
export class Storage {
  private _data: { [key: string]: string };
  constructor() {
    this._data = LOCAL_STORAGE;
    this._init();
  }

  private _init() {
    window.addEventListener('load', () => {
      return Object.keys(this._data).map((key) => {
        if (localStorage.getItem(key) === null) {
          this._data[key] = '';
        } else {
          this._data[key] = localStorage.getItem(key) || '';
        }
      });
    });
    window.addEventListener('beforeunload', () => {
      Object.entries(this._data).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
    });
  }
}

import { FilterStorage } from '../types/filter-storage';
import data from '../../assets/data/storage.json';
export class Storage {
  // private _state: boolean;
  // private _value: string | null;
  // private _key: string;
  // private _data: { [key: string]: string };
  // constructor(data: { [key: string]: string }) {
  // constructor() {
  // this._data = data;
  // this._key = key;
  // this._state = false;
  // this._value = null;
  // this.setData(this._key);
  // }
  private _data: FilterStorage;
  constructor() {
    this._data = data;
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
        localStorage.setItem(key, value);
      });
    });
  }
}

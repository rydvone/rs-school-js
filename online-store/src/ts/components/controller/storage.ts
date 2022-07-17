import { FilterStorage } from '../../types/filter-storage';

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

  // private _init() {
  //   window.addEventListener('load', this.getData);
  //   window.addEventListener('beforeunload', this.setData);
  // }

  getData(data: FilterStorage) {
    return Object.entries(data).map(([key, value]) => {
      if (localStorage.getItem(key) === null) {
        return (data[key] = '');
      } else {
        return (data[key] = localStorage.getItem(key) || '');
      }
    });
  }

  setData(data: FilterStorage) {
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }
}

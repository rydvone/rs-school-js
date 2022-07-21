// import { FilterStorage } from '../types/filter-storage';
// import data from '../../assets/data/storage.json';

import { drawProducts } from '../components/view/view';
import { AppState } from './app-state';

interface LocalStorage {
  [key: string]: string[];
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

// export const LOCAL_STORAGE: LocalStorage = {
//   brand: '',
//   product: '',
//   country: '',
//   type: '',
//   rangeQuantity: '',
//   rangeWeight: '',
//   cartCounter: '',
//   search: '',
//   sort: '',
//   selected: '',
// };

export const LOCAL_STORAGE: LocalStorage = {
  brand: [],
  product: [],
  country: [],
  type: [],
  rangeQuantity: [],
  rangeWeight: [],
  cartCounter: [],
  search: [],
  sort: [],
  selected: [],
};

export class Storage {
  private _data: { [key: string]: string[] };
  constructor() {
    this._data = LOCAL_STORAGE;
    this._init();
  }

  private _init() {
    window.addEventListener('load', () => {
      Object.keys(this._data).map((key) => {
        if (localStorage.getItem(key) === null) {
          this._data[key] = [];
        } else {
          console.log(key);

          this._data[key].push(localStorage.getItem(key) || '');
        }
      });
      this.setStorageLoad();
    });
    window.addEventListener('beforeunload', () => {
      this.getStorageBefore();
      Object.entries(this._data).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
    });
  }

  // export class Storage {
  //     // private _data: { [key: string]: string[] };
  //     _s: string[];
  //     constructor() {
  //       this._s = []
  //       // this._data = LOCAL_STORAGE;
  //       this._init();
  //     }
  // private _init() {
  //   window.addEventListener('load', () => {
  //     if ('selected' === null) {
  //       this._s = [];
  //     } else {
  //       console.log(this._s);

  //       this._s.push(localStorage.getItem(key) || '');
  //     }
  //     this.setStorageLoad();
  //   });
  //   window.addEventListener('beforeunload', () => {
  //     this.getStorageBefore();
  //     Object.entries(this._data).forEach(([key, value]) => {
  //       localStorage.setItem(key, JSON.stringify(value));
  //     });
  //   });
  // }

  getStorageBefore() {
    this._data.selected = AppState.productSelected.slice();
  }

  setStorageLoad() {
    AppState.productSelected = this._data.selected.slice();
    drawProducts.appendTo(AppState.displayProduct);
  }
}

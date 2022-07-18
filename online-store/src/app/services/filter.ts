import { Data } from '../types/data';
import { AppState } from './app-state';
import { drawProducts } from '../components/view/view';

const ARRAY_SORT_VALUE = [
  'name-up',
  'name-down',
  'price-up',
  'price-down',
  'count-up',
  'count-down',
];

export class Filter {
  private _a: string;
  constructor() {
    this._a = 'a';
  }

  sort(val: string) {
    const objData: Data[] = AppState.displayProduct;
    if (val === ARRAY_SORT_VALUE[0]) {
      objData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (val === ARRAY_SORT_VALUE[1]) {
      objData.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (val === ARRAY_SORT_VALUE[2]) {
      objData.sort((a, b) => Number(a.fields.price) - Number(b.fields.price));
    }
    if (val === ARRAY_SORT_VALUE[3]) {
      objData.sort((a, b) => Number(b.fields.price) - Number(a.fields.price));
    }
    if (val === ARRAY_SORT_VALUE[4]) {
      objData.sort((a, b) => Number(a.fields.count) - Number(b.fields.count));
    }
    if (val === ARRAY_SORT_VALUE[5]) {
      objData.sort((a, b) => Number(b.fields.count) - Number(a.fields.count));
    }

    drawProducts.appendTo(objData);
  }
}

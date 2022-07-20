import { Data } from '../types/data';
import { AppState } from './app-state';
import { drawProducts } from '../components/view/view';
// import { OBJ_SORT_VALUE } from '../components/element/select';

const ARRAY_SORT_VALUE = [
  'name-up',
  'name-down',
  'price-up',
  'price-down',
  'count-up',
  'count-down',
];

export class Filter {
  // private _a: string;
  // constructor() {
  //   this._a = 'a';
  // }
  sort(val: string) {
    const objData: Data[] = AppState.displayProduct;
    if (val === ARRAY_SORT_VALUE[0]) {
      objData.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (val === ARRAY_SORT_VALUE[1]) {
      objData.sort((a, b) => b.name.localeCompare(a.name));
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

  search(val: string) {
    const objData: Data[] = AppState.displayProduct;
    if (val === '') {
      drawProducts.appendTo(objData);
      AppState.displayProduct = objData;
      return 0;
    }

    const search = objData.filter(({ name }) => name.toLowerCase().includes(val.toLowerCase()));
    if (search.length === 0) {
      drawProducts.appendToWrong();
    } else {
      drawProducts.appendTo(search);
    }
    AppState.displayProduct = search;
  }

  rangeQuantity(min: number, max: number) {
    AppState.resetDisplayProduct();
    const objData: Data[] = AppState.displayProduct;
    const range = objData.filter(
      ({ fields }) => parseInt(fields.count) >= min && parseInt(fields.count) <= max
    );
    drawProducts.appendTo(range);
    AppState.displayProduct = range;
  }

  rangeWeight(min: number, max: number) {
    AppState.resetDisplayProduct();
    const objData: Data[] = AppState.displayProduct;
    const range = objData.filter(
      ({ fields }) => parseInt(fields.weight) >= min && parseInt(fields.weight) <= max
    );
    drawProducts.appendTo(range);
    AppState.displayProduct = range;
  }

  type(type: string, val: string) {
    const objData: Data[] = AppState.displayProduct;
    const filter = objData.filter(({ fields }) => fields[type] === val);
    drawProducts.appendTo(filter);
  }
}

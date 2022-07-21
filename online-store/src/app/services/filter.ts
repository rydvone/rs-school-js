import { Data } from '../types/data';
import { AppState } from './app-state';
import { drawProducts } from '../components/view/view';
import { ButtonSelected } from '../types/filter-by-value-interface';

const ARRAY_SORT_VALUE = [
  'name-up',
  'name-down',
  'price-up',
  'price-down',
  'count-up',
  'count-down',
];

export class Filter {
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

    const search = objData.filter(({ name }) => name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    if (search.length === 0) {
      drawProducts.appendToWrong();
    } else {
      drawProducts.appendTo(search);
    }
    // drawProducts.appendTo(search);
    // AppState.displayProduct = search;
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

  filterByType(type: string) {
    // AppState.resetDisplayProduct();
    const objData: Data[] = AppState.displayProduct;
    // const filter = this._multiFilter(objData, AppState.buttonSelected);
    // return objData.filter(item => {
    //   // validates all filter criteria
    //   return filterKeys.every(key => {
    //     // ignores non-function predicates
    //     // if (typeof filters[key] !== 'function') return true;
    //     return filters[key](item[key]);
    //   });
    // });

    const filter = objData.filter(({ fields }) =>
      AppState.buttonSelected[type].includes(fields[type])
    );
    // const filterKeys = Object.keys(AppState.buttonSelected);
    // console.log(AppState.buttonSelected);

    // const filter = objData.filter(({ fields }) => {
    //   filterKeys.some((key) => {
    //     // if (!AppState.buttonSelected[key].length) {
    //     //   return true;
    //     // }
    //     console.log('1', AppState.buttonSelected[key]);
    //     console.log('2', fields[key]);
    //     console.log('3', !!AppState.buttonSelected[key].includes(fields[key]));
    //     return AppState.buttonSelected[key].includes(fields[key]);
    //   });
    // });
    // console.log(filter);
    if (filter.length === 0) {
      drawProducts.appendTo(objData);
    } else {
      drawProducts.appendTo(filter);
    }
  }

  private _multiFilter(products: Data[], filter: ButtonSelected) {
    const filterKeys = Object.keys(filter);
    return products.filter(({ fields }) => {
      filterKeys.every((key) => {
        if (!filter[key].length) {
          return true;
        }
        return filter[key].includes(fields[key]);
      });
    });
  }
}

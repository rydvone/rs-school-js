import { Data } from '../types/data';
import { AppState } from './app-state';
import { drawProducts } from '../components/view/view';
import { ButtonSelected, RangeSelected } from '../types/selected';

const ARRAY_SORT_VALUE = [
  'name-up',
  'name-down',
  'price-up',
  'price-down',
  'count-up',
  'count-down',
];

export class Filter {
  sort(filter: Data[]) {
    const val = AppState.selectSelected;

    if (val === ARRAY_SORT_VALUE[0]) {
      filter.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (val === ARRAY_SORT_VALUE[1]) {
      filter.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (val === ARRAY_SORT_VALUE[2]) {
      filter.sort((a, b) => Number(a.fields.price) - Number(b.fields.price));
    }
    if (val === ARRAY_SORT_VALUE[3]) {
      filter.sort((a, b) => Number(b.fields.price) - Number(a.fields.price));
    }
    if (val === ARRAY_SORT_VALUE[4]) {
      filter.sort((a, b) => Number(a.fields.count) - Number(b.fields.count));
    }
    if (val === ARRAY_SORT_VALUE[5]) {
      filter.sort((a, b) => Number(b.fields.count) - Number(a.fields.count));
    }

    return filter;
  }

  callFilter() {
    const objData: Data[] = AppState.displayProduct;
    const filter = this._multiFilter(
      objData,
      AppState.buttonSelected,
      AppState.rangeSelected,
      AppState.searchSelected
    );
    const filterSort = this.sort(filter);
    drawProducts.appendTo(filterSort);
  }

  private _multiFilter(
    products: Data[],
    filterValue: ButtonSelected,
    filterRange: RangeSelected,
    searchStr: string
  ) {
    const filterValueKeys = Object.keys(filterValue);
    const filterRangeKeys = Object.keys(filterRange);
    return products.filter(({ fields, name }) => {
      return (
        filterValueKeys.every((key) => {
          if (!filterValue[key].length) {
            return true;
          }
          return filterValue[key].includes(fields[key]);
        }) &&
        filterRangeKeys.every((key) => {
          const [min, max] = filterRange[key];
          if (!filterRange[key].length) {
            return true;
          }
          return parseInt(fields[key]) >= min && parseInt(fields[key]) <= max;
        }) &&
        name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
      );
    });
  }
}

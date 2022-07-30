import { Data } from '../types/data';
import data from '../../assets/data/data.json';
import { Filter } from './filter';
import { ButtonSelected, RangeSelected } from '../types/selected';
import { buttonSelectedConstant, rangeSelectedConstant } from '../constants/selected-constant';

export const filterData = new Filter();
export class AppState {
  public static product: Data[] = <Data[]>JSON.parse(JSON.stringify(data));
  public static displayProduct: Data[] = this.product;

  public static productSelected: string[] = [];
  public static selectSelected = '';
  public static searchSelected = '';
  public static buttonSelected: ButtonSelected = buttonSelectedConstant;
  public static rangeSelected: RangeSelected = rangeSelectedConstant;

  public static checkLocalStorage() {
    if (localStorage.product) {
      this.productSelected = <string[]>JSON.parse(localStorage.getItem('product') || '');
    }
    if (localStorage.select) {
      this.selectSelected = <string>JSON.parse(localStorage.getItem('select') || '');
    }
    if (localStorage.search) {
      this.searchSelected = <string>JSON.parse(localStorage.getItem('search') || '');
    }
    if (localStorage.button) {
      this.buttonSelected = <ButtonSelected>JSON.parse(localStorage.getItem('button') || '');
    }
    if (localStorage.range) {
      this.rangeSelected = <RangeSelected>JSON.parse(localStorage.getItem('range') || '');
    }
  }

  public static setLocalStorage() {
    localStorage.setItem('product', JSON.stringify(this.productSelected));
    localStorage.setItem('select', JSON.stringify(this.selectSelected));
    localStorage.setItem('search', JSON.stringify(this.searchSelected));
    localStorage.setItem('range', JSON.stringify(this.rangeSelected));
    localStorage.setItem('button', JSON.stringify(this.buttonSelected));
  }

  public static resetFilterSelected() {
    this.searchSelected = '';
    Object.keys(this.buttonSelected).forEach((key) => (this.buttonSelected[key].length = 0));
    Object.keys(this.rangeSelected).forEach((el) => (this.rangeSelected[el].length = 0));
  }

  public static resetCommonSelected() {
    this.productSelected.length = 0;
    this.selectSelected = '';
    this.searchSelected = '';
    Object.keys(this.buttonSelected).forEach((key) => (this.buttonSelected[key].length = 0));
    Object.keys(this.rangeSelected).forEach((el) => (this.rangeSelected[el].length = 0));
  }

  public static clearLocalStorage() {
    localStorage.clear();
    this.resetCommonSelected();
  }
}

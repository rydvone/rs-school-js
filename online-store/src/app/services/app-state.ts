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
  public static buttonSelected: ButtonSelected = buttonSelectedConstant;
  public static rangeSelected: RangeSelected = rangeSelectedConstant;
  public static searchSelected = '';

  public static resetDisplayProduct() {
    this.displayProduct = <Data[]>JSON.parse(JSON.stringify(this.product));
  }

  public static clearProductSelected() {
    this.productSelected.length = 0;
  }

  public static clearSelectSelected() {
    this.selectSelected = '';
  }

  public static clearSearchSelected() {
    this.searchSelected = '';
  }

  public static clearRangeSelected() {
    Object.keys(this.rangeSelected).forEach((el) => (this.rangeSelected[el].length = 0));
  }

  public static clearButtonSelected() {
    Object.keys(this.buttonSelected).forEach((key) => (this.buttonSelected[key].length = 0));
  }

  public static clearFilterSelected() {
    this.productSelected.length = 0;
  }
}

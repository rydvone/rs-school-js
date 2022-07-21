import { Data } from '../types/data';
import data from '../../assets/data/data.json';
import { Filter } from './filter';
import { ButtonSelected } from '../types/filter-by-value-interface';
import { buttonSelectedConstant } from '../constants/filter-by-value-constant';

export const filterData = new Filter();
export class AppState {
  public static product: Data[] = <Data[]>JSON.parse(JSON.stringify(data));
  public static displayProduct: Data[] = this.product;

  public static productSelected: string[] = [];
  public static buttonSelected: ButtonSelected = buttonSelectedConstant;

  public static resetDisplayProduct() {
    this.displayProduct = <Data[]>JSON.parse(JSON.stringify(this.product));
  }

  public static clearProductSelected() {
    this.productSelected.length = 0;
  }

  public static clearBrandSelected() {
    Object.keys(this.buttonSelected).forEach((key) => (this.buttonSelected[key].length = 0));
  }

  public static clearFilterSelected() {
    this.productSelected.length = 0;
  }
}

import { Data } from '../types/data';
import data from '../../assets/data/data.json';
import { Filter } from './filter';

export const filterData = new Filter();
export class AppState {
  public static product: Data[] = <Data[]>JSON.parse(JSON.stringify(data));
  public static displayProduct: Data[] = this.product;

  public static productSelected: string[] = [];

  public static resetDisplayProduct() {
    this.displayProduct = <Data[]>JSON.parse(JSON.stringify(this.product));
  }

  public static clearProductSelected() {
    this.productSelected.length = 0;
  }

  public static clearFilterSelected() {
    this.productSelected.length = 0;
  }
}

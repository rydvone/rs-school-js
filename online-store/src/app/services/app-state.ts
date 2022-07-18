import { Data } from '../types/data';
import data from '../../assets/data/data.json';
export class AppState {
  // private _data: Data;
  // constructor() {
  //   this._data = data;
  // }
  public static product: Data[] = <Data[]>JSON.parse(JSON.stringify(data));
  public static displayProduct: Data[] = <Data[]>JSON.parse(JSON.stringify(data));

  // public static checkFilter() {
  //   if (filter) {

  //   }
  // }
}

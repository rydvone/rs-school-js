// import { Data } from './data';

interface Data {
  name: string;
  img: string;
  fields: Fields;
  description: string;
  date: string;
  ean: string;
}

interface Fields {
  brand: string;
  type: string;
  product: string;
  weight: string;
  country: string;
  price: string;
  count: string;
}

export class ProductState {
  public name: string;
  public img: string;
  public fields: Fields;
  public description: string;
  public date: string;
  public ean: string;
  private _selected: boolean;

  constructor(product: Data) {
    this.name = product.name;
    this.img = product.img;
    this.fields = product.fields;
    this.description = product.description;
    this.date = product.date;
    this.ean = product.ean;
    this._selected = false;
  }

  set selected(val: boolean) {
    this.selected = val;
  }

  get selected() {
    return this.selected;
  }
}

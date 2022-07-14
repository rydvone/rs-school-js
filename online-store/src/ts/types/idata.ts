export interface IData {
  name: string;
  img: string;
  fields: IFields[];
  date: string;
  ean: string;
}

export interface IFields {
  brand: IBrand;
  type: IType;
  product: IProduct;
  weight: number;
  country: ICountry;
  price: number;
  count: number;
  description: string;
}

enum IBrand {
  MOVENPICK = 'Movenpick',
  DALLMAYR = 'Dallmayr',
  ILLY = 'Illy',
  LAVAZZA = 'Lavazza',
}

enum IType {
  COFFEE = 'Coffee',
  ESPRESSO = 'Espresso',
}

enum IProduct {
  BEANS = 'Coffee beans',
  PODS = 'Coffee pods',
  GROUND = 'Ground coffee',
}

enum ICountry {
  SWITZERLAND = 'Switzerland',
  GERMANY = 'Germany',
  ITALY = 'Italy',
}

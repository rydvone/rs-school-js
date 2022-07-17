export interface FilterStorage {
  [key: string]: string;
}

// export interface FilterStorage {
//   brand: Brand;
//   country: Country;
//   product: Product;
//   espresso: string;
//   count: string;
//   weight: string;
//   search: string;
//   sort: string;
// }

enum Brand {
  EMPTY = '',
  MOVENPICK = 'Movenpick',
  DALLMAYR = 'Dallmayr',
  ILLY = 'Illy',
  LAVAZZA = 'Lavazza',
}

enum Product {
  EMPTY = '',
  BEANS = 'Coffee beans',
  PODS = 'Coffee pods',
  GROUND = 'Ground coffee',
}

enum Country {
  EMPTY = '',
  SWITZERLAND = 'Switzerland',
  GERMANY = 'Germany',
  ITALY = 'Italy',
}

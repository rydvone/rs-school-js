export interface Data {
  name: string;
  img: string;
  fields: { [key: string]: string };
  description: string;
  date: string;
  ean: string;
}

// export interface Fields {
//   brand: Brand;
//   type: Type;
//   product: Product;
//   weight: number;
//   country: Country;
//   price: number;
//   count: number;
//   description: string;
// }

// export interface Fields {
//   brand: string;
//   type: string;
//   product: string;
//   weight: string;
//   country: string;
//   price: string;
//   count: string;
//   description: string;
// }

enum Brand {
  MOVENPICK = 'Movenpick',
  DALLMAYR = 'Dallmayr',
  ILLY = 'Illy',
  LAVAZZA = 'Lavazza',
}

enum Type {
  COFFEE = 'Coffee',
  ESPRESSO = 'Espresso',
}

enum Product {
  BEANS = 'Coffee beans',
  PODS = 'Coffee pods',
  GROUND = 'Ground coffee',
}

enum Country {
  SWITZERLAND = 'Switzerland',
  GERMANY = 'Germany',
  ITALY = 'Italy',
}

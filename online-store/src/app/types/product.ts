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

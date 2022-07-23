export interface FilterByValueInterface {
  brand: string[];
  product: string[];
  country: string[];
  type: string[];
}

export type FilterByValueType = 'brand' | 'product' | 'country' | 'type';

export interface ConvertFilterValue {
  brand: { [key: string]: string };
  product: { [key: string]: string };
  country: { [key: string]: string };
  type: { [key: string]: string };
}

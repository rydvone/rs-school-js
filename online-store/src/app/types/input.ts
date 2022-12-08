export type ElementIdQuantity = 'range-count-from' | 'range-count-to';
export type ElementIdWeight = 'range-weight-from' | 'range-weight-to';
export type InputRangeIdType =
  | 'range-count-from'
  | 'range-count-to'
  | 'range-weight-from'
  | 'range-weight-to';
export type InputRangeType = 'count' | 'weight';

export interface ConvertFilterRangeInterface {
  count: ICount;
  weight: IWeight;
}

export interface ICount {
  min: ECount.min;
  max: ECount.max;
  value: ECount.value;
  step: ECount.step;
  from: string;
  to: string;
  title: string;
}

export interface IWeight {
  min: EWeight.min;
  max: EWeight.max;
  value: EWeight.value;
  step: EWeight.step;
  from: string;
  to: string;
  title: string;
}

export type KeyConvertFilterRange = keyof ConvertFilterRangeInterface;
export type KeyCount = keyof ICount;
export type KeyWeight = keyof IWeight;

enum ECount {
  min = 0,
  max = 50,
  value = 0,
  step = 1,
}

enum EWeight {
  min = 100,
  max = 1000,
  value = 100,
  step = 10,
}

export enum ETitleRangeBlock {
  count = 'Quantity in stock:',
  weight = 'Weight:',
}

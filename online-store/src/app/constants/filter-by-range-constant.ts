import { ConvertFilterRangeInterface } from '../types/input';

export const convertFilterRange: ConvertFilterRangeInterface = {
  count: {
    min: 0,
    max: 50,
    value: 0,
    step: 1,
    from: 'range-count-from',
    to: 'range-count-to',
    title: 'Quantity in stock:',
  },
  weight: {
    min: 100,
    max: 1000,
    value: 100,
    step: 10,
    from: 'range-weight-from',
    to: 'range-weight-to',
    title: 'Weight:',
  },
};

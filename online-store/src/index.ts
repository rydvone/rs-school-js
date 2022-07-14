import './style.css';
import initRangeWeight from './ts/components/filters/range/rangeWeight';

window.onload = () => {
  console.log('Hello, friend.');
  initRangeWeight('#range-count-from', '#range-count-to', '.range-count-start', '.range-count-end');
  initRangeWeight(
    '#range-weight-from',
    '#range-weight-to',
    '.range-weight-start',
    '.range-weight-end'
  );
};

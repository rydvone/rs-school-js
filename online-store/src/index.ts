import './style.css';
import initRangeWeight from './ts/components/filters/range/filterRangeFunc';

window.onload = () => {
  console.log('Hello, friend.');

  function setFocus() {
    const searchIn = document.querySelector('.search') as HTMLInputElement;
    console.log(searchIn);
    searchIn.focus();
  }
  setFocus();

  initRangeWeight('#range-count-from', '#range-count-to', '.range-count-start', '.range-count-end');
  initRangeWeight(
    '#range-weight-from',
    '#range-weight-to',
    '.range-weight-start',
    '.range-weight-end'
  );
};

import './style.css';
import './ts/components/filters/range.css';
import App from './ts/components/app/app';
// import initRangeWeight from './ts/components/filters/range/filterRangeFunc';

window.onload = () => {
  console.log('Hello, friend.');

  // initRangeWeight('#range-count-from', '#range-count-to', '.range-count-start', '.range-count-end');
  // initRangeWeight(
  //   '#range-weight-from',
  //   '#range-weight-to',
  //   '.range-weight-start',
  //   '.range-weight-end'
  // );
  const app = new App();
  app.start();

  function setFocus() {
    const searchIn = document.querySelector('.search') as HTMLInputElement;
    console.log(searchIn);
    searchIn.focus();
  }
  setFocus();
};

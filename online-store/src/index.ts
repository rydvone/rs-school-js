import './style.css';
import './css/range.css';
import App from './app/app';
// import initRangeWeight from './app/filters/filterRangeFunc';

window.onload = () => {
  console.log('Hello, friend.');

  // initRangeWeight('#range-count-from', '#range-count-to', '.range-count-from', '.range-count-to');
  // initRangeWeight(
  //   '#range-weight-from',
  //   '#range-weight-to',
  //   '.range-weight-from',
  //   '.range-weight-to'
  // );
  const app = new App();
  app.start();

  function setFocus() {
    const searchIn = document.querySelector('.search') as HTMLInputElement;
    searchIn.focus();
  }
  setFocus();
};

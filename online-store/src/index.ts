import './style.css';
import './css/range.css';
import App from './app/app';

window.onload = () => {
  console.log('Hello, friend.');

  const app = new App();
  app.start();
};

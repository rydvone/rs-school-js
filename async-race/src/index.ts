import App from './app/app';
import './style.css';

window.onload = () => {
  console.log('Hello, friend.');

  const app = new App();
  app.start();
};

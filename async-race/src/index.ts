import App from './app/app';
import './style.css';

const SCORE_LOG = `
В целом приложение работает исправно. Возможно есть определенные проблемы с отоброжение кнопок и возможностью запустить приложение неправильно.

score = about
---> 25 <--- Basic structure:
---> 50 <--- "Garage" view:
---> 50 <--- Car animation:
---> 30 <--- Race animation:
---> 35 <--- "Winners" view:
`;

window.onload = () => {
  console.log('Hello, friend.');
  console.log(SCORE_LOG);

  const app = new App();
  app.start();
};

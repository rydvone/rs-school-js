import './style.css';
import './css/range.css';
import App from './app/app';
// import initRangeWeight from './app/filters/filterRangeFunc';
const HELLO = `
-------------------------------------------------
Добрый день. Если будет возможность перепроверить работу ближе к окончанию кросс-чека -- это будет просто отлично. Если нет, то ничего страшного. В любом случае Спасибо.
-------------------------------------------------
`;
const SCORE_LOG = `
score = about 95
+10 Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке 
+10 Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине 
+20 Добавление товаров в корзину 
+20 Сортировка
+5 Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, Извините, совпадений не обнаружено
+30 Поиск`;

window.onload = () => {
  console.log('Hello, friend.');
  console.log(HELLO);
  console.log(SCORE_LOG);

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

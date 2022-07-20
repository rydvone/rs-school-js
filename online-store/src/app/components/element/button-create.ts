// import { AppState } from '../../services/app-state';
// import { ElementTemplate } from './element-template';
// import { drawProducts } from '../view/view';

// type Func = (this: void, event: MouseEvent) => void;

// const ELEMENT_NAME = 'button';
// const ELEMENT_NAME_CLASS = 'button';
// const ELEMENT_NAME_CLASS_ADD = 'button_reset';

// export class Button extends ElementTemplate {
//   constructor() {
//     super();
//   }

//   addText(title: string) {
//     this._button.textContent = title;
//   }

//   private _clickCallback() {
//     if (this._title === 'Filters reset' || this._title === 'Common reset') {
//       AppState.resetDisplayProduct();
//       drawProducts.appendTo(AppState.displayProduct);
//     } else this.toggleClass();
//   }

//   click(fn: Func) {
//     this._button.addEventListener('click', fn);
//   }

//   unclick(fn: Func) {
//     this._button.removeEventListener('click', fn);
//   }

//   addClass() {
//     this._button.classList.add('selected');
//   }

//   removeClass() {
//     this._button.classList.remove('selected');
//   }

//   toggleClass() {
//     this._button.classList.toggle('selected');
//   }

//   get element() {
//     return this._button;
//   }
// }

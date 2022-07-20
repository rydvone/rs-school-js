// import { ElementTemplate } from './element-template';
// import { Button } from './button';
// // import { filterByValue } from '../../constants/filter-by-value';
// // import { Func } from '../../types/func';
// export type Func = (this: void, event: MouseEvent) => void;

// const ELEMENT_NAME = 'ul';
// const ELEMENT_NAME_CLASS = 'list-inline';
// const ELEMENT_NAME_ADDITIONAL = 'li';
// const ELEMENT_NAME_CLASS_ADDITIONAL = 'list-inline__item';
// const CATEGORY = 'brand';

// export class ListButtonNew extends ElementTemplate {
//   private _list: HTMLElement;
//   public currentButton: HTMLElement;
//   // private _fn: Func;
//   // private _data: string[];
//   constructor() {
//     super();
//     // this._fn = fn;
//     // this._data = data;
//     this._list = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
//     this.click(this.clickCallback)
//   }

//   appendToList(data: string[]) {
//     // const arrData = data[this._typeName];
//     const fragment: DocumentFragment = document.createDocumentFragment();
//     data.forEach((el) => {
//       const li = this.createHTMLElement(ELEMENT_NAME_ADDITIONAL, ELEMENT_NAME_CLASS_ADDITIONAL);
//       const button = new Button(el);
      
//       // button.click(this._callback.bind(button));
//       li.append(button.element);
//       fragment.append(li);
//     });
//     this._list.append(fragment);
//     return this._list;
//   }

//   get element() {
//     return this._list;
//   }

//   clickCallback() {
//     // this.sort(this._selectElement.value);
//     console.log(this);
//   }

//   click(fn: Func) {
//     this._list.addEventListener('click', fn);
//   }

//   unclick(fn: Func) {
//     this._list.removeEventListener('click', fn);
//   }

// }

// import { ElementTemplate } from './element-template';
// import { Button } from './button';
// import { reset } from '../../constants/reset-button';

// const ELEMENT_NAME = 'ul';
// const ELEMENT_NAME_CLASS = 'list-inline';
// const ELEMENT_NAME_ADDITIONAL = 'li';
// const ELEMENT_NAME_CLASS_ADDITIONAL = 'list-inline__item';

// export class ListButton extends ElementTemplate {
//   private _typeName: string;
//   private _list: HTMLElement;
//   constructor(typeName: string) {
//     super();
//     this._typeName = typeName;
//     this._list = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS);
//     this.appendTo(reset);
//   }

//   appendTo(data: string[]) {
//     // const arrData = data[this._typeName];
//     const fragment: DocumentFragment = document.createDocumentFragment();
//     data.forEach((el) => {
//       const li = this.createHTMLElement(ELEMENT_NAME_ADDITIONAL, ELEMENT_NAME_CLASS_ADDITIONAL);
//       const button = new Button(el);

//       li.append(button.element);
//       fragment.append(li);
//     });
//     this._list.append(fragment);
//   }

//   get element() {
//     return this._list;
//   }
// }

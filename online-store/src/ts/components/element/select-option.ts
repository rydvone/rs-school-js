// import { Select } from './select';
// import { DataOption } from '../../types/data-sort';

// const ELEMENT_NAME = 'option';
// const ELEMENT_NAME_CLASS = 'select__option';

// export class SelectOption extends Select {
//   private _data: IDataOption;
//   constructor(data: IDataOption) {
//     super();
//     this._data = data;
//     this._addList();
//   }

//   private _addList() {
//     const fragment: DocumentFragment = document.createDocumentFragment();
//     Object.entries(this._data).forEach(([key, value]) => {
//       const option = this.createHTMLElement(ELEMENT_NAME, ELEMENT_NAME_CLASS) as HTMLInputElement;
//       option.value = key;
//       option.textContent = value;
//       fragment.appendChild(option);
//     });
//     super.selectElement.appendChild(fragment);
//   }
// }

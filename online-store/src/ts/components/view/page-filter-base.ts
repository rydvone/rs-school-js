// import { ElementTemplate } from '../element/element-template';
// import { InputSearch } from '../element/input-search';
// import { ListButton } from '../element/list-button';
// import { Select } from '../element/select';

// // const ELEMENT_NAME = 'filters__description__block';
// const ELEMENT_NAME_CLASS = 'filters__description__block';
// const ELEMENT_TITLE_CLASS = 'filters__title';
// const BUTTON_TYPE = 'reset';

// export class PageBaseInput extends ElementTemplate {
//   private _filterValue: HTMLElement;
//   private _filterName: string;

//   constructor(filterName: string) {
//     super();
//     this._filterName = filterName;
//     this._filterValue = this.createDiv(ELEMENT_NAME_CLASS);
//     this.appendTo();
//   }

//   appendTo() {
//     const title = this.createDiv(ELEMENT_TITLE_CLASS);
//     const titleToVisual = this._filterName[0].toUpperCase() + this._filterName.slice(1);
//     title.textContent = `${titleToVisual}:`;
//     this._filterValue.append(title);
//     if (this._filterName === 'Search') {
//       const search = new InputSearch();
//       this._filterValue.append(search.appendTo());
//     }
//     if (this._filterName === 'Sort by') {
//       const select = new Select();
//       this._filterValue.append(select.appendTo());
//     }
//     if (this._filterName === 'Reset') {
//       const list = new ListButton(BUTTON_TYPE);
//       this._filterValue.append(list.element);
//     }
//   }

//   getInnerBlock() {
//     return this._filterValue.innerHTML;
//   }

//   get element() {
//     return this._filterValue;
//   }
// }

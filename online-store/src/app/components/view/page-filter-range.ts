// import { ElementTemplate } from '../element/element-template';
// import { InputRangeQuantity } from '../element/input-range-quantity';
// import { ElementIdQuantity, ElementIdWeight } from '../../types/input';
// import { InputRangeWeight } from '../element/input-range-weight';

// const ELEMENT_CLASS = 'filters__description__block';
// const ELEMENT_TITLE_CLASS = 'filters__title';
// const ELEMENT_NAME_CLASS_ADD = 'filters__slider';
// const START_QUANTITY = '0';
// const END_QUANTITY = '50';
// const START_WEIGHT = '100';
// const END_WEIGHT = '1000';
// const QUANTITY_FROM = 'range-count-from';
// const QUANTITY_TO = 'range-count-to';
// const WEIGHT_FROM = 'range-weight-from';
// const WEIGHT_TO = 'range-weight-to';
// const ARRAY_CLASS = [
//   'range-count-start',
//   'range-count-end',
//   'range-weight-start',
//   'range-weight-end',
// ];
// // const ARRAY_CLASS = ['range-count-from', 'range-count-to', 'range-weight-from', 'range-weight-to'];
// const ELEMENT_FORM = 'form';
// const ELEMENT_FORM_CLASS = 'filters__form-range';

// export class PageFilterRange extends ElementTemplate {
//   private _filterValue: HTMLElement;
//   private _filterName: string;

//   constructor(filterName: 'Quantity in stock' | 'Weight') {
//     super();
//     this._filterName = filterName;
//     this._filterValue = this.createDiv(ELEMENT_CLASS);
//     this.appendTo();
//   }

//   appendTo() {
//     const title = this.createDiv(ELEMENT_TITLE_CLASS);
//     title.textContent = `${this._filterName}:`;
//     this._filterValue.append(title);
//     const wrapper = this.createDiv(ELEMENT_NAME_CLASS_ADD);
//     const form = this.createHTMLElement(ELEMENT_FORM, ELEMENT_FORM_CLASS);
//     if (this._filterName === 'Quantity in stock') {
//       this._addNumber(wrapper, START_QUANTITY, ARRAY_CLASS[0]);
//       this._addInputQuantity(form, QUANTITY_FROM);
//       this._addInputQuantity(form, QUANTITY_TO);
//       wrapper.append(form);
//       this._addNumber(wrapper, END_QUANTITY, ARRAY_CLASS[1]);
//     }
//     if (this._filterName === 'Weight') {
//       this._addNumber(wrapper, START_WEIGHT, ARRAY_CLASS[2]);
//       this._addInputWeight(form, WEIGHT_FROM);
//       this._addInputWeight(form, WEIGHT_TO);
//       wrapper.append(form);
//       this._addNumber(wrapper, END_WEIGHT, ARRAY_CLASS[3]);
//     }
//     this._filterValue.append(wrapper);
//   }

//   private _addNumber(parent: HTMLElement, val: string, className: string) {
//     const el = this.createDiv(className);
//     el.textContent = val;
//     parent.append(el);
//   }

//   private _addInputQuantity(parent: HTMLElement, idName: ElementIdQuantity) {
//     const filter = new InputRangeQuantity(idName);
//     parent.append(filter.element);
//   }

//   private _addInputWeight(parent: HTMLElement, idName: ElementIdWeight) {
//     const filter = new InputRangeWeight(idName);
//     parent.append(filter.element);
//   }

//   getInnerBlock() {
//     return this._filterValue.innerHTML;
//   }

//   get element() {
//     return this._filterValue;
//   }
// }

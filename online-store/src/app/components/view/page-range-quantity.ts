// import { ElementTemplate } from '../element/element-template';
// import { InputRangeQuantity } from '../element/input-range-quantity';
// import { ElementIdQuantity } from '../../types/input';

// type Func = (this: void, event: MouseEvent) => void;

// const ELEMENT_CLASS = 'filters__description__block';
// const TITLE_CLASS = 'filters__title';
// const TITLE_CONTENT = 'Quantity in stock:';
// const WRAPPER_CLASS = 'filters__slider';
// const ELEMENT_FORM = 'form';
// const FORM_CLASS = 'filters__form-range';
// const RANGE_FROM = 'range-count-from';
// const RANGE_TO = 'range-count-to';
// const RANGE_START_CLASS = 'range-count-start';
// const RANGE_END_CLASS = 'range-count-end';

// export class PageRangeQuantity extends ElementTemplate {
//   private _filterBlock: HTMLElement;
//   private _rangeFrom: InputRangeQuantity;
//   private _rangeTo: InputRangeQuantity;

//   constructor() {
//     super();
//     this._filterBlock = this.createDiv(ELEMENT_CLASS);
//     this._rangeFrom = this.createInputRange(RANGE_FROM);
//     this._rangeTo = this.createInputRange(RANGE_TO);
//     this.appendTo();
//   }

//   appendTo() {
//     const title = this.createDiv(TITLE_CLASS);
//     title.textContent = TITLE_CONTENT;
//     this._filterBlock.append(title);
//     const wrapper = this.createDiv(WRAPPER_CLASS);
//     const form = this.createHTMLElement(ELEMENT_FORM, FORM_CLASS);
//     form.append(this._rangeFrom.element);
//     form.append(this._rangeTo.element);

//     this.appendToDisplayValue(wrapper, this._rangeFrom.element.min, RANGE_START_CLASS);
//     wrapper.append(form);
//     this.appendToDisplayValue(wrapper, this._rangeFrom.element.max, RANGE_END_CLASS);
//     this._filterBlock.append(wrapper);
//   }

//   createInputRange(idName: ElementIdQuantity) {
//     const input = new InputRangeQuantity(idName);
//     input.click(() => {
//       // console.log('input crea');
//       return 0;
//     });
//     return input;
//   }

//   appendToDisplayValue(parent: HTMLElement, val: string, className: string) {
//     const el = this.createDiv(className);
//     el.textContent = val;
//     parent.append(el);
//   }

//   getInnerBlock() {
//     return this._filterBlock.innerHTML;
//   }

//   get element() {
//     return this._filterBlock;
//   }

//   get rangeFrom() {
//     return this._rangeFrom;
//   }

//   get rangeTo() {
//     return this._rangeTo;
//   }

//   click(el: HTMLInputElement, fn: Func) {
//     el.addEventListener('click', fn);
//   }

//   unclick(el: HTMLInputElement, fn: Func) {
//     el.removeEventListener('click', fn);
//   }
// }

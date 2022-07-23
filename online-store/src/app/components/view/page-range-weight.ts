// import { ElementTemplate } from '../element/element-template';
// import { InputRangeWeight } from '../element/input-range-weight';
// import { ElementIdWeight } from '../../types/input';

// type Func = (this: void, event: MouseEvent) => void;

// const ELEMENT_CLASS = 'filters__description__block';
// const TITLE_CLASS = 'filters__title';
// const TITLE_CONTENT = 'Weight:';
// const WRAPPER_CLASS = 'filters__slider';
// const ELEMENT_FORM = 'form';
// const FORM_CLASS = 'filters__form-range';
// const RANGE_FROM = 'range-weight-from';
// const RANGE_TO = 'range-weight-to';
// const RANGE_START = 'range-weight-start';
// const RANGE_END = 'range-weight-end';

// export class PageRangeWeight extends ElementTemplate {
//   private _filterBlock: HTMLElement;
//   private _rangeFrom: InputRangeWeight;
//   private _rangeTo: InputRangeWeight;

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

//     this.appendToDisplayValue(wrapper, this._rangeFrom.element.min, RANGE_START);
//     wrapper.append(form);
//     this.appendToDisplayValue(wrapper, this._rangeFrom.element.max, RANGE_END);
//     this._filterBlock.append(wrapper);
//   }

//   createInputRange(idName: ElementIdWeight) {
//     return new InputRangeWeight(idName);
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

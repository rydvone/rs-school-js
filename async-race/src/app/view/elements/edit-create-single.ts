// import { ElementTemplate } from './element-template';
// import { Button } from './button';

// const WRAPPER_CLASS = 'edit__edit';
// const ELEMENT_CLASS = 'edit__edit';

// export class EditCreateSingle extends ElementTemplate {
//   private _item: HTMLElement;
//   private _button: Button;
//   private _key: string;
//   constructor(key: string) {
//     super();
//     this._key = key;
//     this._item = this.createDiv(ELEMENT_CLASS);
//     this._button = new Button();
//     this._button.addContent(this._key);
//   }

//   appendTo() {
//     let wrapper = this.createDiv(WRAPPER_CLASS);
//     wrapper.innerHTML = this.getInputTitleInner();
//     this._item.append(wrapper);
//     wrapper = this.createDiv(WRAPPER_CLASS);
//     wrapper.innerHTML = this.getInputColorInner();
//     this._item.append(wrapper);
//     this._item.append(this._button.element);
//   }

//   createWrapper() {
//     const wrapper = this.createDiv(WRAPPER_CLASS);
//     return wrapper;
//   }

//   getInputTitleInner() {
//     return `
//     <label for="edit__title-single-${this._key}"></label>
//     <input type="text" id="edit__title-single-${this._key}" name="edit__title-single-${this._key}" required minlength="2" maxlength="14" size="18" placeholder="title car" class="edit__title-single">
//     `;
//   }

//   getInputColorInner() {
//     return `
//     <label for="edit__color-single-${this._key}"></label>
//     <input type="color" id="edit__color-single-${this._key}" name="edit__color-single-${this._key}" value="#e66465" class="edit__color-single">
//     `;
//   }

//   get element() {
//     return this._item;
//   }

//   get button() {
//     return this._button;
//   }
// }

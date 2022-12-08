import { ElementTemplate } from './element-template';
import { TFuncEvent } from '../../types/func-types';

const ELEMENT_NAME = 'input';
const ELEMENT_CLASS = 'input';
const FORM_NAME = 'form';
const FORM_CLASS = 'edit__form';
const LABEL_NAME = 'label';
const LABEL_CLASS = 'edit__label';
const TYPE_TEXT = 'text';
const ELEMENT_PLACEHOLDER = 'write title';
const ELEMENT_AUTOCOMPLETE = 'off';
const ELEMENT_REQUIRED = true;
const ELEMENT_MIN = 2;
const ELEMENT_MAX = 20;
const ELEMENT_SIZE = 21;

export class Input extends ElementTemplate {
  private _item: HTMLInputElement;
  private _form: HTMLElement;
  private _label: HTMLLabelElement;
  private _itemId: string;
  private _type: string;
  constructor(key: string, type: string) {
    super();
    this._type = type;
    this._itemId = `edit__${type}-single-${key}`;
    this._item = document.createElement(ELEMENT_NAME);
    this._item.className = ELEMENT_CLASS;
    this._item.type = type;
    this._form = this.createNode(FORM_NAME, FORM_CLASS);
    this._label = document.createElement(LABEL_NAME);
    this._label.className = LABEL_CLASS;
    this.setAttribute();
    this.appendToForm();
  }

  setAttribute() {
    this._item.id = this._itemId;
    this._item.name = this._itemId;
    this._label.setAttribute('for', this._itemId);
    if (this._type === TYPE_TEXT) {
      this._item.placeholder = ELEMENT_PLACEHOLDER;
      this._item.autocomplete = ELEMENT_AUTOCOMPLETE;
      this._item.required = ELEMENT_REQUIRED;
      this._item.minLength = ELEMENT_MIN;
      this._item.maxLength = ELEMENT_MAX;
      this._item.size = ELEMENT_SIZE;
    }
  }

  appendToForm() {
    this._form.append(this._label);
    this._form.append(this._item);
    return this._form;
  }

  click(fn: TFuncEvent) {
    this._item.addEventListener('input', fn);
  }

  unclick(fn: TFuncEvent) {
    this._item.removeEventListener('input', fn);
  }

  get element() {
    return this._item;
  }

  get value() {
    return this._item.value;
  }

  set value(val: string) {
    this._item.value = val;
  }

  get form() {
    return this._item;
  }
}

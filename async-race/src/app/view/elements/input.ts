import { ElementTemplate } from './element-template';
import { TFuncEvent } from '../../types/func';

const ELEMENT_NAME = 'input';
const ELEMENT_CLASS = 'input';
const ELEMENT_TYPE = 'text';
const ELEMENT_AUTOCOMPLETE = 'off';

export class Input extends ElementTemplate {
  private _item: HTMLInputElement;
  constructor() {
    super();
    this._item = document.createElement(ELEMENT_NAME);
    this._item.className = ELEMENT_CLASS;
    this._item.type = ELEMENT_TYPE;
  }

  setAttribute(nameId: string , nameName: string, namePlaceholder: string) {
    this._item.id = nameId;
    this._item.name = nameName;
    this._item.placeholder = namePlaceholder;
    this._item.autocomplete = ELEMENT_AUTOCOMPLETE;
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
}

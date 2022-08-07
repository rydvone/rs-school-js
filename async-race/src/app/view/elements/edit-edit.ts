import { ElementTemplate } from './element-template';
import { Button } from './button';
import { Input } from './input';

const ELEMENT_CLASS = 'edit__edit';
const COLOR = '#e66465';
const TYPE = ['text', 'color'];

export class EditEdit extends ElementTemplate {
  private _item: HTMLElement;
  private _button: Button;
  private _inputText: Input;
  private _inputColor: Input;
  private _key: string;
  private _id: number;
  constructor(key: string) {
    super();
    this._key = key;
    this._id = -1;
    this._item = this.createDiv(ELEMENT_CLASS);
    this._button = new Button();
    this._button.addContent(this._key);
    this._inputText = this.createInput(TYPE[0]);
    this._inputColor = this.createInput(TYPE[1]);
  }

  appendTo(text = '', color = COLOR) {
    this.clearNode(this._item);
    this._inputText.value = text;
    this._item.append(this._inputText.form);
    this._inputColor.value = color;
    this._item.append(this._inputColor.form);
    this._item.append(this._button.element);
  }

  createInput(type: string) {
    const item = new Input(this._key, type);
    return item;
  }

  get element() {
    return this._item;
  }

  get button() {
    return this._button;
  }

  get inputText() {
    return this._inputText;
  }

  get inputColor() {
    return this._inputColor;
  }

  get elementId() {
    return this._id;
  }
}

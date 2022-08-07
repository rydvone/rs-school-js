import { ButtonEditConst } from '../../const/edit-const';
import { ButtonsEditControl } from '../elements/buttons-edit-control';
import { EditEdit } from '../elements/edit-edit';
import { ElementTemplate } from '../elements/element-template';
import { Input } from '../elements/input';

const ELEMENT_CLASS = 'edit';
const CONTROL_CLASS = 'edit__control';
const INACTIVE_CLASS = 'inactive';
const H2 = 'h2';
const H3 = 'h3';
const ARR_EDIT_CONTROL = ['create', 'update'];

export const buttonEditControl = new ButtonsEditControl();
export const inputEditCreate: { [key: string]: Input } = {};
export const inputEditUpdate: { [key: string]: Input } = {};

export class Edit extends ElementTemplate {
  private _item: HTMLElement;
  private _editCreate: EditEdit;
  private _editUpdate: EditEdit;
  private _editControl: HTMLElement;
  private _itemTitle: HTMLElement;
  private _itemPage: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this._editCreate = this.createEditCreate();
    inputEditCreate.text = this._editCreate.inputText;
    inputEditCreate.color = this._editCreate.inputColor;
    this._editUpdate = new EditEdit(ARR_EDIT_CONTROL[1]);
    this.createEditUpdate();
    inputEditUpdate.text = this._editUpdate.inputText;
    inputEditUpdate.color = this._editUpdate.inputColor;
    this._editControl = this.createEditControl();
    this._itemTitle = this.createNode(H2, H2);
    this._itemPage = this.createNode(H3, H3);
    this.renderTitle();
    this.renderPage();
  }

  createEditCreate() {
    const item = new EditEdit(ARR_EDIT_CONTROL[0]);
    item.appendTo();
    return item;
  }

  createEditUpdate(title = '', color = '#e66465', id = -1) {
    const item = this._editUpdate;
    item.appendTo(title, color);
    if (id === -1) {
      item.element.classList.add(INACTIVE_CLASS);
    } else {
      item.element.classList.remove(INACTIVE_CLASS);
    }
    return item;
  }

  createEditControl() {
    const fragment = document.createDocumentFragment();
    Object.keys(ButtonEditConst).forEach((key) => {
      const item = buttonEditControl.createButton(key);
      fragment.append(item.element);
    });
    const control = this.createDiv(CONTROL_CLASS);
    control.append(fragment);
    return control;
  }

  renderTitle(count = 0) {
    this._itemTitle.textContent = `Garage (${count})`;
  }

  renderPage(count = 1) {
    this._itemPage.innerHTML = `<strong>Page #${count}`;
  }

  appendTo() {
    this._item.append(this._editCreate.element);
    this._item.append(this._editUpdate.element);
    this._item.append(this._editControl);
    this._item.append(this._itemTitle);
    this._item.append(this._itemPage);
  }

  get element() {
    return this._item;
  }

  get editCreate() {
    return this._editCreate;
  }

  get editUpdate() {
    return this._editUpdate;
  }
}

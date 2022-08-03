import { ButtonEditControlConst } from '../../const/edit-const';
import { ButtonsEditControl } from '../elements/buttons-edit-control';
import { EditEdit } from '../elements/edit-edit';
import { ElementTemplate } from '../elements/element-template';

const ELEMENT_CLASS = 'edit';
const CONTROL_CLASS = 'edit__control';
const ARR_EDIT_CONTROL = ['create', 'update'];

const editButtonsControl = new ButtonsEditControl();

export class Edit extends ElementTemplate {
  private _item: HTMLElement;
  private _editCreate: EditEdit;
  private _editUpdate: EditEdit;
  private _editControl: HTMLElement;
  constructor() {
    super();
    this._item = this.createDiv(ELEMENT_CLASS);
    this._editCreate = this.createEditCreate();
    this._editUpdate = this.createEditUpdate();
    this._editControl = this.createEditControl();
  }

  createEditCreate() {
    const item = new EditEdit(ARR_EDIT_CONTROL[0]);
    item.appendTo();
    return item;
  }

  createEditUpdate(title = '', color = '#e66465') {
    const item = new EditEdit(ARR_EDIT_CONTROL[1]);
    item.appendTo(title, color);
    return item;
  }

  createEditControl() {
    const fragment = document.createDocumentFragment();
    Object.keys(ButtonEditControlConst).forEach((key) => {
      const item = editButtonsControl.createButton(key);
      fragment.append(item.element);
    });
    const control = this.createDiv(CONTROL_CLASS);
    control.append(fragment);
    return control;
  }

  appendTo() {
    this._item.append(this._editCreate.element);
    this._item.append(this._editUpdate.element);
    this._item.append(this._editControl);
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

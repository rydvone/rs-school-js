import { Input } from './input';

type IFunc = (this: void, event: KeyboardEvent) => void;

export class InputSearch extends Input {
  protected _type: string;
  constructor(type: string) {
    super(type);
    this._type = type;
  }

  get value() {
    return super.inputElement.value;
  }

  set value(val: string) {
    super.inputElement.value = `${val}`;
  }

  keydown(func: IFunc) {
    super.inputElement.addEventListener('keydown', func);
  }

  unKeydown(func: IFunc) {
    super.inputElement.removeEventListener('keydown', func);
  }
}

import { KeyConvertFilterRange } from '../../types/input';
import { Slider } from './slider';

export class Sliders {
  private _item: Slider[];
  constructor() {
    this._item = [];
  }

  createItem(content: KeyConvertFilterRange) {
    const item = new Slider(content);
    item.drawSlider();
    this._item.push(item);
    return item;
  }

  get element() {
    return this._item;
  }
}

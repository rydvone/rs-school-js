import { HandlerButton } from './handler-button';
import { Randomizer } from './randomizer';

export const randomizer = new Randomizer();

export const handlerButton = new HandlerButton();

export class Services {
  private _handlerButton: HandlerButton;
  private _randomizer: Randomizer;
  constructor() {
    this._handlerButton = handlerButton;
    this._randomizer = randomizer;
  }
}

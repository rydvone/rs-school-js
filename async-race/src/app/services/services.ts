import { HandlerButton } from './handler-button';
import { HandlerSwitch } from './handler-switch';
import { Randomizer } from './randomizer';

export const randomizer = new Randomizer();

export const handlerButton = new HandlerButton();
export const handlerSwitch = new HandlerSwitch();

export class Services {
  private _handlerButton: HandlerButton;
  private _handlerSwitch: HandlerSwitch;
  private _randomizer: Randomizer;
  constructor() {
    this._handlerButton = handlerButton;
    this._handlerSwitch = handlerSwitch;
    this._randomizer = randomizer;
  }
}

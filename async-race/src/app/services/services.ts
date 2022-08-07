import { ApiGarage } from './api-garage';
import { Filter } from './filter';
import { HandlerApi } from './handler-api';
import { HandlerEdit } from './handler-edit';
import { HandlerSwitch } from './handler-switch';
import { Randomizer } from './randomizer';

export const handlerButton = new HandlerEdit();
export const handlerSwitch = new HandlerSwitch();

export const randomizer = new Randomizer();
export const filter = new Filter();
export const api = new ApiGarage();
export const handlerApi = new HandlerApi();

export class Services {
  private _handlerButton: HandlerEdit;
  private _handlerSwitch: HandlerSwitch;
  private _randomizer: Randomizer;
  private _filter: Filter;
  private _api: ApiGarage;
  private _handlerApi: HandlerApi;
  constructor() {
    this._handlerButton = handlerButton;
    this._handlerSwitch = handlerSwitch;
    this._randomizer = randomizer;
    this._filter = filter;
    this._api = api;
    this._handlerApi = handlerApi;
  }
}

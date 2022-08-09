import { ApiGarage } from './api-garage';
import { ApiWinners } from './api-winners';
import { Filter } from './filter';
import { HandlerApi } from './handler-api';
import { HandlerEdit } from './handler-edit';
import { HandlerPagination } from './handler-pagination';
import { HandlerSort } from './handler-sort';
import { HandlerSwitch } from './handler-switch';
import { Randomizer } from './randomizer';

export const handlerButton = new HandlerEdit();
export const handlerSwitch = new HandlerSwitch();
export const handlerPagination = new HandlerPagination();
export const handlerSort = new HandlerSort();

export const randomizer = new Randomizer();
export const filter = new Filter();
export const apiGarage = new ApiGarage();
export const apiWinners = new ApiWinners();
export const handlerApi = new HandlerApi();

export class Services {
  private _handlerButton: HandlerEdit;
  private _handlerSwitch: HandlerSwitch;
  private _handlerSort: HandlerSort;
  private _handlerPagination: HandlerPagination;
  private _randomizer: Randomizer;
  private _filter: Filter;
  private _api: ApiGarage;
  private _apiWinners: ApiWinners;
  private _handlerApi: HandlerApi;
  constructor() {
    this._handlerButton = handlerButton;
    this._handlerSwitch = handlerSwitch;
    this._handlerSort = handlerSort;
    this._handlerPagination = handlerPagination;
    this._randomizer = randomizer;
    this._filter = filter;
    this._api = apiGarage;
    this._apiWinners = apiWinners;
    this._handlerApi = handlerApi;
  }
}

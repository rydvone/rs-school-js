import { IStorageItem } from './storage-types';

export type TFuncMouse = (this: void, event: MouseEvent) => void;

export type TFuncKeyboard = (this: void, event: KeyboardEvent) => void;

export type TFuncEvent = (this: void, event: Event) => void;

export type TFuncRace = (this: void, id: number) => IStartDrive;

// interface IFuncRace {
//   cars: IStorageItem;
//   time: number;
// }

export interface IStartDrive {
  success: boolean;
  id: number;
  time: number;
}

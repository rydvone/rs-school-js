import { IStartDrive } from './storage-types';

export type TFuncMouse = (this: void, event: MouseEvent) => void;

export type TFuncKeyboard = (this: void, event: KeyboardEvent) => void;

export type TFuncEvent = (this: void, event: Event) => void;

export type TFuncRace = (id: number) => IStartDrive;

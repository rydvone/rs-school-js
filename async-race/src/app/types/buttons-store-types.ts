import { Button } from '../view/elements/button';
import { ButtonNoState } from '../view/elements/button-no-state';

export interface IButtonsStore {
  [key: string]: Button;
}

export interface IButtonsNoStateStore {
  [key: string]: ButtonNoState;
}

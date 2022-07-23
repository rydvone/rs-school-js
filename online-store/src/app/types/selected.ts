export interface ButtonSelected {
  [key: string]: string[];
}

export type RangeSelected = {
  [key: string]: number[];
};

export type KeyRangeSelected = keyof RangeSelected;

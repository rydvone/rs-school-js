export class CustomErrors extends Error {
  private _mess: string;
  private _codes: number;
  constructor(mess: string, codes: number) {
    super('Custom err');

    this._mess = mess;
    this._codes = codes;
  }
}

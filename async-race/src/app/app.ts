import { View } from './view/view';

export default class App {
  private _view: View;

  constructor() {
    this._view = new View();
  }

  start() {
    console.log('start App');
  }
}

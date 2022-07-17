import { View } from '../view/view';

export default class App {
  // private _controller: AppController;
  private _view: View;

  constructor() {
    // this._controller = new AppController();
    this._view = new View();
  }

  start() {
    this._view.buildPage();
  }
}

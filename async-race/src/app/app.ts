import { Services } from './services/services';
import { View } from './view/view';

export default class App {
  private _view: View;
  private _service: Services;

  constructor() {
    this._view = new View();
    this._service = new Services();
  }

  start() {
    console.log('start App');
  }
}

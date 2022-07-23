import { Storage } from './services/storage';
import { View } from './components/view/view';

export default class App {
  private _storage: Storage;
  private _view: View;

  constructor() {
    this._storage = new Storage();
    this._view = new View();
  }

  start() {
    this._view.buildPage();
    this._init();
  }

  private _init() {
    document.getElementById('search')?.focus();
  }
}

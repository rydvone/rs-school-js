// import { Storage } from './services/storage';
import { View } from './components/view/view';
import { AppState } from './services/app-state';

export default class App {
  private _view: View;

  constructor() {
    this._view = new View();
  }

  start() {
    this._view.buildPage();
    this._init();
  }

  private _init() {
    document.getElementById('search')?.focus();
    window.addEventListener('beforeunload', () => AppState.setLocalStorage());
  }
}

import { PageTemplate } from './view/pages/page-template';

export default class App {
  private _view: PageTemplate;

  constructor() {
    this._view = new PageTemplate();
  }

  start() {
    console.log('start App');
  }
}

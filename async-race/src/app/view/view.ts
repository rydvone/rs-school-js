import { PageGarage } from './garage/page-garage';
import { PageTemplate } from './pages/page-template';

const garageComponent = new PageGarage();

const SECTION = 'section';
const PAGE_KEY = 'winner';
const PAGE_GARAGE = 'garage';
const PAGE_WINNER = 'winner';

export class View extends PageTemplate {
  private _body: HTMLElement;
  private _section: HTMLElement;
  constructor() {
    super();
    this._body = document.body;
    this.appendToTemplate(this._body);
    this._section = this.createNode(SECTION, SECTION);
    this.elementMain.append(this._section);
    this.buildPage(PAGE_KEY); // убрать и вызывать либо по умолчанию, любо со значением из storage
  }

  buildPage(pageName: string) {
    this.clearNode(this._section);
    garageComponent.checkPage(pageName);
    this._section.append(garageComponent.buildPage());
  }

  visualPage(key: string) {
    let page: string;
    switch (key) {
      case PAGE_GARAGE:
        page = 'this is garage page';
        break;
      case PAGE_WINNER:
        page = 'this is winner page';
        break;
      default:
        page = 'this is default garage page';
        break;
    }
    console.log(page);
  }
}

import { PageGarage } from '../garage/page-garage';
import { PageTemplate } from './page-template';
import { PageWinners } from '../winners/page-winners';
import { buttonSwitch } from './switch';

const garageComponent = new PageGarage();
const winnersComponent = new PageWinners();

const SECTION = 'section';
const PAGE_GARAGE = 'garage';
const PAGE_WINNERS = 'winners';

export class PageRender extends PageTemplate {
  private _section: HTMLElement;
  constructor() {
    super();
    this._section = this.createNode(SECTION, SECTION);
    this.buildPage(PAGE_GARAGE);
    buttonSwitch[PAGE_GARAGE].selected(PAGE_GARAGE, buttonSwitch);
  }

  buildPage(pageName: string) {
    this.clearNode(this._section);
    this.setVisual(pageName);
    this._section.append(garageComponent.buildPage());
    this._section.append(winnersComponent.buildPage());
  }

  setVisual(key: string) {
    garageComponent.checkPage(key);
    winnersComponent.checkPage(key);
  }

  visualPage(key: string) {
    let element: PageGarage | PageWinners;
    this.setVisual(key);
    switch (key) {
      case PAGE_GARAGE:
        element = garageComponent;
        break;
      case PAGE_WINNERS:
        element = winnersComponent;
        break;
      default:
        element = garageComponent;
        break;
    }
    return element;
  }

  get element() {
    return this._section;
  }
}

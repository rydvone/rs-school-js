import { PageRender } from './pages/page-render';
import { PageTemplate } from './pages/page-template';

export const pageRenderComponent = new PageRender();

export class View extends PageTemplate {
  private _body: HTMLElement;
  constructor() {
    super();
    this._body = document.body;
    this.appendToTemplate(this._body);
    this.elementMain.append(pageRenderComponent.element);
  }
}

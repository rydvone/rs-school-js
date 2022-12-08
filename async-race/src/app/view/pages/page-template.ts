import { SVGElement } from '../elements/svg-template';
import { Switch } from './switch';
import { ElementTemplate } from '../elements/element-template';
import { Pagination } from './pagination';
import { Popup } from './popup';

const switchComponent = new Switch();
export const paginationComponent = new Pagination();
export const popup = new Popup();

const HEADER_INNER = `
    <h1 class="header__title"><a href="." class="link link_header">Async Race</a></h1>
`;

const FOOTER_INNER = `
    <ul class="footer__data">
      <li class="footer__item">©</li>
      <li class="footer__item">2022</li>
      <li class="footer__item"><a class="link" href="https://github.com/rydvone">github</a></li>
    </ul>
    <div class="footer__logo">
      <a href="https://rs.school/js/" class="link link_icons"><img src="https://rs.school/images/rs_school_js.svg" width="60" height="30" alt="Logo RSSchool" class="icons icons_footer"></a>
    </div>
`;

const HEADER_ELEMENT = 'header';
const FOOTER_ELEMENT = 'footer';
const MAIN_ELEMENT = 'main';

export class PageTemplate extends ElementTemplate {
  private _header: HTMLElement;
  private _footer: HTMLElement;
  private _main: HTMLElement;
  constructor() {
    super();
    this._header = this.createNode(HEADER_ELEMENT, HEADER_ELEMENT);
    this._footer = this.createNode(FOOTER_ELEMENT, FOOTER_ELEMENT);
    this._main = this.createNode(MAIN_ELEMENT, MAIN_ELEMENT);
    this._addInnerHTML();
  }

  private _addInnerHTML() {
    this._header.innerHTML = HEADER_INNER;
    this._footer.innerHTML = FOOTER_INNER;
  }

  appendToTemplate(el: HTMLElement) {
    this._main.append(switchComponent.element);
    el.prepend(this._header);
    el.append(this._main);
    el.append(popup.element);
    el.append(new SVGElement().elementSVG);
    el.append(this._footer);
    return el;
  }

  get elementMain() {
    return this._main;
  }
}

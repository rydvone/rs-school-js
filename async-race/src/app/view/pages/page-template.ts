import { Item } from './item';
import { SVGElement } from '../elements/svg-template';
import { Switch } from './switch';

const HEADER_INNER = `
  <header class="header">
    <a href="." class="link link_header"></a>
    <h1 class="header__title"><a href="." class="link link_header">Async Race</a></h1>
  </header>`;

const FOOTER_INNER = `
  <footer class="footer">
    <ul class="footer__data">
      <li class="footer__item">©</li>
      <li class="footer__item">2022</li>
      <li class="footer__item"><a class="link" href="https://github.com/rydvone">github</a></li>
    </ul>
    <div class="footer__logo">
      <a href="https://rs.school/js/" class="link link_icons"><img src="https://rs.school/images/rs_school_js.svg" width="60" height="30" alt="Logo RSSchool" class="icons icons_footer"></a>
    </div>
  </footer>
`;

export class PageTemplate {
  constructor() {
    this.buildPage();
  }

  buildPage() {
    const body = document.body;
    const switcher = new Switch();
    const items = new Item();
    items.element.addEventListener('click', (e: Event) => console.log(e));
    const svg = new SVGElement();
    const itemInner = items.renderItem();
    body.innerHTML = `
    ${HEADER_INNER}
    ${switcher.getOuter(switcher.element)}
    ${itemInner}
    ${svg.getOuter(svg.elementSVG)}
    ${FOOTER_INNER}`;
  }
}

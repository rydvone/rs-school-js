import { ElementTemplate } from '../element/element-template';
import { cartCounter } from './page-cart';
import { PageBlock } from './page-block';
import { PageCart } from './page-cart';
import { PageFilters } from './page-filters';
import { ProductsComponent } from './products.component';

export const drawProducts = new ProductsComponent();

const HEADER_INNER = `
  <a href="." class="link link_header"><img class="icons icons_header" src="./assets/image/svg/store-logo.svg" alt="Icon Store"></a>
  <h1 class="header__title">Dream Store</h1>
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

export class View {
  private _pageBlockHeader: PageBlock;
  private _pageBlockFooter: PageBlock;
  private _pageBlockMain: PageBlock;
  constructor() {
    this._pageBlockHeader = new PageBlock('header', 'header');
    this._pageBlockFooter = new PageBlock('footer', 'footer');
    this._pageBlockMain = new PageBlock('main', 'main');
    this._initPageBlock();
  }

  private _initPageBlock() {
    this._pageBlockHeader.innerTo(HEADER_INNER);
    this._pageBlockFooter.innerTo(FOOTER_INNER);
  }

  buildPage() {
    const body = document.body;
    const elementTemplate = new ElementTemplate();
    elementTemplate.clearInner(body);
    body.append(this._pageBlockHeader.blockElement);
    body.append(this._pageBlockMain.blockElement);
    body.append(this._pageBlockFooter.blockElement);
    const cart = new PageCart();
    this._pageBlockMain.blockElement.append(cart.element);
    const filters = new PageFilters();
    this._pageBlockMain.blockElement.append(filters.element);
    this._pageBlockMain.blockElement.append(drawProducts.element);
    this._pageBlockMain.blockElement.append(cartCounter.getPopup);
  }
}

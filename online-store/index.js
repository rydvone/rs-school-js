(()=>{"use strict";var e={97:(e,t,a)=>{a.r(t)},307:(e,t,a)=>{a.r(t)},962:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(18),i=a(681);t.default=class{constructor(){this._storage=new n.Storage,this._view=new i.View}start(){this._view.buildPage()}}},751:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const n=a(396);class i extends n.ElementTemplate{constructor(e){super(),this._title=e,this._button=this.createHTMLElement("button","button"),this.addText(this._title),this.click(this._clickCallback.bind(this)),this.addClassReset()}addClassReset(){"Filters reset"!==this._title&&"Common reset"!==this._title||this.addClassName(this._button,"button_reset")}addText(e){this._button.textContent=e}_clickCallback(){"Filters reset"!==this._title&&"Common reset"!==this._title&&this.toggleClass()}click(e){this._button.addEventListener("click",e)}unclick(e){this._button.removeEventListener("click",e)}addClass(){this._button.classList.add("selected")}removeClass(){this._button.classList.remove("selected")}toggleClass(){this._button.classList.toggle("selected")}get element(){return this._button}}t.Button=i},645:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Cart=void 0;const n=a(396),i=a(11);class s extends n.ElementTemplate{constructor(){super(),this._cartElement=this.createDiv("cart-counter"),this._value=0,this.value=this._value,this.popup=new i.Popup}get getPopup(){return this.popup.element}get element(){return this._cartElement}get value(){return Number(this._cartElement.textContent)}set value(e){this._cartElement.textContent=`${e}`}incr(){this._value+=1,this.value=this.checkFull()}decr(){this._value-=1,this._value<0&&(this._value=0),this.value=this.checkFull()}checkFull(){return this._value>=10?(console.log("Shopping cart is Full!"),this.popup.addClass(),10):this._value}}t.Cart=s},396:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ElementTemplate=void 0,t.ElementTemplate=class{createHTMLElement(e,t){const a=document.createElement(e);return this.setClassName(a,t),a}createDiv(e){return this.createHTMLElement("div",e)}setClassName(e,t){e.className=t}addClassName(e,t){e.classList.add(t)}setHTMLElement(e,t){e.classList.add(t)}clearNode(e){for(;e.firstChild;)e.removeChild(e.firstChild)}clearInner(e){e.innerHTML=""}}},203:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputRange=void 0;const n=a(91);class i extends n.Input{constructor(){super(),super.setType("range"),this._value=0}get value(){return parseInt(this._inputElement.value)}set value(e){this._inputElement.value=`${e}`}get min(){return parseInt(this._inputElement.min)}set min(e){this._inputElement.min=`${e}`}get max(){return parseInt(this._inputElement.max)}set max(e){this._inputElement.min=`${e}`}setValueMinMax(e,t,a){this._inputElement.value=`${e}`,this._inputElement.min=`${t}`,this._inputElement.max=`${a}`}}t.InputRange=i},809:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputSearch=void 0;const n=a(91),i=a(857);class s extends n.Input{constructor(){super(),this.setType("search"),this.setIdName("search"),this._setSearchAttr(),this.setClassName(this._inputElement,"search"),this.keydown(this._keydownCallback.bind(this)),this.change(this._clickCallback.bind(this)),this.search(this._inputElement.value)}get value(){return this._inputElement.value}set value(e){this._inputElement.value=`${e}`}_setSearchAttr(){this._inputElement.placeholder="search",this._inputElement.autocomplete="off",this._inputElement.focus()}search(e){i.filterData.search(e)}_clickCallback(){this.search(this._inputElement.value)}_keydownCallback(e){"Enter"===e.key&&e.preventDefault(),this.search(this._inputElement.value)}keydown(e){this._inputElement.addEventListener("keydown",e)}unkeydown(e){this._inputElement.removeEventListener("keydown",e)}change(e){this._inputElement.addEventListener("change",e)}unchange(e){this._inputElement.removeEventListener("change",e)}get element(){return this._inputElement}}t.InputSearch=s},91:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const n=a(396);class i extends n.ElementTemplate{constructor(){super(),this._type="text",this._inputElement=this.createHTMLElement("input","")}appendTo(){const e=this.createHTMLElement("form","filters__form");return e.append(this._inputElement),e}getIdName(){return this._inputElement.id}setIdName(e){this._inputElement.id=e}setType(e){this._inputElement.setAttribute("type",e)}click(e){this._inputElement.addEventListener("click",e)}unClick(e){this._inputElement.removeEventListener("click",e)}get element(){return this._inputElement}}t.Input=i},993:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ListButton=void 0;const i=a(396),s=n(a(536)),o=a(751);class r extends i.ElementTemplate{constructor(e){super(),this._typeName=e,this._list=this.createHTMLElement("ul","list-inline"),this.appendTo(s.default)}appendTo(e){const t=e[this._typeName],a=document.createDocumentFragment();t.forEach((e=>{const t=this.createHTMLElement("li","list-inline__item"),n=new o.Button(e);t.append(n.element),a.append(t)})),this._list.append(a)}get element(){return this._list}}t.ListButton=r},707:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ListProduct=void 0;const n=a(396),i="span";class s extends n.ElementTemplate{constructor(){super(),this._list=this.createHTMLElement("ul","list-block")}appendTo(e){const t=document.createDocumentFragment();Object.entries(e).forEach((([e,a])=>{const n=this.createHTMLElement("li","list-block__item"),s=this.createHTMLElement(i,"list-block__title");s.textContent=`${e}:`,n.append(s);const o=this.createHTMLElement(i,"list-block__description");o.textContent=`${a}`,n.append(o),t.appendChild(n)})),this._list.appendChild(t)}get element(){return this._list}}t.ListProduct=s},11:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;const n=a(396),i="active";class s extends n.ElementTemplate{constructor(){super(),this._item=this.createDiv("wrapper__overlay"),this.appendTo()}appendTo(){const e=this.createDiv("overlay");this._item.append(e);const t=this.createDiv("cart-description"),a=this.createDiv("cart-text");a.textContent="Shopping cart is Full!",t.append(a);const n=this.createDiv("button-close");n.textContent="close",n.onclick=()=>{this._item.classList.remove("active")},t.append(n),this._item.append(t)}innerTo(e){this._item.innerHTML=e}addClass(){this._item.classList.add(i)}removeClass(){this._item.classList.remove(i)}toggleClass(){this._item.classList.toggle(i)}get element(){return this._item}}t.Popup=s},466:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Select=t.OBJ_SORT_VALUE=void 0;const n=a(396),i=a(857);t.OBJ_SORT_VALUE={"name-up":"Name to Up","name-down":"Name to Down","price-up":"Price to Up","price-down":"Price to Down","count-up":"Count to Up","count-down":"Count to Down"};class s extends n.ElementTemplate{constructor(){super(),this._data=t.OBJ_SORT_VALUE,this._selectElement=this.createHTMLElement("select","select"),this._setIdName("select"),this._addList(),this.click(this._clickCallback.bind(this)),this.sort(this.value)}getIdName(){return this._selectElement.id}_setIdName(e){this._selectElement.id=e}get value(){return this._selectElement.value}set value(e){this._selectElement.value=`${e}`}sort(e){i.filterData.sort(e)}_clickCallback(){this.sort(this._selectElement.value)}click(e){this._selectElement.addEventListener("click",e)}unclick(e){this._selectElement.removeEventListener("click",e)}_addList(){const e=document.createDocumentFragment();Object.entries(this._data).forEach((([t,a])=>{const n=this.createHTMLElement("option","select__option");n.value=t,n.textContent=a,e.appendChild(n)})),this._selectElement.appendChild(e)}appendTo(){const e=this.createHTMLElement("form","filters__form");return e.append(this._selectElement),e}get element(){return this._selectElement}}t.Select=s},367:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageBlock=void 0;const n=a(396);class i extends n.ElementTemplate{constructor(e,t){super(),this._elementName=e,this._className=t,this._innerBlock="",this._blockElement=this.createHTMLElement(this._elementName,this._className)}innerTo(e){this._blockElement.innerHTML=e}getInnerBlock(){return this._blockElement.innerHTML}get blockElement(){return this._blockElement}}t.PageBlock=i},963:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageCart=t.cartCounter=void 0;const n=a(645),i=a(396);t.cartCounter=new n.Cart;class s extends i.ElementTemplate{constructor(){super(),this._cart=this.createHTMLElement("section","cart"),this.appendTo()}appendTo(){const e=document.createDocumentFragment(),a=this.createHTMLElement("h3","h3");a.textContent="Shopping cart",e.append(a);const n=this.createDiv("shopping-cart"),i=this.createHTMLElement("img","icons-cart");i.src="./assets/image/svg/shopping-cart-10.svg",i.alt="Shopping cart",n.append(i),n.append(t.cartCounter.element),e.append(n),this._cart.append(e)}innerTo(e){this.element.innerHTML=e}getInnerBlock(){return this.element.innerHTML}get element(){return this._cart}}t.PageCart=s},224:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageFilterButton=void 0;const n=a(396),i=a(993);class s extends n.ElementTemplate{constructor(e){super(),this._filterName=e,this._filterValue=this.createDiv("filters__description__block"),this.appendTo()}appendTo(){const e=this.createDiv("filters__title"),t=this._filterName[0].toUpperCase()+this._filterName.slice(1);e.textContent=`${t}:`,this._filterValue.append(e);const a=new i.ListButton(this._filterName);this._filterValue.append(a.element)}getInnerBlock(){return this._filterValue.innerHTML}get element(){return this._filterValue}}t.PageFilterButton=s},653:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageFilterForm=void 0;const n=a(396),i=a(809),s=a(466);class o extends n.ElementTemplate{constructor(e){super(),this._filterName=e,this._filterValue=this.createDiv("filters__description__block"),this.appendTo()}appendTo(){const e=this.createDiv("filters__title"),t=this._filterName[0].toUpperCase()+this._filterName.slice(1);if(e.textContent=`${t}:`,this._filterValue.append(e),"Search"===this._filterName){const e=new i.InputSearch;this._filterValue.append(e.appendTo())}if("Sort by"===this._filterName){const e=new s.Select;this._filterValue.append(e.appendTo())}}getInnerBlock(){return this._filterValue.innerHTML}get element(){return this._filterValue}}t.PageFilterForm=o},416:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageFilterRange=void 0;const n=a(396),i=a(203),s="0",o="50",r="100",l="1000",c=["range-count-from","range-count-to","range-weight-from","range-weight-to"];class d extends n.ElementTemplate{constructor(e){super(),this._filterName=e,this._filterValue=this.createDiv("filters__description__block"),this.appendTo()}appendTo(){const e=this.createDiv("filters__title"),t=this._filterName[0].toUpperCase()+this._filterName.slice(1);e.textContent=`${t}:`,this._filterValue.append(e);const a=this.createDiv("filters__slider"),n=this.createHTMLElement("form","filters__form");"Quantity in stock"===this._filterName&&(this._addNumber(a,s,c[0]),this._addRange(n,c[0],c[0],s,s,o),this._addRange(n,c[1],c[1],o,s,o),a.append(n),this._addNumber(a,o,c[1])),"Weight"===this._filterName&&(this._addNumber(a,r,c[2]),this._addRange(n,c[2],c[2],r,r,l),this._addRange(n,c[3],c[3],l,r,l),a.append(n),this._addNumber(a,l,c[3])),this._filterValue.append(a)}_addNumber(e,t,a){const n=this.createDiv(a);n.textContent=t,e.append(n)}_addRange(e,t,a,n,s,o){const r=new i.InputRange;r.setValueMinMax(n,s,o),r.setIdName(t),e.append(r.element)}getInnerBlock(){return this._filterValue.innerHTML}get element(){return this._filterValue}}t.PageFilterRange=d},28:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageFilter=void 0;const n=a(396),i=a(224),s=a(653),o=a(416),r=["brand","product","country","type"];class l extends n.ElementTemplate{constructor(e){super(),this._filterName=e,this._value=this.createDiv("filter-container"),this.appendTo()}appendTo(){const e=document.createDocumentFragment(),t=this.createHTMLElement("h3","h3");t.textContent=`${this._filterName}`,e.append(t);const a=this.createDiv("filters__description");"Filters by value"===this._filterName&&this._appendToValue(a),"Filters by range"===this._filterName&&this._appendToRange(a),"Search and Sorting"===this._filterName&&this._appendToSearch(a),e.append(a),this._value.append(e)}_appendToValue(e){r.forEach((t=>{const a=new i.PageFilterButton(t);e.append(a.element)}))}_appendToRange(e){const t=new o.PageFilterRange("Quantity in stock");e.append(t.element);const a=new o.PageFilterRange("Weight");e.append(a.element)}_appendToSearch(e){const t=new s.PageFilterForm("Search");e.append(t.element);const a=new s.PageFilterForm("Sort by");e.append(a.element);const n=new i.PageFilterButton("reset");e.append(n.element)}get element(){return this._value}}t.PageFilter=l},835:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageFilters=void 0;const n=a(396),i=a(28),s=["Filters by value","Filters by range","Search and Sorting"];class o extends n.ElementTemplate{constructor(){super(),this._filters=this.createHTMLElement("section","filters"),this._init(s)}_init(e){const t=document.createDocumentFragment();e.forEach((e=>{const a=new i.PageFilter(e);t.append(a.element)})),this._filters.append(t)}get element(){return this._filters}}t.PageFilters=o},387:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Product=void 0;const n=a(396),i=a(707),s=a(963),o="selected";class r extends n.ElementTemplate{constructor(){super(),this._list=new i.ListProduct,this._product=this.createDiv("product"),this.click(this._clickCallback.bind(this))}appendTo(e){const t=document.createDocumentFragment(),a=this.createHTMLElement("h3","h3");a.textContent=`${e.name}`,t.append(a);const n=this.createDiv("product__content"),s=this.createHTMLElement("img","product__image");s.src=`./assets/image/products/${e.ean}.jpg`,s.alt=`${e.name}`,n.append(s);const o=new i.ListProduct;o.appendTo(e.fields),n.append(o.element),t.append(n),this._product.append(t)}get element(){return this._product}addClass(){this._product.classList.add(o)}removeClass(){this._product.classList.remove(o)}toggleClass(){this._product.classList.toggle(o)}_clickCallback(){this._product.classList.contains(o)?s.cartCounter.decr():s.cartCounter.incr(),this.toggleClass()}click(e){this._product.addEventListener("click",e)}unclick(e){this._product.removeEventListener("click",e)}}t.Product=r},920:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Products=void 0;const i=a(396),s=n(a(351)),o=a(387);class r extends i.ElementTemplate{constructor(){super(),this._products=this.createHTMLElement("section","products"),this.appendTo(s.default)}appendTo(e){this.clearNode(this._products);const t=document.createDocumentFragment();e.forEach((e=>{const a=new o.Product;a.appendTo(e),t.append(a.element)})),this._products.append(t)}appendToWrong(){this.clearNode(this._products);const e=this.createDiv("products__wrong");e.textContent="Wrong filter parametrs",this._products.append(e)}get element(){return this._products}}t.Products=r},681:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.View=t.drawProducts=void 0;const n=a(396),i=a(963),s=a(367),o=a(963),r=a(835),l=a(920);t.drawProducts=new l.Products,t.View=class{constructor(){this._pageBlockHeader=new s.PageBlock("header","header"),this._pageBlockFooter=new s.PageBlock("footer","footer"),this._pageBlockMain=new s.PageBlock("main","main"),this._initPageBlock()}_initPageBlock(){this._pageBlockHeader.innerTo('\n  <a href="." class="link link_header"><img class="icons icons_header" src="./assets/image/svg/store-logo.svg" alt="Icon Store"></a>\n  <h1 class="header__title">Dream Store</h1>\n'),this._pageBlockFooter.innerTo('\n  <ul class="footer__data">\n    <li class="footer__item">©</li>\n    <li class="footer__item">2022</li>\n    <li class="footer__item"><a class="link" href="https://github.com/rydvone">github</a></li>\n  </ul>\n  <div class="footer__logo">\n    <a href="https://rs.school/js/" class="link link_icons"><img src="https://rs.school/images/rs_school_js.svg" width="60" height="30" alt="Logo RSSchool" class="icons icons_footer"></a>\n  </div>\n')}buildPage(){const e=document.body;(new n.ElementTemplate).clearInner(e),e.append(this._pageBlockHeader.blockElement),e.append(this._pageBlockMain.blockElement),e.append(this._pageBlockFooter.blockElement);const a=new o.PageCart;this._pageBlockMain.blockElement.append(a.element);const s=new r.PageFilters;this._pageBlockMain.blockElement.append(s.element),this._pageBlockMain.blockElement.append(t.drawProducts.element),this._pageBlockMain.blockElement.append(i.cartCounter.getPopup)}}},857:function(e,t,a){var n,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppState=t.filterData=void 0;const s=i(a(351)),o=a(538);t.filterData=new o.Filter;class r{}t.AppState=r,n=r,r.product=JSON.parse(JSON.stringify(s.default)),r.displayProduct=n.product},538:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Filter=void 0;const n=a(857),i=a(681),s=["name-up","name-down","price-up","price-down","count-up","count-down"];t.Filter=class{sort(e){const t=n.AppState.displayProduct;e===s[0]&&t.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),e===s[1]&&t.sort(((e,t)=>e.name<t.name?1:e.name>t.name?-1:0)),e===s[2]&&t.sort(((e,t)=>Number(e.fields.price)-Number(t.fields.price))),e===s[3]&&t.sort(((e,t)=>Number(t.fields.price)-Number(e.fields.price))),e===s[4]&&t.sort(((e,t)=>Number(e.fields.count)-Number(t.fields.count))),e===s[5]&&t.sort(((e,t)=>Number(t.fields.count)-Number(e.fields.count))),i.drawProducts.appendTo(t)}search(e){const t=n.AppState.displayProduct;if(""===e)return i.drawProducts.appendTo(t),t;const a=t.filter((({name:t})=>t.toLowerCase().includes(e.toLowerCase())));return 0===a.length?i.drawProducts.appendToWrong():i.drawProducts.appendTo(a),a}}},18:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Storage=t.LOCAL_STORAGE=void 0,t.LOCAL_STORAGE={brand:"",product:"",country:"",type:"",rangeQuantity:"",rangeWeight:"",cartCounter:"",search:"",sort:""},t.Storage=class{constructor(){this._data=t.LOCAL_STORAGE,this._init()}_init(){window.addEventListener("load",(()=>Object.keys(this._data).map((e=>{null===localStorage.getItem(e)?this._data[e]="":this._data[e]=localStorage.getItem(e)||""})))),window.addEventListener("beforeunload",(()=>{Object.entries(this._data).forEach((([e,t])=>{localStorage.setItem(e,JSON.stringify(t))}))}))}}},607:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),a(307),a(97);const i=n(a(962));window.onload=()=>{console.log("Hello, friend."),console.log("\n-------------------------------------------------\nДобрый день. Если будет возможность перепроверить работу ближе к окончанию кросс-чека -- это будет просто отлично. Если нет, то ничего страшного. В любом случае Спасибо.\n-------------------------------------------------\n"),console.log("\nscore = about 95\n+10 Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке \n+10 Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине \n+20 Добавление товаров в корзину \n+20 Сортировка\n+5 Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, Извините, совпадений не обнаружено\n+30 Поиск"),(new i.default).start(),document.querySelector(".search").focus()}},536:e=>{e.exports=JSON.parse('{"brand":["Movenpick","Dallmayr","Illy","Lavazza"],"product":["Beans","Pods","Ground"],"country":["CH","DE","IT"],"type":["Espresso"],"reset":["Filters reset","Common reset"]}')},351:e=>{e.exports=JSON.parse('[{"name":"The Divine Coffee Beans","img":"../image/products/4006581205007.jpg","fields":{"brand":"Movenpick","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Switzerland","price":"10.81","count":"20"},"description":"The Movenpick classic. Exquisite highland coffee beans from the best growing regions of the world give this coffee its rich aroma. The noble blend of 100% Arabica beans develops its balanced aroma through careful long roasting.","date":"1 May 2023","ean":"4006581205007"},{"name":"Selection of the Year 2022 Hakuna Matata Coffee beans","img":"../image/products/4008167035503.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Germany","price":"10.26","count":"10"},"description":"Dallmayr selection of the year 2022: Hakuna Matata. The phrase Hakuna Matata comes from Swahili, a language that is widely spoken in eastern Africa. Loosely translated, it means “no worries!","date":"1 Jun 2023","ean":"4008167035503"},{"name":"Movenpick Schümli Coffee Beans","img":"../image/products/m_venpick_sch_mli_bohnen_1kg.jpg","fields":{"brand":"Movenpick","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Switzerland","price":"10.81","count":"20"},"description":"Precious 100% Arabica coffee beans and the finely balanced, careful and long roasting give this coffee its mild, sweet and aromatic taste with a velvety crema. The Schümli Swiss style is the perfect delightful addition to breakfast. Low in acid and bitter substances due to careful long roasting.","date":"1 Jan 2023","ean":"4006581170060"},{"name":"Illy Colombia Beans","img":"../image/products/8003753104904.jpg","fields":{"brand":"Illy","type":"Coffee","product":"Coffee beans","weight":"250","country":"Italy","price":"6.20","count":"11"},"description":"The refined Arabica coffee ILLY selects offers a smooth balance between sweetness, bitterness and acidity. The rich aroma contains surprising notes of caramel and nuts and delicate hints of chocolate and toasted bread. The Andes Mountains in Colombia provide the ideal environment for the cultivation of high-quality Arabica coffee. This coffee has a rich and soft aroma, which is enhanced by the special roasting profile.","date":"1 Jul 2023","ean":"8003753104904"},{"name":"Edle Composition Ground Coffee","img":"../image/products/m_venpick_edle_composition_gemalen_500gr.jpg","fields":{"brand":"Movenpick","type":"Coffee","product":"Coffee beans","weight":"500","country":"Switzerland","price":"4.84","count":"5"},"description":"This balanced Movenpick blend, composed of distinguished coffee varieties, offers a harmonious taste experience through its intense, aromatic taste and a rich flavour. The selected coffee arrangement of fine Arabica and Robusta beans is also characterised by a perfectly coordinated roasting process and captivates with its spicy, delicate character. Movenpick Fine Balance is available pre-ground and is suitable for all fully automatic coffee machines.","date":"1 Nov 2022","ean":"4006581012162"},{"name":"Crema Prodomo Coffee beans","img":"../image/products/dallmayr_crema_prodomo_bohnen_1kg.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Germany","price":"10.26","count":"20"},"description":"Dallmayr prodomo is a premium blend of the finest arabica highland coffee beans from the best growing areas in the world. The typical taste primarily comes from the arabica beans from the fertile southern provinces of Ethiopia - the birthplace of coffee.","date":"1 Sep 2023","ean":"4008167055105"},{"name":"Caffè Crema Gusto Italiano Intenso Coffee Beans","img":"../image/products/m_venpick_gusto_italiano_bohnen_1kg.jpg","fields":{"brand":"Movenpick","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Switzerland","price":"10.81","count":"14"},"description":"A blend composed of selected Arabica coffee from Central America and Robusta coffee from Africa certified by Max Havelaar. The carefully selected beans, slowly roasted in the Italian way, develop an intense aroma with delicate notes of chocolate and a smooth cream. This coffee is packed freshly roasted and protected by a freshness valve on the pack that guarantees the preservation of aromas and its delicious “Gusto Italiano”. Perfect for caffè crema with a velvety, golden froth and for coffee-based drinks such as cappuccino and latte macchiato.","date":"1 Jan 2023","ean":"4006581017815"},{"name":"Autentico Ground Coffee","img":"../image/products/m_venpick_autentico_gemhalen_gemahlen_3.jpg","fields":{"brand":"Movenpick","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Switzerland","price":"5.22","count":"12"},"description":"The finely ground Movenpick EL AUTENTICO consists 100% of coffee coming from Rainforest coffeerista_baseiance certified farms. A blend of Arabica beans unfolds with its mild flavor that is derived from a gentle slow roasting process, which gives Movenpick EL AUTENTICO a balanced and full-bodied taste.","date":"1 Dec 2022","ean":"4006581012407"},{"name":"Caffè Crema Perfetto Coffee beans","img":"../image/products/dallmayr_caffe_crema_perfetto_bohnen.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Germany","price":"9.15","count":"11"},"description":"Blue, like the desire for coffee – that’s the Caffè Crema perfetto coffee speciality. A finely-balanced blend of mild arabica and powerful robusta beans Mild, aromatic and balanced, with a delicate mix of aromas and well-rounded roasted notes Its trademark: extra crema – simply “perfetto” Also delicious as a cappuccino or latte macchiato.","date":"1 Mar 2023","ean":"4008167040101"},{"name":"1kg Dallmayr Espresso Intenso Beans","img":"../image/products/dallmayr_espresso_intenso_bonen_1kg.jpg","fields":{"brand":"Dallmayr","type":"Espresso","product":"Coffee beans","weight":"1000","country":"Germany","price":"9.15","count":"8"},"description":"With Espresso intenso, you can enjoy the aromatic flavour of the South. High-quality arabica and robusta beans go through a long and gentle roasting process for this coffee speciality. The result is an espresso with character, making you think of Italy with every sip. Espresso Intenso guarantees an intense espresso experience with the typical flavour and aroma of dark chocolat. A balanced blend of arabica and robusta beans  Typiccoffeerista_basey Italian: lively and intense, with strong roasted aromas and low acidity. A thick crema the colour of roasted hazelnuts. Enjoy as a pure espresso, cappuccino or latte macchiato","date":"1 Dec 2022","ean":"4008167040309"},{"name":"Illy Monoarabica Ethiopia Beans","img":"../image/products/illy_monoarabica_bonen_ethiopia_250gr_1.jpg","fields":{"brand":"Illy","type":"Espresso","product":"Coffee beans","weight":"250","country":"Italy","price":"6.09","count":"19"},"description":"Delicate flavor, floral jasmine notes. Coffee is believed to have originated in the forests of Ethiopia, and the coffee plant still grows here in the wild, amid the shady vegetation. It is picked by hand in the plantations and even in domestic gardens, where coffee ripens alongside the other crops. A special coffee with a mild, delicate aroma and a unique perfume with distinctive floral notes of jasmine and a hint of citrus fruit.","date":"1 Feb 2023","ean":"0000000000101"},{"name":"Dallmayr Prodomo Decaffeinated Ground Coffee","img":"../image/products/dallmayr_entkoffeiniert_gemalen.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Ground coffee","weight":"500","country":"Germany","price":"5.32","count":"25"},"description":"Popular for generations, Dallmayr prodomo is a top-quality blend of the finest highland arabica beans. These varieties, which stand out for their special aroma, originate from Ethiopia, the birthplace of coffee. The full aroma roasting process that follows gives it an unmistakeably distinctive flavour. A supreme pleasure for coffeerista_base coffee lovers – including those with sensitive tastebuds. Dallmayr prodomo has a rounded, full-bodied flavour, a delicate aroma and low acidity.","date":"1 Jan 2023","ean":"4008167113799"},{"name":"Movenpick El Autentico Caffe Crema Coffee Beans","img":"../image/products/m_venpick_autentico_bohnen_1kg.jpg","fields":{"brand":"Movenpick","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Switzerland","price":"10.81","count":"2"},"description":"Movenpick EL AUTENTICO is made â€‹â€‹from beans from Rainforest coffeerista_baseiance certified farms. The blend of the finest growing regions gives Movenpick EL AUTENTICO a balanced and full-bodied taste.","date":"1 Jan 2023","ean":"4006581801834"},{"name":"Dallmayr Classic Ground Coffee","img":"../image/products/dallmayr_classic_500_gram.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Ground coffee","weight":"500","country":"Germany","price":"4.53","count":"28"},"description":"Dallmayr Classic has a strong and aromatic flavor. A coffee perfect for any occasion.","date":"1 Jan 2023","ean":"4008167123699"},{"name":"Dallmayr Prodomo Naturmild Ground Coffee","img":"../image/products/dallmayr_prodomo_naturmild_gemalen_500.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Ground coffee","weight":"500","country":"Germany","price":"5.32","count":"15"},"description":"A top of the range blend of mild Arabica beans gives this coffee its well-balanced aroma and smooth flavour. This variety is inherently mild with low acidity. To round off the experience of enjoying this naturcoffeerista_basey mild coffee, the beans are roasted especicoffeerista_basey gently. Guaranteed from 100% Arabica beans with low acid content.","date":"1 Jan 2023","ean":"4008167103912"},{"name":"Dallmayr Espresso Monaco Ground in cans","img":"../image/products/311_49.jpg","fields":{"brand":"Dallmayr","type":"Espresso","product":"Ground coffee","weight":"200","country":"Germany","price":"3.11","count":"15"},"description":"Selected Arabica beans give this espresso its fine, distinguished and delicate taste. Roasted and ground according to an original Italian recipe especicoffeerista_basey for use in espresso machines. Full-bodied and delicately tart, with the typical Dallmayr aroma and a velvety crema. 100% Arabica.","date":"1 Nov 2022","ean":"0000000000102"},{"name":"Lavazza DEK Coffee Beans","img":"../image/products/8000070010550.jpg","fields":{"brand":"Lavazza","type":"Coffee","product":"Coffee beans","weight":"250","country":"Italy","price":"6.23","count":"1"},"description":"A well-balanced, aromatic blend. Experience an unforgettable, full-bodied flavour. The ideal blend if you want to avoid caffeine without giving up the luxury of Italian coffee.","date":"1 Feb 2024","ean":"8000070010550"},{"name":"Lavazza Expert Aroma Top Coffee Beans","img":"../image/products/illy_monoarabica_bonen_ethiopia_250gr_1.jpg","fields":{"brand":"Lavazza","type":"Espresso","product":"Coffee beans","weight":"1000","country":"Italy","price":"14.16","count":"15"},"description":"Sweet and aromatic. A well-rounded espresso with subtle acidity, notes of cereals and a persistent dried fruit aftertaste. 100% Arabica from Brazil – Minas Gerais Notes: Chocolate and roasted cerea Intensity: 6 (1-10) Roast: Medium.","date":"1 Sep 2023","ean":"8000070029620"},{"name":"Lavazza Gran Riserva Coffee Beans","img":"../image/products/illy_monoarabica_bonen_ethiopia_250gr_1.jpg","fields":{"brand":"Lavazza","type":"Coffee","product":"Coffee beans","weight":"1000","country":"Italy","price":"15.69","count":"15"},"description":"With hints of maple syrup and walnut, Gran Riserva contains a fine selection of washed Arabica hand-picked in the highlands of Central and South America, carefully blended with washed and semi washed Robusta - such as Kaapi Royale (India) and Java - and natural Arabica. Origin: Central and South America and Kaapi Royale (India) and Java Blend: 80% Arabica and 20% Robusta Aroma: Maple syrup and walnut Taste: Caramelized sweetness and full body.","date":"1 Apr 2023","ean":"8000070022300"},{"name":"Lavazza Qualita Oro Ground Coffee","img":"../image/products/8000070012783.jpg","fields":{"brand":"Lavazza","type":"Espresso","product":"Ground coffee","weight":"250","country":"Italy","price":"3.43","count":"30"},"description":"For those who love PURE AROMA. LAVAZZA ORO is a selection of extraordinarily sweet, 100% fine Arabica coffees. An intense, aromatic blend for true coffee connoisseurs. Suitable for coffeerista_base coffee makers. 100% arabica. Roasting: Medium.","date":"1 Aug 2023","ean":"8000070012783"},{"name":"Coffee Pods Lavazza Intenso","img":"../image/products/8000070026827.jpg","fields":{"brand":"Lavazza","type":"Espresso","product":"Coffee pods","weight":"250","country":"Italy","price":"4.76","count":"20"},"description":"Rich with a full body. Intense aroma. Notes of wood and cacao. Origin: South-East Asia. Intensity (1-10): 8","date":"1 Feb 2023","ean":"8000070026827"},{"name":"Coffee Pods Dallmayr Classic","img":"../image/products/8000070026827.jpg","fields":{"brand":"Dallmayr","type":"Coffee","product":"Coffee pods","weight":"250","country":"Germany","price":"3.15","count":"10"},"description":"Dallmayr Classic is exhilaratingly full-caffeine whilst at the same time irritants and bitter compounds have been removed prior to roasting by a special refinement process. This full-aroma roasting process imparts that signature taste - a real delight for coffeerista_base coffee connoisseurs. Its also suitable for those who tend to react sensitively to coffee. Guaranteed made from 100% Arabica beans.","date":"1 Nov 2022","ean":"4008167314561"}]')}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(607)})();
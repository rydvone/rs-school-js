const ELEMENT_DIV = 'div';

export class ElementTemplate {
  private _element: HTMLElement | null;
  constructor() {
    this._element = null;
  }

  createDiv(elClassName: string) {
    const element = document.createElement(ELEMENT_DIV);
    element.className = elClassName;
    return element;
  }

  addClassName(el: HTMLElement, className: string) {
    el.classList.add(className);
  }

  createNode(elName: string, elClassName: string): HTMLElement | HTMLInputElement {
    const element = document.createElement(elName);
    element.className = elClassName;
    return element;
  }

  clearNode(el: HTMLElement) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  setInner(el: HTMLElement, contentInner: string) {
    el.innerHTML = contentInner;
  }

  getInner(el: HTMLElement) {
    return el.innerHTML;
  }

  clearInner(el: HTMLElement) {
    el.innerHTML = '';
  }

  get element() {
    return this._element;
  }
}

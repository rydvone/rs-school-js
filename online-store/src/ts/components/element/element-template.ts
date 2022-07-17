export class ElementTemplate {
  protected _element: HTMLElement | null;
  constructor() {
    this._element = null;
  }

  createHTMLElement(el: string, className: string, classNameAdditional?: string) {
    const element = document.createElement(el);
    this.setClassName(element, className, classNameAdditional);
    return element;
  }

  createDiv(className: string, classNameAdditional?: string) {
    return this.createHTMLElement('div', className, classNameAdditional);
  }

  setClassName(
    el: HTMLElement | HTMLInputElement,
    className: string,
    classNameAdditional?: string
  ) {
    el.classList.add(className);
    if (classNameAdditional) {
      el.classList.add(classNameAdditional);
    }
  }

  setHTMLElement(el: HTMLElement, className: string, classNameAdditional?: string) {
    el.classList.add(className);
    if (classNameAdditional) {
      el.classList.add(classNameAdditional);
    }
  }

  clearNode(el: HTMLElement) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  clearInner(el: HTMLElement) {
    el.innerHTML = '';
  }
}

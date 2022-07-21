export class ElementTemplate {
  createHTMLElement(el: string, className: string) {
    const element = document.createElement(el);
    this.setClassName(element, className);
    return element;
  }

  createDiv(className: string) {
    return this.createHTMLElement('div', className);
  }

  setClassName(el: HTMLElement, className: string) {
    el.className = className;
  }

  addClassName(el: HTMLElement, className: string) {
    el.classList.add(className);
  }

  setHTMLElement(el: HTMLElement, className: string) {
    el.classList.add(className);
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

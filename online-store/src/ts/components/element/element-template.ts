type IFunc = (this: void, event: MouseEvent) => void;

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

  click(el: HTMLElement, func: IFunc) {
    el.addEventListener('click', func);
  }

  unClick(el: HTMLElement, func: IFunc) {
    el.removeEventListener('click', func);
  }

  clearNode(el: HTMLElement) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  addClassSelected(el: HTMLElement) {
    el.classList.add('selected');
  }

  removeClassSelected(el: HTMLElement) {
    el.classList.remove('selected');
  }

  toggleClassSelected(el: HTMLElement) {
    el.classList.toggle('selected');
  }

  // checkNullable(func) {
  //   if (this._element === null) {
  //     return console.log('Warning! There is No HTMLElement!');
  //   } else {
  //     return func;
  //   }
  // }
}

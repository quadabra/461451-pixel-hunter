export default class AbstractView {
  constructor(data, callback) {
    this.data = data;
    this.callback = callback;
    this.elements = null;
  }
  get element() {
    if (!this._markup) {
      let fragment = document.createElement(`div`);
      fragment.innerHTML = this.getMarkup();
      this._markup = document.createDocumentFragment();
      while (fragment.childNodes.length) {
        this._markup.appendChild(fragment.childNodes[0]);
      }
      this.bind();
    }
    return this._markup;
  }
  get template() {

  }

  render() {

  }

  getMarkup() {
  }
  bind() {
    if (this.elements) {
      for (let element of this.elements) {
        element.addEventListener(`click`, this.callback);
      }
    }
  }
  clear() {
    if (this.elements) {
      for (let element of this.elements) {
        element.removeEventListener(`click`, this.callback);
      }
    }
  }
}

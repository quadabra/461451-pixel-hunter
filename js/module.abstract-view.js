export default class AbstractView {
  constructor(data, callback) {
    this.data = data;
    this.callback = callback;
    this.actionElements = null;
  }
  get element() {
    if (!this._markup) {
      let fragment = this.render();
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
    let container = document.createElement(`div`);
    container.innerHTML = this.template();
    return container
  }

  bind() {
    if (this.actionElements) {
      for (let element of this.actionElements) {
        element.addEventListener(`click`, this.callback);
      }
    }
  }
  clear() {
    if (this.actionElements) {
      for (let element of this.actionElements) {
        element.removeEventListener(`click`, this.callback);
      }
    }
  }
}

export default class AbstractView {
  constructor(data, callback) {
    this.data = data;
    this.callback = callback;
    this.actionElements = null;
  }

  get element() {
    if (!this._markup) {
      this._markup = this.render();
      this.bind();
    }
    return this._markup;
  }

  get template() {

  }

  render() {
    let fragment = document.createElement(`div`);
    fragment.innerHTML = this.template();
    return fragment;
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

import AbstractView from "../module.abstract-view";
import back from './components/component.go-back';
import timer from './components/component.timer';
import lives from './components/component.lives';

export default class HeaderView extends AbstractView {
  constructor(model, callback) {
    super();
    this.model = model;
    this.back = back();
    this.timer = timer(this.model.timer);
    this.lives = lives(this.model.lives);
    this.callback = callback;
  }
  template() {
    return `
  <header class="header">
    ${this.header().join(``)}
  </header>`;
  }

  warning() {
    return `<div style="position: fixed; top: 30%; background-color: red; z-index: 101;
left: 50%; transform: translateX(-50%);">
<h2>Сбросить всё?</h2>
<p style="display: flex">
<button class="reset" style="flex-grow: 1">ДА</button>
<button class="cancel" style="flex-grow: 1">НЕТ</button>
</p>
</div>`;
  }

  header() {
    let headerContent = [];
    headerContent.push(this.back);
    headerContent.push(this.timer);
    headerContent.push(this.lives);
    return headerContent;
  }

  bind() {
    this.actionElement = this.element.querySelector(`.back`);
    this.actionElement.addEventListener(`click`, () => {
      let fragment = document.createElement(`div`);
      fragment.innerHTML = this.warning();
      this.element.appendChild(fragment);
      fragment.addEventListener(`click`, (evt) => {
        let reset = this.element.querySelector(`.reset`);
        let cancel = this.element.querySelector(`.cancel`);
        if (evt.target === reset) {
          this.callback();
        } else if (evt.target === cancel) {
          this.element.removeChild(fragment);
        }
      });
    });
  }
}

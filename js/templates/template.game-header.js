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
    ${this.back}
    ${this.timer}
    ${this.lives}
  </header>`;
  }

  static warning() {
    return `<div style="position: fixed; top: 30%; background-color: red; z-index: 101;
left: 50%; transform: translateX(-50%);">
<h2>Сбросить всё?</h2>
<p style="display: flex">
<button class="reset" style="flex-grow: 1">ДА</button>
<button class="cancel" style="flex-grow: 1">НЕТ</button>
</p>
</div>`;
  }

  bind() {
    this.actionElement = this.element.querySelector(`.back`);
    this.actionElement.addEventListener(`click`, () => {
      const fragment = document.createElement(`div`);
      fragment.innerHTML = HeaderView.warning();
      this.element.appendChild(fragment);
      fragment.addEventListener(`click`, (evt) => {
        const reset = this.element.querySelector(`.reset`);
        const cancel = this.element.querySelector(`.cancel`);
        if (evt.target === reset) {
          this.callback();
        } else if (evt.target === cancel) {
          this.element.removeChild(fragment);
        }
      });
    });
  }
}

import AbstractView from "../../module.abstract-view";
import Application from '../../module.application';

export default class BackView extends AbstractView {
  constructor() {
    super();
  }
  template() {
    return `
  <div class="header__back">
  <button class="back">
  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
  <img src="img/logo_small.svg" width="101" height="44">
  </button>
  </div>`;
  }

  bind() {
    this.actionElement = this.element.querySelector(`.back`);
    this.actionElement.addEventListener(`click`, () => Application.showGreeting());
  }
}

import gameData from "../module.game-data";
import AbstractView from "../module.abstract-view";

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }
  template() {
    return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${gameData.introData.text}</p>
    </div>
  </div>`;
  }
  bind() {
    this.actionElement = this.element.querySelector(`.intro__asterisk`);
    this.actionElement.addEventListener(`click`, () => this.onShowGreeting());
    super.bind();
  }
}

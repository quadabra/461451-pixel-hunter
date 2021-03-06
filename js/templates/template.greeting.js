import gameData from "../module.game-data";
import AbstractView from "../module.abstract-view";

export default class GreetingView extends AbstractView {
  constructor() {
    super();
  }
  template() {
    return `
<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${gameData.greetingData.title}</h3>
      <p>${gameData.greetingData.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;
  }
  bind() {
    this.actionElement = this.element.querySelector(`.greeting__continue`);
    this.actionElement.addEventListener(`click`, () => this.onShowRules());
    super.bind();
  }
}

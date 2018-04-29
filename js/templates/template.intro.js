import gameData from "../module.game-data";
import AbstractView from "../module.abstract-view";
import Application from "../module.main-apps";

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.callback = () => Application.showGreeting();
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
    this.actionElements = this.element.querySelectorAll(`.intro__asterisk`);
    super.bind();
  }
}

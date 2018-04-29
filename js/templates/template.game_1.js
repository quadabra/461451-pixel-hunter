import ActionView from './components/component.action';
import statsBar from './components/component.statsbar';
import gameState from "../module.game-state";
import AbstractView from "../module.abstract-view";

export default class FirstGameType extends AbstractView {
  template() {
    return `
  <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content">
    ${this.data.tasks.map((it) =>
    `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="468" height="458">
        ${new ActionView(it).template()}
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
  </div>`;
  }
  bind() {
    this.actionElements = this.element.querySelectorAll(`.game__content`);
    super.bind();
  }
}


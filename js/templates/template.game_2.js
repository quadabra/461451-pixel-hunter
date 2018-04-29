import ActionView from './components/component.action';
import statsBar from './components/component.statsbar';
import gameState from "../module.game-state";
import AbstractView from "../module.abstract-view";

export default class SecondGameType extends AbstractView {
  template() {
    return `
 <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${this.data.tasks[0].image}" alt="Option 1" width="705" height="455">
       ${new ActionView(this.data.tasks[0]).template()}
      </div>
    </form>
    ${statsBar(gameState)}
  </div>`;
  }
  bind() {
    this.actionElements = this.element.querySelectorAll(`.game__answer`);
    super.bind();
  }
}

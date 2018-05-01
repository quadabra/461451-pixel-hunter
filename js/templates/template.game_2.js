import actionView from './components/component.action';
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
       ${actionView(this.data.tasks[0])}
      </div>
    </form>
    ${statsBar(gameState)}
  </div>`;
  }
  bind() {
    this.actionElement = this.element.querySelector(`.game__content`);
    this.actionElement.addEventListener(`click`, () => {
      const answer0 = document.forms[0].elements.question1.value;
      if (answer0) {
        this.onAnswer(answer0);
      }
    });
    super.bind();
  }
}

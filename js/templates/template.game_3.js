import statsBar from './components/component.statsbar';
import gameState from '../module.game-state';
import AbstractView from '../module.abstract-view';

export default class ThirdGameType extends AbstractView {
  template() {
    return `
  <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content  game__content--triple">
    ${this.data.tasks.map((it) => `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="304" height="455">
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}`;
  }
  bind() {
    this.actionElements = this.element.querySelectorAll(`.game__option`);
    super.bind();
  }
}

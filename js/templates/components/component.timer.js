import AbstractView from '../../module.abstract-view';
import gameState from '../../module.game-state';

export default class TimerView extends AbstractView {
  constructor() {
    super();
  }
  template() {
    return `<h1 class="game__timer">${gameState.timer}</h1>`;
  }
}

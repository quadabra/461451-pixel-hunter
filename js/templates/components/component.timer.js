import AbstractView from '../../module.abstract-view';
import gameState from '../../module.game-state';
// export default (state) => (`<h1 class="game__timer">${state.timer}</h1>`);

export default class TimerView extends AbstractView {
  constructor() {
    super();
  }
  template() {
    return `<h1 class="game__timer">${gameState.timer}</h1>`;
  }
}

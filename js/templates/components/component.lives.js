import AbstractView from '../../module.abstract-view';
import gameState from '../../module.game-state';

export default class LivesView extends AbstractView {
  constructor() {
    super();
    this.lives = gameState.lives;
  }

  template() {
    return `
  <div class="game__lives">
    ${new Array(3 - gameState.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(gameState.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
  </div>`;
  }
}

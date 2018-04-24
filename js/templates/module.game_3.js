import createTemplateElement from '../module.create-element';
import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import statsBar from './components/template.statsbar';
import gameState from '../module.game-state';

export default {
  gameTemplate(gameData) {
    return createTemplateElement(`
  <header class="header">
    ${back()}
    ${timer(gameState)}
    ${lives(gameState)}
  </header>
  <div class="game">
    <p class="game__task">${gameData.text}</p>
    <form class="game__content  game__content--triple">
    ${gameData.tasks.map((it) => `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="304" height="455">
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}`)
  },

  gameCtrl(data, callback) {
    const game = document.querySelectorAll(`.game__option`);
    for (let i = 0; i < data.tasks.length; i++) {
      game[i].addEventListener('click', () => {
        if (data.tasks[i].type === `paint`) {
          gameState.setStats(`correct`);
          callback();
        } else {
          gameState.setStats(`wrong`);
          gameState.setLives();
          callback();
        }
      })
    }
  }
}

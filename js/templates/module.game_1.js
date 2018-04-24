import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import action from './components/template.action';
import statsBar from './components/template.statsbar';
import gameState from "../module.game-state";

export default {
  gameTemplate(gameData) {
    return (`
  <header class="header">
    ${back()}
    ${timer(gameState)}
    ${lives(gameState)}
  </header>
  <div class="game">
    <p class="game__task">${gameData.text}</p>
    <form class="game__content">
    ${gameData.tasks.map((it) =>
      `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="468" height="458">
        ${action(it)}
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
  </div>`)
  },

  gameCtrl(data, callback) {
    document.forms[0].addEventListener(`change`, function () {
      const val0 = document.forms[0].elements.question1.value;
      const val1 = document.forms[0].elements.question2.value;
      if (val0 && val1) {
      if (data.tasks[0].type === val0 && data.tasks[1].type === val1) {
        gameState.setStats(`correct`);
        callback();
      } else {
        gameState.setStats(`wrong`);
        gameState.setLives();
        callback();
      }
    }
    });
  }
}

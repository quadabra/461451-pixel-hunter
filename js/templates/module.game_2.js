import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import action from './components/template.action';
import statsBar from './components/template.statsbar';
import gameState from '../module.game-state';

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
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${gameData.tasks[0].image}" alt="Option 1" width="705" height="455">
        ${action(gameData.tasks[0])}
      </div>
    </form>
    ${statsBar(gameState)}
  </div>`);
  },
  gameCtrl(data, callback) {
    document.forms[0].addEventListener(`change`, function () {
      const val0 = document.forms[0].elements.question1.value;
      if (document.forms[0].elements.question1.value) {
        if (data.tasks[0].type === val0) {
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

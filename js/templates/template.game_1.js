import createTemplateElement from '../module.create-element';
import back from './components/component.go-back';
import lives from './components/component.lives';
import timer from './components/component.timer';
import action from './components/component.action';
import statsBar from './components/component.statsbar';
import gameState from "../module.game-state";
import AbstractView from "../module.abstract-view";

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
    <form class="game__content">
    ${gameData.tasks.map((it) =>
    `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="468" height="458">
        ${action(it)}
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
  </div>`);
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
};

class FirstGameType extends AbstractView {
  get template() {
    return `
  
  <div class="game">
    <p class="game__task">${this.data.text}</p>
    <form class="game__content">
    ${gameData.tasks.map((it) =>
    `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="468" height="458">
        ${action(it)}
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
  </div>`;
  }
}

export {FirstGameType};

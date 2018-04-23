import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import action from './components/template.action';
import statsBar from './components/template.statsbar';
import gameState from "../module.game-state";
import {twoImages} from "../module.game-engine";

const game1Template = (gameData) => (`
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
      </div>`
).join(``)}
    </form>
  </div>
  ${statsBar(gameState)}
`);

function game1Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    const val1 = document.forms[0].elements.question1.value;
    const val2 = document.forms[0].elements.question2.value;
    if (val1 && val2) {
      goNext();
      twoImages([val1, val2]);
    }
  });
}

const gameHeader = (gameState) => (`
  <header class="header">
  ${back()}
  ${timer(gameState)}
  ${lives(gameState)}
  </header>
`);

const gameContent = (gameData) => (`
<div class="game">
  <p class="game__task">${gameData.text}</p>
  <form class="game__content">
  ${gameData.tasks.map((it) =>
  `<div class="game__option">
    <img src="${it.image}" alt="${it.alt}" width="468" height="458">
    ${action(it)}
  </div>`).join(``)}
  </form>
  </div>
`);

const gameStats = (gameState) => (`
  ${statsBar(gameState)};
`);

export default (data, state) => {
  const gameTemplate = `\
  ${gameHeader(state)}
  ${gameContent(data)}
  ${gameStats(state)}`;
}
export {game1Template, game1Ctrl}

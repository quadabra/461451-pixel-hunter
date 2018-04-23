import createTemplateElement from '../module.create-element.js';
import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import action from './components/template.action';
import statsBar from './components/template.statsbar';
import gameState, {answerTwoImages} from "../module.game-state";

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
      </div>`).join(``)}
    </form>
  </div>
  ${statsBar(gameState)}
`);

function game1Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    const val0 = document.forms[0].elements.question1.value;
    const val1 = document.forms[0].elements.question2.value;
    if (val0 && val1) {
      answerTwoImages(val0, val1);
      goNext();
    }
  });
}

const gameHeader = (state) => (`
  <header class="header">
  ${back()}
  ${timer(state)}
  ${lives(state)}
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

const gameStats = (state) => (`
  ${statsBar(state)};
`);

export default (data, state) => {
  const content = `\
  ${gameHeader(state)}
  ${gameContent(data)}
  ${gameStats(state)}`;

  const gameTemplate = createTemplateElement(content);
  const gameForm = gameTemplate.forms[0];

  gameForm.addEventListener(`change`, (nextPage) => {
    const val0 = document.forms[0].elements.question1.value;
    const val1 = document.forms[0].elements.question2.value;
    if (val0 && val1) {
      if (data.tasks[0].type === val0 && data.tasks[1].type === val1) {
        setCorrect();
        nextPage();
      } else {
        setWrong();
        nextPage();
      }
    }
  });
  return gameTemplate;
};
export {game1Template, game1Ctrl};

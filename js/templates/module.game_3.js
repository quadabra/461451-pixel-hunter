import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import statsBar from './components/template.statsbar';
import gameState from '../module.game-state';
import createTemplateElement from "../module.create-element";
import action from "./components/template.action";

const game3Template = (game) =>(`
  <header class="header">
    ${back()}
    ${timer(gameState)}
    ${lives(gameState)}
  </header>
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content  game__content--triple">
    ${game.tasks.map((it) => `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="304" height="455">
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
`);

function game3Ctrl(goNext) {
  const game = document.querySelector(`.game`);
  game.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    if (evt.target.className.includes(`game__option`)) {
      goNext();
    } else {
      return;
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

const gameStats = (state) => (`
  ${statsBar(state)};
`);

const gameContent = (game) => (`
    <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content  game__content--triple">
    ${game.tasks.map((it) => `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="304" height="455">
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
    </div>
`);

export default (data, state, callback) => {
  const content = `\
  ${gameHeader(state)}
  <div class="game">
  ${gameContent(data)}
  ${gameStats(state)}
  </div>`;

  const gameTemplate = createTemplateElement(content);
  const game = document.querySelector(`.game`);

  game.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    if (evt.target.className.includes(`game__option`)) {
      callback();
    } else {
      return;
    }
  });
  return gameTemplate;
};

export {game3Template, game3Ctrl};

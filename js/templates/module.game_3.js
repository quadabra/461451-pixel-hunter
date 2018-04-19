import createTemplateElement from '../module.template';
import headerTemplate from './components/template.header';
import statsBar from './components/template.statsbar';
import footer from './components/template.footer';
import gameState from '../module.game-state';
import gameData from '../module.game-data';

const game3Template = document.createDocumentFragment();

const mainTemplate = (game) =>(`
  ${headerTemplate(gameState)}
  <div class="game">
    <p class="game__task">${game.task}</p>
    <form class="game__content  game__content--triple">
    ${game.images.map((it, i) => `<div class="game__option">
        <img src="${it}" alt="Option ${i}" width="304" height="455">
      </div>`).join(``)}
    </form>
    ${statsBar(gameState)}
    ${footer()}
`);

game3Template.appendChild(createTemplateElement(mainTemplate(gameData[`game-3`])));

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

export {game3Template, game3Ctrl};

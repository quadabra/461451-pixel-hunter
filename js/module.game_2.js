import createTemplateElement from './module.template';
import headerTemplate from './module.header';
import statsBar from './module.statsbar';
import footer from './modutle.footer';
import gameState from './module.game-state';
import gameData from './module.game-data';

const game2Template = document.createDocumentFragment();

const mainTemplate = (game) => (`
  ${headerTemplate(gameState)}
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game.tasks[0].image}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--${game.tasks[0].answers[0].type}">
          <input name="question1" type="radio" value="${game.tasks[0].answers[0].type}">
          <span>${game.tasks[0].answers[0].text}</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--${game.tasks[0].answers[1].type}">
          <input name="question1" type="radio" value="${game.tasks[0].answers[1].type}">
          <span>${game.tasks[0].answers[1].text}</span>
        </label>
      </div>
    </form>
    ${statsBar(gameState)}
    ${footer()}
`);

game2Template.appendChild(createTemplateElement(mainTemplate(gameData[`game-2`])));

function game2Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value) {
      goNext();
    }
  });
}

export {game2Template, game2Ctrl};

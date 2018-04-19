import createTemplateElement from './module.template';
import headerTemplate from './module.header';
import statsBar from './module.statsbar';
import footer from './modutle.footer';
import gameState from './module.game-state';
import gameData from './module.game-data';

const game1Template = document.createDocumentFragment();

const mainTemplate = (game) => (`
  ${headerTemplate(gameState)}
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content">
    ${game.tasks.map((it, index) =>
    `<div class="game__option">
        <img src="${it.image}" alt="Option ${index + 1}" width="468" height="458">
        ${[...it.answers].map((answer) => `<label class="game__answer game__answer--${answer.type}">
          <input name="question${index + 1}" type="radio" value="${answer.type}">
          <span>${answer.text}</span>
        </label>`).join(``)}
      </div>`
  ).join(``)}
    </form>
  </div>
  ${statsBar(gameState)}
  ${footer()}
`);

game1Template.appendChild(createTemplateElement(mainTemplate(gameData[`game-1`])));

function game1Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value && document.forms[0].elements.question2.value) {
      goNext();
    }
  });
}

export {game1Template, game1Ctrl};

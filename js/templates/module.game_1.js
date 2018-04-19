import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import statsBar from './components/template.statsbar';
import footer from './components/template.footer';
import gameState from '../module.game-state';

const game1Template = (game) => (`
  <header class="header">
    ${back()}
    ${timer(gameState)}
    ${lives(gameState)}
  </header>
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

function game1Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value && document.forms[0].elements.question2.value) {
      goNext();
    }
  });
}

export {game1Template, game1Ctrl};

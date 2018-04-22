import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import action from './components/template.action';
import statsBar from './components/template.statsbar';
import gameState from '../module.game-state';

const game2Template = (game) => (`
  <header class="header">
    ${back()}
    ${timer(gameState)}
    ${lives(gameState)}
  </header>
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game.tasks[0].image}" alt="Option 1" width="705" height="455">
        ${action(game.tasks[0])}
      </div>
    </form>
    ${statsBar(gameState)}
`);

function game2Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value) {
      goNext();
    }
  });
}

export {game2Template, game2Ctrl};

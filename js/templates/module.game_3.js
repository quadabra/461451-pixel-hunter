import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import statsBar from './components/template.statsbar';
import gameState from '../module.game-state';

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

export {game3Template, game3Ctrl};

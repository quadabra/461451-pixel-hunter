import back from './components/template.go-back';
import lives from './components/template.lives';
import timer from './components/template.timer';
import action from './components/template.action';
import statsBar from './components/template.statsbar';
import footer from './components/template.footer';
import gameState, {mutate} from '../module.game-state';


const game1Template = (game) => (`
  <header class="header">
    ${back()}
    ${timer(gameState)}
    ${lives(gameState)}
  </header>
  <div class="game">
    <p class="game__task">${game.text}</p>
    <form class="game__content">
    ${game.tasks.map((it) =>
    `<div class="game__option">
        <img src="${it.image}" alt="${it.alt}" width="468" height="458">
        ${action(it)}
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

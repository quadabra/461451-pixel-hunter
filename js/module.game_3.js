import createTemplateElement from './module.template';
import headerTemplate from './module.template-header'
import mainTemplate from './module.template-game3'
import statsBar from './module.template-statsbar'
import footer from './modutle.template-footer'
import gameState from './state';
import gameData from './module.game-data'

const game3Template = document.createDocumentFragment();

game3Template.appendChild(createTemplateElement(headerTemplate(gameState)));
game3Template.appendChild(createTemplateElement(mainTemplate(gameData["game-3"])));
game3Template.appendChild(createTemplateElement(statsBar(gameState)));
game3Template.appendChild(createTemplateElement(footer()));

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

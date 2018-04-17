import createTemplateElement from './module.template';
import headerTemplate from './module.template-header';
import mainTemplate from './module.template-game2';
import statsBar from './module.template-statsbar';
import footer from './modutle.template-footer';
import gameState from './state';
import gameData from './module.game-data';

const game2Template = document.createDocumentFragment();

game2Template.appendChild(createTemplateElement(headerTemplate(gameState)));
game2Template.appendChild(createTemplateElement(mainTemplate(gameData[`game-2`])));
game2Template.appendChild(createTemplateElement(statsBar(gameState)));
game2Template.appendChild(createTemplateElement(footer()));

function game2Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value) {
      goNext();
    }
  });
}

export {game2Template, game2Ctrl};

import createTemplateElement from './module.template';
import headerTemplate from './module.template-header';
import mainTemplate from './module.template-game1';
import statsBar from './module.template-statsbar';
import footer from './modutle.template-footer';
import gameState from './state';
import gameData from './module.game-data';

const game1Template = document.createDocumentFragment();

game1Template.appendChild(createTemplateElement(headerTemplate(gameState)));
game1Template.appendChild(createTemplateElement(mainTemplate(gameData[`game-1`])));
game1Template.appendChild(createTemplateElement(statsBar(gameState)));
game1Template.appendChild(createTemplateElement(footer()));

function game1Ctrl(goNext) {
  document.forms[0].addEventListener(`change`, function () {
    if (document.forms[0].elements.question1.value && document.forms[0].elements.question2.value) {
      goNext();
    }
  });
}

export {game1Template, game1Ctrl};

import introPage from '../js/module.intro.js';
import greetingPage from '../js/module.greeting.js';
import rulesPage from '../js/module.rules.js';
import game1Page from '../js/module.game_1.js';

const main = document.querySelector(`.central`);

function screenRender(block, template) {
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }
  block.appendChild(template.cloneNode(true));
}

screenRender(main, game1Page);


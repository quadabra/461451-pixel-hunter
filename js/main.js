import renderTemplateElement from "../js/module.render";
import {introCtrl, introTemplate} from './templates/module.intro.js';
import {greetingCtrl, greetingTemplate} from './templates/module.greeting.js';
import {rulesCtrl, rulesTemplate} from './templates/module.rules.js';
import {game1Ctrl, game1Template} from './templates/module.game_1.js';
import {game2Ctrl, game2Template} from './templates/module.game_2.js';
import {game3Ctrl, game3Template} from './templates/module.game_3.js';
import {statsCtrl, statsTemplate} from './templates/module.stats';


const main = document.querySelector(`.central`);
const screens = [
  {
    template: introTemplate,
    ctrl: introCtrl
  },
  {
    template: greetingTemplate,
    ctrl: greetingCtrl
  },
  {
    template: rulesTemplate,
    ctrl: rulesCtrl
  },
  {
    template: game1Template,
    ctrl: game1Ctrl
  },
  {
    template: game2Template,
    ctrl: game2Ctrl
  },
  {
    template: game3Template,
    ctrl: game3Ctrl
  },
  {
    template: statsTemplate,
    ctrl: statsCtrl
  }];

function toNextPage(number) {
  return function () {
    renderTemplateElement(main, screens[number].template);
    screens[number].ctrl(toNextPage(number + 1));
  };
}

renderTemplateElement(main, screens[0].template);
screens[0].ctrl(toNextPage(1));

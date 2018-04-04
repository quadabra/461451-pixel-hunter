import {renderTemplateElement} from "../js/module.render";
import {introCtrl, introTemplate as intro} from '../js/module.intro.js';
import {greetingCtrl, greetingTemplate as greeting} from '../js/module.greeting.js';
import {rulesCtrl, rulesTemplate as rules} from '../js/module.rules.js';
import {game1Ctrl, game1Template as game1} from '../js/module.game_1.js';
import {game2Ctrl, game2Template as game2} from '../js/module.game_2.js';
import {game3Ctrl, game3Template as game3} from '../js/module.game_3.js';
import {statsCtrl, statsTemplate as stats} from '../js/module.stats';

const main = document.querySelector(`.central`);
const screens = [
  {
    template: intro,
    ctrl: introCtrl
  },
  {
    template: greeting,
    ctrl: greetingCtrl
  },
  {
    template: rules,
    ctrl: rulesCtrl
  },
  {
    template: game1,
    ctrl: game1Ctrl
  },
  {
    template: game2,
    ctrl: game2Ctrl
  },
  {
    template: game3,
    ctrl: game3Ctrl
  },
  {
    template: stats,
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

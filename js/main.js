import {renderTemplateElement} from "../js/module.render";
import {introCtrl, introTemplate as intro} from '../js/module.intro.js';
import {greetingCtrl, greetingTemplate as greeting} from '../js/module.greeting.js';
import {rulesCtrl, rulesTemplate as rules} from '../js/module.rules.js';
import game1 from '../js/module.game_1.js';
import game2 from '../js/module.game_2.js';
import game3 from '../js/module.game_3.js';
import stats from '../js/module.stats';

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
    ctrl: ''
  },
  {
    template: game2,
    ctrl: ''
  },
  {
    template: game3,
    ctrl: ''
  },
  {
    template: stats,
    ctrl: ''
  }];
let page = 0;

function toNextPage(number) {
  return function () {
    renderTemplateElement(main, screens[number].template);
    screens[number].ctrl(toNextPage(number + 1));
  }
}

renderTemplateElement(main, screens[page].template);
screens[page].ctrl(toNextPage(1));

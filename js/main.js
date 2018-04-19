import createTemplateElement from './module.template.js';
import renderTemplateElement from "./module.render";
import {introCtrl, introTemplate} from './templates/module.intro.js';
import {greetingCtrl, greetingTemplate} from './templates/module.greeting.js';
import {rulesCtrl, rulesTemplate} from './templates/module.rules.js';
import {game1Ctrl, game1Template} from './templates/module.game_1.js';
import {game2Ctrl, game2Template} from './templates/module.game_2.js';
import {game3Ctrl, game3Template} from './templates/module.game_3.js';
import {statsCtrl, statsTemplate} from './templates/module.stats';
import gameData from './module.game-data';
import gameState from './module.game-state';

const screens = [
  {
    template: introTemplate(gameData.introData),
    ctrl: introCtrl
  },
  {
    template: greetingTemplate(gameData.greetingData),
    ctrl: greetingCtrl
  },
  {
    template: rulesTemplate(gameData.rulesData),
    ctrl: rulesCtrl
  },
  {
    template: game1Template(gameData.gameScreensData[0]),
    ctrl: game1Ctrl
  },
  {
    template: game2Template(gameData.gameScreensData[1]),
    ctrl: game2Ctrl
  },
  {
    template: game3Template(gameData.gameScreensData[2]),
    ctrl: game3Ctrl
  },
  {
    template: game1Template(gameData.gameScreensData[3]),
    ctrl: game1Ctrl
  },
  {
    template: game2Template(gameData.gameScreensData[4]),
    ctrl: game2Ctrl
  },
  {
    template: game3Template(gameData.gameScreensData[5]),
    ctrl: game3Ctrl
  },
  {
    template: game1Template(gameData.gameScreensData[6]),
    ctrl: game1Ctrl
  },
  {
    template: game2Template(gameData.gameScreensData[7]),
    ctrl: game2Ctrl
  },
  {
    template: game3Template(gameData.gameScreensData[8]),
    ctrl: game3Ctrl
  },
  {
    template: game1Template(gameData.gameScreensData[9]),
    ctrl: game1Ctrl
  },
  {
    template: statsTemplate(gameState),
    ctrl: statsCtrl
  }];

function toNextPage(number) {
  return function () {
    renderTemplateElement(createTemplateElement(screens[number].template));
    screens[number].ctrl(toNextPage(number + 1));
  };
}

renderTemplateElement(createTemplateElement(screens[0].template));
screens[0].ctrl(toNextPage(1));

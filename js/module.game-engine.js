import createTemplateElement from './module.create-element';
import renderTemplateElement from './module.render';
import gameData from './module.game-data';
import gameState from "./module.game-state";
import {game1Ctrl, game1Template} from './templates/module.game_1';
import {statsCtrl, statsTemplate} from "./templates/module.stats";
import {game3Ctrl, game3Template} from "./templates/module.game_3";
import {game2Ctrl, game2Template} from "./templates/module.game_2";


const screens = [
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
  }];

function toNextPage(number) {
  return function () {
    if (number < screens.length) {
      renderTemplateElement(createTemplateElement(screens[number].template, gameState));
      screens[number].ctrl(toNextPage(number + 1));
    } else {
      renderTemplateElement(createTemplateElement(statsTemplate(gameState)));
      statsCtrl();
    }
  };
}

const gameStart = function () {
  renderTemplateElement(createTemplateElement(screens[0].template, gameState));
  screens[0].ctrl(toNextPage(1));
};

const saveAnswer = (answer) => {

};


const twoImages = (answers, data, callback) => {
  const answer = (answers[0] === data.tasks[0].type && answers[1] === data.tasks[1].type);
  callback(answer);
};
const oneImage = () => {
};
const findImage = () => {
};

const getAnswer = new Set([twoImages, oneImage, findImage]);

export default gameStart;

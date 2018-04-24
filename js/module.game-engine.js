import createTemplateElement from './module.create-element';
import renderTemplateElement from './module.render';
import gameData from './module.game-data';
import gameState from './module.game-state';
import gameTwoImages from './templates/module.game_1';
import gameOneImage from './templates/module.game_2';
import gameThreeImages from './templates/module.game_3';
import {statsCtrl, statsTemplate} from './templates/module.stats';

const gameTypes = [gameTwoImages, gameOneImage, gameThreeImages];

const screens = gameData.gameScreensData;
let currentScreen = 0;
const getProperScreen = (number) => {
  return gameTypes[screens[number].gameType];
};

const game = () => {
  if (currentScreen < screens.length && gameState.lives > 0) {
    renderTemplateElement(createTemplateElement(getProperScreen(currentScreen).gameTemplate(screens[currentScreen])));
    getProperScreen(currentScreen).gameCtrl(screens[currentScreen], game);
    currentScreen++;
  } else {
    renderTemplateElement(createTemplateElement(statsTemplate(gameState)));
    statsCtrl();
  }
};

export default game;

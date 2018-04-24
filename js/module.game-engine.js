import createTemplateElement from './module.create-element';
import renderTemplateElement from './module.render';
import gameData from './module.game-data';
import gameState from "./module.game-state";
import gameTwoImages from './templates/module.game_1';
import {statsCtrl, statsTemplate} from "./templates/module.stats";
import gameThreeImages, {game3Ctrl, game3Template} from "./templates/module.game_3";
import gameOneImage, {game2Ctrl, game2Template} from "./templates/module.game_2";

const gameTypes = [gameTwoImages, gameOneImage, gameThreeImages];

// const screens = [
//   {
//     template: game1Template(gameData.gameScreensData[0]),
//     ctrl: game1Ctrl
//   },
//   {
//     template: game2Template(gameData.gameScreensData[1]),
//     ctrl: game2Ctrl
//   },
//   {
//     template: game3Template(gameData.gameScreensData[2]),
//     ctrl: game3Ctrl
//   },
//   {
//     template: game1Template(gameData.gameScreensData[3]),
//     ctrl: game1Ctrl
//   },
//   {
//     template: game2Template(gameData.gameScreensData[4]),
//     ctrl: game2Ctrl
//   },
//   {
//     template: game3Template(gameData.gameScreensData[5]),
//     ctrl: game3Ctrl
//   },
//   {
//     template: game1Template(gameData.gameScreensData[6]),
//     ctrl: game1Ctrl
//   },
//   {
//     template: game2Template(gameData.gameScreensData[7]),
//     ctrl: game2Ctrl
//   },
//   {
//     template: game3Template(gameData.gameScreensData[8]),
//     ctrl: game3Ctrl
//   },
//   {
//     template: game1Template(gameData.gameScreensData[9]),
//     ctrl: game1Ctrl
//   }];


const screens = gameData.gameScreensData;
let currentScreen = 0;

const render = () => {
  renderTemplateElement(gameTypes[screens[currentScreen].gameType](screens[currentScreen], () => {}));
};

const gameStart = () => {
  renderTemplateElement(gameTypes[screens[currentScreen].gameType](screens[currentScreen]), () => {});
  // renderTemplateElement(gameTwoImages(gameData.gameScreensData[0], () => {}));
};

// function toNextPage(number) {
//   return function () {
//     if (number < screens.length) {
//       renderTemplateElement(createTemplateElement(screens[number].template));
//       screens[number].ctrl(toNextPage(number + 1), screens[number + 1].template);
//       gameState.screen++;
//     } else {
//       renderTemplateElement(createTemplateElement(statsTemplate(gameState)));
//       statsCtrl();
//     }
//   };
// }
//
// const gameStart = function () {
//   renderTemplateElement(createTemplateElement(screens[0].template, gameState));
//   screens[0].ctrl(toNextPage(1), screens[0].template);
//   gameState.screen = 0;
// };

const saveAnswer = (answer, index) => {
  if (answer === true) {
    gameState.stats[index] = `correct`;
  } else {
    gameState.stats[index] = `wrong`;
  }
};


const twoImages = (answers) => {
  const answer = (answers[0] === gameData.gameScreensData[gameState.screen].tasks[0].type &&
    answers[1] === gameData.gameScreensData[gameState.screen].tasks[1].type);
  saveAnswer(answer);
};
const oneImage = () => {
};
const findImage = () => {
};

const getAnswer = new Set([twoImages, oneImage, findImage]);
export {twoImages};
export default gameStart();

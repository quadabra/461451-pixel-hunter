import gameData from './module.game-data';
import gameState from './module.game-state';
import FirstGameType from './templates/template.game_1';
import SecondGameType from './templates/template.game_2';
import ThirdGameType from './templates/template.game_3';
import GameHeader from './templates/template.game-header';
import Application from './module.application';

export default class GameView {
  constructor(model) {
    this.model = gameState;
    this.round = this.model.current;
    this.task = gameData.gameScreensData[this.round];

    this.header = this.renderHeader();
    this.screen = this.renderScreen();

    this.game = document.createDocumentFragment();
    this.game.appendChild(this.header);
    this.game.appendChild(this.screen);
  }

  firstGameTypeCallback(answer0, answer1) {
    const question0 = gameData.gameScreensData[gameState.current].tasks[0].type;
    const question1 = gameData.gameScreensData[gameState.current].tasks[1].type;
    if (answer0 && answer1) {
      if (question0 === answer0 && question1 === answer1) {
        this.model.setStats(`correct`);
        this.goNextLvl();
      } else {
        this.model.setStats(`wrong`);
        this.model.setLives();
        this.goNextLvl();
      }
    }
  }

  secondGameTypeCallBack(answer) {
    const question0 = gameData.gameScreensData[gameState.current].tasks[0].type;
    if (question0 === answer) {
      this.model.setStats(`correct`);
      this.goNextLvl();
    } else {
      this.model.setStats(`wrong`);
      this.model.setLives();
      this.goNextLvl();
    }
  }

  thirdGameTypeCallback(answer) {
    let tasks = gameData.gameScreensData[gameState.current].tasks;
    if (tasks[answer].type === `paint`) {
      this.model.setStats(`correct`);
      this.goNextLvl();
    } else {
      this.model.setStats(`wrong`);
      this.model.setLives();
      this.goNextLvl();
    }
  }

  // showNextLvl(){}
  // showStats(){}
  // goNextLvl() {
  //   gameState.current++;
  //   if (gameState.current < 10 && gameState.lives > 0) {
  //     this.showNextLvl();
  //   } else {
  //     gameState.getResult();
  //     this.showStats();
  //   }
  // }

  goNextLvl() {
    this.model.current++;
    if (this.model.current < 10 && this.model.lives > 0) {
      Application.startGame();
    } else {
      this.model.getResult();
      Application.showResults();
    }
  }

  renderHeader() {
    return new GameHeader(this.model).element;
  }

  firstTypeGame() {
    const task = new FirstGameType(this.task);
    task.onAnswer = this.firstGameTypeCallback;
    return task.element;
  }

  secondTypeGame() {
    const task = new SecondGameType(this.task);
    task.onAnswer = this.secondGameTypeCallBack;
    return task.element;
  }

  thirdTypeGame() {
    const task = new ThirdGameType(this.task);
    task.onAnswer = this.thirdGameTypeCallback;
    return task.element;
  }

  renderScreen() {
    switch (this.task.gameType) {
      case gameData.gameType.TWO_IMAGES:
        return this.firstTypeGame();
      case gameData.gameType.ONE_IMAGE:
        return this.secondTypeGame();
      case gameData.gameType.FIND_IMAGE:
        return this.thirdTypeGame();
      default:
        throw new Error(`Unknown game type`);
    }
  }

  startLevel() {
    return this.game;
  }
}

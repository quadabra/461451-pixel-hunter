import gameData from './module.game-data';
import gameState from './module.game-state';
import FirstGameType from './templates/template.game_1';
import SecondGameType from './templates/template.game_2';
import ThirdGameType from './templates/template.game_3';
import BackView from './templates/components/component.go-back';
import TimerView from './templates/components/component.timer';
import LivesView from './templates/components/component.lives';
import Application from './module.application';

export default class GameView {
  constructor() {
    this.round = gameState.current;
    this.task = gameData.gameScreensData[this.round];

    this.header = GameView.renderHeader();
    this.screen = this.renderScreen();

    this.game = document.createDocumentFragment();
    this.game.appendChild(this.header);
    this.game.appendChild(this.screen);
  }

  static firstGameTypeCallback(answer0, answer1) {
    const question0 = gameData.gameScreensData[gameState.current].tasks[0].type;
    const question1 = gameData.gameScreensData[gameState.current].tasks[1].type;
    if (answer0 && answer1) {
      if (question0 === answer0 && question1 === answer1) {
        gameState.setStats(`correct`);
        GameView.goNextLvl();
      } else {
        gameState.setStats(`wrong`);
        gameState.setLives();
        GameView.goNextLvl();
      }
    }
  }

  static secondGameTypeCallBack(answer) {
    const question0 = gameData.gameScreensData[gameState.current].tasks[0].type;
    if (question0 === answer) {
      gameState.setStats(`correct`);
      GameView.goNextLvl();
    } else {
      gameState.setStats(`wrong`);
      gameState.setLives();
      GameView.goNextLvl();
    }
  }

  static thirdGameTypeCallback(answer) {
    let tasks = gameData.gameScreensData[gameState.current].tasks;
    if (tasks[answer].type === `paint`) {
      gameState.setStats(`correct`);
      GameView.goNextLvl();
    } else {
      gameState.setStats(`wrong`);
      gameState.setLives();
      GameView.goNextLvl();
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

  static goNextLvl() {
    gameState.current++;
    if (gameState.current < 10 && gameState.lives > 0) {
      Application.startGame();
    } else {
      gameState.getResult();
      Application.showResults();
    }
  }

  static renderHeader() {
    const header = document.createElement(`header`);
    header.classList.add(`header`);
    header.appendChild(new BackView().element);
    header.appendChild(new TimerView().element);
    header.appendChild(new LivesView().element);
    return header;
  }

  firstTypeGame() {
    const task = new FirstGameType(this.task);
    task.onAnswer = GameView.firstGameTypeCallback;
    return task.element;
  }

  secondTypeGame() {
    const task = new SecondGameType(this.task);
    task.onAnswer = GameView.secondGameTypeCallBack;
    return task.element;
  }

  thirdTypeGame() {
    const task = new ThirdGameType(this.task);
    task.onAnswer = GameView.thirdGameTypeCallback;
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

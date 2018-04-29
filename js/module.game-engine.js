import gameData from './module.game-data';
import gameState from './module.game-state';
import FirstGameType from './templates/template.game_1';
import SecondGameType from './templates/template.game_2';
import ThirdGameType from './templates/template.game_3';
import BackView from './templates/components/component.go-back';
import TimerView from './templates/components/component.timer';
import LivesView from './templates/components/component.lives';
import Application from './module.main-apps';

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

  static firstGameTypeCallback() {
    const answer0 = document.forms[0].elements.question1.value;
    const answer1 = document.forms[0].elements.question2.value;
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

  static secondGameTypeCallBack() {
    const answer0 = document.forms[0].elements.question1.value;
    const question0 = gameData.gameScreensData[gameState.current].tasks[0].type;
    if (document.forms[0].elements.question1.value) {
      if (question0 === answer0) {
        gameState.setStats(`correct`);
        GameView.goNextLvl();
      } else {
        gameState.setStats(`wrong`);
        gameState.setLives();
        GameView.goNextLvl();
      }
    }
  }

  static thirdGameTypeCallback(evt) {
    evt.stopPropagation();
    let gameOption = document.querySelectorAll(`.game__option`);
    for (let i = 0; i < gameOption.length; i++) {
      let question = gameData.gameScreensData[gameState.current].tasks[i].type;
      if (gameOption[i] === evt.target) {
        if (question === `paint`) {
          gameState.setStats(`correct`);
          GameView.goNextLvl();
        } else {
          gameState.setStats(`wrong`);
          gameState.setLives();
          GameView.goNextLvl();
        }
      }
    }
  }

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

  renderScreen() {
    switch (this.task.gameType) {
      case gameData.gameType.TWO_IMAGES:
        return new FirstGameType(this.task, GameView.firstGameTypeCallback).element;
      case gameData.gameType.ONE_IMAGE:
        return new SecondGameType(this.task, GameView.secondGameTypeCallBack).element;
      case gameData.gameType.FIND_IMAGE:
        return new ThirdGameType(this.task, GameView.thirdGameTypeCallback).element;
      default:
        throw new Error('Unknown game type');
    }
  }

  startLevel() {
    return this.game;
  }
}

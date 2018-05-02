import gameData from './module.game-data';
import FirstGameType from './templates/template.game_1';
import SecondGameType from './templates/template.game_2';
import ThirdGameType from './templates/template.game_3';
import HeaderView from './templates/template.game-header';
import Application from './module.application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.round = this.model.current;
    this.task = gameData.gameScreensData[this.round];

    this.header = this.renderHeader();
    this.screen = this.renderScreen();

    this.game = document.createElement(`div`);
    this.game.appendChild(this.header);
    this.game.appendChild(this.screen);
  }

  firstGameTypeCallback(answer0, answer1) {
    const question0 = this.task.tasks[0].type;
    const question1 = this.task.tasks[1].type;
    if (answer0 && answer1) {
      if (question0 === answer0 && question1 === answer1) {
        this.model.answer(`correct`);
        this.goNextLvl();
      } else {
        this.model.answer(`wrong`);
        this.goNextLvl();
      }
    }
  }

  secondGameTypeCallBack(answer) {
    const question0 = this.task.tasks[0].type;
    if (question0 === answer) {
      this.model.answer(`correct`);
      this.goNextLvl();
    } else {
      this.model.answer(`wrong`);
      this.goNextLvl();
    }
  }

  thirdGameTypeCallback(answer) {
    let tasks = this.task.tasks;
    if (tasks[answer].type === `paint`) {
      this.model.answer(`correct`);
      this.goNextLvl();
    } else {
      this.model.answer(`wrong`);
      this.goNextLvl();
    }
  }

  goNextLvl() {
    this.round++;
    if (this.model.current < 10 && this.model.lives > 0) {
      this.updateGame();
    } else {
      this.model.calcResults();
      Application.showResults();
    }
  }

  renderHeader() {
    return new HeaderView(this.model).element;
  }

  updateHeader() {
    const header = this.renderHeader();
    this.game.replaceChild(header, this.header);
    this.header = header;
  }

  updateGame() {
    this.updateHeader();
    const content = this.renderScreen();
    this.game.replaceChild(content, this.screen);
    this.screen = content;
  }

  firstTypeGame() {
    const task = new FirstGameType(this.task);
    task.onAnswer = this.firstGameTypeCallback.bind(this);
    return task.element;
  }

  secondTypeGame() {
    const task = new SecondGameType(this.task);
    task.onAnswer = this.secondGameTypeCallBack.bind(this);
    return task.element;
  }

  thirdTypeGame() {
    const task = new ThirdGameType(this.task);
    task.onAnswer = this.thirdGameTypeCallback.bind(this);
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

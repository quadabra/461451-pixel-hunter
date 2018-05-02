import gameData from './module.game-data';
import FirstGameType from './templates/template.game_1';
import SecondGameType from './templates/template.game_2';
import ThirdGameType from './templates/template.game_3';
import HeaderView from './templates/template.game-header';
import Application from './module.application';
import Timer from './module.game-timer';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.task = this.currentTask();
    this.timer = new Timer();
    this.header = this.renderHeader();
    this.screen = this.renderScreen();

    this.game = document.createElement(`div`);
    this.game.appendChild(this.header);
    this.game.appendChild(this.screen);
  }

  firstGameTypeCallback(answer0, answer1) {
    this.timer.stop();
    const question0 = this.task.tasks[0].type;
    const question1 = this.task.tasks[1].type;
    if (answer0 && answer1) {
      if (question0 === answer0 && question1 === answer1) {
        this.model.answer(this.makeAnswer(gameData.answerTypes.CORRECT, this.timer.getTime()));
        this.goNextLvl();
      } else {
        this.model.answer(gameData.answerTypes.WRONG);
        this.goNextLvl();
      }
    }
  }

  secondGameTypeCallBack(answer) {
    this.timer.stop();
    const question0 = this.task.tasks[0].type;
    if (question0 === answer) {
      this.model.answer(this.makeAnswer(gameData.answerTypes.CORRECT, this.timer.getTime()));
      this.goNextLvl();
    } else {
      this.model.answer(gameData.answerTypes.WRONG);
      this.goNextLvl();
    }
  }

  thirdGameTypeCallback(answer) {
    this.timer.stop();
    let tasks = this.task.tasks;
    if (tasks[answer].type === gameData.imageTypes.PAINT) {
      this.model.answer(this.makeAnswer(gameData.answerTypes.CORRECT, this.timer.getTime()));
      this.goNextLvl();
    } else {
      this.model.answer(gameData.answerTypes.WRONG);
      this.goNextLvl();
    }
  }

  makeAnswer(type, time) {
    if (type = gameData.answerTypes.CORRECT) {
      switch (time) {
        case time > 20:
          return gameData.answerTypes.FAST;
        case time < 10:
          return gameData.answerTypes.SLOW;
        default:
          return type;
      }
    } else return gameData.answerTypes.WRONG;
  }

  goNextLvl() {
    this.model.nextRound();
    this.currentTask();
    if (this.model.canContinue()) {
      this.updateGame();
      this.timerStart();
    } else {
      this.model.calcResults();
      Application.showResults(this.model.results());
    }
  }

  renderHeader() {
    return new HeaderView(this.model, this.reset.bind(this)).element;
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

  timeOverCallback() {
    this.model.answer(`wrong`);
    this.goNextLvl();
  }

  currentTask() {
    this.task = gameData.gameScreensData[this.model.current];
    this.task.state = this.model.statsBar();
    return this.task;
  }

  timerStart() {
    this.timer.configure(this.model.timeStart(), this.game.querySelector('.game__timer'), this.timeOverCallback.bind(this)).start();
  }

  reset() {
    Application.showGreeting();
  }

  startLevel() {
    this.timerStart();
    return this.game;
  }
}

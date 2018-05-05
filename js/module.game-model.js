import gameData from './module.game-data';

const answerTypes = gameData.answerTypes;

export default class GameModel {
  constructor(user) {
    this.user = user;
    this.init();
  }

  calcResults() {
    this._result.text = (this.lives >= 0) ? `Победа!` : `FAIL`;
    this._answers.forEach((it) => {
      switch (it) {
        case answerTypes.CORRECT:
          this._result.answerPoints += gameData.answerPrices.CORRECT;
          break;
        case answerTypes.FAST:
          this._result.answerPoints += gameData.answerPrices.CORRECT;
          this._result.speedPoints += gameData.answerPrices.FAST;
          break;
        case answerTypes.SLOW:
          this._result.answerPoints += gameData.answerPrices.CORRECT;
          this._result.slowPoints += gameData.answerPrices.SLOW;
          break;
        case answerTypes.WRONG:
          this._result.answerPoints += 0;
          break;
        default:
          throw new Error(`Unknown answer type`);
      }
    });
    this._result.lives = (this.lives >= 0) ? (this.lives) : (0);
    this._result.livesPoints = this._result.lives * gameData.answerPrices.LIVES;
    this._result.totalPoints = this._result.answerPoints + this._result.livesPoints + this._result.speedPoints + this._result.slowPoints;
    this._result.name = this.user;
    this._result.stats = this.statsBarData();
    this._result.date = new Date();
  }

  statsBarData() {
    let answers = new Array(10);
    for (let i = 0; i < answers.length; i++) {
      answers[i] = (this._answers[i]) ? this._answers[i] : `unknown`;
    }
    return answers;
  }

  results() {
    return this._result;
  }

  nextRound() {
    this.current++;
  }

  canContinue() {
    return (this.current < gameData.gameScreensData.length && this.lives >= this.die);
  }

  timeStart() {
    return this.timer;
  }

  init() {
    this.timer = gameData.initData.TIMER;
    this.current = gameData.initData.START_SCREEN;
    this.lives = gameData.initData.LIVES;
    this.die = gameData.initData.DIE;
    this._answers = [];
    this._result = {};
    this._result.text = ``;
    this._result.stats = [];
    this._result.answerPoints = 0;
    this._result.speedPoints = 0;
    this._result.livesPoints = 0;
    this._result.slowPoints = 0;
    this._result.totalPoints = 0;
  }
  answer(answer) {
    this._answers.push(answer);
    if (answer === answerTypes.WRONG) {
      this.lives--;
    }
  }
}

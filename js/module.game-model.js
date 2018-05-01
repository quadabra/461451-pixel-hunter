const answerTypes = {
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`
};

export default class GameModel {
  constructor(user) {
    this.user = user;
    this.init();
  }

  get result() {
    this._result.text = (this._state.lives > 0) ? `Победа!` : `FAIL`;
    this._state.answers.forEach((it) => {
      switch (it) {
        case answerTypes.CORRECT:
          this._result.answerPoints += 100;
          break;
        case answerTypes.FAST:
          this._result.answerPoints += 100;
          this._result.speedPoints += 50;
          break;
        case answerTypes.SLOW:
          this._result.answerPoints += 100;
          this._result.slowPoints += 50;
          break;
        case answerTypes.WRONG:
          this._result.answerPoints += 0;
          break;
        default:
          throw new Error(`Unknown answer type`)
      }
    });
    this._result.livesPoints = this._state.lives * 50;
    this._result.totalPoints = this._result.answerPoints + this._result.livesPoints + this._result.speedPoints - this._result.slowPoints;
  }

  get stats() {
    let answers = new Array(10);
    for (let i = 0; i < answers.length; i++) {
      answers[i] = (this._state.answers[i]) ? this._state.answers[i] : `unknown`;
    }
    return answers;
  }

  init() {
    this.screen = 0;
    this._state = {};
    this._state.answers = [];
    this._state.lives = 3;
    this._result = {};
    this._result.text = ``;
    this._result.answerPoints = 0;
    this._result.speedPoints = 0;
    this._result.livesPoints = 0;
    this._result.slowPoints = 0;
    this._result.totalPoints = 0;
  }
  set answer(answer) {
    this._state.answers.push(answer);
  }
  wrongAnswer() {
    this._state.lives--;
  }
}

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

  calcResults() {
    this.result.text = (this._state.lives > 0) ? `Победа!` : `FAIL`;
    this.answers.forEach((it) => {
      switch (it) {
        case answerTypes.CORRECT:
          this.result.answerPoints += 100;
          break;
        case answerTypes.FAST:
          this.result.answerPoints += 100;
          this.result.speedPoints += 50;
          break;
        case answerTypes.SLOW:
          this.result.answerPoints += 100;
          this.result.slowPoints += 50;
          break;
        case answerTypes.WRONG:
          this.result.answerPoints += 0;
          break;
        default:
          throw new Error(`Unknown answer type`)
      }
    });
    this.result.livesPoints = this.lives * 50;
    this.result.totalPoints = this.result.answerPoints + this.result.livesPoints + this.result.speedPoints - this.result.slowPoints;
  }

  get stats() {
    let answers = new Array(10);
    for (let i = 0; i < answers.length; i++) {
      answers[i] = (this.answers[i]) ? this.answers[i] : `unknown`;
    }
    return answers;
  }

  get results() {
    return this.result;
  }

  init() {
    this.timer = 30;
    this.current = 0;
    this.lives = 3;
    this.answers = [];
    this.result = {};
    this.result.text = ``;
    this.result.answerPoints = 0;
    this.result.speedPoints = 0;
    this.result.livesPoints = 0;
    this.result.slowPoints = 0;
    this.result.totalPoints = 0;
  }
  set answer(answer) {
    this.answers.push(answer);
  }
  wrongAnswer() {
    this.lives--;
  }
}

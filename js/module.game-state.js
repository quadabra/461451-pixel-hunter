const state = {
  timer: `NN`,
  lives: 3,
  stats: [],
  result: {
    text: ``,
    answerPoints: 0,
    speedPoints: 0,
    livesPoints: 0,
    slowPoints: 0,
    totalPoints: 0
  },
  getResult() {
    this.result.text = (this.lives > 0) ? `Победа!` : `FAIL`;
    this.stats.forEach((it) => {
      if (it === `correct`) {
        this.result.answerPoints += 100;
      }
    });
    this.result.livesPoints = this.lives * 50;
    this.result.totalPoints = this.result.answerPoints + this.result.livesPoints;
  },
  getStats() {
    let answers = new Array(10);
    for (let i = 0; i < answers.length; i++) {
      answers[i] = (this.stats[i]) ? this.stats[i] : `unknown`;
    }
    return answers;
  },
  setStats(answer) {
    this.stats.push(answer);
  },
  initLives() {
    this.lives = 3;
  },
  setLives() {
    this.lives--;
  }
};

export default state;

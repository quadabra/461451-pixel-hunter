const state = {
  timer: `NN`,
  lives: 3,
  stats: [],
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

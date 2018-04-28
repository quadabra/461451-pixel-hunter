const gameData = {};

const gameType = {
  TWO_IMAGES: 0,
  ONE_IMAGE: 1,
  FIND_IMAGE: 2
};

// const answerType = {
//   WRONG: 0,
//   CORRECT: 1,
//   SLOW: 2,
//   FAST: 3,
//   UNKNOWN: 4
// };
//
// const answerPrice = {
//   CORRECT: 100,
//   FAST: 50,
//   SLOW: -50
// };

const imageType = {
  PAINT: `paint`,
  PHOTO: `photo`
};

// const gameText = new Set([
//   `Угадайте для каждого изображения фото или рисунок?`,
//   `Угадай, фото или рисунок?`,
//   `Найдите рисунок среди изображений`]);

gameData.stats = {
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

gameData.gameScreensData = [
  {
    gameType: gameType.TWO_IMAGES,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    tasks: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      name: `question2`,
      alt: `Option 2`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.ONE_IMAGE,
    text: `Угадай, фото или рисунок?`,
    tasks: [{
      image: `https://k42.kn3.net/D2F0370D6.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_IMAGE,
    text: `Найдите рисунок среди изображений`,
    tasks: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://i.imgur.com/DiHM5Zb.jpg`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      alt: `Option 1`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.TWO_IMAGES,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    tasks: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      name: `question2`,
      alt: `Option 2`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.ONE_IMAGE,
    text: `Угадай, фото или рисунок?`,
    tasks: [{
      image: `https://k42.kn3.net/D2F0370D6.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_IMAGE,
    text: `Найдите рисунок среди изображений`,
    tasks: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://i.imgur.com/DiHM5Zb.jpg`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      alt: `Option 1`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.TWO_IMAGES,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    tasks: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      name: `question2`,
      alt: `Option 2`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.ONE_IMAGE,
    text: `Угадай, фото или рисунок?`,
    tasks: [{
      image: `https://k42.kn3.net/D2F0370D6.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_IMAGE,
    text: `Найдите рисунок среди изображений`,
    tasks: [{
      image: `http://i.imgur.com/1KegWPz.jpg`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://i.imgur.com/DiHM5Zb.jpg`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k42.kn3.net/CF42609C8.jpg`,
      alt: `Option 1`,
      type: imageType.PAINT
    }]
  },
  {
    gameType: gameType.TWO_IMAGES,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    tasks: [{
      image: `http://i.imgur.com/DKR1HtB.jpg`,
      name: `question1`,
      alt: `Option 1`,
      type: imageType.PHOTO
    },
    {
      image: `https://k32.kn3.net/5C7060EC5.jpg`,
      name: `question2`,
      alt: `Option 2`,
      type: imageType.PAINT
    }]
  }
];


gameData.introData = {
  text: `<sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`,
};

gameData.greetingData = {
  title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
  text: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
};

gameData.rulesData = {
  title: `Правила`,
  text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`
};

gameData.statsData = {

};

export default gameData;
